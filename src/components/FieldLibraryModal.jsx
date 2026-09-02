import React, { useState } from 'react';
import * as Icons from 'lucide-react';

export default function FieldLibraryModal({
  isOpen,
  onClose,
  schema,
  pinnedFields,
  onTogglePinField,
  onJumpToSection,
  patientData
}) {
  const [modalSearch, setModalSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  if (!isOpen || !schema) return null;

  const query = modalSearch.trim().toLowerCase();

  // Aggregate all fields from schema
  const allFields = [];
  (schema?.categories || []).forEach((cat) => {
    (cat?.sections || []).forEach((sec) => {
      (sec?.fields || []).forEach((f) => {
        allFields.push({
          ...f,
          categoryName: cat.name || '',
          categoryId: cat.id || '',
          sectionName: sec.name || '',
          sectionId: sec.id || ''
        });
      });
    });
  });

  // Filter fields by category & search
  const filteredFields = allFields.filter((f) => {
    const matchesCat = selectedCategory === 'ALL' || f.categoryId === selectedCategory;
    const matchesSearch =
      !query ||
      (f.label || '').toLowerCase().includes(query) ||
      (f.categoryName || '').toLowerCase().includes(query) ||
      (f.sectionName || '').toLowerCase().includes(query) ||
      (f.id || '').toLowerCase().includes(query);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="field-library-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3>{schema.name} — Complete Field Library</h3>
            <p>Explore, search, pin, or jump to any clinical field in {schema.name}.</p>
          </div>
          <button className="close-btn" onClick={onClose}>
            <Icons.X size={18} />
          </button>
        </div>

        <div className="modal-toolbar">
          <div className="modal-search-box">
            <Icons.Search size={16} />
            <input
              type="text"
              placeholder="Search fields (e.g., cornea, OCT, IOP, refraction, diabetic eye)..."
              value={modalSearch}
              onChange={(e) => setModalSearch(e.target.value)}
              autoFocus
            />
            {modalSearch && (
              <button className="clear-search" onClick={() => setModalSearch('')}>
                <Icons.X size={14} />
              </button>
            )}
          </div>

          <div className="category-tabs">
            <button
              className={`cat-tab ${selectedCategory === 'ALL' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('ALL')}
            >
              All Categories ({allFields.length})
            </button>
            {schema.categories.map((cat) => (
              <button
                key={cat.id}
                className={`cat-tab ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="modal-body">
          <div className="fields-count-bar">
            <span>Showing <b>{filteredFields.length}</b> clinical fields</span>
            <span className="hint">📌 Click pin icon to keep field visible in your clinical workspace</span>
          </div>

          <div className="fields-grid">
            {filteredFields.map((f) => {
              const isPinned = pinnedFields.includes(f.id);
              const val = patientData[f.id];
              const isFilled = val !== undefined && val !== null && val !== '' && val !== 'Select';

              return (
                <div key={f.id} className={`field-card ${isPinned ? 'pinned' : ''} ${isFilled ? 'filled' : ''}`}>
                  <div className="field-card-header">
                    <div className="field-meta">
                      <span className="cat-tag">{f.categoryName}</span>
                      <span className="sec-tag">{f.sectionName}</span>
                    </div>
                    <button
                      className={`pin-btn ${isPinned ? 'active' : ''}`}
                      onClick={() => onTogglePinField(f.id)}
                      title={isPinned ? 'Unpin from workspace' : 'Pin to active workspace'}
                    >
                      <Icons.Pin size={14} />
                    </button>
                  </div>

                  <div className="field-card-title">{f.label}</div>
                  <div className="field-card-details">
                    <span className="type-badge">Type: {f.type}</span>
                    {f.options && <span className="options-badge">{f.options.length} options</span>}
                    {isFilled && <span className="filled-badge">Filled</span>}
                  </div>

                  <div className="field-card-actions">
                    <button
                      className="jump-btn"
                      onClick={() => {
                        onJumpToSection(f.sectionId);
                        onClose();
                      }}
                    >
                      <span>Jump to Section →</span>
                    </button>
                  </div>
                </div>
              );
            })}

            {filteredFields.length === 0 && (
              <div className="no-fields-found">
                <Icons.SearchX size={32} />
                <p>No clinical fields found matching "{modalSearch}".</p>
                <button className="outline" onClick={() => { setModalSearch(''); setSelectedCategory('ALL'); }}>
                  Reset Search
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="modal-footer">
          <button className="primary" onClick={onClose}>
            Done & Return to Workspace
          </button>
        </div>
      </div>
    </div>
  );
}
