import { inheritSchema, mergeCategories, resolveCategory, annotateSchema } from './helpers';
import { specialtyRegistry, SPECIALTY_DISPLAY_ORDER } from './registry';
import { DEFAULT_CORE_FOR_NEW_SPECIALTIES, DEFAULT_CORE_TRAILER } from './clinicalCore';
import { fieldLibrary } from './fieldLibrary';
import { subspecialtySchemas, getSubspecialtyKeyFromFocus } from './conditionalModules';

function attachRegistryMeta(schema, registryEntry) {
  if (!registryEntry) return schema;
  return {
    ...schema,
    icon: schema.icon || registryEntry.icon,
    description: schema.description || registryEntry.description,
    subspecialties: schema.subspecialties || registryEntry.subspecialties || [],
    supportedProcedures: schema.supportedProcedures || registryEntry.supportedProcedures || [],
    supportedInvestigations: schema.supportedInvestigations || registryEntry.supportedInvestigations || [],
    workflows: schema.workflows || registryEntry.workflows || [],
    conditionalModules: schema.conditionalModules || registryEntry.conditionalModules || []
  };
}

function resolveSchemaFields(schema) {
  return {
    ...schema,
    categories: (schema.categories || []).map((cat) => resolveCategory(cat, fieldLibrary))
  };
}

/**
 * Ophthalmology must remain byte-for-byte in category/section/field structure.
 * Other existing specialties keep their original categories and receive additive modules.
 * Brand-new specialties start from clinical core + specialty modules.
 */
export function composeSpecialtySchemas({ existing = {}, additive = {}, created = {}, lockedIds = ['Ophthalmology'] } = {}) {
  const composed = {};
  const orderedIds = ['Ophthalmology', ...SPECIALTY_DISPLAY_ORDER.filter((id) => id !== 'Ophthalmology')];

  orderedIds.forEach((id) => {
    const registryEntry = specialtyRegistry[id];
    const existingSchema = existing[id];
    const extraCats = additive[id]?.categories || [];
    const createdSchema = created[id];

    if (lockedIds.includes(id) && existingSchema) {
      composed[id] = attachRegistryMeta({ ...existingSchema }, registryEntry);
      return;
    }

    if (existingSchema) {
      const merged = {
        ...existingSchema,
        categories: mergeCategories(existingSchema.categories || [], extraCats)
      };
      composed[id] = annotateSchema(
        resolveSchemaFields(attachRegistryMeta(merged, registryEntry)),
        { specialty: id, scope: 'specialty' }
      );
      return;
    }

    if (createdSchema) {
      const withCore = {
        ...createdSchema,
        categories: mergeCategories(
          [...DEFAULT_CORE_FOR_NEW_SPECIALTIES, ...(createdSchema.categories || []), ...DEFAULT_CORE_TRAILER],
          extraCats
        )
      };
      composed[id] = annotateSchema(
        resolveSchemaFields(attachRegistryMeta(withCore, registryEntry)),
        { specialty: id, scope: 'specialty' }
      );
      return;
    }

    if (registryEntry) {
      composed[id] = annotateSchema(
        resolveSchemaFields(attachRegistryMeta({
          id,
          name: registryEntry.name,
          categories: mergeCategories([...DEFAULT_CORE_FOR_NEW_SPECIALTIES, ...DEFAULT_CORE_TRAILER], extraCats)
        }, registryEntry)),
        { specialty: id, scope: 'specialty' }
      );
    }
  });

  // Preserve any existing specialty not listed in the registry (safety).
  Object.keys(existing).forEach((id) => {
    if (!composed[id]) composed[id] = existing[id];
  });

  return composed;
}

/**
 * Resolve a documentation schema for the selected specialty.
 * Ophthalmology never receives extra categories from clinical focus (UI lock).
 * Other specialties may inherit subspecialty add-on categories.
 */
export function getResolvedSpecialtySchema(schemas, specialtyId, { clinicalFocus, subspecialtyKey, lockSpecialtyIds = ['Ophthalmology'] } = {}) {
  const base = schemas[specialtyId] || schemas.General || Object.values(schemas)[0];
  if (!base) return null;
  if (lockSpecialtyIds.includes(base.id || specialtyId)) return base;

  const key = subspecialtyKey || getSubspecialtyKeyFromFocus(clinicalFocus);
  const child = key ? subspecialtySchemas[key] : null;
  if (!child || (child.extends && child.extends !== (base.id || specialtyId))) return base;

  return inheritSchema(base, child);
}

export { specialtyRegistry, SPECIALTY_DISPLAY_ORDER, fieldLibrary, subspecialtySchemas };
