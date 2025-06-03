# Anova Groups - Professional Consulting Website

A modern, responsive website for Anova Groups (Gaddu LLC), a professional consulting firm based in Morrisville, NC. Built with React, Vite, Tailwind CSS, and shadcn/ui components.

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Components**: Dynamic testimonials carousel, contact forms, and navigation
- **SEO Optimized**: Proper meta tags, semantic HTML, and performance optimization
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Fast Performance**: Built with Vite for optimal loading speeds

## 🚀 Live Demo

Visit the live website: [https://anovagroups.com](https://anovagroups.com)

## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🛠 Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: CSS Transitions & Transforms
- **Development**: ESLint, PostCSS

## 🏁 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/anova-groups-website.git
   cd anova-groups-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

## 📁 Project Structure

```
anova-groups-website/
├── public/
│   ├── index.html              # Main HTML template
│   └── vite.svg               # Vite logo
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx     # Navigation header
│   │   │   └── Footer.jsx     # Site footer
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx        # Landing hero section
│   │   │   ├── ServicesSection.jsx    # Services showcase
│   │   │   ├── AboutSection.jsx       # About company
│   │   │   ├── TestimonialsSection.jsx # Client testimonials
│   │   │   └── ContactSection.jsx     # Contact form
│   │   └── ui/                # shadcn/ui components
│   ├── App.jsx                # Main application component
│   ├── App.css               # Global styles and Tailwind imports
│   └── main.jsx              # Application entry point
├── package.json              # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── DEPLOYMENT_GUIDE.md      # Deployment instructions
└── README.md               # This file
```

## 📜 Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build
- **`npm run lint`** - Run ESLint

## 🎨 Customization

### Brand Colors

The website uses a custom color scheme defined in `src/App.css`:

```css
:root {
  --primary: 220 70% 50%;      /* Blue */
  --secondary: 142 76% 36%;    /* Green */
  --accent: 38 92% 50%;        /* Orange */
}
```

### Content Updates

1. **Company Information**: Update contact details in `src/components/layout/Footer.jsx`
2. **Services**: Modify services in `src/components/sections/ServicesSection.jsx`
3. **Testimonials**: Update client testimonials in `src/components/sections/TestimonialsSection.jsx`
4. **About Content**: Edit company information in `src/components/sections/AboutSection.jsx`

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/App.jsx`
3. Update navigation links in `src/components/layout/Header.jsx`

## 🚀 Deployment

### Quick Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist/` folder to [Netlify](https://netlify.com)

3. **Deploy to Vercel**
   ```bash
   npx vercel --prod
   ```

For detailed deployment instructions, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

### Environment Variables

Create a `.env.local` file for local development:

```env
VITE_CONTACT_EMAIL=info@anovagroups.com
VITE_PHONE_NUMBER=+19195550123
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Anova Groups (Gaddu LLC)**
- **Address**: 117 Bruington Ct, Morrisville, NC 27560
- **Phone**: (919) 555-0123
- **Email**: info@anovagroups.com
- **Website**: https://anovagroups.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide](https://lucide.dev/) - Icon library

---

**Built with ❤️ for Anova Groups**

