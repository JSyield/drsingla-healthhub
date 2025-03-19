
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { 
  Heart, 
  Share2, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  BedDouble, 
  Bath, 
  Ruler, 
  Building
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { getPropertyById } from '@/lib/supabase';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Sample images for the property gallery
const sampleImages = [
  'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
];

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Valid phone number is required" }),
  message: z.string().min(10, { message: "Message should be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof formSchema>;

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [activeImage, setActiveImage] = useState(0);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "I'm interested in this property. Please contact me with more information.",
    },
  });
  
  // Fetch property data
  const { data: property, isLoading, error } = useQuery({
    queryKey: ['property', id],
    queryFn: () => getPropertyById(id || ''),
    enabled: !!id,
  });
  
  const onSubmit = (data: ContactFormValues) => {
    console.log("Form submitted:", data);
    toast({
      title: "Inquiry Sent",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  };
  
  // Placeholder data for demonstration
  const propertyData = property || {
    id: "sale-1",
    title: "Spacious 3 BHK Apartment in Sector 20",
    description: "A well-ventilated 3 BHK apartment with modern amenities, located in the heart of Panchkula. This beautiful apartment offers panoramic views of the city and is close to shopping malls, schools, and hospitals.\n\nThe apartment features a large living room, a modern kitchen with built-in appliances, three spacious bedrooms with attached bathrooms, and a balcony overlooking the garden area. The complex includes amenities such as 24x7 security, power backup, covered parking, and a children's play area.",
    price: "75,00,000",
    location: "Sector 20, Panchkula",
    bedrooms: 3,
    bathrooms: 2,
    area: "1500",
    image: sampleImages[0],
    isFeatured: true,
    type: "sale",
    features: [
      "24x7 Security",
      "Power Backup",
      "Covered Parking",
      "Children's Play Area",
      "Garden",
      "Swimming Pool",
      "Gymnasium",
      "Club House",
    ],
    listedDate: "2023-10-15",
    agent: {
      name: "Sandeep Gupta",
      phone: "+91-8968892466",
      email: "friends.properties20@gmail.com",
    },
  };
  
  if (isLoading) {
    return <div className="container mx-auto px-4 py-16 text-center">Loading property details...</div>;
  }
  
  if (error) {
    return <div className="container mx-auto px-4 py-16 text-center">Error loading property details. Please try again.</div>;
  }
  
  return (
    <>
      <Helmet>
        <title>{propertyData.title} | M/s Friends Property Consultants</title>
        <meta name="description" content={propertyData.description.slice(0, 160)} />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-16 pb-24">
        <div className="container mx-auto px-4">
          {/* Property Header */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">{propertyData.title}</h1>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{propertyData.location}</span>
                </div>
              </div>
              
              <div className="flex flex-col items-end">
                <div className="text-3xl font-bold text-primary mb-1">
                  ₹{propertyData.price}
                  {propertyData.type === 'rent' && <span className="text-sm text-muted-foreground ml-1">/month</span>}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    <span className="hidden sm:inline">Save</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Share2 className="h-4 w-4" />
                    <span className="hidden sm:inline">Share</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Property Images */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-lg h-[400px]">
                <img 
                  src={sampleImages[activeImage]} 
                  alt={propertyData.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              {sampleImages.slice(0, 4).map((image, index) => (
                <div 
                  key={index}
                  className={`overflow-hidden rounded-lg h-[192px] cursor-pointer ${index === activeImage ? 'ring-2 ring-primary' : ''}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img 
                    src={image} 
                    alt={`Property image ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Property Details & Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="details">
                <TabsList className="mb-6">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                </TabsList>
                
                <TabsContent value="details" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-serif font-bold mb-4">Property Details</h2>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {propertyData.bedrooms && (
                        <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                          <BedDouble className="h-6 w-6 text-primary mb-2" />
                          <span className="font-medium">{propertyData.bedrooms}</span>
                          <span className="text-sm text-muted-foreground">Bedrooms</span>
                        </div>
                      )}
                      
                      {propertyData.bathrooms && (
                        <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                          <Bath className="h-6 w-6 text-primary mb-2" />
                          <span className="font-medium">{propertyData.bathrooms}</span>
                          <span className="text-sm text-muted-foreground">Bathrooms</span>
                        </div>
                      )}
                      
                      {propertyData.area && (
                        <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                          <Ruler className="h-6 w-6 text-primary mb-2" />
                          <span className="font-medium">{propertyData.area}</span>
                          <span className="text-sm text-muted-foreground">Sq.ft</span>
                        </div>
                      )}
                      
                      <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                        <Building className="h-6 w-6 text-primary mb-2" />
                        <span className="font-medium capitalize">{propertyData.type === 'sale' ? 'Sale' : 'Rent'}</span>
                        <span className="text-sm text-muted-foreground">Type</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">Description</h3>
                    <div className="text-muted-foreground whitespace-pre-line">
                      {propertyData.description}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="features" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-serif font-bold mb-4">Property Features</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {propertyData.features?.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 p-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="location" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-serif font-bold mb-4">Location</h2>
                    
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                      <p className="text-muted-foreground">Map view will be displayed here</p>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">Address</h3>
                    <p className="text-muted-foreground mb-4">{propertyData.location}</p>
                    
                    <h3 className="text-xl font-bold mb-3">Nearby Facilities</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>• Schools: Within 1-2 km</p>
                      <p>• Hospitals: Within 3 km</p>
                      <p>• Shopping Centers: Within 1 km</p>
                      <p>• Public Transport: Bus stand within 500m</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div>
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="text-xl font-bold mb-4">Contact Agent</h3>
                
                <div className="bg-muted rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">{propertyData.agent.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-bold">{propertyData.agent.name}</h4>
                      <p className="text-sm text-muted-foreground">Property Consultant</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>{propertyData.agent.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>{propertyData.agent.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>Listed on {propertyData.listedDate}</span>
                    </div>
                  </div>
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Your message" rows={4} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full">Send Inquiry</Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Separator />
      
      <Footer />
    </>
  );
};

export default PropertyDetail;
