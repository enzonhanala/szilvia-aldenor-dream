CREATE TABLE public.rsvp_confirmations (
  code TEXT PRIMARY KEY,
  guest_name TEXT NOT NULL,
  table_name TEXT NOT NULL,
  confirmed_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.rsvp_confirmations TO anon;
GRANT ALL ON public.rsvp_confirmations TO service_role;

ALTER TABLE public.rsvp_confirmations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can register a confirmation"
  ON public.rsvp_confirmations
  FOR INSERT
  TO anon
  WITH CHECK (true);