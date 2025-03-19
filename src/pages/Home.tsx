
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import PropertyCard, { PropertyType } from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { 
  Building, 
  Home as HomeIcon, 
  Search, 
  MapPin, 
  CheckCircle, 
  ArrowRight,
  Phone
} from 'lucide-react';

// Sample featured properties data
const featuredProperties: PropertyType[] = [
  {
    id: "sale-1",
    title: "Spacious 3 BHK Apartment in Sector 20",
    description: "A well-ventilated 3 BHK apartment with modern amenities, located in the heart of Panchkula.",
    price: "75,00,000",
    location: "Sector 20, Panchkula",
    bedrooms: 3,
    bathrooms: 2,
    area: "1500",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    isFeatured: true,
    type: "sale"
  },
  {
    id: "rent-1",
    title: "2 BHK Furnished Flat near City Center",
    description: "Fully furnished 2 BHK flat with all essential amenities, close to shopping malls and schools.",
    price: "25,000",
    priceUnit: "/month",
    location: "Sector 9, Panchkula",
    bedrooms: 2,
    bathrooms: 2,
    area: "1200",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    isFeatured: true,
    type: "rent"
  },
  {
    id: "sale-5",
    title: "3 BHK Penthouse with Terrace",
    description: "Luxurious 3 BHK penthouse with private terrace, offering panoramic views of the city.",
    price: "95,00,000",
    location: "Sector 2, Panchkula",
    bedrooms: 3,
    bathrooms: 3,
    area: "2200",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    isFeatured: true,
    type: "sale"
  }
];

const HomePage = () => {
  const [searchType, setSearchType] = useState('buy');
  const [searchLocation, setSearchLocation] = useState('');
  const [propertyType, setPropertyType] = useState('any');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would redirect to search results
    window.location.href = `/properties/${searchType === 'buy' ? 'sale' : 'rent'}`;
  };

  return (
    <>
      <Helmet>
        <title>M/s Friends Property Consultants - Your Trusted Real Estate Partner in Panchkula</title>
        <meta name="description" content="Find your dream property with M/s Friends Property Consultants, the leading real estate consultancy in Panchkula, Haryana." />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center bg-hero-pattern overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-white/30 z-0"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div className="text-left md:pr-12">
                  <div className="mb-4 inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    Trusted Real Estate Consultants Since 2010
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-6">
                    <span className="text-primary block mb-2">M/s Friends</span>
                    <span>Property Consultants</span>
                  </h1>
                  
                  <p className="text-muted-foreground text-lg mb-8 max-w-xl">
                    Your trusted partner in finding the perfect property in Panchkula, Haryana. We specialize in residential and commercial properties for sale and rent.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button asChild className="bg-primary hover:bg-primary/90 text-white px-6 py-6">
                      <Link to="/properties/sale">
                        Properties for Sale
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="px-6 py-6">
                      <Link to="/properties/rent">
                        Properties for Rent
                      </Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={300}>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-gray-100">
                  <h2 className="text-2xl font-serif font-bold mb-6">Find Your Dream Property</h2>
                  
                  <form onSubmit={handleSearch} className="space-y-5">
                    <div className="flex border rounded-md overflow-hidden">
                      <Button 
                        type="button" 
                        variant={searchType === 'buy' ? 'default' : 'ghost'} 
                        className="flex-1 rounded-none"
                        onClick={() => setSearchType('buy')}
                      >
                        Buy
                      </Button>
                      <Button 
                        type="button" 
                        variant={searchType === 'rent' ? 'default' : 'ghost'} 
                        className="flex-1 rounded-none"
                        onClick={() => setSearchType('rent')}
                      >
                        Rent
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="font-medium">Location</span>
                      </div>
                      <Input
                        type="text"
                        placeholder="Enter location (e.g., Sector 20, Panchkula)"
                        value={searchLocation}
                        onChange={(e) => setSearchLocation(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-primary" />
                        <span className="font-medium">Property Type</span>
                      </div>
                      <Select
                        value={propertyType}
                        onValueChange={setPropertyType}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any Type</SelectItem>
                          <SelectItem value="apartment">Apartment</SelectItem>
                          <SelectItem value="house">House/Villa</SelectItem>
                          <SelectItem value="plot">Plot/Land</SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button type="submit" className="w-full gap-2">
                      <Search className="h-4 w-4" />
                      Search Properties
                    </Button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Featured Properties */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Featured Properties</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Discover our handpicked selection of premium properties in Panchkula and surrounding areas.
                </p>
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProperties.map((property, index) => (
                <AnimatedSection key={property.id} delay={index * 100}>
                  <PropertyCard property={property} />
                </AnimatedSection>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="gap-2">
                <Link to="/properties/all">
                  View All Properties
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Services</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  We offer a comprehensive range of real estate services to meet all your property needs.
                </p>
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection delay={100}>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <HomeIcon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Property Sales</h3>
                  <p className="text-muted-foreground mb-4">
                    Expert assistance in buying and selling residential and commercial properties across Panchkula and surrounding areas.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">Residential Flats & Apartments</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">Independent Houses & Villas</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">Commercial Properties</span>
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/properties/sale">
                      View Properties
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Building className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Property Rentals</h3>
                  <p className="text-muted-foreground mb-4">
                    Find the perfect rental property or lease your property to reliable tenants with our rental services.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">Residential Rentals</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">Commercial Leasing</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">Tenant Screening</span>
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/properties/rent">
                      View Rentals
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={300}>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Phone className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Property Consultation</h3>
                  <p className="text-muted-foreground mb-4">
                    Expert advice on real estate investments, property valuation, and market trends in Panchkula.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">Investment Advisory</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">Property Valuation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">Market Analysis</span>
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">
                      Get Consultation
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What Our Clients Say</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Don't just take our word for it. See what our satisfied clients have to say about our services.
                </p>
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="fade-in-up" delay={100}>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h4 className="font-bold">Rajesh Sharma</h4>
                      <p className="text-sm text-muted-foreground">Property Buyer</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "M/s Friends Property Consultants made buying our first home a breeze. Their knowledge of the local market and personalized service exceeded our expectations."
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-up" delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h4 className="font-bold">Priya Verma</h4>
                      <p className="text-sm text-muted-foreground">Property Seller</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "We were amazed at how quickly they sold our property at a great price. Their marketing strategy and negotiation skills are truly impressive."
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-up" delay={300}>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h4 className="font-bold">Amit Kapoor</h4>
                      <p className="text-sm text-muted-foreground">Commercial Property Investor</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "Their insights into the commercial real estate market helped us make an informed investment decision. We've been working with them for years and highly recommend their services."
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Find Your Dream Property?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you're looking to buy, sell, or rent a property, our team is here to help you every step of the way.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/properties/all">
                    Browse Properties
                  </Link>
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

export default HomePage;
