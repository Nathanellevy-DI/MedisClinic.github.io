import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import Academy from './pages/Academy';
import Appointment from './pages/Appointment';

const MedisLogo = () => (
  <img 
    src="https://medisclinic.co.il/wp-content/uploads/medis-web-logo.webp" 
    alt="Medis Clinic" 
    style={{ height: '50px', width: 'auto', display: 'block' }} 
  />
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div style={{ width: '100%' }}>
      <ScrollToTop />
      <header style={{ 
        backgroundColor: 'var(--bg-primary)', 
        padding: '0.5rem 0', 
        borderBottom: '1px solid var(--border-light)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <MedisLogo />
          </Link>
          <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
            <nav style={{ display: 'flex', gap: '2rem' }}>
              <Link to="/" style={{ color: 'var(--text-primary)', fontWeight: 500, display: 'flex', alignItems: 'center' }}>הקליניקה</Link>
              <Link to="/treatments" style={{ color: 'var(--text-primary)', fontWeight: 500, display: 'flex', alignItems: 'center' }}>סוגי טיפול</Link>
              <Link to="/academy" style={{ color: 'var(--text-primary)', fontWeight: 500, display: 'flex', alignItems: 'center' }}>מדיס אקדמי</Link>
            </nav>
            <Link to="/appointment" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
              קביעת תור
            </Link>
          </div>
        </div>
      </header>

      <div style={{ minHeight: '60vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </div>

      <footer style={{ backgroundColor: 'var(--text-primary)', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>מוכנים להתחיל את המסע?</h2>
          <p style={{ opacity: 0.8, marginBottom: '2rem', fontSize: '1.2rem' }}>
            בריאות טובה מורכבת מתנועה ועבודה נכונה עם הגוף, תזונה בריאה ומאוזנת, ורפואה טבעית.
          </p>
          <p style={{ opacity: 0.8, marginBottom: '3rem', fontSize: '1.2rem', direction: 'ltr' }}>
            📞 052-811-8811 | מרכז הספורט הירושלמי, אצטדיון טדי
          </p>
          <div style={{ marginTop: '3rem', fontSize: '0.875rem', opacity: 0.5, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
            © {new Date().getFullYear()} Medis Clinic. כל הזכויות שמורות.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
