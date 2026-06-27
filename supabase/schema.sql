-- עסקלי v0.1 - בסיס נתונים ראשוני ל-Supabase
-- מריצים את הקובץ ב-SQL Editor של Supabase אחרי פתיחת פרויקט.

create table if not exists public.businesses (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid,
  name text not null,
  business_type text not null default 'other',
  city text,
  tax_id text,
  primary_color text default '#1864d8',
  created_at timestamptz not null default now()
);

create table if not exists public.business_settings (
  id uuid primary key default gen_random_uuid(),
  business_id uuid references public.businesses(id) on delete cascade,
  enabled_modules jsonb not null default '["documents", "suppliers", "products", "reports"]',
  custom_labels jsonb not null default '{}',
  created_at timestamptz not null default now()
);

create table if not exists public.suppliers (
  id uuid primary key default gen_random_uuid(),
  business_id uuid references public.businesses(id) on delete cascade,
  name text not null,
  phone text,
  email text,
  contact_name text,
  payment_terms text,
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  business_id uuid references public.businesses(id) on delete cascade,
  name text not null,
  barcode text,
  sku text,
  category text,
  last_purchase_price numeric(12,2),
  sale_price numeric(12,2),
  created_at timestamptz not null default now()
);

create table if not exists public.documents (
  id uuid primary key default gen_random_uuid(),
  business_id uuid references public.businesses(id) on delete cascade,
  supplier_id uuid references public.suppliers(id),
  document_type text not null default 'supplier_invoice',
  document_number text,
  document_date date,
  subtotal numeric(12,2),
  vat numeric(12,2),
  total numeric(12,2),
  currency text default 'ILS',
  status text not null default 'needs_review',
  file_path text,
  created_at timestamptz not null default now()
);

create table if not exists public.document_items (
  id uuid primary key default gen_random_uuid(),
  document_id uuid references public.documents(id) on delete cascade,
  product_id uuid references public.products(id),
  raw_name text not null,
  barcode text,
  quantity numeric(12,3),
  unit_price numeric(12,4),
  line_total numeric(12,2),
  vat_rate numeric(5,2) default 18,
  match_status text default 'unmatched',
  created_at timestamptz not null default now()
);

create table if not exists public.price_history (
  id uuid primary key default gen_random_uuid(),
  business_id uuid references public.businesses(id) on delete cascade,
  product_id uuid references public.products(id) on delete cascade,
  supplier_id uuid references public.suppliers(id) on delete cascade,
  document_item_id uuid references public.document_items(id) on delete set null,
  price numeric(12,4) not null,
  quantity numeric(12,3),
  purchased_at date,
  created_at timestamptz not null default now()
);

create table if not exists public.alerts (
  id uuid primary key default gen_random_uuid(),
  business_id uuid references public.businesses(id) on delete cascade,
  title text not null,
  description text,
  severity text default 'info',
  status text default 'open',
  created_at timestamptz not null default now()
);
