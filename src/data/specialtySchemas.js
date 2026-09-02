// Specialty Schemas Definition for UniCare EHR
// Comprehensive data-driven clinical field definitions for all specialties.

export const SPECIALTY_SCHEMAS = {
  Ophthalmology: {
    id: 'Ophthalmology',
    name: 'Ophthalmology',
    categories: [
      {
        id: 'patient_data',
        name: 'PATIENT DATA',
        defaultVisible: true,
        sections: [
          {
            id: 'patient_info',
            name: 'Patient Demographics & Overview',
            defaultVisible: true,
            fields: [
              { id: 'pat_overview', label: 'Patient Overview', type: 'textarea', placeholder: 'Summary of patient history and status...' },
              { id: 'pat_demographics', label: 'Demographics', type: 'text', placeholder: 'Age, Gender, DOB' },
              { id: 'pat_contact', label: 'Contact Information', type: 'text', placeholder: 'Phone, Email, Address' },
              { id: 'pat_identifiers', label: 'Identifiers', type: 'text', placeholder: 'MRN, Aadhar/SSN, National ID' },
              { id: 'pat_insurance', label: 'Insurance / EMI', type: 'text', placeholder: 'Policy No., Provider, Coverage' },
              { id: 'pat_referral', label: 'Referral Information', type: 'text', placeholder: 'Referred by Dr. / Hospital' },
              { id: 'pat_prev_reports', label: 'Previous Reports', type: 'text', placeholder: 'Prior lab/ophthalmic records summary' },
              { id: 'pat_prev_ophth_hx', label: 'Previous Ophthalmic History', type: 'textarea', placeholder: 'Glasses history, surgeries, eye conditions...' }
            ]
          }
        ]
      },
      {
        id: 'chief_complaints',
        name: 'CHIEF COMPLAINTS',
        defaultVisible: true,
        sections: [
          {
            id: 'cc_details',
            name: 'Chief Complaints & History of Presenting Problem',
            defaultVisible: true,
            fields: [
              { id: 'cc_primary', label: 'Chief Complaint', type: 'select', options: ['Diminished Vision', 'Eye Pain', 'Redness', 'Watering / Epiphora', 'Itching / Burning', 'Foreign Body Sensation', 'Floaters / Flashes', 'Double Vision (Diplopia)', 'Dryness', 'Discharge', 'Squint / Deviation', 'Headache'], placeholder: 'Select primary complaint...' },
              { id: 'cc_duration', label: 'Complaint Since', type: 'text', placeholder: 'e.g. 3 days, 2 weeks, 1 month' },
              { id: 'cc_laterality', label: 'Laterality', type: 'select', options: ['Right Eye (OD)', 'Left Eye (OS)', 'Both Eyes (OU)'] },
              { id: 'cc_severity', label: 'Severity', type: 'select', options: ['Mild', 'Moderate', 'Severe', 'Variable'] },
              { id: 'cc_frequency', label: 'Frequency', type: 'select', options: ['Constant', 'Intermittent', 'Morning', 'Evening', 'Occasional'] },
              { id: 'cc_assoc_symptoms', label: 'Associated Symptoms', type: 'textarea', placeholder: 'Photophobia, halo around lights, headache...' },
              { id: 'cc_prev_treatment', label: 'Previous Treatment', type: 'textarea', placeholder: 'Eye drops used, prior consults...' },
              { id: 'cc_rel_history', label: 'Relevant History', type: 'textarea', placeholder: 'Trauma, chemical exposure, contact lens wear...' }
            ]
          }
        ]
      },
      {
        id: 'history',
        name: 'HISTORY',
        defaultVisible: true,
        sections: [
          {
            id: 'hpi_ocular_hx',
            name: 'Ocular & Medical History',
            defaultVisible: true,
            fields: [
              { id: 'hx_hpi', label: 'History of Present Illness', type: 'textarea', placeholder: 'Detailed narrative of symptoms...' },
              { id: 'hx_past_ocular', label: 'Past Ocular History', type: 'textarea', placeholder: 'Glaucoma, Cataract, Amblyopia, Retinal detachment...' },
              { id: 'hx_prev_surgery', label: 'Previous Eye Surgery', type: 'select', options: ['No Surgery', 'Phaco + IOL (OD)', 'Phaco + IOL (OS)', 'Phaco + IOL (OU)', 'Trabeculectomy', 'SFIOL', 'LASIK/PRK', 'Vitreoretinal Surgery', 'Squint Correction', 'Corneal Graft', 'Other'], laterality: true },
              { id: 'hx_prev_laser', label: 'Previous Laser Treatment', type: 'select', options: ['None', 'YAG Capsulotomy', 'YAG PI', 'PRP (Panretinal)', 'Focal Laser', 'SLT/ALT'] },
              { id: 'hx_prev_trauma', label: 'Previous Trauma', type: 'text', placeholder: 'Blunt injury, chemical spray, metallic FB...' },
              { id: 'hx_prev_inj', label: 'Previous Injections', type: 'select', options: ['None', 'Intravitreal Anti-VEGF', 'Intravitreal Steroid', 'Sub-Tenon Steroid'] },
              { id: 'hx_glasses_use', label: 'Previous Glasses / Contact Lens Use', type: 'select', options: ['No Glasses', 'Distance Only', 'Reading Only', 'Bifocal / Progressive', 'Soft Contact Lens', 'RGP Lens', 'Scleral Lens'] },
              { id: 'hx_fam_ocular', label: 'Family Ocular History', type: 'text', placeholder: 'Glaucoma, Keratoconus, RP, Myopia...' },
              { id: 'hx_sys_med', label: 'Systemic Medical History', type: 'multiselect', options: ['Diabetes Mellitus', 'Hypertension', 'Ischemic Heart Disease', 'Thyroid Disorder', 'Rheumatoid Arthritis / Autoimmune', 'Asthma / COPD', 'Stroke / TIA', 'Renal Disease', 'None'] },
              { id: 'hx_surgical', label: 'Surgical History', type: 'text', placeholder: 'Non-ocular surgeries...' },
              { id: 'hx_medications', label: 'Medication History', type: 'textarea', placeholder: 'Current systemic & topical medications...' },
              { id: 'hx_allergies', label: 'Drug Allergies', type: 'text', placeholder: 'Penicillin, Sulfa, Moxifloxacin, Betadine...' },
              { id: 'hx_family', label: 'Family History', type: 'text', placeholder: 'Diabetes, HTN, CAD...' },
              { id: 'hx_social', label: 'Social History', type: 'select', options: ['Non-Smoker / Non-Alcoholic', 'Smoker', 'Alcoholic', 'Occasional Alcohol'] },
              { id: 'hx_occupational', label: 'Occupational History', type: 'text', placeholder: 'Computer worker, Welder, Outdoor worker, Driver...' }
            ]
          }
        ]
      },
      {
        id: 'visual_acuity',
        name: 'VISUAL ACUITY',
        defaultVisible: true,
        sections: [
          {
            id: 'va_assessment',
            name: 'Distance & Near Visual Acuity',
            defaultVisible: true,
            fields: [
              { id: 'va_unaided_od', label: 'Unaided VA (OD)', type: 'select', options: ['6/6', '6/9', '6/12', '6/18', '6/24', '6/36', '6/60', '3/60', '1/60', 'FC 1m', 'FC 0.5m', 'HMC', 'PL+', 'PL-'] },
              { id: 'va_unaided_os', label: 'Unaided VA (OS)', type: 'select', options: ['6/6', '6/9', '6/12', '6/18', '6/24', '6/36', '6/60', '3/60', '1/60', 'FC 1m', 'FC 0.5m', 'HMC', 'PL+', 'PL-'] },
              { id: 'va_bcva_od', label: 'Best Corrected VA (OD)', type: 'select', options: ['6/6', '6/9', '6/12', '6/18', '6/24', '6/36', '6/60', '3/60', '1/60'] },
              { id: 'va_bcva_os', label: 'Best Corrected VA (OS)', type: 'select', options: ['6/6', '6/9', '6/12', '6/18', '6/24', '6/36', '6/60', '3/60', '1/60'] },
              { id: 'va_near_od', label: 'Near VA (OD)', type: 'select', options: ['N6', 'N8', 'N10', 'N12', 'N18', 'N24', 'N36'] },
              { id: 'va_near_os', label: 'Near VA (OS)', type: 'select', options: ['N6', 'N8', 'N10', 'N12', 'N18', 'N24', 'N36'] },
              { id: 'va_both_eyes', label: 'Both Eyes (OU) VA', type: 'select', options: ['6/6', '6/9', '6/12', '6/18', '6/24', '6/36', '6/60'] },
              { id: 'va_pinhole_od', label: 'Pinhole VA (OD)', type: 'select', options: ['No Imp', '6/6', '6/9', '6/12', '6/18', '6/24', '6/36'] },
              { id: 'va_pinhole_os', label: 'Pinhole VA (OS)', type: 'select', options: ['No Imp', '6/6', '6/9', '6/12', '6/18', '6/24', '6/36'] },
              { id: 'va_decimal', label: 'Decimal VA', type: 'text', placeholder: 'OD: 1.0 / OS: 0.8' },
              { id: 'va_logmar', label: 'LogMAR', type: 'text', placeholder: 'OD: 0.0 / OS: 0.1' },
              { id: 'va_previous', label: 'Previous VA', type: 'text', placeholder: 'Historical vision records...' },
              { id: 'va_notes', label: 'VA Notes', type: 'textarea', placeholder: 'Fixation, eccentric viewing, illiterate E chart...' }
            ]
          }
        ]
      },
      {
        id: 'refraction',
        name: 'REFRACTION',
        defaultVisible: true,
        sections: [
          {
            id: 'refraction_details',
            name: 'Objective & Subjective Refraction',
            defaultVisible: true,
            fields: [
              { id: 'ref_obj_od', label: 'Objective Refraction (OD)', type: 'text', placeholder: '+1.00 DS / -0.50 DC x 90' },
              { id: 'ref_obj_os', label: 'Objective Refraction (OS)', type: 'text', placeholder: '+1.25 DS / -0.75 DC x 180' },
              { id: 'ref_subj_od_sph', label: 'Right Eye SPH', type: 'text', placeholder: '+1.00' },
              { id: 'ref_subj_od_cyl', label: 'Right Eye CYL', type: 'text', placeholder: '-0.50' },
              { id: 'ref_subj_od_axis', label: 'Right Eye Axis', type: 'text', placeholder: '90°' },
              { id: 'ref_subj_od_va', label: 'Right Eye VA', type: 'select', options: ['6/6', '6/9', '6/12', '6/18', '6/24', '6/36', '6/60'] },
              { id: 'ref_subj_os_sph', label: 'Left Eye SPH', type: 'text', placeholder: '+1.25' },
              { id: 'ref_subj_os_cyl', label: 'Left Eye CYL', type: 'text', placeholder: '-0.75' },
              { id: 'ref_subj_os_axis', label: 'Left Eye Axis', type: 'text', placeholder: '180°' },
              { id: 'ref_subj_os_va', label: 'Left Eye VA', type: 'select', options: ['6/6', '6/9', '6/12', '6/18', '6/24', '6/36', '6/60'] },
              { id: 'ref_near_add', label: 'Near Addition', type: 'select', options: ['+0.75', '+1.00', '+1.25', '+1.50', '+1.75', '+2.00', '+2.25', '+2.50', '+2.75', '+3.00'] },
              { id: 'ref_pd', label: 'Pupillary Distance (PD)', type: 'text', placeholder: '63 mm (31.5 / 31.5)' },
              { id: 'ref_prism', label: 'Prism', type: 'text', placeholder: '2 BD OD / 2 BU OS' },
              { id: 'ref_final_rx', label: 'Final Prescription', type: 'textarea', placeholder: 'Glasses prescription output...' },
              { id: 'ref_trial_lens', label: 'Trial Lens Comfort', type: 'select', options: ['Comfortable', 'Distortion', 'Diplopia', 'Asthenopia'] },
              { id: 'ref_cl_rx', label: 'Contact Lens Prescription', type: 'text', placeholder: 'BC: 8.6, Dia: 14.2, Pwr: -2.50' }
            ]
          }
        ]
      },
      {
        id: 'intraocular_pressure',
        name: 'INTRAOCULAR PRESSURE',
        defaultVisible: true,
        sections: [
          {
            id: 'iop_assessment',
            name: 'IOP & Tonometry Assessment',
            defaultVisible: true,
            fields: [
              { id: 'iop_od', label: 'IOP Right Eye (OD)', type: 'number', unit: 'mmHg', placeholder: '14' },
              { id: 'iop_os', label: 'IOP Left Eye (OS)', type: 'number', unit: 'mmHg', placeholder: '15' },
              { id: 'iop_method', label: 'Measurement Method', type: 'select', options: ['Goldmann Applanation (GAT)', 'Non-Contact Tonometer (NCT)', 'Rebound Tonometer (Icare)', 'Schiotz', 'Perkins'] },
              { id: 'iop_time', label: 'Measurement Time', type: 'text', placeholder: '10:30 AM' },
              { id: 'iop_repeat', label: 'Repeat IOP', type: 'text', placeholder: 'OD: 15 / OS: 16 (at 2:00 PM)' },
              { id: 'iop_pachymetry', label: 'Pachymetry', type: 'text', placeholder: 'OD: 545 µm / OS: 550 µm' },
              { id: 'iop_cct', label: 'Central Corneal Thickness (CCT)', type: 'text', placeholder: 'Average CCT' },
              { id: 'iop_target', label: 'IOP Target', type: 'text', placeholder: '< 16 mmHg' },
              { id: 'iop_notes', label: 'IOP Notes', type: 'textarea', placeholder: 'Corneal edema effect, diurnal variation...' }
            ]
          }
        ]
      },
      {
        id: 'pupils',
        name: 'PUPILS',
        defaultVisible: true,
        sections: [
          {
            id: 'pupil_exam',
            name: 'Pupillary Exam & Reflexes',
            defaultVisible: true,
            fields: [
              { id: 'pup_size_od', label: 'Right Pupil Size', type: 'select', options: ['3 mm', '2 mm', '4 mm', '5 mm', '6 mm', 'Pinpoint', 'Dilated (8 mm)'] },
              { id: 'pup_size_os', label: 'Left Pupil Size', type: 'select', options: ['3 mm', '2 mm', '4 mm', '5 mm', '6 mm', 'Pinpoint', 'Dilated (8 mm)'] },
              { id: 'pup_shape', label: 'Pupil Shape', type: 'select', options: ['Round & Regular', 'Irregular', 'Keyhole (Coloboma)', 'Peaked', 'Oval'] },
              { id: 'pup_direct_od', label: 'Direct Reaction (OD)', type: 'select', options: ['Brisk', 'Sluggish', 'Fixed / Absent'] },
              { id: 'pup_direct_os', label: 'Direct Reaction (OS)', type: 'select', options: ['Brisk', 'Sluggish', 'Fixed / Absent'] },
              { id: 'pup_consensual', label: 'Consensual Reaction', type: 'select', options: ['Present OU', 'Reduced OD', 'Reduced OS', 'Absent'] },
              { id: 'pup_rapd', label: 'RAPD (Marcus Gunn)', type: 'select', options: ['Negative', 'Grade 1 OD', 'Grade 2 OD', 'Grade 3 OD', 'Grade 1 OS', 'Grade 2 OS', 'Grade 3 OS'] },
              { id: 'pup_anisocoria', label: 'Anisocoria', type: 'select', options: ['Absent', 'Greater in Light', 'Greater in Dark'] },
              { id: 'pup_light_rxn', label: 'Light Reaction', type: 'text', placeholder: 'Brisk OU' },
              { id: 'pup_accomm', label: 'Accommodation Reflex', type: 'select', options: ['Normal OU', 'Reduced', 'Light-Near Dissociation'] }
            ]
          }
        ]
      },
      {
        id: 'ocular_motility',
        name: 'OCULAR MOTILITY / ALIGNMENT',
        defaultVisible: false,
        sections: [
          {
            id: 'motility_details',
            name: 'Extraocular Movements & Alignment',
            defaultVisible: true,
            fields: [
              { id: 'mot_fullness', label: 'Ocular Motility', type: 'select', options: ['Full in all gazes OU', 'Restriction present', 'Underaction', 'Overaction'] },
              { id: 'mot_versions', label: 'Versions', type: 'text', placeholder: 'Smooth conjugate movements...' },
              { id: 'mot_ductions', label: 'Ductions', type: 'text', placeholder: 'Monocular movement limits...' },
              { id: 'mot_cover_test', label: 'Cover Test', type: 'select', options: ['Orthophoric', 'Esotropia', 'Exotropia', 'Esophoria', 'Exophoria', 'Hypertropia', 'Hypotropia'] },
              { id: 'mot_hirschberg', label: 'Hirschberg Test', type: 'text', placeholder: 'Corneal light reflex centered / 15 deg ET' },
              { id: 'mot_maddox', label: 'Maddox Rod', type: 'text', placeholder: 'Vertical/Horizontal phoria diopters' },
              { id: 'mot_pct', label: 'Prism Cover Test', type: 'text', placeholder: '12 PD ET at distance, 16 PD ET at near' },
              { id: 'mot_strabismus', label: 'Strabismus', type: 'select', options: ['None', 'Concomitant', 'Incomitant / Paralytic', 'Restrictive'] },
              { id: 'mot_diplopia', label: 'Diplopia', type: 'select', options: ['None', 'Monocular OD', 'Monocular OS', 'Binocular Horizontal', 'Binocular Vertical', 'Binocular Torsional'] },
              { id: 'mot_nystagmus', label: 'Nystagmus', type: 'select', options: ['Absent', 'Horizontal Jerk', 'Vertical Jerk', 'Pendular', 'Gaze-evoked'] }
            ]
          }
        ]
      },
      {
        id: 'external_exam',
        name: 'EXTERNAL EXAMINATION',
        defaultVisible: false,
        sections: [
          {
            id: 'ext_details',
            name: 'Lids, Orbit & Periorbital Area',
            defaultVisible: true,
            fields: [
              { id: 'ext_eyelids', label: 'Eyelids', type: 'select', options: ['Normal', 'Blepharitis', 'Chalazion', 'Hordeolum', 'Entropion', 'Ectropion', 'Trichiasis', 'Ptosis'] },
              { id: 'ext_lashes', label: 'Lashes', type: 'select', options: ['Normal', 'Trichiasis', 'Madarosis', 'Distichiasis', 'Crusting'] },
              { id: 'ext_lacrimal', label: 'Lacrimal Apparatus', type: 'select', options: ['Normal', 'Dacryocystitis', 'Epiphora', 'Regurgitation on Pressure', 'Punctal Stenosis'] },
              { id: 'ext_periorbital', label: 'Periorbital Area', type: 'text', placeholder: 'Skin, edema, cellulitis...' },
              { id: 'ext_orbit', label: 'Orbit', type: 'select', options: ['Normal', 'Proptosis', 'Enophthalmos', 'Tenderness', 'Bruit'] },
              { id: 'ext_symmetry', label: 'Facial Symmetry', type: 'select', options: ['Symmetrical', 'Facial Nerve Palsy (R)', 'Facial Nerve Palsy (L)'] },
              { id: 'ext_proptosis', label: 'Proptosis', type: 'text', placeholder: 'Hertel Exophthalmometry: OD 16mm / OS 17mm' },
              { id: 'ext_edema', label: 'Lid Edema', type: 'select', options: ['Absent', 'Mild', 'Moderate', 'Severe'] },
              { id: 'ext_ptosis', label: 'Ptosis Grade', type: 'select', options: ['None', 'Mild (1-2mm)', 'Moderate (3mm)', 'Severe (4mm+)'] },
              { id: 'ext_findings', label: 'External Findings', type: 'textarea', placeholder: 'Other external observations...' }
            ]
          }
        ]
      },
      {
        id: 'slit_lamp',
        name: 'SLIT LAMP EXAMINATION',
        defaultVisible: true,
        sections: [
          {
            id: 'slit_details',
            name: 'Anterior Segment Slit Lamp Examination',
            defaultVisible: true,
            fields: [
              { id: 'sl_lids', label: 'Lids & Margins', type: 'select', options: ['Normal', 'MGD', 'Blepharitis', 'Meibomian Capping', 'Lid Laxity'] },
              { id: 'sl_lashes', label: 'Lashes', type: 'select', options: ['Normal', 'Trichiasis', 'Distichiasis', 'Debris'] },
              { id: 'sl_conjunctiva', label: 'Conjunctiva', type: 'select', options: ['Clear / Quiet', 'Congested / Hyperemic', 'Chemic', 'Subconjunctival Hemorrhage', 'Follicles', 'Papillae', 'Pterygium', 'Pinguecula'] },
              { id: 'sl_sclera', label: 'Sclera & Episclera', type: 'select', options: ['Normal / White', 'Episcleritis', 'Scleritis', 'Icterus', 'Melanosis'] },
              { id: 'sl_cornea', label: 'Cornea', type: 'select', options: ['Clear', 'Epithelial Defect', 'Infiltrate / Ulcer', 'Nebula / Macula Scar', 'Edema', 'Guttata', 'KPs'] },
              { id: 'sl_cornea_epi', label: 'Corneal Epithelium', type: 'text', placeholder: 'Intact, SPK, Abrasion, Fluorescein staining...' },
              { id: 'sl_cornea_stroma', label: 'Stroma', type: 'text', placeholder: 'Clear, edema, infiltrate, haze...' },
              { id: 'sl_cornea_endo', label: 'Endothelium', type: 'text', placeholder: 'Guttata, KPs, Pigment...' },
              { id: 'sl_ac', label: 'Anterior Chamber', type: 'select', options: ['Quiet & Deep', 'Shallow', 'Cells 1+', 'Cells 2+', 'Cells 3+', 'Flare 1+', 'Hypopyon', 'Hyphema'] },
              { id: 'sl_ac_cells', label: 'AC Cells', type: 'select', options: ['0 (Quiet)', '0.5+ (1-5 cells)', '1+ (6-15 cells)', '2+ (16-25 cells)', '3+ (26-50 cells)', '4+ (>50 cells)'] },
              { id: 'sl_ac_flare', label: 'AC Flare', type: 'select', options: ['None', '1+ (Faint)', '2+ (Moderate)', '3+ (Marked)', '4+ (Fibrinous)'] },
              { id: 'sl_iris', label: 'Iris', type: 'select', options: ['Normal Pattern', 'Synechiae (Anterior)', 'Synechiae (Posterior)', 'Atrophy', 'Nodule (Koeppe/Busacca)', 'Rubeosis Iridis'] },
              { id: 'sl_pupil', label: 'Pupil Margin', type: 'select', options: ['Regular', 'Ectropion Uveae', 'Persistent Pupillary Membrane', 'Sphincter Tear'] },
              { id: 'sl_lens', label: 'Lens', type: 'select', options: ['Clear', 'Nuclear Sclerosis (NS 1-4)', 'Cortical Cataract', 'Posterior Subcapsular (PSC)', 'Pseudophakia (PCIOL)', 'Aphakia'] },
              { id: 'sl_capsule', label: 'Capsule', type: 'select', options: ['Intact & Clear', 'PCO (Posterior Capsular Opacification)', 'Capsulotomy Done', 'Exfoliation Material'] },
              { id: 'sl_zonules', label: 'Zonules', type: 'select', options: ['Intact', 'Subluxated Lens', 'Zonular Dehiscence'] },
              { id: 'sl_vitreous_ant', label: 'Anterior Vitreous', type: 'select', options: ['Clear', 'Pigment Cells (Tobacco Dust)', 'RBCs', 'Vitreous in AC'] },
              { id: 'sl_other', label: 'Other Slit Lamp Findings', type: 'textarea', placeholder: 'Detailed anterior segment notes...' }
            ]
          }
        ]
      },
      {
        id: 'cornea',
        name: 'CORNEA',
        defaultVisible: false,
        sections: [
          {
            id: 'cornea_sub',
            name: 'Corneal Diagnostics & Specialized Exam',
            defaultVisible: true,
            fields: [
              { id: 'cor_clarity', label: 'Corneal Clarity', type: 'select', options: ['Clear', 'Hazy', 'Opaque', 'Edematous'] },
              { id: 'cor_epi_defect', label: 'Epithelial Defect', type: 'text', placeholder: 'Size: 2x3mm, Central/Peripheral, Margin' },
              { id: 'cor_ulcer', label: 'Corneal Ulcer', type: 'select', options: ['None', 'Bacterial', 'Fungal', 'Acanthamoeba', 'Herpetic Dendritic', 'Neurotrophic'] },
              { id: 'cor_scar', label: 'Corneal Scar', type: 'select', options: ['None', 'Nebula', 'Macula', 'Leucoma', 'Adherent Leucoma'] },
              { id: 'cor_edema', label: 'Corneal Edema', type: 'select', options: ['None', 'Microcystic', 'Stromal Thickening', 'Descemet Folds'] },
              { id: 'cor_keratitis', label: 'Keratitis Type', type: 'select', options: ['None', 'Microbial', 'Interstitial', 'Marginal', 'Exposure', 'Dry Eye SPK'] },
              { id: 'cor_neovascular', label: 'Neovascularization', type: 'select', options: ['None', 'Superficial Pannus', 'Deep Stromal Vessels'] },
              { id: 'cor_dystrophy', label: 'Corneal Dystrophy', type: 'select', options: ['None', 'Fuchs Endothelial', 'EBMD / Map-Dot-Fingerprint', 'Lattice', 'Granular', 'Macular'] },
              { id: 'cor_degeneration', label: 'Degeneration', type: 'select', options: ['None', 'Arcus Senilis', 'Band Keratopathy', 'Salzmann Nodular', 'Terrien Marginal'] },
              { id: 'cor_topography', label: 'Corneal Topography', type: 'text', placeholder: 'K1 / K2 readings, Astigmatism axis, Keratoconus pattern' },
              { id: 'cor_pachymetry', label: 'Pachymetry Map', type: 'text', placeholder: 'Thinnest point thickness' },
              { id: 'cor_sensitivity', label: 'Corneal Sensitivity', type: 'select', options: ['Normal OU', 'Reduced OD', 'Reduced OS', 'Absent'] }
            ]
          }
        ]
      },
      {
        id: 'anterior_chamber',
        name: 'ANTERIOR CHAMBER',
        defaultVisible: false,
        sections: [
          {
            id: 'ac_sub',
            name: 'Anterior Chamber & Angle Assessment',
            defaultVisible: true,
            fields: [
              { id: 'ac_depth', label: 'AC Depth (Van Herick)', type: 'select', options: ['Grade 4 (Wide Open)', 'Grade 3', 'Grade 2 (Moderately Shallow)', 'Grade 1 (Extremely Shallow)', 'Grade 0 (Closed)'] },
              { id: 'ac_cells_grade', label: 'AC Cells (SUN Grade)', type: 'select', options: ['0', '0.5+', '1+', '2+', '3+', '4+'] },
              { id: 'ac_flare_grade', label: 'AC Flare (SUN Grade)', type: 'select', options: ['0', '1+', '2+', '3+', '4+'] },
              { id: 'ac_hypopyon', label: 'Hypopyon Level', type: 'text', placeholder: 'Height in mm (e.g. 1.5 mm)' },
              { id: 'ac_reaction', label: 'AC Reaction', type: 'select', options: ['None', 'Fibrinous', 'Granulomatous', 'Hyphema'] },
              { id: 'ac_angle_findings', label: 'Angle Findings (Gonioscopy)', type: 'textarea', placeholder: 'Shaffer Grade, PAS, Neovascularization of Angle (NVA), Pigment grade...' }
            ]
          }
        ]
      },
      {
        id: 'lens',
        name: 'LENS',
        defaultVisible: false,
        sections: [
          {
            id: 'lens_sub',
            name: 'Crystalline Lens & IOL Status',
            defaultVisible: true,
            fields: [
              { id: 'lens_status', label: 'Lens Status', type: 'select', options: ['Clear Phakic', 'Cataractous', 'Pseudophakic (PCIOL)', 'Pseudophakic (ACIOL)', 'Aphakic'] },
              { id: 'lens_clear', label: 'Clear Lens', type: 'select', options: ['Yes', 'No'] },
              { id: 'lens_cataract', label: 'Cataract Present', type: 'select', options: ['No Cataract', 'Nuclear', 'Cortical', 'PSC', 'Mixed', 'Mature / Hypermature'] },
              { id: 'lens_cat_type', label: 'Cataract Morphological Type', type: 'select', options: ['Nuclear Sclerosis', 'Cortical Spikes', 'Posterior Subcapsular', 'Anterior Subcapsular', 'Posterior Polar', 'Traumatic', 'Congenital'] },
              { id: 'lens_cat_grade', label: 'Cataract Grade (LOCS III)', type: 'select', options: ['Grade 1 (Mild)', 'Grade 2 (Moderate)', 'Grade 3 (Advanced)', 'Grade 4 (Severe / Black Cataract)'] },
              { id: 'lens_pseudophakia', label: 'Pseudophakia', type: 'select', options: ['In-the-bag IOL', 'Sulcus IOL', 'ACIOL', 'SFIOL / Iris-claw'] },
              { id: 'lens_aphakia', label: 'Aphakia', type: 'select', options: ['Surgical Aphakia', 'Traumatic Aphakia'] },
              { id: 'lens_iol', label: 'IOL Model & Power', type: 'text', placeholder: 'e.g. Alcon AcrySof +21.5 D' },
              { id: 'lens_iol_pos', label: 'IOL Position & Centration', type: 'select', options: ['Well Centered', 'Decentered', 'Tilted', 'Subluxated', 'Dislocated'] },
              { id: 'lens_post_cap', label: 'Posterior Capsule', type: 'select', options: ['Clear', 'Mild PCO', 'Dense PCO', 'YAG Capsulotomy Intact'] },
              { id: 'lens_pco', label: 'PCO Grade', type: 'select', options: ['None', 'Grade 1', 'Grade 2', 'Grade 3'] }
            ]
          }
        ]
      },
      {
        id: 'fundus',
        name: 'FUNDUS / POSTERIOR SEGMENT',
        defaultVisible: true,
        sections: [
          {
            id: 'fundus_details',
            name: 'Optic Disc, Macula, Vessels & Retina',
            defaultVisible: true,
            fields: [
              { id: 'fun_vitreous', label: 'Vitreous', type: 'select', options: ['Clear', 'PVD Present', 'Vitreous Haze', 'Vitreous Hemorrhage', 'Asteroid Hyalosis', 'Synchysis Scintillans'] },
              { id: 'fun_optic_disc', label: 'Optic Disc Color & Margin', type: 'select', options: ['Pink & Well-defined', 'Pale / Atrophic', 'Hyperemic', 'Disc Edema / Swollen', 'Tilted Disc'] },
              { id: 'fun_disc_size', label: 'Disc Size', type: 'select', options: ['Average', 'Large', 'Small / Hypoplastic'] },
              { id: 'fun_cdr', label: 'Cup-to-Disc Ratio (C/D)', type: 'select', options: ['0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', 'Total Cupping (1.0)'] },
              { id: 'fun_rim', label: 'Neuroretinal Rim', type: 'select', options: ['Healthy / ISNT rule intact', 'Inferior Notch', 'Superior Notch', 'Diffusely Thin', 'Pallor'] },
              { id: 'fun_macula', label: 'Macula', type: 'select', options: ['Normal Foveal Reflex', 'Foveal Reflex Dull / Absent', 'Macular Edema', 'Macular Hole', 'ERM (Epiretinal Membrane)', 'Drusen', 'ARMD (Dry)', 'ARMD (Wet/CNVM)', 'CSR'] },
              { id: 'fun_fovea', label: 'Fovea', type: 'text', placeholder: 'Foveal avascular zone, detachment...' },
              { id: 'fun_ret_vessels', label: 'Retinal Vessels', type: 'select', options: ['Normal Caliber', 'Arteriolar Attenuation', 'AV Nipping (Grade 1-4 HTN)', 'Venous Tortuosity', 'Vascular Occlusion'] },
              { id: 'fun_retina', label: 'Retina Background', type: 'select', options: ['Normal / Attached', 'Diabetic Retinopathy', 'Hypertensive Retinopathy', 'Retinal Detachment', 'Lattice Degeneration', 'Retinitis Pigmentosa'] },
              { id: 'fun_peri_retina', label: 'Peripheral Retina', type: 'textarea', placeholder: 'Tears, holes, lattice, paving stone degeneration...' },
              { id: 'fun_choroid', label: 'Choroid', type: 'text', placeholder: 'Choroidal nevus, hemangioma, rupture...' },
              { id: 'fun_optic_nerve', label: 'Optic Nerve Head Details', type: 'textarea', placeholder: 'Peripapillary atrophy (Alpha/Beta zone), Disc hemorrhage...' },
              { id: 'fun_papilledema', label: 'Papilledema', type: 'select', options: ['Absent', 'Frisen Grade 1', 'Frisen Grade 2', 'Frisen Grade 3', 'Frisen Grade 4', 'Frisen Grade 5'] },
              { id: 'fun_hemorrhage', label: 'Hemorrhages', type: 'multiselect', options: ['None', 'Flame-shaped (Splinter)', 'Dot-Blot', 'Subretinal', 'Preretinal / Boat-shaped', 'Vitreous'] },
              { id: 'fun_exudates', label: 'Exudates', type: 'select', options: ['None', 'Hard Exudates (Macular Star)', 'Soft Exudates (Cotton Wool Spots)'] },
              { id: 'fun_microaneurysms', label: 'Microaneurysms', type: 'select', options: ['None', 'Mild', 'Moderate', 'Severe / Multiple'] },
              { id: 'fun_neovascularization', label: 'Neovascularization', type: 'select', options: ['None', 'NVD (Disc)', 'NVE (Elsewhere)', 'NVI (Iris)'] },
              { id: 'fun_detachment', label: 'Retinal Detachment', type: 'select', options: ['None', 'Rhegmatogenous RD', 'Tractional RD', 'Exudative RD'] },
              { id: 'fun_tears', label: 'Retinal Tears', type: 'text', placeholder: 'Horseshoe tear at 2 o clock...' },
              { id: 'fun_holes', label: 'Retinal Holes', type: 'text', placeholder: 'Atrophic hole with operculum...' },
              { id: 'fun_other', label: 'Other Fundus Findings', type: 'textarea', placeholder: 'Fundus drawing notes & details...' }
            ]
          }
        ]
      },
      {
        id: 'diabetic_eye',
        name: 'DIABETIC EYE EXAM',
        defaultVisible: false,
        dependsOn: (state) => state.hx_sys_med?.includes('Diabetes Mellitus') || state.has_diabetes === 'Yes',
        sections: [
          {
            id: 'dm_eye_sub',
            name: 'Diabetic Retinopathy Screening & Staging',
            defaultVisible: true,
            fields: [
              { id: 'dm_duration', label: 'Diabetes Duration', type: 'text', placeholder: 'e.g. 10 years' },
              { id: 'dm_hba1c', label: 'HbA1c Level', type: 'text', placeholder: '7.8 %' },
              { id: 'dm_dr_status', label: 'Diabetic Retinopathy', type: 'select', options: ['No DR', 'Non-Proliferative (NPDR)', 'Proliferative (PDR)', 'Advanced Diabetic Eye Disease'] },
              { id: 'dm_npdr_grade', label: 'NPDR Grade', type: 'select', options: ['Mild NPDR', 'Moderate NPDR', 'Severe NPDR', 'Very Severe NPDR'] },
              { id: 'dm_pdr_status', label: 'PDR Status', type: 'select', options: ['Early PDR', 'High-Risk PDR', 'Quiescent PDR (Post-Laser)'] },
              { id: 'dm_macular_edema', label: 'Macular Edema', type: 'select', options: ['Absent', 'CSME (Clinically Significant Macular Edema)', 'Center-Involving DME', 'Non-Center Involving DME'] },
              { id: 'dm_dme_grade', label: 'DME Severity', type: 'select', options: ['Mild', 'Moderate', 'Severe'] },
              { id: 'dm_prev_laser', label: 'Previous Laser', type: 'select', options: ['None', 'Panretinal Photocoagulation (PRP)', 'Focal / Grid Macular Laser'] },
              { id: 'dm_antivegf', label: 'Anti-VEGF Injections', type: 'text', placeholder: 'Ranibizumab / Aflibercept / Faricimab count' },
              { id: 'dm_other', label: 'Other Diabetic Eye Findings', type: 'textarea', placeholder: 'IRMA, venous beading, vitreous traction...' }
            ]
          }
        ]
      },
      {
        id: 'glaucoma',
        name: 'GLAUCOMA',
        defaultVisible: false,
        dependsOn: (state) => state.eye_diag?.includes('Glaucoma') || (state.iop_od > 21 || state.iop_os > 21),
        sections: [
          {
            id: 'glaucoma_sub',
            name: 'Glaucoma Evaluation & Structural Analysis',
            defaultVisible: true,
            fields: [
              { id: 'gl_diagnosis', label: 'Glaucoma Diagnosis', type: 'select', options: ['Glaucoma Suspect', 'Primary Open Angle (POAG)', 'Primary Angle Closure (PACG)', 'Normal Tension (NTG)', 'Secondary Glaucoma', 'Ocular Hypertension'] },
              { id: 'gl_type', label: 'Glaucoma Subtype', type: 'select', options: ['POAG', 'PACG', 'PXG (Pseudoexfoliation)', 'PG (Pigmentary)', 'Neovascular (NVG)', 'Uveitic', 'Steroid-Induced'] },
              { id: 'gl_iop_record', label: 'IOP Baseline / Peak', type: 'text', placeholder: 'Max recorded IOP: 28 mmHg' },
              { id: 'gl_cct', label: 'CCT Adjusted IOP', type: 'text', placeholder: 'Corrected IOP based on CCT' },
              { id: 'gl_gonioscopy', label: 'Gonioscopy Grade', type: 'select', options: ['Open Angles (Grade 3-4)', 'Narrow Angles (Grade 1-2)', 'Closed Angle (Grade 0)', 'PAS Present'] },
              { id: 'gl_disc_eval', label: 'Optic Disc Notch / Hemorrhage', type: 'text', placeholder: 'Inferotemporal notch OD, Disc hemorrhage OS' },
              { id: 'gl_cd_ratio', label: 'C/D Ratio Progression', type: 'text', placeholder: 'OD: 0.65 / OS: 0.70' },
              { id: 'gl_rnfl', label: 'RNFL Defect', type: 'select', options: ['None', 'Inferior Wedge Defect', 'Superior Wedge Defect', 'Diffuse Thinning'] },
              { id: 'gl_oct', label: 'OCT RNFL & GCC', type: 'textarea', placeholder: 'OCT average RNFL thickness (OD: 72µm, OS: 68µm)...' },
              { id: 'gl_vf', label: 'Visual Field (Perimetry)', type: 'select', options: ['Normal Field', 'Nasal Step', 'Arcuate Scotoma', 'Paracentral Defect', 'Advanced Field Loss / Tunnel Vision'] },
              { id: 'gl_progression', label: 'Progression Rate', type: 'select', options: ['Stable', 'Slow Progression', 'Rapid Progression'] },
              { id: 'gl_target_iop', label: 'Target IOP', type: 'text', placeholder: '< 14 mmHg' },
              { id: 'gl_meds', label: 'Glaucoma Medications', type: 'multiselect', options: ['Prostaglandin Analog (Latanoprost)', 'Beta-Blocker (Timolol)', 'Alpha-Agonist (Brimonidine)', 'CAI (Dorzolamide)', 'Fixed Combination'] },
              { id: 'gl_surgery', label: 'Previous Glaucoma Surgery', type: 'select', options: ['None', 'Trabeculectomy (OD)', 'Trabeculectomy (OS)', 'Glaucoma Drainage Device (GDD)', 'MIGS', 'Laser Iridotomy (LPI)', 'SLT'] }
            ]
          }
        ]
      },
      {
        id: 'cataract',
        name: 'CATARACT',
        defaultVisible: false,
        sections: [
          {
            id: 'cataract_sub',
            name: 'Cataract Workup & Biometry',
            defaultVisible: true,
            fields: [
              { id: 'cat_type', label: 'Cataract Type', type: 'select', options: ['Nuclear Sclerosis', 'Cortical', 'Posterior Subcapsular', 'Mature Hypermature', 'Traumatic'] },
              { id: 'cat_grade', label: 'Cataract Grade', type: 'select', options: ['Grade I', 'Grade II', 'Grade III', 'Grade IV', 'Grade V (Nigra)'] },
              { id: 'cat_visual_impact', label: 'Visual Impact / Glare', type: 'select', options: ['Mild impact', 'Moderate disability', 'Severe vision loss', 'Disabling glare'] },
              { id: 'cat_lens_status', label: 'Lens Status', type: 'text', placeholder: 'NS2 NC2 P1' },
              { id: 'cat_biometry', label: 'Biometry Method', type: 'select', options: ['Optical Biometry (IOLMaster / Lenstar)', 'Ultrasound A-Scan (Immersion)', 'Ultrasound A-Scan (Contact)'] },
              { id: 'cat_axial_length', label: 'Axial Length (AL)', type: 'text', placeholder: 'OD: 23.45 mm / OS: 23.50 mm' },
              { id: 'cat_keratometry', label: 'Keratometry (K1/K2)', type: 'text', placeholder: 'OD: 43.50 @ 90 / 44.25 @ 180' },
              { id: 'cat_formula', label: 'IOL Calculation Formula', type: 'select', options: ['Barrett Universal II', 'SRK/T', 'Hoffer Q', 'Holladay 1', 'Hill-RBF'] },
              { id: 'cat_iol_power', label: 'Calculated IOL Power', type: 'text', placeholder: 'OD: +21.50 D (Target: Emmetropia)' },
              { id: 'cat_iol_model', label: 'Selected IOL Model', type: 'select', options: ['Monofocal Hydrophobic Acrylic', 'Monofocal Toric', 'Multifocal / Trifocal', 'EDOF', 'PMMA Rigid'] },
              { id: 'cat_surg_recommend', label: 'Surgery Recommendation', type: 'select', options: ['Phacoemulsification with Foldable IOL', 'MICS', 'Femto-Laser Assisted (FLACS)', 'SICS (Manual Small Incision)', 'ECCE'] },
              { id: 'cat_surg_plan', label: 'Surgical Plan Notes', type: 'textarea', placeholder: 'Anesthesia choice, pupil dilation, incision site...' }
            ]
          }
        ]
      },
      {
        id: 'retina',
        name: 'RETINA',
        defaultVisible: false,
        sections: [
          {
            id: 'retina_sub',
            name: 'Retinal & Macular Subspecialty Exam',
            defaultVisible: true,
            fields: [
              { id: 'ret_macular_find', label: 'Macular Findings', type: 'textarea', placeholder: 'Drusen, CNVM, geographic atrophy, SRF, IRF...' },
              { id: 'ret_findings', label: 'Retinal Findings', type: 'textarea', placeholder: 'Detailed peripheral & posterior pole retinal notes...' },
              { id: 'ret_oct', label: 'OCT Findings', type: 'textarea', placeholder: 'Central Macular Thickness (CMT: 320µm), SRF, PED...' },
              { id: 'ret_octa', label: 'OCTA Findings', type: 'textarea', placeholder: 'Flow voids, CNVM network, FAZ enlargement...' },
              { id: 'ret_fundus_photo', label: 'Fundus Photography', type: 'text', placeholder: 'Color fundus photo findings...' },
              { id: 'ret_ffa', label: 'Fluorescein Angiography (FFA)', type: 'textarea', placeholder: 'Hyperfluorescence, leakage, window defect, capillary non-perfusion...' },
              { id: 'ret_icg', label: 'Indocyanine Green (ICG)', type: 'text', placeholder: 'Polypoidal lesions, choroidal hyperpermeability...' },
              { id: 'ret_rd', label: 'Retinal Detachment Details', type: 'textarea', placeholder: 'Extent in clock hours, macula on/off, PVR grade...' },
              { id: 'ret_tear', label: 'Retinal Tear Location', type: 'text', placeholder: 'Superotemporal horseshoe tear at 1 o clock' },
              { id: 'ret_amd', label: 'AMD Classification', type: 'select', options: ['None', 'Early Dry AMD', 'Intermediate Dry AMD', 'Geographic Atrophy', 'Active Wet AMD (CNVM)'] },
              { id: 'ret_dme', label: 'DME Subtype', type: 'select', options: ['None', 'Focal DME', 'Diffuse DME', 'Cystoid Macular Edema'] },
              { id: 'ret_occlusion', label: 'Vascular Occlusion', type: 'select', options: ['None', 'BRVO', 'CRVO', 'BRAO', 'CRAO'] },
              { id: 'ret_vitreous', label: 'Vitreous Findings', type: 'text', placeholder: 'Weiss ring, vitreous traction...' }
            ]
          }
        ]
      },
      {
        id: 'refractive_surgery',
        name: 'CORNEA / REFRACTIVE SURGERY',
        defaultVisible: false,
        sections: [
          {
            id: 'ref_surg_sub',
            name: 'Refractive Surgery Evaluation',
            defaultVisible: true,
            fields: [
              { id: 'rs_topography', label: 'Corneal Topography', type: 'text', placeholder: 'SimK, Pentacam BAD display...' },
              { id: 'rs_tomography', label: 'Tomography / Elevation', type: 'text', placeholder: 'Anterior & Posterior elevation maps...' },
              { id: 'rs_pachymetry', label: 'Thinnest Pachymetry', type: 'text', placeholder: '525 µm' },
              { id: 'rs_k_readings', label: 'K Readings', type: 'text', placeholder: 'K1: 42.50 / K2: 43.25' },
              { id: 'rs_manifest_ref', label: 'Manifest Refraction Stability', type: 'select', options: ['Stable > 1 year', 'Unstable'] },
              { id: 'rs_ectasia_risk', label: 'Ectasia Risk Score', type: 'select', options: ['Low Risk', 'Moderate Risk', 'High Risk (Keratoconus suspect)'] },
              { id: 'rs_lasik_hx', label: 'LASIK History', type: 'text', placeholder: 'Prior flap creation details...' },
              { id: 'rs_prk_hx', label: 'PRK History', type: 'text', placeholder: 'Prior surface ablation...' },
              { id: 'rs_smile_hx', label: 'SMILE History', type: 'text', placeholder: 'Prior lenticule extraction...' },
              { id: 'rs_eligibility', label: 'Surgical Eligibility', type: 'select', options: ['Eligible for Femto-LASIK', 'Eligible for SMILE', 'Eligible for PRK / Contoura', 'Eligible for ICL (Phakic IOL)', 'Ineligible'] },
              { id: 'rs_surg_plan', label: 'Surgical Plan', type: 'textarea', placeholder: 'Flap thickness, ablation depth, residual stromal bed...' }
            ]
          }
        ]
      },
      {
        id: 'pediatric_ophth',
        name: 'PEDIATRIC OPHTHALMOLOGY',
        defaultVisible: false,
        sections: [
          {
            id: 'ped_ophth_sub',
            name: 'Pediatric & Strabismus Assessment',
            defaultVisible: true,
            fields: [
              { id: 'ped_birth_hx', label: 'Birth History', type: 'select', options: ['Full term normal delivery', 'Preterm / Low birth weight', 'NICU Stay / Oxygen therapy', 'Birth Trauma'] },
              { id: 'ped_dev_hx', label: 'Developmental History', type: 'text', placeholder: 'Normal milestones, delayed motor skills...' },
              { id: 'ped_prematurity', label: 'Prematurity / ROP Screening', type: 'text', placeholder: 'Gestational age at birth (e.g. 30 weeks, BW 1.2kg)' },
              { id: 'ped_fam_hx', label: 'Family Ocular History', type: 'text', placeholder: 'Congenital cataract, retinoblastoma, squint...' },
              { id: 'ped_fixation', label: 'Fixation Behavior', type: 'select', options: ['Fixes & Follows OU', 'Unsteady / Unmaintained', 'Prefers Right Eye', 'Prefers Left Eye'] },
              { id: 'ped_pref_looking', label: 'Preferential Looking (Teller Cards)', type: 'text', placeholder: 'Grating acuity score' },
              { id: 'ped_va', label: 'Pediatric VA', type: 'select', options: ['Lea Symbols', 'Kay Pictures', 'Allen Cards', 'Fixes & Follows'] },
              { id: 'ped_alignment', label: 'Ocular Alignment', type: 'select', options: ['Orthophoric', 'Esotropia', 'Exotropia', 'Hypertropia'] },
              { id: 'ped_strabismus', label: 'Strabismus Subtype', type: 'select', options: ['Infantile Esotropia', 'Accommodative Esotropia', 'Intermittent Exotropia', 'Paralytic Strabismus'] },
              { id: 'ped_amblyopia', label: 'Amblyopia Assessment', type: 'select', options: ['No Amblyopia', 'Refractive Amblyopia (OD)', 'Refractive Amblyopia (OS)', 'Strabismic Amblyopia', 'Deprivation Amblyopia'] },
              { id: 'ped_cyclo_ref', label: 'Cycloplegic Refraction', type: 'text', placeholder: 'Post-Atropine / Cyclogyl refraction...' },
              { id: 'ped_binocular', label: 'Binocular Single Vision (BSV)', type: 'select', options: ['Present (Worth 4 Dot)', 'Suppression OD', 'Suppression OS', 'Diplopia'] },
              { id: 'ped_stereo', label: 'Stereoacuity (Titmus / TNO)', type: 'text', placeholder: '40 seconds of arc' }
            ]
          }
        ]
      },
      {
        id: 'neuro_ophth',
        name: 'NEURO-OPHTHALMOLOGY',
        defaultVisible: false,
        sections: [
          {
            id: 'neuro_sub',
            name: 'Neuro-Ophthalmic & Cranial Nerve Exam',
            defaultVisible: true,
            fields: [
              { id: 'neuro_vf', label: 'Visual Fields (Perimetry)', type: 'select', options: ['Full', 'Bitemporal Hemianopia', 'Homonymous Hemianopia', 'Central Scotoma', 'Altitudinal Defect'] },
              { id: 'neuro_color_vision', label: 'Color Vision (Ishihara)', type: 'text', placeholder: 'OD: 14/14 plates / OS: 2/14 plates (Red-Green Defect)' },
              { id: 'neuro_optic_nerve', label: 'Optic Nerve Appearance', type: 'select', options: ['Normal', 'Optic Disc Pallor (Primary Atrophy)', 'Optic Disc Swelling', 'Optic Neuritis (Retrobulbar)'] },
              { id: 'neuro_rapd', label: 'RAPD Grade', type: 'select', options: ['Grade 0', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4'] },
              { id: 'neuro_pupils', label: 'Pupillary Findings', type: 'text', placeholder: 'Horner Syndrome / Adie Tonic Pupil...' },
              { id: 'neuro_motility', label: 'Ocular Motility Deficit', type: 'select', options: ['None', 'CN III Palsy', 'CN IV Palsy', 'CN VI Palsy', 'INO (Internuclear Ophthalmoplegia)'] },
              { id: 'neuro_diplopia', label: 'Diplopia Charting', type: 'textarea', placeholder: 'Horizontal / Vertical separation in gazes...' },
              { id: 'neuro_cn_findings', label: 'Cranial Nerve Exam (V, VII, VIII)', type: 'textarea', placeholder: 'Trigeminal sensation, facial weakness...' },
              { id: 'neuro_imaging', label: 'Neuro Imaging (MRI / CT)', type: 'textarea', placeholder: 'MRI Brain & Orbit findings...' },
              { id: 'neuro_hx', label: 'Neurological History', type: 'textarea', placeholder: 'Headache, numbness, weakness, stroke history...' }
            ]
          }
        ]
      },
      {
        id: 'contact_lens',
        name: 'CONTACT LENS',
        defaultVisible: false,
        dependsOn: (state) => state.hx_glasses_use?.includes('Contact Lens') || state.has_contact_lens === 'Yes',
        sections: [
          {
            id: 'cl_sub',
            name: 'Contact Lens Fitting & Evaluation',
            defaultVisible: true,
            fields: [
              { id: 'cl_type', label: 'Lens Type', type: 'select', options: ['Soft Spherical', 'Soft Toric', 'Multifocal Soft', 'RGP (Rigid Gas Permeable)', 'Scleral Lens', 'Orthokeratology (Ortho-K)'] },
              { id: 'cl_brand', label: 'Brand & Material', type: 'text', placeholder: 'Acuvue Oasys Silicone Hydrogel' },
              { id: 'cl_base_curve', label: 'Base Curve (BC)', type: 'text', placeholder: '8.6 mm' },
              { id: 'cl_diameter', label: 'Diameter (Dia)', type: 'text', placeholder: '14.2 mm' },
              { id: 'cl_power', label: 'Power', type: 'text', placeholder: 'OD: -3.00 D / OS: -3.25 D' },
              { id: 'cl_schedule', label: 'Wearing Schedule', type: 'select', options: ['Daily Disposable', 'Monthly Replacement', 'Extended Wear', 'Nightly Ortho-K'] },
              { id: 'cl_fit', label: 'Fit Assessment', type: 'select', options: ['Optimal Fit', 'Tight Fit (Steep)', 'Loose Fit (Flat)', 'Centration Good'] },
              { id: 'cl_comfort', label: 'Patient Comfort', type: 'select', options: ['Excellent', 'Moderate', 'Dryness / Discomfort', 'Intolerant'] },
              { id: 'cl_corneal_find', label: 'Corneal Findings', type: 'text', placeholder: 'Neovascularization, SPK, CLARE...' },
              { id: 'cl_overwear', label: 'Overwear Syndrome', type: 'select', options: ['No', 'Yes - Hypoxia', 'Giant Papillary Conjunctivitis (GPC)'] },
              { id: 'cl_complications', label: 'Contact Lens Complications', type: 'textarea', placeholder: 'Infiltrative keratitis, GPC notes...' }
            ]
          }
        ]
      },
      {
        id: 'investigations',
        name: 'INVESTIGATIONS / TESTS',
        defaultVisible: true,
        sections: [
          {
            id: 'inv_details',
            name: 'Ophthalmic Diagnostic Tests & Imaging',
            defaultVisible: true,
            fields: [
              { id: 'inv_oct', label: 'OCT (Macula / RNFL)', type: 'textarea', placeholder: 'OCT scan summary...' },
              { id: 'inv_octa', label: 'OCT Angiography', type: 'text', placeholder: 'OCTA findings...' },
              { id: 'inv_vf', label: 'Visual Field (Perimetry)', type: 'textarea', placeholder: 'Humphrey 24-2 / 30-2 MD & PSD values...' },
              { id: 'inv_fundus_photo', label: 'Fundus Photography', type: 'text', placeholder: 'Image serial numbers & findings...' },
              { id: 'inv_bscan', label: 'B-Scan Ultrasonography', type: 'textarea', placeholder: 'Acoustically clear vitreous, retina attached...' },
              { id: 'inv_ascan', label: 'A-Scan Biometry', type: 'text', placeholder: 'Axial length measurements...' },
              { id: 'inv_biometry', label: 'Optical Biometry', type: 'text', placeholder: 'IOL Master report summary...' },
              { id: 'inv_topography', label: 'Topography / Tomography', type: 'text', placeholder: 'Pentacam report summary...' },
              { id: 'inv_pachymetry', label: 'Pachymetry Map', type: 'text', placeholder: 'Ultrasound pachymetry values...' },
              { id: 'inv_gonioscopy', label: 'Gonioscopy Report', type: 'textarea', placeholder: 'Shaffer grading in all 4 quadrants...' },
              { id: 'inv_angiography', label: 'FFA / ICG Angiography', type: 'textarea', placeholder: 'Angiography findings summary...' },
              { id: 'inv_other', label: 'Other Investigations', type: 'textarea', placeholder: 'Blood tests (HbA1c, ESR, CRP, VDRL, ACE level)...' }
            ]
          }
        ]
      },
      {
        id: 'diagnosis',
        name: 'DIAGNOSIS',
        defaultVisible: true,
        sections: [
          {
            id: 'diag_details',
            name: 'Clinical Impression & ICD-10 Coding',
            defaultVisible: true,
            fields: [
              { id: 'diag_primary', label: 'Primary Diagnosis', type: 'select', options: ['Senile Cataract (OD)', 'Senile Cataract (OS)', 'Bilateral Cataract', 'Primary Open Angle Glaucoma', 'Primary Angle Closure Glaucoma', 'Diabetic Retinopathy (NPDR)', 'Diabetic Retinopathy (PDR)', 'Diabetic Macular Edema', 'Dry Eye Disease', 'Bacterial Conjunctivitis', 'Allergic Conjunctivitis', 'Corneal Ulcer', 'Age-Related Macular Degeneration', 'Myopia with Astigmatism', 'Hyperopia', 'Presbyopia', 'Pseudophakia OU'], placeholder: 'Select primary diagnosis...' },
              { id: 'diag_secondary', label: 'Secondary Diagnosis', type: 'textarea', placeholder: 'Co-existing ocular conditions...' },
              { id: 'diag_diff', label: 'Differential Diagnosis', type: 'textarea', placeholder: 'Other considerations...' },
              { id: 'diag_icd10', label: 'ICD-10 Code', type: 'text', placeholder: 'e.g. H25.11, H40.113, E11.319' },
              { id: 'diag_laterality', label: 'Diagnosis Laterality', type: 'select', options: ['Right Eye (OD)', 'Left Eye (OS)', 'Bilateral (OU)'] },
              { id: 'diag_severity', label: 'Severity Grade', type: 'select', options: ['Mild', 'Moderate', 'Severe', 'Vision Threatening'] },
              { id: 'diag_chronicity', label: 'Chronicity', type: 'select', options: ['Acute', 'Subacute', 'Chronic', 'Recurrent'] },
              { id: 'diag_impression', label: 'Clinical Impression', type: 'textarea', placeholder: 'Doctor\'s summary of clinical case...' }
            ]
          }
        ]
      },
      {
        id: 'medications',
        name: 'MEDICATIONS',
        defaultVisible: true,
        sections: [
          {
            id: 'med_details',
            name: 'Ophthalmic Prescriptions & Systemic Drugs',
            defaultVisible: true,
            fields: [
              { id: 'med_current', label: 'Current Medications', type: 'textarea', placeholder: 'Existing eye drops & oral drugs...' },
              { id: 'med_new_rx', label: 'New Prescription', type: 'textarea', placeholder: 'Drug, Dose, Route, Frequency, Duration, Eye' },
              { id: 'med_drug', label: 'Primary Eye Drop', type: 'select', options: ['Moxifloxacin 0.5%', 'Tobramycin + Dexamethasone', 'Prednisolone Acetate 1%', 'Nepafenac 0.1%', 'Latanoprost 0.005%', 'Timolol 0.5%', 'Brimonidine 0.2%', 'Carboxymethylcellulose 0.5%', 'Sodium Hyaluronate 0.1%', 'Atropine 1%'] },
              { id: 'med_dose', label: 'Dose / Drops', type: 'select', options: ['1 Drop', '2 Drops', '1 Application (Ointment)'] },
              { id: 'med_route', label: 'Route', type: 'select', options: ['Topical Ophthalmic Drop', 'Topical Ophthalmic Ointment', 'Oral Tablet', 'Intravitreal Injection'] },
              { id: 'med_freq', label: 'Frequency', type: 'select', options: ['1 time a day (OD)', '2 times a day (BD)', '3 times a day (TID)', '4 times a day (QID)', '6 times a day', 'Every 1 hour', 'At bedtime (HS)'] },
              { id: 'med_duration', label: 'Duration', type: 'select', options: ['5 Days', '7 Days', '10 Days', '14 Days', '1 Month', '3 Months', 'Continuous / Lifelong'] },
              { id: 'med_eye', label: 'Eye Targeted', type: 'select', options: ['Right Eye (OD)', 'Left Eye (OS)', 'Both Eyes (OU)'] },
              { id: 'med_start', label: 'Start Date', type: 'date' },
              { id: 'med_stop', label: 'Stop Date', type: 'date' },
              { id: 'med_instructions', label: 'Special Instructions', type: 'textarea', placeholder: 'Keep 5 min gap between drops, press lacrimal sac for 1 min...' }
            ]
          }
        ]
      },
      {
        id: 'procedures_surgery',
        name: 'PROCEDURES / SURGERY',
        defaultVisible: true,
        sections: [
          {
            id: 'proc_details',
            name: 'Ophthalmic Procedures & Surgical Planning',
            defaultVisible: true,
            fields: [
              { id: 'proc_performed', label: 'Procedure Performed', type: 'select', options: ['None Today', 'Foreign Body Removal', 'Punctal Plug Insertion', 'Subconjunctival Injection', 'YAG Capsulotomy', 'YAG Laser Iridotomy', 'PRP Laser', 'Intravitreal Anti-VEGF Injection', 'Lacrimal Syringing / Probing'] },
              { id: 'proc_planned', label: 'Procedure Planned', type: 'select', options: ['Phacoemulsification + Foldable IOL', 'Pterygium Excision + Graft', 'Trabeculectomy', 'Intravitreal Injection', 'YAG Capsulotomy', 'Squint Correction', 'DCR / DCT'] },
              { id: 'proc_laterality', label: 'Laterality', type: 'select', options: ['Right Eye (OD)', 'Left Eye (OS)', 'Both Eyes (OU)'] },
              { id: 'proc_date', label: 'Planned Date', type: 'date' },
              { id: 'proc_indication', label: 'Indication', type: 'text', placeholder: 'Visual impairment due to cataract...' },
              { id: 'proc_anesthesia', label: 'Anesthesia', type: 'select', options: ['Topical (Proparacaine)', 'Peribulbar Block', 'Retrobulbar Block', 'General Anesthesia'] },
              { id: 'proc_op_notes', label: 'Operative Notes', type: 'textarea', placeholder: 'Surgical procedure steps & Intraoperative events...' },
              { id: 'proc_postop_inst', label: 'Post-operative Instructions', type: 'textarea', placeholder: 'Eye shield overnight, avoid splash of water, no heavy lifting...' }
            ]
          }
        ]
      },
      {
        id: 'advice',
        name: 'ADVICE',
        defaultVisible: true,
        sections: [
          {
            id: 'adv_details',
            name: 'Patient Guidance & Recommendations',
            defaultVisible: true,
            fields: [
              { id: 'adv_glasses', label: 'Glasses Advice', type: 'textarea', placeholder: 'Constant wear for distance, progressive lenses recommended...' },
              { id: 'adv_medication', label: 'Medication Advice', type: 'textarea', placeholder: 'Instill drops regularly, do not stop glaucoma drops...' },
              { id: 'adv_lifestyle', label: 'Lifestyle Advice', type: 'textarea', placeholder: '20-20-20 rule for digital strain, UV protective sunglasses...' },
              { id: 'adv_eye_prot', label: 'Eye Protection', type: 'select', options: ['Safety Goggles for work', 'UV400 Sunglasses', 'Blue Block Lenses', 'No specific protection'] },
              { id: 'adv_diabetes', label: 'Diabetes Advice', type: 'textarea', placeholder: 'Strict glycemic control (HbA1c < 7%), annual fundus screening...' },
              { id: 'adv_followup', label: 'Follow-up Advice', type: 'textarea', placeholder: 'Review with IOP check in 2 weeks...' },
              { id: 'adv_warning_signs', label: 'Warning Signs', type: 'textarea', placeholder: 'Return immediately if sudden vision loss, severe eye pain, or flashes/floaters occur.' }
            ]
          }
        ]
      },
      {
        id: 'followup',
        name: 'FOLLOW-UP',
        defaultVisible: true,
        sections: [
          {
            id: 'fol_details',
            name: 'Follow-up Schedule & Review Plan',
            defaultVisible: true,
            fields: [
              { id: 'fol_interval', label: 'Follow-up Interval', type: 'select', options: ['3 Days', '1 Week', '2 Weeks', '1 Month', '3 Months', '6 Months', '1 Year', 'SOS / As needed'] },
              { id: 'fol_date', label: 'Follow-up Date', type: 'date' },
              { id: 'fol_reason', label: 'Reason for Review', type: 'text', placeholder: 'IOP re-check, Post-op Day 7 review, Refraction check...' },
              { id: 'fol_req_tests', label: 'Required Tests at Review', type: 'multiselect', options: ['Visual Acuity', 'Refraction', 'IOP Check', 'Slit Lamp Exam', 'Fundus Exam', 'OCT', 'Visual Field Test'] },
              { id: 'fol_plan_proc', label: 'Planned Procedure at Review', type: 'text', placeholder: 'YAG Capsulotomy, 2nd eye Phaco...' },
              { id: 'fol_instructions', label: 'Review Instructions', type: 'textarea', placeholder: 'Bring current glasses & eye drops to review.' }
            ]
          }
        ]
      },
      {
        id: 'documents_media',
        name: 'DOCUMENTS & MEDIA',
        defaultVisible: false,
        sections: [
          {
            id: 'doc_details',
            name: 'Ophthalmic Reports, OCT & Fundus Scans',
            defaultVisible: true,
            fields: [
              { id: 'doc_reports', label: 'Reports', type: 'text', placeholder: 'Uploaded blood reports, systemic clearance...' },
              { id: 'doc_images', label: 'External Photos', type: 'text', placeholder: 'External eye photography...' },
              { id: 'doc_oct_scans', label: 'OCT Scans', type: 'text', placeholder: 'Macula & Disc OCT PDF/JPEG attached' },
              { id: 'doc_fundus_img', label: 'Fundus Images', type: 'text', placeholder: '45-degree color fundus photos attached' },
              { id: 'doc_ext_records', label: 'External Records', type: 'text', placeholder: 'Prior clinic discharge summary...' },
              { id: 'doc_uploads', label: 'Uploaded Documents', type: 'textarea', placeholder: 'File names & attachments list...' }
            ]
          }
        ]
      },
      {
        id: 'other_notes',
        name: 'OTHER NOTES',
        defaultVisible: true,
        sections: [
          {
            id: 'notes_details',
            name: 'Clinical Free Notes & Observations',
            defaultVisible: true,
            fields: [
              { id: 'notes_free_clinical', label: 'Free Clinical Notes', type: 'textarea', placeholder: 'Detailed clinical rationale and notes...' },
              { id: 'notes_add_obs', label: 'Additional Observations', type: 'textarea', placeholder: 'Patient cooperation, language barrier, escort notes...' },
              { id: 'notes_doctor', label: 'Doctor Notes', type: 'textarea', placeholder: 'Confidential clinical discussion notes...' }
            ]
          }
        ]
      }
    ]
  },
  Gynecology: {
    id: 'Gynecology',
    name: 'Gynecology',
    categories: [
      {
        id: 'gyn_patient_data',
        name: 'PATIENT DATA',
        defaultVisible: true,
        sections: [
          {
            id: 'gyn_pat_info',
            name: 'Demographics & Registration',
            defaultVisible: true,
            fields: [
              { id: 'gyn_complaints', label: 'Chief Complaints / Since', type: 'textarea', placeholder: 'Lower abdominal pain, irregular bleeding...' },
              { id: 'gyn_history', label: 'Patient History', type: 'textarea', placeholder: 'Medical & surgical history...' },
              { id: 'gyn_allergies', label: 'Drug Allergy History', type: 'text', placeholder: 'Known drug allergies...' },
              { id: 'gyn_age', label: 'Age', type: 'number', placeholder: '28' },
              { id: 'gyn_referral', label: 'Referral Source', type: 'text', placeholder: 'Referred by Dr. / Self' },
              { id: 'gyn_insurance', label: 'Insurance / Panel', type: 'text', placeholder: 'Policy details...' }
            ]
          }
        ]
      },
      {
        id: 'gyn_chief_complaints',
        name: 'CHIEF COMPLAINTS',
        defaultVisible: true,
        sections: [
          {
            id: 'gyn_cc_info',
            name: 'Presenting Complaints',
            defaultVisible: true,
            fields: [
              { id: 'gyn_cc_primary', label: 'Primary Complaint', type: 'select', options: ['Pelvic Pain', 'Abdominal Pain', 'Vaginal Discharge', 'Vaginal Itching / Burning', 'Abnormal Uterine Bleeding', 'Heavy Menstrual Bleeding', 'Irregular Periods', 'Painful Periods (Dysmenorrhea)', 'Amenorrhea / Missed Period', 'Postcoital Bleeding', 'Dyspareunia', 'Infertility', 'Hot Flashes', 'Menopausal Symptoms', 'Urinary Symptoms', 'Perineal Swelling', 'Vulval Lesion'] },
              { id: 'gyn_cc_duration', label: 'Duration of Complaint', type: 'text', placeholder: 'e.g. 3 months' },
              { id: 'gyn_cc_severity', label: 'Severity', type: 'select', options: ['Mild', 'Moderate', 'Severe'] },
              { id: 'gyn_cc_onset', label: 'Onset', type: 'select', options: ['Sudden', 'Gradual', 'Episodic', 'Recurrent'] },
              { id: 'gyn_cc_assoc', label: 'Associated Symptoms', type: 'textarea', placeholder: 'Fever, nausea, urinary symptoms, bowel changes...' },
              { id: 'gyn_cc_prev_rx', label: 'Previous Treatment for Complaint', type: 'textarea', placeholder: 'Medications tried, procedures done...' }
            ]
          }
        ]
      },
      {
        id: 'gyn_menstrual',
        name: 'MENSTRUAL HISTORY',
        defaultVisible: true,
        sections: [
          {
            id: 'gyn_mens_info',
            name: 'Menstrual Cycle & Symptoms',
            defaultVisible: true,
            fields: [
              { id: 'gyn_menarche', label: 'Menarche (Age)', type: 'text', placeholder: '12 years' },
              { id: 'gyn_lmp', label: 'LMP (Last Menstrual Period)', type: 'date' },
              { id: 'gyn_regularity', label: 'Cycle Regularity', type: 'select', options: ['Regular (28-30 days)', 'Irregular', 'Oligomenorrhea', 'Amenorrhea', 'Polymenorrhea'] },
              { id: 'gyn_length', label: 'Cycle Length & Duration', type: 'text', placeholder: '4-5 days / 28-30 days' },
              { id: 'gyn_flow', label: 'Flow', type: 'select', options: ['Normal', 'Heavy (Menorrhagia)', 'Scanty (Hypomenorrhea)', 'Spotting'] },
              { id: 'gyn_dysmenorrhea', label: 'Dysmenorrhea', type: 'select', options: ['Absent', 'Mild', 'Moderate', 'Severe / Spasmodic'] },
              { id: 'gyn_cycle_length_days', label: 'Cycle Length (Days)', type: 'number', placeholder: '28' },
              { id: 'gyn_period_duration', label: 'Period Duration (Days)', type: 'number', placeholder: '5' },
              { id: 'gyn_intermenstrual', label: 'Intermenstrual Bleeding', type: 'select', options: ['Absent', 'Present', 'Spotting only'] },
              { id: 'gyn_postcoital_bleed', label: 'Postcoital Bleeding', type: 'select', options: ['Absent', 'Present'] },
              { id: 'gyn_premenstrual', label: 'Premenstrual Symptoms (PMS)', type: 'text', placeholder: 'Mood swings, bloating, breast tenderness...' },
              { id: 'gyn_menopause', label: 'Menopause Status', type: 'select', options: ['Pre-menopausal', 'Peri-menopausal', 'Post-menopausal', 'Surgical Menopause'] },
              { id: 'gyn_menopause_age', label: 'Age at Menopause', type: 'text', placeholder: 'e.g. 50 years' },
              { id: 'gyn_postmenop_bleed', label: 'Post-menopausal Bleeding', type: 'select', options: ['Absent', 'Present'] }
            ]
          }
        ]
      },
      {
        id: 'gyn_obstetric',
        name: 'OBSTETRIC HISTORY',
        defaultVisible: true,
        sections: [
          {
            id: 'gyn_obs_info',
            name: 'G-P-L-A Obstetric Score',
            defaultVisible: true,
            fields: [
              { id: 'gyn_gravida', label: 'Gravida (G)', type: 'number', placeholder: '1' },
              { id: 'gyn_para', label: 'Para (P)', type: 'number', placeholder: '1' },
              { id: 'gyn_living', label: 'Living Children (L)', type: 'number', placeholder: '1' },
              { id: 'gyn_abortions', label: 'Abortions (A)', type: 'number', placeholder: '0' },
              { id: 'gyn_last_deliv', label: 'Last Delivery Date', type: 'date' },
              { id: 'gyn_mode_deliv', label: 'Mode of Delivery', type: 'select', options: ['FTND (Normal Vaginal)', 'LSCS (C-Section)', 'Instrumental (Forceps/Vaccum)', 'VBAC'] },
              { id: 'gyn_stillbirth', label: 'Stillbirth / IUD', type: 'select', options: ['None', 'Yes - Stillbirth', 'Yes - IUD'] },
              { id: 'gyn_ectopic', label: 'Ectopic Pregnancy', type: 'select', options: ['No', 'Yes - Treated medically', 'Yes - Surgery'] },
              { id: 'gyn_miscarriage', label: 'Miscarriage / Spontaneous Abortion', type: 'select', options: ['None', '1', '2', '3 or more (Recurrent)'] },
              { id: 'gyn_csection_num', label: 'Number of C-Sections', type: 'number', placeholder: '0' },
              { id: 'gyn_prev_comp', label: 'Previous Pregnancy Complications', type: 'multiselect', options: ['None', 'Gestational Diabetes', 'Pre-eclampsia / Eclampsia', 'PPH (Post-partum Haemorrhage)', 'Placenta Previa', 'Preterm Labour', 'Abruption Placenta', 'Intrauterine Growth Restriction'] },
              { id: 'gyn_neonatal_outcomes', label: 'Neonatal Outcomes', type: 'textarea', placeholder: 'Birth weight, NICU admission, congenital anomalies...' }
            ]
          }
        ]
      },
      {
        id: 'gyn_current_pregnancy',
        name: 'CURRENT PREGNANCY / ANC',
        defaultVisible: false,
        sections: [
          {
            id: 'gyn_anc_info',
            name: 'Antenatal Care',
            defaultVisible: true,
            fields: [
              { id: 'gyn_preg_status', label: 'Pregnancy Status', type: 'select', options: ['Not Pregnant', 'Currently Pregnant', 'Suspecting Pregnancy'] },
              { id: 'gyn_edd', label: 'Expected Date of Delivery (EDD)', type: 'date' },
              { id: 'gyn_ga', label: 'Gestational Age (weeks)', type: 'text', placeholder: 'e.g. 28 weeks' },
              { id: 'gyn_lmp_certain', label: 'LMP Certainty', type: 'select', options: ['Certain', 'Uncertain - by USG dating'] },
              { id: 'gyn_fetal_movement', label: 'Fetal Movement', type: 'select', options: ['Not Applicable', 'Good / Active', 'Reduced', 'Absent'] },
              { id: 'gyn_anc_bleeding', label: 'Bleeding / Spotting in Pregnancy', type: 'select', options: ['None', 'Mild Spotting', 'Active Bleeding'] },
              { id: 'gyn_anc_pain', label: 'Abdominal Pain in Pregnancy', type: 'select', options: ['None', 'Mild', 'Uterine Contractions', 'Severe / Emergency'] },
              { id: 'gyn_anc_vomiting', label: 'Nausea / Vomiting (Hyperemesis)', type: 'select', options: ['None', 'Mild Morning Sickness', 'Moderate', 'Hyperemesis Gravidarum'] },
              { id: 'gyn_preg_risk', label: 'Pregnancy Risk Category', type: 'select', options: ['Low Risk', 'High Risk', 'Very High Risk'] },
              { id: 'gyn_anc_visits', label: 'No. of ANC Visits', type: 'number', placeholder: '4' },
              { id: 'gyn_anc_supplements', label: 'ANC Supplements', type: 'text', placeholder: 'Iron, Folic Acid, Calcium, Vitamin D...' },
              { id: 'gyn_anc_vaccines', label: 'Vaccination in Pregnancy', type: 'multiselect', options: ['Tetanus Toxoid', 'Flu Vaccine', 'COVID-19', 'Tdap', 'Not given'] },
              { id: 'gyn_fundal_height', label: 'Fundal Height (Weeks Equivalent)', type: 'text', placeholder: 'e.g. 28 cm = 28 weeks' },
              { id: 'gyn_fetal_lie', label: 'Fetal Lie & Presentation', type: 'select', options: ['Longitudinal - Cephalic', 'Longitudinal - Breech', 'Transverse', 'Oblique'] },
              { id: 'gyn_fhs', label: 'Fetal Heart Sounds (FHS)', type: 'select', options: ['Heard - Regular', 'Heard - Irregular', 'Not heard'] },
              { id: 'gyn_fhs_rate', label: 'Fetal Heart Rate (FHR)', type: 'text', placeholder: '148 bpm' },
              { id: 'gyn_engagement', label: 'Engagement of Head', type: 'select', options: ['Not Engaged', 'Partially Engaged', 'Engaged / Dipped'] }
            ]
          }
        ]
      },
      {
        id: 'gyn_history_sec',
        name: 'GYNECOLOGICAL HISTORY',
        defaultVisible: true,
        sections: [
          {
            id: 'gyn_hx_info',
            name: 'Contraceptive & Gynecological History',
            defaultVisible: true,
            fields: [
              { id: 'gyn_contraception', label: 'Contraception Method', type: 'select', options: ['None', 'Barrier (Condom)', 'OCPs', 'IUD / Cu-T', 'Injectable', 'Tubal Ligation', 'Vasectomy (Partner)', 'LAM', 'Emergency Contraception'] },
              { id: 'gyn_contraception_duration', label: 'Duration of Current Contraception', type: 'text', placeholder: 'e.g. 2 years' },
              { id: 'gyn_coitarche', label: 'Coitarche (Age)', type: 'text', placeholder: 'Age of first intercourse' },
              { id: 'gyn_sexual_activity', label: 'Sexual Activity', type: 'select', options: ['Active', 'Not Active', 'Decline to state'] },
              { id: 'gyn_dyspareunia', label: 'Dyspareunia (Painful Intercourse)', type: 'select', options: ['Absent', 'Superficial', 'Deep', 'Both'] },
              { id: 'gyn_sti', label: 'H/O STI', type: 'select', options: ['No', 'Yes (Treated)', 'Active'] },
              { id: 'gyn_pid', label: 'H/O Pelvic Inflammatory Disease (PID)', type: 'select', options: ['No', 'Yes'] },
              { id: 'gyn_fibroids', label: 'H/O Fibroids', type: 'select', options: ['No', 'Yes - Known', 'Yes - Post-surgery'] },
              { id: 'gyn_cysts', label: 'H/O Ovarian Cyst / PCOS', type: 'select', options: ['No', 'PCOS', 'Simple Cyst', 'Endometrioma', 'Dermoid'] },
              { id: 'gyn_endometriosis', label: 'H/O Endometriosis', type: 'select', options: ['No', 'Suspected', 'Confirmed'] },
              { id: 'gyn_prev_gyn_surgery', label: 'Previous Gynecological Surgery', type: 'multiselect', options: ['None', 'Hysterectomy', 'Myomectomy', 'Ovarian Cystectomy', 'D&C (Dilatation & Curettage)', 'Laparoscopy', 'Tubectomy', 'Colporrhaphy', 'LEEP / Cone Biopsy'] },
              { id: 'gyn_cervical_smear_hx', label: 'Previous Cervical Smear (Pap Smear)', type: 'select', options: ['Never done', 'Normal - Last done', 'Abnormal - ASCUS/LSIL', 'Abnormal - HSIL', 'HPV positive'] },
              { id: 'gyn_breast_hx', label: 'Breast History', type: 'text', placeholder: 'Breast lump, pain, discharge, mammogram done...' },
              { id: 'gyn_sys_hx', label: 'Systemic Medical History', type: 'multiselect', options: ['Diabetes Mellitus', 'Hypertension', 'Thyroid Disorder', 'Autoimmune Condition', 'Bleeding Disorder', 'Liver Disease', 'Renal Disease', 'None'] },
              { id: 'gyn_fam_hx', label: 'Family History', type: 'text', placeholder: 'Breast/Ovarian cancer, DM, HTN, coagulopathy in family...' },
              { id: 'gyn_social_hx', label: 'Social & Personal History', type: 'text', placeholder: 'Marital status, occupation, smoking, alcohol...' }
            ]
          }
        ]
      },
      {
        id: 'gyn_infertility',
        name: 'INFERTILITY / REPRODUCTIVE',
        defaultVisible: false,
        sections: [
          {
            id: 'gyn_inf_info',
            name: 'Fertility Assessment',
            defaultVisible: true,
            fields: [
              { id: 'gyn_inf_type', label: 'Infertility Type', type: 'select', options: ['Primary Infertility', 'Secondary Infertility'] },
              { id: 'gyn_inf_duration', label: 'Duration of Infertility (Years)', type: 'number', placeholder: '2' },
              { id: 'gyn_inf_cause', label: 'Probable Cause', type: 'select', options: ['Ovulatory Factor', 'Tubal Factor', 'Uterine Factor', 'Cervical Factor', 'Male Factor', 'Unexplained', 'Combined'] },
              { id: 'gyn_ovulation', label: 'Ovulation Status', type: 'select', options: ['Regular Ovulation', 'Oligo-ovulation', 'Anovulation', 'Unknown'] },
              { id: 'gyn_amh', label: 'AMH (Anti-Mullerian Hormone)', type: 'text', placeholder: 'ng/mL' },
              { id: 'gyn_fsh_lh', label: 'FSH / LH (Day 2-3)', type: 'text', placeholder: 'FSH: 6.5 mIU/mL, LH: 5.2 mIU/mL' },
              { id: 'gyn_prolactin', label: 'Prolactin Level', type: 'text', placeholder: 'ng/mL' },
              { id: 'gyn_e2', label: 'Estradiol (E2)', type: 'text', placeholder: 'pg/mL' },
              { id: 'gyn_prog', label: 'Progesterone (Luteal Phase)', type: 'text', placeholder: 'ng/mL' },
              { id: 'gyn_hsg', label: 'HSG (Hysterosalpingography)', type: 'text', placeholder: 'Tubes patent / Blocked...' },
              { id: 'gyn_semen_analysis', label: 'Partner Semen Analysis', type: 'textarea', placeholder: 'Volume, count, motility, morphology...' },
              { id: 'gyn_art_prev', label: 'Previous ART (Assisted Reproduction)', type: 'multiselect', options: ['None', 'IUI', 'IVF', 'ICSI', 'Frozen Embryo Transfer', 'Donor Egg'] },
              { id: 'gyn_art_outcome', label: 'Previous ART Outcome', type: 'select', options: ['Not done', 'Successful pregnancy', 'Failed - No implantation', 'Miscarriage after ART'] }
            ]
          }
        ]
      },
      {
        id: 'gyn_menopause',
        name: 'MENOPAUSE / HORMONAL',
        defaultVisible: false,
        sections: [
          {
            id: 'gyn_menop_info',
            name: 'Menopause Assessment',
            defaultVisible: true,
            fields: [
              { id: 'gyn_menop_symp', label: 'Menopausal Symptoms', type: 'multiselect', options: ['Hot Flashes', 'Night Sweats', 'Vaginal Dryness', 'Mood Changes / Depression', 'Sleep Disturbance', 'Decreased Libido', 'Joint Pains', 'Memory Issues', 'Weight Gain', 'Urinary Urgency'] },
              { id: 'gyn_menop_severity', label: 'Symptom Severity (Kupperman Index)', type: 'select', options: ['Mild (<20)', 'Moderate (20-35)', 'Severe (>35)'] },
              { id: 'gyn_menop_hrt', label: 'Hormone Replacement Therapy (HRT)', type: 'select', options: ['Not on HRT', 'On HRT - Estrogen only', 'On HRT - Combined E+P', 'Considering HRT'] },
              { id: 'gyn_menop_bone', label: 'Bone Density (DEXA Scan)', type: 'select', options: ['Normal (T > -1.0)', 'Osteopenia (T -1.0 to -2.5)', 'Osteoporosis (T < -2.5)', 'Not done'] },
              { id: 'gyn_menop_cardiovascular', label: 'Cardiovascular Risk Factors', type: 'text', placeholder: 'HTN, DM, lipids, smoking...' }
            ]
          }
        ]
      },
      {
        id: 'gyn_exam',
        name: 'EXAMINATION FINDINGS',
        defaultVisible: true,
        sections: [
          {
            id: 'gyn_exam_info',
            name: 'General & Pelvic Exam',
            defaultVisible: true,
            fields: [
              { id: 'gyn_gen_exam', label: 'General Examination', type: 'textarea', placeholder: 'Pallor, edema, thyroid, breast exam...' },
              { id: 'gyn_vitals', label: 'Vitals (BP / Pulse / Weight)', type: 'text', placeholder: 'BP: 120/80, HR: 76, Wt: 65 kg' },
              { id: 'gyn_bmi', label: 'BMI', type: 'text', placeholder: '24.5' },
              { id: 'gyn_thyroid_exam', label: 'Thyroid Examination', type: 'select', options: ['Normal', 'Enlarged', 'Nodule palpable', 'Goitre'] },
              { id: 'gyn_breast_exam', label: 'Breast Examination', type: 'textarea', placeholder: 'Symmetrical, no lump, no nipple discharge...' },
              { id: 'gyn_pa_exam', label: 'P/A (Per Abdomen) Findings', type: 'textarea', placeholder: 'Soft, non-tender, mass palpable...' },
              { id: 'gyn_uterus_size', label: 'Uterus Size', type: 'select', options: ['Normal size', '6-8 weeks size', '10 weeks size', '12 weeks size', '14-16 weeks size', '>16 weeks size', 'Not palpable'] },
              { id: 'gyn_uterus_position', label: 'Uterine Position', type: 'select', options: ['Anteverted / Anteflexed', 'Retroverted / Retroflexed', 'Midposition'] },
              { id: 'gyn_uterus_mobility', label: 'Uterine Mobility', type: 'select', options: ['Mobile', 'Restricted', 'Fixed'] },
              { id: 'gyn_adnexa', label: 'Adnexal Findings', type: 'textarea', placeholder: 'Ovaries palpable, tenderness, mass, cyst...' },
              { id: 'gyn_pv_exam', label: 'PV Examination', type: 'textarea', placeholder: 'Uterus size, position, mobility, fornices...' },
              { id: 'gyn_speculum', label: 'Per Speculum Exam', type: 'textarea', placeholder: 'Cervix appearance, discharge, erosion...' },
              { id: 'gyn_cervix_findings', label: 'Cervical Findings', type: 'select', options: ['Normal', 'Cervical Ectropion', 'Cervical Polyp', 'Cervical Erosion', 'Cervical Mass', 'Cervical Stenosis'] },
              { id: 'gyn_vaginal_discharge', label: 'Vaginal Discharge Character', type: 'select', options: ['None / Normal', 'White / Curdy (Candida)', 'Yellow / Purulent (Bacterial)', 'Grey / Fishy odour (BV)', 'Blood-stained', 'Watery'] },
              { id: 'gyn_bimanual', label: 'Bimanual Examination', type: 'textarea', placeholder: 'Adnexal tenderness, cervical motion tenderness...' },
              { id: 'gyn_rectal_exam', label: 'Rectal Examination', type: 'textarea', placeholder: 'If indicated: rectovaginal septum, endometriosis...' }
            ]
          }
        ]
      },
      {
        id: 'gyn_investigations',
        name: 'INVESTIGATIONS',
        defaultVisible: true,
        sections: [
          {
            id: 'gyn_inv_info',
            name: 'Ultrasound & Lab Tests',
            defaultVisible: true,
            fields: [
              { id: 'gyn_usg', label: 'USG Pelvis / Obstetric Findings', type: 'textarea', placeholder: 'USG report summary...' },
              { id: 'gyn_usg_type', label: 'USG Type', type: 'select', options: ['Transabdominal', 'Transvaginal', 'Both', '3D/4D Ultrasound', 'Doppler'] },
              { id: 'gyn_pap', label: 'Pap Smear Result', type: 'select', options: ['NILM (Normal)', 'ASCUS', 'LSIL', 'HSIL', 'AGC', 'Malignant cells', 'Pending'] },
              { id: 'gyn_hpv', label: 'HPV Test', type: 'select', options: ['Negative', 'Positive - HPV 16', 'Positive - HPV 18', 'Positive - Other HR type', 'Pending', 'Not done'] },
              { id: 'gyn_hb', label: 'Hemoglobin (Hb)', type: 'text', placeholder: '12.4 g/dL' },
              { id: 'gyn_blood_group', label: 'Blood Group & Rh', type: 'text', placeholder: 'B+ve' },
              { id: 'gyn_urine', label: 'Urine R/M & Culture', type: 'text', placeholder: 'Normal / WBC ++, Protein trace...' },
              { id: 'gyn_blood_sugar', label: 'Blood Sugar (FBS/PPBS)', type: 'text', placeholder: 'FBS: 92 mg/dL' },
              { id: 'gyn_thyroid', label: 'Thyroid Function (TSH/T3/T4)', type: 'text', placeholder: 'TSH: 3.2 mIU/L' },
              { id: 'gyn_hormones', label: 'Hormonal Tests (FSH/LH/Prolactin/E2)', type: 'textarea', placeholder: 'FSH: 6, LH: 5, Prolactin: 15, E2: 45...' },
              { id: 'gyn_ca125', label: 'CA-125 (Ovarian Marker)', type: 'text', placeholder: 'U/mL' },
              { id: 'gyn_hcg', label: 'Beta-hCG', type: 'text', placeholder: 'mIU/mL (Quantitative)' },
              { id: 'gyn_preg_test', label: 'Urine Pregnancy Test (UPT)', type: 'select', options: ['Negative', 'Positive', 'Not done'] },
              { id: 'gyn_coagulation', label: 'Coagulation Profile (PT/aPTT)', type: 'text', placeholder: 'For bleeding disorders...' },
              { id: 'gyn_hiv_vdrl', label: 'HIV / VDRL / HBsAg', type: 'text', placeholder: 'All Non-Reactive' },
              { id: 'gyn_colposcopy', label: 'Colposcopy Findings', type: 'textarea', placeholder: 'Acetowhite areas, vascular patterns, biopsy taken...' },
              { id: 'gyn_biopsy', label: 'Biopsy / Histopathology', type: 'textarea', placeholder: 'Endometrial biopsy, cervical biopsy findings...' },
              { id: 'gyn_laparoscopy', label: 'Laparoscopy / Hysteroscopy Findings', type: 'textarea', placeholder: 'Adhesions, endometriosis deposits, polyps...' },
              { id: 'gyn_mammogram', label: 'Mammogram / Breast USG', type: 'textarea', placeholder: 'BIRADS category, findings...' },
              { id: 'gyn_other_inv', label: 'Other Investigations', type: 'textarea', placeholder: 'CBC, LFT, RFT, MRI pelvis...' }
            ]
          }
        ]
      },
      {
        id: 'gyn_diagnosis',
        name: 'DIAGNOSIS',
        defaultVisible: true,
        sections: [
          {
            id: 'gyn_diag_info',
            name: 'Clinical Impression',
            defaultVisible: true,
            fields: [
              { id: 'gyn_diag_primary', label: 'Primary Diagnosis', type: 'select', options: ['PCOS (Polycystic Ovarian Syndrome)', 'Uterine Fibroid (Leiomyoma)', 'Dysfunctional Uterine Bleeding (DUB)', 'Pelvic Inflammatory Disease (PID)', 'Endometriosis', 'Antenatal Care (ANC)', 'Vaginitis / Vulvovaginitis', 'Menopause Syndrome', 'Ovarian Cyst', 'Cervical Polyp', 'Endometrial Polyp', 'Cervical Ectropion', 'Bacterial Vaginosis', 'Candidiasis', 'Trichomonas Vaginalis', 'Primary Infertility', 'Secondary Infertility', 'Adenomyosis', 'Prolapse Uterus', 'Ectopic Pregnancy', 'Threatened Abortion', 'Incomplete Abortion', 'Gestational Trophoblastic Disease', 'Cervical Carcinoma', 'Endometrial Carcinoma', 'Ovarian Carcinoma'] },
              { id: 'gyn_diag_secondary', label: 'Secondary / Co-existing Diagnosis', type: 'textarea', placeholder: 'Additional gynecological diagnoses...' },
              { id: 'gyn_diag_diff', label: 'Differential Diagnosis', type: 'textarea', placeholder: 'Other possibilities considered...' },
              { id: 'gyn_icd10', label: 'ICD-10 Code', type: 'text', placeholder: 'e.g. N93.0, N80.1, Z34.00' },
              { id: 'gyn_diag_severity', label: 'Severity', type: 'select', options: ['Mild', 'Moderate', 'Severe'] },
              { id: 'gyn_diag_other', label: 'Other Diagnosis Notes', type: 'textarea', placeholder: 'Additional clinical notes...' }
            ]
          }
        ]
      },
      {
        id: 'gyn_treatment',
        name: 'TREATMENT / ADVICE',
        defaultVisible: true,
        sections: [
          {
            id: 'gyn_treat_info',
            name: 'Prescription & Gynecological Management',
            defaultVisible: true,
            fields: [
              { id: 'gyn_advice', label: 'Advice', type: 'textarea', placeholder: 'Diet, exercise, hygiene instructions...' },
              { id: 'gyn_lifestyle', label: 'Lifestyle Advice', type: 'textarea', placeholder: 'Weight reduction, stress management, iron-rich foods...' },
              { id: 'gyn_meds', label: 'Medications', type: 'textarea', placeholder: 'Prescribed drugs, dosage, frequency, duration...' },
              { id: 'gyn_hormonal_rx', label: 'Hormonal Treatment', type: 'select', options: ['None', 'OCPs', 'Progesterone (Norethisterone)', 'GnRH Agonist', 'Clomiphene Citrate', 'HRT (Estrogen+Progesterone)', 'Letrozole', 'Metformin'] },
              { id: 'gyn_contraception_adv', label: 'Contraceptive Counselling', type: 'textarea', placeholder: 'Method discussed, patient preference...' },
              { id: 'gyn_procedure', label: 'Procedure Performed / Advised', type: 'select', options: ['None', 'Pap Smear', 'IUD Insertion', 'IUD Removal', 'D&C', 'LEEP / Cone Biopsy', 'Endometrial Biopsy', 'Colposcopy', 'Bartholin Cyst Drainage', 'Pessary Insertion'] },
              { id: 'gyn_surgical_plan', label: 'Surgical Plan', type: 'select', options: ['None', 'Laparoscopy Diagnostic', 'Laparoscopic Myomectomy', 'Laparoscopic Cystectomy', 'Total Hysterectomy', 'Laparoscopic Hysterectomy', 'Abdominal Myomectomy', 'Tubectomy', 'Colporrhaphy', 'VH (Vaginal Hysterectomy)'] },
              { id: 'gyn_referral_adv', label: 'Referral', type: 'text', placeholder: 'Oncology, Fertility specialist, Endocrinology...' },
              { id: 'gyn_followup', label: 'Follow Up Date', type: 'date' },
              { id: 'gyn_followup_reason', label: 'Reason for Follow-up', type: 'text', placeholder: 'Review of investigations, post-treatment assessment...' }
            ]
          }
        ]
      }
    ]
  },
  Cardiology: {
    id: 'Cardiology',
    name: 'Cardiology',
    categories: [
      {
        id: 'card_patient_data',
        name: 'PATIENT DATA',
        defaultVisible: true,
        sections: [
          {
            id: 'card_pat_info',
            name: 'Patient Demographics & Overview',
            defaultVisible: true,
            fields: [
              { id: 'card_complaints', label: 'Chief Complaints / Since', type: 'textarea', placeholder: 'Chest pain, breathlessness, palpitations...' },
              { id: 'card_history', label: 'Patient History', type: 'textarea', placeholder: 'Prior CAD, CABG, PCI, HTN...' },
              { id: 'card_allergies', label: 'Drug Allergy History', type: 'text', placeholder: 'Aspirin, Contrast dye, Statin...' },
              { id: 'card_referral', label: 'Referral Source', type: 'text', placeholder: 'Referred by Dr. / Hospital / Self' },
              { id: 'card_insurance', label: 'Insurance / Panel', type: 'text', placeholder: 'Policy details...' }
            ]
          }
        ]
      },
      {
        id: 'card_chief_complaints',
        name: 'CHIEF COMPLAINTS',
        defaultVisible: true,
        sections: [
          {
            id: 'card_cc_info',
            name: 'Presenting Cardiac Symptoms',
            defaultVisible: true,
            fields: [
              { id: 'card_cc_primary', label: 'Primary Complaint', type: 'select', options: ['Chest Pain', 'Palpitations', 'Breathlessness / Dyspnea', 'Syncope / Fainting', 'Dizziness / Lightheadedness', 'Fatigue / Easy Tiredness', 'Exercise Intolerance', 'Leg Swelling', 'Orthopnea', 'PND (Paroxysmal Nocturnal Dyspnea)', 'Cough', 'Hemoptysis', 'Claudication'] },
              { id: 'card_cc_duration', label: 'Duration', type: 'text', placeholder: 'e.g. 3 days, 2 weeks' },
              { id: 'card_cc_onset', label: 'Onset', type: 'select', options: ['Sudden', 'Gradual', 'Exertional', 'At Rest', 'Nocturnal'] },
              { id: 'card_cc_severity', label: 'Severity', type: 'select', options: ['Mild', 'Moderate', 'Severe', 'Disabling'] },
              { id: 'card_cc_aggravating', label: 'Aggravating Factors', type: 'text', placeholder: 'Exertion, lying flat, cold exposure, stress...' },
              { id: 'card_cc_relieving', label: 'Relieving Factors', type: 'text', placeholder: 'Rest, NTG sublingual, sitting upright...' },
              { id: 'card_cc_radiation', label: 'Radiation of Pain', type: 'select', options: ['None', 'Left Arm', 'Jaw', 'Back / Interscapular', 'Epigastrium', 'Both Arms'] },
              { id: 'card_cc_assoc', label: 'Associated Symptoms', type: 'textarea', placeholder: 'Sweating, nausea, vomiting, anxiety...' }
            ]
          }
        ]
      },
      {
        id: 'card_cardiac_hx',
        name: 'CARDIAC HISTORY',
        defaultVisible: true,
        sections: [
          {
            id: 'card_hx_info',
            name: 'Symptoms & Risk Factors',
            defaultVisible: true,
            fields: [
              { id: 'card_chest_pain', label: 'Chest Pain Type', type: 'select', options: ['Typical Angina (Retrosternal)', 'Atypical Pain', 'Non-Cardiac Pain', 'None'] },
              { id: 'card_dyspnea', label: 'Dyspnea (NYHA Class)', type: 'select', options: ['NYHA Class I', 'NYHA Class II', 'NYHA Class III', 'NYHA Class IV', 'None'] },
              { id: 'card_palpitations', label: 'Palpitations', type: 'select', options: ['Absent', 'Episodic Fast', 'Irregular / AF', 'Exertional'] },
              { id: 'card_syncope', label: 'Syncope / Presyncope', type: 'select', options: ['Absent', 'Exertional Syncope', 'Postural', 'Vasovagal'] },
              { id: 'card_risk_factors', label: 'Cardiac Risk Factors', type: 'multiselect', options: ['Hypertension', 'Diabetes Mellitus', 'Dyslipidemia', 'Smoking', 'Family H/O Premature CAD', 'Obesity', 'Sedentary'] },
              { id: 'card_htn', label: 'Hypertension', type: 'select', options: ['No', 'Stage 1 (130-139/80-89)', 'Stage 2 (≥140/90)', 'Resistant HTN', 'On Treatment'] },
              { id: 'card_dm', label: 'Diabetes Mellitus', type: 'select', options: ['No', 'Type 1 DM', 'Type 2 DM', 'Pre-diabetes'] },
              { id: 'card_dyslipid', label: 'Dyslipidemia', type: 'select', options: ['No', 'Yes - On Statin', 'Yes - Not on Statin', 'Familial Hypercholesterolemia'] },
              { id: 'card_smoking', label: 'Smoking Status', type: 'select', options: ['Never', 'Current Smoker', 'Ex-Smoker', 'Passive Smoking'] },
              { id: 'card_prev_mi', label: 'Previous MI', type: 'select', options: ['No', 'STEMI', 'NSTEMI', 'Multiple MIs'] },
              { id: 'card_prev_pci', label: 'Previous PCI / Stent', type: 'text', placeholder: 'Date, vessel, stent type (DES/BMS)...' },
              { id: 'card_prev_cabg', label: 'Previous CABG', type: 'text', placeholder: 'Date, grafts (LIMA-LAD, SVG-RCA)...' },
              { id: 'card_hf_hx', label: 'Heart Failure History', type: 'select', options: ['No', 'HFrEF (EF<40%)', 'HFmrEF (EF 40-49%)', 'HFpEF (EF≥50%)'] },
              { id: 'card_arrhythmia_hx', label: 'Arrhythmia History', type: 'multiselect', options: ['None', 'Atrial Fibrillation', 'Atrial Flutter', 'SVT', 'VT', 'VF', 'Heart Block', 'Sick Sinus Syndrome'] },
              { id: 'card_valve_hx', label: 'Valvular Disease History', type: 'multiselect', options: ['None', 'Mitral Stenosis', 'Mitral Regurgitation', 'Aortic Stenosis', 'Aortic Regurgitation', 'Tricuspid Regurgitation', 'Prosthetic Valve'] },
              { id: 'card_device_hx', label: 'Cardiac Device', type: 'select', options: ['None', 'Permanent Pacemaker', 'ICD', 'CRT-D', 'CRT-P', 'Loop Recorder'] },
              { id: 'card_rhd', label: 'Rheumatic Heart Disease', type: 'select', options: ['No', 'Yes - Active', 'Yes - Inactive / Post-surgery'] },
              { id: 'card_chd', label: 'Congenital Heart Disease', type: 'text', placeholder: 'ASD, VSD, PDA, ToF...' },
              { id: 'card_fam_hx', label: 'Family Cardiac History', type: 'text', placeholder: 'Premature CAD, sudden cardiac death, cardiomyopathy...' },
              { id: 'card_sys_hx', label: 'Systemic Medical History', type: 'multiselect', options: ['CKD', 'COPD / Asthma', 'Thyroid Disorder', 'Anemia', 'Connective Tissue Disease', 'Stroke / TIA', 'PAD', 'None'] },
              { id: 'card_medications', label: 'Current Medications', type: 'textarea', placeholder: 'Aspirin, Clopidogrel, Atorvastatin, Metoprolol, Ramipril, Furosemide...' },
              { id: 'card_social_hx', label: 'Social History', type: 'text', placeholder: 'Alcohol, tobacco, exercise level, occupation...' }
            ]
          }
        ]
      },
      {
        id: 'card_exam',
        name: 'EXAMINATION',
        defaultVisible: true,
        sections: [
          {
            id: 'card_exam_info',
            name: 'Cardiovascular Physical Exam',
            defaultVisible: true,
            fields: [
              { id: 'card_gen_appearance', label: 'General Appearance', type: 'textarea', placeholder: 'Pallor, cyanosis, clubbing, dyspnea at rest...' },
              { id: 'card_bp', label: 'Blood Pressure', type: 'text', placeholder: '120/80 mmHg' },
              { id: 'card_bp_standing', label: 'BP Standing (Orthostatic)', type: 'text', placeholder: '110/70 mmHg' },
              { id: 'card_bp_both_arms', label: 'BP Both Arms', type: 'text', placeholder: 'R: 120/80, L: 118/78' },
              { id: 'card_pulse', label: 'Pulse Rate & Rhythm', type: 'text', placeholder: '72/min, Regular' },
              { id: 'card_pulse_char', label: 'Pulse Character', type: 'select', options: ['Normal Volume', 'Low Volume / Thready', 'Bounding', 'Collapsing (Water Hammer)', 'Pulsus Alternans', 'Pulsus Paradoxus', 'Slow Rising'] },
              { id: 'card_peripheral_pulses', label: 'Peripheral Pulses', type: 'textarea', placeholder: 'Radial, Brachial, Carotid, Femoral, Popliteal, Dorsalis Pedis, Posterior Tibial — all palpable...' },
              { id: 'card_spo2', label: 'SpO2', type: 'text', placeholder: '98% on room air' },
              { id: 'card_rr', label: 'Respiratory Rate', type: 'text', placeholder: '16/min' },
              { id: 'card_jvp', label: 'Jugular Venous Pressure (JVP)', type: 'select', options: ['Normal / Not Raised', 'Elevated (cm H2O)', 'Positive Hepatojugular Reflux'] },
              { id: 'card_jvp_cm', label: 'JVP Height (cm)', type: 'text', placeholder: 'e.g. 8 cm above sternal angle' },
              { id: 'card_precordium', label: 'Precordial Inspection & Palpation', type: 'textarea', placeholder: 'Apex beat location, heave, thrill...' },
              { id: 'card_apex_beat', label: 'Apex Beat', type: 'select', options: ['Normal (5th ICS MCL)', 'Displaced Laterally', 'Displaced Inferolaterally', 'Hyperdynamic', 'Not Palpable'] },
              { id: 'card_s1', label: 'First Heart Sound (S1)', type: 'select', options: ['Normal', 'Loud', 'Soft', 'Variable'] },
              { id: 'card_s2', label: 'Second Heart Sound (S2)', type: 'select', options: ['Normal Split', 'Loud A2', 'Loud P2', 'Fixed Split', 'Paradoxical Split', 'Single S2'] },
              { id: 'card_s3', label: 'Third Heart Sound (S3)', type: 'select', options: ['Absent', 'Present (Gallop)'] },
              { id: 'card_s4', label: 'Fourth Heart Sound (S4)', type: 'select', options: ['Absent', 'Present'] },
              { id: 'card_heart_sounds', label: 'Heart Sounds & Murmurs', type: 'textarea', placeholder: 'S1 S2 present, Systolic murmur at apex...' },
              { id: 'card_murmur', label: 'Murmur', type: 'select', options: ['No Murmur', 'Systolic (Ejection)', 'Systolic (Pansystolic)', 'Diastolic (Early)', 'Diastolic (Mid / Rumbling)', 'Continuous', 'To-and-Fro'] },
              { id: 'card_murmur_grade', label: 'Murmur Grade', type: 'select', options: ['Grade 1/6', 'Grade 2/6', 'Grade 3/6', 'Grade 4/6', 'Grade 5/6', 'Grade 6/6'] },
              { id: 'card_murmur_site', label: 'Murmur Location & Radiation', type: 'text', placeholder: 'Apex → Axilla, Aortic area → Carotids...' },
              { id: 'card_lung_exam', label: 'Lung Examination', type: 'textarea', placeholder: 'Bilateral air entry, basal crepitations, pleural effusion...' },
              { id: 'card_abdomen', label: 'Abdominal Examination', type: 'textarea', placeholder: 'Hepatomegaly, ascites, pulsatile liver...' },
              { id: 'card_edema', label: 'Pedal Edema', type: 'select', options: ['Absent', 'Pitting Edema 1+', 'Pitting Edema 2+', 'Pitting Edema 3+', 'Anasarca'] },
              { id: 'card_cyanosis', label: 'Cyanosis', type: 'select', options: ['Absent', 'Peripheral', 'Central', 'Differential'] },
              { id: 'card_clubbing', label: 'Clubbing', type: 'select', options: ['Absent', 'Present'] },
              { id: 'card_carotid', label: 'Carotid Examination', type: 'text', placeholder: 'Bruit, volume, character...' }
            ]
          }
        ]
      },
      {
        id: 'card_investigations',
        name: 'INVESTIGATIONS',
        defaultVisible: true,
        sections: [
          {
            id: 'card_inv_info',
            name: 'ECG, Echo, Stress Test & Biomarkers',
            defaultVisible: true,
            fields: [
              { id: 'card_ecg', label: 'ECG Findings', type: 'textarea', placeholder: 'NSR, ST elevation in V1-V4, T wave inversion...' },
              { id: 'card_ecg_rhythm', label: 'ECG Rhythm', type: 'select', options: ['Normal Sinus Rhythm', 'Sinus Tachycardia', 'Sinus Bradycardia', 'Atrial Fibrillation', 'Atrial Flutter', 'SVT', 'Ventricular Tachycardia', 'Heart Block (1st/2nd/3rd degree)'] },
              { id: 'card_ecg_axis', label: 'ECG Axis', type: 'select', options: ['Normal Axis', 'Left Axis Deviation', 'Right Axis Deviation', 'Extreme Axis'] },
              { id: 'card_ecg_st', label: 'ST-T Changes', type: 'text', placeholder: 'ST elevation leads, ST depression, T wave changes...' },
              { id: 'card_echo', label: '2D Echocardiography', type: 'textarea', placeholder: 'LVEF: 55%, RWMA, Valvular status...' },
              { id: 'card_ef', label: 'Ejection Fraction (EF%)', type: 'text', placeholder: '55%' },
              { id: 'card_lv_size', label: 'LV Chamber Size (LVIDd/LVIDs)', type: 'text', placeholder: 'LVIDd: 48mm, LVIDs: 32mm' },
              { id: 'card_la_size', label: 'LA Size', type: 'text', placeholder: '38 mm' },
              { id: 'card_rv_function', label: 'RV Function (TAPSE)', type: 'text', placeholder: 'TAPSE: 20mm' },
              { id: 'card_rwma', label: 'Regional Wall Motion', type: 'select', options: ['Normal', 'Hypokinesia', 'Akinesia', 'Dyskinesia', 'Aneurysm'] },
              { id: 'card_rwma_territory', label: 'RWMA Territory', type: 'text', placeholder: 'Anterior wall, LAD territory...' },
              { id: 'card_valve_echo', label: 'Valve Findings on Echo', type: 'textarea', placeholder: 'MV: Mild MR, AV: Calcified, AS gradient...' },
              { id: 'card_doppler', label: 'Doppler Findings', type: 'textarea', placeholder: 'E/A ratio, Deceleration time, PASP...' },
              { id: 'card_pasp', label: 'Pulmonary Artery Systolic Pressure', type: 'text', placeholder: '35 mmHg' },
              { id: 'card_pericardium', label: 'Pericardial Effusion', type: 'select', options: ['None', 'Trivial / Trace', 'Small', 'Moderate', 'Large / Tamponade'] },
              { id: 'card_tmt', label: 'Stress Test (TMT) / Holter', type: 'text', placeholder: 'Negative for inducible ischemia at 9 METS' },
              { id: 'card_tmt_result', label: 'TMT Result', type: 'select', options: ['Negative', 'Positive', 'Equivocal', 'Submaximal', 'Not done'] },
              { id: 'card_holter', label: 'Holter Monitor', type: 'textarea', placeholder: 'Min HR, Max HR, arrhythmia episodes...' },
              { id: 'card_stress_echo', label: 'Stress Echocardiography', type: 'textarea', placeholder: 'Dobutamine stress results...' },
              { id: 'card_angio', label: 'Coronary Angiography (CAG)', type: 'textarea', placeholder: 'LAD: 80% stenosis, LCx: Normal, RCA: 60%...' },
              { id: 'card_ct_angio', label: 'CT Coronary Angiography', type: 'textarea', placeholder: 'Calcium score, stenosis grade...' },
              { id: 'card_cardiac_mri', label: 'Cardiac MRI', type: 'textarea', placeholder: 'LGE, viability, tissue characterization...' },
              { id: 'card_lipids', label: 'Lipid Profile', type: 'text', placeholder: 'TC: 190, LDL: 110, HDL: 45, TG: 150' },
              { id: 'card_biomarkers', label: 'Troponin / NT-proBNP', type: 'text', placeholder: 'Trop-I: Negative, NT-proBNP: 120 pg/mL' },
              { id: 'card_hba1c', label: 'HbA1c', type: 'text', placeholder: '6.5%' },
              { id: 'card_crp', label: 'hs-CRP', type: 'text', placeholder: 'mg/L' },
              { id: 'card_renal', label: 'Renal Function (Creatinine / eGFR)', type: 'text', placeholder: 'Cr: 1.0, eGFR: 85' },
              { id: 'card_cbc', label: 'CBC', type: 'text', placeholder: 'Hb, WBC, Platelets' },
              { id: 'card_coag', label: 'Coagulation (INR / PT)', type: 'text', placeholder: 'INR: 2.5 (on Warfarin)' },
              { id: 'card_thyroid', label: 'Thyroid Function', type: 'text', placeholder: 'TSH: 2.5 mIU/L' },
              { id: 'card_xray', label: 'Chest X-Ray', type: 'textarea', placeholder: 'Cardiomegaly, pulmonary congestion, pleural effusion...' },
              { id: 'card_other_inv', label: 'Other Investigations', type: 'textarea', placeholder: 'EP study, Myocardial perfusion imaging, TEE...' }
            ]
          }
        ]
      },
      {
        id: 'card_diagnosis',
        name: 'DIAGNOSIS',
        defaultVisible: true,
        sections: [
          {
            id: 'card_diag_info',
            name: 'Cardiac Diagnosis',
            defaultVisible: true,
            fields: [
              { id: 'card_diag_primary', label: 'Primary Cardiac Diagnosis', type: 'select', options: ['Ischemic Heart Disease (CAD)', 'Hypertensive Heart Disease', 'Congestive Heart Failure (HFrEF)', 'Heart Failure (HFpEF)', 'Atrial Fibrillation', 'STEMI / NSTEMI', 'Stable Angina', 'Unstable Angina / ACS', 'Valvular Heart Disease', 'Dilated Cardiomyopathy', 'Hypertrophic Cardiomyopathy', 'Restrictive Cardiomyopathy', 'Myocarditis', 'Pericarditis', 'Pericardial Effusion', 'Infective Endocarditis', 'Pulmonary Hypertension', 'Pulmonary Embolism', 'Deep Vein Thrombosis', 'Aortic Dissection', 'Aortic Aneurysm', 'Peripheral Artery Disease', 'Rheumatic Heart Disease', 'Congenital Heart Disease', 'Arrhythmia (Unspecified)'] },
              { id: 'card_diag_secondary', label: 'Secondary Cardiac Diagnosis', type: 'textarea', placeholder: 'Co-existing cardiac conditions...' },
              { id: 'card_diag_diff', label: 'Differential Diagnosis', type: 'textarea', placeholder: 'Other considerations...' },
              { id: 'card_icd10', label: 'ICD-10 Code', type: 'text', placeholder: 'e.g. I25.10, I50.9, I48.91' },
              { id: 'card_severity', label: 'Severity', type: 'select', options: ['Mild', 'Moderate', 'Severe', 'Critical'] },
              { id: 'card_diag_other', label: 'Other Cardiac Diagnoses', type: 'textarea', placeholder: 'Secondary cardiac diagnoses...' }
            ]
          }
        ]
      },
      {
        id: 'card_procedures',
        name: 'PROCEDURES / INTERVENTIONS',
        defaultVisible: false,
        sections: [
          {
            id: 'card_proc_info',
            name: 'Cardiac Procedures & Interventions',
            defaultVisible: true,
            fields: [
              { id: 'card_proc_performed', label: 'Procedure Performed', type: 'select', options: ['None', 'Coronary Angiography (Diagnostic)', 'PCI with Stenting', 'PTCA (Balloon Angioplasty)', 'Pericardiocentesis', 'DC Cardioversion', 'Temporary Pacemaker', 'Permanent Pacemaker Implantation', 'ICD Implantation', 'CRT Implantation', 'EP Study & Ablation', 'IABP Insertion', 'Thrombolysis'] },
              { id: 'card_proc_planned', label: 'Planned Procedure', type: 'select', options: ['PCI / Stenting', 'CABG Surgery', 'Valve Repair / Replacement', 'Device Implantation (PPM/ICD/CRT)', 'EP Study / Ablation', 'TAVR / TAVI', 'MitraClip', 'ASD / VSD Closure', 'PDA Device Closure', 'Watchman Device', 'Pericardial Window'] },
              { id: 'card_proc_date', label: 'Procedure Date', type: 'date' },
              { id: 'card_proc_vessel', label: 'Target Vessel / Structure', type: 'text', placeholder: 'LAD, LCx, RCA, Mitral Valve...' },
              { id: 'card_stent_details', label: 'Stent Details', type: 'text', placeholder: 'DES 3.0x28mm to LAD, Post-dilated to 3.25mm...' },
              { id: 'card_proc_notes', label: 'Procedural Notes', type: 'textarea', placeholder: 'Procedural details, complications, outcome...' },
              { id: 'card_proc_access', label: 'Access Site', type: 'select', options: ['Right Radial', 'Left Radial', 'Right Femoral', 'Left Femoral'] },
              { id: 'card_proc_complications', label: 'Procedural Complications', type: 'select', options: ['None', 'Access Site Bleeding', 'Contrast Reaction', 'Dissection', 'No Reflow', 'Arrhythmia', 'Perforation'] }
            ]
          }
        ]
      },
      {
        id: 'card_treatment',
        name: 'TREATMENT / ADVICE',
        defaultVisible: true,
        sections: [
          {
            id: 'card_treat_info',
            name: 'Prescription & Cardiac Rehab',
            defaultVisible: true,
            fields: [
              { id: 'card_advice', label: 'Advice', type: 'textarea', placeholder: 'Low salt diet, walking 30 mins daily...' },
              { id: 'card_lifestyle', label: 'Lifestyle Modification', type: 'textarea', placeholder: 'Dietary sodium restriction, DASH diet, smoking cessation, exercise prescription...' },
              { id: 'card_meds', label: 'Medications', type: 'textarea', placeholder: 'Aspirin, Atorvastatin, Metoprolol, Ramipril...' },
              { id: 'card_antiplatelet', label: 'Antiplatelet Therapy', type: 'select', options: ['None', 'Aspirin only', 'DAPT (Aspirin + Clopidogrel)', 'DAPT (Aspirin + Ticagrelor)', 'DAPT (Aspirin + Prasugrel)'] },
              { id: 'card_anticoag', label: 'Anticoagulant', type: 'select', options: ['None', 'Warfarin', 'Dabigatran', 'Rivaroxaban', 'Apixaban', 'Edoxaban', 'Enoxaparin (LMWH)'] },
              { id: 'card_statin', label: 'Statin', type: 'select', options: ['None', 'Atorvastatin 10mg', 'Atorvastatin 20mg', 'Atorvastatin 40mg', 'Atorvastatin 80mg', 'Rosuvastatin 5mg', 'Rosuvastatin 10mg', 'Rosuvastatin 20mg', 'Rosuvastatin 40mg'] },
              { id: 'card_beta_blocker', label: 'Beta Blocker', type: 'select', options: ['None', 'Metoprolol Succinate', 'Metoprolol Tartrate', 'Bisoprolol', 'Carvedilol', 'Atenolol', 'Nebivolol'] },
              { id: 'card_ace_arb', label: 'ACEi / ARB / ARNI', type: 'select', options: ['None', 'Ramipril', 'Enalapril', 'Perindopril', 'Telmisartan', 'Losartan', 'Valsartan', 'Sacubitril-Valsartan (ARNI)'] },
              { id: 'card_diuretic', label: 'Diuretic', type: 'select', options: ['None', 'Furosemide', 'Torsemide', 'Hydrochlorothiazide', 'Chlorthalidone', 'Spironolactone', 'Eplerenone'] },
              { id: 'card_ccb', label: 'Calcium Channel Blocker', type: 'select', options: ['None', 'Amlodipine', 'Cilnidipine', 'Diltiazem', 'Verapamil'] },
              { id: 'card_antiarrhythmic', label: 'Antiarrhythmic', type: 'select', options: ['None', 'Amiodarone', 'Flecainide', 'Propafenone', 'Digoxin'] },
              { id: 'card_nitrate', label: 'Nitrate', type: 'select', options: ['None', 'Isosorbide Mononitrate', 'GTN Sublingual PRN', 'Nitroglycerin Patch'] },
              { id: 'card_sglt2i', label: 'SGLT2 Inhibitor (for HF)', type: 'select', options: ['None', 'Dapagliflozin', 'Empagliflozin'] },
              { id: 'card_cardiac_rehab', label: 'Cardiac Rehabilitation', type: 'select', options: ['Not Required', 'Phase 1 (Inpatient)', 'Phase 2 (Early Outpatient)', 'Phase 3 (Long-term Maintenance)'] },
              { id: 'card_followup', label: 'Follow Up Date', type: 'date' },
              { id: 'card_followup_plan', label: 'Follow-up Plan', type: 'textarea', placeholder: 'Repeat Echo in 3 months, Lipid profile in 6 weeks, INR monitoring...' }
            ]
          }
        ]
      }
    ]
  },
  Dermatology: {
    id: 'Dermatology',
    name: 'Dermatology',
    categories: [
      {
        id: 'derm_patient_data',
        name: 'PATIENT DATA',
        defaultVisible: true,
        sections: [
          {
            id: 'derm_pat_info',
            name: 'Patient Demographics & Overview',
            defaultVisible: true,
            fields: [
              { id: 'derm_complaints', label: 'Chief Complaints / Since', type: 'textarea', placeholder: 'Skin rash, itching, discoloration...' },
              { id: 'derm_history', label: 'Patient History', type: 'textarea', placeholder: 'Prior skin conditions, allergies...' },
              { id: 'derm_allergies', label: 'Drug & Contact Allergies', type: 'text', placeholder: 'Cosmetics, Sulfa, Latex...' },
              { id: 'derm_skin_type', label: 'Skin Type (Fitzpatrick)', type: 'text', placeholder: 'Type I-VI' },
              { id: 'derm_occupation', label: 'Occupation', type: 'text', placeholder: 'Relevant occupational exposure...' },
              { id: 'derm_sys_hx', label: 'Systemic History', type: 'multiselect', options: ['Diabetes', 'Thyroid', 'Autoimmune', 'HIV/Immunosuppression', 'Hepatitis', 'Atopy', 'None'] },
              { id: 'derm_fam_hx', label: 'Family Dermatological History', type: 'text', placeholder: 'Psoriasis, atopy, skin cancer...' },
              { id: 'derm_social_hx', label: 'Social History', type: 'text', placeholder: 'Sun exposure, smoking, cosmetics use...' }
            ]
          }
        ]
      },
      {
        id: 'derm_cc',
        name: 'CHIEF COMPLAINT',
        defaultVisible: true,
        sections: [
          {
            id: 'derm_cc_info',
            name: 'Lesion Characteristics & Onset',
            defaultVisible: true,
            fields: [
              { id: 'derm_primary_cc', label: 'Primary Complaint', type: 'select', options: ['Itching (Pruritus)', 'Rash / Eruption', 'Skin Lesion', 'Hair Loss (Alopecia)', 'Nail Changes', 'Pigmentation', 'Acne / Pimples', 'Skin Swelling / Lump', 'Ulcer / Non-healing Wound', 'Skin Burn', 'Photosensitivity', 'Dryness / Xerosis', 'Excessive Sweating', 'Skin Infection'] },
              { id: 'derm_duration', label: 'Duration', type: 'text', placeholder: 'e.g. 2 weeks' },
              { id: 'derm_severity', label: 'Severity', type: 'select', options: ['Mild', 'Moderate', 'Severe'] },
              { id: 'derm_nature', label: 'Nature of Lesion', type: 'select', options: ['Acute', 'Chronic', 'Recurrent', 'Progressive'] },
              { id: 'derm_assoc_sympt', label: 'Associated Symptoms', type: 'text', placeholder: 'Pain, burning, scaling, oozing...' },
              { id: 'derm_onset', label: 'Onset', type: 'select', options: ['Sudden', 'Gradual', 'Insidious'] },
              { id: 'derm_site', label: 'Affected Site(s)', type: 'text', placeholder: 'Face, trunk, limbs, scalp, genitalia...' },
              { id: 'derm_progression', label: 'Progression', type: 'select', options: ['Stable', 'Spreading', 'Improving', 'Worsening'] },
              { id: 'derm_triggers', label: 'Triggering Factors', type: 'text', placeholder: 'Sun, food, stress, medication, chemicals...' },
              { id: 'derm_prev_rx', label: 'Previous Treatment', type: 'text', placeholder: 'Topical steroids, antifungal, antibiotics tried...' }
            ]
          }
        ]
      },
      {
        id: 'derm_history_sec',
        name: 'DERMATOLOGICAL HISTORY',
        defaultVisible: true,
        sections: [
          {
            id: 'derm_hx_info',
            name: 'Past Dermatological & Medical History',
            defaultVisible: true,
            fields: [
              { id: 'derm_past_conditions', label: 'Previous Skin Conditions', type: 'multiselect', options: ['None', 'Eczema / Atopic Dermatitis', 'Psoriasis', 'Acne', 'Urticaria', 'Fungal Infection', 'Vitiligo', 'Warts', 'Herpes Simplex', 'Herpes Zoster', 'Skin Cancer'] },
              { id: 'derm_atopic_hx', label: 'Atopic History', type: 'select', options: ['No Atopy', 'Asthma', 'Allergic Rhinitis', 'Atopic Dermatitis', 'Multiple Atopic Conditions'] },
              { id: 'derm_drug_reactions', label: 'Previous Drug Reactions', type: 'text', placeholder: 'Fixed drug eruption, SJS, DRESS...' },
              { id: 'derm_cosmetic_hx', label: 'Cosmetic / Procedure History', type: 'text', placeholder: 'Chemical peels, laser, fillers, botox...' },
              { id: 'derm_sun_exposure', label: 'Sun Exposure', type: 'select', options: ['Minimal', 'Moderate', 'Heavy / Outdoor Worker'] },
              { id: 'derm_photoprotection', label: 'Photoprotection', type: 'select', options: ['None', 'Sunscreen Regular', 'Physical Protection', 'Both'] }
            ]
          }
        ]
      },
      {
        id: 'derm_exam',
        name: 'SKIN EXAMINATION',
        defaultVisible: true,
        sections: [
          {
            id: 'derm_exam_info',
            name: 'Dermatological Lesion Morphology',
            defaultVisible: true,
            fields: [
              { id: 'derm_distribution', label: 'Distribution & Pattern', type: 'select', options: ['Generalized', 'Localized', 'Flexural', 'Extensor', 'Dermatomal', 'Sun-exposed Areas', 'Acral', 'Intertriginous', 'Follicular', 'Bilateral Symmetrical', 'Unilateral'] },
              { id: 'derm_morphology', label: 'Primary Lesion Morphology', type: 'select', options: ['Macule', 'Papule', 'Plaque', 'Nodule', 'Vesicle / Bulla', 'Pustule', 'Wheal (Urticaria)', 'Patch', 'Tumor', 'Cyst', 'Comedo', 'Abscess'] },
              { id: 'derm_secondary', label: 'Secondary Changes', type: 'select', options: ['Scaling', 'Crusting', 'Erosion / Ulcer', 'Excoriation', 'Lichenification', 'Atrophy', 'Fissure', 'Scar', 'Hyperpigmentation', 'Hypopigmentation'] },
              { id: 'derm_color', label: 'Lesion Color', type: 'select', options: ['Erythematous (Red)', 'Hyperpigmented', 'Hypopigmented / Depigmented', 'Violaceous', 'Yellowish', 'Brown', 'Black', 'White', 'Blue-grey'] },
              { id: 'derm_surface', label: 'Surface & Border', type: 'text', placeholder: 'Well-defined borders, silvery scale...' },
              { id: 'derm_extent', label: 'Size / Extent (BSA %)', type: 'text', placeholder: '<5% BSA' },
              { id: 'derm_number', label: 'Number of Lesions', type: 'text', placeholder: 'Solitary, Few, Multiple, Innumerable' },
              { id: 'derm_palpation', label: 'Palpation', type: 'select', options: ['Flat', 'Raised', 'Firm', 'Soft', 'Fluctuant', 'Tender', 'Non-tender', 'Warm', 'Indurated'] },
              { id: 'derm_arrangement', label: 'Arrangement / Configuration', type: 'text', placeholder: 'Linear, annular, grouped, reticular, targetoid...' },
              { id: 'derm_dermoscopy', label: 'Dermoscopy Findings', type: 'textarea', placeholder: 'Pigment network, vascular patterns, globules...' },
              { id: 'derm_wood_lamp', label: 'Wood Lamp Examination', type: 'select', options: ['Not done', 'Coral red (Erythrasma)', 'Bright green (Tinea capitis)', 'Blue-white (Vitiligo)', 'No fluorescence'] },
              { id: 'derm_diascopy', label: 'Diascopy', type: 'text', placeholder: 'Blanching, apple-jelly nodules...' }
            ]
          },
          {
            id: 'derm_hair_nail_exam',
            name: 'Hair & Nail Examination',
            defaultVisible: true,
            fields: [
              { id: 'derm_hair_pattern', label: 'Hair Loss Pattern', type: 'select', options: ['No Hair Loss', 'Male Pattern Baldness (Androgenetic)', 'Female Pattern Hair Loss', 'Patchy (Alopecia Areata)', 'Diffuse (Telogen Effluvium)', 'Scarring Alopecia', 'Traction Alopecia'] },
              { id: 'derm_hair_pull', label: 'Hair Pull Test', type: 'text', placeholder: 'Positive / Negative' },
              { id: 'derm_scalp_exam', label: 'Scalp Examination', type: 'textarea', placeholder: 'Scaling, erythema, follicular plugging, scarring...' },
              { id: 'derm_nail_changes', label: 'Nail Changes', type: 'select', options: ['Normal', 'Pitting', 'Onycholysis', 'Subungual Hyperkeratosis', 'Discoloration', 'Ridging', 'Beau Lines', 'Clubbing', 'Koilonychia', 'Onychomycosis'] },
              { id: 'derm_hair_nails', label: 'Hair & Nails Exam Details', type: 'textarea', placeholder: 'Scalp status, nail pitting, onycholysis...' },
              { id: 'derm_mucous_mem', label: 'Mucous Membrane Examination', type: 'select', options: ['Normal', 'Oral Ulcers', 'Genital Ulcers', 'Wickham Striae', 'Oral Pigmentation', 'Oral Candidiasis'] }
            ]
          }
        ]
      },
      {
        id: 'derm_investigations',
        name: 'INVESTIGATIONS',
        defaultVisible: true,
        sections: [
          {
            id: 'derm_inv_info',
            name: 'Dermatological Investigations',
            defaultVisible: true,
            fields: [
              { id: 'derm_koh', label: 'KOH Mount', type: 'select', options: ['Not done', 'Positive - Fungal Hyphae', 'Positive - Spores', 'Negative'] },
              { id: 'derm_tzanck', label: 'Tzanck Smear', type: 'select', options: ['Not done', 'Multinucleated Giant Cells', 'Acantholytic Cells', 'Negative'] },
              { id: 'derm_biopsy', label: 'Skin Biopsy', type: 'textarea', placeholder: 'Punch / Excision biopsy, HPE findings...' },
              { id: 'derm_hpe', label: 'Histopathology Report', type: 'textarea', placeholder: 'Microscopic findings...' },
              { id: 'derm_culture', label: 'Culture & Sensitivity', type: 'text', placeholder: 'Bacterial / Fungal culture results...' },
              { id: 'derm_patch_test', label: 'Patch Test', type: 'text', placeholder: 'Allergens tested, positive reactions...' },
              { id: 'derm_prick_test', label: 'Skin Prick Test', type: 'text', placeholder: 'IgE mediated allergy testing...' },
              { id: 'derm_ige', label: 'Serum IgE Level', type: 'text', placeholder: 'IU/mL' },
              { id: 'derm_abs', label: 'Autoantibody Panel', type: 'text', placeholder: 'ANA, anti-dsDNA, anti-BP180/230...' },
              { id: 'derm_imaging', label: 'Imaging (USG / MRI)', type: 'textarea', placeholder: 'Soft tissue ultrasound, MRI findings...' },
              { id: 'derm_blood_work', label: 'Blood Investigations', type: 'text', placeholder: 'CBC, LFT, RFT, ESR, CRP...' },
              { id: 'derm_other_inv', label: 'Other Investigations', type: 'textarea', placeholder: 'VDRL, HIV, Hepatitis markers...' }
            ]
          }
        ]
      },
      {
        id: 'derm_diagnosis',
        name: 'DIAGNOSIS',
        defaultVisible: true,
        sections: [
          {
            id: 'derm_diag_info',
            name: 'Dermatological Diagnosis',
            defaultVisible: true,
            fields: [
              { id: 'derm_diag_primary', label: 'Primary Diagnosis', type: 'select', options: ['Acne Vulgaris', 'Atopic Dermatitis / Eczema', 'Psoriasis Vulgaris', 'Tinea Corporis / Fungal', 'Urticaria', 'Melasma', 'Alopecia Areata', 'Vitiligo', 'Contact Dermatitis', 'Scabies', 'Seborrheic Dermatitis', 'Lichen Planus', 'Pemphigus Vulgaris', 'Bullous Pemphigoid', 'Lupus (DLE/SLE)', 'Basal Cell Carcinoma', 'Squamous Cell Carcinoma', 'Melanoma', 'Herpes Zoster', 'Herpes Simplex', 'Warts / Verruca', 'Molluscum Contagiosum', 'Impetigo', 'Cellulitis', 'Drug Eruption', 'Stevens-Johnson Syndrome', 'Rosacea', 'Perioral Dermatitis', 'Pityriasis Rosea', 'Pityriasis Versicolor', 'Prurigo Nodularis', 'Morphea / Scleroderma', 'Dermatomyositis', 'Granuloma Annulare', 'Leprosy / Hansen Disease'] },
              { id: 'derm_diag_secondary', label: 'Secondary Diagnosis', type: 'textarea', placeholder: 'Co-existing dermatological conditions...' },
              { id: 'derm_diag_diff', label: 'Differential Diagnosis', type: 'textarea', placeholder: 'Other possibilities...' },
              { id: 'derm_icd10', label: 'ICD-10 Code', type: 'text', placeholder: 'e.g. L40.0, L20.9' },
              { id: 'derm_diag_severity', label: 'Severity Score', type: 'select', options: ['Mild', 'Moderate', 'Severe', 'Erythrodermic'] },
              { id: 'derm_diag_other', label: 'Other Diagnosis', type: 'textarea', placeholder: 'Secondary dermatological findings...' }
            ]
          }
        ]
      },
      {
        id: 'derm_treatment',
        name: 'TREATMENT / ADVICE',
        defaultVisible: true,
        sections: [
          {
            id: 'derm_treat_info',
            name: 'Topical & Systemic Therapy',
            defaultVisible: true,
            fields: [
              { id: 'derm_advice', label: 'Advice', type: 'textarea', placeholder: 'Avoid soap, sun protection, skin care routine...' },
              { id: 'derm_skin_care', label: 'Skin Care Regimen', type: 'textarea', placeholder: 'Cleanser, moisturizer, sunscreen, night routine...' },
              { id: 'derm_topical', label: 'Topical Therapy', type: 'select', options: ['None', 'Topical Steroid (Mild)', 'Topical Steroid (Potent)', 'Topical Antifungal', 'Topical Antibiotic', 'Topical Retinoid', 'Topical Calcineurin Inhibitor', 'Emollients / Moisturizer', 'Topical Keratolytic', 'Topical Immunomodulator', 'Calamine / Soothing Agent'] },
              { id: 'derm_systemic', label: 'Systemic Therapy', type: 'select', options: ['None', 'Oral Antihistamine', 'Oral Antibiotic', 'Oral Antifungal', 'Oral Steroid', 'Oral Retinoid (Isotretinoin)', 'Methotrexate', 'Cyclosporine', 'Azathioprine', 'Dapsone', 'Hydroxychloroquine', 'Biologic (Anti-TNF/IL-17/IL-23)', 'Acitretin', 'Mycophenolate'] },
              { id: 'derm_meds', label: 'Medications (Full Details)', type: 'textarea', placeholder: 'Drug name, dose, route, frequency, duration...' },
              { id: 'derm_procedure', label: 'Procedure Performed / Planned', type: 'select', options: ['None', 'Cryotherapy', 'Electrocautery', 'Excision Biopsy', 'Punch Biopsy', 'Shave Biopsy', 'Intralesional Steroid', 'Chemical Peel', 'Phototherapy (NB-UVB)', 'PUVA Therapy', 'Laser Therapy', 'Incision & Drainage', 'Radiofrequency Ablation', 'Sclerotherapy'] },
              { id: 'derm_lifestyle_adv', label: 'Lifestyle Advice', type: 'textarea', placeholder: 'Sun protection, diet modification, stress management, cosmetic guidance...' },
              { id: 'derm_followup', label: 'Follow Up Date', type: 'date' },
              { id: 'derm_followup_plan', label: 'Follow-up Plan', type: 'text', placeholder: 'Review after course, biopsy results, photo comparison...' }
            ]
          }
        ]
      }
    ]
  },
  General: {
    id: 'General',
    name: 'General Medicine',
    categories: [
      {
        id: 'gen_patient_data',
        name: 'PATIENT DATA',
        defaultVisible: true,
        sections: [
          {
            id: 'gen_pat_info',
            name: 'Patient Demographics & Overview',
            defaultVisible: true,
            fields: [
              { id: 'gen_complaints', label: 'Chief Complaints / Since', type: 'textarea', placeholder: 'Fever, cough, body ache...' },
              { id: 'gen_history', label: 'Patient History', type: 'textarea', placeholder: 'Past medical history...' },
              { id: 'gen_allergies', label: 'Drug Allergy History', type: 'text', placeholder: 'Known drug allergies...' },
              { id: 'gen_referral', label: 'Referral Source', type: 'text', placeholder: 'Self / Referred by Dr.' },
              { id: 'gen_insurance', label: 'Insurance / Panel', type: 'text', placeholder: 'Policy details...' }
            ]
          }
        ]
      },
      {
        id: 'gen_chief_complaints',
        name: 'CHIEF COMPLAINTS',
        defaultVisible: true,
        sections: [
          {
            id: 'gen_cc_info',
            name: 'Presenting Complaints',
            defaultVisible: true,
            fields: [
              { id: 'gen_cc_primary', label: 'Primary Complaint', type: 'select', options: ['Fever', 'Cough', 'Cold / Rhinorrhea', 'Body Ache / Myalgia', 'Headache', 'Abdominal Pain', 'Nausea / Vomiting', 'Diarrhea', 'Constipation', 'Breathlessness', 'Chest Pain', 'Sore Throat', 'Weakness / Fatigue', 'Dizziness', 'Joint Pain', 'Back Pain', 'Skin Rash', 'Urinary Symptoms', 'Weight Loss', 'Weight Gain', 'Loss of Appetite', 'Swelling', 'Bleeding'] },
              { id: 'gen_cc_duration', label: 'Duration', type: 'text', placeholder: 'e.g. 3 days' },
              { id: 'gen_cc_severity', label: 'Severity', type: 'select', options: ['Mild', 'Moderate', 'Severe'] },
              { id: 'gen_cc_onset', label: 'Onset', type: 'select', options: ['Sudden', 'Gradual', 'Insidious'] },
              { id: 'gen_cc_assoc', label: 'Associated Symptoms', type: 'textarea', placeholder: 'Other symptoms present...' },
              { id: 'gen_cc_prev_rx', label: 'Previous Treatment', type: 'textarea', placeholder: 'Medications tried, doctor visits...' }
            ]
          }
        ]
      },
      {
        id: 'gen_history_sec',
        name: 'HISTORY',
        defaultVisible: true,
        sections: [
          {
            id: 'gen_hx_info',
            name: 'Past, Family & Personal History',
            defaultVisible: true,
            fields: [
              { id: 'gen_past_hx', label: 'Past Medical History', type: 'textarea', placeholder: 'Diabetes, HTN, Asthma...' },
              { id: 'gen_comorbidities', label: 'Comorbidities', type: 'multiselect', options: ['Diabetes Mellitus', 'Hypertension', 'Ischemic Heart Disease', 'Asthma / COPD', 'Thyroid Disorder', 'CKD', 'Liver Disease', 'Epilepsy', 'Stroke', 'Tuberculosis', 'HIV', 'Cancer', 'None'] },
              { id: 'gen_surgical_hx', label: 'Surgical History', type: 'textarea', placeholder: 'Previous surgeries...' },
              { id: 'gen_medication_hx', label: 'Current Medications', type: 'textarea', placeholder: 'List all current medications with dosages...' },
              { id: 'gen_fam_hx', label: 'Family History', type: 'text', placeholder: 'Family medical conditions...' },
              { id: 'gen_personal_hx', label: 'Personal & Social History', type: 'text', placeholder: 'Diet, smoking, alcohol, sleep...' },
              { id: 'gen_smoking', label: 'Smoking Status', type: 'select', options: ['Never', 'Current', 'Ex-Smoker'] },
              { id: 'gen_alcohol', label: 'Alcohol Use', type: 'select', options: ['None', 'Occasional', 'Regular', 'Heavy'] },
              { id: 'gen_occupation_hx', label: 'Occupational History', type: 'text', placeholder: 'Occupation, exposures...' },
              { id: 'gen_tx_hx', label: 'Previous Treatment History', type: 'textarea', placeholder: 'Past medications...' },
              { id: 'gen_immunization', label: 'Immunization History', type: 'textarea', placeholder: 'Completed / Pending vaccines...' }
            ]
          }
        ]
      },
      {
        id: 'gen_exam',
        name: 'EXAMINATION',
        defaultVisible: true,
        sections: [
          {
            id: 'gen_exam_info',
            name: 'Vitals & General Examination',
            defaultVisible: true,
            fields: [
              { id: 'gen_height', label: 'Height (cm)', type: 'number', placeholder: '165' },
              { id: 'gen_weight', label: 'Weight (kg)', type: 'number', placeholder: '64' },
              { id: 'gen_bmi', label: 'BMI', type: 'text', placeholder: '23.5' },
              { id: 'gen_bp', label: 'Blood Pressure', type: 'text', placeholder: '120/80 mmHg' },
              { id: 'gen_pulse', label: 'Pulse Rate', type: 'text', placeholder: '72 bpm' },
              { id: 'gen_temp', label: 'Temperature (°F)', type: 'text', placeholder: '98.6 °F' },
              { id: 'gen_spo2', label: 'SpO2', type: 'text', placeholder: '98% on room air' },
              { id: 'gen_rr', label: 'Respiratory Rate', type: 'text', placeholder: '16/min' },
              { id: 'gen_general', label: 'General Condition', type: 'select', options: ['Stable / Comfortable', 'Moderate Distress', 'Severe Distress', 'Toxic / Critically ill'] },
              { id: 'gen_pallor', label: 'Pallor', type: 'select', options: ['Absent', 'Present - Mild', 'Present - Significant'] },
              { id: 'gen_icterus', label: 'Icterus (Jaundice)', type: 'select', options: ['Absent', 'Present'] },
              { id: 'gen_cyanosis', label: 'Cyanosis', type: 'select', options: ['Absent', 'Peripheral', 'Central'] },
              { id: 'gen_clubbing', label: 'Clubbing', type: 'select', options: ['Absent', 'Present'] },
              { id: 'gen_edema', label: 'Edema', type: 'select', options: ['Absent', 'Pedal Edema', 'Generalized'] },
              { id: 'gen_lymphadenopathy', label: 'Lymphadenopathy', type: 'select', options: ['Absent', 'Cervical', 'Axillary', 'Inguinal', 'Generalized'] },
              { id: 'gen_dehydration', label: 'Dehydration', type: 'select', options: ['None', 'Mild', 'Moderate', 'Severe'] }
            ]
          },
          {
            id: 'gen_systemic_exam',
            name: 'Systemic Examination',
            defaultVisible: true,
            fields: [
              { id: 'gen_rs_exam', label: 'Respiratory System (RS)', type: 'textarea', placeholder: 'Air entry, adventitious sounds, percussion note...' },
              { id: 'gen_cvs_exam', label: 'Cardiovascular System (CVS)', type: 'textarea', placeholder: 'S1 S2 present, murmurs, JVP...' },
              { id: 'gen_pa_exam', label: 'Per Abdomen (PA)', type: 'textarea', placeholder: 'Soft, non-tender, organomegaly, bowel sounds...' },
              { id: 'gen_cns_exam', label: 'Central Nervous System (CNS)', type: 'textarea', placeholder: 'Conscious, oriented, cranial nerves, motor, sensory...' },
              { id: 'gen_systemic', label: 'Systemic Examination (CVS/RS/PA/CNS)', type: 'textarea', placeholder: 'RS: NVBS, CVS: S1 S2 heard, PA: Soft...' },
              { id: 'gen_local', label: 'Local Examination', type: 'textarea', placeholder: 'Local physical findings...' },
              { id: 'gen_skin_exam', label: 'Skin & Mucosa', type: 'textarea', placeholder: 'Rashes, lesions, oral mucosa findings...' },
              { id: 'gen_musculoskeletal', label: 'Musculoskeletal', type: 'textarea', placeholder: 'Joint swelling, tenderness, ROM...' }
            ]
          }
        ]
      },
      {
        id: 'gen_investigations',
        name: 'INVESTIGATIONS',
        defaultVisible: true,
        sections: [
          {
            id: 'gen_inv_info',
            name: 'Laboratory & Imaging',
            defaultVisible: true,
            fields: [
              { id: 'gen_cbc', label: 'CBC (Complete Blood Count)', type: 'textarea', placeholder: 'Hb, WBC, Platelets, Differential...' },
              { id: 'gen_blood_sugar', label: 'Blood Sugar (FBS/PPBS/RBS)', type: 'text', placeholder: 'FBS: 95 mg/dL' },
              { id: 'gen_hba1c', label: 'HbA1c', type: 'text', placeholder: '6.2%' },
              { id: 'gen_rft', label: 'Renal Function (Cr/BUN/eGFR)', type: 'text', placeholder: 'Cr: 0.9, BUN: 18' },
              { id: 'gen_lft', label: 'Liver Function (Bil/AST/ALT/ALP)', type: 'text', placeholder: 'Total Bil: 0.8, AST: 25' },
              { id: 'gen_lipid', label: 'Lipid Profile', type: 'text', placeholder: 'TC, LDL, HDL, TG' },
              { id: 'gen_thyroid', label: 'Thyroid Function (TSH/T3/T4)', type: 'text', placeholder: 'TSH: 3.0' },
              { id: 'gen_urine', label: 'Urine R/M & Culture', type: 'text', placeholder: 'Normal / Abnormal...' },
              { id: 'gen_esr_crp', label: 'ESR / CRP', type: 'text', placeholder: 'ESR: 12, CRP: <5' },
              { id: 'gen_electrolytes', label: 'Serum Electrolytes (Na/K/Ca)', type: 'text', placeholder: 'Na: 140, K: 4.2' },
              { id: 'gen_blood_tests', label: 'Other Blood Tests', type: 'textarea', placeholder: 'Coagulation, iron studies, vitamin levels...' },
              { id: 'gen_xray', label: 'X-Ray', type: 'textarea', placeholder: 'Chest, abdominal, skeletal X-ray findings...' },
              { id: 'gen_usg', label: 'Ultrasound', type: 'textarea', placeholder: 'Abdomen, pelvis, soft tissue...' },
              { id: 'gen_ct_mri', label: 'CT / MRI', type: 'textarea', placeholder: 'CT / MRI findings...' },
              { id: 'gen_ecg', label: 'ECG', type: 'textarea', placeholder: 'Rhythm, rate, ST changes...' },
              { id: 'gen_other_inv', label: 'Other Investigations', type: 'textarea', placeholder: 'Special tests, cultures, serology...' }
            ]
          }
        ]
      },
      {
        id: 'gen_diagnosis',
        name: 'DIAGNOSIS',
        defaultVisible: true,
        sections: [
          {
            id: 'gen_diag_info',
            name: 'Clinical Diagnosis',
            defaultVisible: true,
            fields: [
              { id: 'gen_diag_primary', label: 'Primary Diagnosis', type: 'select', options: ['Upper Respiratory Tract Infection', 'Acute Gastroenteritis', 'Essential Hypertension', 'Type 2 Diabetes Mellitus', 'Urinary Tract Infection', 'Viral Fever / Dengue', 'Bronchial Asthma', 'GERD', 'Pneumonia', 'Acute Bronchitis', 'COPD Exacerbation', 'Anemia', 'Thyroid Disorder', 'Vitamin D Deficiency', 'Migraine', 'Tension Headache', 'Malaria', 'Typhoid Fever', 'Tuberculosis', 'Hepatitis', 'Chronic Kidney Disease', 'Heart Failure', 'Stroke / TIA', 'Electrolyte Imbalance', 'Sepsis'] },
              { id: 'gen_diag_secondary', label: 'Secondary Diagnosis', type: 'textarea', placeholder: 'Co-existing conditions...' },
              { id: 'gen_diag_diff', label: 'Differential Diagnosis', type: 'textarea', placeholder: 'Other considerations...' },
              { id: 'gen_icd10', label: 'ICD-10 Code', type: 'text', placeholder: 'e.g. J06.9, K52.9' },
              { id: 'gen_diag_other', label: 'Other Diagnosis', type: 'textarea', placeholder: 'Secondary medical diagnoses...' }
            ]
          }
        ]
      },
      {
        id: 'gen_treatment',
        name: 'TREATMENT / ADVICE',
        defaultVisible: true,
        sections: [
          {
            id: 'gen_treat_info',
            name: 'Prescription & Follow Up',
            defaultVisible: true,
            fields: [
              { id: 'gen_advice', label: 'Advice', type: 'textarea', placeholder: 'Hydration, rest, warning signs...' },
              { id: 'gen_diet_advice', label: 'Dietary Advice', type: 'textarea', placeholder: 'Low salt, diabetic diet, high fiber...' },
              { id: 'gen_lifestyle', label: 'Lifestyle Modification', type: 'textarea', placeholder: 'Exercise, smoking cessation, stress management...' },
              { id: 'gen_meds', label: 'Medications', type: 'textarea', placeholder: 'Prescribed medications with dose, frequency, duration...' },
              { id: 'gen_referral_adv', label: 'Referral', type: 'select', options: ['None', 'Specialist Referral', 'Hospitalization', 'Emergency'] },
              { id: 'gen_referral_to', label: 'Referred To', type: 'text', placeholder: 'Specialty / Hospital...' },
              { id: 'gen_followup', label: 'Follow Up Date', type: 'date' },
              { id: 'gen_followup_plan', label: 'Follow-up Reason', type: 'text', placeholder: 'Review of investigations, medication review...' }
            ]
          }
        ]
      }
    ]
  },
  Orthopedics: {
    id: 'Orthopedics',
    name: 'Orthopedics',
    categories: [
      {
        id: 'ortho_patient_data',
        name: 'PATIENT DATA',
        defaultVisible: true,
        sections: [
          {
            id: 'ortho_pat_info',
            name: 'Demographics & Injury History',
            defaultVisible: true,
            fields: [
              { id: 'ortho_complaints', label: 'Chief Complaints / Pain Site', type: 'textarea', placeholder: 'Knee pain, lower back pain, shoulder stiffness...' },
              { id: 'ortho_mechanism', label: 'Mechanism of Injury', type: 'select', options: ['Spontaneous / Degenerative', 'Fall on Outstretched Hand', 'Road Traffic Accident (RTA)', 'Sports Injury', 'Twisting Injury', 'Direct Impact', 'Crush Injury', 'Pathological', 'Overuse / Repetitive Strain'] },
              { id: 'ortho_duration', label: 'Duration of Symptoms', type: 'text', placeholder: 'e.g. 3 months' },
              { id: 'ortho_side', label: 'Side Affected', type: 'select', options: ['Right', 'Left', 'Bilateral'] },
              { id: 'ortho_joint', label: 'Joint / Region', type: 'select', options: ['Cervical Spine', 'Thoracic Spine', 'Lumbar Spine', 'Shoulder', 'Elbow', 'Wrist', 'Hand / Fingers', 'Hip', 'Knee', 'Ankle', 'Foot / Toes', 'Pelvis'] },
              { id: 'ortho_occupation', label: 'Occupation / Activity Level', type: 'text', placeholder: 'Desk worker, manual labour, athlete...' },
              { id: 'ortho_sys_hx', label: 'Systemic History', type: 'multiselect', options: ['Diabetes', 'Osteoporosis', 'Rheumatoid Arthritis', 'Gout', 'Thyroid', 'Steroid Use', 'None'] }
            ]
          }
        ]
      },
      {
        id: 'ortho_pain',
        name: 'PAIN ASSESSMENT',
        defaultVisible: true,
        sections: [
          {
            id: 'ortho_pain_info',
            name: 'Pain Evaluation',
            defaultVisible: true,
            fields: [
              { id: 'ortho_pain_type', label: 'Pain Character', type: 'select', options: ['Aching', 'Sharp / Stabbing', 'Burning', 'Throbbing', 'Radiating', 'Cramping', 'Stiffness', 'Numbness / Tingling'] },
              { id: 'ortho_pain_severity', label: 'Pain Severity (VAS 0-10)', type: 'select', options: ['0 - No Pain', '1-3 Mild', '4-6 Moderate', '7-9 Severe', '10 - Worst Possible'] },
              { id: 'ortho_pain_timing', label: 'Pain Timing', type: 'select', options: ['Constant', 'Intermittent', 'Morning Stiffness', 'Night Pain', 'Activity Related', 'Rest Pain'] },
              { id: 'ortho_pain_aggravating', label: 'Aggravating Factors', type: 'text', placeholder: 'Walking, climbing stairs, lifting, bending...' },
              { id: 'ortho_pain_relieving', label: 'Relieving Factors', type: 'text', placeholder: 'Rest, ice, elevation, medication...' },
              { id: 'ortho_pain_radiation', label: 'Radiation', type: 'select', options: ['None', 'Down the leg (Sciatica)', 'Down the arm', 'Across the back', 'To the groin'] }
            ]
          }
        ]
      },
      {
        id: 'ortho_exam',
        name: 'EXAMINATION',
        defaultVisible: true,
        sections: [
          {
            id: 'ortho_exam_info',
            name: 'Musculoskeletal & Neurovascular Exam',
            defaultVisible: true,
            fields: [
              { id: 'ortho_general', label: 'General Build', type: 'select', options: ['Normal', 'Muscular', 'Obese', 'Thin / Wasted'] },
              { id: 'ortho_inspection', label: 'Inspection', type: 'textarea', placeholder: 'Swelling, deformity, wasting, scars, posture...' },
              { id: 'ortho_palpation', label: 'Palpation', type: 'textarea', placeholder: 'Tenderness, warmth, crepitus, bony landmarks...' },
              { id: 'ortho_rom', label: 'Range of Motion (ROM)', type: 'textarea', placeholder: 'Flexion 0-120°, Extension lag 10°...' },
              { id: 'ortho_rom_type', label: 'ROM Assessment', type: 'select', options: ['Full Range', 'Mildly Restricted', 'Moderately Restricted', 'Severely Restricted', 'Ankylosis'] },
              { id: 'ortho_swelling', label: 'Swelling & Deformity', type: 'select', options: ['None', 'Mild Swelling', 'Joint Effusion', 'Deformity Present', 'Gross Swelling'] },
              { id: 'ortho_tenderness', label: 'Tenderness Site', type: 'text', placeholder: 'Joint line tenderness, spinal spinous process...' },
              { id: 'ortho_gait', label: 'Gait Assessment', type: 'select', options: ['Normal', 'Antalgic', 'Trendelenburg', 'High-stepping', 'Spastic', 'Waddling', 'Short Leg Gait'] },
              { id: 'ortho_strength', label: 'Motor Strength (Grade 0-5)', type: 'text', placeholder: '5/5 in all myotomes' },
              { id: 'ortho_neuro', label: 'Neurovascular Examination', type: 'text', placeholder: 'Distal pulses intact, sensation normal' },
              { id: 'ortho_reflexes', label: 'Deep Tendon Reflexes', type: 'text', placeholder: 'Knee jerk, ankle jerk, biceps, triceps...' },
              { id: 'ortho_sensory', label: 'Sensory Examination', type: 'text', placeholder: 'Light touch, pinprick, proprioception...' },
              { id: 'ortho_special_tests', label: 'Special Tests', type: 'textarea', placeholder: 'McMurray, Lachman, drawer, impingement, SLR, FABER...' }
            ]
          },
          {
            id: 'ortho_spine_exam',
            name: 'Spine-Specific Examination',
            defaultVisible: true,
            fields: [
              { id: 'ortho_spine_curvature', label: 'Spinal Curvature', type: 'select', options: ['Normal', 'Kyphosis', 'Lordosis', 'Scoliosis', 'Flat Back'] },
              { id: 'ortho_slr', label: 'Straight Leg Raising (SLR)', type: 'text', placeholder: 'Positive at 40° on right' },
              { id: 'ortho_neuro_deficit', label: 'Neurological Deficit', type: 'text', placeholder: 'Foot drop, hand weakness, dermatomal loss...' },
              { id: 'ortho_cauda_equina', label: 'Cauda Equina Red Flags', type: 'select', options: ['No Red Flags', 'Saddle Anesthesia', 'Urinary Retention', 'Bowel Incontinence'] }
            ]
          }
        ]
      },
      {
        id: 'ortho_imaging',
        name: 'IMAGING & INVESTIGATIONS',
        defaultVisible: true,
        sections: [
          {
            id: 'ortho_img_info',
            name: 'X-Ray, MRI & CT Scans',
            defaultVisible: true,
            fields: [
              { id: 'ortho_xray', label: 'X-Ray Findings', type: 'textarea', placeholder: 'Joint space narrowing, osteophytes, fracture line...' },
              { id: 'ortho_fracture_type', label: 'Fracture Classification', type: 'select', options: ['No Fracture', 'Simple / Transverse', 'Oblique', 'Spiral', 'Comminuted', 'Segmental', 'Greenstick', 'Pathological', 'Stress Fracture', 'Avulsion'] },
              { id: 'ortho_fracture_displacement', label: 'Displacement', type: 'select', options: ['Undisplaced', 'Minimally Displaced', 'Displaced', 'Angulated', 'Rotated'] },
              { id: 'ortho_mri', label: 'MRI Findings', type: 'textarea', placeholder: 'Meniscal tear, ACL rupture, disc herniation L4-L5...' },
              { id: 'ortho_ct', label: 'CT Scan Findings', type: 'text', placeholder: 'Cortical bone detail...' },
              { id: 'ortho_usg', label: 'Ultrasound', type: 'textarea', placeholder: 'Soft tissue, tendon, joint effusion...' },
              { id: 'ortho_dexa', label: 'DEXA Scan (Bone Density)', type: 'text', placeholder: 'T-score, Z-score...' },
              { id: 'ortho_blood', label: 'Blood Investigations', type: 'text', placeholder: 'CBC, ESR, CRP, Uric Acid, RA Factor, Anti-CCP, HLA-B27...' },
              { id: 'ortho_other_inv', label: 'Other Investigations', type: 'text', placeholder: 'Nerve conduction study, EMG, bone scan...' }
            ]
          }
        ]
      },
      {
        id: 'ortho_diagnosis',
        name: 'DIAGNOSIS',
        defaultVisible: true,
        sections: [
          {
            id: 'ortho_diag_info',
            name: 'Orthopedic Diagnosis',
            defaultVisible: true,
            fields: [
              { id: 'ortho_diag_primary', label: 'Primary Diagnosis', type: 'select', options: ['Osteoarthritis Knee', 'Lumbar Spondylosis / Disc Herniation', 'ACL Tear', 'Meniscal Tear', 'Rotator Cuff Tendinopathy', 'Plantar Fasciitis', 'Fracture', 'Frozen Shoulder (Adhesive Capsulitis)', 'Cervical Spondylosis', 'Carpal Tunnel Syndrome', 'Trigger Finger', 'De Quervain Tenosynovitis', 'Tennis Elbow (Lateral Epicondylitis)', 'Golfer Elbow (Medial Epicondylitis)', 'Osteoporosis / Osteoporotic Fracture', 'Rheumatoid Arthritis', 'Gout / Pseudogout', 'Ankylosing Spondylitis', 'AVN (Avascular Necrosis)', 'Scoliosis', 'Ligament Sprain', 'Muscle Strain', 'Tendinitis / Bursitis', 'Osteomyelitis', 'Bone Tumor'] },
              { id: 'ortho_diag_other', label: 'Other Diagnosis', type: 'textarea', placeholder: 'Secondary orthopaedic notes...' },
              { id: 'ortho_diag_diff', label: 'Differential Diagnosis', type: 'textarea', placeholder: 'Other considerations...' },
              { id: 'ortho_icd10', label: 'ICD-10 Code', type: 'text', placeholder: 'e.g. M17.11, M54.5' },
              { id: 'ortho_severity', label: 'Severity / Grade', type: 'select', options: ['Mild / Grade I', 'Moderate / Grade II', 'Severe / Grade III', 'Grade IV'] }
            ]
          }
        ]
      },
      {
        id: 'ortho_treatment',
        name: 'TREATMENT / REHAB',
        defaultVisible: true,
        sections: [
          {
            id: 'ortho_treat_info',
            name: 'Management & Physiotherapy',
            defaultVisible: true,
            fields: [
              { id: 'ortho_advice', label: 'Physiotherapy & Advice', type: 'textarea', placeholder: 'Quadriceps strengthening, lumbar belt, avoid squatting...' },
              { id: 'ortho_immobilization', label: 'Immobilization', type: 'select', options: ['None', 'POP Cast', 'Fiberglass Cast', 'Splint', 'Brace / Support', 'Sling', 'Traction', 'Crepe Bandage'] },
              { id: 'ortho_injection', label: 'Joint Injection', type: 'select', options: ['None', 'Intra-articular Steroid', 'Hyaluronic Acid (Viscosupplementation)', 'PRP (Platelet Rich Plasma)', 'Local Anesthetic Block'] },
              { id: 'ortho_meds', label: 'Medications', type: 'textarea', placeholder: 'NSAIDs, Muscle relaxants, Collagen supplements...' },
              { id: 'ortho_nsaid', label: 'NSAID Prescribed', type: 'select', options: ['None', 'Diclofenac', 'Ibuprofen', 'Aceclofenac', 'Etoricoxib', 'Naproxen', 'Piroxicam'] },
              { id: 'ortho_physio_plan', label: 'Physiotherapy Plan', type: 'textarea', placeholder: 'Exercises, modalities (IFT, TENS, US), frequency...' },
              { id: 'ortho_surgery_plan', label: 'Surgical Plan', type: 'select', options: ['None / Conservative', 'Arthroscopy', 'Arthroplasty (TKR/THR)', 'ORIF (Fracture Fixation)', 'Spine Surgery (Decompression/Fusion)', 'Tendon Repair', 'Ligament Reconstruction', 'Carpal Tunnel Release', 'Trigger Finger Release', 'Rotator Cuff Repair'] },
              { id: 'ortho_surgery_date', label: 'Planned Surgery Date', type: 'date' },
              { id: 'ortho_preop', label: 'Pre-operative Planning', type: 'textarea', placeholder: 'Fitness, templating, implant selection...' },
              { id: 'ortho_followup', label: 'Follow Up Date', type: 'date' },
              { id: 'ortho_followup_plan', label: 'Follow-up Plan', type: 'text', placeholder: 'X-ray at 6 weeks, physio progress review...' }
            ]
          }
        ]
      }
    ]
  },
  ENT: {
    id: 'ENT',
    name: 'Ear, Nose & Throat (ENT)',
    categories: [
      {
        id: 'ent_patient_data',
        name: 'PATIENT DATA',
        defaultVisible: true,
        sections: [
          {
            id: 'ent_pat_info',
            name: 'Demographics & Overview',
            defaultVisible: true,
            fields: [
              { id: 'ent_complaints', label: 'Chief Complaints / Since', type: 'textarea', placeholder: 'Ear discharge, nasal blockage, sore throat, vertigo...' },
              { id: 'ent_history', label: 'Patient History', type: 'textarea', placeholder: 'Prior ear surgeries, sinus problems...' },
              { id: 'ent_allergies', label: 'Drug Allergies', type: 'text', placeholder: 'Allergies...' },
              { id: 'ent_occupation', label: 'Occupation / Noise Exposure', type: 'text', placeholder: 'Factory worker, musician...' },
              { id: 'ent_smoking', label: 'Smoking / Tobacco', type: 'select', options: ['No', 'Current Smoker', 'Ex-Smoker', 'Chewing Tobacco'] },
              { id: 'ent_alcohol', label: 'Alcohol Use', type: 'select', options: ['No', 'Occasional', 'Regular', 'Heavy'] }
            ]
          }
        ]
      },
      {
        id: 'ent_cc',
        name: 'CHIEF COMPLAINTS',
        defaultVisible: true,
        sections: [
          {
            id: 'ent_cc_info',
            name: 'ENT Symptoms',
            defaultVisible: true,
            fields: [
              { id: 'ent_cc_primary', label: 'Primary Complaint', type: 'select', options: ['Ear Pain (Otalgia)', 'Ear Discharge', 'Hearing Loss', 'Tinnitus', 'Vertigo / Dizziness', 'Nasal Blockage', 'Nasal Discharge', 'Sneezing', 'Nasal Bleeding (Epistaxis)', 'Sore Throat', 'Difficulty Swallowing (Dysphagia)', 'Hoarseness', 'Snoring / Sleep Apnea', 'Neck Mass / Swelling', 'Facial Pain / Headache', 'Foreign Body (Ear/Nose/Throat)'] },
              { id: 'ent_cc_duration', label: 'Duration', type: 'text', placeholder: 'e.g. 2 weeks' },
              { id: 'ent_cc_side', label: 'Side Affected', type: 'select', options: ['Right', 'Left', 'Bilateral', 'Midline'] },
              { id: 'ent_cc_severity', label: 'Severity', type: 'select', options: ['Mild', 'Moderate', 'Severe'] },
              { id: 'ent_cc_assoc', label: 'Associated Symptoms', type: 'textarea', placeholder: 'Fever, pain, discharge, headache...' }
            ]
          }
        ]
      },
      {
        id: 'ent_ear',
        name: 'EAR EXAMINATION',
        defaultVisible: true,
        sections: [
          {
            id: 'ent_ear_info',
            name: 'Otological Examination',
            defaultVisible: true,
            fields: [
              { id: 'ent_otoscopy', label: 'Otoscopy (Ears)', type: 'select', options: ['Intact Tympanic Membrane', 'Central Perforation (CSOM)', 'Attic Perforation', 'Fluid behind TM (OME)', 'Wax Impacted', 'Otitis Externa', 'Retracted TM', 'Myringosclerosis', 'Cholesteatoma'] },
              { id: 'ent_otoscopy_r', label: 'Right Ear Otoscopy', type: 'select', options: ['Normal', 'Perforation', 'Retraction', 'Fluid', 'Wax', 'Otitis Externa', 'Cholesteatoma'] },
              { id: 'ent_otoscopy_l', label: 'Left Ear Otoscopy', type: 'select', options: ['Normal', 'Perforation', 'Retraction', 'Fluid', 'Wax', 'Otitis Externa', 'Cholesteatoma'] },
              { id: 'ent_hearing_loss', label: 'Hearing Loss Type', type: 'select', options: ['None', 'Conductive', 'Sensorineural', 'Mixed'] },
              { id: 'ent_tuning_fork', label: 'Tuning Fork Tests (Rinne/Weber)', type: 'select', options: ['Rinne +ve / Weber Central', 'Rinne -ve R / Weber R', 'Rinne -ve L / Weber L', 'Bilateral SNHL pattern'] },
              { id: 'ent_discharge', label: 'Ear Discharge Character', type: 'text', placeholder: 'Mucopurulent, foul-smelling, blood-stained, serous...' },
              { id: 'ent_tinnitus', label: 'Tinnitus', type: 'select', options: ['Absent', 'Unilateral - Pulsatile', 'Unilateral - Non-pulsatile', 'Bilateral'] },
              { id: 'ent_vertigo_type', label: 'Vertigo Type', type: 'select', options: ['No Vertigo', 'BPPV', 'Meniere Disease', 'Vestibular Neuritis', 'Central Vertigo'] },
              { id: 'ent_mastoid', label: 'Mastoid Examination', type: 'text', placeholder: 'Tender, swelling, fistula sign...' }
            ]
          }
        ]
      },
      {
        id: 'ent_nose',
        name: 'NOSE & SINUS EXAMINATION',
        defaultVisible: true,
        sections: [
          {
            id: 'ent_nose_info',
            name: 'Rhinological Examination',
            defaultVisible: true,
            fields: [
              { id: 'ent_nasal', label: 'Nasal Examination', type: 'select', options: ['Normal Mucosa', 'Deviated Nasal Septum (DNS)', 'Hypertrophied Turbinates', 'Nasal Polyps', 'Purulent Discharge', 'Crusting', 'Atrophic Rhinitis'] },
              { id: 'ent_dns_side', label: 'DNS Side', type: 'select', options: ['No DNS', 'DNS to Right', 'DNS to Left', 'S-shaped Deviation'] },
              { id: 'ent_nasal_polyps', label: 'Nasal Polyps', type: 'select', options: ['Absent', 'Unilateral', 'Bilateral', 'Antrochoanal'] },
              { id: 'ent_nasal_discharge', label: 'Nasal Discharge', type: 'text', placeholder: 'Clear, mucopurulent, blood-stained...' },
              { id: 'ent_sinus_tender', label: 'Sinus Tenderness', type: 'select', options: ['None', 'Maxillary', 'Frontal', 'Ethmoidal'] },
              { id: 'ent_smell', label: 'Sense of Smell', type: 'select', options: ['Normal', 'Hyposmia (Reduced)', 'Anosmia (Absent)'] },
              { id: 'ent_epistaxis', label: 'Epistaxis Details', type: 'text', placeholder: 'Anterior / Posterior, Little area, frequency...' }
            ]
          }
        ]
      },
      {
        id: 'ent_throat',
        name: 'THROAT & LARYNX EXAMINATION',
        defaultVisible: true,
        sections: [
          {
            id: 'ent_throat_info',
            name: 'Oropharyngeal & Laryngeal Exam',
            defaultVisible: true,
            fields: [
              { id: 'ent_oral_cavity', label: 'Oral Cavity', type: 'select', options: ['Normal', 'Tonsillar Enlargement', 'Pharyngitis', 'Post Nasal Drip', 'Oral Ulcers', 'Oral Candidiasis', 'Leukoplakia'] },
              { id: 'ent_throat', label: 'Oral Cavity & Pharynx', type: 'select', options: ['Normal', 'Tonsillar Enlargement Grade 1-4', 'Congested Pharynx', 'Post Nasal Drip', 'Oral Ulcer'] },
              { id: 'ent_tonsils', label: 'Tonsil Grade', type: 'select', options: ['Grade 0 (Absent)', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4 (Kissing Tonsils)'] },
              { id: 'ent_voice', label: 'Voice Assessment', type: 'text', placeholder: 'Normal, hoarse, breathy, strained...' },
              { id: 'ent_larynx', label: 'Laryngeal Endoscopy', type: 'textarea', placeholder: 'Vocal cords mobile, nodule/polyp...' },
              { id: 'ent_larynx_findings', label: 'Laryngeal Findings', type: 'select', options: ['Normal', 'Vocal Cord Nodule', 'Vocal Cord Polyp', 'Vocal Cord Palsy', 'Laryngitis', 'Reinke Edema', 'Laryngeal Mass'] },
              { id: 'ent_neck', label: 'Neck Examination', type: 'text', placeholder: 'Lymph nodes, thyroid, masses, salivary glands...' }
            ]
          }
        ]
      },
      {
        id: 'ent_investigations',
        name: 'INVESTIGATIONS',
        defaultVisible: true,
        sections: [
          {
            id: 'ent_inv_info',
            name: 'Audiometry, Endoscopy & Imaging',
            defaultVisible: true,
            fields: [
              { id: 'ent_audiometry', label: 'Pure Tone Audiometry (PTA)', type: 'textarea', placeholder: 'Conductive hearing loss 35dB (R), Sensorineural (L)...' },
              { id: 'ent_tympanometry', label: 'Tympanometry', type: 'select', options: ['Type A (Normal)', 'Type B (Fluid/Flat)', 'Type C (Negative Pressure)', 'Type As (Reduced Compliance)', 'Type Ad (Hypercompliant)'] },
              { id: 'ent_oae', label: 'OAE (Otoacoustic Emissions)', type: 'text', placeholder: 'Present / Absent' },
              { id: 'ent_bera', label: 'BERA / ABR', type: 'text', placeholder: 'Threshold, latencies...' },
              { id: 'ent_endoscopy', label: 'Nasal / Laryngeal Endoscopy', type: 'textarea', placeholder: 'Flexible / Rigid scope findings...' },
              { id: 'ent_ct_sinus', label: 'CT PNS / Temporal Bone', type: 'textarea', placeholder: 'Maxillary sinus mucosal thickening...' },
              { id: 'ent_mri', label: 'MRI (IAC / Neck)', type: 'textarea', placeholder: 'Cerebellopontine angle, parotid, neck mass...' },
              { id: 'ent_sleep_study', label: 'Sleep Study (Polysomnography)', type: 'text', placeholder: 'AHI score, severity...' },
              { id: 'ent_allergy_test', label: 'Allergy Testing', type: 'text', placeholder: 'Skin prick / Specific IgE results...' },
              { id: 'ent_other_inv', label: 'Other Investigations', type: 'textarea', placeholder: 'Blood tests, biopsy, swab culture...' }
            ]
          }
        ]
      },
      {
        id: 'ent_diagnosis',
        name: 'DIAGNOSIS',
        defaultVisible: true,
        sections: [
          {
            id: 'ent_diag_info',
            name: 'ENT Diagnosis',
            defaultVisible: true,
            fields: [
              { id: 'ent_diag_primary', label: 'Primary Diagnosis', type: 'select', options: ['Chronic Suppurative Otitis Media (CSOM)', 'Allergic Rhinitis', 'Chronic Sinusitis (PNS)', 'Acute Tonsillitis', 'Deviated Nasal Septum', 'Sensorineural Hearing Loss', 'BPPV / Vertigo', 'Otitis Media with Effusion', 'Otosclerosis', 'Meniere Disease', 'Nasal Polyposis', 'Adenoid Hypertrophy', 'Vocal Cord Nodule / Polyp', 'Laryngopharyngeal Reflux', 'OSA (Obstructive Sleep Apnea)', 'Epistaxis', 'Foreign Body (Ear/Nose/Throat)', 'Cholesteatoma', 'Acute Otitis Media', 'Peritonsillar Abscess', 'Oral Malignancy', 'Laryngeal Carcinoma', 'Thyroid Nodule / Goitre', 'Salivary Gland Tumour', 'Bell Palsy / Facial Nerve Palsy'] },
              { id: 'ent_diag_other', label: 'Other Diagnosis', type: 'textarea', placeholder: 'Secondary ENT diagnoses...' },
              { id: 'ent_diag_diff', label: 'Differential Diagnosis', type: 'textarea', placeholder: 'Other possibilities...' },
              { id: 'ent_icd10', label: 'ICD-10 Code', type: 'text', placeholder: 'e.g. H66.1, J32.0' }
            ]
          }
        ]
      },
      {
        id: 'ent_treatment',
        name: 'TREATMENT / ADVICE',
        defaultVisible: true,
        sections: [
          {
            id: 'ent_treat_info',
            name: 'Prescription & ENT Management',
            defaultVisible: true,
            fields: [
              { id: 'ent_advice', label: 'Advice', type: 'textarea', placeholder: 'Steam inhalation, keep ear dry, nasal spray technique...' },
              { id: 'ent_meds', label: 'Medications', type: 'textarea', placeholder: 'Antibiotic ear drops, antihistamines, steroid spray...' },
              { id: 'ent_nasal_spray', label: 'Nasal Spray', type: 'select', options: ['None', 'Fluticasone Nasal Spray', 'Mometasone Nasal Spray', 'Oxymetazoline (Short-term)', 'Saline Nasal Spray / Wash'] },
              { id: 'ent_procedure', label: 'Procedure Performed / Planned', type: 'select', options: ['None', 'Ear Wax Removal', 'Nasal Cautery', 'Nasal Packing', 'Tympanocentesis', 'Grommet Insertion', 'Foreign Body Removal', 'Incision & Drainage'] },
              { id: 'ent_surgery_plan', label: 'Surgical Plan', type: 'select', options: ['None', 'Tympanoplasty', 'Mastoidectomy', 'Myringotomy + Grommet', 'Septoplasty', 'FESS (Functional Endoscopic Sinus Surgery)', 'Tonsillectomy', 'Adenoidectomy', 'Microlaryngoscopy', 'Thyroidectomy', 'Parotidectomy', 'Stapedotomy', 'Cochlear Implant'] },
              { id: 'ent_followup', label: 'Follow Up Date', type: 'date' },
              { id: 'ent_followup_plan', label: 'Follow-up Plan', type: 'text', placeholder: 'Repeat audiometry, post-op review...' }
            ]
          }
        ]
      }
    ]
  },
  Pediatrics: {
    id: 'Pediatrics',
    name: 'Pediatrics',
    categories: [
      {
        id: 'ped_patient_data',
        name: 'PATIENT DATA',
        defaultVisible: true,
        sections: [
          {
            id: 'ped_pat_info',
            name: 'Pediatric Demographics',
            defaultVisible: true,
            fields: [
              { id: 'ped_complaints', label: 'Chief Complaints / Since', type: 'textarea', placeholder: 'Fever, refusal of feeds, cough, loose stools...' },
              { id: 'ped_birth_weight', label: 'Birth Weight (kg)', type: 'text', placeholder: '2.9 kg' },
              { id: 'ped_delivery', label: 'Delivery Details', type: 'select', options: ['Full Term Normal', 'Preterm', 'LSCS', 'Instrumental'] },
              { id: 'ped_gestational_age', label: 'Gestational Age at Birth', type: 'text', placeholder: 'e.g. 38 weeks' },
              { id: 'ped_birth_cry', label: 'Birth Cry', type: 'select', options: ['Immediate', 'Delayed', 'Resuscitated'] },
              { id: 'ped_nicu', label: 'NICU Stay', type: 'text', placeholder: 'Duration, reason...' },
              { id: 'ped_blood_group', label: 'Blood Group', type: 'text', placeholder: 'O+ve' },
              { id: 'ped_feeding', label: 'Current Feeding', type: 'select', options: ['Exclusive Breastfeeding', 'Formula', 'Mixed', 'Complementary Feeds Started', 'Regular Diet'] },
              { id: 'ped_mother_hx', label: 'Maternal History', type: 'text', placeholder: 'GDM, PIH, infections during pregnancy...' },
              { id: 'ped_fam_hx', label: 'Family History', type: 'text', placeholder: 'Asthma, epilepsy, genetic disorders...' }
            ]
          }
        ]
      },
      {
        id: 'ped_growth',
        name: 'GROWTH & MILESTONES',
        defaultVisible: true,
        sections: [
          {
            id: 'ped_growth_info',
            name: 'Developmental Milestones & Immunization',
            defaultVisible: true,
            fields: [
              { id: 'ped_weight', label: 'Current Weight (kg)', type: 'number', placeholder: '12' },
              { id: 'ped_height', label: 'Current Height (cm)', type: 'number', placeholder: '85' },
              { id: 'ped_head_circ', label: 'Head Circumference (cm)', type: 'text', placeholder: '46 cm' },
              { id: 'ped_chest_circ', label: 'Chest Circumference (cm)', type: 'text', placeholder: '44 cm' },
              { id: 'ped_bmi', label: 'BMI / Percentile', type: 'text', placeholder: 'BMI: 16, 50th percentile' },
              { id: 'ped_growth_chart', label: 'Growth Chart Status', type: 'select', options: ['Normal (3rd-97th percentile)', 'Below 3rd percentile', 'Above 97th percentile', 'Growth Faltering / Crossing Centiles'] },
              { id: 'ped_milestones', label: 'Developmental Milestones', type: 'select', options: ['Appropriate for Age', 'Motor Delay', 'Language Delay', 'Global Delay', 'Social / Cognitive Delay'] },
              { id: 'ped_milestone_details', label: 'Milestone Details', type: 'textarea', placeholder: 'Head holding, sitting, standing, walking, first words, sentences...' },
              { id: 'ped_immunization', label: 'Immunization Status', type: 'select', options: ['Up to Date for Age', 'Partial / Missed Vaccines', 'Not Vaccinated'] },
              { id: 'ped_vaccine_details', label: 'Vaccine Details', type: 'textarea', placeholder: 'Last vaccine given, pending vaccines...' },
              { id: 'ped_nutrition_status', label: 'Nutritional Status', type: 'select', options: ['Normal / Well Nourished', 'Grade 1 Malnutrition (Mild)', 'Grade 2 Malnutrition (Moderate)', 'Grade 3 Malnutrition (Severe / SAM)', 'Overweight / Obese'] }
            ]
          }
        ]
      },
      {
        id: 'ped_exam',
        name: 'EXAMINATION',
        defaultVisible: true,
        sections: [
          {
            id: 'ped_exam_info',
            name: 'Pediatric Physical Exam',
            defaultVisible: true,
            fields: [
              { id: 'ped_general', label: 'General Appearance & Activity', type: 'select', options: ['Active & Alert', 'Irritable', 'Lethargic / Toxic', 'Drowsy', 'Unresponsive'] },
              { id: 'ped_vitals', label: 'Vitals (HR/RR/Temp/SpO2)', type: 'text', placeholder: 'HR: 120, RR: 28, T: 99°F, SpO2: 98%' },
              { id: 'ped_hydration', label: 'Hydration Status', type: 'select', options: ['Well Hydrated', 'Mild Dehydration', 'Moderate Dehydration', 'Severe Dehydration'] },
              { id: 'ped_pallor', label: 'Pallor', type: 'select', options: ['Absent', 'Present'] },
              { id: 'ped_jaundice', label: 'Jaundice', type: 'select', options: ['Absent', 'Present - Zone 1-2', 'Present - Zone 3-5'] },
              { id: 'ped_cyanosis', label: 'Cyanosis', type: 'select', options: ['Absent', 'Peripheral', 'Central'] },
              { id: 'ped_edema', label: 'Edema', type: 'select', options: ['Absent', 'Pedal', 'Facial', 'Generalized'] },
              { id: 'ped_fontanelle', label: 'Anterior Fontanelle', type: 'text', placeholder: 'Open / Closed, Bulging / Sunken / Normal' },
              { id: 'ped_lymph', label: 'Lymphadenopathy', type: 'select', options: ['Absent', 'Cervical', 'Generalized'] },
              { id: 'ped_skin', label: 'Skin Examination', type: 'textarea', placeholder: 'Rashes, petechiae, birthmarks, hygiene...' },
              { id: 'ped_systemic', label: 'Systemic Exam (RS/CVS/PA)', type: 'textarea', placeholder: 'Chest clear, BS equal, abdomen soft...' },
              { id: 'ped_rs', label: 'Respiratory System', type: 'textarea', placeholder: 'Air entry, retractions, wheeze, creps...' },
              { id: 'ped_cvs', label: 'Cardiovascular System', type: 'textarea', placeholder: 'S1 S2, murmur, pulses...' },
              { id: 'ped_abdomen', label: 'Abdominal Examination', type: 'textarea', placeholder: 'Soft, hepatomegaly, splenomegaly, bowel sounds...' },
              { id: 'ped_cns', label: 'CNS Examination', type: 'textarea', placeholder: 'Tone, reflexes, cranial nerves, Brudzinski, Kernig...' },
              { id: 'ped_ent', label: 'ENT Examination', type: 'textarea', placeholder: 'Throat, ears, neck...' }
            ]
          }
        ]
      },
      {
        id: 'ped_investigations',
        name: 'INVESTIGATIONS',
        defaultVisible: true,
        sections: [
          {
            id: 'ped_inv_info',
            name: 'Pediatric Investigations',
            defaultVisible: true,
            fields: [
              { id: 'ped_cbc', label: 'CBC', type: 'textarea', placeholder: 'Hb, WBC, differential, platelets...' },
              { id: 'ped_blood_sugar', label: 'Blood Sugar', type: 'text', placeholder: 'RBS / FBS' },
              { id: 'ped_crp', label: 'CRP / Procalcitonin', type: 'text', placeholder: 'Inflammatory markers' },
              { id: 'ped_blood_culture', label: 'Blood Culture', type: 'textarea', placeholder: 'Organism, sensitivity...' },
              { id: 'ped_urine', label: 'Urine R/M & Culture', type: 'text', placeholder: 'Results...' },
              { id: 'ped_csf', label: 'CSF Analysis', type: 'text', placeholder: 'If meningitis suspected...' },
              { id: 'ped_electrolytes', label: 'Serum Electrolytes', type: 'text', placeholder: 'Na, K, Ca, Glucose...' },
              { id: 'ped_xray', label: 'Chest X-Ray', type: 'textarea', placeholder: 'Findings...' },
              { id: 'ped_usg', label: 'Ultrasound', type: 'textarea', placeholder: 'Abdomen, cranial USG (neonates)...' },
              { id: 'ped_echo', label: 'Echocardiography', type: 'text', placeholder: 'If cardiac murmur / CHD suspected...' },
              { id: 'ped_newborn_screen', label: 'Newborn Screening', type: 'text', placeholder: 'TSH, G6PD, hearing screen...' },
              { id: 'ped_other_inv', label: 'Other Investigations', type: 'textarea', placeholder: 'Dengue NS1, Malaria smear, ABG, sweat chloride...' }
            ]
          }
        ]
      },
      {
        id: 'ped_diagnosis',
        name: 'DIAGNOSIS',
        defaultVisible: true,
        sections: [
          {
            id: 'ped_diag_info',
            name: 'Pediatric Diagnosis',
            defaultVisible: true,
            fields: [
              { id: 'ped_diag_primary', label: 'Primary Diagnosis', type: 'select', options: ['Acute Bronchiolitis / URTI', 'Pediatric Gastroenteritis', 'Febrile Seizure', 'Failure to Thrive', 'Otitis Media', 'Asthma Exacerbation', 'Pneumonia', 'Neonatal Jaundice', 'Neonatal Sepsis', 'Urinary Tract Infection', 'Viral Fever / Dengue', 'Malaria', 'Typhoid Fever', 'Meningitis', 'Kawasaki Disease', 'Nephrotic Syndrome', 'Congenital Heart Disease', 'Iron Deficiency Anemia', 'Cerebral Palsy', 'Epilepsy', 'Down Syndrome', 'Autism Spectrum Disorder', 'ADHD', 'Protein Energy Malnutrition', 'Tuberculosis'] },
              { id: 'ped_diag_other', label: 'Other Diagnosis', type: 'textarea', placeholder: 'Secondary pediatric notes...' },
              { id: 'ped_diag_diff', label: 'Differential Diagnosis', type: 'textarea', placeholder: 'Other considerations...' },
              { id: 'ped_icd10', label: 'ICD-10 Code', type: 'text', placeholder: 'e.g. J21.0, A09' }
            ]
          }
        ]
      },
      {
        id: 'ped_treatment',
        name: 'TREATMENT / ADVICE',
        defaultVisible: true,
        sections: [
          {
            id: 'ped_treat_info',
            name: 'Pediatric Prescription & Follow Up',
            defaultVisible: true,
            fields: [
              { id: 'ped_advice', label: 'Parental Guidance & ORS Advice', type: 'textarea', placeholder: 'ORS dosing, fever red flags, nutrition...' },
              { id: 'ped_feeding_adv', label: 'Feeding / Nutrition Advice', type: 'textarea', placeholder: 'Breastfeeding, weaning, diet modification...' },
              { id: 'ped_meds', label: 'Weight-based Dosage Medications', type: 'textarea', placeholder: 'Paracetamol syrup 5ml TID...' },
              { id: 'ped_admission', label: 'Admission Required', type: 'select', options: ['No - Outpatient', 'Day Care', 'Ward Admission', 'PICU / NICU'] },
              { id: 'ped_vaccine_plan', label: 'Vaccination Plan', type: 'textarea', placeholder: 'Catch-up vaccines, next due vaccines...' },
              { id: 'ped_referral', label: 'Referral', type: 'select', options: ['None', 'Pediatric Surgery', 'Pediatric Neurology', 'Pediatric Cardiology', 'Developmental Pediatrics', 'Nutrition / Dietetics'] },
              { id: 'ped_followup', label: 'Follow Up Date', type: 'date' },
              { id: 'ped_followup_plan', label: 'Follow-up Plan', type: 'text', placeholder: 'Growth monitoring, milestone review...' }
            ]
          }
        ]
      }
    ]
  },
  Dentistry: {
    id: 'Dentistry',
    name: 'Dentistry',
    categories: [
      {
        id: 'den_patient_data',
        name: 'PATIENT DATA',
        defaultVisible: true,
        sections: [
          {
            id: 'den_pat_info',
            name: 'Demographics & Oral Chief Complaint',
            defaultVisible: true,
            fields: [
              { id: 'den_complaints', label: 'Chief Complaint', type: 'select', options: ['Toothache / Severe Pain', 'Sensitivity to Cold/Hot', 'Bleeding Gums', 'Missing Teeth', 'Crooked Teeth / Malocclusion', 'Stained Teeth', 'Broken / Chipped Tooth', 'Swelling / Abscess', 'Bad Breath (Halitosis)', 'Jaw Pain / TMJ', 'Difficulty Chewing', 'Ulcer / Sore in Mouth', 'Loose Tooth'] },
              { id: 'den_history', label: 'Dental & Medical History', type: 'textarea', placeholder: 'Past root canal, extractions, medical risks...' },
              { id: 'den_allergies', label: 'Drug Allergies', type: 'text', placeholder: 'Penicillin, Latex, Local Anesthesia...' },
              { id: 'den_anxiety', label: 'Dental Anxiety', type: 'select', options: ['None', 'Mild', 'Moderate', 'Severe / Dental Phobia'] },
              { id: 'den_last_visit', label: 'Last Dental Visit', type: 'text', placeholder: 'e.g. 6 months ago' },
              { id: 'den_oral_hygiene', label: 'Oral Hygiene Habits', type: 'select', options: ['Brushes twice daily + Flosses', 'Brushes twice daily', 'Brushes once daily', 'Irregular / Poor'] },
              { id: 'den_medical_hx', label: 'Medical History', type: 'multiselect', options: ['Diabetes', 'Hypertension', 'Cardiac (Endocarditis risk)', 'Bleeding Disorder', 'Hepatitis / HIV', 'Bisphosphonate Use', 'Anticoagulant Use', 'Pregnancy', 'None'] }
            ]
          }
        ]
      },
      {
        id: 'den_exam',
        name: 'DENTAL EXAMINATION',
        defaultVisible: true,
        sections: [
          {
            id: 'den_exam_info',
            name: 'Tooth Chart & Periodontal Exam',
            defaultVisible: true,
            fields: [
              { id: 'den_tooth_chart', label: 'Tooth Number / Site', type: 'text', placeholder: '#16, #21, #36, #46 (FDI Notation)' },
              { id: 'den_caries', label: 'Caries Assessment', type: 'select', options: ['No Caries', 'Enamel Caries', 'Dentin Caries', 'Deep Caries with Pulpal Exposure'] },
              { id: 'den_periodontal', label: 'Periodontal Status', type: 'select', options: ['Normal Gingiva', 'Gingivitis (Grade 1-3)', 'Periodontitis (Pocket Depth > 4mm)', 'Gingival Recession', 'Aggressive Periodontitis'] },
              { id: 'den_occlusion', label: 'Occlusion / Alignment', type: 'select', options: ['Class I Normal', 'Class II Malocclusion', 'Class III Malocclusion', 'Crowding', 'Crossbite', 'Open Bite', 'Deep Bite'] },
              { id: 'den_tooth_mobility', label: 'Tooth Mobility', type: 'select', options: ['None', 'Grade 1', 'Grade 2', 'Grade 3'] },
              { id: 'den_pocket_depth', label: 'Pocket Depth (mm)', type: 'text', placeholder: 'e.g. 3mm buccal, 5mm mesial' },
              { id: 'den_gingival_status', label: 'Gingival Status', type: 'select', options: ['Healthy - Pink, Stippled', 'Red / Swollen', 'Bleeding on Probing', 'Purulent Discharge'] },
              { id: 'den_soft_tissue', label: 'Soft Tissue Examination', type: 'textarea', placeholder: 'Tongue, floor of mouth, palate, buccal mucosa, lips...' },
              { id: 'den_tmj', label: 'TMJ Examination', type: 'select', options: ['Normal', 'Click / Popping', 'Crepitus', 'Limited Opening', 'Deviation', 'Lock (Open/Closed)'] },
              { id: 'den_mouth_opening', label: 'Mouth Opening (mm)', type: 'text', placeholder: '40 mm' },
              { id: 'den_lymph', label: 'Lymph Node Examination', type: 'textarea', placeholder: 'Submandibular, cervical nodes...' },
              { id: 'den_intra_oral', label: 'Intra-oral Examination Notes', type: 'textarea', placeholder: 'Detailed findings...' }
            ]
          }
        ]
      },
      {
        id: 'den_imaging',
        name: 'DENTAL IMAGING',
        defaultVisible: true,
        sections: [
          {
            id: 'den_img_info',
            name: 'Radiographs (IOPA / OPG / CBCT)',
            defaultVisible: true,
            fields: [
              { id: 'den_iopa', label: 'IOPA X-Ray Findings', type: 'textarea', placeholder: 'Periapical radiolucency at root apex of #36...' },
              { id: 'den_opg', label: 'OPG (Full Mouth X-Ray)', type: 'textarea', placeholder: 'Impacted 3rd molars #18, #28, #38, #48...' },
              { id: 'den_cbct', label: 'CBCT (3D Imaging)', type: 'textarea', placeholder: 'Bone height, width, density for implant planning...' },
              { id: 'den_cephalogram', label: 'Lateral Cephalogram', type: 'textarea', placeholder: 'ANB angle, skeletal relationship...' },
              { id: 'den_rvg', label: 'RVG (Digital X-Ray)', type: 'text', placeholder: 'Digital periapical findings...' }
            ]
          }
        ]
      },
      {
        id: 'den_diagnosis',
        name: 'DIAGNOSIS',
        defaultVisible: true,
        sections: [
          {
            id: 'den_diag_info',
            name: 'Dental Diagnosis',
            defaultVisible: true,
            fields: [
              { id: 'den_diag_primary', label: 'Primary Dental Diagnosis', type: 'select', options: ['Irreversible Pulpitis', 'Dental Caries', 'Chronic Periodontitis', 'Impacted Wisdom Tooth', 'Periapical Abscess', 'Partial Edentulism', 'Complete Edentulism', 'Gingivitis', 'Dental Calculus', 'TMJ Disorder', 'Oral Ulcer (Aphthous)', 'Oral Candidiasis', 'Oral Leukoplakia', 'Oral Submucous Fibrosis', 'Oral Squamous Cell Carcinoma', 'Dental Fracture', 'Root Stump', 'Pericoronitis', 'Dry Socket (Alveolar Osteitis)'] },
              { id: 'den_diag_other', label: 'Other Dental Diagnoses', type: 'textarea', placeholder: 'Secondary dental notes...' },
              { id: 'den_icd10', label: 'ICD-10 Code', type: 'text', placeholder: 'e.g. K04.0, K05.1' }
            ]
          }
        ]
      },
      {
        id: 'den_treatment',
        name: 'TREATMENT PLAN',
        defaultVisible: true,
        sections: [
          {
            id: 'den_treat_info',
            name: 'Procedures & Rx',
            defaultVisible: true,
            fields: [
              { id: 'den_procedure', label: 'Planned Dental Procedure', type: 'select', options: ['Root Canal Treatment (RCT)', 'Scaling & Polishing', 'Composite Restoration (Filling)', 'Tooth Extraction', 'Crown & Bridge Insertion', 'Dental Implant', 'Denture (Complete/Partial)', 'Orthodontic Treatment (Braces)', 'Pulp Capping', 'Apicoectomy', 'Gingivectomy / Flap Surgery', 'Bone Grafting', 'Sinus Lift', 'Bleaching / Whitening', 'Veneer Placement', 'Night Guard / Splint', 'Surgical Extraction (Impaction)'] },
              { id: 'den_tooth_treated', label: 'Tooth Number Treated', type: 'text', placeholder: '#36, #46' },
              { id: 'den_procedure_notes', label: 'Procedure Notes', type: 'textarea', placeholder: 'Working length, irrigation, obturation, material used...' },
              { id: 'den_anesthesia', label: 'Anesthesia', type: 'select', options: ['None', 'Topical', 'Infiltration', 'Inferior Alveolar Nerve Block', 'Posterior Superior Alveolar Block', 'General Anesthesia'] },
              { id: 'den_advice', label: 'Oral Hygiene Advice', type: 'textarea', placeholder: 'Brush twice daily, warm saline gargles, flossing...' },
              { id: 'den_meds', label: 'Prescribed Medications', type: 'textarea', placeholder: 'Amoxicillin 500mg, Ketorolac, Chlorhexidine mouthwash...' },
              { id: 'den_postop', label: 'Post-operative Instructions', type: 'textarea', placeholder: 'Soft diet, avoid hot food, no smoking, bite on gauze...' },
              { id: 'den_followup', label: 'Follow Up Date', type: 'date' },
              { id: 'den_followup_plan', label: 'Follow-up Plan', type: 'text', placeholder: 'Crown cementation, next RCT visit, suture removal...' }
            ]
          }
        ]
      }
    ]
  }
,
  Neurology: {
    id: 'Neurology',
    name: 'Neurology',
    categories: [
      {
        id: 'neuro_patient_data',
        name: 'PATIENT DATA',
        defaultVisible: true,
        sections: [
          {
            id: 'neuro_pat_info',
            name: 'Patient Demographics & Overview',
            defaultVisible: true,
            fields: [
              { id: 'neuro_complaints', label: 'Chief Complaints / Since', type: 'textarea', placeholder: 'Headache, numbness, weakness, seizure...' },
              { id: 'neuro_history', label: 'Past Neurological History', type: 'textarea', placeholder: 'Epilepsy, stroke, head injury, meningitis...' },
              { id: 'neuro_allergies', label: 'Drug Allergies', type: 'text', placeholder: 'Known allergies...' }
            ]
          }
        ]
      },
      {
        id: 'neuro_cc',
        name: 'CHIEF COMPLAINTS',
        defaultVisible: true,
        sections: [
          {
            id: 'neuro_cc_info',
            name: 'Neurological Symptoms',
            defaultVisible: true,
            fields: [
              { id: 'neuro_cc_primary', label: 'Primary Complaint', type: 'select', options: ['Headache', 'Seizure / Convulsion', 'Weakness / Paralysis', 'Numbness / Tingling', 'Dizziness / Vertigo', 'Tremor', 'Memory Loss / Confusion', 'Speech Difficulty', 'Vision Changes', 'Gait Difficulty', 'Loss of Consciousness', 'Back Pain with Radiation', 'Facial Weakness', 'Difficulty Swallowing', 'Involuntary Movements'] },
              { id: 'neuro_cc_duration', label: 'Duration', type: 'text', placeholder: 'e.g. 6 months' },
              { id: 'neuro_cc_onset', label: 'Onset', type: 'select', options: ['Sudden / Acute', 'Gradual / Progressive', 'Episodic / Relapsing', 'Chronic'] },
              { id: 'neuro_cc_severity', label: 'Severity', type: 'select', options: ['Mild', 'Moderate', 'Severe', 'Disabling'] },
              { id: 'neuro_cc_assoc', label: 'Associated Symptoms', type: 'textarea', placeholder: 'Aura, nausea, photophobia, cognitive changes...' }
            ]
          }
        ]
      },
      {
        id: 'neuro_hx',
        name: 'NEUROLOGICAL HISTORY',
        defaultVisible: true,
        sections: [
          {
            id: 'neuro_hx_info',
            name: 'Detailed Neurological History',
            defaultVisible: true,
            fields: [
              { id: 'neuro_headache_type', label: 'Headache Type', type: 'select', options: ['None', 'Migraine without Aura', 'Migraine with Aura', 'Tension-type', 'Cluster', 'Secondary / Red Flag', 'Medication Overuse'] },
              { id: 'neuro_seizure_type', label: 'Seizure Type', type: 'select', options: ['None', 'Generalized Tonic-Clonic (GTCS)', 'Focal (Simple)', 'Focal (Complex)', 'Absence', 'Myoclonic', 'Status Epilepticus'] },
              { id: 'neuro_seizure_freq', label: 'Seizure Frequency', type: 'text', placeholder: 'e.g. 2/month' },
              { id: 'neuro_last_seizure', label: 'Last Seizure Date', type: 'text', placeholder: 'Date of last episode' },
              { id: 'neuro_risk_factors', label: 'Neurological Risk Factors', type: 'multiselect', options: ['Hypertension', 'Diabetes', 'Smoking', 'Atrial Fibrillation', 'Previous Stroke/TIA', 'Family History Stroke', 'Hyperlipidemia', 'None'] },
              { id: 'neuro_prev_stroke', label: 'Previous Stroke / TIA', type: 'text', placeholder: 'Date, type, residual deficit...' },
              { id: 'neuro_medications', label: 'Current Neurological Medications', type: 'textarea', placeholder: 'Anti-epileptics, migraine prophylaxis...' },
              { id: 'neuro_fam_hx', label: 'Family Neurological History', type: 'text', placeholder: 'Epilepsy, dementia, Parkinson, MS...' }
            ]
          }
        ]
      },
      {
        id: 'neuro_exam',
        name: 'NEUROLOGICAL EXAMINATION',
        defaultVisible: true,
        sections: [
          {
            id: 'neuro_exam_info',
            name: 'Comprehensive Neurological Exam',
            defaultVisible: true,
            fields: [
              { id: 'neuro_consciousness', label: 'Level of Consciousness (GCS)', type: 'select', options: ['15/15 (Full)', '13-14 (Mild impairment)', '9-12 (Moderate)', '3-8 (Severe / Coma)'] },
              { id: 'neuro_orientation', label: 'Orientation', type: 'select', options: ['Oriented to Time, Place, Person', 'Disoriented to Time', 'Disoriented to Time & Place', 'Fully Disoriented'] },
              { id: 'neuro_speech', label: 'Speech', type: 'select', options: ['Normal', 'Dysarthria', 'Expressive Aphasia', 'Receptive Aphasia', 'Global Aphasia', 'Dysphonia'] },
              { id: 'neuro_cranial_nerves', label: 'Cranial Nerve Examination', type: 'textarea', placeholder: 'CN I-XII findings...' },
              { id: 'neuro_facial', label: 'Facial Nerve', type: 'select', options: ['Normal / Symmetrical', 'UMN Facial Palsy', 'LMN Facial Palsy (Bell Palsy)'] },
              { id: 'neuro_motor', label: 'Motor Examination', type: 'textarea', placeholder: 'Bulk, tone, power (MRC scale) per limb...' },
              { id: 'neuro_tone', label: 'Tone', type: 'select', options: ['Normal', 'Spasticity', 'Rigidity (Lead Pipe)', 'Rigidity (Cogwheel)', 'Flaccid / Hypotonic'] },
              { id: 'neuro_power', label: 'Power (MRC Grade)', type: 'text', placeholder: 'RUL: 5/5, LUL: 4/5, RLL: 5/5, LLL: 3/5' },
              { id: 'neuro_reflexes', label: 'Deep Tendon Reflexes', type: 'textarea', placeholder: 'Biceps, Triceps, Knee, Ankle, Plantar response...' },
              { id: 'neuro_plantar', label: 'Plantar Response', type: 'select', options: ['Flexor (Normal) OU', 'Extensor (Babinski +) Right', 'Extensor (Babinski +) Left', 'Extensor Bilateral'] },
              { id: 'neuro_sensory', label: 'Sensory Examination', type: 'textarea', placeholder: 'Light touch, pain, temperature, vibration, proprioception...' },
              { id: 'neuro_cerebellar', label: 'Cerebellar Examination', type: 'textarea', placeholder: 'Finger-nose, heel-shin, dysdiadochokinesia, Romberg, tandem gait...' },
              { id: 'neuro_gait', label: 'Gait', type: 'select', options: ['Normal', 'Hemiplegic', 'Spastic / Scissoring', 'Ataxic / Cerebellar', 'Parkinsonian / Shuffling', 'Steppage', 'Waddling', 'Antalgic'] },
              { id: 'neuro_tremor', label: 'Tremor', type: 'select', options: ['None', 'Resting Tremor', 'Intention Tremor', 'Postural Tremor', 'Essential Tremor'] },
              { id: 'neuro_signs', label: 'Special Signs', type: 'textarea', placeholder: 'Meningeal signs (neck rigidity, Kernig, Brudzinski), Lhermitte, Romberg...' }
            ]
          }
        ]
      },
      {
        id: 'neuro_investigations',
        name: 'INVESTIGATIONS',
        defaultVisible: true,
        sections: [
          {
            id: 'neuro_inv_info',
            name: 'Neurological Investigations',
            defaultVisible: true,
            fields: [
              { id: 'neuro_ct', label: 'CT Brain', type: 'textarea', placeholder: 'Findings...' },
              { id: 'neuro_mri', label: 'MRI Brain / Spine', type: 'textarea', placeholder: 'Findings, contrast enhancement...' },
              { id: 'neuro_eeg', label: 'EEG', type: 'textarea', placeholder: 'Background, epileptiform discharges, focal slowing...' },
              { id: 'neuro_emg_ncs', label: 'EMG / NCS', type: 'textarea', placeholder: 'Nerve conduction, myopathic/neuropathic pattern...' },
              { id: 'neuro_csf', label: 'CSF Analysis', type: 'textarea', placeholder: 'Protein, glucose, cells, culture, oligoclonal bands...' },
              { id: 'neuro_carotid_doppler', label: 'Carotid Doppler', type: 'text', placeholder: 'Stenosis, plaque...' },
              { id: 'neuro_angiography', label: 'CT/MR Angiography', type: 'textarea', placeholder: 'Vessel occlusion, aneurysm, AVM...' },
              { id: 'neuro_evoked_potentials', label: 'Evoked Potentials (VEP/SSEP/BAEP)', type: 'text', placeholder: 'Latency, amplitude...' },
              { id: 'neuro_blood_work', label: 'Blood Investigations', type: 'textarea', placeholder: 'Vitamin B12, folate, homocysteine, copper, autoimmune panel...' },
              { id: 'neuro_other_inv', label: 'Other Investigations', type: 'textarea', placeholder: 'PET, SPECT, muscle biopsy, genetic testing...' }
            ]
          }
        ]
      },
      {
        id: 'neuro_diagnosis',
        name: 'DIAGNOSIS',
        defaultVisible: true,
        sections: [
          {
            id: 'neuro_diag_info',
            name: 'Neurological Diagnosis',
            defaultVisible: true,
            fields: [
              { id: 'neuro_diag_primary', label: 'Primary Diagnosis', type: 'select', options: ['Migraine', 'Tension-type Headache', 'Epilepsy (Idiopathic)', 'Epilepsy (Focal)', 'Ischemic Stroke', 'Hemorrhagic Stroke', 'TIA', 'Parkinson Disease', 'Essential Tremor', 'Bell Palsy', 'Trigeminal Neuralgia', 'Multiple Sclerosis', 'Guillain-Barré Syndrome', 'Myasthenia Gravis', 'Motor Neuron Disease (ALS)', 'Alzheimer Disease', 'Vascular Dementia', 'Meningitis', 'Encephalitis', 'Brain Tumor', 'Cervical / Lumbar Radiculopathy', 'Carpal Tunnel Syndrome', 'Peripheral Neuropathy', 'Diabetic Neuropathy', 'Neurocysticercosis'] },
              { id: 'neuro_diag_other', label: 'Other Diagnosis', type: 'textarea', placeholder: 'Co-existing neurological conditions...' },
              { id: 'neuro_diag_diff', label: 'Differential Diagnosis', type: 'textarea', placeholder: 'Other considerations...' },
              { id: 'neuro_icd10', label: 'ICD-10 Code', type: 'text', placeholder: 'e.g. G43.909, G40.909' }
            ]
          }
        ]
      },
      {
        id: 'neuro_treatment',
        name: 'TREATMENT / ADVICE',
        defaultVisible: true,
        sections: [
          {
            id: 'neuro_treat_info',
            name: 'Neurological Management',
            defaultVisible: true,
            fields: [
              { id: 'neuro_advice', label: 'Advice', type: 'textarea', placeholder: 'Seizure precautions, driving restrictions, lifestyle modification...' },
              { id: 'neuro_meds', label: 'Medications', type: 'textarea', placeholder: 'Anti-epileptics, migraine prophylaxis, dopaminergic agents...' },
              { id: 'neuro_aed', label: 'Anti-Epileptic Drug', type: 'select', options: ['None', 'Levetiracetam', 'Sodium Valproate', 'Carbamazepine', 'Phenytoin', 'Lacosamide', 'Lamotrigine', 'Clobazam', 'Topiramate', 'Oxcarbazepine'] },
              { id: 'neuro_migraine_rx', label: 'Migraine Treatment', type: 'select', options: ['None', 'Sumatriptan (Acute)', 'Propranolol (Prophylaxis)', 'Amitriptyline (Prophylaxis)', 'Topiramate (Prophylaxis)', 'Flunarizine (Prophylaxis)', 'CGRP Monoclonal Antibody'] },
              { id: 'neuro_rehab', label: 'Rehabilitation', type: 'select', options: ['Not Required', 'Physiotherapy', 'Occupational Therapy', 'Speech Therapy', 'Cognitive Rehabilitation'] },
              { id: 'neuro_surgery_referral', label: 'Neurosurgery Referral', type: 'select', options: ['Not Required', 'Brain Tumor', 'Vascular (Aneurysm/AVM)', 'Epilepsy Surgery', 'DBS (Deep Brain Stimulation)', 'Spine Surgery'] },
              { id: 'neuro_followup', label: 'Follow Up Date', type: 'date' },
              { id: 'neuro_followup_plan', label: 'Follow-up Plan', type: 'text', placeholder: 'Repeat MRI, EEG, drug level monitoring...' }
            ]
          }
        ]
      }
    ]
  },
  Psychiatry: {
    id: 'Psychiatry',
    name: 'Psychiatry',
    categories: [
      {
        id: 'psy_patient_data',
        name: 'PATIENT DATA',
        defaultVisible: true,
        sections: [
          {
            id: 'psy_pat_info',
            name: 'Patient Demographics',
            defaultVisible: true,
            fields: [
              { id: 'psy_complaints', label: 'Chief Complaints / Since', type: 'textarea', placeholder: 'Low mood, anxiety, insomnia, abnormal behavior...' },
              { id: 'psy_history', label: 'Psychiatric History', type: 'textarea', placeholder: 'Previous episodes, hospitalizations, suicide attempts...' },
              { id: 'psy_allergies', label: 'Drug Allergies', type: 'text', placeholder: 'Known allergies...' }
            ]
          }
        ]
      },
      {
        id: 'psy_cc',
        name: 'PRESENTING COMPLAINTS',
        defaultVisible: true,
        sections: [
          {
            id: 'psy_cc_info',
            name: 'Psychiatric Symptoms',
            defaultVisible: true,
            fields: [
              { id: 'psy_cc_primary', label: 'Primary Complaint', type: 'select', options: ['Depressed Mood', 'Anxiety / Panic', 'Sleep Disturbance', 'Abnormal Behavior', 'Psychotic Symptoms', 'Substance Abuse', 'Suicidal Thoughts', 'Anger / Aggression', 'Cognitive Decline', 'Phobia', 'OCD Symptoms', 'Eating Disturbance', 'Sexual Dysfunction', 'Somatic Complaints'] },
              { id: 'psy_duration', label: 'Duration', type: 'text', placeholder: 'e.g. 3 months' },
              { id: 'psy_onset', label: 'Onset', type: 'select', options: ['Acute', 'Gradual', 'Insidious', 'Relapse'] },
              { id: 'psy_precipitating', label: 'Precipitating Factors', type: 'textarea', placeholder: 'Stress, loss, trauma, substance use, medical illness...' },
              { id: 'psy_impact', label: 'Functional Impact', type: 'textarea', placeholder: 'Work, relationships, self-care, social...' }
            ]
          }
        ]
      },
      {
        id: 'psy_history_sec',
        name: 'PSYCHIATRIC HISTORY',
        defaultVisible: true,
        sections: [
          {
            id: 'psy_hx_info',
            name: 'Detailed History',
            defaultVisible: true,
            fields: [
              { id: 'psy_hpi', label: 'History of Present Illness', type: 'textarea', placeholder: 'Detailed narrative...' },
              { id: 'psy_past_psych', label: 'Past Psychiatric History', type: 'textarea', placeholder: 'Previous episodes, diagnoses, hospitalizations...' },
              { id: 'psy_substance', label: 'Substance Use', type: 'multiselect', options: ['None', 'Alcohol', 'Tobacco', 'Cannabis', 'Opioids', 'Benzodiazepines', 'Stimulants', 'Inhalants'] },
              { id: 'psy_family', label: 'Family Psychiatric History', type: 'textarea', placeholder: 'Depression, bipolar, schizophrenia, suicide in family...' },
              { id: 'psy_personal', label: 'Personal History', type: 'textarea', placeholder: 'Early development, education, occupation, marital, sexual...' },
              { id: 'psy_premorbid', label: 'Premorbid Personality', type: 'select', options: ['Well-adjusted', 'Anxious', 'Introverted', 'Impulsive', 'Dependent', 'Schizoid'] },
              { id: 'psy_suicidal_risk', label: 'Suicide Risk Assessment', type: 'select', options: ['No Risk', 'Low Risk (Passive ideation)', 'Moderate Risk (Active ideation)', 'High Risk (Plan / Intent)', 'Imminent Risk'] },
              { id: 'psy_medical_hx', label: 'Medical History', type: 'textarea', placeholder: 'Thyroid, epilepsy, head injury, chronic illness...' }
            ]
          }
        ]
      },
      {
        id: 'psy_mse',
        name: 'MENTAL STATUS EXAM (MSE)',
        defaultVisible: true,
        sections: [
          {
            id: 'psy_mse_info',
            name: 'Mental Status Examination',
            defaultVisible: true,
            fields: [
              { id: 'psy_appearance', label: 'Appearance & Behavior', type: 'select', options: ['Well-groomed, Cooperative', 'Unkempt / Poor Self-care', 'Agitated / Restless', 'Psychomotor Retardation', 'Guarded / Suspicious', 'Aggressive'] },
              { id: 'psy_speech', label: 'Speech', type: 'select', options: ['Normal Rate & Volume', 'Pressured / Rapid', 'Slow / Monotonous', 'Poverty of Speech', 'Loud / Increased Volume', 'Incoherent'] },
              { id: 'psy_mood', label: 'Mood (Subjective)', type: 'select', options: ['Euthymic', 'Depressed', 'Anxious', 'Irritable', 'Euphoric / Elated', 'Angry'] },
              { id: 'psy_affect', label: 'Affect (Objective)', type: 'select', options: ['Appropriate', 'Flat / Blunted', 'Restricted', 'Labile', 'Incongruent'] },
              { id: 'psy_thought_form', label: 'Thought Form', type: 'select', options: ['Normal / Coherent', 'Circumstantial', 'Tangential', 'Loose Associations', 'Flight of Ideas', 'Thought Block'] },
              { id: 'psy_thought_content', label: 'Thought Content', type: 'multiselect', options: ['Normal', 'Delusions (Persecutory)', 'Delusions (Grandiose)', 'Delusions (Reference)', 'Obsessions', 'Phobias', 'Suicidal Ideation', 'Homicidal Ideation', 'Guilt / Worthlessness'] },
              { id: 'psy_perception', label: 'Perception', type: 'multiselect', options: ['Normal', 'Auditory Hallucinations', 'Visual Hallucinations', 'Command Hallucinations', 'Illusions', 'Depersonalization', 'Derealization'] },
              { id: 'psy_cognition', label: 'Cognition', type: 'select', options: ['Intact', 'Impaired Attention', 'Impaired Memory', 'Impaired Orientation', 'Impaired Executive Function'] },
              { id: 'psy_mmse', label: 'MMSE / MoCA Score', type: 'text', placeholder: 'Score out of 30' },
              { id: 'psy_insight', label: 'Insight', type: 'select', options: ['Good / Full', 'Partial', 'Poor / None'] },
              { id: 'psy_judgment', label: 'Judgment', type: 'select', options: ['Intact', 'Impaired'] }
            ]
          }
        ]
      },
      {
        id: 'psy_investigations',
        name: 'INVESTIGATIONS',
        defaultVisible: true,
        sections: [
          {
            id: 'psy_inv_info',
            name: 'Psychiatric Investigations',
            defaultVisible: true,
            fields: [
              { id: 'psy_thyroid', label: 'Thyroid Function', type: 'text', placeholder: 'TSH, T3, T4' },
              { id: 'psy_blood', label: 'Blood Tests', type: 'text', placeholder: 'CBC, LFT, RFT, B12, Folate, Blood Sugar' },
              { id: 'psy_drug_screen', label: 'Urine Drug Screen', type: 'text', placeholder: 'Positive / Negative for substances' },
              { id: 'psy_eeg', label: 'EEG', type: 'text', placeholder: 'If seizure disorder suspected' },
              { id: 'psy_mri', label: 'MRI Brain', type: 'text', placeholder: 'If organic cause suspected' },
              { id: 'psy_psych_testing', label: 'Psychological Testing', type: 'textarea', placeholder: 'PHQ-9, GAD-7, HAM-D, BPRS, PANSS scores...' },
              { id: 'psy_other_inv', label: 'Other Investigations', type: 'textarea', placeholder: 'Lithium level, Valproate level, prolactin...' }
            ]
          }
        ]
      },
      {
        id: 'psy_diagnosis',
        name: 'DIAGNOSIS',
        defaultVisible: true,
        sections: [
          {
            id: 'psy_diag_info',
            name: 'Psychiatric Diagnosis',
            defaultVisible: true,
            fields: [
              { id: 'psy_diag_primary', label: 'Primary Diagnosis (ICD-10/DSM-5)', type: 'select', options: ['Major Depressive Disorder', 'Generalized Anxiety Disorder', 'Panic Disorder', 'Social Anxiety Disorder', 'OCD (Obsessive-Compulsive Disorder)', 'PTSD (Post-Traumatic Stress Disorder)', 'Bipolar Affective Disorder', 'Schizophrenia', 'Schizoaffective Disorder', 'Acute Psychosis', 'Adjustment Disorder', 'Insomnia Disorder', 'Alcohol Use Disorder', 'Substance Use Disorder', 'Personality Disorder', 'ADHD', 'Autism Spectrum Disorder', 'Conversion Disorder', 'Somatic Symptom Disorder', 'Dementia (Alzheimer / Vascular)', 'Delirium', 'Eating Disorder (AN/BN)'] },
              { id: 'psy_diag_other', label: 'Other Diagnosis', type: 'textarea', placeholder: 'Co-morbid psychiatric conditions...' },
              { id: 'psy_icd10', label: 'ICD-10 Code', type: 'text', placeholder: 'e.g. F32.1, F41.1' }
            ]
          }
        ]
      },
      {
        id: 'psy_treatment',
        name: 'TREATMENT / ADVICE',
        defaultVisible: true,
        sections: [
          {
            id: 'psy_treat_info',
            name: 'Psychiatric Management',
            defaultVisible: true,
            fields: [
              { id: 'psy_advice', label: 'Psychoeducation & Advice', type: 'textarea', placeholder: 'Sleep hygiene, stress management, support system...' },
              { id: 'psy_meds', label: 'Medications', type: 'textarea', placeholder: 'SSRI, Mood stabilizer, Antipsychotic, Anxiolytic...' },
              { id: 'psy_antidepressant', label: 'Antidepressant', type: 'select', options: ['None', 'Sertraline', 'Fluoxetine', 'Escitalopram', 'Venlafaxine', 'Duloxetine', 'Mirtazapine', 'Amitriptyline', 'Bupropion'] },
              { id: 'psy_antipsychotic', label: 'Antipsychotic', type: 'select', options: ['None', 'Olanzapine', 'Risperidone', 'Quetiapine', 'Aripiprazole', 'Haloperidol', 'Clozapine', 'Amisulpride'] },
              { id: 'psy_mood_stabilizer', label: 'Mood Stabilizer', type: 'select', options: ['None', 'Lithium', 'Sodium Valproate', 'Carbamazepine', 'Lamotrigine'] },
              { id: 'psy_anxiolytic', label: 'Anxiolytic / Sedative', type: 'select', options: ['None', 'Clonazepam', 'Lorazepam', 'Alprazolam', 'Buspirone', 'Hydroxyzine'] },
              { id: 'psy_therapy', label: 'Psychotherapy', type: 'select', options: ['Not Started', 'Cognitive Behavioral Therapy (CBT)', 'Interpersonal Therapy', 'Family Therapy', 'Supportive Psychotherapy', 'Psychoanalytic Therapy', 'DBT (Dialectical Behavior Therapy)', 'EMDR', 'Group Therapy'] },
              { id: 'psy_ect', label: 'ECT (Electroconvulsive Therapy)', type: 'select', options: ['Not Indicated', 'Planned', 'Ongoing Course', 'Completed'] },
              { id: 'psy_admission', label: 'Admission', type: 'select', options: ['Outpatient', 'Day Care', 'Ward Admission', 'Involuntary Admission'] },
              { id: 'psy_followup', label: 'Follow Up Date', type: 'date' },
              { id: 'psy_followup_plan', label: 'Follow-up Plan', type: 'text', placeholder: 'Medication review, therapy sessions, lab monitoring...' }
            ]
          }
        ]
      }
    ]
  },
  Gastroenterology: {
    id: 'Gastroenterology',
    name: 'Gastroenterology',
    categories: [
      {
        id: 'gi_patient_data',
        name: 'PATIENT DATA',
        defaultVisible: true,
        sections: [
          {
            id: 'gi_pat_info',
            name: 'Patient Demographics',
            defaultVisible: true,
            fields: [
              { id: 'gi_complaints', label: 'Chief Complaints / Since', type: 'textarea', placeholder: 'Abdominal pain, acidity, vomiting, jaundice...' },
              { id: 'gi_history', label: 'Past GI History', type: 'textarea', placeholder: 'Ulcer, hepatitis, GI bleed, GERD...' },
              { id: 'gi_allergies', label: 'Drug Allergies', type: 'text', placeholder: 'Known allergies...' }
            ]
          }
        ]
      },
      {
        id: 'gi_cc',
        name: 'CHIEF COMPLAINTS',
        defaultVisible: true,
        sections: [
          {
            id: 'gi_cc_info',
            name: 'GI Symptoms',
            defaultVisible: true,
            fields: [
              { id: 'gi_cc_primary', label: 'Primary Complaint', type: 'select', options: ['Abdominal Pain', 'Heartburn / Acidity', 'Nausea / Vomiting', 'Dysphagia', 'Diarrhea', 'Constipation', 'Bloating / Gas', 'Rectal Bleeding', 'Hematemesis', 'Melena', 'Jaundice', 'Loss of Appetite', 'Weight Loss', 'Abdominal Distension / Ascites'] },
              { id: 'gi_cc_duration', label: 'Duration', type: 'text', placeholder: 'e.g. 2 weeks' },
              { id: 'gi_cc_severity', label: 'Severity', type: 'select', options: ['Mild', 'Moderate', 'Severe'] },
              { id: 'gi_cc_assoc', label: 'Associated Symptoms', type: 'textarea', placeholder: 'Fever, weight loss, change in bowel habits...' }
            ]
          }
        ]
      },
      {
        id: 'gi_history_sec',
        name: 'GI HISTORY',
        defaultVisible: true,
        sections: [
          {
            id: 'gi_hx_info',
            name: 'Gastrointestinal History',
            defaultVisible: true,
            fields: [
              { id: 'gi_past_conditions', label: 'Previous GI Conditions', type: 'multiselect', options: ['None', 'GERD', 'Peptic Ulcer', 'H. pylori', 'IBD (Crohn/UC)', 'Celiac Disease', 'IBS', 'Hepatitis B', 'Hepatitis C', 'Cirrhosis', 'Fatty Liver (NAFLD/NASH)', 'Pancreatitis', 'Gallstones', 'GI Malignancy', 'GI Bleed'] },
              { id: 'gi_alcohol', label: 'Alcohol Intake', type: 'select', options: ['None', 'Social / Occasional', 'Regular', 'Heavy / Binge', 'Previously Heavy (Now Abstinent)'] },
              { id: 'gi_smoking', label: 'Tobacco / Smoking', type: 'select', options: ['No', 'Current', 'Ex-user'] },
              { id: 'gi_medications', label: 'Current Medications', type: 'textarea', placeholder: 'NSAIDs, PPI, anticoagulants, laxatives...' },
              { id: 'gi_fam_hx', label: 'Family GI History', type: 'text', placeholder: 'Colon cancer, IBD, celiac, liver disease...' }
            ]
          }
        ]
      },
      {
        id: 'gi_exam',
        name: 'EXAMINATION',
        defaultVisible: true,
        sections: [
          {
            id: 'gi_exam_info',
            name: 'GI Physical Examination',
            defaultVisible: true,
            fields: [
              { id: 'gi_general', label: 'General Examination', type: 'textarea', placeholder: 'Jaundice, pallor, spider nevi, palmar erythema, clubbing...' },
              { id: 'gi_vitals', label: 'Vitals', type: 'text', placeholder: 'BP, Pulse, Temp, SpO2' },
              { id: 'gi_nutritional', label: 'Nutritional Status', type: 'select', options: ['Well Nourished', 'Mild Malnutrition', 'Moderate Malnutrition', 'Severe Malnutrition / Cachexia'] },
              { id: 'gi_abdomen_insp', label: 'Abdominal Inspection', type: 'textarea', placeholder: 'Distension, scars, dilated veins, visible peristalsis...' },
              { id: 'gi_abdomen_palp', label: 'Abdominal Palpation', type: 'textarea', placeholder: 'Tenderness, guarding, rigidity, organomegaly, mass...' },
              { id: 'gi_liver', label: 'Liver Palpation', type: 'select', options: ['Not Palpable', 'Palpable - Soft', 'Palpable - Firm / Hard', 'Tender / Enlarged'] },
              { id: 'gi_spleen', label: 'Spleen Palpation', type: 'select', options: ['Not Palpable', 'Palpable (Grade 1-5)'] },
              { id: 'gi_ascites', label: 'Ascites', type: 'select', options: ['Absent', 'Mild', 'Moderate', 'Tense'] },
              { id: 'gi_pr', label: 'Per Rectal Examination', type: 'textarea', placeholder: 'Anal pathology, rectal mass, stool character, prostate...' },
              { id: 'gi_percussion_ausc', label: 'Percussion & Auscultation', type: 'textarea', placeholder: 'Liver span, shifting dullness, bowel sounds...' }
            ]
          }
        ]
      },
      {
        id: 'gi_investigations',
        name: 'INVESTIGATIONS',
        defaultVisible: true,
        sections: [
          {
            id: 'gi_inv_info',
            name: 'GI Investigations',
            defaultVisible: true,
            fields: [
              { id: 'gi_endoscopy', label: 'Upper GI Endoscopy (OGD)', type: 'textarea', placeholder: 'Esophagitis, Barrett, ulcer, varices, mass...' },
              { id: 'gi_colonoscopy', label: 'Colonoscopy', type: 'textarea', placeholder: 'Polyps, diverticulosis, colitis, mass, hemorrhoids...' },
              { id: 'gi_usg_abdomen', label: 'USG Abdomen', type: 'textarea', placeholder: 'Liver, GB, pancreas, kidneys, ascites...' },
              { id: 'gi_ct_abdomen', label: 'CT Abdomen', type: 'textarea', placeholder: 'CECT findings...' },
              { id: 'gi_mrcp', label: 'MRCP / MRI Abdomen', type: 'textarea', placeholder: 'Biliary, pancreatic duct, liver lesions...' },
              { id: 'gi_lft', label: 'Liver Function Tests', type: 'text', placeholder: 'Bilirubin, AST, ALT, ALP, GGT, Albumin, PT/INR' },
              { id: 'gi_hepatitis', label: 'Hepatitis Panel', type: 'text', placeholder: 'HBsAg, Anti-HCV, HBV DNA, HCV RNA' },
              { id: 'gi_amylase_lipase', label: 'Amylase / Lipase', type: 'text', placeholder: 'Amylase: U/L, Lipase: U/L' },
              { id: 'gi_cbc', label: 'CBC', type: 'text', placeholder: 'Hb, WBC, Platelets' },
              { id: 'gi_iron', label: 'Iron Studies', type: 'text', placeholder: 'Serum Iron, Ferritin, TIBC' },
              { id: 'gi_coagulation', label: 'Coagulation (PT/INR)', type: 'text', placeholder: 'PT: sec, INR:' },
              { id: 'gi_stool', label: 'Stool Examination', type: 'text', placeholder: 'Occult blood, culture, ova/parasites, calprotectin...' },
              { id: 'gi_h_pylori', label: 'H. pylori Test', type: 'text', placeholder: 'Positive / Negative, Method...' },
              { id: 'gi_fibroscan', label: 'FibroScan / Elastography', type: 'text', placeholder: 'kPa, fibrosis stage...' },
              { id: 'gi_biopsy', label: 'Biopsy / Histopathology', type: 'textarea', placeholder: 'Endoscopic / Liver biopsy findings...' },
              { id: 'gi_other_inv', label: 'Other Investigations', type: 'textarea', placeholder: 'Tumor markers (CEA, AFP, CA19-9), TTG-IgA, ANCA...' }
            ]
          }
        ]
      },
      {
        id: 'gi_diagnosis',
        name: 'DIAGNOSIS',
        defaultVisible: true,
        sections: [
          {
            id: 'gi_diag_info',
            name: 'GI Diagnosis',
            defaultVisible: true,
            fields: [
              { id: 'gi_diag_primary', label: 'Primary Diagnosis', type: 'select', options: ['GERD (Gastroesophageal Reflux Disease)', 'Peptic Ulcer Disease', 'H. pylori Gastritis', 'Gastric / Duodenal Ulcer', 'Irritable Bowel Syndrome (IBS)', 'Inflammatory Bowel Disease (IBD)', 'Crohn Disease', 'Ulcerative Colitis', 'Celiac Disease', 'Hepatitis B (Chronic)', 'Hepatitis C (Chronic)', 'NAFLD / NASH', 'Alcoholic Liver Disease', 'Cirrhosis of Liver', 'Portal Hypertension', 'Esophageal Varices', 'Gallstone Disease (Cholelithiasis)', 'Acute / Chronic Pancreatitis', 'Pancreatic Mass', 'Colon Polyp', 'Colorectal Cancer', 'Gastric Cancer', 'Esophageal Cancer', 'Hepatocellular Carcinoma', 'Cholangiocarcinoma', 'Acute Gastroenteritis', 'GI Bleed (Upper/Lower)', 'Hemorrhoids', 'Anal Fissure', 'Achalasia', 'Barrett Esophagus'] },
              { id: 'gi_diag_other', label: 'Other Diagnosis', type: 'textarea', placeholder: 'Co-existing GI conditions...' },
              { id: 'gi_icd10', label: 'ICD-10 Code', type: 'text', placeholder: 'e.g. K21.0, K74.6' }
            ]
          }
        ]
      },
      {
        id: 'gi_treatment',
        name: 'TREATMENT / ADVICE',
        defaultVisible: true,
        sections: [
          {
            id: 'gi_treat_info',
            name: 'GI Management',
            defaultVisible: true,
            fields: [
              { id: 'gi_advice', label: 'Dietary & Lifestyle Advice', type: 'textarea', placeholder: 'Avoid spicy food, alcohol cessation, small frequent meals...' },
              { id: 'gi_meds', label: 'Medications', type: 'textarea', placeholder: 'PPI, antacid, antibiotic, antispasmodic, laxative...' },
              { id: 'gi_ppi', label: 'PPI (Proton Pump Inhibitor)', type: 'select', options: ['None', 'Omeprazole', 'Pantoprazole', 'Esomeprazole', 'Rabeprazole', 'Lansoprazole'] },
              { id: 'gi_h_pylori_rx', label: 'H. pylori Eradication', type: 'select', options: ['Not indicated', 'Triple Therapy (PPI+Amox+Clarithro)', 'Quadruple Therapy (PPI+Bismuth+Metro+Tetra)', 'Sequential Therapy'] },
              { id: 'gi_procedure', label: 'Procedure Performed / Planned', type: 'select', options: ['None', 'Diagnostic OGD', 'Therapeutic OGD (Banding/Injection)', 'Colonoscopy + Polypectomy', 'ERCP', 'Liver Biopsy', 'Paracentesis (Ascitic Tap)', 'PEG Tube Insertion'] },
              { id: 'gi_followup', label: 'Follow Up Date', type: 'date' },
              { id: 'gi_followup_plan', label: 'Follow-up Plan', type: 'text', placeholder: 'Repeat endoscopy, surveillance colonoscopy, LFT monitoring...' }
            ]
          }
        ]
      }
    ]
  },
  Pulmonology: {
    id: 'Pulmonology',
    name: 'Pulmonology',
    categories: [
      {
        id: 'pulm_patient_data',
        name: 'PATIENT DATA',
        defaultVisible: true,
        sections: [
          {
            id: 'pulm_pat_info',
            name: 'Patient Demographics',
            defaultVisible: true,
            fields: [
              { id: 'pulm_complaints', label: 'Chief Complaints / Since', type: 'textarea', placeholder: 'Cough, breathlessness, wheezing, hemoptysis...' },
              { id: 'pulm_history', label: 'Past Pulmonary History', type: 'textarea', placeholder: 'Asthma, TB, COPD, pneumonia...' },
              { id: 'pulm_allergies', label: 'Drug Allergies', type: 'text', placeholder: 'Known allergies...' },
              { id: 'pulm_smoking', label: 'Smoking Status', type: 'select', options: ['Never', 'Current Smoker', 'Ex-Smoker'] },
              { id: 'pulm_pack_years', label: 'Pack Years', type: 'text', placeholder: 'e.g. 10 pack-years' },
              { id: 'pulm_occupation', label: 'Occupational Exposure', type: 'text', placeholder: 'Dust, asbestos, chemicals, mining...' }
            ]
          }
        ]
      },
      {
        id: 'pulm_cc',
        name: 'CHIEF COMPLAINTS',
        defaultVisible: true,
        sections: [
          {
            id: 'pulm_cc_info',
            name: 'Respiratory Symptoms',
            defaultVisible: true,
            fields: [
              { id: 'pulm_cc_primary', label: 'Primary Complaint', type: 'select', options: ['Cough (Dry)', 'Cough (Productive)', 'Breathlessness (Dyspnea)', 'Wheezing', 'Hemoptysis', 'Chest Pain (Pleuritic)', 'Snoring / Sleep Apnea', 'Stridor', 'Hoarseness', 'Recurrent Infections'] },
              { id: 'pulm_cc_duration', label: 'Duration', type: 'text', placeholder: 'e.g. 2 months' },
              { id: 'pulm_cc_severity', label: 'Dyspnea Grade (mMRC)', type: 'select', options: ['Grade 0 (Strenuous exercise)', 'Grade 1 (Hurrying or slight hill)', 'Grade 2 (Walks slower than peers)', 'Grade 3 (Stops after 100m)', 'Grade 4 (Breathless at rest)'] },
              { id: 'pulm_sputum', label: 'Sputum Character', type: 'text', placeholder: 'Mucoid, mucopurulent, blood-tinged, foul-smelling...' },
              { id: 'pulm_cc_assoc', label: 'Associated Symptoms', type: 'textarea', placeholder: 'Fever, weight loss, night sweats...' }
            ]
          }
        ]
      },
      {
        id: 'pulm_exam',
        name: 'EXAMINATION',
        defaultVisible: true,
        sections: [
          {
            id: 'pulm_exam_info',
            name: 'Respiratory Examination',
            defaultVisible: true,
            fields: [
              { id: 'pulm_vitals', label: 'Vitals (RR, SpO2, HR, BP)', type: 'text', placeholder: 'RR: 18, SpO2: 96%, HR: 80, BP: 120/80' },
              { id: 'pulm_general', label: 'General Condition', type: 'select', options: ['Comfortable at rest', 'Mild respiratory distress', 'Moderate distress', 'Severe distress / Using accessory muscles'] },
              { id: 'pulm_chest_shape', label: 'Chest Shape', type: 'select', options: ['Normal', 'Barrel Chest', 'Pectus Excavatum', 'Pectus Carinatum', 'Kyphoscoliosis'] },
              { id: 'pulm_trachea', label: 'Trachea', type: 'select', options: ['Central', 'Deviated Right', 'Deviated Left'] },
              { id: 'pulm_percussion', label: 'Percussion', type: 'textarea', placeholder: 'Resonant, dull, hyper-resonant, stony dull...' },
              { id: 'pulm_auscultation', label: 'Auscultation', type: 'textarea', placeholder: 'Air entry, creps, wheeze, rhonchi, pleural rub, bronchial breathing...' },
              { id: 'pulm_air_entry', label: 'Air Entry', type: 'select', options: ['Equal bilateral', 'Reduced right', 'Reduced left', 'Reduced bilateral'] },
              { id: 'pulm_added_sounds', label: 'Added Sounds', type: 'select', options: ['None', 'Crepitations (Bilateral basal)', 'Crepitations (Unilateral)', 'Wheeze (Bilateral)', 'Wheeze (Unilateral)', 'Rhonchi', 'Pleural Rub', 'Stridor'] },
              { id: 'pulm_clubbing', label: 'Clubbing', type: 'select', options: ['Absent', 'Present'] },
              { id: 'pulm_cyanosis', label: 'Cyanosis', type: 'select', options: ['Absent', 'Peripheral', 'Central'] },
              { id: 'pulm_jvp', label: 'JVP', type: 'select', options: ['Normal', 'Elevated'] }
            ]
          }
        ]
      },
      {
        id: 'pulm_investigations',
        name: 'INVESTIGATIONS',
        defaultVisible: true,
        sections: [
          {
            id: 'pulm_inv_info',
            name: 'Pulmonary Investigations',
            defaultVisible: true,
            fields: [
              { id: 'pulm_cxr', label: 'Chest X-Ray', type: 'textarea', placeholder: 'Consolidation, effusion, pneumothorax, mass, fibrosis...' },
              { id: 'pulm_hrct', label: 'HRCT Chest', type: 'textarea', placeholder: 'Ground glass, honeycombing, nodules, lymphadenopathy...' },
              { id: 'pulm_pft', label: 'Pulmonary Function Test (PFT / Spirometry)', type: 'textarea', placeholder: 'FEV1, FVC, FEV1/FVC ratio, reversibility...' },
              { id: 'pulm_pft_pattern', label: 'PFT Pattern', type: 'select', options: ['Normal', 'Obstructive', 'Restrictive', 'Mixed', 'Reversible Obstruction'] },
              { id: 'pulm_abg', label: 'ABG (Arterial Blood Gas)', type: 'textarea', placeholder: 'pH, pO2, pCO2, HCO3, Base Excess...' },
              { id: 'pulm_sputum_exam', label: 'Sputum Examination', type: 'text', placeholder: 'AFB smear, culture, cytology, CBNAAT/GeneXpert...' },
              { id: 'pulm_mantoux', label: 'Mantoux / IGRA', type: 'text', placeholder: 'Induration mm / IGRA positive/negative' },
              { id: 'pulm_pleural_fluid', label: 'Pleural Fluid Analysis', type: 'text', placeholder: 'Protein, LDH, glucose, cell count, ADA...' },
              { id: 'pulm_d_dimer', label: 'D-Dimer', type: 'text', placeholder: 'ng/mL' },
              { id: 'pulm_ct_angio', label: 'CT Pulmonary Angiography', type: 'textarea', placeholder: 'Pulmonary embolism findings...' },
              { id: 'pulm_bronchoscopy', label: 'Bronchoscopy', type: 'textarea', placeholder: 'Findings, BAL, biopsy...' },
              { id: 'pulm_sleep_study', label: 'Sleep Study (Polysomnography)', type: 'text', placeholder: 'AHI, desaturation index...' },
              { id: 'pulm_other_inv', label: 'Other Investigations', type: 'textarea', placeholder: 'Blood tests, allergy panel, autoimmune markers...' }
            ]
          }
        ]
      },
      {
        id: 'pulm_diagnosis',
        name: 'DIAGNOSIS',
        defaultVisible: true,
        sections: [
          {
            id: 'pulm_diag_info',
            name: 'Pulmonary Diagnosis',
            defaultVisible: true,
            fields: [
              { id: 'pulm_diag_primary', label: 'Primary Diagnosis', type: 'select', options: ['Bronchial Asthma', 'COPD (Chronic Obstructive Pulmonary Disease)', 'Community-Acquired Pneumonia', 'Hospital-Acquired Pneumonia', 'Pulmonary Tuberculosis (TB)', 'Extra-Pulmonary TB', 'Pleural Effusion', 'Pneumothorax', 'Pulmonary Embolism', 'Interstitial Lung Disease (ILD)', 'Idiopathic Pulmonary Fibrosis', 'Sarcoidosis', 'Bronchiectasis', 'Lung Cancer', 'Lung Abscess', 'Obstructive Sleep Apnea', 'Allergic Bronchopulmonary Aspergillosis', 'COVID-19 Pneumonia', 'Acute Respiratory Distress Syndrome (ARDS)', 'Chronic Respiratory Failure'] },
              { id: 'pulm_diag_other', label: 'Other Diagnosis', type: 'textarea', placeholder: 'Co-existing pulmonary conditions...' },
              { id: 'pulm_icd10', label: 'ICD-10 Code', type: 'text', placeholder: 'e.g. J45.909, J44.1' }
            ]
          }
        ]
      },
      {
        id: 'pulm_treatment',
        name: 'TREATMENT / ADVICE',
        defaultVisible: true,
        sections: [
          {
            id: 'pulm_treat_info',
            name: 'Pulmonary Management',
            defaultVisible: true,
            fields: [
              { id: 'pulm_advice', label: 'Advice', type: 'textarea', placeholder: 'Smoking cessation, breathing exercises, inhaler technique...' },
              { id: 'pulm_meds', label: 'Medications', type: 'textarea', placeholder: 'Inhalers, bronchodilators, steroids, antibiotics...' },
              { id: 'pulm_inhaler', label: 'Inhaler Therapy', type: 'select', options: ['None', 'SABA (Salbutamol PRN)', 'LABA + ICS (Formoterol+Budesonide)', 'LAMA (Tiotropium)', 'LABA+LAMA (Formoterol+Tiotropium)', 'Triple (ICS+LABA+LAMA)', 'ICS alone (Budesonide/Fluticasone)'] },
              { id: 'pulm_oxygen', label: 'Oxygen Therapy', type: 'select', options: ['Not Required', 'Nasal Prongs (1-4 L/min)', 'Face Mask (6-10 L/min)', 'NRBM (12-15 L/min)', 'HFNC', 'NIV (BiPAP/CPAP)', 'Mechanical Ventilation', 'Long-term Oxygen Therapy (LTOT)'] },
              { id: 'pulm_procedure', label: 'Procedure', type: 'select', options: ['None', 'Nebulization', 'Chest Tube Insertion (ICD)', 'Thoracentesis', 'Pleurodesis', 'Bronchoscopy', 'Pleural Biopsy', 'Pulmonary Rehab Program'] },
              { id: 'pulm_followup', label: 'Follow Up Date', type: 'date' },
              { id: 'pulm_followup_plan', label: 'Follow-up Plan', type: 'text', placeholder: 'PFT at 3 months, HRCT review, inhaler check...' }
            ]
          }
        ]
      }
    ]
  },
  Urology: {
    id: 'Urology',
    name: 'Urology',
    categories: [
      {
        id: 'uro_patient_data',
        name: 'PATIENT DATA',
        defaultVisible: true,
        sections: [
          {
            id: 'uro_pat_info',
            name: 'Patient Demographics',
            defaultVisible: true,
            fields: [
              { id: 'uro_complaints', label: 'Chief Complaints / Since', type: 'textarea', placeholder: 'Urinary frequency, difficulty, blood in urine, flank pain...' },
              { id: 'uro_history', label: 'Past Urological History', type: 'textarea', placeholder: 'Stones, UTI, prostate disease, surgery...' },
              { id: 'uro_allergies', label: 'Drug Allergies', type: 'text', placeholder: 'Known allergies...' }
            ]
          }
        ]
      },
      {
        id: 'uro_cc',
        name: 'CHIEF COMPLAINTS',
        defaultVisible: true,
        sections: [
          {
            id: 'uro_cc_info',
            name: 'Urological Symptoms',
            defaultVisible: true,
            fields: [
              { id: 'uro_cc_primary', label: 'Primary Complaint', type: 'select', options: ['Urinary Frequency', 'Urgency', 'Dysuria (Painful Urination)', 'Hematuria (Blood in Urine)', 'Urinary Retention', 'Incontinence', 'Nocturia', 'Weak Stream / Hesitancy', 'Flank / Loin Pain', 'Renal Colic', 'Scrotal Pain / Swelling', 'Erectile Dysfunction', 'Penile Discharge', 'Infertility (Male)', 'Perineal Pain'] },
              { id: 'uro_cc_duration', label: 'Duration', type: 'text', placeholder: 'e.g. 2 months' },
              { id: 'uro_cc_severity', label: 'Severity', type: 'select', options: ['Mild', 'Moderate', 'Severe'] },
              { id: 'uro_cc_assoc', label: 'Associated Symptoms', type: 'textarea', placeholder: 'Fever, nausea, hematuria, dysuria...' }
            ]
          }
        ]
      },
      {
        id: 'uro_exam',
        name: 'EXAMINATION',
        defaultVisible: true,
        sections: [
          {
            id: 'uro_exam_info',
            name: 'Urological Examination',
            defaultVisible: true,
            fields: [
              { id: 'uro_general', label: 'General Examination', type: 'textarea', placeholder: 'Pallor, edema, vital signs...' },
              { id: 'uro_abdomen', label: 'Abdominal Examination', type: 'textarea', placeholder: 'Renal angle tenderness, palpable kidney, bladder distension...' },
              { id: 'uro_dre', label: 'Digital Rectal Exam (Prostate)', type: 'select', options: ['Normal', 'Enlarged / Benign (BPH)', 'Hard / Nodular', 'Tender (Prostatitis)', 'Not done'] },
              { id: 'uro_genital', label: 'External Genital Exam', type: 'textarea', placeholder: 'Testes, epididymis, cord, meatus, phimosis, varicocele...' },
              { id: 'uro_ipss', label: 'IPSS Score (Prostate)', type: 'select', options: ['Mild (0-7)', 'Moderate (8-19)', 'Severe (20-35)', 'Not assessed'] }
            ]
          }
        ]
      },
      {
        id: 'uro_investigations',
        name: 'INVESTIGATIONS',
        defaultVisible: true,
        sections: [
          {
            id: 'uro_inv_info',
            name: 'Urological Investigations',
            defaultVisible: true,
            fields: [
              { id: 'uro_urine', label: 'Urine Routine & Culture', type: 'textarea', placeholder: 'Microscopy, culture, sensitivity...' },
              { id: 'uro_rft', label: 'Renal Function (Creatinine / eGFR)', type: 'text', placeholder: 'Cr: 1.0, eGFR: 90' },
              { id: 'uro_psa', label: 'PSA (Prostate Specific Antigen)', type: 'text', placeholder: 'ng/mL' },
              { id: 'uro_usg', label: 'USG KUB / Prostate', type: 'textarea', placeholder: 'Kidney size, stones, hydronephrosis, prostate volume...' },
              { id: 'uro_ct', label: 'CT KUB / CT Urography', type: 'textarea', placeholder: 'Stone size, location, hydronephrosis...' },
              { id: 'uro_uroflow', label: 'Uroflowmetry', type: 'text', placeholder: 'Qmax, voided volume, flow pattern...' },
              { id: 'uro_pvr', label: 'Post-Void Residual (PVR)', type: 'text', placeholder: 'mL by USG' },
              { id: 'uro_cystoscopy', label: 'Cystoscopy', type: 'textarea', placeholder: 'Urethral, bladder, ureteric orifice findings...' },
              { id: 'uro_semen', label: 'Semen Analysis', type: 'text', placeholder: 'Volume, count, motility, morphology...' },
              { id: 'uro_other_inv', label: 'Other Investigations', type: 'textarea', placeholder: 'RGP, MCU, DMSA, DTPA, urodynamics...' }
            ]
          }
        ]
      },
      {
        id: 'uro_diagnosis',
        name: 'DIAGNOSIS',
        defaultVisible: true,
        sections: [
          {
            id: 'uro_diag_info',
            name: 'Urological Diagnosis',
            defaultVisible: true,
            fields: [
              { id: 'uro_diag_primary', label: 'Primary Diagnosis', type: 'select', options: ['Urinary Tract Infection (UTI)', 'Renal Calculus (Stone)', 'Ureteric Calculus', 'Bladder Calculus', 'BPH (Benign Prostatic Hyperplasia)', 'Prostate Cancer', 'Bladder Cancer', 'Renal Cell Carcinoma', 'Hydronephrosis', 'Urethral Stricture', 'Phimosis', 'Varicocele', 'Hydrocele', 'Testicular Torsion', 'Epididymitis / Orchitis', 'Erectile Dysfunction', 'Neurogenic Bladder', 'Overactive Bladder', 'Stress Urinary Incontinence', 'Chronic Prostatitis', 'Male Infertility'] },
              { id: 'uro_diag_other', label: 'Other Diagnosis', type: 'textarea', placeholder: 'Co-existing urological conditions...' },
              { id: 'uro_icd10', label: 'ICD-10 Code', type: 'text', placeholder: 'e.g. N20.0, N40.1' }
            ]
          }
        ]
      },
      {
        id: 'uro_treatment',
        name: 'TREATMENT / ADVICE',
        defaultVisible: true,
        sections: [
          {
            id: 'uro_treat_info',
            name: 'Urological Management',
            defaultVisible: true,
            fields: [
              { id: 'uro_advice', label: 'Advice', type: 'textarea', placeholder: 'Hydration, dietary modification, pelvic exercises...' },
              { id: 'uro_meds', label: 'Medications', type: 'textarea', placeholder: 'Antibiotics, alpha-blockers, 5-ARI, analgesics...' },
              { id: 'uro_alpha_blocker', label: 'Alpha Blocker (BPH)', type: 'select', options: ['None', 'Tamsulosin', 'Silodosin', 'Alfuzosin', 'Prazosin'] },
              { id: 'uro_5ari', label: '5-Alpha Reductase Inhibitor', type: 'select', options: ['None', 'Finasteride', 'Dutasteride'] },
              { id: 'uro_procedure', label: 'Procedure / Surgery', type: 'select', options: ['None', 'ESWL (Lithotripsy)', 'URS (Ureteroscopy)', 'PCNL', 'TURP', 'Laser Prostatectomy', 'Open Prostatectomy', 'Radical Prostatectomy', 'Cystoscopy', 'Circumcision', 'Hydrocelectomy', 'Varicocelectomy', 'Nephrectomy', 'Urethroplasty', 'DJ Stent Placement'] },
              { id: 'uro_followup', label: 'Follow Up Date', type: 'date' },
              { id: 'uro_followup_plan', label: 'Follow-up Plan', type: 'text', placeholder: 'Imaging review, PSA monitoring, stone analysis...' }
            ]
          }
        ]
      }
    ]
  },
  Endocrinology: {
    id: 'Endocrinology',
    name: 'Endocrinology',
    categories: [
      {
        id: 'endo_patient_data',
        name: 'PATIENT DATA',
        defaultVisible: true,
        sections: [
          {
            id: 'endo_pat_info',
            name: 'Patient Demographics',
            defaultVisible: true,
            fields: [
              { id: 'endo_complaints', label: 'Chief Complaints / Since', type: 'textarea', placeholder: 'Weight changes, fatigue, polyuria, polydipsia...' },
              { id: 'endo_history', label: 'Past Endocrine History', type: 'textarea', placeholder: 'Diabetes, thyroid disorder, PCOS...' },
              { id: 'endo_allergies', label: 'Drug Allergies', type: 'text', placeholder: 'Known allergies...' }
            ]
          }
        ]
      },
      {
        id: 'endo_cc',
        name: 'CHIEF COMPLAINTS',
        defaultVisible: true,
        sections: [
          {
            id: 'endo_cc_info',
            name: 'Endocrine Symptoms',
            defaultVisible: true,
            fields: [
              { id: 'endo_cc_primary', label: 'Primary Complaint', type: 'select', options: ['Polyuria / Polydipsia / Polyphagia', 'Weight Gain', 'Weight Loss', 'Fatigue / Lethargy', 'Heat / Cold Intolerance', 'Hair Loss', 'Menstrual Irregularity', 'Hirsutism', 'Neck Swelling (Goitre)', 'Tremor', 'Skin Changes', 'Bone Pain / Fracture', 'Short Stature', 'Delayed Puberty', 'Hypoglycemic Episodes'] },
              { id: 'endo_cc_duration', label: 'Duration', type: 'text', placeholder: 'e.g. 6 months' }
            ]
          }
        ]
      },
      {
        id: 'endo_diabetes',
        name: 'DIABETES MANAGEMENT',
        defaultVisible: true,
        sections: [
          {
            id: 'endo_dm_info',
            name: 'Diabetes Mellitus',
            defaultVisible: true,
            fields: [
              { id: 'endo_dm_type', label: 'Diabetes Type', type: 'select', options: ['Type 1 DM', 'Type 2 DM', 'Gestational DM', 'LADA', 'MODY', 'Secondary DM', 'Pre-diabetes'] },
              { id: 'endo_dm_duration', label: 'Duration of Diabetes', type: 'text', placeholder: 'e.g. 10 years' },
              { id: 'endo_hba1c', label: 'HbA1c (%)', type: 'text', placeholder: '7.2%' },
              { id: 'endo_fbs', label: 'Fasting Blood Sugar', type: 'text', placeholder: 'mg/dL' },
              { id: 'endo_ppbs', label: 'Post-prandial Blood Sugar', type: 'text', placeholder: 'mg/dL' },
              { id: 'endo_dm_complications', label: 'Diabetic Complications', type: 'multiselect', options: ['None', 'Retinopathy', 'Nephropathy', 'Neuropathy', 'Diabetic Foot', 'Cardiovascular Disease', 'Gastroparesis'] },
              { id: 'endo_dm_meds', label: 'Diabetes Medications', type: 'textarea', placeholder: 'Metformin, Glimepiride, Insulin, SGLT2i, DPP4i, GLP1-RA...' },
              { id: 'endo_insulin', label: 'Insulin Regimen', type: 'select', options: ['Not on Insulin', 'Basal Only', 'Basal-Bolus', 'Premixed', 'Pump'] },
              { id: 'endo_dm_diet', label: 'Dietary Plan', type: 'text', placeholder: 'Caloric intake, carb counting...' },
              { id: 'endo_dm_exercise', label: 'Exercise Plan', type: 'text', placeholder: 'Type, duration, frequency...' }
            ]
          }
        ]
      },
      {
        id: 'endo_thyroid',
        name: 'THYROID',
        defaultVisible: true,
        sections: [
          {
            id: 'endo_thy_info',
            name: 'Thyroid Assessment',
            defaultVisible: true,
            fields: [
              { id: 'endo_thy_status', label: 'Thyroid Status', type: 'select', options: ['Euthyroid', 'Hypothyroid', 'Subclinical Hypothyroid', 'Hyperthyroid', 'Subclinical Hyperthyroid'] },
              { id: 'endo_tsh', label: 'TSH', type: 'text', placeholder: 'mIU/L' },
              { id: 'endo_t3_t4', label: 'Free T3 / Free T4', type: 'text', placeholder: 'FT3: , FT4: ' },
              { id: 'endo_antibodies', label: 'Thyroid Antibodies (TPO/TRAb)', type: 'text', placeholder: 'TPO Ab: , TRAb: ' },
              { id: 'endo_thy_usg', label: 'Thyroid USG', type: 'textarea', placeholder: 'Size, nodules, TIRADS classification...' },
              { id: 'endo_fnac', label: 'FNAC / Biopsy', type: 'text', placeholder: 'Bethesda classification...' },
              { id: 'endo_thy_meds', label: 'Thyroid Medication', type: 'select', options: ['None', 'Levothyroxine', 'Methimazole / Carbimazole', 'Propylthiouracil', 'Radioactive Iodine', 'Post-thyroidectomy replacement'] }
            ]
          }
        ]
      },
      {
        id: 'endo_other',
        name: 'OTHER ENDOCRINE',
        defaultVisible: false,
        sections: [
          {
            id: 'endo_other_info',
            name: 'Other Endocrine Conditions',
            defaultVisible: true,
            fields: [
              { id: 'endo_adrenal', label: 'Adrenal Assessment', type: 'textarea', placeholder: 'Cortisol, ACTH, DHEA, aldosterone, adrenal mass...' },
              { id: 'endo_pituitary', label: 'Pituitary Assessment', type: 'textarea', placeholder: 'GH, Prolactin, ACTH, FSH/LH, pituitary MRI...' },
              { id: 'endo_calcium', label: 'Calcium / Parathyroid', type: 'textarea', placeholder: 'Serum Ca, PTH, Vitamin D, bone density...' },
              { id: 'endo_pcos', label: 'PCOS Assessment', type: 'textarea', placeholder: 'Testosterone, DHEA-S, insulin resistance, USG...' },
              { id: 'endo_growth', label: 'Growth / Puberty', type: 'textarea', placeholder: 'Growth velocity, bone age, IGF-1...' }
            ]
          }
        ]
      },
      {
        id: 'endo_diagnosis',
        name: 'DIAGNOSIS',
        defaultVisible: true,
        sections: [
          {
            id: 'endo_diag_info',
            name: 'Endocrine Diagnosis',
            defaultVisible: true,
            fields: [
              { id: 'endo_diag_primary', label: 'Primary Diagnosis', type: 'select', options: ['Type 2 Diabetes Mellitus', 'Type 1 Diabetes Mellitus', 'Hypothyroidism', 'Hyperthyroidism (Graves)', 'Thyroid Nodule', 'Thyroid Cancer', 'PCOS', 'Cushing Syndrome', 'Addison Disease', 'Pheochromocytoma', 'Primary Hyperaldosteronism', 'Acromegaly', 'Prolactinoma', 'Hypogonadism', 'Osteoporosis', 'Hyperparathyroidism', 'Hypoparathyroidism', 'Vitamin D Deficiency', 'Metabolic Syndrome', 'Obesity', 'Growth Hormone Deficiency', 'Diabetes Insipidus'] },
              { id: 'endo_diag_other', label: 'Other Diagnosis', type: 'textarea', placeholder: 'Co-existing endocrine conditions...' },
              { id: 'endo_icd10', label: 'ICD-10 Code', type: 'text', placeholder: 'e.g. E11.9, E03.9' }
            ]
          }
        ]
      },
      {
        id: 'endo_treatment',
        name: 'TREATMENT / ADVICE',
        defaultVisible: true,
        sections: [
          {
            id: 'endo_treat_info',
            name: 'Endocrine Management',
            defaultVisible: true,
            fields: [
              { id: 'endo_advice', label: 'Advice', type: 'textarea', placeholder: 'Diet, exercise, medication compliance, self-monitoring...' },
              { id: 'endo_meds', label: 'Medications', type: 'textarea', placeholder: 'Full prescription details...' },
              { id: 'endo_monitoring', label: 'Monitoring Plan', type: 'textarea', placeholder: 'HbA1c every 3 months, TSH every 6 weeks, annual screening...' },
              { id: 'endo_followup', label: 'Follow Up Date', type: 'date' },
              { id: 'endo_followup_plan', label: 'Follow-up Plan', type: 'text', placeholder: 'Lab review, dose titration, complication screening...' }
            ]
          }
        ]
      }
    ]
  },
  GeneralSurgery: {
    id: 'GeneralSurgery',
    name: 'General Surgery',
    categories: [
      {
        id: 'surg_patient_data',
        name: 'PATIENT DATA',
        defaultVisible: true,
        sections: [
          {
            id: 'surg_pat_info',
            name: 'Patient Demographics',
            defaultVisible: true,
            fields: [
              { id: 'surg_complaints', label: 'Chief Complaints / Since', type: 'textarea', placeholder: 'Lump, pain, swelling, bleeding...' },
              { id: 'surg_history', label: 'Past Surgical & Medical History', type: 'textarea', placeholder: 'Previous surgeries, comorbidities...' },
              { id: 'surg_allergies', label: 'Drug Allergies', type: 'text', placeholder: 'Known allergies...' }
            ]
          }
        ]
      },
      {
        id: 'surg_cc',
        name: 'CHIEF COMPLAINTS',
        defaultVisible: true,
        sections: [
          {
            id: 'surg_cc_info',
            name: 'Surgical Symptoms',
            defaultVisible: true,
            fields: [
              { id: 'surg_cc_primary', label: 'Primary Complaint', type: 'select', options: ['Abdominal Pain (Acute)', 'Abdominal Pain (Chronic)', 'Lump / Swelling', 'Hernia', 'Rectal Bleeding', 'Vomiting / Obstruction', 'Jaundice', 'Trauma / Injury', 'Abscess', 'Non-healing Wound', 'Breast Lump', 'Thyroid Swelling', 'Anorectal Symptoms', 'Varicose Veins'] },
              { id: 'surg_cc_duration', label: 'Duration', type: 'text', placeholder: 'e.g. 3 days' },
              { id: 'surg_cc_onset', label: 'Onset', type: 'select', options: ['Sudden / Acute', 'Gradual', 'Chronic', 'Post-traumatic'] },
              { id: 'surg_cc_assoc', label: 'Associated Symptoms', type: 'textarea', placeholder: 'Fever, vomiting, constipation, weight loss...' }
            ]
          }
        ]
      },
      {
        id: 'surg_exam',
        name: 'EXAMINATION',
        defaultVisible: true,
        sections: [
          {
            id: 'surg_exam_info',
            name: 'Surgical Physical Examination',
            defaultVisible: true,
            fields: [
              { id: 'surg_general', label: 'General Examination', type: 'textarea', placeholder: 'Pallor, jaundice, dehydration, vital signs...' },
              { id: 'surg_local', label: 'Local Examination', type: 'textarea', placeholder: 'Inspection: size, shape, surface, margins. Palpation: consistency, tenderness, mobility...' },
              { id: 'surg_abdomen', label: 'Abdominal Examination', type: 'textarea', placeholder: 'Tenderness, guarding, rigidity, rebound, bowel sounds, hernia orifices...' },
              { id: 'surg_abdomen_signs', label: 'Peritoneal Signs', type: 'select', options: ['Absent', 'Guarding', 'Rigidity', 'Rebound Tenderness', 'Board-like Rigidity'] },
              { id: 'surg_pr', label: 'Per Rectal Examination', type: 'textarea', placeholder: 'Hemorrhoids, fissure, rectal mass, prostate, stool...' },
              { id: 'surg_breast', label: 'Breast Examination', type: 'textarea', placeholder: 'Lump, size, consistency, mobility, skin changes, nipple discharge, axillary nodes...' },
              { id: 'surg_hernia', label: 'Hernia Examination', type: 'textarea', placeholder: 'Site, reducibility, cough impulse, ring occlusion test...' },
              { id: 'surg_vascular', label: 'Vascular Examination', type: 'textarea', placeholder: 'Pulses, varicosities, ABI, Trendelenburg test...' }
            ]
          }
        ]
      },
      {
        id: 'surg_investigations',
        name: 'INVESTIGATIONS',
        defaultVisible: true,
        sections: [
          {
            id: 'surg_inv_info',
            name: 'Surgical Investigations',
            defaultVisible: true,
            fields: [
              { id: 'surg_blood', label: 'Blood Investigations', type: 'textarea', placeholder: 'CBC, LFT, RFT, Coagulation, Blood Group, Cross-match...' },
              { id: 'surg_imaging', label: 'Imaging', type: 'textarea', placeholder: 'X-ray, USG, CT, MRI findings...' },
              { id: 'surg_biopsy', label: 'Biopsy / FNAC / Histopathology', type: 'textarea', placeholder: 'Tissue diagnosis...' },
              { id: 'surg_tumor_markers', label: 'Tumor Markers', type: 'text', placeholder: 'CEA, AFP, CA19-9, CA15-3...' },
              { id: 'surg_endoscopy', label: 'Endoscopy / Colonoscopy', type: 'textarea', placeholder: 'Findings...' },
              { id: 'surg_fitness', label: 'Anesthesia Fitness', type: 'text', placeholder: 'ASA class, cardiac/pulmonary clearance...' },
              { id: 'surg_other_inv', label: 'Other Investigations', type: 'textarea', placeholder: 'ECG, Echo, PFT, special tests...' }
            ]
          }
        ]
      },
      {
        id: 'surg_diagnosis',
        name: 'DIAGNOSIS',
        defaultVisible: true,
        sections: [
          {
            id: 'surg_diag_info',
            name: 'Surgical Diagnosis',
            defaultVisible: true,
            fields: [
              { id: 'surg_diag_primary', label: 'Primary Diagnosis', type: 'select', options: ['Acute Appendicitis', 'Inguinal Hernia', 'Umbilical Hernia', 'Incisional Hernia', 'Cholelithiasis (Gallstones)', 'Acute Cholecystitis', 'Intestinal Obstruction', 'Perforated Peptic Ulcer', 'Hemorrhoids', 'Anal Fissure', 'Perianal Abscess / Fistula', 'Breast Lump / Fibroadenoma', 'Breast Cancer', 'Thyroid Goitre / Nodule', 'Thyroid Cancer', 'Lipoma', 'Sebaceous Cyst', 'Abscess', 'Varicose Veins', 'DVT', 'Trauma / Laceration', 'Burns', 'Diabetic Foot', 'Pilonidal Sinus', 'Gastric / Colon Cancer'] },
              { id: 'surg_diag_other', label: 'Other Diagnosis', type: 'textarea', placeholder: 'Co-existing conditions...' },
              { id: 'surg_icd10', label: 'ICD-10 Code', type: 'text', placeholder: 'e.g. K35.80, K40.90' }
            ]
          }
        ]
      },
      {
        id: 'surg_treatment',
        name: 'TREATMENT / SURGERY',
        defaultVisible: true,
        sections: [
          {
            id: 'surg_treat_info',
            name: 'Surgical Management',
            defaultVisible: true,
            fields: [
              { id: 'surg_management', label: 'Management Plan', type: 'select', options: ['Conservative (Medical)', 'Elective Surgery', 'Emergency Surgery', 'Day Care Procedure'] },
              { id: 'surg_procedure', label: 'Planned / Performed Procedure', type: 'select', options: ['Open Appendectomy', 'Laparoscopic Appendectomy', 'Open Cholecystectomy', 'Laparoscopic Cholecystectomy', 'Hernia Repair (Open)', 'Hernia Repair (Laparoscopic)', 'Hemorrhoidectomy', 'Fissurectomy / LIS', 'Fistulectomy', 'Excision Biopsy', 'Incision & Drainage', 'Wound Debridement', 'Thyroidectomy', 'Mastectomy / Lumpectomy', 'Laparotomy (Exploratory)', 'Stoma Creation'] },
              { id: 'surg_anesthesia', label: 'Anesthesia', type: 'select', options: ['Local Anesthesia', 'Spinal Anesthesia', 'Epidural', 'General Anesthesia', 'Regional Block'] },
              { id: 'surg_op_notes', label: 'Operative Notes', type: 'textarea', placeholder: 'Incision, findings, procedure steps, drain, closure...' },
              { id: 'surg_postop', label: 'Post-operative Instructions', type: 'textarea', placeholder: 'Diet, wound care, activity, warning signs...' },
              { id: 'surg_meds', label: 'Medications', type: 'textarea', placeholder: 'Antibiotics, analgesics, anticoagulants, PPIs...' },
              { id: 'surg_followup', label: 'Follow Up Date', type: 'date' },
              { id: 'surg_followup_plan', label: 'Follow-up Plan', type: 'text', placeholder: 'Wound check, drain removal, suture removal, biopsy results...' }
            ]
          }
        ]
      }
    ]
  }
,
  FamilyMedicine: {
    id: 'FamilyMedicine',
    name: 'Family Medicine',
    categories: [
      {
        id: 'fm_patient_data',
        name: 'PATIENT DATA',
        defaultVisible: true,
        sections: [
          {
            id: 'fm_pat_info',
            name: 'Patient & Family Overview',
            defaultVisible: true,
            fields: [
              { id: 'fm_complaints', label: 'Chief Complaints / Since', type: 'textarea', placeholder: 'Fever, fatigue, wellness check...' },
              { id: 'fm_history', label: 'Comprehensive Family & Medical History', type: 'textarea', placeholder: 'Family diseases, past illnesses...' },
              { id: 'fm_allergies', label: 'Allergies', type: 'text', placeholder: 'Medication, food, environmental...' },
              { id: 'fm_lifestyle', label: 'Lifestyle Habits', type: 'text', placeholder: 'Diet, exercise, sleep, smoking, alcohol...' }
            ]
          }
        ]
      },
      {
        id: 'fm_preventive',
        name: 'PREVENTIVE CARE & SCREENING',
        defaultVisible: true,
        sections: [
          {
            id: 'fm_prev_info',
            name: 'Screening & Immunization',
            defaultVisible: true,
            fields: [
              { id: 'fm_bp_screen', label: 'Blood Pressure Screening', type: 'select', options: ['Normal (<120/80)', 'Elevated', 'Stage 1 HTN', 'Stage 2 HTN'] },
              { id: 'fm_cancer_screen', label: 'Cancer Screening Status', type: 'select', options: ['Up to date (Mammogram/Pap/Colonoscopy)', 'Due for Mammogram', 'Due for Pap Smear', 'Due for Colonoscopy', 'Refused'] },
              { id: 'fm_vax_status', label: 'Adult Immunizations', type: 'select', options: ['Up to Date', 'Flu Due', 'Pneumococcal Due', 'Tdap Due', 'Shingrix Due'] },
              { id: 'fm_health_risk', label: 'Health Risk Assessment', type: 'textarea', placeholder: 'Cardiovascular risk, diabetes risk, fall risk...' }
            ]
          }
        ]
      },
      {
        id: 'fm_exam',
        name: 'PHYSICAL EXAMINATION',
        defaultVisible: true,
        sections: [
          {
            id: 'fm_exam_info',
            name: 'General & Systemic Exam',
            defaultVisible: true,
            fields: [
              { id: 'fm_vitals', label: 'Vitals (BP/HR/RR/Temp/SpO2/BMI)', type: 'text', placeholder: '120/80 mmHg, HR 72, BMI 24' },
              { id: 'fm_gen_exam', label: 'General Examination', type: 'textarea', placeholder: 'Appearance, hydration, lymph nodes...' },
              { id: 'fm_sys_exam', label: 'Systemic Examination', type: 'textarea', placeholder: 'CVS, RS, Abdomen, CNS, Musculoskeletal...' }
            ]
          }
        ]
      },
      {
        id: 'fm_diagnosis',
        name: 'DIAGNOSIS & MANAGEMENT',
        defaultVisible: true,
        sections: [
          {
            id: 'fm_diag_info',
            name: 'Diagnosis & Care Plan',
            defaultVisible: true,
            fields: [
              { id: 'fm_diag_primary', label: 'Primary Diagnosis', type: 'select', options: ['Essential Hypertension', 'Type 2 Diabetes', 'Hyperlipidemia', 'Upper Respiratory Infection', 'GERD', 'Osteoarthritis', 'Depression / Anxiety', 'Routine Health Maintenance'] },
              { id: 'fm_meds', label: 'Medications', type: 'textarea', placeholder: 'Full prescription...' },
              { id: 'fm_advice', label: 'Advice & Education', type: 'textarea', placeholder: 'Diet, exercise, follow-up schedule...' },
              { id: 'fm_followup', label: 'Follow Up Date', type: 'date' }
            ]
          }
        ]
      }
    ]
  },
  Nephrology: {
    id: 'Nephrology',
    name: 'Nephrology',
    categories: [
      {
        id: 'neph_patient_data',
        name: 'PATIENT DATA',
        defaultVisible: true,
        sections: [
          {
            id: 'neph_pat_info',
            name: 'Demographics & Renal History',
            defaultVisible: true,
            fields: [
              { id: 'neph_complaints', label: 'Chief Complaints', type: 'textarea', placeholder: 'Edema, oliguria, hematuria, fatigue...' },
              { id: 'neph_history', label: 'Renal History', type: 'textarea', placeholder: 'Prior CKD, acute kidney injury, dialysis history...' },
              { id: 'neph_allergies', label: 'Allergies', type: 'text', placeholder: 'Contrast dye, NSAIDs...' }
            ]
          }
        ]
      },
      {
        id: 'neph_ckd',
        name: 'RENAL ASSESSMENT',
        defaultVisible: true,
        sections: [
          {
            id: 'neph_ckd_info',
            name: 'Kidney Function & Staging',
            defaultVisible: true,
            fields: [
              { id: 'neph_ckd_stage', label: 'CKD Stage', type: 'select', options: ['Stage 1 (eGFR ≥90)', 'Stage 2 (eGFR 60-89)', 'Stage 3a (eGFR 45-59)', 'Stage 3b (eGFR 30-44)', 'Stage 4 (eGFR 15-29)', 'Stage 5 (eGFR <15 / ESRD)', 'Acute Kidney Injury (AKI)'] },
              { id: 'neph_egfr', label: 'eGFR (mL/min/1.73m²)', type: 'text', placeholder: '45' },
              { id: 'neph_creatinine', label: 'Serum Creatinine (mg/dL)', type: 'text', placeholder: '1.8' },
              { id: 'neph_bun', label: 'BUN (mg/dL)', type: 'text', placeholder: '35' },
              { id: 'neph_uacr', label: 'Urine Albumin/Creatinine Ratio (UACR)', type: 'text', placeholder: 'mg/g' },
              { id: 'neph_electrolytes', label: 'Electrolytes (K/Na/HCO3/Ca/P)', type: 'text', placeholder: 'K: 4.8, Na: 138, HCO3: 22, Ca: 9.2, P: 4.1' },
              { id: 'neph_dialysis', label: 'Dialysis Status', type: 'select', options: ['Not on Dialysis', 'Hemodialysis (AV Fistula)', 'Hemodialysis (Permcath)', 'Peritoneal Dialysis', 'Renal Transplant Recipient'] }
            ]
          }
        ]
      },
      {
        id: 'neph_exam',
        name: 'EXAMINATION',
        defaultVisible: true,
        sections: [
          {
            id: 'neph_exam_info',
            name: 'Fluid Status & Vascular Access',
            defaultVisible: true,
            fields: [
              { id: 'neph_bp', label: 'Blood Pressure', type: 'text', placeholder: '140/90 mmHg' },
              { id: 'neph_fluid_status', label: 'Fluid Overload / Edema', type: 'select', options: ['Euvolemic', 'Mild Edema 1+', 'Moderate Edema 2+', 'Severe Edema 3+ / Anasarca', 'Dehydrated'] },
              { id: 'neph_access_exam', label: 'AV Fistula / Graft Exam', type: 'textarea', placeholder: 'Thrill present, bruit audible, no stenosis/infection...' },
              { id: 'neph_sys_exam', label: 'Cardiopulmonary Exam', type: 'textarea', placeholder: 'JVP, basal creps, pericardial rub...' }
            ]
          }
        ]
      },
      {
        id: 'neph_diagnosis',
        name: 'DIAGNOSIS & PLAN',
        defaultVisible: true,
        sections: [
          {
            id: 'neph_diag_info',
            name: 'Renal Diagnosis & Therapy',
            defaultVisible: true,
            fields: [
              { id: 'neph_diag_primary', label: 'Primary Diagnosis', type: 'select', options: ['Diabetic Nephropathy', 'Hypertensive Nephrosclerosis', 'IgA Nephropathy', 'Membranous Nephropathy', 'FSGS', 'Lupus Nephritis', 'Polycystic Kidney Disease (ADPKD)', 'Acute Tubular Necrosis (ATN)', 'Nephrolithiasis', 'ESRD on Dialysis'] },
              { id: 'neph_meds', label: 'Renal Medications', type: 'textarea', placeholder: 'ACEi/ARB, SGLT2i, Phosphate binders, EPO, Diuretics...' },
              { id: 'neph_diet', label: 'Renal Diet Advice', type: 'textarea', placeholder: 'Low sodium, low potassium, low phosphate, fluid restriction...' },
              { id: 'neph_followup', label: 'Follow Up Date', type: 'date' }
            ]
          }
        ]
      }
    ]
  },
  Oncology: {
    id: 'Oncology',
    name: 'Oncology & Cancer Care',
    categories: [
      {
        id: 'onc_patient_data',
        name: 'PATIENT DATA',
        defaultVisible: true,
        sections: [
          {
            id: 'onc_pat_info',
            name: 'Patient & Cancer Overview',
            defaultVisible: true,
            fields: [
              { id: 'onc_complaints', label: 'Chief Complaints', type: 'textarea', placeholder: 'Mass, weight loss, pain, fatigue...' },
              { id: 'onc_history', label: 'Cancer History', type: 'textarea', placeholder: 'Primary tumor, diagnosis date, prior treatments...' },
              { id: 'onc_allergies', label: 'Allergies', type: 'text', placeholder: 'Chemotherapy agents, contrast...' }
            ]
          }
        ]
      },
      {
        id: 'onc_staging',
        name: 'CANCER STAGING & GENOMICS',
        defaultVisible: true,
        sections: [
          {
            id: 'onc_staging_info',
            name: 'TNM & Biomarkers',
            defaultVisible: true,
            fields: [
              { id: 'onc_stage', label: 'Cancer Stage', type: 'select', options: ['Stage 0 (In Situ)', 'Stage I', 'Stage II', 'Stage III', 'Stage IV (Metastatic)'] },
              { id: 'onc_tnm', label: 'TNM Classification', type: 'text', placeholder: 'T2 N1 M0' },
              { id: 'onc_histology', label: 'Histopathological Grade', type: 'text', placeholder: 'Grade 1 (Well differentiated) / Grade 2 / Grade 3' },
              { id: 'onc_biomarkers', label: 'Biomarkers & Genomics', type: 'textarea', placeholder: 'ER/PR/HER2, EGFR, ALK, PD-L1, BRCA1/2, MSI status...' },
              { id: 'onc_performance', label: 'ECOG Performance Status', type: 'select', options: ['0 - Fully Active', '1 - Restricted Strenuous', '2 - Incapable of Work / Ambulate', '3 - Limited Self Care', '4 - Completely Disabled'] }
            ]
          }
        ]
      },
      {
        id: 'onc_treatment',
        name: 'ONCOLOGY TREATMENT PLAN',
        defaultVisible: true,
        sections: [
          {
            id: 'onc_tx_info',
            name: 'Chemo, Immuno & Radiotherapy',
            defaultVisible: true,
            fields: [
              { id: 'onc_tx_intent', label: 'Treatment Intent', type: 'select', options: ['Curative', 'Neoadjuvant', 'Adjuvant', 'Palliative', 'Maintenance'] },
              { id: 'onc_chemo_regimen', label: 'Chemotherapy / Immunotherapy Regimen', type: 'textarea', placeholder: 'Protocol details, cycle number, dosage...' },
              { id: 'onc_rad_plan', label: 'Radiotherapy Details', type: 'textarea', placeholder: 'Target volume, total Gray, fractions...' },
              { id: 'onc_side_effects', label: 'Toxicity & Side Effects', type: 'textarea', placeholder: 'Nausea, fatigue, neuropathy, neutropenia...' },
              { id: 'onc_meds', label: 'Supportive Care Rx', type: 'textarea', placeholder: 'Antiemetics, G-CSF, analgesics...' },
              { id: 'onc_followup', label: 'Next Cycle / Review Date', type: 'date' }
            ]
          }
        ]
      }
    ]
  },
  Rheumatology: {
    id: 'Rheumatology',
    name: 'Rheumatology',
    categories: [
      {
        id: 'rheum_patient_data',
        name: 'PATIENT DATA',
        defaultVisible: true,
        sections: [
          {
            id: 'rheum_pat_info',
            name: 'Demographics & Joint History',
            defaultVisible: true,
            fields: [
              { id: 'rheum_complaints', label: 'Chief Complaints', type: 'textarea', placeholder: 'Joint pain, morning stiffness, rash, weakness...' },
              { id: 'rheum_history', label: 'Autoimmune History', type: 'textarea', placeholder: 'Family autoimmune disease, prior diagnosis...' },
              { id: 'rheum_allergies', label: 'Allergies', type: 'text', placeholder: 'NSAIDs, Biologics...' }
            ]
          }
        ]
      },
      {
        id: 'rheum_joint_eval',
        name: 'JOINT & SYSTEMIC EVALUATION',
        defaultVisible: true,
        sections: [
          {
            id: 'rheum_joint_info',
            name: 'Articular & Extra-Articular Exam',
            defaultVisible: true,
            fields: [
              { id: 'rheum_swollen_count', label: 'Swollen Joint Count (SJC)', type: 'text', placeholder: '4' },
              { id: 'rheum_tender_count', label: 'Tender Joint Count (TJC)', type: 'text', placeholder: '6' },
              { id: 'rheum_stiffness', label: 'Morning Stiffness Duration', type: 'select', options: ['<30 mins', '30-60 mins', '1-2 hours', '>2 hours'] },
              { id: 'rheum_extra_articular', label: 'Extra-Articular Manifestations', type: 'textarea', placeholder: 'Malar rash, Raynaud phenomenon, sicca, nodules, serositis...' },
              { id: 'rheum_serology', label: 'Serology Panel', type: 'text', placeholder: 'RF: +, Anti-CCP: +, ANA: +, anti-dsDNA: -, HLA-B27: -' },
              { id: 'rheum_esr_crp', label: 'ESR / CRP', type: 'text', placeholder: 'ESR 45 mm/hr, CRP 18 mg/L' }
            ]
          }
        ]
      },
      {
        id: 'rheum_treatment',
        name: 'RHEUMATOLOGY MANAGEMENT',
        defaultVisible: true,
        sections: [
          {
            id: 'rheum_tx_info',
            name: 'DMARDs & Biologics',
            defaultVisible: true,
            fields: [
              { id: 'rheum_diag', label: 'Primary Diagnosis', type: 'select', options: ['Rheumatoid Arthritis', 'Systemic Lupus Erythematosus (SLE)', 'Ankylosing Spondylitis', 'Psoriatic Arthritis', 'Sjogren Syndrome', 'Systemic Sclerosis / Scleroderma', 'Gout', 'Pseudogout', 'Vasculitis', 'Polymyalgia Rheumatica'] },
              { id: 'rheum_dmard', label: 'Conventional DMARD', type: 'select', options: ['None', 'Methotrexate', 'Sulfasalazine', 'Hydroxychloroquine', 'Leflunomide', 'Combination'] },
              { id: 'rheum_biologic', label: 'Biologic / JAK Inhibitor', type: 'select', options: ['None', 'Anti-TNF (Adalimumab/Etancercept)', 'Rituximab', 'Tocilizumab', 'Tofacitinib', 'Upadacitinib'] },
              { id: 'rheum_meds', label: 'Full Prescription', type: 'textarea', placeholder: 'NSAIDs, Steroids, DMARDs...' },
              { id: 'rheum_followup', label: 'Follow Up Date', type: 'date' }
            ]
          }
        ]
      }
    ]
  },
  Hematology: {
    id: 'Hematology',
    name: 'Hematology',
    categories: [
      {
        id: 'hem_patient_data',
        name: 'PATIENT DATA',
        defaultVisible: true,
        sections: [
          {
            id: 'hem_pat_info',
            name: 'Hematological Overview',
            defaultVisible: true,
            fields: [
              { id: 'hem_complaints', label: 'Chief Complaints', type: 'textarea', placeholder: 'Anemia, fatigue, bleeding, fever, lymphadenopathy...' },
              { id: 'hem_history', label: 'Past Hematological History', type: 'textarea', placeholder: 'Transfusions, bleeding tendency, thrombosis...' },
              { id: 'hem_allergies', label: 'Allergies', type: 'text', placeholder: 'Blood products, medications...' }
            ]
          }
        ]
      },
      {
        id: 'hem_blood_work',
        name: 'HEMATOLOGY LABS',
        defaultVisible: true,
        sections: [
          {
            id: 'hem_lab_info',
            name: 'CBC & Coagulation',
            defaultVisible: true,
            fields: [
              { id: 'hem_hb', label: 'Hemoglobin (g/dL)', type: 'text', placeholder: '9.2' },
              { id: 'hem_wbc', label: 'WBC Count (/µL)', type: 'text', placeholder: '6,500' },
              { id: 'hem_platelets', label: 'Platelet Count (/µL)', type: 'text', placeholder: '150,000' },
              { id: 'hem_anc', label: 'Absolute Neutrophil Count (ANC)', type: 'text', placeholder: '3,200' },
              { id: 'hem_pbs', label: 'Peripheral Blood Smear', type: 'textarea', placeholder: 'Microcytic hypochromic, anisopoikilocytosis...' },
              { id: 'hem_iron_panel', label: 'Iron Profile', type: 'text', placeholder: 'Ferritin, Iron, TIBC, Transferrin sat' },
              { id: 'hem_b12_folate', label: 'Vitamin B12 / Folate', type: 'text', placeholder: 'B12: pg/mL, Folate: ng/mL' },
              { id: 'hem_coag', label: 'Coagulation Profile', type: 'textarea', placeholder: 'PT/INR, aPTT, Fibrinogen, D-Dimer...' },
              { id: 'hem_bone_marrow', label: 'Bone Marrow Aspirate / Biopsy', type: 'textarea', placeholder: 'Cellularity, erythroid/myeloid ratio, blasts %...' }
            ]
          }
        ]
      },
      {
        id: 'hem_treatment',
        name: 'MANAGEMENT',
        defaultVisible: true,
        sections: [
          {
            id: 'hem_tx_info',
            name: 'Hematology Diagnosis & Plan',
            defaultVisible: true,
            fields: [
              { id: 'hem_diag', label: 'Primary Diagnosis', type: 'select', options: ['Iron Deficiency Anemia', 'Megaloblastic Anemia', 'Aplastic Anemia', 'Sickle Cell Anemia', 'Thalassemia Major/Minor', 'ITP (Immune Thrombocytopenia)', 'Hemophilia A/B', 'DVT / Pulmonary Embolism', 'Acute Myeloid Leukemia (AML)', 'Acute Lymphoblastic Leukemia (ALL)', 'CML', 'CLL', 'Multiple Myeloma', 'Hodgkin Lymphoma', 'Non-Hodgkin Lymphoma'] },
              { id: 'hem_meds', label: 'Medications & Transfusion Plan', type: 'textarea', placeholder: 'Iron, Hydroxyurea, Anticoagulants, PRBC/Platelet transfusion...' },
              { id: 'hem_followup', label: 'Follow Up Date', type: 'date' }
            ]
          }
        ]
      }
    ]
  },
  Neurosurgery: {
    id: 'Neurosurgery',
    name: 'Neurosurgery',
    categories: [
      {
        id: 'nsurg_patient_data',
        name: 'PATIENT DATA',
        defaultVisible: true,
        sections: [
          {
            id: 'nsurg_pat_info',
            name: 'Demographics & Cranial/Spinal Complaints',
            defaultVisible: true,
            fields: [
              { id: 'nsurg_complaints', label: 'Chief Complaints', type: 'textarea', placeholder: 'Headache, neurological deficit, spinal pain, trauma...' },
              { id: 'nsurg_history', label: 'Past Neurosurgical History', type: 'textarea', placeholder: 'Prior craniotomy, spine surgery, VPS...' },
              { id: 'nsurg_allergies', label: 'Allergies', type: 'text', placeholder: 'Contrast, drugs...' }
            ]
          }
        ]
      },
      {
        id: 'nsurg_exam',
        name: 'NEUROSURGICAL EXAMINATION',
        defaultVisible: true,
        sections: [
          {
            id: 'nsurg_exam_info',
            name: 'GCS, Cranial & Spine Exam',
            defaultVisible: true,
            fields: [
              { id: 'nsurg_gcs', label: 'Glasgow Coma Scale (GCS)', type: 'select', options: ['E4V5M6 (15/15)', '13-14 (Mild)', '9-12 (Moderate)', '<8 (Severe / Intubated)'] },
              { id: 'nsurg_pupils', label: 'Pupil Reaction', type: 'select', options: ['PERRL', 'Anisocoria', 'Unilateral Fixed Dilation', 'Bilateral Fixed Dilation'] },
              { id: 'nsurg_deficits', label: 'Focal Neurological Deficits', type: 'textarea', placeholder: 'Hemiplegia, paraplegia, cranial nerve palsy...' },
              { id: 'nsurg_spine_exam', label: 'Spine & Myelopathy Exam', type: 'textarea', placeholder: 'Dermatomal loss, myotome weakness, Hoffmann sign, Babinski...' }
            ]
          }
        ]
      },
      {
        id: 'nsurg_imaging',
        name: 'NEUROIMAGING',
        defaultVisible: true,
        sections: [
          {
            id: 'nsurg_img_info',
            name: 'CT, MRI & Angiography',
            defaultVisible: true,
            fields: [
              { id: 'nsurg_ct', label: 'CT Brain / Spine', type: 'textarea', placeholder: 'Hemorrhage, fracture, midline shift, hydrocephalus...' },
              { id: 'nsurg_mri', label: 'MRI Brain / Spine', type: 'textarea', placeholder: 'Tumor, disc herniation, cord compression...' },
              { id: 'nsurg_angio', label: 'Cerebral Angiography (CTA/DSA)', type: 'textarea', placeholder: 'Aneurysm, AVM...' }
            ]
          }
        ]
      },
      {
        id: 'nsurg_plan',
        name: 'SURGICAL PLAN',
        defaultVisible: true,
        sections: [
          {
            id: 'nsurg_plan_info',
            name: 'Procedure & Post-op',
            defaultVisible: true,
            fields: [
              { id: 'nsurg_diag', label: 'Primary Diagnosis', type: 'select', options: ['Traumatic Brain Injury (SDH/EDH)', 'Brain Tumor (Glioma/Meningioma)', 'Intracerebral Hemorrhage', 'Cerebral Aneurysm / AVM', 'Hydrocephalus', 'Lumbar Disc Herniation', 'Cervical Spondylotic Myelopathy', 'Spinal Cord Injury', 'Chiari Malformation'] },
              { id: 'nsurg_procedure', label: 'Planned Procedure', type: 'select', options: ['Craniotomy & Evacuation of Hematoma', 'Craniotomy & Tumor Resection', 'VP Shunt Insertion', 'Lumbar Microdiscectomy', 'ACDF (Cervical Fusion)', 'Spinal Laminectomy & Fixation', 'Aneurysm Clipping / Coiling', 'Burr Hole Drainage'] },
              { id: 'nsurg_notes', label: 'Surgical Notes', type: 'textarea', placeholder: 'Operative approach, implants used, post-op GCS...' },
              { id: 'nsurg_followup', label: 'Follow Up Date', type: 'date' }
            ]
          }
        ]
      }
    ]
  },
  Physiotherapy: {
    id: 'Physiotherapy',
    name: 'Physiotherapy & Physical Rehab',
    categories: [
      {
        id: 'pt_patient_data',
        name: 'PATIENT DATA',
        defaultVisible: true,
        sections: [
          {
            id: 'pt_pat_info',
            name: 'Rehab Overview',
            defaultVisible: true,
            fields: [
              { id: 'pt_complaints', label: 'Chief Complaints', type: 'textarea', placeholder: 'Pain, movement limitation, post-op rehab...' },
              { id: 'pt_history', label: 'Medical & Surgical History', type: 'textarea', placeholder: 'Fracture, stroke, joint replacement...' },
              { id: 'pt_referral', label: 'Referred By', type: 'text', placeholder: 'Orthopedic / Neurologist / Self' }
            ]
          }
        ]
      },
      {
        id: 'pt_assessment',
        name: 'FUNCTIONAL ASSESSMENT',
        defaultVisible: true,
        sections: [
          {
            id: 'pt_assess_info',
            name: 'ROM, Muscle & Gait Assessment',
            defaultVisible: true,
            fields: [
              { id: 'pt_vas_pain', label: 'VAS Pain Score (0-10)', type: 'select', options: ['0', '1-3 Mild', '4-6 Moderate', '7-9 Severe', '10 Worst'] },
              { id: 'pt_rom', label: 'Range of Motion (Active/Passive)', type: 'textarea', placeholder: 'Flexion, extension, rotation degree measurements...' },
              { id: 'pt_mmt', label: 'Manual Muscle Testing (MMT Grade 0-5)', type: 'textarea', placeholder: 'Muscle groups strength...' },
              { id: 'pt_posture', label: 'Posture Assessment', type: 'select', options: ['Normal', 'Kyphotic', 'Scoliotic', 'Forward Head', 'Pelvic Tilt'] },
              { id: 'pt_gait', label: 'Gait Analysis', type: 'select', options: ['Normal', 'Antalgic', 'Ataxic', 'Spastic', 'Assisted Device'] },
              { id: 'pt_functional_goals', label: 'Rehabilitation Goals', type: 'textarea', placeholder: 'Short-term & long-term functional goals...' }
            ]
          }
        ]
      },
      {
        id: 'pt_treatment',
        name: 'PHYSIOTHERAPY PLAN',
        defaultVisible: true,
        sections: [
          {
            id: 'pt_tx_info',
            name: 'Modalities & Exercises',
            defaultVisible: true,
            fields: [
              { id: 'pt_modalities', label: 'Electrotherapy / Modalities', type: 'multiselect', options: ['TENS', 'IFT', 'Ultrasound Therapy', 'Hot Pack / Cold Pack', 'Traction (Cervical/Lumbar)', 'Laser Therapy', 'Dry Needling', 'Cupping', 'Kinesio Taping'] },
              { id: 'pt_exercise_rx', label: 'Exercise Prescription', type: 'textarea', placeholder: 'Strengthening, stretching, balance, gait training...' },
              { id: 'pt_frequency', label: 'Session Frequency', type: 'text', placeholder: '3x / week for 4 weeks' },
              { id: 'pt_followup', label: 'Next Evaluation Date', type: 'date' }
            ]
          }
        ]
      }
    ]
  },
  EmergencyMedicine: {
    id: 'EmergencyMedicine',
    name: 'Emergency Medicine & Triage',
    categories: [
      {
        id: 'em_patient_data',
        name: 'TRIAGE & INITIAL ASSESSMENT',
        defaultVisible: true,
        sections: [
          {
            id: 'em_triage_info',
            name: 'Triage Level & Vitals',
            defaultVisible: true,
            fields: [
              { id: 'em_triage_level', label: 'Triage Category (ESI)', type: 'select', options: ['ESI Level 1 (Resuscitation / Immediate)', 'ESI Level 2 (Emergent)', 'ESI Level 3 (Urgent)', 'ESI Level 4 (Less Urgent)', 'ESI Level 5 (Non-Urgent)'] },
              { id: 'em_vitals', label: 'Primary Vitals', type: 'text', placeholder: 'BP: 110/70, HR: 110, RR: 24, SpO2: 94%, Temp: 101°F' },
              { id: 'em_abc', label: 'Primary Survey (ABCs)', type: 'select', options: ['Airway Patent', 'Airway Compromised', 'Breathing Adequate', 'Circulation Compromised'] },
              { id: 'em_complaints', label: 'Chief Complaints & Mechanism', type: 'textarea', placeholder: 'Chest pain, acute trauma, RTA, poisoning, anaphylaxis...' }
            ]
          }
        ]
      },
      {
        id: 'em_management',
        name: 'EMERGENCY MANAGEMENT',
        defaultVisible: true,
        sections: [
          {
            id: 'em_mgmt_info',
            name: 'Resuscitation & Diagnostics',
            defaultVisible: true,
            fields: [
              { id: 'em_interventions', label: 'Immediate Interventions', type: 'textarea', placeholder: 'IV lines, oxygen, intubation, CPR, IV fluids, meds...' },
              { id: 'em_fast_scan', label: 'E-FAST / Point-of-Care Ultrasound', type: 'textarea', placeholder: 'Pericardial, RUQ, LUQ, pelvis, pneumothorax...' },
              { id: 'em_ecg_labs', label: 'Stat Labs & ECG', type: 'textarea', placeholder: 'ECG, Trop-I, ABG, Lactate, CBC, Electrolytes...' },
              { id: 'em_disposition', label: 'Patient Disposition', type: 'select', options: ['Discharged Home', 'Admitted to Ward', 'Admitted to ICU', 'Transferred to OT', 'Transferred to Tertiary Center', 'AMA (Left Against Medical Advice)'] }
            ]
          }
        ]
      }
    ]
  },
  ICU: {
    id: 'ICU',
    name: 'Critical Care / ICU',
    categories: [
      {
        id: 'icu_patient_data',
        name: 'ICU ADMISSION & MONITORING',
        defaultVisible: true,
        sections: [
          {
            id: 'icu_pat_info',
            name: 'ICU Patient Overview',
            defaultVisible: true,
            fields: [
              { id: 'icu_bed_no', label: 'ICU Bed Number', type: 'text', placeholder: 'Bed #04' },
              { id: 'icu_admit_diag', label: 'Admission Diagnosis', type: 'textarea', placeholder: 'Septic shock, ARDS, severe head injury, post-op high risk...' },
              { id: 'icu_scores', label: 'Severity Scores (APACHE II / SOFA)', type: 'text', placeholder: 'SOFA Score: 8, APACHE II: 18' }
            ]
          }
        ]
      },
      {
        id: 'icu_systems',
        name: 'SYSTEMIC ICU MONITORING',
        defaultVisible: true,
        sections: [
          {
            id: 'icu_sys_info',
            name: 'Organ Systems Status',
            defaultVisible: true,
            fields: [
              { id: 'icu_vent', label: 'Ventilator Status', type: 'select', options: ['Room Air', 'Nasal Cannula', 'NIV (BiPAP/CPAP)', 'Invasive Mechanical Ventilation (AC/SIMV/PSV)', 'Tracheostomy'] },
              { id: 'icu_vent_settings', label: 'Ventilator Settings', type: 'text', placeholder: 'Mode: PRVC, FiO2: 40%, PEEP: 8, TV: 420ml' },
              { id: 'icu_hemodynamics', label: 'Hemodynamics', type: 'select', options: ['Stable', 'On Inotrope / Vasopressor (Norad/Dobutamine)', 'Fluid Refractory Shock'] },
              { id: 'icu_abg', label: 'Stat ABG', type: 'text', placeholder: 'pH: 7.32, pCO2: 48, pO2: 85, HCO3: 20, Lactate: 3.2' },
              { id: 'icu_fluid_balance', label: '24-hour Fluid Balance', type: 'text', placeholder: 'In: 2400ml, Out: 1800ml (Net +600ml)' },
              { id: 'icu_lines', label: 'Invasive Lines & Tubes', type: 'textarea', placeholder: 'CVC, Arterial line, Foley catheter, Ryle tube, Chest drain...' }
            ]
          }
        ]
      },
      {
        id: 'icu_plan',
        name: 'DAILY ICU CARE PLAN',
        defaultVisible: true,
        sections: [
          {
            id: 'icu_plan_info',
            name: 'FAST HUG & Management Plan',
            defaultVisible: true,
            fields: [
              { id: 'icu_fast_hug', label: 'FAST HUG Checklist', type: 'textarea', placeholder: 'Feeding, Analgesia, Sedation, Thromboembolism, Head up, Ulcer prophylaxis, Glycemic control...' },
              { id: 'icu_sedation', label: 'Sedation / Analgesia', type: 'textarea', placeholder: 'Propofol, Fentanyl, RASS target (-1 to 0)...' },
              { id: 'icu_antibiotics', label: 'Antimicrobial Stewardship', type: 'textarea', placeholder: 'Empiric / Targeted antibiotic regimen...' }
            ]
          }
        ]
      }
    ]
  },
  Radiology: {
    id: 'Radiology',
    name: 'Radiology & Imaging Reports',
    categories: [
      {
        id: 'rad_patient_data',
        name: 'IMAGING REQUISITION',
        defaultVisible: true,
        sections: [
          {
            id: 'rad_req_info',
            name: 'Study Details',
            defaultVisible: true,
            fields: [
              { id: 'rad_modality', label: 'Modality', type: 'select', options: ['X-Ray', 'Ultrasound (USG)', 'CT Scan', 'MRI', 'Mammography', 'Fluoroscopy', 'PET-CT', 'DEXA Scan'] },
              { id: 'rad_body_part', label: 'Body Region / Part', type: 'text', placeholder: 'Chest / Abdomen / Brain / Lumbar Spine' },
              { id: 'rad_clinical_history', label: 'Clinical Indication', type: 'textarea', placeholder: 'Indication provided by requesting physician...' }
            ]
          }
        ]
      },
      {
        id: 'rad_findings',
        name: 'RADIOLOGY REPORT',
        defaultVisible: true,
        sections: [
          {
            id: 'rad_report_info',
            name: 'Observations & Impression',
            defaultVisible: true,
            fields: [
              { id: 'rad_technique', label: 'Technique & Contrast', type: 'textarea', placeholder: 'CECT Abdomen with IV and oral contrast...' },
              { id: 'rad_observations', label: 'Detailed Radiological Findings', type: 'textarea', placeholder: 'Description of organs, lesions, measurements...' },
              { id: 'rad_impression', label: 'Impression / Conclusion', type: 'textarea', placeholder: 'Summary diagnostic impression...' },
              { id: 'rad_birads', label: 'BI-RADS / TI-RADS Category (If applicable)', type: 'select', options: ['N/A', 'Category 1 (Negative)', 'Category 2 (Benign)', 'Category 3 (Probably Benign)', 'Category 4 (Suspicious)', 'Category 5 (Highly Suggestive of Malignancy)'] },
              { id: 'rad_radiologist', label: 'Reporting Radiologist', type: 'text', placeholder: 'Dr. S. Sharma, MD Radiology' }
            ]
          }
        ]
      }
    ]
  },
  Pathology: {
    id: 'Pathology',
    name: 'Pathology & Histopathology',
    categories: [
      {
        id: 'path_specimen',
        name: 'SPECIMEN DETAILS',
        defaultVisible: true,
        sections: [
          {
            id: 'path_spec_info',
            name: 'Specimen Requisition',
            defaultVisible: true,
            fields: [
              { id: 'path_specimen_type', label: 'Specimen Type', type: 'text', placeholder: 'Biopsy / Surgical Resection / Cytology / PAP Smear' },
              { id: 'path_site', label: 'Anatomical Site', type: 'text', placeholder: 'Right Breast / Colon polyp / Cervix' },
              { id: 'path_clinical_hx', label: 'Clinical History & Pre-op Diagnosis', type: 'textarea', placeholder: 'Brief clinical background...' }
            ]
          }
        ]
      },
      {
        id: 'path_report',
        name: 'PATHOLOGY REPORT',
        defaultVisible: true,
        sections: [
          {
            id: 'path_report_info',
            name: 'Gross & Microscopic Findings',
            defaultVisible: true,
            fields: [
              { id: 'path_gross', label: 'Gross Examination', type: 'textarea', placeholder: 'Dimensions, weight, color, margin distance...' },
              { id: 'path_microscopic', label: 'Microscopic Description', type: 'textarea', placeholder: 'Cellular architecture, atypia, mitoses, necrosis, margins...' },
              { id: 'path_ihc', label: 'Immunohistochemistry (IHC)', type: 'textarea', placeholder: 'Staining results...' },
              { id: 'path_diagnosis', label: 'Final Pathological Diagnosis', type: 'textarea', placeholder: 'Histopathological summary diagnosis...' },
              { id: 'path_pathologist', label: 'Reporting Pathologist', type: 'text', placeholder: 'Dr. M. Patel, MD Pathology' }
            ]
          }
        ]
      }
    ]
  },
  Nutrition: {
    id: 'Nutrition',
    name: 'Nutrition & Dietetics',
    categories: [
      {
        id: 'nutr_patient_data',
        name: 'NUTRITIONAL ASSESSMENT',
        defaultVisible: true,
        sections: [
          {
            id: 'nutr_assess_info',
            name: 'Anthropometry & Dietary Assessment',
            defaultVisible: true,
            fields: [
              { id: 'nutr_bmi', label: 'BMI & Caloric Needs', type: 'text', placeholder: 'Height: 165cm, Weight: 70kg, BMI: 25.7, Target: 1800 kcal' },
              { id: 'nutr_diet_type', label: 'Current Diet Pattern', type: 'select', options: ['Vegetarian', 'Non-Vegetarian', 'Eggetarian', 'Vegan', 'Jain Diet'] },
              { id: 'nutr_recall', label: '24-Hour Dietary Recall', type: 'textarea', placeholder: 'Breakfast, lunch, snacks, dinner breakdown...' },
              { id: 'nutr_risk', label: 'Malnutrition Risk (MUST/SGA)', type: 'select', options: ['Low Risk', 'Medium Risk', 'High Risk'] }
            ]
          }
        ]
      },
      {
        id: 'nutr_plan',
        name: 'DIET PLAN & COUNSELLING',
        defaultVisible: true,
        sections: [
          {
            id: 'nutr_plan_info',
            name: 'Prescribed Meal Plan',
            defaultVisible: true,
            fields: [
              { id: 'nutr_prescribed_diet', label: 'Prescribed Diet', type: 'select', options: ['Diabetic Diet', 'Renal Diet', 'Low Sodium / DASH', 'High Protein', 'Keto / Low Carb', 'Liquid / Soft Diet'] },
              { id: 'nutr_macros', label: 'Macronutrient Breakdown', type: 'textarea', placeholder: 'Carbs: 50%, Protein: 25%, Fat: 25%' },
              { id: 'nutr_chart', label: 'Customized Diet Chart', type: 'textarea', placeholder: 'Meal-by-meal instructions and food restrictions...' },
              { id: 'nutr_followup', label: 'Follow Up Date', type: 'date' }
            ]
          }
        ]
      }
    ]
  }
};
