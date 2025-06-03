import { useState } from 'react'
import { Button } from './Button'
import { MapPin, Phone, Mail, Clock, Send, Calendar } from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    contactMethod: 'email'
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you within 24 hours.')
  }

  return (
    <section id="contact" className="py-20 section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to transform your business? Let's start with a conversation. Reach out to us and discover how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Send us a Message
              </h3>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone and Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="(919) 555-0123"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Your company"
                  />
                </div>
              </div>

              {/* Service Interest */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="strategic-planning">Strategic Planning</option>
                  <option value="business-optimization">Business Optimization</option>
                  <option value="implementation-support">Implementation Support</option>
                  <option value="general-consulting">General Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your business challenges and how we can help..."
                />
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="email"
                      checked={formData.contactMethod === 'email'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Email
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="phone"
                      checked={formData.contactMethod === 'phone'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Phone
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Office Address</h4>
                    <p className="text-muted-foreground">
                      8801 Fast Park Dr #301<br />
                      Raleigh, NC 27617
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone Number</h4>
                    <a 
                      href="tel:+18338826682" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      (833) 882-6682
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email Address</h4>
                    <a 
                      href="mailto:info@anovagroups.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@anovagroups.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday<br />
                      9:00 AM - 6:00 PM EST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Booking */}
            <div className="bg-primary rounded-2xl p-8 text-white">
              <div className="text-center">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-4">
                  Schedule a Free Consultation
                </h3>
                <p className="mb-6 text-primary-foreground/90">
                  Prefer to talk directly? Book a 30-minute consultation call to discuss your business needs.
                </p>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Book Consultation Call
                </Button>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-secondary/10 rounded-2xl p-6 border border-secondary/20">
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">
                  Quick Response Guarantee
                </h4>
                <p className="text-muted-foreground text-sm">
                  We respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

