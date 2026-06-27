export const stats = [
  { label: 'הכנסות החודש', value: '₪126,540', trend: '+8.7% מול חודש קודם' },
  { label: 'הוצאות החודש', value: '₪84,320', trend: '-5.2% מול חודש קודם' },
  { label: 'רווח משוער', value: '₪42,220', trend: 'רווחיות 33%' },
  { label: 'מסמכים לבדיקה', value: '7', trend: '3 דחופים' }
];

export const smartAlerts = [
  { title: 'במבה 80 גרם זול יותר אצל ספק אחר', desc: 'חיסכון אפשרי של ₪216 החודש', type: 'green' },
  { title: '3 מוצרים במלאי נמוך', desc: 'מומלץ ליצור הזמנה חדשה', type: 'orange' },
  { title: 'חשבונית חדשה ממתינה לבדיקה', desc: 'הועלתה לפני שעתיים', type: 'blue' }
];

export const documents = [
  { id: 'rami-6515137', date: '17/06/26', kind: 'חשבונית ספק', name: 'רמי לוי לעסקים', amount: '₪29,216', status: 'נקלט' },
  { id: 'aviv-june', date: '26/06/26', kind: 'דוח קופה', name: 'אביב קופות', amount: '₪126,540', status: 'נקלט' },
  { id: 'tnuva-demo', date: '22/06/26', kind: 'חשבונית ספק', name: 'תנובה', amount: '₪8,430', status: 'דורש בדיקה' }
];

export const invoiceItems = [
  { name: 'במבה 80 גרם', qty: 240, unitCost: '₪3.50', total: '₪840', match: 'נמצא במאגר' },
  { name: 'שמן קנולה 1 ליטר', qty: 75, unitCost: '₪6.90', total: '₪517.50', match: 'נמצא במאגר' },
  { name: 'קפה נמס ג׳ייקובס 190 גרם', qty: 18, unitCost: '₪22.50', total: '₪405', match: 'נמצא במאגר' },
  { name: 'מוצר לא מזוהה', qty: 12, unitCost: '₪8.90', total: '₪106.80', match: 'דורש בדיקה' }
];

export const priceComparisons = [
  { product: 'במבה 80 גרם', cheapSupplier: 'ספק א׳', cheapPrice: '₪3.30', expensiveSupplier: 'רמי לוי', expensivePrice: '₪3.70', saving: '₪0.40' },
  { product: 'שמן קנולה 1 ליטר', cheapSupplier: 'רמי לוי', cheapPrice: '₪6.90', expensiveSupplier: 'ספק ב׳', expensivePrice: '₪7.80', saving: '₪0.90' },
  { product: 'פסטה אסם 500 גרם', cheapSupplier: 'ספק ב׳', cheapPrice: '₪4.20', expensiveSupplier: 'רמי לוי', expensivePrice: '₪4.70', saving: '₪0.50' }
];

export const suppliers = [
  { name: 'רמי לוי לעסקים', spend: '₪29,216', docs: 1, products: 142, up: 8, down: 3 },
  { name: 'תנובה', spend: '₪18,400', docs: 3, products: 48, up: 2, down: 1 },
  { name: 'דיפלומט', spend: '₪12,600', docs: 2, products: 35, up: 4, down: 0 }
];
