
import { ArrowRight, Heart, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface PropertyType {
  id: string;
  title: string;
  description: string;
  price: string;
  priceUnit?: string;
  location: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: string;
  image: string;
  isFeatured?: boolean;
  type: 'sale' | 'rent';
}

interface PropertyCardProps {
  property: PropertyType;
  className?: string;
}

const PropertyCard = ({ property, className }: PropertyCardProps) => {
  const {
    id,
    title,
    description,
    price,
    priceUnit,
    location,
    bedrooms,
    bathrooms,
    area,
    image,
    isFeatured,
    type
  } = property;

  return (
    <Card className={cn("overflow-hidden transition-all duration-300 hover:shadow-lg", className)}>
      <div className="relative">
        {isFeatured && (
          <div className="absolute top-2 left-2 z-10 bg-yellow-500 text-white px-2 py-1 text-xs font-medium rounded">
            Featured
          </div>
        )}
        <div className="relative h-52 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <button 
            className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 flex items-center justify-center"
            aria-label="Add to favorites"
          >
            <Heart className="h-4 w-4 text-red-500" />
          </button>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="font-serif font-semibold text-xl truncate">{title}</div>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <MapPin className="h-3.5 w-3.5 mr-1 text-primary" />
          <span>{location}</span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center gap-3 mb-4 text-sm">
          {bedrooms !== undefined && (
            <div className="flex items-center">
              <span className="font-medium">{bedrooms}</span>
              <span className="ml-1 text-muted-foreground">Beds</span>
            </div>
          )}
          
          {bathrooms !== undefined && (
            <div className="flex items-center">
              <span className="font-medium">{bathrooms}</span>
              <span className="ml-1 text-muted-foreground">Baths</span>
            </div>
          )}
          
          {area && (
            <div className="flex items-center">
              <span className="font-medium">{area}</span>
              <span className="ml-1 text-muted-foreground">Sq.ft</span>
            </div>
          )}
        </div>
        
        <div className="flex justify-between items-center pt-3 border-t">
          <div>
            <span className="text-xl font-bold text-primary">
              {type === 'rent' ? `₹${price}` : `₹${price}`}
            </span>
            {priceUnit && <span className="text-sm text-muted-foreground ml-1">{priceUnit}</span>}
          </div>
          
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="flex items-center gap-1">
              <Phone className="h-3.5 w-3.5" />
              <span>Call</span>
            </Button>
            <Button size="sm" variant="default" asChild>
              <Link to={`/property/${id}`} className="flex items-center gap-1">
                Details
                <ArrowRight className="h-3.5 w-3.5 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
