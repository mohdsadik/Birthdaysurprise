import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Moon, Clock, MapPin, Gift, MessageCircle, ShieldCheck } from 'lucide-react';
import './styles.css';

const nikahDate = new Date('2027-01-10T00:00:00+05:30');

const story = [
  { k: 'The Beginning', d: '8 July 2026', t: '12:15 AM IST', text: "Our story began through family, with my first audio conversation with Humaira's father. It began as an arranged marriage, but Allah had written softness into the path ahead." },
  { k: 'The First Glimpse', d: '8 July 2026', t: '9:43 PM IST', text: "Later that day, I spoke to her father over video. Humaira was there talking to my younger sister. I sat beside my sister, outside the camera frame. She did not know I was there. We did not speak. But I saw her — her eyes, innocence, beauty, and that sweet calming lahja stayed with me." },
  { k: 'Our Little Secret', d: '10 July 2026', t: '8:16 PM IST', text: "Before our families finalized anything, I sent Humaira my first message on LinkedIn. We talked for a long time. Our thoughts matched, our personalities connected, and quietly we both hoped our families would agree." },
  { k: 'When Families Said Yes', d: '11 & 13 July 2026', t: '4:18 PM / 5:58 PM IST', text: "Her father had already agreed. My parents liked her too and wanted a little time. Then our families spoke again and both families agreed. Alhamdulillah. After that, Humaira sent her first blushing photo — the kind of memory that still gives butterflies." },
  { k: '4:42 PM — I Love You', d: '12 July 2026', t: '4:42 PM IST', text: "We said ‘I love you’ to each other for the first time. We talked about marriage, becoming each other's mehram, fi dunya wal akhirah, and her being my Rabbatul Bait. We were not simply falling in love anymore. Somewhere along the way, we had already fallen in love." },
  { k: 'The First Gift', d: '14 July 2026', t: 'Around 11 PM UAE', text: "Humaira received my first gift: a bouquet made with chocolates and a handwritten letter. She cried after reading it. Inside that letter was the dua from Qur’an 25:74, a verse deeply meaningful to me." },
];

const loves = ['Her eyes', 'The innocence in her eyes', 'The way she looks at me', 'Her childish nature', 'Her cute little talks', 'Her chubby cheeks', 'Her cute nose', 'Her spectacles', 'Her tiny hands', 'Her sleepy face', 'Her peaceful expression when she sleeps', 'Her sweet and calming lahja', 'Her blushing', 'The way she cares', 'The way she worries', 'Her effort', 'Her presence'];
const littleThings = ['Video calls', 'Snaps', 'Reels saved for later', 'Random conversations', 'Sleepy faces', 'Messy moments', 'Little arguments', 'Jokes', 'Waiting for each other to wake up', 'Checking whether the other has eaten', 'Good morning and good night', 'Staying connected until sleep wins'];
const future = ['Our first physical meeting', 'Our first hug', 'Our first morning together', 'Our first Eid', 'Our first Ramadan', 'Our first home', 'Our future family, if Allah blesses us', 'Growing old together', 'All the memories we have not created yet'];

function useCountdown() {
  const [now, setNow] = useState(new Date());
  useEffect(() => { const id = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(id); }, []);
  return useMemo(() => {
    const diff = Math.max(0, nikahDate - now);
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff / 3600000) % 24);
    const minutes = Math.floor((diff / 60000) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  }, [now]);
}

function App() {
  const countdown = useCountdown();
  const [motion, setMotion] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  return <main className={motion ? 'motion' : 'still'}>
    <button className="motionToggle" onClick={() => setMotion(!motion)} aria-pressed={motion}>{motion ? 'Pause motion' : 'Play motion'}</button>
    <section className="hero panel">
      <div className="stars" aria-hidden="true" />
      <Moon className="moon" aria-hidden="true" />
      <p className="eyebrow">Mohd Sadik Shaikh ❤️ Humaira Shaikh</p>
      <h1>From Dua<br/>to Nikah</h1>
      <p className="lead">A cinematic little record of how two strangers were brought together through family, distance, duas, care, and love.</p>
      <a href="#story" className="cta">Begin our story</a>
    </section>

    <section id="story" className="timeline panel">
      <p className="eyebrow">The first chapter</p><h2>It began as an arranged marriage.</h2>
      {story.map((item, i) => <article className="storyCard" key={item.k}><span className="number">{String(i+1).padStart(2,'0')}</span><div><p className="stamp">{item.d} • {item.t}</p><h3>{item.k}</h3><p>{item.text}</p></div></article>)}
    </section>

    <section className="centerpiece panel"><MessageCircle/><p className="stamp">12 July 2026 • 4:42 PM IST</p><h2>“We weren't simply falling in love anymore.”</h2><p>Somewhere along the way, we had already fallen in love.</p></section>

    <section className="grid panel"><div><p className="eyebrow">The little things</p><h2>Different places. Different clocks. Still somehow never far.</h2><p>Humaira is in Sharjah, UAE. I am in India. There is a 1.5-hour time difference, and we have never physically met — yet we are constantly present in each other's lives.</p></div><div className="chips">{littleThings.map(x => <span key={x}>{x}</span>)}</div></section>

    <section className="distance panel"><div><MapPin/><strong>India</strong><small>Sadik</small></div><div className="line">↔</div><div><MapPin/><strong>Sharjah</strong><small>Humaira</small></div><p>Before we ever shared a home, we had already started taking care of each other.</p></section>

    <section className="panel"><p className="eyebrow">The way I see you</p><h2>The things I love about her</h2><div className="loveGrid">{loves.map(x => <span key={x}>{x}</span>)}</div><p className="soft">Sometimes she looks like a sleeping beauty. I imagine being beside her one day, gently moving her hair behind her ears, and simply watching her sleep peacefully.</p></section>

    <section className="panel niqab"><ShieldCheck/><p className="stamp">8 August 2026</p><h2>I saw your effort.</h2><p>When Humaira sent a snap while going shopping in niqab, it touched my heart because I knew she sometimes felt discomfort wearing it. I had told her not to force herself if it affected her health. This was not control; it was care. And when I saw her making that effort herself, I felt deeply loved.</p></section>

    <section className="panel islam"><p className="eyebrow">Sakinah • Mawaddah • Rahmah</p><h2>My dua for us</h2><blockquote>“And among His signs is that He created for you spouses from among yourselves so that you may find tranquility in them; and He placed between you affection and mercy.” <cite>Qur'an 30:21</cite></blockquote><blockquote>“Our Lord, grant us from among our spouses and offspring comfort to our eyes and make us an example for the righteous.” <cite>Qur'an 25:74</cite></blockquote></section>

    <section className="panel countdown"><Clock/><p className="eyebrow">Until it becomes halal</p><h2>10 January 2027 — InshaAllah</h2><div className="timer">{Object.entries(countdown).map(([k,v]) => <div key={k}><strong>{v}</strong><span>{k}</span></div>)}</div><p>The day our waiting becomes our beginning.</p></section>

    <section className="panel future"><Gift/><h2>This isn't our whole story.</h2><p>This is only the first chapter.</p><div className="futureList">{future.map(x => <span key={x}>{x}</span>)}</div></section>

    <section className="final panel"><p>Humaira...</p><p>I thought I was making you a surprise website.</p><p>But while remembering our story, I realized something.</p><p>This isn't really a story about how I found you.</p><p>It's a story about how Allah brought us to each other.</p><p>And the most beautiful chapters haven't even happened yet.</p><h2>See you on 10 January 2027, my Rabbatul Bait. ❤️</h2><p>InshaAllah, this is only the beginning.</p><p className="signature">— Your Sadik</p></section>
  </main>;
}

createRoot(document.getElementById('root')).render(<App />);
