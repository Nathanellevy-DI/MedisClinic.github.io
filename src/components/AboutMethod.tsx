import React from 'react';
import triangleImg from '../assets/minimal_triangle.png';

const AboutMethod: React.FC = () => {
  return (
    <section className="section section-bg-secondary" id="about">
      <div className="container about-grid">

        <div>
          <h2 style={{ marginBottom: '1.5rem', fontWeight: 500 }}>
            על השיטה: <span style={{ color: 'var(--accent-primary)', fontStyle: 'italic' }}>קינזיולוגיה יישומית</span>
          </h2>
          <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            קינזיולוגיה יישומית היא שיטת האבחון והטיפול היחידה שמתמקדת <strong>בהחזרת הבריאות למטופל</strong>, במקום טיפול נקודתי בסימפטומים.
          </p>
          <p style={{ color: 'var(--text-secondary)' }}>
            השיטה בוחנת כיצד הגוף ומערכת העצבים מגיבים לגירויים חיצוניים ופנימיים על ידי שילוב של שלושה היבטים מרכזיים (משולש הבריאות):
          </p>
          <ul style={{ listStyleType: 'none', padding: 0, marginTop: '2.5rem' }}>
            {[
              { title: 'מבני (Structural)', desc: 'בסיס האבחון והקורס שלנו – מפרקים, שרירים, ושלד.' },
              { title: 'כימי (Chemical)', desc: 'תזונה, עיכול ואספקת דם נאותה.' },
              { title: 'מנטלי (Mental)', desc: 'מתחים נפשיים, רגשות ודפוסי חשיבה.' }
            ].map((item, idx) => (
              <li key={idx} style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--accent-primary)', color: 'var(--accent-primary)', width: '40px', height: '40px', minWidth: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', fontWeight: 400 }}>
                  {idx + 1}
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0', fontWeight: 500, fontSize: '1.1rem' }}>{item.title}</h4>
                  <p style={{ margin: 0, fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 300 }}>{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="about-image-wrap">
          <img
            src={triangleImg}
            alt="משולש הבריאות - קינזיולוגיה יישומית"
            style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', width: '100%' }}
          />
        </div>

      </div>
    </section>
  );
};

export default AboutMethod;
