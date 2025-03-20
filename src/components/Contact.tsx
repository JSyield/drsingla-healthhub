
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import AnimatedSection from '@/components/AnimatedSection';
import { cn } from '@/lib/utils';
import { submitContactForm } from '@/lib/supabase';

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif font-semibold">Contact Information</h2>
      <p className="text-muted-foreground mb-6">
        Feel free to reach out with any questions about properties or to schedule a viewing.
        Our team is here to assist you find your dream property.
      </p>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">Phone</h3>
            <p className="text-muted-foreground">+91-8968892466</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-muted-foreground">friends.properties20@gmail.com</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">Location</h3>
            <p className="text-muted-foreground">SCO 272, Sector-20, Panchkula - 134116, Haryana, India</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">Office Hours</h3>
            <p className="text-muted-foreground">Mon-Sat: 9:00 AM - 7:00 PM</p>
            <p className="text-muted-foreground">Sunday: By Appointment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitContactForm(formData);
      
      toast({
        title: "Inquiry Received",
        description: "Thank you for your message. We'll contact you shortly.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your inquiry. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border border-border shadow-sm bg-white/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe the property you're looking for or your inquiry"
                className="min-h-[120px]"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <span className="animate-spin mr-2">
                    <svg className="h-4 w-4" viewBox="0 0 24 24">
                      <circle 
                        className="opacity-25" 
                        cx="12" 
                        cy="12" 
                        r="10" 
                        stroke="currentColor" 
                        strokeWidth="4"
                        fill="none"
                      />
                      <path 
                        className="opacity-75" 
                        fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  </span>
                  Processing...
                </span>
              ) : (
                <span className="flex items-center">
                  <Send className="h-4 w-4 mr-2" />
                  Send Inquiry
                </span>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

const Contact = () => {
  return (
    <section className="section-container" id="contact">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <AnimatedSection>
          <div className="chip mb-4">Get In Touch</div>
          <h2 className="section-title">Contact Our Experts</h2>
          <p className="section-subtitle">
            Looking for your dream property? Have questions about listings? 
            Reach out to us and our expert property consultants will assist you.
          </p>
        </AnimatedSection>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <AnimatedSection animation="fade-in-up" delay={100}>
          <ContactInfo />
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in-up" delay={300}>
          <ContactForm />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
