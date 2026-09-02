import { category, section, field } from './helpers';

const f = field;

export const conditionalModules = {
  diabetesDetails: category('mod_diabetes', 'DIABETES MODULE', [
    section('mod_diabetes_fields', 'Diabetes Assessment', [
      f('dm_type', 'Diabetes Type', 'select', { options: ['Type 1', 'Type 2', 'GDM', 'Secondary', 'Other'] }),
      f('dm_dx_date', 'Diagnosis Date', 'date'),
      f('dm_hba1c', 'HbA1c', 'number', { unit: '%' }),
      f('dm_fbs', 'Fasting Blood Sugar', 'number', { unit: 'mg/dL' }),
      f('dm_ppbs', 'Post Prandial Blood Sugar', 'number', { unit: 'mg/dL' }),
      f('dm_rbs', 'Random Blood Sugar', 'number', { unit: 'mg/dL' }),
      f('dm_hypo', 'Hypoglycemia History', 'textarea'),
      f('dm_hyper_sx', 'Hyperglycemia Symptoms', 'textarea'),
      f('dm_insulin', 'Insulin Use', 'select', { options: ['No', 'Yes'] }),
      f('dm_oral', 'Oral Medication', 'textarea'),
      f('dm_complications', 'Diabetic Complications', 'multiselect', { options: ['None', 'Retinopathy', 'Nephropathy', 'Neuropathy', 'Foot disease', 'CAD'] }),
      f('dm_foot', 'Foot Examination', 'textarea'),
      f('dm_retinopathy', 'Retinopathy', 'select', { options: ['None', 'NPDR', 'PDR', 'DME'] }),
      f('dm_nephropathy', 'Nephropathy', 'select', { options: ['None', 'Microalbuminuria', 'Macroalbuminuria', 'CKD'] }),
      f('dm_neuropathy', 'Neuropathy', 'select', { options: ['None', 'Peripheral', 'Autonomic'] })
    ])
  ], { dependsOn: { field: 'has_diabetes', value: 'Yes' }, defaultVisible: false }),

  hypertensionDetails: category('mod_htn', 'HYPERTENSION MODULE', [
    section('mod_htn_fields', 'Hypertension Assessment', [
      f('htn_dx', 'Hypertension Diagnosis', 'select', { options: ['No', 'Yes'] }),
      f('htn_readings', 'BP Readings', 'textarea'),
      f('htn_home', 'Home BP Monitoring', 'textarea'),
      f('htn_meds', 'Medication', 'textarea'),
      f('htn_compliance', 'Compliance', 'select', { options: ['Good', 'Partial', 'Poor'] }),
      f('htn_tod', 'End Organ Damage', 'multiselect', { options: ['None', 'LVH', 'CKD', 'Stroke', 'Retinopathy'] }),
      f('htn_cv_risk', 'Cardiovascular Risk', 'select', { options: ['Low', 'Moderate', 'High', 'Very high'] })
    ])
  ], { dependsOn: { field: 'htn_dx', value: 'Yes' }, defaultVisible: false }),

  thyroidDetails: category('mod_thyroid', 'THYROID MODULE', [
    section('mod_thyroid_fields', 'Thyroid Assessment', [
      f('thy_disorder', 'Thyroid Disorder', 'select', { options: ['None', 'Hypothyroid', 'Hyperthyroid', 'Nodule', 'Goitre'] }),
      f('thy_tsh', 'TSH', 'number'),
      f('thy_t3', 'T3', 'number'),
      f('thy_t4', 'T4', 'number'),
      f('thy_meds', 'Medication', 'textarea'),
      f('thy_sx', 'Symptoms', 'textarea')
    ])
  ], { dependsOn: { field: 'thy_disorder', values: ['Hypothyroid', 'Hyperthyroid', 'Nodule', 'Goitre'] }, defaultVisible: false }),

  pregnancyModule: category('mod_pregnancy', 'OBSTETRIC HISTORY', [
    section('mod_preg', 'Pregnancy Details', [
      f('ob_lmp', 'LMP', 'date'),
      f('ob_edd', 'EDD', 'date'),
      f('ob_ga', 'Gestational Age', 'text'),
      f('ob_gravida', 'Gravida', 'number'),
      f('ob_para', 'Para', 'number'),
      f('ob_high_risk', 'High Risk Factors', 'textarea')
    ])
  ], { dependsOn: { field: 'is_pregnant', value: 'Yes' }, defaultVisible: false }),

  severePain: category('mod_severe_pain', 'SEVERE PAIN ASSESSMENT', [
    section('mod_severe_pain_fields', 'Severe Pain Workup', [
      f('pain_location', 'Pain Location', 'text'),
      f('pain_type', 'Pain Type', 'select', { options: ['Nociceptive', 'Neuropathic', 'Mixed', 'Visceral'] }),
      f('pain_radiation', 'Radiation', 'text'),
      f('pain_duration', 'Duration', 'text'),
      f('pain_neuropathic', 'Neuropathic Pain Screening', 'textarea'),
      f('pain_impact', 'Functional Impact', 'textarea')
    ])
  ], { dependsOn: { field: 'vit_pain', gt: 7 }, defaultVisible: false }),

  preoperative: category('mod_preop', 'PREOPERATIVE ASSESSMENT', [
    section('mod_preop_fields', 'Preoperative Assessment', [
      f('preop_asa', 'ASA Classification', 'select', { options: ['I', 'II', 'III', 'IV', 'V', 'VI'] }),
      f('preop_airway', 'Airway Assessment', 'textarea'),
      f('preop_fitness', 'Fitness for Surgery', 'select', { options: ['Fit', 'Optimize first', 'High risk'] }),
      f('preop_consent', 'Consent', 'select', { options: ['Obtained', 'Pending'] }),
      f('preop_plan', 'Procedure Planning', 'textarea')
    ])
  ], { dependsOn: { field: 'surgery_planned', value: 'Yes' }, defaultVisible: false }),

  glaucomaExtra: category('mod_glaucoma_extra', 'GLAUCOMA SUBSPECIALTY ADD-ON', [
    section('mod_glaucoma_extra_fields', 'Glaucoma-specific fields', [
      f('gl_target_iop', 'Target IOP Strategy', 'textarea'),
      f('gl_progression', 'Structural / Functional Progression', 'textarea'),
      f('gl_drop_intolerance', 'Drop Intolerance / Allergy', 'textarea'),
      f('gl_surgery_type', 'Glaucoma Surgery Type', 'select', { options: ['None', 'Trabeculectomy', 'Tube', 'MIGS', 'CPC'] })
    ])
  ], { defaultVisible: false, specialty: 'Ophthalmology', subspecialty: 'Glaucoma' })
};

export const subspecialtySchemas = {
  glaucoma: {
    id: 'glaucoma',
    name: 'Glaucoma',
    extends: 'Ophthalmology',
    categories: [conditionalModules.glaucomaExtra]
  },
  retina: {
    id: 'retina',
    name: 'Retina',
    extends: 'Ophthalmology',
    categories: [
      category('sub_retina_extra', 'RETINA SUBSPECIALTY ADD-ON', [
        section('sub_retina_extra_fields', 'Retina add-on', [
          f('ret_injection_plan', 'Injection Plan', 'textarea'),
          f('ret_laser_plan', 'Laser Plan', 'textarea'),
          f('ret_surgery_plan', 'VR Surgery Plan', 'textarea')
        ])
      ], { defaultVisible: false })
    ]
  },
  cataract: {
    id: 'cataract',
    name: 'Cataract',
    extends: 'Ophthalmology',
    categories: [
      category('sub_cataract_workflow', 'CATARACT WORKFLOW', [
        section('sub_cat_wf', 'Cataract pathway', [
          f('cat_biometry_status', 'Biometry Status', 'select', { options: ['Pending', 'Done'] }),
          f('cat_iol_plan', 'IOL Planning', 'textarea'),
          f('cat_surgery_plan', 'Surgery Planning', 'textarea'),
          f('cat_postop', 'Postoperative Follow-up', 'textarea')
        ])
      ], { defaultVisible: false })
    ]
  },
  cornea: { id: 'cornea', name: 'Cornea', extends: 'Ophthalmology', categories: [] },
  pediatricOphthalmology: { id: 'pediatricOphthalmology', name: 'Pediatric Ophthalmology', extends: 'Ophthalmology', categories: [] },
  neuroOphthalmology: { id: 'neuroOphthalmology', name: 'Neuro-Ophthalmology', extends: 'Ophthalmology', categories: [] },
  oculoplasty: {
    id: 'oculoplasty',
    name: 'Oculoplasty',
    extends: 'Ophthalmology',
    categories: [
      category('oculoplasty', 'OCULOPLASTY', [
        section('oculoplasty_fields', 'Oculoplasty Assessment', [
          f('ocp_lid_position', 'Lid Position', 'textarea'),
          f('ocp_ptosis', 'Ptosis', 'select', { options: ['None', 'Unilateral', 'Bilateral'] }),
          f('ocp_entropion', 'Entropion / Ectropion', 'text'),
          f('ocp_orbit', 'Orbit / Proptosis', 'textarea'),
          f('ocp_lacrimal', 'Lacrimal System', 'textarea'),
          f('ocp_plan', 'Oculoplasty Plan', 'textarea')
        ])
      ], { defaultVisible: false })
    ]
  },
  interventionalCardiology: { id: 'interventionalCardiology', name: 'Interventional Cardiology', extends: 'Cardiology', categories: [] },
  electrophysiology: { id: 'electrophysiology', name: 'Electrophysiology', extends: 'Cardiology', categories: [] },
  heartFailure: { id: 'heartFailure', name: 'Heart Failure', extends: 'Cardiology', categories: [] },
  preventiveCardiology: { id: 'preventiveCardiology', name: 'Preventive Cardiology', extends: 'Cardiology', categories: [] },
  spine: { id: 'spine', name: 'Spine', extends: 'Orthopedics', categories: [] },
  sportsMedicine: { id: 'sportsMedicine', name: 'Sports Medicine', extends: 'Orthopedics', categories: [] },
  jointReplacement: { id: 'jointReplacement', name: 'Joint Replacement', extends: 'Orthopedics', categories: [] },
  handSurgery: { id: 'handSurgery', name: 'Hand Surgery', extends: 'Orthopedics', categories: [] },
  colorectal: { id: 'colorectal', name: 'Colorectal', extends: 'GeneralSurgery', categories: [] },
  hepatobiliary: { id: 'hepatobiliary', name: 'Hepatobiliary', extends: 'GeneralSurgery', categories: [] },
  bariatricSurgery: { id: 'bariatricSurgery', name: 'Bariatric', extends: 'GeneralSurgery', categories: [] }
};

const FOCUS_TO_SUBSPECIALTY = {
  Glaucoma: 'glaucoma',
  'Retina & Vitreous': 'retina',
  'Cataract & Anterior Segment': 'cataract',
  'Cornea & External Disease': 'cornea',
  'Pediatric Ophthalmology & Strabismus': 'pediatricOphthalmology',
  'Neuro-Ophthalmology': 'neuroOphthalmology',
  Oculoplasty: 'oculoplasty',
  'Interventional Cardiology': 'interventionalCardiology',
  Electrophysiology: 'electrophysiology',
  'Heart Failure': 'heartFailure',
  'Preventive Cardiology': 'preventiveCardiology',
  Spine: 'spine',
  'Sports Injury': 'sportsMedicine',
  'Joint Replacement': 'jointReplacement',
  'Hand & Upper Limb': 'handSurgery',
  'Colorectal Surgery': 'colorectal',
  'Bariatric': 'bariatricSurgery'
};

export function getSubspecialtyKeyFromFocus(clinicalFocus) {
  return FOCUS_TO_SUBSPECIALTY[clinicalFocus] || null;
}
