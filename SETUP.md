# Kailash Expedition - Setup Guide

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Supabase Configuration

#### Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in project details:
   - Name: `kailash-expedition` (or your preferred name)
   - Database Password: Create a strong password
   - Region: Choose closest to your users
   - Pricing Plan: Free tier is sufficient for testing

#### Step 2: Get API Credentials

1. In your Supabase project dashboard, go to Settings > API
2. Copy the following:
   - **Project URL** (under "Project URL")
   - **anon/public key** (under "Project API keys")

#### Step 3: Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and replace the placeholder values:
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

#### Step 4: Apply Database Migration

**Option A: Using SQL Editor (Recommended)**

1. In Supabase dashboard, go to SQL Editor
2. Click "New Query"
3. Copy the entire content from:
   ```
   supabase/migrations/20260304093907_create_expedition_applications.sql
   ```
4. Paste into the SQL Editor
5. Click "Run"

**Option B: Using Supabase CLI**

1. Install Supabase CLI:
   ```bash
   npm install -g supabase
   ```

2. Login to Supabase:
   ```bash
   supabase login
   ```

3. Link your project:
   ```bash
   supabase link --project-ref your-project-id
   ```

4. Apply migration:
   ```bash
   supabase db push
   ```

#### Step 5: Verify Setup

1. Go to Table Editor in Supabase dashboard
2. You should see `expedition_applications` table
3. Check that RLS is enabled (shield icon should be green)

### 3. Run Development Server

```bash
npm run dev
```

The site will open at `http://localhost:5173`

### 4. Test the Application

1. Switch between Ukrainian and English using the language toggle in the header
2. Click any "Get Program" button
3. Fill out the application form
4. Submit the form
5. Check Supabase Table Editor to see your submission

### 5. Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Troubleshooting

### "Missing Supabase environment variables" error

- Make sure you've created the `.env` file
- Check that the variables are named correctly (must start with `VITE_`)
- Restart the dev server after creating/modifying `.env`

### Form submissions not saving

1. Check that the migration was applied correctly
2. Verify RLS policies are active
3. Check browser console for errors
4. Go to Supabase dashboard > Authentication to ensure RLS allows public inserts

### Language switcher not working

- Clear browser cache
- Check that both translations are loaded in `src/data/translations.ts`

## Production Deployment

### Environment Variables

When deploying to production (Vercel, Netlify, etc.), add these environment variables:

```
VITE_SUPABASE_URL=your-production-supabase-url
VITE_SUPABASE_ANON_KEY=your-production-anon-key
```

### Build Command

```bash
npm run build
```

### Output Directory

```
dist
```

## Viewing Submissions

1. Log in to Supabase dashboard
2. Go to Table Editor
3. Select `expedition_applications` table
4. View all submissions with timestamps

You can also set up email notifications or webhooks in Supabase to get notified of new submissions.

## Support

For issues or questions, check:
- Supabase documentation: https://supabase.com/docs
- Vite documentation: https://vitejs.dev
- React documentation: https://react.dev
