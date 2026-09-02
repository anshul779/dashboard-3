/** Schema helpers for the universal specialty documentation engine. */

export function field(id, label, type = 'text', extra = {}) {
  return { id, label, type, ...extra };
}

export function section(id, name, fields = [], extra = {}) {
  return { id, name, defaultVisible: extra.defaultVisible ?? true, fields, ...extra };
}

export function category(id, name, sections = [], extra = {}) {
  return { id, name, defaultVisible: extra.defaultVisible ?? true, sections, ...extra };
}

export function matchesValue(actual, expected) {
  if (Array.isArray(actual)) {
    if (Array.isArray(expected)) return expected.some((v) => actual.includes(v));
    return actual.includes(expected);
  }
  if (Array.isArray(expected)) return expected.includes(actual);
  return actual === expected;
}

export function evaluateDependsOn(dependsOn, data = {}) {
  if (!dependsOn) return true;
  if (typeof dependsOn === 'function') {
    try {
      return !!dependsOn(data);
    } catch {
      return false;
    }
  }
  if (Array.isArray(dependsOn)) {
    return dependsOn.every((rule) => evaluateDependsOn(rule, data));
  }
  if (typeof dependsOn === 'object') {
    const val = data[dependsOn.field];
    if (dependsOn.gt != null) return Number(val) > Number(dependsOn.gt);
    if (dependsOn.gte != null) return Number(val) >= Number(dependsOn.gte);
    if (dependsOn.lt != null) return Number(val) < Number(dependsOn.lt);
    if (dependsOn.lte != null) return Number(val) <= Number(dependsOn.lte);
    if (dependsOn.includes != null) {
      if (Array.isArray(val)) return val.includes(dependsOn.includes);
      return String(val ?? '').includes(dependsOn.includes);
    }
    if (dependsOn.values) return matchesValue(val, dependsOn.values);
    if (Object.prototype.hasOwnProperty.call(dependsOn, 'value')) {
      return matchesValue(val, dependsOn.value);
    }
    if (dependsOn.notEmpty) {
      if (Array.isArray(val)) return val.length > 0;
      return val !== undefined && val !== null && val !== '' && val !== 'Select' && val !== 'None';
    }
  }
  return true;
}

export function isNodeVisible(node, data = {}) {
  if (!node) return false;
  if (node.dependsOn) return evaluateDependsOn(node.dependsOn, data);
  return true;
}

export function resolveField(def, fieldLibrary = {}) {
  if (!def) return def;
  if (def.ref && fieldLibrary[def.ref]) {
    const base = fieldLibrary[def.ref];
    return { ...base, ...def, id: def.id || base.id, label: def.label || base.label, type: def.type || base.type };
  }
  return def;
}

export function resolveSection(sec, fieldLibrary = {}) {
  if (!sec) return sec;
  return {
    ...sec,
    fields: (sec.fields || []).map((f) => resolveField(f, fieldLibrary))
  };
}

export function resolveCategory(cat, fieldLibrary = {}) {
  if (!cat) return cat;
  return {
    ...cat,
    sections: (cat.sections || []).map((sec) => resolveSection(sec, fieldLibrary))
  };
}

export function mergeCategories(base = [], extras = []) {
  const byId = new Map();
  const order = [];
  [...base, ...extras].forEach((cat) => {
    if (!cat?.id) return;
    if (!byId.has(cat.id)) {
      byId.set(cat.id, { ...cat, sections: [...(cat.sections || [])] });
      order.push(cat.id);
      return;
    }
    const current = byId.get(cat.id);
    const sectionIds = new Set((current.sections || []).map((s) => s.id));
    (cat.sections || []).forEach((sec) => {
      if (!sec?.id || sectionIds.has(sec.id)) return;
      current.sections.push(sec);
      sectionIds.add(sec.id);
    });
    byId.set(cat.id, { ...current, ...cat, sections: current.sections });
  });
  return order.map((id) => byId.get(id));
}

export function inheritSchema(parent, child) {
  if (!parent) return child;
  if (!child) return parent;
  return {
    ...parent,
    ...child,
    id: child.id || parent.id,
    name: child.name || parent.name,
    extends: child.extends || parent.id,
    categories: mergeCategories(parent.categories || [], child.categories || []),
    workflows: child.workflows || parent.workflows,
    subspecialties: [...new Set([...(parent.subspecialties || []), ...(child.subspecialties || [])])],
    supportedProcedures: [...new Set([...(parent.supportedProcedures || []), ...(child.supportedProcedures || [])])],
    supportedInvestigations: [...new Set([...(parent.supportedInvestigations || []), ...(child.supportedInvestigations || [])])]
  };
}

export function annotateSchema(schema, { specialty, scope = 'specialty' } = {}) {
  if (!schema) return schema;
  return {
    ...schema,
    categories: (schema.categories || []).map((cat) => ({
      ...cat,
      specialty: cat.specialty || specialty,
      sections: (cat.sections || []).map((sec) => ({
        ...sec,
        fields: (sec.fields || []).map((f) => ({
          ...f,
          specialty: f.specialty || specialty,
          scope: f.scope || cat.scope || scope
        }))
      }))
    }))
  };
}
