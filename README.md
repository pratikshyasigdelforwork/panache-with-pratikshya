# Panache With Pratikshya - Enterprise Luxury Ecosystem

Welcome to the command center for Panache With Pratikshya. This platform is a high-performance, luxury-focused ecommerce engine built for global scale.

## 🛠 Tech Stack
- **Frontend:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion
- **Backend:** Node.js, Prisma, PostgreSQL
- **AI/ML:** Gemini API (Integrated Search & Stylist)
- **Infrastructure:** Vercel (Hosting), Cloudinary (Media), Supabase/PostgreSQL (DB)

## 🚀 Getting Started

### 1. Environment Setup
Create a `.env.local` file in the root with the following keys:
```env
DATABASE_URL=
DIRECT_URL=
AUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_MAPS_API_KEY=
GEMINI_API_KEY=
STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```

### 2. Development
```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

## 🏗 Admin Dashboard
The Admin Dashboard is protected by RBAC. 
- **Roles:** Super Admin, Admin, Manager, Content Editor, Support.
- **AI Business Assistant:** Interact via the chat icon in the dashboard to request real-time analytics.

## 🛍 Customer Experience
- **Virtual Stylist:** Accessible via the search interface for AI-curated product styling.
- **Checkout:** Multi-step premium flow supporting Stripe, eSewa, and Khalti.

## 🔒 Security
- **RBAC:** Routes under `/admin/*` are gated at the middleware level.
- **Audit Logs:** All sensitive actions are logged in the `AuditLog` table.
- **CSRF/Rate Limiting:** Enterprise protection configured for all API endpoints.

## 🌐 Deployment
The project is optimized for **Vercel**. 
1. Push to GitHub.
2. Link repository to Vercel.
3. Inject the production `.env` keys.
4. Deploy.
