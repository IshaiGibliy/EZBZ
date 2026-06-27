'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AlertTriangle, BarChart3, Camera, FileUp, PackageSearch, TrendingUp } from 'lucide-react';
import { AppShell } from '@/components/AppShell';
import { HeaderCard } from '@/components/HeaderCard';
import { SectionTitle } from '@/components/SectionTitle';
import { StatCard } from '@/components/StatCard';
import { smartAlerts, stats } from '@/lib/mock-data';
import { supabase } from '@/lib/supabase';

export default function HomePage() {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) setUserEmail(data.user.email || '');
      else window.location.href = '/login';
    });
  }, []);

  const firstName = userEmail.split('@')[0];

  return (
    <AppShell active="/">
      <HeaderCard
        eyebrow="דשבורד ראשי"
        title={`שלום, ${firstName}`}
        description="הנה תמונת מצב חודשית של העסק. בהמשך הנתונים יגיעו מהחשבוניות, דוחות הקופה והספקים."
      >
        <div className="actions">
          <Link className="primary-button" href="/documents"><FileUp size={18} /> העלה מסמך</Link>
          <Link className="secondary-button" href="/onboarding">הגדר עסק חדש</Link>
        </div>
      </HeaderCard>

      <div className="grid grid-4">
        {stats.map((stat) => <StatCard key={stat.label} {...stat} />)}
      </div>

      <SectionTitle title="פעולות מהירות" />
      <div className="grid grid-3">
        <Link className="card tile" href="/documents">
          <span className="icon-bubble"><Camera size={23} /></span>
          <span><h3>העלה חשבונית</h3><p>PDF, תמונה או אקסל.</p></span>
        </Link>
        <Link className="card tile" href="/business">
          <span className="icon-bubble icon-green"><PackageSearch size={23} /></span>
          <span><h3>ניהול ספקים ומוצרים</h3><p>מאגר ספקים, מוצרים וברקודים.</p></span>
        </Link>
        <Link className="card tile" href="/reports">
          <span className="icon-bubble icon-orange"><BarChart3 size={23} /></span>
          <span><h3>דוחות ותובנות</h3><p>רווחיות, הוצאות והשוואות מחירים.</p></span>
        </Link>
      </div>

      <SectionTitle title="התראות חכמות" />
      <div className="grid grid-3">
        {smartAlerts.map((alert) => (
          <div key={alert.title} className="card tile">
            <span className={`icon-bubble icon-${alert.type}`}>
              {alert.type === 'orange' ? <AlertTriangle size={23} /> : <TrendingUp size={23} />}
            </span>
            <span><h3>{alert.title}</h3><p>{alert.desc}</p></span>
          </div>
        ))}
      </div>
    </AppShell>
  );
}