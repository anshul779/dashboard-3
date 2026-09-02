import React, { useMemo, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line } from 'recharts';
import * as Icons from 'lucide-react';

import { SPECIALTY_SCHEMAS } from './data/specialtySchemas';
import ClinicalSidebar from './components/ClinicalSidebar';
import FieldLibraryModal from './components/FieldLibraryModal';
import ClinicalWorkspace from './components/ClinicalWorkspace';
import './styles.css';

const nav = [
  ['Dashboard', 'dashboard', Icons.LayoutDashboard],
  ['Appointments', 'appointments', Icons.CalendarDays],
  ['Consultation', 'consultation', Icons.Stethoscope],
  ['Patients', 'patients', Icons.Users],
  ['Calendar', 'calendar', Icons.Calendar],
  ['Templates', 'templates', Icons.FileText],
  ['Reports', 'reports', Icons.BarChart3],
  ['Billing', 'billing', Icons.CreditCard],
  ['Inventory', 'inventory', Icons.Package],
  ['Settings', 'settings', Icons.Settings]
];

const patients = [
  { id: 'MRN001', name: 'John Doe', age: '34 / Male', phone: '+91 98765 43210', email: 'john.doe@gmail.com', last: '01 May 2026', allergy: 'Penicillin' },
  { id: 'MRN002', name: 'Maria Garcia', age: '42 / Female', phone: '+91 98765 43120', email: 'maria@example.com', last: '30 Apr 2026', allergy: 'None' },
  { id: 'MRN003', name: 'Robert Brown', age: '47 / Male', phone: '+91 99887 76544', email: 'robert@example.com', last: '29 Apr 2026', allergy: 'None' },
  { id: 'MRN004', name: 'Priya Sharma', age: '28 / Female', phone: '+91 77665 44332', email: 'priya@example.com', last: '28 Apr 2026', allergy: 'Sulfa' },
  { id: 'MRN005', name: 'James Wilson', age: '52 / Male', phone: '+91 77665 44333', email: 'james@example.com', last: '27 Apr 2026', allergy: 'None' },
  { id: 'MRN006', name: 'Linda Davis', age: '40 / Female', phone: '+91 55544 33221', email: 'linda@example.com', last: '27 Apr 2026', allergy: 'None' },
  { id: 'MRN007', name: 'Michael Clark', age: '36 / Male', phone: '+91 55443 32211', email: 'michael@example.com', last: '26 Apr 2026', allergy: 'Aspirin' }
];

const appointments = [
  ['John Doe', '09:00 AM', 'Follow-up', 'In Clinic'],
  ['Maria Garcia', '10:00 AM', 'Consultation', 'Video'],
  ['Robert Brown', '10:30 AM', 'Consultation', 'In Clinic'],
  ['Priya Sharma', '11:00 AM', 'Follow-up', 'In Clinic'],
  ['James Wilson', '11:30 AM', 'Consultation', 'Video'],
  ['Linda Davis', '12:00 PM', 'Follow-up', 'In Clinic']
];

const reports = [
  ['CBC', 'Complete Blood Count', '30 Apr 2026', 'Completed'],
  ['LFT', 'Liver Function Test', '29 Apr 2026', 'Completed'],
  ['KFT', 'Kidney Function Test', '29 Apr 2026', 'Completed'],
  ['Vitamin D 25-OH', 'Vitamin D', '28 Apr 2026', 'Completed'],
  ['HbA1c', 'Glycated Hemoglobin', '28 Apr 2026', 'Pending']
];

const inventoryStock = [
  { code: 'INV-001', name: 'Tranexamic Acid 500mg', category: 'Pharmaceuticals', quantity: 450, unit: 'Tablets', status: 'In Stock' },
  { code: 'INV-002', name: 'Paracetamol 650mg', category: 'Pharmaceuticals', quantity: 1200, unit: 'Tablets', status: 'In Stock' },
  { code: 'INV-003', name: 'Sterile Gauze Pads 4x4', category: 'Consumables', quantity: 85, unit: 'Packs', status: 'Low Stock' },
  { code: 'INV-004', name: 'Disposable Speculum (Medium)', category: 'Gynecology Supplies', quantity: 140, unit: 'Units', status: 'In Stock' },
  { code: 'INV-005', name: 'USG Coupling Gel 5L', category: 'Radiology Consumables', quantity: 12, unit: 'Jugs', status: 'Low Stock' },
  { code: 'INV-006', name: 'Surgical Gloves Size 7.5', category: 'Consumables', quantity: 500, unit: 'Pairs', status: 'In Stock' }
];

const prescriptions = [
  ['Cetirizine', '10mg', '1-0-0', '7 Days', 'After Food'],
  ['Hydrocortisone Cream', 'Apply', 'TID', '7 Days', 'Apply on affected area'],
  ['Moisturizer Cream', 'Apply', 'BD', '14 Days', 'Regular use'],
  ['Sunscreen SPF 50', 'Apply', 'OD', '30 Days', 'Before sun exposure']
];

const chartData = [
  { name: 'Jan', v: 180 }, { name: 'Feb', v: 230 }, { name: 'Mar', v: 190 },
  { name: 'Apr', v: 310 }, { name: 'May', v: 280 }, { name: 'Jun', v: 360 }
];

const revenue = [
  { name: 'Mon', v: 2200 }, { name: 'Tue', v: 3100 }, { name: 'Wed', v: 2500 },
  { name: 'Thu', v: 4200 }, { name: 'Fri', v: 3600 }, { name: 'Sat', v: 4700 }
];

function route() { return location.hash.replace('#/', '') || 'dashboard'; }
function go(r) { location.hash = '/' + r; }

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Clinical Error Boundary caught error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '30px', background: '#fff', border: '1px solid #fecaca', borderRadius: '12px', margin: '20px' }}>
          <h3 style={{ color: '#dc2626', margin: '0 0 8px' }}>Clinical View Notice</h3>
          <p style={{ color: '#4b5563', margin: '0 0 16px', fontSize: '13px' }}>
            An unexpected error occurred rendering this view: {this.state.error?.message || 'Rendering error'}
          </p>
          <button className="primary" onClick={() => { this.setState({ hasError: false }); location.hash = '#/dashboard'; location.reload(); }}>
            Reset to Dashboard
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [page, setPage] = useState(route());
  const [specialty, setSpecialty] = useState('Ophthalmology');
  const [toasts, setToasts] = useState([]);
  const [notificationPanelOpen, setNotificationPanelOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Universal Patient Data state storing filled clinical values across specialties & fields
  const [patientDataState, setPatientDataState] = useState({
    pat_overview: '34yo male presenting with complaints of diminished vision and strain in both eyes.',
    va_unaided_od: '6/12',
    va_unaided_os: '6/18',
    va_bcva_od: '6/6',
    va_bcva_os: '6/6',
    ref_subj_od_sph: '+1.00',
    ref_subj_od_cyl: '-0.50',
    ref_subj_od_axis: '90°',
    ref_subj_os_sph: '+1.25',
    ref_subj_os_cyl: '-0.75',
    ref_subj_os_axis: '180°',
    iop_od: '15',
    iop_os: '16',
    iop_method: 'Goldmann Applanation (GAT)',
    diag_primary: 'Myopia with Astigmatism'
  });

  React.useEffect(() => {
    const f = () => setPage(route());
    addEventListener('hashchange', f);
    return () => removeEventListener('hashchange', f);
  }, []);

  const removeToast = (id, animated = true) => {
    setToasts((prev) => {
      if (!prev.some((toast) => toast.id === id)) return prev;
      if (!animated) return prev.filter((toast) => toast.id !== id);
      return prev.map((toast) => (toast.id === id ? { ...toast, closing: true } : toast));
    });

    if (animated) {
      window.setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      }, 260);
    }
  };

  const notify = (message, options = {}) => {
    const safeMessage = typeof message === 'string' ? message : 'Notification';
    const title = options.title || 'Notification';
    const duration = options.duration ?? 4500;
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    setToasts((prev) => {
      const duplicate = prev.some((toast) => toast.message === safeMessage && Date.now() - toast.createdAt < 800);
      if (duplicate) return prev;
      return [{ id, title, message: safeMessage, createdAt: Date.now(), duration, closing: false }, ...prev];
    });

    window.setTimeout(() => removeToast(id), duration);
  };

  const dismissToast = (id) => removeToast(id);

  const handleFieldChange = (fieldId, value) => {
    setPatientDataState((prev) => ({
      ...prev,
      [fieldId]: value
    }));
  };

  const content = useMemo(() => {
    const props = {
      specialty,
      setSpecialty,
      query,
      setQuery,
      notify,
      patientData: patientDataState,
      onChangeField: handleFieldChange
    };
    switch (page) {
      case 'dashboard': return <Dashboard {...props} />;
      case 'patients': return <Patients {...props} />;
      case 'profile': return <Profile {...props} />;
      case 'appointments': return <Appointments {...props} />;
      case 'consultation': return <Consultation {...props} />;
      case 'prescriptions': return <Prescriptions {...props} />;
      case 'labs': return <Labs {...props} />;
      case 'billing': return <Billing {...props} />;
      case 'inventory': return <Inventory {...props} />;
      case 'reports': return <Reports {...props} />;
      case 'templates': return <Templates {...props} />;
      case 'builder': return <Builder {...props} />;
      case 'analytics': return <Analytics {...props} />;
      case 'settings': return <Settings {...props} />;
      case 'timeline': return <Timeline {...props} />;
      case 'filters': return <Filters {...props} />;
      default: return <Dashboard {...props} />;
    }
  }, [page, specialty, query, patientDataState]);

  return (
    <div className="app">
      <Sidebar page={page} collapsed={sidebarCollapsed} onToggleSidebar={() => setSidebarCollapsed((prev) => !prev)} />
      <div className={`main ${sidebarCollapsed ? 'main-collapsed' : ''}`}>
        <Header
          specialty={specialty}
          setSpecialty={setSpecialty}
          notify={notify}
          notificationPanelOpen={notificationPanelOpen}
          setNotificationPanelOpen={setNotificationPanelOpen}
        />
        <main><ErrorBoundary key={page}>{content}</ErrorBoundary></main>
        <footer>© 2026 UniCare EHR <span>•</span> Secure • Compliant • Connected <span className="version">Version 2.0.0</span></footer>
      </div>

      <div className="toast-stack" aria-live="polite" aria-atomic="false">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast-item${toast.closing ? ' toast-closing' : ''}`} role="status" aria-live="polite">
            <div className="toast-icon-wrap">
              <Icons.CheckCircle2 size={16} />
            </div>
            <div className="toast-content">
              <strong>{toast.title}</strong>
              <span>{toast.message}</span>
            </div>
            <button type="button" className="toast-close" aria-label="Dismiss notification" onClick={() => dismissToast(toast.id)}>
              <Icons.X size={14} />
            </button>
          </div>
        ))}
      </div>

      {notificationPanelOpen && (
        <div className="notification-panel" role="dialog" aria-label="Notifications">
          <div className="notification-panel-header">
            <strong>Notifications</strong>
            <button type="button" className="notification-panel-close" onClick={() => setNotificationPanelOpen(false)}>
              <Icons.X size={14} />
            </button>
          </div>
          <div className="notification-panel-list">
            <div className="notification-item">
              <span className="notification-dot" />
              <div>
                <strong>Patient updated</strong>
                <small>John Doe profile synced successfully.</small>
              </div>
            </div>
            <div className="notification-item">
              <span className="notification-dot warning" />
              <div>
                <strong>Follow-up due</strong>
                <small>Review bloodwork for Maria Garcia.</small>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Sidebar({ page, collapsed, onToggleSidebar }) {
  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="brand">
        <div className="brandmark">✦</div>
        <span>UniCare <b>EHR</b></span>
      </div>
      <div className="nav">
        {nav.map(([label, r, I]) => (
          <button key={r} className={page === r ? 'active' : ''} onClick={() => go(r)}>
            <I size={16} />
            <span>{label}</span>
          </button>
        ))}
      </div>
      <div className="side-bottom">
        <button onClick={() => go('settings')}><Icons.Settings size={16} /> <span>Settings</span></button>
      </div>
      <button className="sidebar-edge-toggle" onClick={onToggleSidebar} aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
        {collapsed ? <Icons.ChevronRight size={14} /> : <Icons.ChevronsLeft size={14} />}
      </button>
    </aside>
  );
}

function Header({ specialty, setSpecialty, notify, notificationPanelOpen, setNotificationPanelOpen }) {
  return (
    <header className="header">
      <div className="specialty">
        <label>CLINICAL SPECIALTY</label>
        <select value={specialty} onChange={e => { setSpecialty(e.target.value); notify(`Switched to ${SPECIALTY_SCHEMAS[e.target.value]?.name || e.target.value} Specialty Schema`); }}>
          {Object.values(SPECIALTY_SCHEMAS).map((spec) => (
            <option key={spec.id} value={spec.id}>{spec.name}</option>
          ))}
        </select>
      </div>
      <div className="search">
        <Icons.Search size={17} />
        <input placeholder="Search patient by name, MRN, phone, email..." />
      </div>
      <button className="outline" onClick={() => notify('New patient form opened')}>＋ New Patient</button>
      <button className="iconbtn" onClick={() => setNotificationPanelOpen((prev) => !prev)} aria-label="Open notifications">
        <Icons.Bell size={18} />
        <i>3</i>
      </button>
      <div className="doctor">
        <div className="avatar">AG</div>
        <div><b>Dr. Anshul Gupta</b><small>{specialty} Specialist</small></div>
        <Icons.ChevronDown size={15} />
      </div>
    </header>
  );
}

function PageTitle({ eyebrow, title, action, onAction }) {
  return (
    <div className="title">
      <div><span>{eyebrow}</span><h1>{title}</h1></div>
      {action && <button className="primary" onClick={onAction}>{action}</button>}
    </div>
  );
}

function Card({ title, children, action }) {
  return (
    <section className="card">
      <div className="card-head"><h3>{title}</h3>{action && <button className="link" onClick={action.onClick}>{action.label}</button>}</div>
      {children}
    </section>
  );
}

function Stat({ label, value, delta, icon: Icon }) {
  return (
    <div className="stat">
      <div className="stat-icon"><Icon size={18} /></div>
      <div><span>{label}</span><strong>{value}</strong><small className={delta?.startsWith('-') ? 'down' : ''}>{delta}</small></div>
    </div>
  );
}

function Dashboard({ notify }) {
  return (
    <>
      <PageTitle eyebrow="Good morning, Dr. Anshul Gupta 👋" title="Clinical command center" action="＋ New Patient" onAction={() => notify('New patient form opened')} />
      <div className="stats">
        <Stat label="Today's Appointments" value="24" delta="+12% vs yesterday" icon={Icons.CalendarDays} />
        <Stat label="Patients Seen" value="16" delta="+8% vs yesterday" icon={Icons.Users} />
        <Stat label="Pending Reports" value="08" delta="3 urgent" icon={Icons.FileClock} />
        <Stat label="Today's Revenue" value="₹ 8,450" delta="+15% this week" icon={Icons.IndianRupee} />
      </div>
      <div className="grid two">
        <Card title="Today's Schedule" action={{ label: 'View all', onClick: () => go('appointments') }}>
          <Table headers={['Time', 'Patient', 'Type', 'Status']} rows={appointments.slice(0, 5).map(a => [a[1], a[0], a[2], <Status text={a[3]} />])} />
        </Card>
        <Card title="Appointments by Status">
          <div className="donut">
            <ResponsiveContainer width="100%" height={190}>
              <PieChart>
                <Pie data={[{ v: 9 }, { v: 7 }, { v: 4 }, { v: 3 }, { v: 1 }]} dataKey="v" innerRadius={54} outerRadius={72}><Cell /><Cell /><Cell /><Cell /><Cell /></Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div><b>24</b><span>Total</span></div>
          </div>
          <div className="legend"><span>Completed 9</span><span>Scheduled 7</span><span>In Progress 4</span><span>Cancelled 3</span></div>
        </Card>
      </div>
      <div className="grid two">
        <Card title="Patient Growth"><Chart data={chartData} /></Card>
        <Card title="Revenue Overview"><RevenueBars /></Card>
      </div>
    </>
  );
}

function Chart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={chartData}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="name" /><YAxis /><Tooltip /><Area type="monotone" dataKey="v" fillOpacity={.18} strokeWidth={2} /></AreaChart>
    </ResponsiveContainer>
  );
}

function RevenueBars() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={revenue}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="name" /><YAxis /><Tooltip /><Bar dataKey="v" radius={[5, 5, 0, 0]} /></BarChart>
    </ResponsiveContainer>
  );
}

function Status({ text }) { return <span className={'status ' + text.toLowerCase().replaceAll(' ', '-')}>{text}</span>; }

function Table({ headers, rows }) {
  return (
    <div className="table-wrap">
      <table>
        <thead><tr>{headers.map(h => <th key={h}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

function Patients({ query, setQuery }) {
  const filtered = patients.filter(p => `${p.name} ${p.id} ${p.phone}`.toLowerCase().includes(query.toLowerCase()));
  return (
    <>
      <PageTitle eyebrow="2. Patient List" title="Patients" action="＋ New Patient" />
      <Card title="All Patients">
        <div className="toolbar">
          <div className="field search-inline">
            <Icons.Search size={15} />
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search patient by name, MRN, phone..." />
          </div>
          <select><option>All Ages</option></select>
          <select><option>All Groups</option></select>
          <button className="outline">More Filters</button>
        </div>
        <Table headers={['Patient Name', 'MRN', 'Phone', 'Age / Gender', 'Last Visit', 'Allergies', 'Actions']} rows={filtered.map(p => [<b>{p.name}</b>, p.id, p.phone, p.age, p.last, <span className={p.allergy !== 'None' ? 'danger' : ''}>{p.allergy}</span>, <button className="mini" onClick={() => go('profile')}>View</button>])} />
      </Card>
    </>
  );
}

function PatientBanner() {
  return (
    <div className="patient-banner">
      <div className="patient-avatar">JD</div>
      <div><h2>John Doe ♂</h2><span>MRN: MRN123456</span><span>Phone: +91 98765 43210</span></div>
      <div><small>Age / DOB</small><b>34 Y / 12 Mar 1990</b></div>
      <div><small>Gender</small><b>Male</b></div>
      <div><small>Visit Date & Time</small><b>01 May 2026, 10:30 AM</b></div>
      <div><small>Doctor</small><b>Dr. Anshul Gupta</b></div>
      <div><small>Visit Type</small><Status text="OPD" /></div>
      <div><small>Allergies</small><b className="danger">Penicillin</b></div>
      <button className="outline" onClick={() => go('profile')}>↩ View Full Record</button>
    </div>
  );
}

function Profile() {
  return (
    <>
      <PageTitle eyebrow="3. Patient Profile" title="Patient profile" />
      <PatientBanner />
      <div className="tabs"><button className="active">Overview</button><button>Visits</button><button>Medical History</button><button>Documents</button><button>Prescriptions</button><button>Reports</button><button>Billing</button></div>
      <div className="grid three">
        <Card title="Personal Information"><Info rows={[['Date of Birth', '14 Feb 1991'], ['Gender', 'Male'], ['Marital Status', 'Married'], ['Occupation', 'Software Engineer'], ['Address', '123, Green Street, New York, NY 10001']]} /></Card>
        <Card title="Last Visit"><Info rows={[['Date', '01 May 2026'], ['Consultation', 'OPD'], ['Doctor', 'Dr. Anshul Gupta'], ['Next Appointment', '15 May 2026, 10:00 AM']]} /></Card>
        <Card title="Patient Summary"><Info rows={[['Height', '165 cm'], ['Weight', '64 kg'], ['BMI', '23.5'], ['Blood Group', 'B+'], ['Smoking', 'No'], ['Alcohol', 'Occasional']]} /></Card>
      </div>
      <Card title="Recent Activity">
        <Table headers={['Date', 'Type', 'Details', 'Doctor']} rows={[["01 May 2026", "Consultation", "Follow-up consultation", "Dr. Anshul Gupta"], ["30 Apr 2026", "Lab Report", "CBC, LFT, TFT", "Lab"], ["29 Apr 2026", "Prescription", "4 medicines", "Dr. Anshul Gupta"]]} />
      </Card>
    </>
  );
}

function Info({ rows }) { return <div className="info">{rows.map(([a, b]) => <div key={a}><span>{a}</span><b>{b}</b></div>)}</div>; }

function Appointments({ notify }) {
  return (
    <>
      <PageTitle eyebrow="4. Appointment / Queue" title="Appointments & Queue" action="＋ New Appointment" />
      <div className="queue-cards">
        <Stat label="In Clinic" value="07" delta="Patients waiting" icon={Icons.Users} />
        <Stat label="Upcoming" value="05" delta="Next 2 hours" icon={Icons.Clock} />
        <Stat label="Completed" value="16" delta="Today" icon={Icons.CheckCircle2} />
        <Stat label="Cancelled" value="02" delta="Today" icon={Icons.XCircle} />
      </div>
      <Card title="Today's Queue">
        <Table headers={['#', 'Patient', 'Time', 'Visit Type', 'Status', 'Actions']} rows={appointments.map((a, i) => [i + 1, a[0], a[1], a[2], <Status text={i < 2 ? 'In Clinic' : i === 5 ? 'Completed' : 'Upcoming'} />, <button className="mini" onClick={() => notify(`Opened ${a[0]}`)}>Open</button>])} />
      </Card>
    </>
  );
}

/* REDESIGNED CONSULTATION WORKSPACE INTEGRATION */
function Consultation({ specialty, setSpecialty, notify, patientData, onChangeField }) {
  const schema = SPECIALTY_SCHEMAS[specialty] || SPECIALTY_SCHEMAS['General'] || Object.values(SPECIALTY_SCHEMAS)[0];
  const [activeSection, setActiveSection] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFieldLibraryOpen, setIsFieldLibraryOpen] = useState(false);
  const [pinnedFields, setPinnedFields] = useState([]);

  useEffect(() => {
    setActiveSection('');
  }, [specialty]);

  const togglePinField = (fieldId) => {
    setPinnedFields((prev) => {
      const isPinned = prev.includes(fieldId);
      const next = isPinned ? prev.filter((id) => id !== fieldId) : [...prev, fieldId];
      notify(isPinned ? `Unpinned field from workspace` : `Pinned field to active workspace`);
      return next;
    });
  };

  return (
    <>
      <PatientBanner />
      <div className="consult-layout-redesigned">
        {/* Left Compact Hierarchical Clinical Sidebar */}
        <ClinicalSidebar
          schema={schema}
          patientData={patientData}
          activeSection={activeSection}
          onSelectSection={(secId) => setActiveSection(secId)}
          onOpenFieldLibrary={() => setIsFieldLibraryOpen(true)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          pinnedFields={pinnedFields}
        />

        {/* Center Main Clinical Content Area */}
        <ClinicalWorkspace
          schema={schema}
          patientData={patientData}
          onChangeField={onChangeField}
          activeSection={activeSection}
          onSelectSection={setActiveSection}
          notify={notify}
          searchQuery={searchQuery}
          pinnedFields={pinnedFields}
          onOpenFieldLibrary={() => setIsFieldLibraryOpen(true)}
        />

        {/* Right Patient Context & Quick Tools Panel */}
        <aside className="right-panel">
          <Card title="Patient Summary">
            <Info rows={[['Height', '165 cm'], ['Weight', '64 kg'], ['BMI', '23.5'], ['Blood Group', 'B+'], ['Smoking', 'No']]} />
          </Card>

          <Card title="Specialty Overview">
            <div className="specialty-mini-summary">
              <span className="spec-badge">{specialty}</span>
              <p>Active Clinical Schema: <b>{schema?.categories?.length || 0} Categories</b>, <b>{(schema?.categories || []).reduce((acc, c) => acc + (c?.sections?.length || 0), 0)} Sections</b></p>
            </div>
          </Card>

          <Card title="Patient Timeline">
            <div className="timeline">
              <b>01 May 2026</b><span>{specialty} OPD Visit<br />Dr. Anshul Gupta</span>
              <b>15 Apr 2026</b><span>OPD Review</span>
              <b>10 Apr 2026</b><span>Lab & Diagnostics Report</span>
            </div>
          </Card>

          <Card title="Quick Clinical Actions">
            <button className="quick" onClick={() => setIsFieldLibraryOpen(true)}>📖 Open Field Library</button>
            <button className="quick" onClick={() => notify('Investigations order dialog opened')}>🧪 Order Investigations</button>
            <button className="quick" onClick={() => notify('Prescription generator opened')}>💊 Create Prescription</button>
            <button className="quick" onClick={() => notify('Document upload dialog opened')}>📁 Upload Document</button>
            <button className="quick" onClick={() => notify('Consultation print view rendered')}>🖨️ Print Consultation</button>
          </Card>
        </aside>
      </div>

      {/* Specialty Field Library Modal */}
      <FieldLibraryModal
        isOpen={isFieldLibraryOpen}
        onClose={() => setIsFieldLibraryOpen(false)}
        schema={schema}
        pinnedFields={pinnedFields}
        onTogglePinField={togglePinField}
        onJumpToSection={(secId) => {
          setActiveSection(secId);
          setIsFieldLibraryOpen(false);
        }}
        patientData={patientData}
      />
    </>
  );
}

function Prescriptions({ notify }) {
  return (
    <>
      <PageTitle eyebrow="7. Prescriptions" title="Prescription management" action="＋ Add Medicine" onAction={() => notify('Medicine row added')} />
      <PatientBanner />
      <Card title="Current Prescription">
        <Table headers={['Medicine', 'Dose', 'Frequency', 'Duration', 'Instructions', 'Actions']} rows={prescriptions.map(p => [p[0], p[1], p[2], p[3], p[4], <button className="mini" onClick={() => notify('Medicine removed')}>Remove</button>])} />
        <div className="notes"><b>Notes</b><textarea placeholder="Avoid hot water bathing. Use mild soap..." /></div>
        <div className="actions"><button className="outline">Print</button><button className="outline">Share</button><button className="primary" onClick={() => notify('Prescription saved')}>Save Prescription</button></div>
      </Card>
    </>
  );
}

function Labs({ notify }) {
  return (
    <>
      <PageTitle eyebrow="8. Lab Reports" title="Lab reports" action="↥ Upload Report" onAction={() => notify('Upload dialog opened')} />
      <Card title="Reports">
        <div className="tabs compact"><button className="active">All Reports</button><button>Uploaded</button><button>Pending</button><button>Results</button></div>
        <Table headers={['Report Name', 'Description', 'Date', 'Status', 'Actions']} rows={reports.map(r => [r[0], r[1], r[2], <Status text={r[3]} />, <span className="actions-inline"><button className="mini">View</button><button className="mini">↧</button></span>])} />
      </Card>
    </>
  );
}

function Billing({ notify }) {
  return (
    <div className="billing-page">
      <div className="billing-page-header">
        <div>
          <h1>Billing &amp; Payments</h1>
          <p>Manage patient invoices, process payments, and view transaction history.</p>
        </div>
        <div className="billing-actions">
          <button type="button" className="billing-secondary-btn">
            <Icons.Printer size={15} />
            <span>Batch Print</span>
          </button>
          <button type="button" className="billing-primary-btn">
            <Icons.FilePlus2 size={15} />
            <span>Create Invoice</span>
          </button>
        </div>
      </div>

      <div className="billing-content-grid">
        <section className="billing-invoice-panel">
          <div className="invoice-top-row">
            <div className="patient-pill-avatar">RH</div>
            <div className="patient-details-inline">
              <h3>Robert Harrison</h3>
              <div className="patient-meta-row">
                <span>ID: PD-8924</span>
                <span>•</span>
                <span>Male</span>
                <span>•</span>
                <span>68 yrs</span>
              </div>
            </div>
            <div className="invoice-status-badge">Outstanding Balance <strong>$427.14</strong></div>
          </div>

          <div className="invoice-box-header">
            <div>
              <h4>Invoice #INV-2023-089</h4>
              <span>Late: 2024, 2023</span>
            </div>
            <span className="invoice-draft-tag">Draft</span>
          </div>

          <div className="invoice-row-meta">
            <span>Date: Oct 24, 2023</span>
            <span>Created by: Dr. Anshul Gupta</span>
          </div>

          <table className="billing-invoice-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Qty</th>
                <th>Unit Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Initial Specialist Consultation</td>
                <td>1</td>
                <td>$150.00</td>
                <td>$150.00</td>
              </tr>
              <tr>
                <td>Complete Blood Count (CBC)</td>
                <td>1</td>
                <td>$45.00</td>
                <td>$45.00</td>
              </tr>
              <tr>
                <td>Diagnostic Ultrasound</td>
                <td>1</td>
                <td>$220.00</td>
                <td>$220.00</td>
              </tr>
              <tr>
                <td>Prescription Medication (Amoxicillin)</td>
                <td>2</td>
                <td>$18.50</td>
                <td>$37.00</td>
              </tr>
            </tbody>
          </table>

          <div className="invoice-summary-row">
            <div className="summary-lines">
              <div><span>Subtotal</span><strong>$452.00</strong></div>
              <div><span>Senior Citizen Discount (10%)</span><strong>-$45.20</strong></div>
              <div><span>Tax (5%)</span><strong>$20.34</strong></div>
            </div>
            <div className="total-box">
              <span>Total Amount Due</span>
              <strong>$427.14</strong>
            </div>
          </div>

          <div className="invoice-actions-row">
            <button type="button" className="invoice-action-btn subtle-btn">
              <Icons.PenLine size={15} />
              <span>Edit Invoice</span>
            </button>
            <button type="button" className="invoice-action-btn subtle-btn">
              <Icons.Printer size={15} />
              <span>Print Preview</span>
            </button>
          </div>
        </section>

        <aside className="billing-payment-panel">
          <div className="payment-panel-head">
            <h3>Process Payment</h3>
            <span>Secure payment</span>
          </div>

          <div className="payment-methods">
            <button type="button" className="payment-method active">
              <Icons.CreditCard size={18} />
              <span>Card</span>
            </button>
            <button type="button" className="payment-method">
              <Icons.Wallet size={18} />
              <span>Cash</span>
            </button>
            <button type="button" className="payment-method">
              <Icons.CircleDollarSign size={18} />
              <span>UPI / Wallet</span>
            </button>
          </div>

          <div className="amount-block">
            <label>Amount to Pay</label>
            <div className="amount-display">
              <span>$</span>
              <input type="text" value="427.14" readOnly />
            </div>
            <button type="button" className="full-amount-btn">Full Balance</button>
          </div>

          <div className="status-row">
            <div>
              <label>Status</label>
              <div className="status-choice success">Ready to Process</div>
            </div>
            <div>
              <label>Date</label>
              <div className="status-choice muted">Oct 24, 2023 • 2:32 PM</div>
            </div>
          </div>

          <button type="button" className="confirm-payment-btn" onClick={() => notify('Payment processed successfully')}>
            <Icons.CheckCircle2 size={18} />
            <span>Confirm Payment</span>
            <Icons.ArrowRight size={18} />
          </button>

          <button type="button" className="refund-btn">
            <Icons.RotateCcw size={16} />
            <span>Process Refund</span>
          </button>

          <div className="recent-txn-box">
            <div className="recent-header">
              <h4>Recent Transactions</h4>
              <button type="button">View All</button>
            </div>

            <div className="txn-list">
              <div className="txn-item">
                <div>
                  <strong>Oct 12, 2023</strong>
                  <small>TXN-9321A</small>
                </div>
                <div className="txn-amount">$125.00</div>
                <div className="txn-status success">Completed</div>
                <button type="button" className="txn-action-btn"><Icons.FileText size={14} /></button>
              </div>

              <div className="txn-item">
                <div>
                  <strong>Sep 05, 2023</strong>
                  <small>TXN-87148</small>
                </div>
                <div className="txn-amount">$340.50</div>
                <div className="txn-status success">Completed</div>
                <button type="button" className="txn-action-btn"><Icons.FileText size={14} /></button>
              </div>

              <div className="txn-item">
                <div>
                  <strong>Aug 21, 2023</strong>
                  <small>TXN-7812C</small>
                </div>
                <div className="txn-amount">$85.00</div>
                <div className="txn-status warning">Partial</div>
                <button type="button" className="txn-action-btn"><Icons.FileText size={14} /></button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Reports() {
  const monthlyTrend = [
    { name: 'Week 1', value: 180 },
    { name: 'Week 2', value: 220 },
    { name: 'Week 3', value: 280 },
    { name: 'Week 4', value: 340 }
  ];

  const specialtyTrend = [
    { name: 'Gyane', value: 140 },
    { name: 'Cardio', value: 120 },
    { name: 'Dermat', value: 160 },
    { name: 'Ophthal', value: 110 },
    { name: 'General', value: 150 }
  ];

  const labRows = [
    ['CBC', 'Complete Blood Count', '30 Apr 2026', 'Completed', 'View Report'],
    ['LFT', 'Liver Function Test', '29 Apr 2026', 'Completed', 'View Report'],
    ['KFT', 'Kidney Function Test', '29 Apr 2026', 'Completed', 'View Report'],
    ['Vitamin D 25-OH', 'Vitamin D Test', '28 Apr 2026', 'Completed', 'View Report'],
    ['HbA1c', 'Glycated Hemoglobin', '28 Apr 2026', 'Pending', 'View Report']
  ];

  return (
    <div className="reports-page">
      <div className="reports-header-row">
        <div className="reports-header-copy">
          <div className="eyebrow">Clinical &amp; Financial Analytics</div>
          <h1>Reports &amp; Analytics</h1>
        </div>
        <button type="button" className="report-export-btn">
          <Icons.Download size={15} />
          <span>Export PDF Summary</span>
        </button>
      </div>

      <div className="reports-charts-grid">
        <section className="report-chart-card">
          <div className="report-chart-head">
            <h3>Monthly Patient Consultations Trend</h3>
            <button type="button" className="report-select-btn">This Month <Icons.ChevronDown size={14} /></button>
          </div>
          <div className="chart-wrap area-chart-wrap">
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={monthlyTrend} margin={{ top: 10, right: 14, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="consultAreaFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#2e7df7" stopOpacity={0.28} />
                    <stop offset="100%" stopColor="#2e7df7" stopOpacity={0.04} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#edf1f5" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#7284a0', fontSize: 11 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#7284a0', fontSize: 11 }} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#1d5fe8" strokeWidth={2.4} fill="url(#consultAreaFill)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="report-chart-card">
          <div className="report-chart-head">
            <h3>Consultations by Specialty</h3>
            <button type="button" className="report-select-btn">This Month <Icons.ChevronDown size={14} /></button>
          </div>
          <div className="chart-wrap bar-chart-wrap">
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={specialtyTrend} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="#edf1f5" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#7284a0', fontSize: 11 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#7284a0', fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="value" fill="#0d5ecb" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>

      <section className="reports-table-card">
        <div className="reports-table-header">
          <div>
            <div className="eyebrow">Laboratory &amp; Diagnostic Center</div>
            <h2>Lab Reports</h2>
          </div>
          <div className="report-table-actions">
            <button type="button" className="report-tab active">All Reports</button>
            <button type="button" className="report-tab">Uploaded</button>
            <button type="button" className="report-tab">Pending</button>
            <button type="button" className="report-upload-btn">
              <Icons.UploadCloud size={15} />
              <span>Upload Report</span>
            </button>
          </div>
        </div>

        <div className="reports-table-wrap">
          <table className="reports-table">
            <thead>
              <tr>
                <th>Report Code</th>
                <th>Description</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {labRows.map((row) => (
                <tr key={row[0]}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                  <td>
                    <span className={`report-status ${row[3] === 'Pending' ? 'pending' : 'done'}`}>{row[3]}</span>
                  </td>
                  <td>
                    <button type="button" className="view-report-btn">View Report</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function Templates({ notify }) {
  return (
    <>
      <PageTitle eyebrow="10. Templates" title="Clinical Templates" action="＋ New Template" onAction={() => notify('New template form opened')} />
      <Card title="My Templates">
        <Table headers={['Template Name', 'Specialty', 'Type', 'Actions']} rows={['Acne Follow-up Template', 'Psoriasis Assessment', 'Eczema Template', 'Skin Biopsy Template', 'General Dermatology Note'].map((n, i) => [n, 'Dermatology', i === 3 ? 'Procedure' : i === 4 ? 'Note' : 'Consultation', <button className="mini" onClick={() => notify(`Editing ${n}`)}>Edit</button>])} />
      </Card>
    </>
  );
}

function Builder({ notify }) {
  return (
    <>
      <PageTitle eyebrow="11. Custom Fields & Sections Builder" title="Clinical form builder" action="＋ Add Section" onAction={() => notify('Section added')} />
      <div className="builder">
        <Card title="Sections"><button className="builder-item active">Patient Data</button>{['History', 'Examination', 'Investigations', 'Diagnosis', 'Treatment / Advice', 'Medications', 'Follow Up', 'Notes'].map(x => <button className="builder-item" key={x}>{x}</button>)}</Card>
        <Card title="Fields in Skin Examination">
          <div className="field-row"><b>Skin Type</b><span>Dropdown</span><input type="checkbox" defaultChecked /></div>
          {['Discoloration', 'Marks', 'Scars', 'Texture', 'Pigmentation'].map(x => <div className="field-row" key={x}><b>{x}</b><span>Text field</span><input type="checkbox" defaultChecked /></div>)}
          <button className="primary full" onClick={() => notify('Builder changes saved')}>Save Changes</button>
        </Card>
      </div>
    </>
  );
}

function Analytics() {
  return (
    <>
      <PageTitle eyebrow="12. Analytics Dashboard" title="Practice analytics" />
      <div className="stats">
        <Stat label="Total Patients" value="1,280" delta="+12%" icon={Icons.Users} />
        <Stat label="Total Appointments" value="640" delta="+8%" icon={Icons.CalendarDays} />
        <Stat label="Revenue" value="₹ 25,600" delta="+15%" icon={Icons.IndianRupee} />
        <Stat label="No Show Rate" value="4.5%" delta="-2%" icon={Icons.Activity} />
      </div>
      <div className="grid two">
        <Card title="Appointments Trend"><Chart /></Card>
        <Card title="Revenue Trend"><Bar /></Card>
      </div>
      <div className="grid two">
        <Card title="Patients by Age Group">
          <div className="donut">
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={[{ name: '0-18', v: 12 }, { name: '19-35', v: 32 }, { name: '36-55', v: 36 }, { name: '56+', v: 20 }]} dataKey="v" innerRadius={55} outerRadius={78}><Cell /><Cell /><Cell /><Cell /></Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card title="Top Services"><Table headers={['Service', 'Share']} rows={['Consultation', 'Procedure', 'Lab Tests', 'Others'].map((x, i) => [x, `${80 - i * 18}%`])} /></Card>
      </div>
    </>
  );
}

function Settings() {
  const specialtyRows = [
    { name: 'Urology', icon: Icons.Stethoscope, color: 'blue', enabled: true },
    { name: 'Gynecology', icon: Icons.Heart, color: 'pink', enabled: true },
    { name: 'ENT (Ear, Nose & Throat)', icon: Icons.Headphones, color: 'teal', enabled: true },
    { name: 'Ophthalmology', icon: Icons.Eye, color: 'green', enabled: true },
    { name: 'Cardiology', icon: Icons.HeartPulse, color: 'purple', enabled: true },
    { name: 'Dermatology', icon: Icons.Sparkles, color: 'orange', enabled: true },
    { name: 'Pediatrics', icon: Icons.Baby, color: 'cyan', enabled: true },
    { name: 'Orthopedics', icon: Icons.Activity, color: 'amber', enabled: true }
  ];

  const roleRows = [
    { role: 'Super Admin', description: 'Full system control', access: 'Full System Access', users: 2, badge: 'purple' },
    { role: 'Doctor / Specialist', description: 'Clinical operations', access: 'Clinical Workspace & EHR', users: 15, badge: 'green' },
    { role: 'Nurse / Assistant', description: 'Vitals & Patient Queue', access: 'Vitals & Patient Queue', users: 8, badge: 'green' },
    { role: 'Receptionist', description: 'Appointments & Billing', access: 'Appointments & Billing', users: 6, badge: 'orange' },
    { role: 'Lab Technician', description: 'Laboratory operations', access: 'Lab Module', users: 4, badge: 'pink' }
  ];

  return (
    <div className="settings-page">
      <div className="settings-header-row">
        <div className="settings-header-copy">
          <div className="eyebrow">Settings &amp; Administration</div>
          <h1>Settings &amp; Administration</h1>
          <p>Manage modules, roles, and system preferences</p>
        </div>
        <button type="button" className="settings-primary-btn">
          <Icons.Save size={15} />
          <span>Save System Preferences</span>
        </button>
      </div>

      <div className="settings-summary-grid">
        <div className="settings-summary-card">
          <div className="settings-summary-icon pink"><Icons.Database size={20} /></div>
          <div className="settings-summary-copy">
            <label>Active Modules</label>
            <strong>22</strong>
            <span>of 22 modules enabled</span>
          </div>
        </div>

        <div className="settings-summary-card">
          <div className="settings-summary-icon blue"><Icons.ShieldCheck size={20} /></div>
          <div className="settings-summary-copy">
            <label>System Roles</label>
            <strong>5</strong>
            <span>Defined user roles</span>
          </div>
        </div>

        <div className="settings-summary-card">
          <div className="settings-summary-icon green"><Icons.Users size={20} /></div>
          <div className="settings-summary-copy">
            <label>Total Users</label>
            <strong>35</strong>
            <span>Across all roles</span>
          </div>
        </div>

        <div className="settings-summary-card">
          <div className="settings-summary-icon orange"><Icons.Lock size={20} /></div>
          <div className="settings-summary-copy">
            <label>Security Status</label>
            <strong>Secure</strong>
            <span>All systems operational</span>
          </div>
        </div>
      </div>

      <div className="settings-panel-grid">
        <section className="settings-panel-card">
          <div className="settings-panel-head">
            <h2>Specialty Module Management</h2>
          </div>

          <div className="settings-search-box">
            <Icons.Search size={14} />
            <input type="text" placeholder="Search modules..." />
          </div>

          <div className="settings-table-wrap">
            <table className="settings-module-table">
              <thead>
                <tr>
                  <th>Medical Specialty</th>
                  <th>Module Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {specialtyRows.map((row) => {
                  const Icon = row.icon;
                  return (
                    <tr key={row.name}>
                      <td>
                        <div className="module-name-cell">
                          <span className={`module-icon ${row.color}`}><Icon size={14} /></span>
                          <span>{row.name}</span>
                        </div>
                      </td>
                      <td>
                        <span className="enabled-pill">Enabled</span>
                      </td>
                      <td>
                        <button type="button" className="settings-toggle" aria-label={`Toggle ${row.name}`}>
                          <span className="toggle-knob" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="settings-pagination-row">
            <span>Showing 1 to 8 of 22 modules</span>
            <div className="settings-pagination">
              <button type="button" className="page-arrow disabled"><Icons.ChevronLeft size={14} /></button>
              <button type="button" className="page-number active">1</button>
              <button type="button" className="page-number">2</button>
              <button type="button" className="page-number">3</button>
              <button type="button" className="page-arrow"><Icons.ChevronRight size={14} /></button>
            </div>
          </div>
        </section>

        <section className="settings-panel-card">
          <div className="settings-panel-head split">
            <h2>User Roles &amp; Access Control</h2>
            <button type="button" className="settings-add-role-btn">
              <Icons.Plus size={14} />
              <span>Add Role</span>
            </button>
          </div>

          <div className="settings-role-table-wrap">
            <table className="settings-role-table">
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Access Level</th>
                  <th>Users</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {roleRows.map((row) => (
                  <tr key={row.role}>
                    <td>
                      <div className="role-cell">
                        <span className={`role-icon ${row.badge}`}><Icons.UserRoundCog size={14} /></span>
                        <div>
                          <strong>{row.role}</strong>
                          <small>{row.description}</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className={`access-pill ${row.badge}`}>{row.access}</span>
                    </td>
                    <td>
                      <span className="user-count">{row.users}</span>
                    </td>
                    <td>
                      <button type="button" className="settings-menu-btn" aria-label={`Action for ${row.role}`}>
                        <Icons.MoreVertical size={15} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <div className="settings-note-banner">
        <Icons.ShieldAlert size={15} />
        <span>Roles define what users can see and do in the system. Manage permissions to ensure data security.</span>
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <>
      <PageTitle eyebrow="15. Patient Timeline / Clinical History" title="Clinical timeline" action="＋ Add Note" />
      <Card title="John Doe — complete history">
        <div className="big-timeline">
          {[
            ['01 May 2026', 'Consultation', 'Consultation Summary', 'Follow-up visit. Complaints of itching and redness.'],
            ['30 Apr 2026', 'Lab Report', 'CBC, LFT', 'Results reviewed.'],
            ['29 Apr 2026', 'Prescription', '4 Medicines', 'Cetirizine 10mg, Hydrocortisone cream, Moisturizer'],
            ['20 Apr 2026', 'Consultation', 'Dermatology', 'Atopic Dermatitis (Mild)'],
            ['15 Apr 2026', 'Lab Report', 'Hb, Vitamin D', 'Results reviewed.']
          ].map(x => (
            <div className="event" key={x[0]}>
              <div className="dot" />
              <time>{x[0]}</time>
              <b>{x[1]}</b>
              <strong>{x[2]}</strong>
              <p>{x[3]}</p>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

function Filters({ notify }) {
  return (
    <>
      <PageTitle eyebrow="16. Patient Search & Filters" title="Advanced patient search" />
      <Card title="Search & Filters">
        <div className="filter-grid">
          {['Patient Name, Phone, MRN', 'Age From', 'Age To', 'Gender', 'Last Visit', 'Specialty', 'Status', 'Sort By'].map((x, i) => (
            <label key={x}>
              <span>{x}</span>
              {['Gender', 'Specialty', 'Status', 'Sort By'].includes(x) ? <select><option>All</option><option>Female</option><option>Male</option></select> : <input placeholder={x === 'Last Visit' ? 'Select Date' : 'Enter...'} />}
            </label>
          ))}
        </div>
        <div className="actions">
          <button className="outline">Reset</button>
          <button className="primary" onClick={() => notify('Filters applied')}>Apply Filters</button>
        </div>
      </Card>
      <Card title="Recent Searches">
        <div className="recent">
          {patients.slice(0, 5).map(p => (
            <button key={p.id} onClick={() => notify(`Selected ${p.name}`)}>{p.name}<span>{p.id}</span></button>
          ))}
        </div>
      </Card>
    </>
  );
}

function Inventory() {
  return (
    <div className="inventory-page">
      <div className="inventory-header-row">
        <div className="inventory-header-copy">
          <div className="eyebrow">Pharmacy &amp; Medical Supplies Control</div>
          <h1>Inventory Management</h1>
          <p>Track, manage and update your medical supply inventory in real-time.</p>
        </div>
        <button className="inventory-primary-btn" type="button">＋ Add Inventory Stock</button>
      </div>

      <div className="inventory-summary-grid">
        <div className="inventory-summary-card">
          <div className="inventory-summary-icon inventory-summary-blue">
            <Icons.Package size={20} />
          </div>
          <div className="inventory-summary-copy">
            <label>Total Items</label>
            <strong>1,420</strong>
            <span>Active stock</span>
          </div>
        </div>

        <div className="inventory-summary-card">
          <div className="inventory-summary-icon inventory-summary-orange">
            <Icons.AlertTriangle size={20} />
          </div>
          <div className="inventory-summary-copy">
            <label>Low Stock Alerts</label>
            <strong>02</strong>
            <span>Reorder required</span>
          </div>
        </div>

        <div className="inventory-summary-card">
          <div className="inventory-summary-icon inventory-summary-green">
            <Icons.IndianRupee size={20} />
          </div>
          <div className="inventory-summary-copy">
            <label>Total Stock Value</label>
            <strong>₹ 1,48,500</strong>
            <span>Estimated</span>
          </div>
        </div>

        <div className="inventory-summary-card">
          <div className="inventory-summary-icon inventory-summary-purple">
            <Icons.Clock3 size={20} />
          </div>
          <div className="inventory-summary-copy">
            <label>Expiring Soon</label>
            <strong>04</strong>
            <span>Next 30 days</span>
          </div>
        </div>
      </div>

      <section className="inventory-table-panel">
        <div className="inventory-panel-header">
          <h2>Medical Inventory Stock</h2>
        </div>

        <div className="inventory-toolbar">
          <div className="inventory-search-box">
            <Icons.Search size={15} />
            <input type="text" placeholder="Search inventory by item name or code..." />
          </div>

          <button type="button" className="inventory-status-filter">
            <Icons.Filter size={15} />
            <span>All Categories</span>
          </button>

          <button type="button" className="inventory-export-btn">
            <Icons.Download size={15} />
            <span>Export CSV</span>
          </button>
        </div>

        <div className="inventory-table-wrap">
          <table className="inventory-table">
            <thead>
              <tr>
                <th>Item Code</th>
                <th>Item Name</th>
                <th>Category</th>
                <th>Stock Quantity</th>
                <th>Unit</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventoryStock.map((item) => (
                <tr key={item.code}>
                  <td>{item.code}</td>
                  <td className="inventory-item-name-wrap">
                    <span className="inventory-item-badge"><Icons.Package2 size={13} /></span>
                    <span>{item.name}</span>
                  </td>
                  <td>
                    <span className="inventory-category-pill">{item.category}</span>
                  </td>
                  <td>{item.quantity.toLocaleString()}</td>
                  <td>{item.unit}</td>
                  <td>
                    <span className={`inventory-status-pill ${item.status === 'Low Stock' ? 'warning' : 'success'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="inventory-actions-cell">
                    <button type="button" aria-label={`Menu for ${item.code}`} className="inventory-menu-btn">
                      <Icons.MoreVertical size={15} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="inventory-footer">
          <span>Showing 1 to 6 of 6 items</span>
          <div className="inventory-pagination">
            <button type="button" className="inventory-page-btn inactive" aria-label="Previous page">
              <Icons.ChevronLeft size={14} />
            </button>
            <button type="button" className="inventory-page-btn active">1</button>
            <button type="button" className="inventory-page-btn" aria-label="Next page">
              <Icons.ChevronRight size={14} />
            </button>
          </div>
          <button type="button" className="inventory-draft-btn">Save as Draft</button>
        </div>
      </section>
    </div>
  );
}

function AppShell() { return <App />; }
function Root() { return <AppShell />; }
createRoot(document.getElementById('root')).render(<Root />);
