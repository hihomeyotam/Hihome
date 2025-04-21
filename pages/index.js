
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>HiHome - מצא בית בקלות</title>
        <meta name="description" content="HiHome - פלטפורמה חכמה ואמינה לנדל"ן בישראל" />
      </Head>
      <div style={{
        background: 'linear-gradient(to right, #f0f4f8, #ffffff)',
        minHeight: '100vh',
        padding: '5vh 2rem',
        fontFamily: 'sans-serif',
        direction: 'rtl',
        textAlign: 'right'
      }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1e3a8a' }}>ברוכים הבאים ל-HiHome</h1>
        <p style={{ fontSize: '1.2rem', color: '#475569' }}>
          פורטל נדל"ן חדשני, אמין ומותאם לשוק הישראלי.
        </p>
        <div style={{ margin: '2rem 0' }}>
          <input type="text" placeholder="הקלד עיר, שכונה או רחוב..." style={{
            padding: '1rem',
            fontSize: '1rem',
            width: '100%',
            maxWidth: '500px',
            border: '1px solid #cbd5e1',
            borderRadius: '8px'
          }} />
        </div>
        <div>
          <img src="/realestate1.png" alt="תמונה של פרויקט נדל"ן" width="400" />
        </div>
      </div>
    </>
  );
}
