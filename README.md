# Hana Healthy Plate - Professional Nutrition Consulting Website

A modern, responsive nutrition consulting website built with React, TypeScript, and Tailwind CSS. Features BMI calculator, booking forms, and Supabase integration for data management.

## 🚀 Features

- **Responsive Design**: Mobile-first approach works perfectly on all devices
- **Interactive Components**:
  - BMI Calculator with real-time calculations
  - Consultation Booking Form
  - Contact Form
  - Team Member Profiles
  - Client Testimonials
- **Database Integration**: Supabase integration for bookings and inquiries
- **Modern UI**: Built with Tailwind CSS for a professional appearance
- **Performance Optimized**: Fast load times with Vite build tool

## 📋 Components

- **Navigation**: Sticky navigation with smooth scrolling
- **Hero Section**: Eye-catching landing area with call-to-action
- **Services**: Six core service offerings
- **About**: Team profiles and company values
- **Testimonials**: Client success stories
- **BMI Calculator**: Interactive health tool
- **Booking Form**: Schedule consultations
- **Contact Section**: Multiple ways to reach out
- **Footer**: Quick links and contact information

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1 + TypeScript 5.5.3
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1
- **Backend**: Supabase
- **Icons**: Lucide React 0.344.0
- **Code Quality**: ESLint

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/mseducational/Hana-Healthy-Plate.git
cd Hana-Healthy-Plate

# Install dependencies
npm install

# Create .env file with Supabase credentials
cp .env.example .env
# Edit .env with your Supabase URL and Anon Key
```

## 🚀 Getting Started

### Development
```bash
npm run dev
```
Opens the app at `http://localhost:3000`

### Build
```bash
npm run build
```
Creates optimized production build in `dist/` directory

### Preview
```bash
npm run preview
```
Preview the production build locally

### Type Checking
```bash
npm run typecheck
```

### Linting
```bash
npm run lint
```

## 🌐 Deployment

This project is configured for automatic deployment to GitHub Pages:

1. **Set Up Supabase Secrets**:
   - Go to repository Settings → Secrets and variables → Actions
   - Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`

2. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / folder: `/(root)`

3. **Deploy**:
   - Push to `main` branch
   - GitHub Actions automatically builds and deploys

Your site will be live at: `https://mseducational.github.io/Hana-Healthy-Plate/`

## 📚 Supabase Setup

### Required Tables

**consultation_bookings**
```sql
- id (UUID, Primary Key)
- name (Text)
- email (Text)
- phone (Text)
- consultation_type (Text)
- preferred_date (Date)
- preferred_time (Text)
- message (Text)
- created_at (Timestamp)
```

**contact_submissions**
```sql
- id (UUID, Primary Key)
- name (Text)
- email (Text)
- phone (Text)
- message (Text)
- created_at (Timestamp)
```

## 📄 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## 🎨 Customization

### Colors
Edit colors in Tailwind classes. Primary color is emerald (`emerald-600`)

### Content
- Edit component text directly in TSX files
- Update team members in `src/components/About.tsx`
- Modify services in `src/components/Services.tsx`
- Update testimonials in `src/components/Testimonials.tsx`

### Images
All images use external sources from Pexels. Replace URLs with your own images.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📞 Support

For issues or questions, please open a GitHub issue.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Live Demo**: https://mseducational.github.io/Hana-Healthy-Plate/
**Repository**: https://github.com/mseducational/Hana-Healthy-Plate
