import { AppShell } from '@/components/AppShell';
import { HeaderCard } from '@/components/HeaderCard';
import { SectionTitle } from '@/components/SectionTitle';

export default function SettingsPage() {
  return (
    <AppShell active="/settings">
      <HeaderCard
        eyebrow="הגדרות"
        title="התאמה אישית לעסק"
        description="השם עסקלי זמני. כאן אפשר לשנות שם עסק, סוג עסק, מודולים, צבעים והרשאות."
      />

      <div className="grid grid-2">
        <div className="card">
          <SectionTitle title="פרטי עסק" />
          <form className="form">
            <div className="field"><label>שם העסק</label><input defaultValue="מינימרקט גיבלי" /></div>
            <div className="field"><label>סוג עסק</label><select defaultValue="store"><option value="store">חנות / מינימרקט</option><option value="restaurant">מסעדה / בית קפה</option><option value="services">משרד שירותים</option><option value="other">אחר</option></select></div>
            <div className="field"><label>צבע ראשי</label><input defaultValue="כחול" /></div>
            <button className="primary-button" type="button">שמור שינויים</button>
          </form>
        </div>

        <div className="card">
          <SectionTitle title="מודולים" />
          <div className="grid">
            {['מסמכים','ספקים','מוצרים / שירותים','מלאי','השוואת מחירים','דוחות','לקוחות','פרויקטים'].map((item) => (
              <label key={item} style={{display:'flex', justifyContent:'space-between', gap:10, alignItems:'center', borderBottom:'1px solid var(--line)', paddingBottom:10}}>
                <span>{item}</span>
                <input type="checkbox" defaultChecked={!['לקוחות','פרויקטים'].includes(item)} />
              </label>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
