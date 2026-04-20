import React, { useState } from 'react';

const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', date: '', notes: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("https://formsubmit.co/ajax/medisclinic20@gmail.com", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...formData, _subject: `בקשה לתור חדש - ${formData.name}` })
      });
      alert('תודה! פרטיך התקבלו. נחזור אליך בהקדם לקביעת התור.');
      setFormData({ name: '', phone: '', email: '', date: '', notes: '' });
    } catch {
      alert('אירעה שגיאה בשליחת הטופס. אנא נסה ליצור קשר טלפוני.');
    }
    setIsSubmitting(false);
  };

  return (
    <section className="section section-bg-primary" id="appointment">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ color: 'var(--accent-primary)' }}>קביעת תור לטיפול</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            מלאו את הפרטים וננציג מטעמנו יחזור אליכם בהקדם לתיאום מועד נוח.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="form-wrap">
          <div className="form-row">
            <div className="field-group">
              <label htmlFor="name">שם מלא *</label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
            </div>
            <div className="field-group">
              <label htmlFor="phone">טלפון נייד *</label>
              <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="field-group">
              <label htmlFor="email">דואר אלקטרוני</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="field-group">
              <label htmlFor="date">תאריך מועדף לטיפול</label>
              <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="notes">סיבת הפנייה / בעיה רפואית</label>
            <textarea id="notes" name="notes" rows={4} value={formData.notes} onChange={handleChange} style={{ resize: 'vertical' }} />
          </div>

          <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', opacity: isSubmitting ? 0.7 : 1 }}>
            {isSubmitting ? 'שולח...' : 'בקש תור'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;
