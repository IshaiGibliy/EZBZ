import Link from 'next/link';
import { FileUp } from 'lucide-react';
import { AppShell } from '@/components/AppShell';
import { Badge } from '@/components/Badge';
import { HeaderCard } from '@/components/HeaderCard';
import { SectionTitle } from '@/components/SectionTitle';
import { documents } from '@/lib/mock-data';

export default function DocumentsPage() {
  return (
    <AppShell active="/documents">
      <HeaderCard
        eyebrow="מסמכים"
        title="חשבוניות, קבלות ודוחות"
        description="כאן נשמור את כל המסמכים שהעסק מעלה. בגרסה הבאה נחבר שמירת קבצים אמיתית דרך Supabase Storage."
      >
        <button className="primary-button"><FileUp size={18} /> העלה מסמך</button>
      </HeaderCard>

      <div className="card upload-zone">
        <h3>גרור לכאן PDF / תמונה / Excel</h3>
        <p>בגרסה 0.1 זה מסך דמו. בשלב הבא נחבר העלאה אמיתית ושמירת קבצים.</p>
      </div>

      <SectionTitle title="מסמכים אחרונים" />
      <div className="card table-card">
        <table>
          <thead><tr><th>תאריך</th><th>סוג</th><th>שם</th><th>סכום</th><th>סטטוס</th><th></th></tr></thead>
          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id}>
                <td>{doc.date}</td><td>{doc.kind}</td><td>{doc.name}</td><td>{doc.amount}</td>
                <td><Badge color={doc.status === 'נקלט' ? 'green' : 'orange'}>{doc.status}</Badge></td>
                <td><Link className="secondary-button" href={`/documents/${doc.id}`}>פתח</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
