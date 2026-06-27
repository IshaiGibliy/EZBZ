import Link from 'next/link';
import { ArrowLeft, FileSpreadsheet } from 'lucide-react';
import { AppShell } from '@/components/AppShell';
import { Badge } from '@/components/Badge';
import { HeaderCard } from '@/components/HeaderCard';
import { SectionTitle } from '@/components/SectionTitle';
import { invoiceItems } from '@/lib/mock-data';

export default function DocumentDetailsPage() {
  return (
    <AppShell active="/documents">
      <HeaderCard
        eyebrow="פרטי מסמך"
        title="רמי לוי לעסקים"
        description="חשבונית מס 6515137 • 17/06/2026 • סה״כ כולל מע״מ ₪29,216"
      >
        <div className="actions">
          <Badge color="green">נקלט</Badge>
          <Link href="/documents" className="secondary-button"><ArrowLeft size={18} /> חזרה</Link>
        </div>
      </HeaderCard>

      <div className="grid grid-4">
        <div className="card"><div className="stat-label">לפני מע״מ</div><div className="stat-value">₪24,759</div></div>
        <div className="card"><div className="stat-label">מע״מ</div><div className="stat-value">₪4,457</div></div>
        <div className="card"><div className="stat-label">שורות מוצרים</div><div className="stat-value">142</div></div>
        <div className="card"><div className="stat-label">התאמות לקופה</div><div className="stat-value">74</div></div>
      </div>

      <SectionTitle title="שורות מתוך החשבונית" action={<Link className="primary-button" href="/reports"><FileSpreadsheet size={18} /> השווה מחירים</Link>} />
      <div className="card table-card">
        <table>
          <thead><tr><th>מוצר</th><th>כמות</th><th>עלות יחידה</th><th>סה״כ</th><th>התאמה</th></tr></thead>
          <tbody>
            {invoiceItems.map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td><td>{item.qty}</td><td>{item.unitCost}</td><td>{item.total}</td>
                <td><Badge color={item.match === 'דורש בדיקה' ? 'orange' : 'blue'}>{item.match}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
