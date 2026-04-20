import AppointmentForm from '../components/AppointmentForm';

const Appointment = () => {
  return (
    <main style={{ backgroundColor: 'var(--bg-secondary)', padding: '4rem 0', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ color: 'var(--text-primary)', fontSize: '3rem', marginBottom: '1rem' }}>תיאום טיפול חדש</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            מלאו את הפרטים מטה לבקשת תור ראשוני או המשך טיפול, ונציג מטעמנו יצור קשר בהקדם.
          </p>
        </div>
        
        {/* Render the reusable form component */}
        <AppointmentForm />
        
        <div style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-secondary)' }}>
          <p>זקוקים למענה מיידי?</p>
          <a href="tel:052-8118811" style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent-primary)', textDecoration: 'none' }}>052-811-8811</a>
        </div>
      </div>
    </main>
  );
};

export default Appointment;
