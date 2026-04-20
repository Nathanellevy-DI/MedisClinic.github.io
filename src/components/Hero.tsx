import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="hero-section section" id="hero">

      {/* Background Video */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden' }}>
        <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }}>
          <source src="https://medisclinic.co.il/wp-content/uploads/MEDIS-1.mov" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '150px', background: 'linear-gradient(to top, var(--bg-primary), transparent)' }} />
      </div>

      {/* Architectural line accents — hidden on mobile via inline opacity tied to width */}
      <div style={{ position: 'absolute', top: 0, left: '10%', width: '1px', height: '100%', backgroundColor: 'var(--border-light)', opacity: 0.5 }} />
      <div style={{ position: 'absolute', top: 0, right: '10%', width: '1px', height: '100%', backgroundColor: 'var(--border-light)', opacity: 0.5 }} />

      <div className="container hero-content">
        <p style={{ color: 'var(--accent-primary)', fontWeight: 500, marginBottom: '1.5rem', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
          Medis Clinic - High-End Care
        </p>

        <h1 style={{ marginBottom: '2rem', maxWidth: '900px', color: 'var(--text-primary)', textAlign: 'center' }}>
          לימודי קינזיולוגיה יישומית <br />
          <span style={{ color: 'var(--accent-primary)', fontStyle: 'italic', fontWeight: 400 }}>אבחון וטיפול מדויק</span>
        </h1>

        <h3 style={{ fontWeight: 300, color: 'var(--text-secondary)', marginBottom: '3rem', letterSpacing: '1px' }}>
          בהנחיית קובי אלמליח
        </h3>

        <blockquote className="hero-blockquote">
          "טפל עם ידיים שמרפאות, התבונן עם עיניים שרואות, הקשב עם אוזניים ששומעות."<br />
          <strong style={{ display: 'block', marginTop: '1rem', fontWeight: 500, fontSize: '0.9rem', color: 'var(--text-primary)' }}>— ג'ורג' גודהארט</strong>
        </blockquote>

        <div className="hero-buttons">
          <Link to="/appointment" className="btn btn-primary">קביעת תור</Link>
          <a href="#about" className="btn btn-outline" style={{ display: 'flex', gap: '0.5rem' }}>
            גלה את השיטה
            <ChevronDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
