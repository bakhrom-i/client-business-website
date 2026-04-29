# Client Business Website

> Custom responsive marketing site with CMS-backed blog, contact forms, and SEO optimization. Built for a small business looking to grow online.

**🌐 Live demo:** https://cbw-frontend.vercel.app
**🔌 API:** https://cbw-backend.onrender.com/api/posts (try it — returns JSON of seeded blog posts)
**❤️ Health:** https://cbw-backend.onrender.com/actuator/health

![Build](https://img.shields.io/badge/build-passing-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue) ![Java](https://img.shields.io/badge/java-17-orange) ![Angular](https://img.shields.io/badge/angular-17-red)

## Screenshots

> _Add screenshots to `docs/screenshots/` and update the paths below._

| Home | Blog | Contact |
|---|---|---|
| ![Home](docs/screenshots/home.png) | ![Blog](docs/screenshots/blog.png) | ![Contact](docs/screenshots/contact.png) |

## Tech Stack

- **Backend:** Java 17, Spring Boot 3, Spring Data JPA, Spring Web
- **Frontend:** Angular 17, TypeScript, SCSS
- **Database:** PostgreSQL 15
- **Build:** Maven (backend), npm (frontend)
- **Hosting:** Vercel (frontend) + Render (backend + Postgres)

## Features

- Responsive marketing pages (Home, About, Services, Contact)
- CMS-backed blog with rich-text posts and tags
- Contact form with server-side validation and email dispatch
- SEO: server-rendered meta tags, sitemap.xml, robots.txt, Open Graph
- Image optimization and lazy loading

## Project Structure

```
client-business-website/
├── backend/                  # Spring Boot REST API
│   ├── src/main/java/com/portfolio/cbw/
│   ├── Dockerfile
│   └── render.yaml           # Render blueprint
├── frontend/                 # Angular SPA
│   ├── src/app/
│   └── vercel.json           # Vercel config
└── docs/
```

## Local Development

### Prerequisites
- Java 17+, Node.js 20+, PostgreSQL 15+, Maven 3.9+

### Database
```bash
createdb cbw_dev
```

### Backend
```bash
cd backend
mvn spring-boot:run
# API at http://localhost:8080
```

### Frontend
```bash
cd frontend
npm install
npm start
# App at http://localhost:4200
```

## Deployment

### Frontend → Vercel (free)

1. Push this repo to GitHub
2. On [vercel.com](https://vercel.com), click **Import Project** → select this repo
3. **Root directory:** `frontend`
4. Vercel reads `vercel.json` and deploys
5. *(Optional)* Add a custom domain in Vercel → Settings → Domains

### Backend + DB → Render (free)

1. On [render.com](https://render.com), click **New** → **Blueprint**
2. Connect this repo, select branch `main`
3. Render reads `render.yaml` (at repo root) and provisions the web service + Postgres
4. Update the `destination` URL in `frontend/vercel.json` to the Render-generated URL
5. Redeploy frontend on Vercel

> **Note:** Render's free tier sleeps after 15 min of inactivity. Cold-start ≈ 30 sec. Bump to Starter ($7/mo) for an always-on instance, or use a cron pinger.

### Custom Domain (optional, ~$10/yr)

1. Buy a domain at [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) or [Namecheap](https://www.namecheap.com)
2. In Vercel: Settings → Domains → add `business.yourdomain.dev` (CNAME `cname.vercel-dns.com`)
3. Vercel auto-provisions HTTPS

## API Endpoints

| Method | Path                  | Description           |
|--------|-----------------------|-----------------------|
| GET    | `/api/posts`          | List blog posts       |
| GET    | `/api/posts/{slug}`   | Get post by slug      |
| POST   | `/api/contact`        | Submit contact form   |
| GET    | `/actuator/health`    | Health check          |

## License

MIT
