import React from 'react';
import pelvisImg from '../assets/pelvis_anatomy.png';

const Syllabus: React.FC = () => {
  const units = [
    {
      unit: 'יחידה 1',
      lessons: 'שיעורים 1-4',
      title: 'מבוא כללי וקרסול',
      description: 'מבוא לקינזיולוגיה ולמושגי יסוד. אבחון ויזואלי ויציבתי ותרגול בדיקות שריר עקרוניות ומתקדמות. צלילה למבנה הקרסול, כולל פתולוגיות כגון דורבן (Plantar Fasciitis) ובעיות גיד אכילס.'
    },
    {
      unit: 'יחידה 2',
      lessons: 'שיעורים 5-8',
      title: 'אגן, ירך וברך',
      description: 'אנטומיה מתקדמת של האגן והגפיים התחתונות. בדיקות שריר ספציפיות, טיפול בבעיות נפוצות בירך ובברך, והמשמעות המבנית של חוסר איזון באגן.'
    },
    {
      unit: 'יחידה 3',
      lessons: 'שיעורים 9-13',
      title: 'כתף, צוואר, ידיים וסרעפת',
      description: 'מערכת הקשרים (Interrelations) בין הכתף והצוואר לגפיים העליונות והסרעפת. אבחון וטיפול בבעיות כמו כתף קפואה (Frozen Shoulder), תעלת כף היד (Carpal Tunnel) ומיגרנות.'
    },
    {
      unit: 'יחידה 4',
      lessons: 'שיעורים 14-18',
      title: 'הגוף כמערכת גלובלית (Anatomical Chains)',
      description: 'חקר שרשראות אנטומיות / רכבות אנטומיות כגון: Deep Front Line, Superficial Back Line, Lateral Line. סינתזה של כל האבחונים לבניית פרוטוקול טיפול אינטגרטיבי, מבדקים ומבחנים מעשיים מסכמים.'
    }
  ];

  return (
    <section className="section section-bg-gray" id="syllabus">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ color: 'var(--accent-primary)' }}>סילבוס הקורס (18 מפגשים)</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>הקורס מחולק ל-4 יחידות תוכן מרכזיות המקיפות את הגוף כולו.</p>
        </div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))', gap: '5rem', alignItems: 'start' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {units.map((unit, idx) => (
              <div key={idx} style={{ 
                backgroundColor: 'var(--bg-primary)', 
                padding: '2rem', 
                borderRadius: 'var(--radius-md)', 
                borderRight: '4px solid var(--accent-primary)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem', marginBottom: '1rem' }}>
                  <h3 style={{ margin: 0 }}>{unit.unit}: {unit.title}</h3>
                  <span style={{ backgroundColor: 'var(--accent-secondary-bone)', padding: '4px 12px', borderRadius: 'var(--radius-lg)', fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                    {unit.lessons}
                  </span>
                </div>
                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{unit.description}</p>
              </div>
            ))}
          </div>

          <div style={{ position: 'sticky', top: '2rem' }}>
            <div style={{ padding: '1rem', backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
              <img src={pelvisImg} alt="מערכת השרירים - אגן וירך" style={{ borderRadius: 'var(--radius-md)', width: '100%' }} />
              <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                למידת אנטומיה תלת ממדית עמוקה (יחידה 2)
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Syllabus;
