import { Button } from './Button'
import { CheckCircle, Users, Award, MapPin } from 'lucide-react'

const AboutSection = () => {
  const values = [
    {
      icon: CheckCircle,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable outcomes that directly impact your bottom line.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority. We tailor our approach to meet your unique needs.'
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Our consultants bring years of industry experience and proven methodologies.'
    }
  ]

  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Why Choose 
                <span className="text-gradient block">Anova Groups?</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Located in Raleigh, NC, Anova Groups (Gaddu LLC) brings years of consulting expertise to help businesses achieve their goals through innovative strategies and proven methodologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We understand that every business is unique, which is why we take a personalized approach to consulting. Our team works closely with you to understand your challenges, identify opportunities, and develop strategies that drive sustainable growth.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Local Expertise, Global Perspective</h4>
                  <p className="text-muted-foreground text-sm">Deep understanding of the Triangle area business landscape with international best practices.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Proven Track Record</h4>
                  <p className="text-muted-foreground text-sm">Consistent delivery of measurable results across diverse industries and business sizes.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Collaborative Approach</h4>
                  <p className="text-muted-foreground text-sm">We work as an extension of your team, ensuring knowledge transfer and sustainable improvements.</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Meet Our Team
            </Button>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">Professional Team</h3>
                  <p className="text-muted-foreground">Expert consultants ready to help your business grow</p>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border border-border">
              <div className="flex items-center space-x-3">
                <MapPin className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-sm font-semibold text-foreground">Morrisville, NC</div>
                  <div className="text-xs text-muted-foreground">117 Bruington Ct</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Our Core Values
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and ensure we deliver exceptional value to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

