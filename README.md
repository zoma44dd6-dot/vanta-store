# VANTA

**GAME TOP-UP & DIGITAL SERVICES**  
Official Store of CONKER on Telegram

Website: https://vanta-eg.com  
Telegram Store: https://t.me/CONKER_CON  
Telegram Support: @C_O_N_3  
Currency: EGP  
Languages: Arabic / English

## Included

- Premium gaming storefront
- Arabic RTL base UI
- Dark / Light mode
- Games and digital services
- Products and product details
- Cart and checkout UI
- Login / Register UI
- Account / Orders / Wishlist / Wallet / FAQ
- Owner/Admin dashboard structure
- Custom permission model
- PostgreSQL + Prisma schema
- Product Field Builder data model
- Orders / payments / coupons / reviews / referrals / activity logs data model
- Health API and order API foundation
- Mobile-first responsive design

## Important before production

This repository is a full project foundation, but real production operation requires:
1. A PostgreSQL database and `DATABASE_URL`.
2. A real authentication/session implementation and secure password/OTP flow.
3. Real payment verification and proof-upload storage.
4. Telegram Bot credentials if the bot is enabled later.
5. Secure owner 2FA.
6. Image/object storage for product images.
7. Server-side permission checks on every admin mutation.
8. Production backups, monitoring and rate limiting.

Never put secrets in GitHub source files.

## Setup

Use Node.js 20.9+.

```bash
npm install
cp .env.example .env
npm run db:generate
npm run db:migrate
npm run db:seed
npm run dev
```

Seed owner:
- Email: owner@vanta-eg.com
- Password: ChangeMe123!

**Change this password immediately and never use the seed password in production.**
