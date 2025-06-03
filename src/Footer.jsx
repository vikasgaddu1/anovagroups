import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">Anova Groups</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Professional consulting services in Morrisville, NC. We help businesses achieve their goals through strategic planning, optimization, and expert implementation support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Strategic Consulting',
                'Business Analysis',
                'Process Optimization',
                'Implementation Support',
                'Performance Monitoring'
              ].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-primary-foreground/80" />
                <div className="text-sm">
                  <p className="text-primary-foreground/80">117 Bruington Ct</p>
                  <p className="text-primary-foreground/80">Morrisville, NC 27560</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/80" />
                <a 
                  href="tel:+1234567890" 
                  className="text-primary-foreground/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  (919) 555-0123
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/80" />
                <a 
                  href="mailto:info@anovagroups.com" 
                  className="text-primary-foreground/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  info@anovagroups.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 mt-1 text-primary-foreground/80" />
                <div className="text-sm">
                  <p className="text-primary-foreground/80">Monday - Friday</p>
                  <p className="text-primary-foreground/80">9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/80 text-sm">
              © {currentYear} Anova Groups (Gaddu LLC). All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a 
                href="#privacy" 
                className="text-primary-foreground/80 hover:text-white transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="text-primary-foreground/80 hover:text-white transition-colors duration-200 text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

