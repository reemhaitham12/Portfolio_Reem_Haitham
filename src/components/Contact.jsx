import React, { useContext, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { content } from '../data/content';

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const text = content[language].contact;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Message from Portfolio: ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    // Using window.open to keep the portfolio page open
    window.open(`mailto:reemhaitham69@gmail.com?subject=${subject}&body=${body}`, '_blank');
    
    // Provide feedback
    alert(language === 'ar' ? 'سيعمل المتصفح الآن على فتح تطبيق البريد الخاص بك لإرسال الرسالة.' : 'Opening your email client to send the message...');
    
    // Clear form data
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="container reveal">
        <h2 className="section-title">{text.title}</h2>
        
        <div style={wrapperStyle}>
          <div style={formWrapperStyle}>
            <form style={formStyle} onSubmit={handleSubmit}>
              <div style={inputGroupStyle}>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder={text.form.name} required style={inputStyle} />
              </div>
              <div style={inputGroupStyle}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder={text.form.email} required style={inputStyle} />
              </div>
              <div style={inputGroupStyle}>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder={text.form.message} required rows="5" style={inputStyle}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
                {text.form.send}
              </button>
            </form>
          </div>
          
          <div style={infoWrapperStyle}>
            <h3 style={infoTitleStyle}>{text.title}</h3>
            <p style={{marginBottom: '2rem', color: 'var(--text-muted)'}}>
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
            <div style={socialLinksStyle}>
              {text.info.social
                .filter(s => ["LinkedIn", "GitHub", "WhatsApp", "Gmail"].includes(s.name))
                .map((social, i) => (
                <a key={i} href={social.link} target="_blank" rel="noreferrer" style={linkStyle} className="hover-card social-link-item">
                  <i className={`${social.icon}`} style={{ marginInlineEnd: '0.75rem', fontSize: '1.4rem', color: 'var(--accent)' }}></i>
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const wrapperStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '4rem',
  justifyContent: 'space-between',
  marginTop: '3rem'
};

const formWrapperStyle = {
  flex: '1 1 500px',
  backgroundColor: 'var(--background)',
  padding: '3rem',
  borderRadius: '1rem',
  boxShadow: 'var(--shadow)',
  border: '1px solid var(--border-color)'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
};

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column'
};

const inputStyle = {
  padding: '1rem',
  borderRadius: '0.5rem',
  border: '1px solid var(--border-color)',
  backgroundColor: 'var(--card-bg)',
  color: 'var(--text)',
  fontFamily: 'inherit',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.3s ease'
};

const infoWrapperStyle = {
  flex: '1 1 300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

const infoTitleStyle = {
  fontSize: '1.8rem',
  color: 'var(--text)',
  marginBottom: '1rem'
};

const socialLinksStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
  gap: '1rem'
};

const linkStyle = {
  padding: '1rem',
  backgroundColor: 'var(--background)',
  border: '1px solid var(--border-color)',
  borderRadius: '0.5rem',
  color: 'var(--text)',
  textAlign: 'center',
  fontWeight: '500',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export default Contact;
