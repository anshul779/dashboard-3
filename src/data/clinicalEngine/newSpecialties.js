import { category, section, field as f } from './helpers';

const created = {};

created.Psychology = {
  id: 'Psychology',
  name: 'Psychology',
  categories: [
    category('psy_intake', 'INTAKE ASSESSMENT', [
      section('psy_intake_fields', 'Presenting problems & history', [
        f('psy_presenting', 'Presenting Problems', 'textarea'),
        f('psy_psych_hx', 'Psychological History', 'textarea'),
        f('psy_mse', 'Mental Status', 'textarea', { type: 'mental-status-widget' }),
        f('psy_goals', 'Therapy Goals', 'textarea')
      ])
    ]),
    category('psy_session', 'SESSION DOCUMENTATION', [
      section('psy_session_fields', 'Session notes', [
        f('psy_modality', 'Modality', 'select', { options: ['CBT', 'DBT', 'ACT', 'Mindfulness Therapy', 'Couples Therapy', 'Family Therapy', 'Trauma Therapy', 'Behavioral Therapy'] }),
        f('psy_notes', 'Session Notes', 'textarea'),
        f('psy_interventions', 'Therapeutic Interventions', 'textarea'),
        f('psy_homework', 'Homework', 'textarea'),
        f('psy_progress', 'Progress Notes', 'textarea'),
        f('psy_plan', 'Treatment Plan', 'textarea')
      ])
    ])
  ]
};

created.Obstetrics = {
  id: 'Obstetrics',
  name: 'Obstetrics',
  categories: [
    category('ob_confirm', 'PREGNANCY CONFIRMATION', [
      section('ob_confirm_fields', 'Dating', [
        f('is_pregnant', 'Pregnancy', 'select', { options: ['Yes'] }),
        f('ob_lmp', 'LMP', 'date', { type: 'pregnancy-widget' }),
        f('ob_edd', 'EDD', 'date'),
        f('ob_ga', 'Gestational Age', 'text'),
        f('ob_gravida', 'Gravida', 'number'),
        f('ob_para', 'Para', 'number'),
        f('ob_prev_preg', 'Previous Pregnancy History', 'textarea'),
        f('ob_high_risk', 'High Risk Factors', 'textarea')
      ])
    ]),
    category('ob_anc', 'ANTENATAL CARE', [
      section('ob_anc_fields', 'ANC visit', [
        f('ob_wt', 'Weight', 'number', { unit: 'kg' }),
        f('ob_bp', 'BP', 'text'),
        f('ob_urine_prot', 'Urine Protein', 'text'),
        f('ob_fhr', 'Fetal Heart Rate', 'number'),
        f('ob_fundal', 'Fundal Height', 'text'),
        f('ob_fm', 'Fetal Movement', 'text'),
        f('ob_presentation', 'Presentation', 'select', { options: ['Cephalic', 'Breech', 'Transverse', 'Oblique', 'Unstable'] }),
        f('ob_lie', 'Lie', 'select', { options: ['Longitudinal', 'Transverse', 'Oblique'] })
      ])
    ]),
    category('ob_inv', 'OBSTETRIC INVESTIGATIONS', [
      section('ob_inv_fields', 'Ultrasound pathway', [
        f('ob_usg', 'Ultrasound', 'textarea'),
        f('ob_nt', 'NT Scan', 'textarea'),
        f('ob_anomaly', 'Anomaly Scan', 'textarea'),
        f('ob_growth', 'Growth Scan', 'textarea'),
        f('ob_doppler', 'Doppler', 'textarea')
      ])
    ]),
    category('ob_labour', 'LABOUR & DELIVERY', [
      section('ob_labour_fields', 'Intrapartum / postpartum', [
        f('ob_labour', 'Labour Monitoring', 'textarea'),
        f('ob_partograph', 'Partograph', 'textarea'),
        f('ob_delivery', 'Delivery Notes', 'textarea'),
        f('ob_postpartum', 'Postpartum Assessment', 'textarea')
      ])
    ])
  ]
};

created.Anesthesiology = {
  id: 'Anesthesiology',
  name: 'Anaesthesiology',
  categories: [
    category('anes_preop', 'PRE-ANAESTHETIC ASSESSMENT', [
      section('anes_preop_fields', 'Airway & ASA', [
        f('anes_asa', 'ASA Classification', 'select', { options: ['I', 'II', 'III', 'IV', 'V', 'VI'] }),
        f('anes_airway', 'Airway Assessment', 'textarea'),
        f('anes_mallampati', 'Mallampati', 'select', { options: ['I', 'II', 'III', 'IV'] }),
        f('anes_prev', 'Previous Anaesthesia History', 'textarea')
      ])
    ]),
    category('anes_intra', 'INTRAOPERATIVE RECORD', [
      section('anes_intra_fields', 'Anaesthesia conduct', [
        f('anes_type', 'Anaesthesia Type', 'select', { options: ['GA', 'Spinal', 'Epidural', 'Regional', 'MAC', 'Local'] }),
        f('anes_monitor', 'Monitoring', 'textarea'),
        f('anes_meds', 'Medications', 'textarea'),
        f('anes_airway_mgmt', 'Airway Management', 'textarea'),
        f('anes_fluids', 'Fluids', 'textarea'),
        f('anes_ebl', 'Blood Loss', 'text')
      ])
    ])
  ]
};

created.InfectiousDisease = {
  id: 'InfectiousDisease',
  name: 'Infectious Disease',
  categories: [
    category('id_hx', 'INFECTION HISTORY', [
      section('id_hx_fields', 'Exposure & source', [
        f('id_fever', 'Fever', 'textarea'),
        f('id_exposure', 'Exposure History', 'textarea'),
        f('id_travel', 'Travel History', 'textarea'),
        f('id_source', 'Infection Source', 'textarea'),
        f('id_abx_hx', 'Antimicrobial History', 'textarea')
      ])
    ]),
    category('id_labs', 'MICROBIOLOGY', [
      section('id_lab_fields', 'Cultures & stewardship', [
        f('id_cultures', 'Cultures', 'textarea'),
        f('id_sensitivity', 'Sensitivity', 'textarea'),
        f('id_abx', 'Antibiotic Treatment', 'textarea'),
        f('id_isolation', 'Isolation Status', 'select', { options: ['None', 'Contact', 'Droplet', 'Airborne', 'Protective'] })
      ])
    ])
  ]
};

created.AllergyImmunology = {
  id: 'AllergyImmunology',
  name: 'Allergy & Immunology',
  categories: [
    category('ai_hx', 'ALLERGY ASSESSMENT', [
      section('ai_hx_fields', 'Triggers & reactions', [
        f('ai_trigger', 'Trigger', 'textarea'),
        f('ai_reaction', 'Reaction', 'textarea'),
        f('ai_anaphylaxis', 'Anaphylaxis', 'select', { options: ['No', 'Yes'] }),
        f('ai_testing', 'Testing', 'textarea')
      ])
    ]),
    category('ai_tests', 'ALLERGY TESTING', [
      section('ai_test_fields', 'Investigations', [
        f('ai_spt', 'Skin Prick Test', 'textarea'),
        f('ai_ige', 'IgE', 'text'),
        f('ai_it', 'Immunotherapy', 'textarea')
      ])
    ])
  ]
};

created.BariatricMedicine = {
  id: 'BariatricMedicine',
  name: 'Bariatric Medicine',
  categories: [
    category('bar_hx', 'WEIGHT HISTORY', [
      section('bar_hx_fields', 'Obesity assessment', [
        f('bar_wt_hx', 'Weight History', 'textarea'),
        f('bar_bmi', 'BMI', 'number'),
        f('bar_waist', 'Waist Circumference', 'number', { unit: 'cm' }),
        f('bar_comp', 'Obesity Complications', 'textarea'),
        f('bar_diet', 'Diet History', 'textarea'),
        f('bar_ex', 'Exercise', 'textarea'),
        f('bar_psych', 'Psychological Assessment', 'textarea')
      ])
    ])
  ]
};

created.SportsMedicine = {
  id: 'SportsMedicine',
  name: 'Sports Medicine',
  categories: [
    category('sm_injury', 'SPORT INJURY', [
      section('sm_injury_fields', 'Injury & RTP', [
        f('sm_sport', 'Sport', 'text'),
        f('sm_training', 'Training', 'textarea'),
        f('sm_mechanism', 'Injury Mechanism', 'textarea'),
        f('sm_goals', 'Performance Goals', 'textarea'),
        f('sm_func', 'Functional Tests', 'textarea'),
        f('sm_assess', 'Injury Assessment', 'textarea'),
        f('sm_rehab', 'Rehabilitation Plan', 'textarea'),
        f('sm_rtp', 'Return To Play', 'textarea')
      ])
    ])
  ]
};

created.PainManagement = {
  id: 'PainManagement',
  name: 'Pain Management',
  categories: [
    category('pain_assess', 'PAIN ASSESSMENT', [
      section('pain_assess_fields', 'Phenotype', [
        f('pain_location', 'Pain Location', 'text'),
        f('pain_type', 'Pain Type', 'select', { options: ['Nociceptive', 'Neuropathic', 'Mixed', 'Visceral', 'Nociplastic'] }),
        f('vit_pain', 'Pain Severity', 'slider', { min: 0, max: 10, type: 'pain-scale' }),
        f('pain_radiation', 'Radiation', 'text'),
        f('pain_duration', 'Duration', 'text'),
        f('pain_vas', 'VAS', 'slider', { min: 0, max: 10, type: 'pain-scale' }),
        f('pain_neuropathic', 'Neuropathic Pain Screening', 'textarea')
      ])
    ])
  ]
};

created.PlasticSurgery = {
  id: 'PlasticSurgery',
  name: 'Plastic Surgery',
  categories: [
    category('ps_consult', 'PLASTIC SURGERY ASSESSMENT', [
      section('ps_consult_fields', 'Cosmetic / reconstructive', [
        f('ps_concern', 'Cosmetic Concern', 'textarea'),
        f('ps_trauma', 'Trauma', 'textarea'),
        f('ps_burn', 'Burn Assessment', 'textarea'),
        f('ps_wound', 'Wound Assessment', 'textarea'),
        f('ps_photo', 'Preoperative Photography', 'text'),
        f('ps_plan', 'Procedure Planning', 'textarea'),
        f('surgery_planned', 'Surgery Planned', 'select', { options: ['No', 'Yes'] })
      ])
    ])
  ]
};

created.VascularSurgery = {
  id: 'VascularSurgery',
  name: 'Vascular Surgery',
  categories: [
    category('vasc_hx', 'VASCULAR HISTORY', [
      section('vasc_hx_fields', 'PAD / venous', [
        f('vasc_claud', 'Claudication', 'textarea'),
        f('vasc_vv', 'Varicose Veins', 'textarea'),
        f('vasc_dvt', 'DVT', 'textarea'),
        f('vasc_pulses', 'Peripheral Pulses', 'textarea')
      ])
    ]),
    category('vasc_inv', 'VASCULAR IMAGING', [
      section('vasc_inv_fields', 'ABI & Doppler', [
        f('vasc_abi', 'ABI', 'text'),
        f('vasc_doppler', 'Doppler', 'textarea'),
        f('vasc_imaging', 'Vascular Imaging', 'textarea')
      ])
    ])
  ]
};

created.Geriatrics = {
  id: 'Geriatrics',
  name: 'Geriatrics',
  categories: [
    category('ger_cga', 'COMPREHENSIVE GERIATRIC ASSESSMENT', [
      section('ger_cga_fields', 'Function & frailty', [
        f('ger_func', 'Functional Status', 'textarea'),
        f('ger_frailty', 'Frailty', 'select', { options: ['Fit', 'Pre-frail', 'Frail'] }),
        f('ger_falls', 'Falls', 'textarea'),
        f('ger_cog', 'Cognitive Assessment', 'textarea'),
        f('ger_poly', 'Polypharmacy', 'textarea'),
        f('ger_adl', 'ADL', 'textarea'),
        f('ger_iadl', 'IADL', 'textarea')
      ])
    ])
  ]
};

created.PalliativeCare = {
  id: 'PalliativeCare',
  name: 'Palliative Care',
  categories: [
    category('pal_assess', 'PALLIATIVE ASSESSMENT', [
      section('pal_assess_fields', 'Goals of care', [
        f('pal_burden', 'Symptom Burden', 'textarea'),
        f('pal_pain', 'Pain', 'textarea'),
        f('pal_qol', 'Quality of Life', 'textarea'),
        f('pal_goals', 'Goals of Care', 'textarea'),
        f('pal_acp', 'Advance Care Planning', 'textarea'),
        f('pal_family', 'Family Support', 'textarea')
      ])
    ])
  ]
};

created.FamilyMedicine = created.FamilyMedicine || {
  id: 'FamilyMedicine',
  name: 'Family Medicine',
  categories: []
};

export const newSpecialtySchemas = created;
