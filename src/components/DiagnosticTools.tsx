import React from 'react';
import { Eye, Activity, Target } from 'lucide-react';
import neuralReflexImg from '../assets/neural_reflex_arc.png';

const DiagnosticTools: React.FC = () => {
  const tools = [
    {
      icon: <Eye size={28} color="white" />,
      title: 'הסתכלות ראשונית, 4 שלבים:',
      desc: 'אבחון ויזואלי של יציבת המטופל, כולל הסתכלות בהליכה, בחינת נפילות, ובדיקת צעד (Step test) לאיתור חוסר תקינות תנועתי.'
    },
    {
      icon: <Activity size={28} color="white" />,
      title: 'בדיקת שריר (Stretch Reflex)',
      desc: 'בדיקת כוח השריר כנגד התנגדות. הבדיקה מעריכה את יכולתה של מערכת העצבים להתמודד עם עומסים דרך מנגנון רפלקס המתיחה.'
    },
    {
      icon: <Target size={28} color="white" />,
      title: 'אבחנה מבדלת',
      desc: 'יכולת למצוא את המקור המדויק לכאב על ידי הבדלה ובידוד בין גורמים כמו נקודות טריגר, פאשיה, רצועות, מפרקים, ונקודות מאחז.'
    }
  ];

  return (
    <section className="section section-bg-primary" id="tools">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--accent-primary)' }}>כלים אבחוניים מרכזיים</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            ארגז הכלים המעשי הנלמד בקורס מאפשר זיהוי מדויק ויעיל של גורמי הכאב.
          </p>
        </div>

        <div className="tools-cards-grid">
          {tools.map((tool, idx) => (
            <div key={idx} style={{
              backgroundColor: 'var(--bg-secondary)',
              padding: '2rem',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-sm)',
              borderTop: '4px solid var(--accent-primary)'
            }}>
              <div style={{
                backgroundColor: 'var(--accent-primary)',
                width: '56px', height: '56px',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                {tool.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{tool.title}</h3>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{tool.desc}</p>
            </div>
          ))}
        </div>

        <div className="tools-reflex-grid">
          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>הבנת רפלקס המתיחה</h3>
            <p>
              אנו לא בודקים רק את "כוח" השריר, אלא את <strong>התגובה העצבית</strong> שלו. תרשים זה ממחיש את המסלול העצבי של רפלקס המתיחה (Stretch Reflex) המהווה בסיס באבחון בעיות מבניות.
            </p>
          </div>
          <div>
            <img src={neuralReflexImg} alt="רפלקס המתיחה ומסלול עצבי" style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', width: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticTools;
