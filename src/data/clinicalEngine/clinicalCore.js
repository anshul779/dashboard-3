import { category, section } from './helpers';
import { libraryFields } from './fieldLibrary';

export const clinicalCore = {
  patient: category('core_patient', 'PATIENT CORE', [
    section('core_patient_ids', 'Identifiers', libraryFields('patientId', 'mrn', 'uhid')),
    section('core_patient_name', 'Name & Demographics', libraryFields(
      'firstName', 'middleName', 'lastName', 'preferredName', 'dob', 'age', 'gender', 'sexAtBirth', 'pronouns', 'maritalStatus', 'nationality', 'bloodGroup', 'photo'
    )),
    section('core_patient_contact', 'Contact & Address', libraryFields(
      'mobile', 'altMobile', 'email', 'address', 'city', 'state', 'country', 'postalCode', 'preferredLanguage', 'communicationPref'
    )),
    section('core_patient_emergency', 'Emergency & Guardian', libraryFields('emergencyContact', 'emergencyRel', 'guardianName', 'guardianContact')),
    section('core_patient_social_admin', 'Occupation & Insurance', libraryFields('occupation', 'employer', 'education', 'insuranceProvider', 'insuranceNumber', 'policyNumber', 'referralSource'))
  ], { scope: 'universal' }),

  encounter: category('core_encounter', 'ENCOUNTER CORE', [
    section('core_encounter_info', 'Visit / Encounter Information', libraryFields(
      'encounterId', 'visitType', 'visitDate', 'visitTime', 'provider', 'specialty', 'department', 'clinicLocation', 'chiefProvider', 'referringDoctor', 'reasonForVisit', 'appointmentType', 'consultationType', 'priority', 'triageStatus'
    ))
  ], { scope: 'universal' }),

  chiefComplaint: category('core_chief_complaint', 'CHIEF COMPLAINT', [
    section('core_cc_structured', 'Chief Complaint & Symptoms', libraryFields(
      'chiefComplaint', 'presentingSymptoms', 'symptomDuration', 'symptomSeverity', 'symptomFrequency', 'symptomOnset', 'acuteChronic', 'progression', 'aggravatingFactors', 'relievingFactors', 'associatedSymptoms'
    ))
  ], { scope: 'universal' }),

  hpi: category('core_hpi', 'HISTORY OF PRESENT ILLNESS', [
    section('core_hpi_opqrst', 'OPQRST / OLDCARTS', libraryFields(
      'hpiNarrative', 'hpiOnset', 'hpiProvocation', 'hpiPalliation', 'hpiQuality', 'hpiRegion', 'hpiRadiation', 'hpiSeverity', 'hpiTiming', 'hpiContext'
    ))
  ], { scope: 'universal' }),

  history: category('core_history', 'CLINICAL HISTORY CORE', [
    section('core_pmh', 'Past Medical History', libraryFields(
      'pmhChronic', 'pmhDiagnoses', 'pmhHospitalizations', 'pmhSurgeries', 'pmhProcedures', 'pmhTrauma', 'pmhInfectious', 'pmhTransfusion', 'pmhImmunization', 'hasDiabetes', 'pregnancyStatus'
    )),
    section('core_meds', 'Medication History', libraryFields('currentMedications', 'pastMedications', 'medicationList', 'medicationAllergies')),
    section('core_allergies', 'Allergy History', libraryFields('allergyDrug', 'allergyFood', 'allergyEnv', 'allergyLatex', 'allergyContrast', 'allergyList')),
    section('core_family', 'Family History', libraryFields(
      'fhDiabetes', 'fhHypertension', 'fhHeart', 'fhCancer', 'fhStroke', 'fhMental', 'fhGenetic', 'fhAutoimmune', 'fhEye', 'fhOther'
    )),
    section('core_social', 'Social History', libraryFields(
      'smoking', 'smokingDuration', 'cigarettesPerDay', 'alcohol', 'substanceUse', 'recreationalDrugs', 'caffeine', 'exercise', 'diet', 'sleep', 'sexualHistory', 'occupationalExposure', 'travelHistory', 'livingConditions'
    ))
  ], { scope: 'universal' }),

  ros: category('core_ros', 'REVIEW OF SYSTEMS', [
    section('core_ros_systems', 'Review of Systems', [
      { id: 'ros_constitutional', label: 'Constitutional', type: 'textarea', placeholder: 'Fever, weight change, fatigue...' },
      { id: 'ros_general', label: 'General', type: 'textarea' },
      { id: 'ros_cv', label: 'Cardiovascular', type: 'textarea' },
      { id: 'ros_resp', label: 'Respiratory', type: 'textarea' },
      { id: 'ros_gi', label: 'Gastrointestinal', type: 'textarea' },
      { id: 'ros_gu', label: 'Genitourinary', type: 'textarea' },
      { id: 'ros_neuro', label: 'Neurological', type: 'textarea' },
      { id: 'ros_msk', label: 'Musculoskeletal', type: 'textarea' },
      { id: 'ros_derm', label: 'Dermatological', type: 'textarea' },
      { id: 'ros_psych', label: 'Psychiatric', type: 'textarea' },
      { id: 'ros_endo', label: 'Endocrine', type: 'textarea' },
      { id: 'ros_heme', label: 'Hematological', type: 'textarea' },
      { id: 'ros_allergy_imm', label: 'Allergic / Immunological', type: 'textarea' },
      { id: 'ros_eyes', label: 'Eyes', type: 'textarea' },
      { id: 'ros_ent', label: 'ENT', type: 'textarea' }
    ])
  ], { scope: 'universal' }),

  vitals: category('core_vitals', 'VITALS CORE', [
    section('core_vitals_measures', 'Vital Signs', libraryFields(
      'height', 'weight', 'bmi', 'temperature', 'pulse', 'heartRate', 'respiratoryRate', 'bloodPressure', 'oxygenSaturation', 'painScore', 'bloodGlucose', 'headCircumference', 'waistCircumference', 'hipCircumference', 'vitalsPosition', 'vitalsSite', 'vitalsDevice', 'vitalsDateTime'
    ))
  ], { scope: 'universal' }),

  diagnosis: category('core_diagnosis', 'DIAGNOSIS CORE', [
    section('core_dx', 'Universal Diagnosis', libraryFields(
      'primaryDiagnosis', 'secondaryDiagnosis', 'differentialDiagnosis', 'icd10', 'snomed', 'diagnosisSeverity', 'diagnosisStage', 'diagnosisStatus', 'diagnosisChronicity', 'diagnosisLaterality', 'diagnosisNotes', 'diagnosisList'
    ))
  ], { scope: 'universal' }),

  investigation: category('core_investigation', 'INVESTIGATION CORE', [
    section('core_inv', 'Investigations', libraryFields(
      'investigationName', 'investigationCategory', 'investigationOrdered', 'investigationStatus', 'investigationResult', 'investigationUnits', 'investigationRange', 'investigationInterp', 'investigationAttach'
    ))
  ], { scope: 'universal' }),

  procedure: category('core_procedure', 'PROCEDURE CORE', [
    section('core_proc', 'Procedures', libraryFields(
      'procedureList', 'procedureName', 'procedureType', 'procedureDate', 'procedureProvider', 'procedureConsent', 'procedureAnaesthesia', 'procedureFindings', 'procedureComplications', 'procedureOutcome', 'procedureNotes', 'surgeryPlanned'
    ))
  ], { scope: 'universal' }),

  followup: category('core_followup', 'FOLLOW-UP CORE', [
    section('core_fu', 'Follow-up Plan', libraryFields(
      'followUpRequired', 'followUpDate', 'followUpInterval', 'followUpReason', 'monitoringParams', 'warningSigns', 'patientInstructions'
    ))
  ], { scope: 'universal' })
};

export const DEFAULT_CORE_FOR_NEW_SPECIALTIES = [
  clinicalCore.encounter,
  clinicalCore.chiefComplaint,
  clinicalCore.hpi,
  clinicalCore.history,
  clinicalCore.ros,
  clinicalCore.vitals
];

export const DEFAULT_CORE_TRAILER = [
  clinicalCore.investigation,
  clinicalCore.diagnosis,
  clinicalCore.procedure,
  clinicalCore.followup
];
