# UniCare EHR — Functional React Prototype

Production-style frontend implementation based on the supplied UniCare EHR reference screens. This is a real React application, not a screenshot wrapper.

## Included workflows
- Dashboard with KPI cards, schedule, appointment status donut, growth and revenue charts
- Patient list with search/filtering and profile navigation
- Patient profile and clinical history
- Appointment / queue management
- Consultation workspace with specialty-driven fields for Gynecology, Ophthalmology, Cardiology, Dermatology and General Medicine
- Specialty switching updates the visible clinical schema
- Prescriptions with editable-style interaction and save feedback
- Lab reports with status badges and actions
- Billing & payments
- Clinical templates
- Custom fields & sections builder
- Analytics dashboard
- Specialty management and user roles
- Patient timeline / clinical history
- Advanced patient search & filters
- Responsive desktop/tablet/mobile layout
- Toast feedback, sticky actions, dropdowns, tables, forms, charts and reusable UI primitives

## Run locally
Requires Node.js 18+.

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Production build
```bash
npm run build
npm run preview
```

## Routing
The app uses hash-based client routing so every module is independently navigable without requiring a server rewrite. Example routes:
- `#/dashboard`
- `#/patients`
- `#/profile`
- `#/appointments`
- `#/consultation`
- `#/prescriptions`
- `#/labs`
- `#/billing`
- `#/templates`
- `#/builder`
- `#/analytics`
- `#/settings`
- `#/timeline`
- `#/filters`

## Design implementation notes
The screenshots are retained only as reference assets under `public/references/`. The UI itself is reconstructed from React components and CSS with reusable tables, cards, navigation, form controls, charts and responsive layouts.

## Important
This is a frontend functional prototype using realistic local mock data. It does not connect to a production EHR backend, database, identity provider, payment gateway, lab network or clinical API. Before real clinical use, add authentication/RBAC enforcement, audit logs, encryption, backend validation, secure API integration, consent workflows and applicable regulatory controls.
