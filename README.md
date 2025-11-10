# M Ashar Enterprises - Professional Website

A modern, responsive website for M Ashar Enterprises, a leading logistics and transportation company in Pakistan.

## Project Overview

This is a Next.js 14 website built with:
- **Framework:** Next.js 14 (React)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Ready for Vercel

## Features

- **Responsive Design:** Works perfectly on desktop, tablet, and mobile devices
- **Modern UI:** Clean, professional design with orange and black branding
- **Fast Performance:** Optimized for speed and SEO
- **Multiple Pages:**
  - Home (Hero section with services overview)
  - About (Company story, mission, vision)
  - Services (Detailed service descriptions)
  - Fleet (Fleet capabilities and specifications)
  - Team (Leadership and management team)
  - Contact (Contact form and information)

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd mashar-enterprises
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
mashar-enterprises/
├── app/
│   ├── layout.tsx          # Root layout with Navbar and Footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── services/
│   │   └── page.tsx        # Services page
│   ├── fleet/
│   │   └── page.tsx        # Fleet page
│   ├── team/
│   │   └── page.tsx        # Team page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   └── Footer.tsx          # Footer component
├── public/
│   └── logo.png            # Company logo
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Customization

### Update Company Information
- Edit contact details in `components/Footer.tsx` and `app/contact/page.tsx`
- Update team members in `app/about/page.tsx` and `app/team/page.tsx`
- Modify services in `app/services/page.tsx`

### Change Colors
- Primary color (Orange): `#F26B21` - Update in Tailwind classes
- Secondary color (Black): `#000000`
- Accent color (Blue): `#3B82F6`

### Add Images
- Place images in the `public/` folder
- Reference them using Next.js Image component for optimization

## Deployment Instructions

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/mashar-enterprises.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up or log in
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Connect Domain:**
   - In Vercel, go to Settings → Domains
   - Add your domain: `masharenterprises.com`
   - Get the CNAME value from Vercel
   - In Hostinger DNS settings, add a CNAME record pointing to Vercel
   - Wait for DNS propagation (usually 30-60 minutes)

4. **Enable HTTPS:**
   - Vercel automatically provides free SSL certificates
   - Your site will be accessible at `https://masharenterprises.com`

## Building for Production

```bash
npm run build
npm start
```

## SEO Optimization

The website includes:
- Meta tags for each page
- Open Graph tags for social sharing
- Semantic HTML structure
- Mobile-friendly responsive design
- Fast loading times

## Performance

- Optimized images
- Code splitting
- CSS optimization
- Minimal JavaScript bundle

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contact Information

- **Phone:** +123-456-7890, 021-32356555
- **Email:** masharenterprises@gmail.com
- **Website:** www.masharenterprises.com
- **Head Office:** Plot No. 538-A, Street No. 4, Gate No. 3, Quaid-e-Azam Truck Stand, Hawksbay Road, Karachi
- **Regional Office:** Plot No. 32, Sabzazar Scheme, Lahore

## Support

For issues or questions, please contact the development team or refer to the Next.js documentation at [nextjs.org](https://nextjs.org).

## License

This project is proprietary to M Ashar Enterprises.

---

**Created:** October 2025
**Last Updated:** October 20, 2025
