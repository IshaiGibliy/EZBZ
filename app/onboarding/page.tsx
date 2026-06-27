'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function OnboardingPage() {
  const [name, setName] = useState('');
  const [type, setType] = useState('minimarket');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function handleCreate() {
    if (!supabase || !name) return;
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { window.location.href = '/login'; return; }

    const { error } = await supabase.from('businesses').insert({
      owner_id: user.id,
      name,
      business_type: type,
      city
    });

    if (error) setMessage('שגיאה ביצירת העסק: ' + error.message);
    else window.location.href = '/';
    setLoading(false);
  }

  return (
    <main style={{ maxWidth: 480, margin: '60px auto', padding: '0 20px' }}>
      <div className="card" style={{ padding: 32 }}>
        <div className="logo-mark" style={{ margin: '0 auto 24px', width: 56, height: 56, fontSize: 24 }}>ע</div>
        <h1 style={{ textAlign: 'center', fontSize: 26, marginBottom: 8 }}>יצירת עסק</h1>
        <p className="muted" style={{ textAlign: 'center', marginBottom: 28 }}>מלא את הפרטים כדי להתחיל</p>
        <div className="form">
          <div className="field">
            <label>שם העסק</label>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="למשל: מינימרקט כהן" />
          </div>
          <div className="field">
            <label>סוג העסק</label>
            <select value={type} onChange={e => setType(e.target.value)}>
              <option value="minimarket">מינימרקט</option>
              <option value="supermarket">סופרמרקט</option>
              <option value="restaurant">מסעדה</option>
              <option value="cafe">בית קפה</option>
              <option value="other">אחר</option>
            </select>
          </div>
          <div className="field">
            <label>עיר</label>
            <input value={city} onChange={e => setCity(e.target.value)} placeholder="למשל: תל אביב" />
          </div>
          {message && <p style={{ color: 'var(--red)', fontSize: 14 }}>{message}</p>}
          <button className="primary-button" onClick={handleCreate} disabled={loading || !name} style={{ width: '100%', justifyContent: 'center' }}>
            {loading ? 'יוצר...' : 'צור עסק והתחל'}
          </button>
        </div>
      </div>
    </main>
  );
}