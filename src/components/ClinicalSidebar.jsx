import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { evaluateDependsOn } from '../data/clinicalEngine/helpers';

export default function ClinicalSidebar({
  schema,
  patientData,
  activeSection,
  onSelectSection,
  onOpenFieldLibrary,
  searchQuery,
  onSearchChange,
  pinnedFields = [],
  clinicalFocus
}) {
  // Filter categories and sections based on search query
  const query = (searchQuery || '').trim().toLowerCase();

  return (
    <aside className="clinical-nav-redesigned">
      <div className="sidebar-header">
        <div className="section-label">CLINICAL SECTIONS</div>
        <button className="field-library-btn" onClick={onOpenFieldLibrary} title="Browse & pin fields from full library">
          <Icons.BookOpen size={13} />
          <span>Field Library</span>
        </button>
      </div>

      <div className="nav-search-wrap">
        <Icons.Search size={14} className="search-icon" />
        <input
          type="text"
          className="nav-search-input"
          placeholder="Search all clinical fields (e.g. cornea, OCT)..."
          value={searchQuery || ''}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchQuery && (
          <button className="clear-search" onClick={() => onSearchChange('')}>
            <Icons.X size={12} />
          </button>
        )}
      </div>

      <div className="categories-accordion">
        {(schema?.categories || []).map((cat) => {
          if (cat.dependsOn && !evaluateDependsOn(cat.dependsOn, patientData || {})) {
            return null;
          }

          const matchingSections = (cat.sections || []).filter((sec) => {
            if (!query) return true;
            const secMatch = (sec.name || '').toLowerCase().includes(query);
            const fieldMatch = (sec.fields || []).some((f) => (f.label || '').toLowerCase().includes(query) || (f.id || '').toLowerCase().includes(query));
            return secMatch || fieldMatch;
          });

          if (query && matchingSections.length === 0) return null;

          const isActive = matchingSections.some((section) => section.id === activeSection);

          return (
            <div key={cat.id} className="category-group">
              <button
                className={`category-header no-arrow-header ${isActive ? 'active' : ''}`}
                onClick={() => {
                  if (matchingSections[0]) onSelectSection(matchingSections[0].id);
                }}
              >
                <div className="cat-title-left">
                  <span className="cat-name">{cat.name}</span>
                </div>
              </button>
            </div>
          );
        })}
      </div>

      <div className="sidebar-footer-actions">
        <button className="add-field-action-btn" onClick={onOpenFieldLibrary}>
          <Icons.Plus size={14} />
          <span>Add Clinical Field</span>
        </button>
      </div>
    </aside>
  );
}
