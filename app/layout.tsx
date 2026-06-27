import './globals.css';

export const metadata = {
  title: 'עסקלי - גרסה 0.1',
  description: 'אב טיפוס לאפליקציה מודולרית לניהול עסקים'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
