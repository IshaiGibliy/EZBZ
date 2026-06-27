'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { AppShell } from '@/components/AppShell';
import { HeaderCard } from '@/components/HeaderCard';
import { SectionTitle } from '@/components/SectionTitle';

type Supplier = { id: string; name: string; phone: string; email: string; };
const router = useRouter();
export default function BusinessPage() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [businessId, setBusinessId] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getUser().then(async ({ data }) => {
      if (!data.user) { router.push('/login'); return; }
      const { data: biz } = await supabase!.from('businesses').select('id').eq('owner_id', data.user.id).maybeSingle();
      if (biz) {
        setBusinessId(biz.id);
        const { data: sups } = await supabase!.from('suppliers').select('*').eq('business_id', biz.id);
        setSuppliers(sups || []);
      }
    });
  }, []);

  async function addSupplier() {
    if (!supabase || !businessId || !name) return;
    setLoading(true);
    const { data, error } = await supabase
      .from('suppliers')
      .insert({ business_id: businessId, name, phone, email })
      .select()
      .single();
    if (error) {
      setMessage('שגיאה: ' + error.message);
    } else {
      setSuppliers([...suppliers, data]);
      setName('');
      setPhone('');
      setEmail('');
      setMessage('✅ ספק נוסף!');
    }
    setLoading(false);
  }

  return (
    <AppShell active="/business">
      <HeaderCard
        eyebrow="אזור עסק"
        title="ספקים"
        description="נהל את הספקים שלך"
      />
      <SectionTitle title="הוסף ספק חדש" />
      <div className="card" style={{ marginBottom: 24 }}>
        <div className="form">
          <div className="grid grid-3">
            <div className="field">
              <label>שם הספק</label>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="למשל: רמי לוי" />
            </div>
            <div className="field">
              <label>טלפון</label>
              <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="050-0000000" />
            </div>
            <div className="field">
              <label>אימייל</label>
              <input value={email} onChange={e => setEmail(e.target.value)} placeholder="supplier@email.com" />
            </div>
          </div>
          {message && (
            <p style={{ color: message.includes('שגיאה') ? 'var(--red)' : 'var(--green)', fontSize: 14 }}>
              {message}
            </p>
          )}
          <button className="primary-button" onClick={addSupplier} disabled={loading || !name}>
            {loading ? 'מוסיף...' : '+ הוסף ספק'}
          </button>
        </div>
      </div>
      <SectionTitle title="הספקים שלי" />
      {suppliers.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', color: 'var(--muted)', padding: 40 }}>
          עוד אין ספקים — הוסף את הראשון!
        </div>
      ) : (
        <div className="card table-card">
          <table>
            <thead>
              <tr>
                <th>שם</th>
                <th>טלפון</th>
                <th>אימייל</th>
              </tr>
            </thead>
            <tbody>
              {suppliers.map(s => (
                <tr key={s.id}>
                  <td>{s.name}</td>
                  <td>{s.phone || '—'}</td>
                  <td>{s.email || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AppShell>
  );
}