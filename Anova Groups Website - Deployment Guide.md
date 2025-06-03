# Anova Groups Website - Deployment Guide

## Overview

This document provides comprehensive instructions for deploying the Anova Groups professional consulting website. The website is built with React, Vite, Tailwind CSS, and shadcn/ui components.

## Prerequisites

Before deploying the website, ensure you have the following:

- Node.js (version 18 or higher)
- npm or yarn package manager
- Git (for version control)
- A hosting platform account (Netlify, Vercel, or similar)

## Project Structure

```
anova-groups-website/
├── public/
│   ├── index.html
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   └── sections/
│   │       ├── HeroSection.jsx
│   │       ├── ServicesSection.jsx
│   │       ├── AboutSection.jsx
│   │       ├── TestimonialsSection.jsx
│   │       └── ContactSection.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Local Development Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd anova-groups-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

## Building for Production

### 1. Create Production Build

```bash
npm run build
```

This creates a `dist/` directory with optimized production files.

### 2. Preview Production Build

```bash
npm run preview
```

## Deployment Options

### Option 1: Netlify Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Drag and drop the `dist/` folder to deploy
   - Or connect your Git repository for automatic deployments

3. **Configuration:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

### Option 2: Vercel Deployment

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

3. **Configuration:**
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

### Option 3: Traditional Web Hosting

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload files:**
   - Upload all files from the `dist/` directory to your web server
   - Ensure the server supports single-page applications (SPA)

## Environment Configuration

### Development Environment

Create a `.env.local` file for development-specific variables:

```env
VITE_API_URL=http://localhost:3000
VITE_CONTACT_EMAIL=info@anovagroups.com
```

### Production Environment

Set the following environment variables in your hosting platform:

```env
VITE_API_URL=https://api.anovagroups.com
VITE_CONTACT_EMAIL=info@anovagroups.com
```

## Domain Configuration

### Custom Domain Setup

1. **Purchase a domain** (recommended: anovagroups.com)

2. **Configure DNS:**
   - Point your domain to your hosting provider
   - Set up CNAME or A records as required

3. **SSL Certificate:**
   - Most modern hosting platforms provide free SSL certificates
   - Ensure HTTPS is enabled for security

## Performance Optimization

### 1. Image Optimization

- Use WebP format for images when possible
- Implement lazy loading for images
- Compress images before deployment

### 2. Code Splitting

The Vite build process automatically handles code splitting for optimal performance.

### 3. Caching Strategy

Configure your hosting platform to cache static assets:

```
Cache-Control: public, max-age=31536000 (for static assets)
Cache-Control: no-cache (for HTML files)
```

## SEO Configuration

### 1. Meta Tags

The website includes proper meta tags in `index.html`:

- Title: "Anova Groups - Professional Consulting Services | Morrisville, NC"
- Description: Professional consulting services for business growth
- Keywords: consulting, business optimization, strategic planning

### 2. Sitemap

Create a `sitemap.xml` file in the `public/` directory:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://anovagroups.com/</loc>
    <lastmod>2025-06-02</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 3. Robots.txt

Create a `robots.txt` file in the `public/` directory:

```
User-agent: *
Allow: /
Sitemap: https://anovagroups.com/sitemap.xml
```

## Analytics Setup

### Google Analytics

1. Create a Google Analytics account
2. Add the tracking code to `index.html`
3. Configure goals and conversions

### Contact Form Analytics

Monitor form submissions and conversion rates to optimize lead generation.

## Security Considerations

### 1. HTTPS

- Always use HTTPS in production
- Redirect HTTP traffic to HTTPS

### 2. Content Security Policy

Add CSP headers to prevent XSS attacks:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';
```

### 3. Form Security

- Implement proper form validation
- Use CSRF protection for form submissions
- Sanitize all user inputs

## Monitoring and Maintenance

### 1. Uptime Monitoring

Set up monitoring to track website availability:
- Use services like UptimeRobot or Pingdom
- Configure alerts for downtime

### 2. Performance Monitoring

- Monitor Core Web Vitals
- Use tools like Google PageSpeed Insights
- Regular performance audits

### 3. Regular Updates

- Keep dependencies updated
- Monitor for security vulnerabilities
- Regular content updates

## Backup Strategy

### 1. Code Backup

- Use Git for version control
- Regular commits and pushes to remote repository
- Tag releases for easy rollback

### 2. Content Backup

- Regular backups of any dynamic content
- Database backups if applicable
- Asset backups

## Troubleshooting

### Common Issues

1. **Build Failures:**
   - Check Node.js version compatibility
   - Clear node_modules and reinstall dependencies
   - Check for syntax errors in code

2. **Deployment Issues:**
   - Verify build command and output directory
   - Check environment variables
   - Review hosting platform logs

3. **Performance Issues:**
   - Optimize images and assets
   - Enable compression
   - Review bundle size

### Support Contacts

- Technical Support: [Your technical contact]
- Hosting Support: [Hosting provider support]
- Domain Support: [Domain registrar support]

## Conclusion

This deployment guide provides all necessary information to successfully deploy and maintain the Anova Groups website. Follow the steps carefully and refer to the troubleshooting section if you encounter any issues.

For additional support or questions, please contact the development team.

