const topics = [
  {
    number: '01',
    title: 'Payment pending',
    description: 'Your payment is still processing or has not reached its final status.',
  },
  {
    number: '02',
    title: 'Payment declined',
    description: 'Your bank or card provider did not approve the transaction.',
  },
  {
    number: '03',
    title: 'Unknown charge',
    description: 'You see a payment you do not recognize on your statement.',
  },
  {
    number: '04',
    title: 'Refunds & returns',
    description: 'You are waiting for a refund or need help understanding its timing.',
  },
]

function ArrowMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" fill="none">
      <path d="M3 9h11M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MessageIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M5.5 17.5 4 21l4.3-2.05c.72.2 1.48.3 2.27.3 4.66 0 8.43-3.28 8.43-7.32S15.23 4.6 10.57 4.6 2.14 7.88 2.14 11.93c0 2.16 1.28 4.14 3.36 5.57Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7.6 11.9h.01M10.55 11.9h.01M13.5 11.9h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

export default function Page() {
  return (
    <main className="support-page">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header">
        <div className="brand-lockup" aria-label="Zelle support">
          <img className="brand-logo" src="/zelle-logo.png" alt="Zelle" />
          <span className="brand-divider" aria-hidden="true" />
          <span className="brand-section">support</span>
        </div>
        <div className="status-pill"><span className="status-dot" /> Support is online</div>
      </header>

      <section className="hero" aria-labelledby="page-title">
        <div className="eyebrow"><span className="eyebrow-line" /> payment support <span className="eyebrow-line" /></div>
        <h1 id="page-title">Let&apos;s get your<br /><em>payment</em> sorted.</h1>
        <p className="hero-copy">Whether a payment is stuck, declined, or just looks unfamiliar, our team is here to help you move forward.</p>
        <div className="availability"><span className="availability-icon"><MessageIcon /></span><span><strong>Real people, ready to help</strong><small>Usually replies in under 5 minutes</small></span></div>
      </section>

      <section className="content-wrap" aria-labelledby="topics-title">
        <div className="section-heading">
          <div><span className="mini-label">START HERE</span><h2 id="topics-title">What can we help with?</h2></div>
          <p>Choose the closest match so we can point you in the right direction.</p>
        </div>
        <div className="topic-grid">
          {topics.map((topic) => (
            <article className="topic-card" key={topic.number}>
              <span className="topic-number">{topic.number}</span>
              <div><h3>{topic.title}</h3><p>{topic.description}</p></div>
              <span className="card-arrow"><ArrowMark /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-card" aria-labelledby="contact-title">
        <div className="contact-mark"><MessageIcon /></div>
        <div><span className="mini-label light-label">NEED A HUMAN?</span><h2 id="contact-title">Chat with our support team</h2><p>Tell us what happened and include your payment reference if you have it. We&apos;ll take it from there.</p></div>
        <div className="chat-note"><span className="status-dot light-dot" /> Chat is available now</div>
      </section>

      <footer className="site-footer"><span className="footer-brand"><img src="/zelle-logo.png" alt="Zelle" /> <span>© 2025</span></span><span>Secure payments. Human support.</span><span>Payments made clearer.</span></footer>

      <script dangerouslySetInnerHTML={{ __html: `var _smartsupp = _smartsupp || {}; _smartsupp.key = '5810835dc57a7d03f78c4bebe36390bc6aeb6e88'; window.smartsupp||(function(d) { var s,c,o=window.smartsupp=function(){ o._.push(arguments)};o._=[]; s=d.getElementsByTagName('script')[0]; c=d.createElement('script'); c.type='text/javascript'; c.charset='utf-8'; c.async=true; c.src='https://www.smartsuppchat.com/loader.js?'; s.parentNode.insertBefore(c,s); })(document);` }} />
    </main>
  )
}
