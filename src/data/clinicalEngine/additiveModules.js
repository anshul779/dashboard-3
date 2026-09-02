import { category, section, field as f } from './helpers';
import { conditionalModules } from './conditionalModules';

/** Additive categories merged into existing (non-locked) specialty schemas by id. */
export const additiveModules = {
  Cardiology: [
    category('card_scores', 'CARDIAC SCORES', [
      section('card_scores_info', 'Risk & Severity Scores', [
        f('card_nyha', 'NYHA Class', 'select', { options: ['I', 'II', 'III', 'IV'] }),
        f('card_killip', 'Killip Class', 'select', { options: ['I', 'II', 'III', 'IV'] }),
        f('card_cha2ds2', 'CHA2DS2-VASc', 'number', { type: 'score-calculator', placeholder: '0–9' }),
        f('card_hasbled', 'HAS-BLED', 'number', { type: 'score-calculator', placeholder: '0–9' }),
        f('card_timi', 'TIMI Score', 'number', { type: 'score-calculator' }),
        f('card_grace', 'GRACE Score', 'number', { type: 'score-calculator' }),
        f('card_score_notes', 'Score Interpretation', 'textarea')
      ])
    ]),
    category('card_cad_module', 'CORONARY ARTERY DISEASE', [
      section('card_cad_fields', 'CAD Assessment', [
        f('cad_ccs', 'CCS Angina Class', 'select', { options: ['I', 'II', 'III', 'IV', 'N/A'] }),
        f('cad_acs', 'ACS Type', 'select', { options: ['None', 'UA', 'NSTEMI', 'STEMI'] }),
        f('cad_anatomy', 'Coronary Anatomy', 'textarea'),
        f('cad_syntax', 'SYNTAX Score', 'text')
      ])
    ])
  ],

  General: [
    conditionalModules.diabetesDetails,
    conditionalModules.hypertensionDetails,
    conditionalModules.thyroidDetails,
    category('gen_chronic', 'CHRONIC DISEASE MANAGEMENT', [
      section('gen_chronic_fields', 'Chronic Care', [
        f('has_diabetes', 'Diabetes', 'select', { options: ['No', 'Yes'] }),
        f('htn_dx', 'Hypertension Diagnosis', 'select', { options: ['No', 'Yes'] }),
        f('thy_disorder', 'Thyroid Disorder', 'select', { options: ['None', 'Hypothyroid', 'Hyperthyroid', 'Nodule', 'Goitre'] }),
        f('gen_care_plan', 'Chronic Disease Care Plan', 'textarea'),
        f('gen_targets', 'Treatment Targets', 'textarea')
      ])
    ]),
    category('gen_infectious', 'INFECTIOUS DISEASE ASSESSMENT', [
      section('gen_id_fields', 'Infection Workup', [
        f('id_fever', 'Fever', 'select', { options: ['No', 'Yes'] }),
        f('id_source', 'Suspected Source', 'text'),
        f('id_travel', 'Travel / Exposure', 'textarea'),
        f('id_abx', 'Antimicrobial History', 'textarea')
      ])
    ]),
    category('gen_metabolic', 'METABOLIC ASSESSMENT', [
      section('gen_metabolic_fields', 'Metabolic Profile', [
        f('met_waist', 'Waist Circumference', 'number', { unit: 'cm' }),
        f('met_syndrome', 'Metabolic Syndrome', 'select', { options: ['No', 'Yes'] }),
        f('met_notes', 'Metabolic Notes', 'textarea')
      ])
    ]),
    conditionalModules.preoperative,
    conditionalModules.severePain
  ],

  Orthopedics: [
    category('ortho_tests', 'ORTHOPEDIC SPECIAL TESTS', [
      section('ortho_tests_fields', 'Ligament & Neural Tests', [
        f('test_lachman', 'Lachman', 'select', { options: ['Not done', 'Negative', 'Positive'] }),
        f('test_mcmurray', 'McMurray', 'select', { options: ['Not done', 'Negative', 'Positive'] }),
        f('test_drawer', 'Drawer Test', 'select', { options: ['Not done', 'Anterior +', 'Posterior +', 'Negative'] }),
        f('test_varus', 'Varus Stress', 'select', { options: ['Not done', 'Negative', 'Positive'] }),
        f('test_valgus', 'Valgus Stress', 'select', { options: ['Not done', 'Negative', 'Positive'] }),
        f('test_slr', 'Straight Leg Raise', 'select', { options: ['Not done', 'Negative', 'Positive'] }),
        f('test_spurling', 'Spurling Test', 'select', { options: ['Not done', 'Negative', 'Positive'] }),
        f('test_phalen', 'Phalen Test', 'select', { options: ['Not done', 'Negative', 'Positive'] }),
        f('test_tinel', 'Tinel Sign', 'select', { options: ['Not done', 'Negative', 'Positive'] }),
        f('test_apprehension', 'Apprehension Test', 'select', { options: ['Not done', 'Negative', 'Positive'] })
      ])
    ]),
    category('ortho_regions', 'REGION-SPECIFIC EXAMINATION', [
      section('ortho_region_fields', 'Body-part modules', [
        { id: 'ortho_region', label: 'Active Region Module', type: 'select', options: ['Shoulder', 'Elbow', 'Wrist', 'Hand', 'Hip', 'Knee', 'Ankle', 'Foot', 'Cervical Spine', 'Thoracic Spine', 'Lumbar Spine'] },
        { id: 'ortho_region_inspection', label: 'Region Inspection', type: 'textarea' },
        { id: 'ortho_region_palpation', label: 'Region Palpation', type: 'textarea' },
        { id: 'ortho_region_rom', label: 'Region ROM', type: 'textarea', typeNote: 'range-of-motion-widget' },
        { id: 'ortho_region_stability', label: 'Stability', type: 'textarea' },
        { id: 'ortho_region_nv', label: 'Neurovascular Status', type: 'textarea' }
      ])
    ])
  ],

  Dermatology: [
    category('derm_conditions', 'CONDITION MODULES', [
      section('derm_condition_fields', 'Disease-specific documentation', [
        f('derm_module', 'Active Condition Module', 'select', { options: ['Acne', 'Eczema', 'Psoriasis', 'Fungal Infection', 'Vitiligo', 'Alopecia', 'Hair Disorders', 'Nail Disorders', 'Skin Cancer', 'Pigmented Lesions', 'Allergic Skin Disease'] }),
        f('derm_lesion_type', 'Lesion Type', 'select', { options: ['Macule', 'Papule', 'Plaque', 'Nodule', 'Vesicle', 'Bulla', 'Pustule', 'Wheal', 'Ulcer', 'Erosion'] }),
        f('derm_primary_lesion', 'Primary Lesion', 'text'),
        f('derm_secondary_lesion', 'Secondary Lesion', 'text'),
        f('derm_morphology', 'Morphology', 'text'),
        f('derm_shape', 'Shape', 'text'),
        f('derm_color', 'Color', 'text'),
        f('derm_size', 'Size', 'text'),
        f('derm_surface', 'Surface', 'text'),
        f('derm_border', 'Border', 'text'),
        f('derm_distribution', 'Distribution', 'text'),
        f('derm_symmetry', 'Symmetry', 'select', { options: ['Symmetric', 'Asymmetric'] }),
        f('derm_pattern', 'Pattern', 'text'),
        f('derm_site', 'Site', 'text', { type: 'lesion-map' }),
        f('derm_itch', 'Itching', 'select', { options: ['None', 'Mild', 'Moderate', 'Severe'] }),
        f('derm_pain', 'Pain', 'select', { options: ['None', 'Mild', 'Moderate', 'Severe'] }),
        f('derm_bleed', 'Bleeding', 'select', { options: ['No', 'Yes'] }),
        f('derm_discharge', 'Discharge', 'text')
      ])
    ])
  ],

  Physiotherapy: [
    category('pt_outcomes', 'OUTCOME MEASURES', [
      section('pt_outcome_fields', 'Functional outcomes', [
        f('pt_vas', 'VAS', 'slider', { min: 0, max: 10, type: 'pain-scale' }),
        f('pt_strength_grade', 'Muscle Strength Grade', 'select', { options: ['0', '1', '2', '3', '4', '5'] }),
        f('pt_adl', 'ADL Assessment', 'textarea'),
        f('pt_device', 'Assistive Device', 'text'),
        f('pt_stg', 'Short Term Goals', 'textarea'),
        f('pt_ltg', 'Long Term Goals', 'textarea'),
        f('pt_balance', 'Balance', 'textarea'),
        f('pt_coord', 'Coordination', 'textarea')
      ])
    ])
  ],

  Neurology: [
    category('neuro_scores', 'NEUROLOGICAL SCORES', [
      section('neuro_score_fields', 'Validated scores', [
        f('neuro_gcs', 'GCS', 'text', { type: 'score-calculator' }),
        f('neuro_nihss', 'NIHSS', 'number', { type: 'score-calculator' }),
        f('neuro_mmse', 'MMSE', 'number', { type: 'score-calculator' }),
        f('neuro_moca', 'MoCA', 'number', { type: 'score-calculator' }),
        f('neuro_mrs', 'Modified Rankin Score', 'select', { options: ['0', '1', '2', '3', '4', '5', '6'] })
      ])
    ])
  ],

  Psychiatry: [
    category('psych_tools', 'ASSESSMENT TOOLS', [
      section('psych_tool_fields', 'Optional structured modules', [
        f('psych_phq9', 'PHQ-9', 'number'),
        f('psych_gad7', 'GAD-7', 'number'),
        f('psych_ybocs', 'Y-BOCS', 'number'),
        f('psych_ymrs', 'YMRS', 'number'),
        f('psych_pcl5', 'PCL-5', 'number'),
        f('psych_audit', 'AUDIT', 'number')
      ])
    ])
  ],

  Gynecology: [
    category('gyn_conditions', 'GYNECOLOGIC CONDITIONS', [
      section('gyn_condition_fields', 'Condition modules', [
        f('gyn_pcos', 'PCOS', 'select', { options: ['No', 'Yes'] }),
        f('gyn_endo', 'Endometriosis', 'select', { options: ['No', 'Yes'] }),
        f('gyn_fibroid', 'Fibroids', 'select', { options: ['No', 'Yes'] }),
        f('gyn_infertility', 'Infertility', 'select', { options: ['No', 'Yes'] }),
        f('gyn_menstrual_dx', 'Menstrual Disorders', 'text'),
        f('gyn_menopause', 'Menopause', 'select', { options: ['No', 'Perimenopause', 'Yes'] }),
        f('gyn_pid', 'PID', 'select', { options: ['No', 'Yes'] })
      ])
    ])
  ],

  Pediatrics: [
    category('ped_growth', 'GROWTH & DEVELOPMENT', [
      section('ped_growth_fields', 'Growth documentation', [
        f('ped_birth_wt', 'Birth Weight', 'text'),
        f('ped_ga_birth', 'Gestational Age at Birth', 'text'),
        f('ped_apgar', 'APGAR', 'text'),
        f('ped_feeding', 'Feeding History', 'textarea'),
        f('ped_milestones', 'Developmental Milestones', 'textarea'),
        f('ped_percentiles', 'Growth Percentiles', 'text', { type: 'growth-chart' }),
        f('ped_hc', 'Head Circumference', 'number', { unit: 'cm' })
      ])
    ])
  ],

  ENT: [
    category('ent_inv_extra', 'ENT INVESTIGATIONS', [
      section('ent_inv_fields', 'Audiology & endoscopy', [
        f('ent_audio', 'Audiometry', 'textarea'),
        f('ent_tympanometry', 'Tympanometry', 'textarea'),
        f('ent_endoscopy', 'Endoscopy', 'textarea'),
        f('ent_laryngoscopy', 'Laryngoscopy', 'textarea')
      ])
    ])
  ],

  Dentistry: [
    category('dent_chart', 'TOOTH CHART', [
      section('dent_chart_fields', 'Odontogram', [
        f('dent_tooth_no', 'Tooth Number', 'text', { type: 'tooth-chart' }),
        f('dent_surface', 'Surface', 'multiselect', { options: ['M', 'O', 'D', 'B', 'L', 'I'] }),
        f('dent_caries', 'Caries', 'select', { options: ['None', 'Enamel', 'Dentin', 'Pulp'] }),
        f('dent_filling', 'Filling', 'text'),
        f('dent_crown', 'Crown', 'select', { options: ['No', 'Yes'] }),
        f('dent_missing', 'Missing Tooth', 'select', { options: ['No', 'Yes'] }),
        f('dent_implant', 'Implant', 'select', { options: ['No', 'Yes'] }),
        f('dent_mobility', 'Mobility', 'select', { options: ['0', '1', '2', '3'] }),
        f('dent_pocket', 'Pocket Depth', 'text'),
        f('dent_gingiva', 'Gingival Condition', 'textarea')
      ])
    ])
  ],

  Urology: [
    category('uro_scores', 'UROLOGY SCORES', [
      section('uro_score_fields', 'LUTS / prostate', [
        f('uro_ipss', 'IPSS', 'number', { type: 'score-calculator' }),
        f('uro_psa', 'PSA', 'number', { unit: 'ng/mL' }),
        f('uro_dre', 'Prostate Examination', 'textarea'),
        f('uro_flow', 'Uroflowmetry', 'textarea'),
        f('uro_cysto', 'Cystoscopy', 'textarea')
      ])
    ])
  ],

  Oncology: [
    category('onc_staging', 'STAGING & BIOMARKERS', [
      section('onc_stage_fields', 'TNM and molecular', [
        f('onc_type', 'Cancer Type', 'text'),
        f('onc_site', 'Primary Site', 'text'),
        f('onc_histology', 'Histology', 'text'),
        f('onc_stage', 'Stage', 'text'),
        f('onc_t', 'T', 'text'),
        f('onc_n', 'N', 'text'),
        f('onc_m', 'M', 'text'),
        f('onc_biomarkers', 'Biomarkers', 'textarea'),
        f('onc_molecular', 'Molecular Testing', 'textarea'),
        f('onc_ecog', 'ECOG Performance Status', 'select', { options: ['0', '1', '2', '3', '4'] }),
        f('onc_cycle', 'Treatment Cycle', 'text'),
        f('onc_response', 'Response', 'select', { options: ['CR', 'PR', 'SD', 'PD', 'Not assessed'] }),
        f('onc_toxicity', 'Toxicity / Adverse Events', 'textarea')
      ])
    ])
  ],

  EmergencyMedicine: [
    category('em_abcde', 'ABCDE ASSESSMENT', [
      section('em_abcde_fields', 'Primary survey', [
        f('em_airway', 'Airway', 'textarea'),
        f('em_breathing', 'Breathing', 'textarea'),
        f('em_circulation', 'Circulation', 'textarea'),
        f('em_disability', 'Disability', 'textarea'),
        f('em_exposure', 'Exposure', 'textarea'),
        f('em_gcs', 'GCS', 'text'),
        f('em_news', 'NEWS', 'number'),
        f('em_qsofa', 'qSOFA', 'number')
      ])
    ])
  ],

  Rheumatology: [
    category('rheum_labs', 'DISEASE ACTIVITY & SEROLOGY', [
      section('rheum_lab_fields', 'DAS28 and autoantibodies', [
        f('rheum_das28', 'DAS28', 'number'),
        f('rheum_esr', 'ESR', 'number'),
        f('rheum_crp', 'CRP', 'number'),
        f('rheum_rf', 'RF', 'text'),
        f('rheum_ccp', 'Anti-CCP', 'text'),
        f('rheum_ana', 'ANA', 'text')
      ])
    ])
  ],

  Nephrology: [
    category('neph_labs', 'RENAL LABS & DIALYSIS', [
      section('neph_lab_fields', 'Kidney function', [
        f('neph_cr', 'Creatinine', 'number', { unit: 'mg/dL' }),
        f('neph_egfr', 'eGFR', 'number'),
        f('neph_urea', 'Urea', 'number'),
        f('neph_lytes', 'Electrolytes', 'text'),
        f('neph_uprot', 'Urine Protein', 'text'),
        f('neph_access', 'Dialysis Access', 'text')
      ])
    ])
  ]
};
