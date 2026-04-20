const Treatments = () => {
  const treatments = [
    {
      title: 'שיפור יכולות גופניות',
      desc: 'הקינזיולוגיה היישומית מאפשרת לשפר את היכולת הגופנית דרך גישה הוליסטית המחברת בין גוף, חומר ונפש.',
      img: 'https://medisclinic.co.il/wp-content/uploads/סוגי-טיפול-שיפור-יכולות.jpg'
    },
    {
      title: 'שיקום בעיות ופציעות אורטופדיות: הדרך לחזרה לתפקוד מלא',
      desc: 'שיקום נכון ואפקטיבי יכול לשפר משמעותית את התוצאות, להפחית כאב, להחזיר את טווח התנועה ולמנוע בעיות חוזרות.',
      img: 'https://medisclinic.co.il/wp-content/uploads/סוגי-טיפול-פציעות-אורטופדיות.jpg'
    },
    {
      title: 'קרניו-סקראל',
      desc: 'טיפול קרניו-סקראל מתמקד במערכת הקרניו-סקראלית, הכוללת את עצמות הגולגולת, עמוד השדרה, עצם הזנב וקרומי המוח העוטפים.',
      img: 'https://medisclinic.co.il/wp-content/uploads/סוגי-טיפול-קרניו-סאקרל.jpg'
    },
    {
      title: 'טיפול באיברים פנימיים',
      desc: 'טיפול באיברים פנימיים מתייחס למגוון שיטות וטכניקות שנועדו לשפר את תפקוד האיברים הפנימיים של הגוף, כגון מערכת העיכול, מערכת הנשימה והכבד.',
      img: 'https://medisclinic.co.il/wp-content/uploads/סוגי-טיפול-איברים-פנימיים.jpg'
    },
    {
      title: 'טיפול TMJ במפרק הלסת',
      desc: 'הטיפול כולל מגוון טכניקות שמטרתן לשפר את תנועתיות המפרק, להפחית כאב ולשחרר את המתח המצטבר בלסת ובשרירים סביבה.',
      img: 'https://medisclinic.co.il/wp-content/uploads/TMJ-פוסט-תמונת-נושא-חדש.webp'
    },
    {
      title: 'טיפולים ושיקום לאחר ניתוחים אורטופדים',
      desc: 'שלב נרטיבי לאחר ניתוח אורטופדי. תהליך ההחלמה והשיקום מהווה צעד קריטי בדרך חזרה לתפקוד מלא.',
      img: 'https://medisclinic.co.il/wp-content/uploads/סוגי-טיפול-שיקום.jpg'
    }
  ];

  return (
    <main style={{ padding: '4rem 0', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h1 style={{ color: 'var(--text-primary)', fontSize: '3rem' }}>סוגי הטיפול בקליניקה</h1>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--accent-primary)', margin: '0 auto' }}></div>
        </div>

        {/* Spacious Grid Layout as requested */}
        <div className="grid" style={{ 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', 
          columnGap: '4rem', 
          rowGap: '6rem' 
        }}>
          {treatments.map((treatment, idx) => (
            <div key={idx} style={{ 
              backgroundColor: 'var(--bg-primary)', 
              borderRadius: '24px', 
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform var(--transition-normal)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ height: '240px', overflow: 'hidden' }}>
                <img 
                  src={treatment.img} 
                  alt={treatment.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '2.5rem 2rem', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '1rem', minHeight: '60px' }}>
                  {treatment.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem', flex: 1 }}>
                  {treatment.desc}
                </p>
                <button className="btn" style={{ 
                  backgroundColor: 'transparent', 
                  color: 'var(--accent-secondary-teal)', 
                  fontWeight: 700, 
                  fontSize: '0.9rem',
                  letterSpacing: '1px',
                  padding: 0
                }}>
                  קרא עוד &gt;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Treatments;
