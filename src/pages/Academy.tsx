const Academy = () => {
  return (
    <main>
      {/* Academy Hero Banner */}
      <section style={{ 
        position: 'relative', 
        height: '60vh', 
        minHeight: '400px',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(rgba(33, 31, 31, 0.6), rgba(33, 31, 31, 0.6)), url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <h1 style={{ 
          color: 'white', 
          fontSize: '4.5rem', 
          letterSpacing: '4px', 
          textAlign: 'center',
          textShadow: '0 4px 12px rgba(0,0,0,0.5)',
          fontFamily: 'var(--font-primary)'
        }}>
          מדיס אקדמי
        </h1>
      </section>

      {/* Intro Text */}
      <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-primary)', lineHeight: '1.8', fontWeight: 500, marginBottom: '2rem' }}>
            קובי מעביר סדנאות מקצועיות, חווייתיות ומקצועיות בתחום הקינסיולוגיה היישומית.<br />
            ההרצאות והסדנאות מותאמות לקהל היעד.<br />
            קורס קינסיולוגיה משלב בתוכו תיאוריה עם התנסות מעשית, ונוגע במגוון רחב של תחומים אשר קשורים לתנועה ולאופן בו הגוף שלנו פועל.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            מעבר לידע המרתק, קורס קינסיולוגיה טומן בחובו יתרונות רבים כמו: פתיחת אפשרויות קריירה חדשות, שיפור הבריאות האישית, יכולת לסייע לאחרים, פיתוח של חשיבה ביקורתית ועוד.<br />
            כמובן, שבכדי ליהנות מכל התועלות של קורס זה, קיימת חשיבות גבוהה לבחור בתבונה את המסגרת המתאימה. כזו גם את הקורס הנכון.<br />
            למי מיועד הקורס? לכל המעוניין בכלי מדהים לאבחון ולטיפול.<br />
            תעודה- סטודנטים אשר יסיימו בהצלחה את הקורס יקבלו תעודת סיום.
          </p>
        </div>
      </section>

      {/* Image Gallery mimicking the screenshot */}
      <section style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: '6rem' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ height: '500px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" alt="Manual Therapy Treatment" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ height: '500px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80" alt="Osteopathy Neck Adjustments" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ height: '500px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" alt="Massage and Bodywork" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Academy;
