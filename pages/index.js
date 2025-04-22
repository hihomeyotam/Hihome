
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>HiHome - מצא בית בקלות</title>
        <meta name="description" content="הפורטל החדשני ביותר לנדל"ן בישראל" />
      </Head>
      <div style={{
        background: 'url(/bgproject.jpg) no-repeat center center fixed',
        backgroundSize: 'cover',
        minHeight: '100vh',
        fontFamily: 'sans-serif',
        direction: 'rtl',
        color: '#fff',
        padding: '5vh 2rem'
      }}>
        <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>ברוכים הבאים ל-HiHome</h1>
          <p style={{ fontSize: '1.2rem', color: '#f0f0f0' }}>
            מצא בית בקלות. פורטל נדל"ן מתקדם, מהיר ואמין.
          </p>
        </header>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ flex: '1', minWidth: '300px', maxWidth: '600px' }}>
            <input type="text" placeholder="הקלד עיר, שכונה או אזור..."
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1rem',
                borderRadius: '10px',
                border: 'none',
                marginBottom: '1rem',
                color: '#333'
              }} />
            <button style={{
              padding: '1rem 2rem',
              fontSize: '1rem',
              backgroundColor: '#0ea5e9',
              border: 'none',
              color: 'white',
              borderRadius: '8px',
              cursor: 'pointer'
            }}>
              חיפוש נכסים
            </button>
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', justifyContent: 'center' }}>
            <img src="/stack1.jpg" width="140" style={{ borderRadius: '12px' }} />
            <img src="/stack2.jpg" width="140" style={{ borderRadius: '12px', marginTop: '1rem' }} />
            <img src="/stack3.jpg" width="140" style={{ borderRadius: '12px', marginTop: '2rem' }} />
          </div>
        </div>
      </div>
    </>
  );
}
