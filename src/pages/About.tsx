
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Award, Building, Phone } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - M/s Friends Property Consultants</title>
        <meta name="description" content="Learn about M/s Friends Property Consultants, your trusted real estate partner in Panchkula, Haryana." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen">
        {/* Header */}
        <section className="bg-medical-light py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">About M/s Friends Property Consultants</h1>
              <p className="text-lg text-muted-foreground">Your trusted partner in finding the perfect property in Panchkula and surrounding areas.</p>
            </div>
          </div>
        </section>
        
        {/* Company Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fade-in-up">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80" 
                    alt="M/s Friends Property Consultants Office" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={300}>
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-6">
                  Established in 2010, M/s Friends Property Consultants has grown to become one of the most trusted real estate consultancy firms in Panchkula, Haryana. Our journey began with a simple mission: to make property buying, selling, and renting a hassle-free experience for our clients.
                </p>
                <p className="text-muted-foreground mb-6">
                  Over the years, we have helped hundreds of families find their dream homes and assisted property owners in getting the best value for their investments. Our deep knowledge of the local real estate market and commitment to client satisfaction sets us apart.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Trusted by</h3>
                      <p className="text-2xl font-bold">500+ Clients</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Properties</h3>
                      <p className="text-2xl font-bold">1000+</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-serif font-bold mb-4">Meet Our Team</h2>
                <p className="text-muted-foreground">
                  Our experienced team of real estate professionals is dedicated to providing you with exceptional service.
                </p>
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="fade-in-up" delay={100}>
                <Card className="text-center overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                      alt="Mr. Sandeep Gupta" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">Mr. Sandeep Gupta</h3>
                    <p className="text-primary font-medium mb-4">Founder & CEO</p>
                    <p className="text-muted-foreground text-sm mb-4">
                      With over 15 years of experience in real estate, Sandeep leads our team with vision and expertise to deliver exceptional service.
                    </p>
                    <Button variant="outline" className="mt-2">
                      <Phone className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-up" delay={200}>
                <Card className="text-center overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
                      alt="Mrs. Priya Sharma" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">Mrs. Priya Sharma</h3>
                    <p className="text-primary font-medium mb-4">Senior Property Consultant</p>
                    <p className="text-muted-foreground text-sm mb-4">
                      Priya specializes in residential properties and has helped countless families find their dream homes in Panchkula.
                    </p>
                    <Button variant="outline" className="mt-2">
                      <Phone className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-up" delay={300}>
                <Card className="text-center overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                      alt="Mr. Rajesh Kumar" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">Mr. Rajesh Kumar</h3>
                    <p className="text-primary font-medium mb-4">Commercial Property Expert</p>
                    <p className="text-muted-foreground text-sm mb-4">
                      Rajesh has extensive knowledge of commercial real estate and helps businesses find the perfect spaces for their operations.
                    </p>
                    <Button variant="outline" className="mt-2">
                      <Phone className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-serif font-bold mb-4">Our Values</h2>
                <p className="text-muted-foreground">
                  At M/s Friends Property Consultants, we are guided by these core principles in everything we do.
                </p>
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="fade-in-up" delay={100}>
                <div className="text-center p-6 rounded-lg shadow-sm border border-border">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Integrity</h3>
                  <p className="text-muted-foreground">
                    We believe in honest and transparent dealings. Our clients trust us because we always put their interests first.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-up" delay={200}>
                <div className="text-center p-6 rounded-lg shadow-sm border border-border">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Client-Centric</h3>
                  <p className="text-muted-foreground">
                    We tailor our services to meet the unique needs of each client, ensuring a personalized experience throughout.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-up" delay={300}>
                <div className="text-center p-6 rounded-lg shadow-sm border border-border">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Expertise</h3>
                  <p className="text-muted-foreground">
                    Our team's deep knowledge of the local real estate market allows us to provide expert advice and valuable insights.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-primary/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-serif font-bold mb-6">Ready to Find Your Dream Property?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you're looking to buy, sell, or rent a property, our team is here to help you every step of the way.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Contact Us
                </Button>
                <Button size="lg" variant="outline">
                  Browse Properties
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
