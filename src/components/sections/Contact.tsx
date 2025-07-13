import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to turn your data into actionable insights? Let's discuss your project.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in discussing new opportunities, whether it's analyzing 
                your business data, building custom dashboards, or creating data-driven solutions 
                that drive real business impact.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-smooth">
                <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="text-center">
                  <a 
                    href="mailto:duvvurubharadwaj@gmail.com" 
                    className="font-medium text-foreground hover:text-primary transition-smooth"
                  >
                    Email
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-smooth">
                <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="text-center">
                  <a 
                    href="tel:+12035078997" 
                    className="font-medium text-foreground hover:text-primary transition-smooth"
                  >
                    Phone
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-smooth">
                <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                  <Linkedin className="h-6 w-6" />
                </div>
                <div className="text-center">
                  <a 
                    href="https://linkedin.com/in/bharadwaj-0934442b5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium text-foreground hover:text-primary transition-smooth"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4 p-4 rounded-lg bg-primary/5">
                <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-medium">United States</div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <Card className="mt-8 gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg text-center">Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Currently available for freelance projects and full-time opportunities. 
                  Response time is typically within 24 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;