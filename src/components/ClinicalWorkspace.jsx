import React, { useRef, useEffect, useMemo, memo, useCallback } from 'react';
import * as Icons from 'lucide-react';
import { evaluateDependsOn } from '../data/clinicalEngine/helpers';
import AddMoreFieldsModal from './AddMoreFieldsModal';

const CORE_FIELD_COUNT = 3;

export default function ClinicalWorkspace({
  schema,
  patientData,
  onChangeField,
  activeSection,
  onSelectSection,
  notify,
  searchQuery,
  pinnedFields = [],
  onOpenFieldLibrary,
  clinicalFocus
}) {
  const sectionRefs = useRef({});

  const [prioritySections, setPrioritySections] = React.useState([]);

  // State: hidden fields per section (keyed by section ID, values are arrays of field IDs)
  const [hiddenFieldsMap, setHiddenFieldsMap] = React.useState({});

  // State: which section's "Add More Fields" modal is open
  const [modalSectionId, setModalSectionId] = React.useState(null);
  const [modalSectionName, setModalSectionName] = React.useState('');

  // Initialize hidden fields when schema changes
  useEffect(() => {
    if (!schema) return;
    const initialHidden = {};
    (schema.categories || []).forEach((cat) => {
      (cat.sections || []).forEach((sec) => {
        const fields = sec.fields || [];
        if (fields.length > CORE_FIELD_COUNT) {
          initialHidden[sec.id] = fields.slice(CORE_FIELD_COUNT).map((f) => f.id);
        } else {
          initialHidden[sec.id] = [];
        }
      });
    });
    setHiddenFieldsMap(initialHidden);
  }, [schema]);

  // Add a field from hidden to visible
  const handleAddField = useCallback((sectionId, fieldId) => {
    setHiddenFieldsMap((prev) => ({
      ...prev,
      [sectionId]: (prev[sectionId] || []).filter((id) => id !== fieldId)
    }));
  }, []);

  // Open the "Add More Fields" modal for a section
  const openAddMoreFields = useCallback((sectionId, sectionName) => {
    setModalSectionId(sectionId);
    setModalSectionName(sectionName);
  }, []);

  // Close the modal
  const closeAddMoreFields = useCallback(() => {
    setModalSectionId(null);
    setModalSectionName('');
  }, []);

  const togglePrioritySection = (secId) => {
    setPrioritySections((prev) => {
      const isPriority = prev.includes(secId);
      const next = isPriority ? prev.filter((id) => id !== secId) : [...prev, secId];
      if (notify) notify(isPriority ? 'Removed from priority records' : 'Marked clinical record as priority');
      return next;
    });
  };

  // Scroll to active section when selected from sidebar
  useEffect(() => {
    if (activeSection && sectionRefs.current[activeSection]) {
      sectionRefs.current[activeSection].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeSection]);

  if (!schema) return null;

  const query = (searchQuery || '').trim().toLowerCase();
  const safePatientData = patientData || {};

  // Compute total clinical fields and completion ratio (only visible fields)
  let totalVisibleFields = 0;
  let filledVisibleFields = 0;

  (schema.categories || []).forEach((cat) => {
    if (cat.dependsOn && !evaluateDependsOn(cat.dependsOn, safePatientData)) return;
    (cat.sections || []).forEach((sec) => {
      (sec.fields || []).forEach((f) => {
        // Skip hidden fields for completion tracking
        if ((hiddenFieldsMap[sec.id] || []).includes(f.id)) return;
        totalVisibleFields++;
        const val = safePatientData[f.id];
        if (val !== undefined && val !== null && val !== '' && val !== 'Select' && val !== 'None' && (Array.isArray(val) ? val.length > 0 : true)) {
          filledVisibleFields++;
        }
      });
    });
  });

  const completionPercent = totalVisibleFields > 0 ? Math.round((filledVisibleFields / totalVisibleFields) * 100) : 0;

  // Custom Eye Exam Widgets Renderer
  const renderCustomWidget = (sectionId, fields) => {
    // 1. VISUAL ACUITY WIDGET
    if (sectionId === 'va_assessment') {
      return (
        <div className="custom-widget va-widget">
          <div className="widget-header">
            <h4><Icons.Eye size={16} /> Distance & Near Visual Acuity Grid</h4>
            <span className="widget-tag">OD / OS Comparison</span>
          </div>
          <div className="eye-comparison-grid">
            <div className="eye-column od-column">
              <div className="eye-header">RIGHT EYE (OD)</div>
              <div className="eye-field-row">
                <label>Unaided VA</label>
                <select value={patientData.va_unaided_od || ''} onChange={(e) => onChangeField('va_unaided_od', e.target.value)}>
                  <option value="">Select VA</option>
                  {['6/6', '6/9', '6/12', '6/18', '6/24', '6/36', '6/60', '3/60', '1/60', 'FC 1m', 'HMC', 'PL+', 'PL-'].map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div className="eye-field-row">
                <label>Best Corrected (BCVA)</label>
                <select value={patientData.va_bcva_od || ''} onChange={(e) => onChangeField('va_bcva_od', e.target.value)}>
                  <option value="">Select BCVA</option>
                  {['6/6', '6/9', '6/12', '6/18', '6/24', '6/36', '6/60', '3/60'].map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div className="eye-field-row">
                <label>Near VA</label>
                <select value={patientData.va_near_od || ''} onChange={(e) => onChangeField('va_near_od', e.target.value)}>
                  <option value="">Select Near</option>
                  {['N6', 'N8', 'N10', 'N12', 'N18', 'N24', 'N36'].map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div className="eye-field-row">
                <label>Pinhole VA</label>
                <select value={patientData.va_pinhole_od || ''} onChange={(e) => onChangeField('va_pinhole_od', e.target.value)}>
                  <option value="">Pinhole</option>
                  {['No Imp', '6/6', '6/9', '6/12', '6/18', '6/24'].map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
            </div>

            <div className="eye-column os-column">
              <div className="eye-header">LEFT EYE (OS)</div>
              <div className="eye-field-row">
                <label>Unaided VA</label>
                <select value={patientData.va_unaided_os || ''} onChange={(e) => onChangeField('va_unaided_os', e.target.value)}>
                  <option value="">Select VA</option>
                  {['6/6', '6/9', '6/12', '6/18', '6/24', '6/36', '6/60', '3/60', '1/60', 'FC 1m', 'HMC', 'PL+', 'PL-'].map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div className="eye-field-row">
                <label>Best Corrected (BCVA)</label>
                <select value={patientData.va_bcva_os || ''} onChange={(e) => onChangeField('va_bcva_os', e.target.value)}>
                  <option value="">Select BCVA</option>
                  {['6/6', '6/9', '6/12', '6/18', '6/24', '6/36', '6/60', '3/60'].map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div className="eye-field-row">
                <label>Near VA</label>
                <select value={patientData.va_near_os || ''} onChange={(e) => onChangeField('va_near_os', e.target.value)}>
                  <option value="">Select Near</option>
                  {['N6', 'N8', 'N10', 'N12', 'N18', 'N24', 'N36'].map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div className="eye-field-row">
                <label>Pinhole VA</label>
                <select value={patientData.va_pinhole_os || ''} onChange={(e) => onChangeField('va_pinhole_os', e.target.value)}>
                  <option value="">Pinhole</option>
                  {['No Imp', '6/6', '6/9', '6/12', '6/18', '6/24'].map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
            </div>
          </div>

          <div className="va-secondary-row">
            <label><span>LogMAR / Decimal</span><input type="text" value={patientData.va_logmar || ''} onChange={(e) => onChangeField('va_logmar', e.target.value)} placeholder="OD: 0.0 / OS: 0.1" /></label>
            <label><span>Both Eyes (OU)</span><input type="text" value={patientData.va_both_eyes || ''} onChange={(e) => onChangeField('va_both_eyes', e.target.value)} placeholder="6/6" /></label>
            <label className="wide"><span>VA Notes</span><input type="text" value={patientData.va_notes || ''} onChange={(e) => onChangeField('va_notes', e.target.value)} placeholder="Fixation behavior, eccentric viewing..." /></label>
          </div>
        </div>
      );
    }

    // 2. REFRACTION WIDGET
    if (sectionId === 'refraction_details') {
      return (
        <div className="custom-widget refraction-widget">
          <div className="widget-header">
            <h4><Icons.Glasses size={16} /> Refraction & Prescription Chart</h4>
            <span className="widget-tag">SPH / CYL / AXIS / VA</span>
          </div>

          <div className="refraction-table-wrap">
            <table className="refraction-table">
              <thead>
                <tr>
                  <th>EYE</th>
                  <th>SPH</th>
                  <th>CYL</th>
                  <th>AXIS</th>
                  <th>VA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="eye-tag od">OD (Right)</td>
                  <td><input type="text" value={patientData.ref_subj_od_sph || ''} onChange={(e) => onChangeField('ref_subj_od_sph', e.target.value)} placeholder="+1.00" /></td>
                  <td><input type="text" value={patientData.ref_subj_od_cyl || ''} onChange={(e) => onChangeField('ref_subj_od_cyl', e.target.value)} placeholder="-0.50" /></td>
                  <td><input type="text" value={patientData.ref_subj_od_axis || ''} onChange={(e) => onChangeField('ref_subj_od_axis', e.target.value)} placeholder="90°" /></td>
                  <td><input type="text" value={patientData.ref_subj_od_va || ''} onChange={(e) => onChangeField('ref_subj_od_va', e.target.value)} placeholder="6/6" /></td>
                </tr>
                <tr>
                  <td className="eye-tag os">OS (Left)</td>
                  <td><input type="text" value={patientData.ref_subj_os_sph || ''} onChange={(e) => onChangeField('ref_subj_os_sph', e.target.value)} placeholder="+1.25" /></td>
                  <td><input type="text" value={patientData.ref_subj_os_cyl || ''} onChange={(e) => onChangeField('ref_subj_os_cyl', e.target.value)} placeholder="-0.75" /></td>
                  <td><input type="text" value={patientData.ref_subj_os_axis || ''} onChange={(e) => onChangeField('ref_subj_os_axis', e.target.value)} placeholder="180°" /></td>
                  <td><input type="text" value={patientData.ref_subj_os_va || ''} onChange={(e) => onChangeField('ref_subj_os_va', e.target.value)} placeholder="6/6" /></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="refraction-grid-bottom">
            <label><span>Near Addition</span>
              <select value={patientData.ref_near_add || ''} onChange={(e) => onChangeField('ref_near_add', e.target.value)}>
                <option value="">Select Add</option>
                {['+0.75', '+1.00', '+1.25', '+1.50', '+1.75', '+2.00', '+2.25', '+2.50', '+2.75', '+3.00'].map((a) => <option key={a} value={a}>{a}</option>)}
              </select>
            </label>
            <label><span>PD (mm)</span><input type="text" value={patientData.ref_pd || ''} onChange={(e) => onChangeField('ref_pd', e.target.value)} placeholder="63 mm" /></label>
            <label><span>Prism</span><input type="text" value={patientData.ref_prism || ''} onChange={(e) => onChangeField('ref_prism', e.target.value)} placeholder="2 BD OD" /></label>
            <label className="wide"><span>Final Prescription Notes</span><input type="text" value={patientData.ref_final_rx || ''} onChange={(e) => onChangeField('ref_final_rx', e.target.value)} placeholder="Trial lens comfort, prescription..." /></label>
          </div>
        </div>
      );
    }

    // 3. INTRAOCULAR PRESSURE WIDGET
    if (sectionId === 'iop_assessment') {
      return (
        <div className="custom-widget iop-widget">
          <div className="widget-header">
            <h4><Icons.Activity size={16} /> Intraocular Pressure (IOP) & Pachymetry</h4>
            <span className="widget-tag">Tonometry Card</span>
          </div>

          <div className="iop-cards-grid">
            <div className="iop-card od-card">
              <div className="iop-eye-title">RIGHT EYE (OD)</div>
              <div className="iop-val-wrap">
                <input type="number" className="iop-number-input" value={patientData.iop_od || ''} onChange={(e) => onChangeField('iop_od', e.target.value)} placeholder="14" />
                <span className="iop-unit">mmHg</span>
              </div>
              <div className="iop-status-bar">
                {Number(patientData.iop_od) > 21 ? <span className="iop-tag high">High IOP (&gt;21)</span> : <span className="iop-tag normal">Normal Range</span>}
              </div>
            </div>

            <div className="iop-card os-card">
              <div className="iop-eye-title">LEFT EYE (OS)</div>
              <div className="iop-val-wrap">
                <input type="number" className="iop-number-input" value={patientData.iop_os || ''} onChange={(e) => onChangeField('iop_os', e.target.value)} placeholder="15" />
                <span className="iop-unit">mmHg</span>
              </div>
              <div className="iop-status-bar">
                {Number(patientData.iop_os) > 21 ? <span className="iop-tag high">High IOP (&gt;21)</span> : <span className="iop-tag normal">Normal Range</span>}
              </div>
            </div>

            <div className="iop-meta-card">
              <label><span>Measurement Method</span>
                <select value={patientData.iop_method || ''} onChange={(e) => onChangeField('iop_method', e.target.value)}>
                  <option value="">Select Method</option>
                  {['Goldmann Applanation (GAT)', 'Non-Contact Tonometer (NCT)', 'Rebound Tonometer (Icare)', 'Schiotz', 'Perkins'].map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
              </label>
              <label><span>Measurement Time</span><input type="text" value={patientData.iop_time || ''} onChange={(e) => onChangeField('iop_time', e.target.value)} placeholder="10:30 AM" /></label>
              <label><span>Pachymetry (CCT)</span><input type="text" value={patientData.iop_pachymetry || ''} onChange={(e) => onChangeField('iop_pachymetry', e.target.value)} placeholder="OD 545µm / OS 550µm" /></label>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  // Standard Field Renderer
  const renderField = (field) => {
    const val = patientData[field.id] !== undefined ? patientData[field.id] : '';
    const isWide = field.type === 'textarea' || field.label.length > 28 || /Diagnosis|Advice|History|Complaint|Examination|Investigation|Notes/.test(field.label);

    const isFilled = val !== '' && val !== 'Select' && (Array.isArray(val) ? val.length > 0 : true);

    return (
      <div key={field.id} className={`field-cell ${isWide ? 'wide' : ''} ${isFilled ? 'filled' : ''}`}>
        <div className="field-cell-header">
          <label htmlFor={field.id}>
            {field.label}
            {field.unit && <small className="field-unit">({field.unit})</small>}
          </label>
          {isFilled && <span className="field-status-dot" title="Completed">✓</span>}
        </div>

        {field.type === 'select' ? (
          <select id={field.id} value={val} onChange={(e) => onChangeField(field.id, e.target.value)}>
            <option value="">Select {field.label}...</option>
            {field.options?.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        ) : field.type === 'multiselect' ? (
          <div className="multiselect-chips-box">
            {field.options?.map((opt) => {
              const selectedList = Array.isArray(val) ? val : [];
              const isSelected = selectedList.includes(opt);
              return (
                <button
                  key={opt}
                  type="button"
                  className={`chip-btn ${isSelected ? 'selected' : ''}`}
                  onClick={() => {
                    const next = isSelected ? selectedList.filter((x) => x !== opt) : [...selectedList, opt];
                    onChangeField(field.id, next);
                  }}
                >
                  {isSelected && <Icons.Check size={11} />}
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>
        ) : field.type === 'textarea' ? (
          <textarea
            id={field.id}
            rows={3}
            value={val}
            onChange={(e) => onChangeField(field.id, e.target.value)}
            placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}...`}
          />
        ) : field.type === 'date' ? (
          <input
            type="date"
            id={field.id}
            value={val}
            onChange={(e) => onChangeField(field.id, e.target.value)}
          />
        ) : field.type === 'number' ? (
          <input
            type="number"
            id={field.id}
            value={val}
            onChange={(e) => onChangeField(field.id, e.target.value)}
            placeholder={field.placeholder || '0'}
          />
        ) : (
          <input
            type="text"
            id={field.id}
            value={val}
            onChange={(e) => onChangeField(field.id, e.target.value)}
            placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}...`}
          />
        )}
      </div>
    );
  };

  return (
    <div className="consult-main-redesigned">
      {/* Workspace Top Banner & Progress */}
      <div className="workspace-header-bar">
        <div>
          <h2>{clinicalFocus || schema.name} — Clinical Documentation</h2>
          <p>Structured clinical documentation for this specialty.</p>
        </div>

        <div className="completion-card">
          <div className="completion-ring">
            <span className="percent-val">{completionPercent}%</span>
            <span className="percent-label">Complete</span>
          </div>
          <div className="completion-stats">
            <small>Fields Documented</small>
            <b>{filledVisibleFields} / {totalVisibleFields}</b>
          </div>
        </div>
      </div>

      {/* Pinned Quick Access Section */}
      {pinnedFields.length > 0 && (() => {
        const pinnedList = [];
        schema.categories.forEach((c) => c.sections.forEach((s) => s.fields.forEach((f) => {
          if (pinnedFields.includes(f.id)) pinnedList.push(f);
        })));
        if (pinnedList.length === 0) return null;

        return (
          <div className="category-block pinned-category-block">
            <div className="category-block-header">
              <h3 className="category-block-title" style={{ color: '#075fe0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Icons.Pin size={16} /> PINNED QUICK ACCESS FIELDS ({pinnedList.length})
              </h3>
              <span className="category-line"></span>
            </div>
            <section className="form-section-card highlighted">
              <div className="field-grid-redesigned">
                {pinnedList.map(renderField)}
              </div>
            </section>
          </div>
        );
      })()}

      {/* Main Categories & Sections */}
      {schema.categories.map((cat) => {
        // Check category level conditional dependency
        if (cat.dependsOn && !evaluateDependsOn(cat.dependsOn, patientData)) {
          return null;
        }

        return (
          <div key={cat.id} className="category-block">
            <div className="category-block-header">
              <h3 className="category-block-title">{cat.name}</h3>
              <span className="category-line"></span>
            </div>

            {(cat.sections || []).map((sec) => {
              // Check search filter for sections
              if (query) {
                const secMatch = (sec.name || '').toLowerCase().includes(query);
                const fieldMatch = (sec.fields || []).some((f) => {
                if ((hiddenFieldsMap[sec.id] || []).includes(f.id)) return false;
                return (f.label || '').toLowerCase().includes(query) || (f.id || '').toLowerCase().includes(query);
              });
                if (!secMatch && !fieldMatch) return null;
              }

              const customWidget = renderCustomWidget(sec.id, sec.fields || []);

              return (
                <section
                  key={sec.id}
                  id={`sec-${sec.id}`}
                  ref={(el) => (sectionRefs.current[sec.id] = el)}
                  className={`form-section-card ${activeSection === sec.id ? 'highlighted' : ''}`}
                >
                  <div className="section-card-header">
                    <div className="section-card-header-left">
                      <h4>{sec.name}</h4>
                      <span className="field-count-tag">
                        {(sec.fields || []).length - (hiddenFieldsMap[sec.id] || []).length} clinical fields
                        {(hiddenFieldsMap[sec.id] || []).length > 0 && ` (+${(hiddenFieldsMap[sec.id] || []).length} hidden)`}
                      </span>
                    </div>

                    <div className="section-card-header-right">
                      {(() => {
                        const totalFields = (sec.fields || []).length;
                        const hiddenCount = (hiddenFieldsMap[sec.id] || []).length;
                        const hasMore = totalFields > CORE_FIELD_COUNT && hiddenCount > 0;
                        return hasMore ? (
                          <button
                            type="button"
                            className="add-more-fields-chip"
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              openAddMoreFields(sec.id, sec.name);
                            }}
                          >
                            <Icons.Plus size={12} />
                            <span>Add More Fields</span>
                          </button>
                        ) : null;
                      })()}

                      {activeSection === sec.id && (
                      <div className="section-contextual-actions">
                        <button
                          type="button"
                          className="action-btn save-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            if (notify) notify(`Saved ${sec.name} record`);
                          }}
                        >
                          <Icons.Check size={13} />
                          <span>Save</span>
                        </button>

                        <button
                          type="button"
                          className="action-btn edit-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            if (notify) notify(`Editing ${sec.name} record`);
                          }}
                        >
                          <Icons.Pencil size={13} />
                          <span>Edit</span>
                        </button>

                        <button
                          type="button"
                          className="action-btn reset-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            (sec.fields || []).forEach((f) => onChangeField(f.id, ''));
                            if (notify) notify(`Reset ${sec.name} record`);
                          }}
                        >
                          <Icons.RotateCcw size={13} />
                          <span>Reset</span>
                        </button>

                        <button
                          type="button"
                          className={`action-btn priority-btn ${prioritySections.includes(sec.id) ? 'active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            togglePrioritySection(sec.id);
                          }}
                        >
                          <Icons.Star size={13} fill={prioritySections.includes(sec.id) ? '#f59e0b' : 'none'} color={prioritySections.includes(sec.id) ? '#d97706' : 'currentColor'} />
                          <span>Priority</span>
                        </button>
                      </div>
                    )}
                    </div>
                  </div>

                  {customWidget}

                  <div className="field-grid-redesigned">
                    {(sec.fields || []).map((field) => {
                      // Skip hidden fields
                      if ((hiddenFieldsMap[sec.id] || []).includes(field.id)) {
                        return null;
                      }
                      if (query && !(field.label || '').toLowerCase().includes(query) && !(field.id || '').toLowerCase().includes(query)) {
                        return null;
                      }
                      return renderField(field);
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        );
      })}

      {/* Sticky Bottom Actions Bar */}
      <div className="sticky-actions-redesigned">
        <div className="sticky-right">
          <button className="outline" onClick={() => notify('Draft consultation saved successfully')}>
            Save as Draft
          </button>
          <button className="primary" onClick={() => notify('Consultation record completed & saved')}>
            Save & Finalize Record →
          </button>
        </div>
      </div>

      {/* Add More Fields Modal */}
      <AddMoreFieldsModal
        isOpen={modalSectionId !== null}
        onClose={closeAddMoreFields}
        sectionName={modalSectionName}
        hiddenFields={(() => {
          if (!modalSectionId || !schema) return [];
          const hiddenIds = hiddenFieldsMap[modalSectionId] || [];
          if (hiddenIds.length === 0) return [];
          // Find the section's fields to get labels
          let sectionFields = [];
          (schema.categories || []).forEach((cat) => {
            (cat.sections || []).forEach((sec) => {
              if (sec.id === modalSectionId) {
                sectionFields = sec.fields || [];
              }
            });
          });
          return hiddenIds
            .map((id) => sectionFields.find((f) => f.id === id))
            .filter(Boolean);
        })()}
        onAddField={(fieldId) => handleAddField(modalSectionId, fieldId)}
      />
    </div>
  );
}
