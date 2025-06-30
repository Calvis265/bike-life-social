
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Navbar from '../components/Navbar';
import { 
  Heart, 
  Share2, 
  MapPin, 
  Calendar, 
  Gauge, 
  Fuel, 
  Settings,
  Star,
  MessageSquare,
  Phone,
  ArrowLeft
} from 'lucide-react';

const BikeDetails = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  // Mock data - replace with actual API call
  const bike = {
    id: parseInt(id || '1'),
    brand: "Yamaha",
    model: "YZF-R1",
    year: 2023,
    price: 18500,
    images: [
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&h=600&fit=crop"
    ],
    mileage: 1200,
    location: "Los Angeles, CA",
    condition: "Like New",
    description: `This pristine 2023 Yamaha YZF-R1 is a true masterpiece of engineering and design. With only 1,200 miles on the odometer, this bike has been meticulously maintained and garage-kept since day one.

    Features include:
    • Crossplane Crankshaft Concept engine
    • Yamaha Chip Controlled-Throttle (YCC-T)
    • Traction Control System (TCS)
    • Quick Shift System (QSS)
    • Slide Control System (SCS)
    • Launch Control System (LCS)
    • LED headlights and taillights
    • Full-color TFT display

    This bike runs like a dream and sounds absolutely incredible. All maintenance has been performed at authorized Yamaha dealerships with full service records available. Clean title in hand.

    Serious inquiries only. No lowballers or tire kickers. Cash or verified funds only.`,
    specifications: {
      engine: "998cc Liquid-cooled 4-stroke",
      power: "200 hp @ 13,500 RPM",
      torque: "112.4 Nm @ 11,500 RPM",
      transmission: "6-speed",
      fuelCapacity: "17L",
      weight: "201 kg",
      topSpeed: "186 mph"
    },
    seller: {
      username: "SpeedDemon",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 4.8,
      totalSales: 12,
      joinDate: "2022",
      location: "Los Angeles, CA",
      responseTime: "Within 2 hours"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/bikes">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Bikes
          </Link>
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img
                    src={bike.images[currentImageIndex]}
                    alt={`${bike.brand} ${bike.model}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex gap-2 overflow-x-auto">
                    {bike.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                          currentImageIndex === index ? 'border-primary' : 'border-muted'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`View ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  {bike.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-sm leading-relaxed whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card>
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(bike.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2">
                      <span className="text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price and Actions */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold mb-2">
                    {bike.brand} {bike.model}
                  </h1>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Badge variant="secondary">{bike.year}</Badge>
                    <Badge>{bike.condition}</Badge>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-4">
                    ${bike.price.toLocaleString()}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Gauge className="h-4 w-4" />
                      Mileage
                    </div>
                    <span className="font-medium">{bike.mileage.toLocaleString()} miles</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      Location
                    </div>
                    <span className="font-medium">{bike.location}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contact Seller
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setIsFavorited(!isFavorited)}
                    >
                      <Heart className={`h-4 w-4 mr-2 ${isFavorited ? 'fill-current text-red-500' : ''}`} />
                      {isFavorited ? 'Saved' : 'Save'}
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Seller Info */}
            <Card>
              <CardHeader>
                <CardTitle>Seller Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={bike.seller.avatar} alt={bike.seller.username} />
                    <AvatarFallback>{bike.seller.username.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{bike.seller.username}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm">{bike.seller.rating} ({bike.seller.totalSales} sales)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Member since:</span>
                    <span>{bike.seller.joinDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span>{bike.seller.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response time:</span>
                    <span>{bike.seller.responseTime}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <Button variant="outline" className="w-full">
                  View Profile
                </Button>
              </CardContent>
            </Card>

            {/* Safety Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Safety Tips</CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground space-y-2">
                <p>• Always meet in a public place</p>
                <p>• Inspect the bike thoroughly</p>
                <p>• Verify ownership documents</p>
                <p>• Use secure payment methods</p>
                <p>• Trust your instincts</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeDetails;
