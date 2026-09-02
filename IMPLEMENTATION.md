# UniCare EHR Implementation Map

## Reference-to-route mapping
1. Main EHR dashboard → `#/dashboard`
2. Patient list → `#/patients`
3. Patient profile → `#/profile`
4. Appointment / queue → `#/appointments`
5. Consultation specialty workspace → `#/consultation`
6. Consultation specialty switch → specialty selector inside `#/consultation`
7. Prescriptions → `#/prescriptions`
8. Lab reports → `#/labs`
9. Billing & payments → `#/billing`
10. Templates → `#/templates`
11. Custom fields & sections builder → `#/builder`
12. Analytics dashboard → `#/analytics`
13. Specialty management → `#/settings`
14. User roles → `#/settings`
15. Patient timeline / clinical history → `#/timeline`
16. Patient search & filters → `#/filters`

## Interaction contract
- Sidebar changes the active application module.
- Header specialty selector changes the consultation schema.
- Consultation renders only specialty-relevant clinical sections and fields.
- Patient list search filters by name, MRN and phone.
- Patient actions navigate into the patient profile.
- Appointment actions provide feedback and open workflow context.
- Save, upload, add, edit, print and filter actions show interactive feedback.
- Tables, dropdowns, tabs, checkboxes and form fields are live controls.
- Charts are rendered as React/Recharts components, not rasterized screenshots.
- Layout adapts to narrower screens.

## Specialty schema
### Gynecology
Patient Data, Menstrual History, Obstetric History, Gynecological History, Examination Findings, Investigations, Diagnosis, Treatment / Advice.

### Ophthalmology
Patient Data, Vision, Eye Examination, Diagnosis, Treatment / Advice.

### Cardiology
Patient Data, Cardiac History, Examination, Investigations, Diagnosis, Treatment / Advice.

### Dermatology
Patient Data, Chief Complaint, Skin Examination, Diagnosis, Treatment / Advice.

### General
Patient Data, History, Examination, Diagnosis, Treatment / Advice.

## Production handoff checklist
- Replace mock arrays with authenticated API calls.
- Add route-level authorization and role-based access controls.
- Add server-side validation and clinical audit logs.
- Persist consultation drafts and section completion state.
- Add document storage with virus scanning and access logging.
- Add real appointment conflict detection and queue events.
- Add prescription signing / approval workflow.
- Integrate lab and billing APIs only through a secure backend.
- Add automated tests for specialty switching and required-field rules.
