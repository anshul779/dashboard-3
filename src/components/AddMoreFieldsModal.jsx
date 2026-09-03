import React from 'react';
import * as Icons from 'lucide-react';

export default function AddMoreFieldsModal({
  isOpen,
  onClose,
  sectionName,
  hiddenFields,
  onAddField
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="add-more-fields-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3>Add More Fields</h3>
            <p>Add additional fields to {sectionName}</p>
          </div>
          <button className="close-btn" onClick={onClose}>
            <Icons.X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <div className="add-fields-list">
            {hiddenFields.map((field) => (
              <div key={field.id} className="add-field-row">
                <span className="field-name">{field.label}</span>
                <button
                  className="add-field-btn"
                  onClick={() => onAddField(field.id)}
                  title={`Add ${field.label} to section`}
                >
                  <Icons.Plus size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <button className="close-modal-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
