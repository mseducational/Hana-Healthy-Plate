/*
  # Create Nutrition Consulting Website Tables

  1. New Tables
    - contact_submissions
      - id (uuid, primary key)
      - name (text, required) - Contact full name
      - email (text, required) - Contact email address
      - phone (text, optional) - Contact phone number
      - message (text, required) - Contact message
      - created_at (timestamptz) - Submission timestamp
    
    - consultation_bookings
      - id (uuid, primary key)
      - name (text, required) - Client full name
      - email (text, required) - Client email address
      - phone (text, required) - Client phone number
      - consultation_type (text, required) - Type of consultation requested
      - preferred_date (date, required) - Preferred consultation date
      - preferred_time (text, required) - Preferred consultation time
      - message (text, optional) - Additional notes or concerns
      - status (text) - Booking status (pending, confirmed, cancelled)
      - created_at (timestamptz) - Booking submission timestamp

  2. Security
    - Enable RLS on both tables
    - Add policies for public insert access (for form submissions)
    - Restrict read/update/delete to authenticated admins only

  3. Notes
    - Both tables use UUIDs as primary keys for security
    - Default status for consultations is pending
    - Timestamps auto-populate on creation
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS consultation_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  consultation_type text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  message text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultation_bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can book consultation"
  ON consultation_bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Only authenticated users can view consultation bookings"
  ON consultation_bookings
  FOR SELECT
  TO authenticated
  USING (true);