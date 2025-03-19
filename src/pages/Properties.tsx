
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { PropertyType } from '@/components/PropertyCard';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Search, SlidersHorizontal, X } from 'lucide-react';

// Sample data for property listings
const propertiesData: PropertyType[] = [
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
    id: "sale-2",
    title: "Luxury 4 BHK Villa with Garden",
    description: "Stunning 4 BHK villa with landscaped garden, swimming pool, and modern interiors.",
    price: "1,25,00,000",
    location: "Sector 8, Panchkula",
    bedrooms: 4,
    bathrooms: 4,
    area: "3200",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
    type: "sale"
  },
  {
    id: "sale-3",
    title: "2 BHK Apartment near Parade Ground",
    description: "Well-maintained 2 BHK apartment with balcony, close to Parade Ground and market area.",
    price: "45,00,000",
    location: "Sector 5, Panchkula",
    bedrooms: 2,
    bathrooms: 2,
    area: "1100",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    type: "sale"
  },
  {
    id: "sale-4",
    title: "Commercial Shop in Sector 11 Market",
    description: "Prime location commercial shop in the busy market area of Sector 11, ideal for retail business.",
    price: "90,00,000",
    location: "Sector 11, Panchkula",
    area: "450",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80",
    type: "sale"
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
    id: "rent-2",
    title: "1 BHK Studio Apartment",
    description: "Cozy 1 BHK studio apartment, perfect for bachelors or small families, with modern amenities.",
    price: "15,000",
    priceUnit: "/month",
    location: "Sector 15, Panchkula",
    bedrooms: 1,
    bathrooms: 1,
    area: "650",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    type: "rent"
  },
  {
    id: "rent-3",
    title: "3 BHK Independent House with Lawn",
    description: "Spacious 3 BHK independent house with lawn, parking space, and modern interiors.",
    price: "35,000",
    priceUnit: "/month",
    location: "Sector 7, Panchkula",
    bedrooms: 3,
    bathrooms: 3,
    area: "2000",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    type: "rent"
  },
  {
    id: "rent-4",
    title: "2 BHK Apartment in Gated Society",
    description: "Well-maintained 2 BHK apartment in a secure gated society with amenities like gym and swimming pool.",
    price: "22,000",
    priceUnit: "/month",
    location: "Sector 20, Panchkula",
    bedrooms: 2,
    bathrooms: 2,
    area: "1100",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    type: "rent"
  }
];

const Properties = () => {
  const { type = 'all' } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    propertyType: 'all',
    bedrooms: 'any',
    priceRange: [0, 20000000] // 0 to 2 crore in case of sale
  });

  // Filter properties based on type (rent/sale)
  const filteredByType = type === 'all' 
    ? propertiesData 
    : propertiesData.filter(property => property.type === type);

  // Apply search and additional filters
  const filteredProperties = filteredByType.filter(property => {
    // Search filter
    const matchesSearch = searchQuery === '' || 
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Property type filter
    const matchesPropertyType = filters.propertyType === 'all' || 
      (filters.propertyType === 'residential' && property.bedrooms !== undefined) ||
      (filters.propertyType === 'commercial' && property.bedrooms === undefined);
    
    // Bedrooms filter
    const matchesBedrooms = filters.bedrooms === 'any' || 
      (property.bedrooms !== undefined && property.bedrooms.toString() === filters.bedrooms);
    
    // Price filter
    const propertyPrice = parseInt(property.price.replace(/,/g, ''));
    const matchesPrice = propertyPrice >= filters.priceRange[0] && propertyPrice <= filters.priceRange[1];
    
    return matchesSearch && matchesPropertyType && matchesBedrooms && matchesPrice;
  });

  const handleTypeChange = (newType: string) => {
    navigate(`/properties/${newType}`);
  };

  const resetFilters = () => {
    setSearchQuery('');
    setFilters({
      propertyType: 'all',
      bedrooms: 'any',
      priceRange: [0, 20000000]
    });
  };

  return (
    <>
      <Helmet>
        <title>
          {type === 'sale' 
            ? 'Properties for Sale' 
            : type === 'rent' 
              ? 'Properties for Rent' 
              : 'All Properties'} - M/s Friends Property Consultants
        </title>
        <meta 
          name="description" 
          content={`Browse our selection of properties ${type === 'sale' ? 'for sale' : type === 'rent' ? 'for rent' : ''} in Panchkula, Haryana.`} 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen pt-16">
        {/* Header */}
        <section className="bg-primary/10 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
                  {type === 'sale' ? 'Properties for Sale' : type === 'rent' ? 'Properties for Rent' : 'All Properties'}
                </h1>
                <p className="text-muted-foreground text-lg">
                  Discover your perfect property in Panchkula and surrounding areas with M/s Friends Property Consultants.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Property Type Tabs */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-4">
              <Button 
                variant={type === 'all' ? 'default' : 'outline'} 
                onClick={() => handleTypeChange('all')}
                className="min-w-32"
              >
                All Properties
              </Button>
              <Button 
                variant={type === 'sale' ? 'default' : 'outline'} 
                onClick={() => handleTypeChange('sale')}
                className="min-w-32"
              >
                For Sale
              </Button>
              <Button 
                variant={type === 'rent' ? 'default' : 'outline'} 
                onClick={() => handleTypeChange('rent')}
                className="min-w-32"
              >
                For Rent
              </Button>
            </div>
          </div>
        </section>
        
        {/* Filters and Search */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
              <div className="w-full md:w-1/2 flex items-center relative">
                <Input
                  type="text"
                  placeholder="Search by location, property name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10"
                />
                <Search className="h-4 w-4 absolute right-3 text-muted-foreground" />
              </div>
              
              <div className="w-full md:w-auto flex items-center gap-2">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                </Button>
                {(searchQuery || filters.propertyType !== 'all' || filters.bedrooms !== 'any') && (
                  <Button 
                    variant="ghost" 
                    className="flex items-center gap-2"
                    onClick={resetFilters}
                  >
                    <X className="h-4 w-4" />
                    Clear
                  </Button>
                )}
              </div>
            </div>
            
            {showFilters && (
              <div className="bg-gray-50 p-6 rounded-lg mb-8 border">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="propertyType" className="block mb-2">Property Type</Label>
                    <Select
                      value={filters.propertyType}
                      onValueChange={(value) => setFilters({...filters, propertyType: value})}
                    >
                      <SelectTrigger id="propertyType">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="residential">Residential</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="bedrooms" className="block mb-2">Bedrooms</Label>
                    <Select
                      value={filters.bedrooms}
                      onValueChange={(value) => setFilters({...filters, bedrooms: value})}
                    >
                      <SelectTrigger id="bedrooms">
                        <SelectValue placeholder="Select bedrooms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="1">1 Bedroom</SelectItem>
                        <SelectItem value="2">2 Bedrooms</SelectItem>
                        <SelectItem value="3">3 Bedrooms</SelectItem>
                        <SelectItem value="4">4+ Bedrooms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label className="block mb-2">
                      Price Range: ₹{(filters.priceRange[0]/100000).toFixed(1)} Lac - ₹{filters.priceRange[1] >= 10000000 ? (filters.priceRange[1]/10000000).toFixed(1) + ' Cr' : (filters.priceRange[1]/100000).toFixed(1) + ' Lac'}
                    </Label>
                    <Slider
                      min={0}
                      max={20000000}
                      step={500000}
                      value={filters.priceRange}
                      onValueChange={(value) => setFilters({...filters, priceRange: value as number[]})}
                      className="mt-6"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* Properties Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {filteredProperties.length > 0 ? (
              <>
                <div className="mb-6">
                  <p className="text-muted-foreground">Showing {filteredProperties.length} properties</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProperties.map((property) => (
                    <AnimatedSection key={property.id} animation="fade-in-up">
                      <PropertyCard property={property} />
                    </AnimatedSection>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-4">No properties found</h3>
                <p className="text-muted-foreground mb-6">Try adjusting your search criteria or filters.</p>
                <Button onClick={resetFilters}>Clear Filters</Button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Properties;
