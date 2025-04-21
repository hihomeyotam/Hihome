
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>HiHome - אתר נדל"ן חכם</title>
        <meta name="description" content="מצא את הבית שלך בקלות עם HiHome" />
      </Head>
      <div style={{
        background: 'linear-gradient(to right, #f2f2f2, #ffffff)',
        height: '100vh',
        textAlign: 'center',
        paddingTop: '15vh'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>ברוכים הבאים ל-HiHome</h1>
        <p style={{ fontSize: '1.25rem' }}>הפלטפורמה הכי נוחה בישראל למציאת נכסים</p>
        <div style={{ marginTop: '2rem' }}>
          <input type="text" placeholder="הקלד מיקום, עיר או אזור..." style={{
            padding: '12px 20px',
            fontSize: '1rem',
            borderRadius: '12px',
            border: '1px solid #ccc',
            width: '60%',
            maxWidth: '400px'
          }} />
        </div>
        <div style={{ marginTop: '3rem' }}>
          <img src="/mock-home.png" width="300" />
        </div>
      </div>
    </>
  );
}
