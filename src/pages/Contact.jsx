import React, { useState } from 'react'

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
      <div className="layout">
        {/* LEFT */}
        <div className="left">
          <span className="section-tag">✦ Get In Touch</span>
          <h1 className="title">We'd Love to<br />Hear From You</h1>
          <p className="desc">
            Questions, custom orders, partnerships — our team is ready to help. Expect a reply within 24 hours.
          </p>
          {info.map(i => (
            <div className="infoItem" key={i.title}>
              <div className="infoIcon">{i.icon}</div>
              <div>
                <div className="infoTitle">{i.title}</div>
                <div className="infoVal" style={{ whiteSpace: 'pre-line' }}>{i.val}</div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="right">
          <h2 className="formTitle">Send a Message</h2>
          {sent && (
            <div className="success">
              ✅ Message sent! We'll be in touch shortly.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="group">
                <label className="label">First Name</label>
                <input className="input" type="text" placeholder="Your Name" required />
              </div>
              <div className="group">
                <label className="label">Last Name</label>
                <input className="input" type="text" placeholder="Your Username" required />
              </div>
            </div>
            <div className="group">
              <label className="label">Email</label>
              <input className="input" type="email" placeholder="Your Email" required />
            </div>
            <div className="group">
              <label className="label">Subject</label>
              <select className="input">
                <option>General Enquiry</option>
                <option>Order Support</option>
                <option>Custom Order</option>
                <option>Partnership</option>
                <option>Press</option>
              </select>
            </div>
            <div className="group">
              <label className="label">Message</label>
              <textarea className="textarea" placeholder="Tell us how we can help..." required />
            </div>
            <button type="submit" className="submit">Send Message →</button>
          </form>
        </div>
      </div>
    </div>
  )
}
