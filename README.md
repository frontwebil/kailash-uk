# Kailash Expedition Landing Page

A premium landing page for Mount Kailash expedition bookings with multilingual support (Ukrainian/English) and lead capture functionality.

## Features

- Multilingual support (Ukrainian/English)
- Premium design with spiritual atmosphere
- Lead capture form with Supabase integration
- Fully responsive design
- Multiple content sections:
  - Hero section with expedition dates
  - Saga Dawa special expedition information
  - Detailed journey information
  - Target audience sections
  - Safety and organization details
  - Pricing and exclusivity
  - Application form

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Supabase

1. Create a Supabase account at [supabase.com](https://supabase.com)
2. Create a new project
3. Copy your project URL and anon key
4. Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your-supabase-url-here
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key-here
```

### 3. Apply Database Migration

The migration file is located at `supabase/migrations/20260304093907_create_expedition_applications.sql`

Apply it using the Supabase CLI or through the SQL editor in your Supabase dashboard.

This creates:
- `expedition_applications` table
- Proper RLS policies for security
- Indexes for performance
- Automatic timestamp handling

### 4. Run Development Server

```bash
npm run dev
```

### 5. Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Header with language switcher
│   ├── HeroSection.tsx
│   ├── SagaDawaSection.tsx
│   ├── WhatIsSection.tsx
│   ├── ForWhomSection.tsx
│   ├── KoraSection.tsx
│   ├── ManasarovarSection.tsx
│   ├── SafetySection.tsx
│   ├── StatusSection.tsx
│   ├── FinalCtaSection.tsx
│   └── ApplicationForm.tsx
├── context/
│   └── LanguageContext.tsx  # Language state management
├── data/
│   └── translations.ts      # Translation content
├── lib/
│   └── supabase.ts         # Supabase client
├── types/
│   └── language.ts         # TypeScript types
└── App.tsx                 # Main application component
```

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Supabase
- Lucide React (icons)

## Design Philosophy

The design follows a premium, spiritual aesthetic:
- Deep dark blue and slate colors representing night in the mountains
- Gold accents for sacred elements
- Large, atmospheric images
- Minimal text with breathing room
- Focus on transformation rather than tourism

## License

Private project - All rights reserved
