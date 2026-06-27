import { AppShell } from '@/components/AppShell';
import { Badge } from '@/components/Badge';
import { HeaderCard } from '@/components/HeaderCard';
import { SectionTitle } from '@/components/SectionTitle';
import { priceComparisons } from '@/lib/mock-data';

export default function ReportsPage() {
  return (
    <AppShell active="/reports">
      <HeaderCard
        eyebrow="דוחות ותובנות"
        title="מה העסק יכול לחסוך?"
        description="דוח הדמו מציג השוואת מחירים בין ספקים. בהמשך הנתונים יישלפו ממסד הנתונים לפי חשבוניות אמיתיות."
      >
        <div className="card" style={{minWidth: 220}}>
          <div className="stat-label">חיסכון אפשרי החודש</div>
          <div className="stat-value">₪1,840</div>
        </div>
      </HeaderCard>

      <div className="grid grid-3">
        <div className="card"><h3>דוח הכנסות והוצאות</h3><p className="muted">השוואה חודשית בין פדיון, הוצאות ורווח משוער.</p></div>
        <div className="card"><h3>דוח ספקים</h3><p className="muted">מי הספקים הכי משמעותיים ואיפה המחירים השתנו.</p></div>
        <div className="card"><h3>דוח מוצרים</h3><p className="muted">מוצרים רווחיים, מוצרים בלי התאמה ומוצרים שהתייקרו.</p></div>
      </div>

      <SectionTitle title="השוואת מחירים לדוגמה" />
      <div className="card table-card">
        <table>
          <thead><tr><th>מוצר</th><th>הכי זול</th><th>מחיר זול</th><th>הכי יקר</th><th>מחיר יקר</th><th>חיסכון ליחידה</th></tr></thead>
          <tbody>
            {priceComparisons.map((row) => (
              <tr key={row.product}>
                <td>{row.product}</td><td>{row.cheapSupplier}</td><td><Badge color="green">{row.cheapPrice}</Badge></td>
                <td>{row.expensiveSupplier}</td><td><Badge color="red">{row.expensivePrice}</Badge></td><td>{row.saving}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
