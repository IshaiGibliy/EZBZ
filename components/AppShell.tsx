import Link from 'next/link';
import { BarChart3, Building2, FileText, Home, Settings } from 'lucide-react';

const navItems = [
  { href: '/', label: 'בית', icon: Home },
  { href: '/documents', label: 'מסמכים', icon: FileText },
  { href: '/business', label: 'עסק', icon: Building2 },
  { href: '/reports', label: 'דוחות', icon: BarChart3 },
  { href: '/settings', label: 'הגדרות', icon: Settings }
];

export function AppShell({ children, active = '/' }: { children: React.ReactNode; active?: string }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="logo-row">
          <div className="logo-mark">ע</div>
          <div>
            <p className="logo-title">עסקלי</p>
            <div className="logo-sub">שם זמני • גרסה 0.1</div>
          </div>
        </div>
        <nav className="nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className={active === item.href ? 'active' : ''}>
                <Icon size={20} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <main className="main">{children}</main>
      <nav className="mobile-bottom">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} className={active === item.href ? 'active' : ''}>
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
