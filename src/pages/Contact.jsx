import React, { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    e.target.reset()
    setTimeout(() => setSent(false), 5000)
  }

  const info = [
    { icon: '📍', title: 'Visit Us', val: '2002st, SenSok\nPhnom Penh, Cambodia' },
    { icon: '📞', title: 'Call Us', val: '+855 126-214-43\nMon – Sat: 9am – 7pm' },
    { icon: '✉️', title: 'Email Us', val: 'Theviz@shoesshop.com\nsupport@thevizfootwear.com' },
  ]

  return (
    <div className="page">
      <div className={styles.layout}>
        {/* LEFT */}
        <div className={styles.left}>
          <span className="section-tag">✦ Get In Touch</span>
          <h1 className={styles.title}>We'd Love to<br />Hear From You</h1>
          <p className={styles.desc}>
            Questions, custom orders, partnerships — our team is ready to help. Expect a reply within 24 hours.
          </p>
          {info.map(i => (
            <div className={styles.infoItem} key={i.title}>
              <div className={styles.infoIcon}>{i.icon}</div>
              <div>
                <div className={styles.infoTitle}>{i.title}</div>
                <div className={styles.infoVal} style={{ whiteSpace: 'pre-line' }}>{i.val}</div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <h2 className={styles.formTitle}>Send a Message</h2>
          {sent && (
            <div className={styles.success}>
              ✅ Message sent! We'll be in touch shortly.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.group}>
                <label className={styles.label}>First Name</label>
                <input className={styles.input} type="text" placeholder="Your Name" required />
              </div>
              <div className={styles.group}>
                <label className={styles.label}>Last Name</label>
                <input className={styles.input} type="text" placeholder="Your Username" required />
              </div>
            </div>
            <div className={styles.group}>
              <label className={styles.label}>Email</label>
              <input className={styles.input} type="email" placeholder="Your Email" required />
            </div>
            <div className={styles.group}>
              <label className={styles.label}>Subject</label>
              <select className={styles.input}>
                <option>General Enquiry</option>
                <option>Order Support</option>
                <option>Custom Order</option>
                <option>Partnership</option>
                <option>Press</option>
              </select>
            </div>
            <div className={styles.group}>
              <label className={styles.label}>Message</label>
              <textarea className={styles.textarea} placeholder="Tell us how we can help..." required />
            </div>
            <button type="submit" className={styles.submit}>Send Message →</button>
          </form>
        </div>
      </div>
    </div>
  )
}
