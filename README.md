# 🧵 The Soft Grid — shop-thesoftgrid | thesoftgrid.com

> **Premium oversized T-shirts & corporate gifting.** Custom printed. Factory direct. Pan India.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=flat-square&logo=supabase)](https://supabase.com)
[![Azure](https://img.shields.io/badge/Deploy-Azure-0078D4?style=flat-square&logo=microsoftazure)](https://azure.microsoft.com)
[![License](https://img.shields.io/badge/License-Private-red?style=flat-square)]()

---

## 🛍️ About The Soft Grid

**The Soft Grid** is an Indian D2C apparel and corporate gifting brand based in Noida, UP.

- 👕 Premium oversized & custom-printed T-shirts — starting from **1 piece**
- 🎁 Corporate welcome kits & branded merchandise — from **25 pieces**
- 🖨️ Custom logo printing, embroidery, all-over print
- 🚚 Pan India delivery · 5–10 working days
- 📦 Lightweight → Everyday → Premium → Heavy fabric options

📸 Instagram: [@softgrid.apparels](https://www.instagram.com/softgrid.apparels/)  
💬 WhatsApp: [+91 82858 62455](https://wa.me/918285862455)  
📧 Email: info.thesoftgrid@gmail.com

---

## ✨ Features

| Feature | Status |
|---------|--------|
| Product catalog with filters (color, fabric, print type) | ✅ Live |
| Product detail with image gallery | ✅ Live |
| Session cart + WhatsApp checkout | ✅ Live |
| Corporate Gifting & Hampers pages | ✅ Live |
| T-Shirt Customiser with live canvas preview | 🔧 In Progress |
| Mobile OTP login via SMS | 🔧 In Progress |
| User account + order history | 🔧 In Progress |
| Admin panel (products, orders, stock) | 🔧 In Progress |
| Azure Blob Storage for images | 📋 Planned |
| Payment gateway (Razorpay/Cashfree) | 📋 Planned |

---

## 🏗️ Tech Stack

```
Frontend       Next.js 14 (App Router) + TypeScript
Styling        Tailwind CSS + shadcn/ui
Animations     Framer Motion
State          Zustand (cart)
Database       Supabase (PostgreSQL)
Auth           Custom mobile OTP via Fast2SMS
Storage        Supabase Storage → Azure Blob (planned)
Deploy         Azure App Service + GitHub Actions
```

---

## 📁 Project Structure

```
shop-thesoftgrid/
├── app/
│   ├── page.tsx                  # Homepage
│   ├── products/                 # Product listing + detail
│   ├── services/
│   │   ├── oversized-tshirts/    # T-Shirt service page
│   │   └── corporate-hampers/    # Corporate gifting page
│   ├── customise/                # Live T-shirt customiser
│   ├── cart/                     # Cart + WhatsApp checkout
│   ├── order/[ref]/              # Order confirmation
│   ├── account/                  # User orders + profile
│   ├── login/                    # Mobile OTP login
│   ├── admin/                    # Admin panel (protected)
│   ├── about/
│   ├── contact/
│   └── faqs/
├── components/
│   ├── layout/                   # Navbar, Footer, CartSheet
│   ├── home/                     # Hero, Marquee, Instagram, etc.
│   ├── products/                 # ProductCard, Filters, Gallery
│   └── admin/                    # Admin-only components
├── lib/
│   ├── supabase/                 # Client, server, types
│   ├── cart-store.ts             # Zustand cart
│   ├── otp.ts                    # Fast2SMS OTP
│   ├── order-utils.ts            # Order ref generator
│   └── whatsapp.ts               # WA message builder
└── data/
    └── products.json             # Product catalog
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn
- Supabase account (free tier)
- Fast2SMS account (for OTP)

### 1. Clone & Install

```bash
git clone https://github.com/raushan1107/shop-thesoftgrid.git
cd shop-thesoftgrid
npm install
```

### 2. Environment Variables

Create `.env.local` from the example:

```bash
cp .env.local.example .env.local
```

Fill in your values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
FAST2SMS_API_KEY=your_fast2sms_key
ADMIN_PASSWORD=your_admin_password
NEXT_PUBLIC_WA_NUMBER=918285862455
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/softgrid.apparels/
NEXT_PUBLIC_SITE_URL=https://thesoftgrid.in
NEXT_PUBLIC_EMAIL=info.thesoftgrid@gmail.com
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🗄️ Database Setup

Run the SQL from `supabase/schema.sql` in your Supabase SQL editor to create:

- `users` — mobile-first user accounts
- `otps` — OTP records with expiry
- `products` — full product catalog
- `orders` — orders with status history + UTR tracking

---

## 📦 Deployment

### Azure App Service

```bash
# Build
npm run build

# The GitHub Actions workflow handles auto-deploy on push to main
# See .github/workflows/azure-deploy.yml
```

**Environment variables** must be added in Azure Portal →  
App Service → Configuration → Application Settings.

---

## 🔄 Order Flow

```
User browses products
    ↓
Add to cart (session-based)
    ↓
Login with mobile OTP (Fast2SMS)
    ↓
Place order → saved to Supabase → unique Order Ref (TSG-YYYYMMDD-XXXX)
    ↓
WhatsApp redirect with full order summary
    ↓
User pays via UPI → submits UTR number
    ↓
Admin verifies UTR → marks payment verified
    ↓
Order status updates → user tracks via /account
```

---

## 👥 Team

| Name | Role |
|------|------|
| **Raushan** | Co-Founder · Tech & Strategy |
| **Pratibha** | Co-Founder · Product & Quality |
| **Suchitra** | Co-Founder · Operations |
| **Suman** | Co-Founder · Client Relations |

---

## 👨‍💻 Developer

**Raushan Ranjan**  
Microsoft Certified Trainer (MCT)  
Founder, [RR Skillverse](https://rrskillverse.in)

[![GitHub](https://img.shields.io/badge/GitHub-raushan1107-181717?style=flat-square&logo=github)](https://github.com/raushan1107)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/raushan1107)
[![RR Skillverse](https://img.shields.io/badge/RR_Skillverse-rrskillverse.in-00c2e0?style=flat-square)](https://rrskillverse.in)

---

## 📄 License

Private repository. All rights reserved © 2026 The Soft Grid.  
Not open for redistribution or commercial use.

---

<div align="center">
  <sub>Built with ☕ and late nights by <a href="https://github.com/raushan1107">Raushan</a> · Noida, India</sub>
</div>
