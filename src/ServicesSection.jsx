import { Button } from '@/components/ui/button'
import { Target, TrendingUp, Settings, ArrowRight } from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Develop clear roadmaps for sustainable growth with comprehensive strategic planning that aligns with your business objectives.',
      features: [
        'Market Analysis & Research',
        'Competitive Positioning',
        'Growth Strategy Development',
        'Risk Assessment & Mitigation'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Business Optimization',
      description: 'Streamline operations and maximize efficiency through data-driven process improvements and performance optimization.',
      features: [
        'Process Analysis & Improvement',
        'Performance Metrics & KPIs',
        'Cost Reduction Strategies',
        'Operational Excellence'
      ]
    },
    {
      icon: Settings,
      title: 'Implementation Support',
      description: 'Execute strategies with expert guidance and hands-on support to ensure successful implementation and measurable results.',
      features: [
        'Project Management',
        'Change Management',
        'Training & Development',
        'Ongoing Support & Monitoring'
      ]
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Consulting Services
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive solutions tailored to your business needs. We combine strategic thinking with practical implementation to deliver results that matter.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div 
                key={index}
                className="group bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )
          })}
        </div>

        {/* Process Section */}
        <div className="bg-section-bg rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Our Proven Process
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a structured approach to ensure successful outcomes for every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Initial consultation and comprehensive assessment of your business needs and challenges.'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Development of customized strategies and detailed implementation roadmaps.'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Hands-on execution with expert guidance and continuous monitoring of progress.'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Ongoing support, performance monitoring, and continuous improvement initiatives.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {process.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your business challenges and explore how our expertise can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

