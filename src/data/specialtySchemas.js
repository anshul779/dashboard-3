import { fieldLibrary } from './clinicalEngine/fieldLibrary';
import { clinicalCore } from './clinicalEngine/clinicalCore';
import { specialtyRegistry, SPECIALTY_DISPLAY_ORDER } from './clinicalEngine/registry';
import { conditionalModules, subspecialtySchemas } from './clinicalEngine/conditionalModules';
import { composeSpecialtySchemas, getResolvedSpecialtySchema } from './clinicalEngine/compose';
import { additiveModules } from './clinicalEngine/additiveModules';
import { newSpecialtySchemas } from './clinicalEngine/newSpecialties';
import { EXISTING_SPECIALTY_SCHEMAS } from './existingSpecialtySchemas';

export {
  fieldLibrary,
  clinicalCore,
  specialtyRegistry,
  SPECIALTY_DISPLAY_ORDER,
  conditionalModules,
  subspecialtySchemas,
  getResolvedSpecialtySchema
};

export const SPECIALTY_CLINICAL_FOCI = {
  Ophthalmology: ['General Ophthalmology', 'Glaucoma', 'Retina & Vitreous', 'Cornea & External Disease', 'Cataract & Anterior Segment', 'Refractive Surgery', 'Pediatric Ophthalmology & Strabismus', 'Neuro-Ophthalmology', 'Uveitis', 'Oculoplasty'],
  Cardiology: ['General Cardiology', 'Interventional Cardiology', 'Electrophysiology', 'Heart Failure', 'Cardiac Imaging', 'Preventive Cardiology', 'Pediatric Cardiology'],
  Orthopedics: ['General Orthopedics', 'Spine', 'Sports Injury', 'Joint Replacement', 'Orthopedic Trauma', 'Hand & Upper Limb', 'Pediatric Orthopedics'],
  Neurology: ['General Neurology', 'Stroke & Neurovascular', 'Epilepsy', 'Movement Disorders', 'Neuromuscular', 'Headache & Pain', 'Neuro-immunology'],
  Neurosurgery: ['General Neurosurgery', 'Brain Tumor Surgery', 'Spine Surgery', 'Vascular Neurosurgery', 'Functional Neurosurgery', 'Pediatric Neurosurgery'],
  Pediatrics: ['General Pediatrics', 'Neonatology', 'Pediatric Pulmonology', 'Pediatric Neurology', 'Pediatric Nephrology', 'Pediatric Gastroenterology'],
  Gynecology: ['General Gynecology', 'Obstetrics & ANC', 'Gynecologic Oncology', 'Infertility & ART', 'Menopause & HRT', 'Urogynecology'],
  Dermatology: ['General Dermatology', 'Cosmetic Dermatology', 'Dermatosurgery', 'Pediatric Dermatology', 'Dermatopathology'],
  ENT: ['General ENT', 'Otology', 'Rhinology', 'Laryngology', 'Head & Neck Surgery', 'Pediatric ENT'],
  Pulmonology: ['General Pulmonology', 'Interventional Pulmonology', 'Sleep Medicine', 'Asthma & Allergy', 'Critical Care'],
  Gastroenterology: ['General Gastroenterology', 'Hepatology', 'Endoscopy', 'IBD', 'Pancreaticobiliary'],
  Urology: ['General Urology', 'Endourology', 'Andrology', 'Uro-oncology', 'Pediatric Urology', 'Female Urology'],
  GeneralSurgery: ['General Surgery', 'Laparoscopic Surgery', 'Colorectal Surgery', 'Breast Surgery', 'Trauma Surgery'],
  Oncology: ['Medical Oncology', 'Surgical Oncology', 'Radiation Oncology', 'Palliative Oncology'],
  Hematology: ['General Hematology', 'Hemato-oncology', 'Coagulation Medicine', 'Transfusion Medicine'],
  Endocrinology: ['General Endocrinology', 'Diabetology', 'Thyroid Disorders', 'Bone & Metabolism', 'Reproductive Endocrinology'],
  Nephrology: ['General Nephrology', 'Dialysis', 'Kidney Transplant', 'Interventional Nephrology'],
  Rheumatology: ['General Rheumatology', 'Autoimmune Disease', 'Musculoskeletal Ultrasound', 'Pediatric Rheumatology'],
  Psychiatry: ['General Psychiatry', 'Child & Adolescent Psychiatry', 'Geriatric Psychiatry', 'Addiction Medicine'],
  Psychology: ['CBT', 'DBT', 'ACT', 'Couples Therapy', 'Family Therapy', 'Trauma Therapy'],
  Obstetrics: ['Low-risk ANC', 'High-risk Obstetrics', 'Fetal Medicine', 'Labour & Delivery'],
  General: ['General Medicine', 'Internal Medicine', 'Critical Care', 'Geriatric Medicine', 'Preventive Medicine'],
  FamilyMedicine: ['General Family Medicine', 'Chronic Disease Management', 'Preventive Health', 'Occupational Health'],
  EmergencyMedicine: ['General Emergency Medicine', 'Trauma & Acute Care', 'Toxicology', 'Pediatric Emergency'],
  ICU: ['General Critical Care', 'Cardiac ICU', 'Neuro ICU', 'Respiratory ICU'],
  Dentistry: ['General Dentistry', 'Oral Surgery', 'Orthodontics', 'Endodontics', 'Pediatric Dentistry'],
  Physiotherapy: ['Musculoskeletal Physiotherapy', 'Neuro Physiotherapy', 'Cardiopulmonary Physiotherapy', 'Sports Rehabilitation'],
  Radiology: ['Diagnostic Radiology', 'Interventional Radiology', 'Neuroradiology', 'Musculoskeletal Radiology'],
  Pathology: ['Anatomic Pathology', 'Clinical Pathology', 'Cytopathology', 'Hematopathology'],
  Anesthesiology: ['General Anaesthesia', 'Regional Anaesthesia', 'Cardiac Anaesthesia', 'Neuroanaesthesia'],
  InfectiousDisease: ['General ID', 'HIV', 'TB', 'Tropical Medicine'],
  AllergyImmunology: ['Food allergy', 'Respiratory allergy', 'Immunodeficiency'],
  Nutrition: ['Clinical nutrition', 'Sports nutrition'],
  BariatricMedicine: ['Medical weight management', 'Bariatric surgery liaison'],
  SportsMedicine: ['Team physician', 'Exercise medicine'],
  PainManagement: ['Interventional pain', 'Cancer pain'],
  PlasticSurgery: ['Cosmetic', 'Burns', 'Reconstructive'],
  VascularSurgery: ['Endovascular', 'Venous'],
  Geriatrics: ['Falls clinic', 'Memory clinic'],
  PalliativeCare: ['Cancer palliative', 'Community palliative']
};

export const SPECIALTY_SCHEMAS = composeSpecialtySchemas({
  existing: EXISTING_SPECIALTY_SCHEMAS,
  additive: additiveModules,
  created: newSpecialtySchemas,
  lockedIds: ['Ophthalmology']
});

export const specialtySchemas = SPECIALTY_SCHEMAS;

export function getClinicalFocusOptions(specialtyId) {
  const curated = SPECIALTY_CLINICAL_FOCI[specialtyId];
  if (curated && curated.length > 0) return curated;
  const spec = SPECIALTY_SCHEMAS[specialtyId];
  const fromRegistry = specialtyRegistry[specialtyId]?.subspecialties;
  if (fromRegistry?.length) return [`General ${spec?.name || specialtyId}`, ...fromRegistry];
  return [`General ${spec?.name || specialtyId}`];
}

export function getDefaultClinicalFocus(specialtyId) {
  const options = getClinicalFocusOptions(specialtyId);
  return options[0];
}

export function listFieldLibraryEntries({ specialtyId, query = '', category = 'ALL', scope = 'ALL' } = {}) {
  const schema = SPECIALTY_SCHEMAS[specialtyId];
  const rows = [];
  (schema?.categories || []).forEach((cat) => {
    (cat.sections || []).forEach((sec) => {
      (sec.fields || []).forEach((fld) => {
        rows.push({
          ...fld,
          categoryName: cat.name || '',
          categoryId: cat.id || '',
          sectionName: sec.name || '',
          sectionId: sec.id || '',
          scope: fld.scope || cat.scope || 'specialty'
        });
      });
    });
  });
  const q = query.trim().toLowerCase();
  return rows.filter((fld) => {
    const matchesCat = category === 'ALL' || fld.categoryId === category;
    const matchesScope = scope === 'ALL' || fld.scope === scope;
    const matchesSearch =
      !q ||
      (fld.label || '').toLowerCase().includes(q) ||
      (fld.categoryName || '').toLowerCase().includes(q) ||
      (fld.sectionName || '').toLowerCase().includes(q) ||
      (fld.id || '').toLowerCase().includes(q) ||
      (fld.type || '').toLowerCase().includes(q);
    return matchesCat && matchesScope && matchesSearch;
  });
}

export default SPECIALTY_SCHEMAS;
