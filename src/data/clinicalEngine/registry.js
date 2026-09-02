/** Master specialty registry — metadata only. Clinical categories live on composed schemas. */
export const specialtyRegistry = {
  General: {
    id: 'General', name: 'General Medicine', icon: 'Stethoscope',
    description: 'Internal medicine consultation, chronic disease and general examination.',
    subspecialties: ['Internal Medicine', 'Critical Care', 'Geriatric Medicine', 'Preventive Medicine'],
    supportedProcedures: ['Venipuncture', 'ECG', 'Nebulization'],
    supportedInvestigations: ['CBC', 'LFT', 'KFT', 'HbA1c', 'TFT', 'X-Ray', 'USG'],
    workflows: ['Consultation', 'Examination', 'Investigations', 'Diagnosis', 'Treatment Plan', 'Follow-Up']
  },
  Cardiology: {
    id: 'Cardiology', name: 'Cardiology', icon: 'HeartPulse',
    description: 'Cardiac history, examination, scores and cardiology investigations.',
    subspecialties: ['Interventional Cardiology', 'Electrophysiology', 'Heart Failure', 'Preventive Cardiology'],
    supportedProcedures: ['ECG', 'Echo', 'Angiography', 'PCI', 'Pacemaker'],
    supportedInvestigations: ['ECG', 'Echocardiography', 'Stress Test', 'Holter', 'CTCA', 'Cardiac MRI'],
    workflows: ['Consultation', 'Cardiac Exam', 'Investigations', 'Diagnosis', 'Intervention', 'Follow-Up']
  },
  Dermatology: {
    id: 'Dermatology', name: 'Dermatology', icon: 'Sparkles',
    description: 'Lesion-focused dermatology documentation including hair, nails and mucosal exam.',
    subspecialties: ['Cosmetic Dermatology', 'Dermatosurgery', 'Pediatric Dermatology'],
    supportedProcedures: ['Biopsy', 'Cryotherapy', 'Excision', 'Laser'],
    supportedInvestigations: ['KOH', 'Skin biopsy', 'Dermoscopy', 'Patch test'],
    workflows: ['Consultation', 'Skin Examination', 'Investigations', 'Diagnosis', 'Treatment', 'Follow-Up']
  },
  Orthopedics: {
    id: 'Orthopedics', name: 'Orthopedics', icon: 'Bone',
    description: 'Trauma, joint, spine and orthopedic special tests.',
    subspecialties: ['Spine', 'Sports Medicine', 'Joint Replacement', 'Hand Surgery'],
    supportedProcedures: ['Reduction', 'Casting', 'Arthroscopy', 'Arthroplasty'],
    supportedInvestigations: ['X-Ray', 'MRI', 'CT', 'Bone scan'],
    workflows: ['Consultation', 'Examination', 'Imaging', 'Diagnosis', 'Treatment', 'Rehab', 'Follow-Up']
  },
  Physiotherapy: {
    id: 'Physiotherapy', name: 'Physiotherapy', icon: 'Activity',
    description: 'Rehabilitation assessment, ROM, strength and therapy documentation.',
    subspecialties: ['MSK Physiotherapy', 'Neuro Physiotherapy', 'Sports Rehabilitation'],
    supportedProcedures: ['Exercise therapy', 'Manual therapy', 'Electrotherapy', 'Taping'],
    supportedInvestigations: ['Functional tests', 'Gait analysis'],
    workflows: ['Referral', 'Assessment', 'Treatment', 'Outcome', 'Follow-Up']
  },
  Neurology: {
    id: 'Neurology', name: 'Neurology', icon: 'Brain',
    description: 'Neurological history, examination and validated scores.',
    subspecialties: ['Stroke', 'Epilepsy', 'Movement Disorders', 'Neuromuscular'],
    supportedProcedures: ['LP', 'EEG', 'NCS/EMG'],
    supportedInvestigations: ['MRI Brain', 'EEG', 'NCS', 'CSF'],
    workflows: ['Consultation', 'Neuro Exam', 'Investigations', 'Diagnosis', 'Treatment', 'Follow-Up']
  },
  Psychiatry: {
    id: 'Psychiatry', name: 'Psychiatry', icon: 'BrainCircuit',
    description: 'Psychiatric history, MSE and risk assessment.',
    subspecialties: ['Child Psychiatry', 'Geriatric Psychiatry', 'Addiction Medicine'],
    supportedProcedures: ['MSE', 'Risk assessment', 'Psychotherapy referral'],
    supportedInvestigations: ['PHQ-9', 'GAD-7', 'Y-BOCS', 'YMRS'],
    workflows: ['Intake', 'MSE', 'Risk', 'Diagnosis', 'Treatment Plan', 'Follow-Up']
  },
  Psychology: {
    id: 'Psychology', name: 'Psychology', icon: 'MessageCircle',
    description: 'Therapy intake, session notes and treatment planning.',
    subspecialties: ['CBT', 'DBT', 'ACT', 'Couples Therapy', 'Family Therapy'],
    supportedProcedures: ['Intake', 'Psychotherapy session'],
    supportedInvestigations: ['Psychometrics'],
    workflows: ['Intake', 'Goals', 'Session', 'Homework', 'Progress', 'Treatment Plan']
  },
  Gynecology: {
    id: 'Gynecology', name: 'Gynecology', icon: 'Heart',
    description: 'Women’s health, menstrual, pelvic and gynecologic conditions.',
    subspecialties: ['Gynecologic Oncology', 'Infertility', 'Urogynecology'],
    supportedProcedures: ['Pap smear', 'Colposcopy', 'Hysteroscopy', 'Laparoscopy'],
    supportedInvestigations: ['USG Pelvis', 'Hormones', 'Pap', 'HPV'],
    workflows: ['Consultation', 'Exam', 'Investigations', 'Diagnosis', 'Treatment', 'Follow-Up']
  },
  Obstetrics: {
    id: 'Obstetrics', name: 'Obstetrics', icon: 'Baby',
    description: 'Pregnancy confirmation, antenatal care, labour and postpartum.',
    subspecialties: ['High-risk Obstetrics', 'Fetal Medicine'],
    supportedProcedures: ['ANC visit', 'Partograph', 'Delivery', 'LSCS'],
    supportedInvestigations: ['USG', 'NT', 'Anomaly scan', 'Growth scan', 'Doppler'],
    workflows: ['Confirmation', 'ANC', 'Investigations', 'Labour', 'Delivery', 'Postpartum']
  },
  Pediatrics: {
    id: 'Pediatrics', name: 'Pediatrics', icon: 'Baby',
    description: 'Birth history, growth, development, immunization and pediatric exam.',
    subspecialties: ['Neonatology', 'Pediatric Neurology', 'Pediatric Pulmonology'],
    supportedProcedures: ['Vaccination', 'Nebulization', 'Developmental assessment'],
    supportedInvestigations: ['Growth chart', 'CBC', 'X-Ray'],
    workflows: ['Consultation', 'Growth', 'Exam', 'Diagnosis', 'Treatment', 'Follow-Up']
  },
  Ophthalmology: {
    id: 'Ophthalmology', name: 'Ophthalmology', icon: 'Eye',
    description: 'Complete ophthalmic documentation including VA, refraction, slit lamp and fundus.',
    subspecialties: ['Retina', 'Glaucoma', 'Cornea', 'Cataract', 'Pediatric Ophthalmology', 'Neuro-Ophthalmology', 'Oculoplasty'],
    supportedProcedures: ['Phaco + IOL', 'Intravitreal injection', 'YAG', 'Trabeculectomy', 'LASIK'],
    supportedInvestigations: ['OCT', 'VF', 'OCT-A', 'FFA', 'B-scan', 'Biometry'],
    workflows: ['Consultation', 'Eye Examination', 'Investigations', 'Diagnosis', 'Treatment', 'Surgery', 'Follow-Up']
  },
  ENT: {
    id: 'ENT', name: 'ENT', icon: 'Headphones',
    description: 'Ear, nose, throat and head & neck documentation.',
    subspecialties: ['Otology', 'Rhinology', 'Laryngology', 'Head & Neck'],
    supportedProcedures: ['Endoscopy', 'Tympanoplasty', 'Tonsillectomy', 'FESS'],
    supportedInvestigations: ['Audiometry', 'Tympanometry', 'Endoscopy', 'Laryngoscopy'],
    workflows: ['Consultation', 'ENT Exam', 'Investigations', 'Diagnosis', 'Treatment', 'Follow-Up']
  },
  Dentistry: {
    id: 'Dentistry', name: 'Dentistry', icon: 'Smile',
    description: 'Dental, periodontal and tooth-chart documentation.',
    subspecialties: ['Orthodontics', 'Endodontics', 'Periodontics', 'Prosthodontics', 'Oral Surgery'],
    supportedProcedures: ['Filling', 'RCT', 'Extraction', 'Implant', 'Crown'],
    supportedInvestigations: ['IOPA', 'OPG', 'CBCT'],
    workflows: ['Consultation', 'Dental Exam', 'Charting', 'Treatment', 'Follow-Up']
  },
  Gastroenterology: {
    id: 'Gastroenterology', name: 'Gastroenterology', icon: 'Activity',
    description: 'GI symptoms, abdominal exam and endoscopy documentation.',
    subspecialties: ['Hepatology', 'IBD', 'Endoscopy'],
    supportedProcedures: ['Endoscopy', 'Colonoscopy', 'ERCP'],
    supportedInvestigations: ['LFT', 'FibroScan', 'Endoscopy', 'Biopsy'],
    workflows: ['Consultation', 'Exam', 'Investigations', 'Diagnosis', 'Treatment', 'Follow-Up']
  },
  Pulmonology: {
    id: 'Pulmonology', name: 'Pulmonology', icon: 'Wind',
    description: 'Respiratory symptoms, chest exam and pulmonary investigations.',
    subspecialties: ['Sleep Medicine', 'Interventional Pulmonology', 'Asthma & Allergy'],
    supportedProcedures: ['Bronchoscopy', 'Thoracentesis', 'Pleural tap'],
    supportedInvestigations: ['Spirometry', 'PFT', 'CXR', 'CT Chest', 'Sleep study'],
    workflows: ['Consultation', 'Exam', 'Investigations', 'Diagnosis', 'Treatment', 'Follow-Up']
  },
  Nephrology: {
    id: 'Nephrology', name: 'Nephrology', icon: 'Droplets',
    description: 'Kidney disease, dialysis and fluid status documentation.',
    subspecialties: ['Dialysis', 'Transplant'],
    supportedProcedures: ['Dialysis', 'Kidney biopsy', 'Access care'],
    supportedInvestigations: ['Creatinine', 'eGFR', 'Electrolytes', 'Urine protein'],
    workflows: ['Consultation', 'Exam', 'Labs', 'Diagnosis', 'Treatment', 'Follow-Up']
  },
  Urology: {
    id: 'Urology', name: 'Urology', icon: 'Stethoscope',
    description: 'LUTS, prostate and urologic procedure documentation.',
    subspecialties: ['Endourology', 'Andrology', 'Uro-oncology'],
    supportedProcedures: ['Cystoscopy', 'TURP', 'URS', 'Circumcision'],
    supportedInvestigations: ['PSA', 'Uroflowmetry', 'USG KUB', 'CT Urogram'],
    workflows: ['Consultation', 'Exam', 'Investigations', 'Diagnosis', 'Treatment', 'Follow-Up']
  },
  Oncology: {
    id: 'Oncology', name: 'Oncology', icon: 'Ribbon',
    description: 'Cancer staging, biomarkers and treatment-cycle documentation.',
    subspecialties: ['Medical Oncology', 'Surgical Oncology', 'Radiation Oncology'],
    supportedProcedures: ['Chemotherapy', 'Immunotherapy', 'Radiotherapy', 'Surgery'],
    supportedInvestigations: ['Histology', 'IHC', 'Molecular tests', 'PET-CT'],
    workflows: ['Diagnosis', 'Staging', 'Treatment', 'Response', 'Toxicity', 'Follow-Up']
  },
  GeneralSurgery: {
    id: 'GeneralSurgery', name: 'General Surgery', icon: 'Scissors',
    description: 'Preoperative, operative and postoperative surgical documentation.',
    subspecialties: ['Colorectal', 'Hepatobiliary', 'Bariatric', 'Laparoscopic'],
    supportedProcedures: ['Appendectomy', 'Cholecystectomy', 'Hernia repair', 'Laparotomy'],
    supportedInvestigations: ['USG', 'CT', 'Labs'],
    workflows: ['Consultation', 'Pre-op', 'Procedure Planning', 'Operative Notes', 'Post-op', 'Follow-Up']
  },
  Anesthesiology: {
    id: 'Anesthesiology', name: 'Anaesthesiology', icon: 'Syringe',
    description: 'Pre-anaesthetic assessment and intraoperative anaesthesia record.',
    subspecialties: ['Cardiac Anaesthesia', 'Neuroanaesthesia', 'Pain'],
    supportedProcedures: ['GA', 'Regional', 'Airway management'],
    supportedInvestigations: ['CBC', 'ECG', 'CXR', 'Airway assessment'],
    workflows: ['Pre-Anaesthetic', 'Intraoperative', 'Recovery']
  },
  EmergencyMedicine: {
    id: 'EmergencyMedicine', name: 'Emergency Medicine', icon: 'Siren',
    description: 'Triage, ABCDE and emergency scores.',
    subspecialties: ['Trauma', 'Toxicology', 'Pediatric Emergency'],
    supportedProcedures: ['Airway', 'Resuscitation', 'Trauma care'],
    supportedInvestigations: ['ABG', 'ECG', 'FAST', 'Trauma series'],
    workflows: ['Triage', 'ABCDE', 'Investigations', 'Disposition']
  },
  Radiology: {
    id: 'Radiology', name: 'Radiology', icon: 'Scan',
    description: 'Structured radiology reporting by modality.',
    subspecialties: ['IR', 'Neuroradiology', 'MSK Radiology'],
    supportedProcedures: ['Contrast study', 'USG-guided procedure'],
    supportedInvestigations: ['X-Ray', 'USG', 'CT', 'MRI', 'Mammography', 'Fluoroscopy'],
    workflows: ['Requisition', 'Technique', 'Findings', 'Impression']
  },
  Pathology: {
    id: 'Pathology', name: 'Pathology', icon: 'Microscope',
    description: 'Specimen, histology, cytology and molecular reporting.',
    subspecialties: ['Histopathology', 'Cytopathology', 'Molecular'],
    supportedProcedures: ['Grossing', 'Frozen section'],
    supportedInvestigations: ['Histology', 'Cytology', 'IHC', 'Molecular'],
    workflows: ['Specimen', 'Microscopy', 'Diagnosis']
  },
  Endocrinology: {
    id: 'Endocrinology', name: 'Endocrinology', icon: 'Activity',
    description: 'Diabetes, thyroid, adrenal, pituitary and metabolic disorders.',
    subspecialties: ['Diabetology', 'Thyroid', 'Bone & Metabolism'],
    supportedProcedures: ['Insulin start', 'Thyroid FNA'],
    supportedInvestigations: ['HbA1c', 'TSH', 'FT4', 'Cortisol', 'Vitamin D', 'PTH'],
    workflows: ['Consultation', 'Labs', 'Diagnosis', 'Treatment', 'Follow-Up']
  },
  Rheumatology: {
    id: 'Rheumatology', name: 'Rheumatology', icon: 'Bone',
    description: 'Inflammatory arthritis and autoimmune disease documentation.',
    subspecialties: ['Autoimmune', 'Pediatric Rheumatology'],
    supportedProcedures: ['Joint injection', 'MSUS'],
    supportedInvestigations: ['ESR', 'CRP', 'RF', 'Anti-CCP', 'ANA', 'DAS28'],
    workflows: ['Consultation', 'Exam', 'Labs', 'Diagnosis', 'Treatment', 'Follow-Up']
  },
  InfectiousDisease: {
    id: 'InfectiousDisease', name: 'Infectious Disease', icon: 'Biohazard',
    description: 'Fever, exposure, cultures and antimicrobial stewardship.',
    subspecialties: ['HIV', 'TB', 'Tropical Medicine'],
    supportedProcedures: ['Cultures', 'Isolation'],
    supportedInvestigations: ['Cultures', 'Sensitivity', 'PCR'],
    workflows: ['Consultation', 'Source', 'Labs', 'Treatment', 'Isolation']
  },
  AllergyImmunology: {
    id: 'AllergyImmunology', name: 'Allergy & Immunology', icon: 'ShieldAlert',
    description: 'Allergy history, testing and immunotherapy.',
    subspecialties: ['Food allergy', 'Immunodeficiency'],
    supportedProcedures: ['Skin prick', 'Immunotherapy'],
    supportedInvestigations: ['IgE', 'Skin prick', 'Spirometry'],
    workflows: ['History', 'Testing', 'Diagnosis', 'Immunotherapy', 'Follow-Up']
  },
  Nutrition: {
    id: 'Nutrition', name: 'Nutrition', icon: 'Salad',
    description: 'Dietary assessment, anthropometry and diet planning.',
    subspecialties: ['Clinical nutrition', 'Sports nutrition'],
    supportedProcedures: ['Diet counselling'],
    supportedInvestigations: ['BMI', 'Body composition'],
    workflows: ['Assessment', 'Diagnosis', 'Diet Plan', 'Follow-Up']
  },
  BariatricMedicine: {
    id: 'BariatricMedicine', name: 'Bariatric Medicine', icon: 'Scale',
    description: 'Obesity, weight history and bariatric workup.',
    subspecialties: ['Medical weight management', 'Bariatric surgery liaison'],
    supportedProcedures: ['Lifestyle plan', 'Bariatric referral'],
    supportedInvestigations: ['BMI', 'Metabolic panel'],
    workflows: ['Assessment', 'Complications', 'Plan', 'Follow-Up']
  },
  SportsMedicine: {
    id: 'SportsMedicine', name: 'Sports Medicine', icon: 'Dumbbell',
    description: 'Sport injury, performance and return-to-play.',
    subspecialties: ['Team physician', 'Exercise medicine'],
    supportedProcedures: ['Functional tests', 'Rehab plan'],
    supportedInvestigations: ['MRI', 'Functional tests'],
    workflows: ['Injury', 'Assessment', 'Rehab', 'Return To Play']
  },
  PainManagement: {
    id: 'PainManagement', name: 'Pain Management', icon: 'Thermometer',
    description: 'Pain phenotyping, scales and interventional planning.',
    subspecialties: ['Interventional pain', 'Cancer pain'],
    supportedProcedures: ['Nerve block', 'Injection'],
    supportedInvestigations: ['MRI', 'NCS'],
    workflows: ['Assessment', 'Diagnosis', 'Intervention', 'Follow-Up']
  },
  PlasticSurgery: {
    id: 'PlasticSurgery', name: 'Plastic Surgery', icon: 'ScanFace',
    description: 'Cosmetic, trauma, burn and reconstructive planning.',
    subspecialties: ['Cosmetic', 'Burns', 'Reconstructive'],
    supportedProcedures: ['Wound care', 'Graft', 'Cosmetic procedure'],
    supportedInvestigations: ['Photography', 'Imaging'],
    workflows: ['Consultation', 'Planning', 'Surgery', 'Follow-Up']
  },
  VascularSurgery: {
    id: 'VascularSurgery', name: 'Vascular Surgery', icon: 'HeartPulse',
    description: 'PAD, varicose veins, DVT and vascular imaging.',
    subspecialties: ['Endovascular', 'Venous'],
    supportedProcedures: ['Bypass', 'EVLT', 'Embolectomy'],
    supportedInvestigations: ['ABI', 'Doppler', 'CTA', 'MRA'],
    workflows: ['Consultation', 'Exam', 'Imaging', 'Procedure', 'Follow-Up']
  },
  Neurosurgery: {
    id: 'Neurosurgery', name: 'Neurosurgery', icon: 'Brain',
    description: 'Brain, spine and neurosurgical planning.',
    subspecialties: ['Spine', 'Tumor', 'Vascular', 'Pediatric'],
    supportedProcedures: ['Craniotomy', 'Spine decompression', 'Shunt'],
    supportedInvestigations: ['MRI', 'CT', 'Angiography'],
    workflows: ['Consultation', 'Neuro Exam', 'Imaging', 'Surgical Planning', 'Surgery', 'Follow-Up']
  },
  FamilyMedicine: {
    id: 'FamilyMedicine', name: 'Family Medicine', icon: 'Users',
    description: 'Primary care, prevention and chronic disease.',
    subspecialties: ['Preventive Health', 'Occupational Health'],
    supportedProcedures: ['Vaccination', 'Health check'],
    supportedInvestigations: ['Screening labs'],
    workflows: ['Consultation', 'Prevention', 'Chronic Care', 'Follow-Up']
  },
  Geriatrics: {
    id: 'Geriatrics', name: 'Geriatrics', icon: 'PersonStanding',
    description: 'Frailty, falls, cognition and polypharmacy.',
    subspecialties: ['Falls clinic', 'Memory clinic'],
    supportedProcedures: ['CGA', 'Medication review'],
    supportedInvestigations: ['MMSE', 'MoCA', 'Labs'],
    workflows: ['CGA', 'Risk', 'Care Plan', 'Follow-Up']
  },
  PalliativeCare: {
    id: 'PalliativeCare', name: 'Palliative Care', icon: 'HeartHandshake',
    description: 'Symptom burden, goals of care and advance care planning.',
    subspecialties: ['Cancer palliative', 'Community palliative'],
    supportedProcedures: ['Symptom control', 'ACP'],
    supportedInvestigations: ['Symptom scores'],
    workflows: ['Assessment', 'Goals of Care', 'Symptom Plan', 'Family Support']
  },
  Hematology: {
    id: 'Hematology', name: 'Hematology', icon: 'Droplet',
    description: 'Hematologic disorders, coagulation and transfusion.',
    subspecialties: ['Hemato-oncology', 'Coagulation', 'Transfusion'],
    supportedProcedures: ['Bone marrow', 'Transfusion'],
    supportedInvestigations: ['CBC', 'PBS', 'Coagulation'],
    workflows: ['Consultation', 'Labs', 'Diagnosis', 'Treatment', 'Follow-Up']
  },
  ICU: {
    id: 'ICU', name: 'Critical Care / ICU', icon: 'Monitor',
    description: 'ICU organ support and daily care plan.',
    subspecialties: ['Cardiac ICU', 'Neuro ICU', 'Respiratory ICU'],
    supportedProcedures: ['Ventilation', 'Vasopressors', 'Lines'],
    supportedInvestigations: ['ABG', 'Labs', 'CXR'],
    workflows: ['Admission', 'Organ Systems', 'Daily Plan']
  }
};

export const SPECIALTY_DISPLAY_ORDER = Object.keys(specialtyRegistry);
