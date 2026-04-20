const Treatments = () => {
  const treatments = [
    {
      title: 'שיפור יכולות גופניות',
      desc: 'הקינזיולוגיה היישומית מאפשרת לשפר את היכולת הגופנית דרך גישה הוליסטית המחברת בין גוף, חומר ונפש.',
      img: 'https://medisclinic.co.il/wp-content/uploads/סוגי-טיפול-שיפור-יכולות.jpg'
    },
    {
      title: 'שיקום בעיות ופציעות אורטופדיות',
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
      desc: 'טיפול באיברים פנימיים מתייחס למגוון שיטות וטכניקות שנועדו לשפר את תפקוד האיברים הפנימיים של הגוף.',
      img: 'https://medisclinic.co.il/wp-content/uploads/סוגי-טיפול-איברים-פנימיים.jpg'
    },
    {
      title: 'טיפול TMJ במפרק הלסת',
      desc: 'הטיפול כולל מגוון טכניקות שמטרתן לשפר את תנועתיות המפרק, להפחית כאב ולשחרר את המתח המצטבר בלסת ובשרירים סביבה.',
      img: 'https://medisclinic.co.il/wp-content/uploads/TMJ-פוסט-תמונת-נושא-חדש.webp'
    },
    {
      title: 'טיפולים ושיקום לאחר ניתוחים אורטופדים',
      desc: 'תהליך ההחלמה והשיקום מהווה צעד קריטי בדרך חזרה לתפקוד מלא לאחר ניתוח אורטופדי.',
      img: 'https://medisclinic.co.il/wp-content/uploads/סוגי-טיפול-שיקום.jpg'
    }
  ];

  return (
    <main style={{ padding: '4rem 0', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ color: 'var(--text-primary)' }}>סוגי הטיפול בקליניקה</h1>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--accent-primary)', margin: '1rem auto 0' }} />
        </div>

        <div className="treatments-grid">
          {treatments.map((treatment, idx) => (
            <div key={idx}
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.07)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform var(--transition-normal)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img
                  src={treatment.img}
                  alt={treatment.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                  {treatment.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', flex: 1 }}>
                  {treatment.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Treatments;
