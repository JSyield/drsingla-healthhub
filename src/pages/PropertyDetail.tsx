
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  BedDouble, 
  Bath, 
  SquareFeet, 
  MapPin, 
  Phone, 
  Mail, 
  Heart, 
  Share2,
  ArrowLeft,
  Check
} from 'lucide-react';

// Import the property data
import { PropertyType } from '@/components/PropertyCard';

// Sample data for property details - same as in Properties.tsx but with more fields
const propertiesData: (PropertyType & { features?: string[], agentName?: string, agentPhone?: string, agentEmail?: string, images?: string[] })[] = [
  {
    id: "sale-1",
    title: "Spacious 3 BHK Apartment in Sector 20",
    description: "A well-ventilated 3 BHK apartment with modern amenities, located in the heart of Panchkula. This apartment offers a comfortable living space with quality fittings and fixtures. It features a spacious living room, modern kitchen, and three well-proportioned bedrooms with attached bathrooms. The apartment comes with a dedicated parking space and 24/7 security.",
    price: "75,00,000",
    location: "Sector 20, Panchkula",
    bedrooms: 3,
    bathrooms: 2,
    area: "1500",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    isFeatured: true,
    type: "sale",
    features: [
      "24/7 Security",
      "Power Backup",
      "Lift Access",
      "Visitor Parking",
      "Piped Gas",
      "Water Supply",
      "Park View",
      "Near Schools & Markets"
    ],
    agentName: "Mr. Sandeep Gupta",
    agentPhone: "+91-8968892466",
    agentEmail: "friends.properties20@gmail.com"
  },
  {
    id: "rent-1",
    title: "2 BHK Furnished Flat near City Center",
    description: "Fully furnished 2 BHK flat with all essential amenities, close to shopping malls and schools. This apartment comes with modern furniture, air conditioning in all rooms, and a fully equipped kitchen. Located in a prime residential area with easy access to public transportation. The society offers amenities like children's play area, jogging track, and 24-hour security.",
    price: "25,000",
    priceUnit: "/month",
    location: "Sector 9, Panchkula",
    bedrooms: 2,
    bathrooms: 2,
    area: "1200",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
    ],
    isFeatured: true,
    type: "rent",
    features: [
      "Fully Furnished",
      "AC in All Rooms",
      "Modular Kitchen",
      "24/7 Security",
      "Power Backup",
      "Covered Parking",
      "Close to Market",
      "Swimming Pool"
    ],
    agentName: "Mrs. Priya Sharma",
    agentPhone: "+91-8968892466",
    agentEmail: "friends.properties20@gmail.com"
  }
];

// For real app, include all properties here
const allProperties = propertiesData;

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [activeImage, setActiveImage] = useState(0);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Find the property with the given ID
  const property = allProperties.find(p => p.id === id);

  if (!property) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
          <p className="mb-8">The property you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/properties/all">Browse All Properties</Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }

  const handleImageChange = (index: number) => {
    setActiveImage(index);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Inquiry Sent Successfully",
        description: `We'll get back to you about ${property.title} as soon as possible.`,
      });
      
      setContactForm({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>{property.title} - M/s Friends Property Consultants</title>
        <meta name="description" content={property.description.substring(0, 160)} />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-16 min-h-screen">
        {/* Back Navigation */}
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link to={`/properties/${property.type}`}>
              <ArrowLeft className="h-4 w-4" />
              Back to Properties
            </Link>
          </Button>
        </div>
        
        {/* Property Images */}
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                  <img 
                    src={property.images?.[activeImage] || property.image} 
                    alt={property.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {property.images && property.images.length > 1 && (
                  <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                    {property.images.map((img, index) => (
                      <button 
                        key={index}
                        onClick={() => handleImageChange(index)}
                        className={`relative h-20 w-32 shrink-0 rounded-md overflow-hidden border-2 ${activeImage === index ? 'border-primary' : 'border-transparent'}`}
                      >
                        <img 
                          src={img} 
                          alt={`${property.title} - view ${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <div>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <h1 className="text-2xl font-serif font-bold mb-2">{property.title}</h1>
                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                          <MapPin className="h-4 w-4 mr-1 text-primary" />
                          <span>{property.location}</span>
                        </div>
                        
                        <div className="mb-6">
                          <span className="text-3xl font-bold text-primary">
                            ₹{property.price}
                          </span>
                          {property.priceUnit && (
                            <span className="text-sm text-muted-foreground ml-1">
                              {property.priceUnit}
                            </span>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {property.bedrooms !== undefined && (
                            <div className="text-center p-3 rounded-lg bg-gray-50">
                              <BedDouble className="h-6 w-6 text-primary mx-auto mb-1" />
                              <p className="font-medium">{property.bedrooms}</p>
                              <p className="text-xs text-muted-foreground">Bedrooms</p>
                            </div>
                          )}
                          
                          {property.bathrooms !== undefined && (
                            <div className="text-center p-3 rounded-lg bg-gray-50">
                              <Bath className="h-6 w-6 text-primary mx-auto mb-1" />
                              <p className="font-medium">{property.bathrooms}</p>
                              <p className="text-xs text-muted-foreground">Bathrooms</p>
                            </div>
                          )}
                          
                          {property.area && (
                            <div className="text-center p-3 rounded-lg bg-gray-50">
                              <SquareFeet className="h-6 w-6 text-primary mx-auto mb-1" />
                              <p className="font-medium">{property.area}</p>
                              <p className="text-xs text-muted-foreground">Sq.ft</p>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="font-medium mb-2">Contact Agent</h3>
                        <div className="flex items-center mb-4">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                            <Phone className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{property.agentName || "Property Agent"}</p>
                            <p className="text-sm text-primary">{property.agentPhone || "+91-8968892466"}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2">
                          <Button className="w-full" variant="outline">
                            <Heart className="h-4 w-4 mr-2" />
                            Save
                          </Button>
                          <Button className="w-full" variant="outline">
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Property Details */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <AnimatedSection>
                  <h2 className="text-2xl font-serif font-bold mb-4">Property Details</h2>
                  <div className="prose max-w-none">
                    <p className="text-muted-foreground mb-6">{property.description}</p>
                  </div>
                  
                  {property.features && property.features.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-xl font-medium mb-4">Features & Amenities</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {property.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <Check className="h-5 w-5 text-primary mr-2" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </AnimatedSection>
                
                {/* Location Map Placeholder */}
                <AnimatedSection delay={200} className="mt-8">
                  <h3 className="text-xl font-medium mb-4">Location</h3>
                  <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-muted-foreground">Map view of {property.location}</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
              
              <div>
                <AnimatedSection>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium mb-4">Interested in this property?</h3>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="name">Your Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={contactForm.name}
                            onChange={handleFormChange}
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={contactForm.email}
                            onChange={handleFormChange}
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={contactForm.phone}
                            onChange={handleFormChange}
                            placeholder="Enter your phone number"
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={contactForm.message}
                            onChange={handleFormChange}
                            placeholder="I'm interested in this property. Please contact me."
                            rows={4}
                            required
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                
                <AnimatedSection delay={200} className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium mb-3">Contact Agent Directly</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Phone className="h-5 w-5 text-primary mr-3" />
                          <span>{property.agentPhone || "+91-8968892466"}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-5 w-5 text-primary mr-3" />
                          <span>{property.agentEmail || "friends.properties20@gmail.com"}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
        
        {/* Similar Properties Section (placeholder) */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold mb-8 text-center">You May Also Like</h2>
            <p className="text-center text-muted-foreground mb-8">
              Explore more properties similar to this one
            </p>
            
            <div className="text-center">
              <Button asChild>
                <Link to={`/properties/${property.type}`}>View More Properties</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default PropertyDetail;
