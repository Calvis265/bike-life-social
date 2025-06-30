
// import Navbar from '../components/Navbar';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// const Parts = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold mb-4">Motorcycle Parts</h1>
//           <p className="text-xl text-muted-foreground mb-8">Coming Soon</p>
//           <Button>Browse Parts</Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Parts;




import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Filter, Heart, ShoppingCart } from 'lucide-react';

interface Part {
  id: number;
  name: string;
  category: string;
  price: number;
  condition: string;
  description: string;
  image: string;
  seller: string;
  location: string;
  inStock: boolean;
}

const Parts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const sampleParts: Part[] = [
    {
      id: 1,
      name: "Yamaha R1 Exhaust System",
      category: "exhaust",
      price: 899,
      condition: "Like New",
      description: "High-performance exhaust system for Yamaha R1. Titanium construction with carbon fiber tip.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      seller: "BikeGuru",
      location: "California",
      inStock: true
    },
    {
      id: 2,
      name: "Honda CBR Brake Pads",
      category: "brakes",
      price: 89,
      condition: "New",
      description: "Premium brake pads compatible with Honda CBR series. Enhanced stopping power.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      seller: "PartsPro",
      location: "Texas",
      inStock: true
    },
    {
      id: 3,
      name: "Kawasaki LED Headlight",
      category: "lighting",
      price: 245,
      condition: "New",
      description: "High-intensity LED headlight assembly for Kawasaki Ninja series.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      seller: "LightTech",
      location: "Florida",
      inStock: false
    },
    {
      id: 4,
      name: "Universal Mirror Set",
      category: "accessories",
      price: 45,
      condition: "Good",
      description: "Adjustable motorcycle mirrors with anti-glare coating.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      seller: "RiderGear",
      location: "New York",
      inStock: true
    },
    {
      id: 5,
      name: "Suzuki GSXR Chain Kit",
      category: "drivetrain",
      price: 156,
      condition: "New",
      description: "Complete chain and sprocket kit for Suzuki GSXR models.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      seller: "ChainMaster",
      location: "Nevada",
      inStock: true
    },
    {
      id: 6,
      name: "Custom Seat Cover",
      category: "comfort",
      price: 120,
      condition: "Like New",
      description: "Waterproof custom seat cover with gel padding for extra comfort.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      seller: "ComfortRide",
      location: "Oregon",
      inStock: true
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'exhaust', label: 'Exhaust Systems' },
    { value: 'brakes', label: 'Brake Components' },
    { value: 'lighting', label: 'Lighting' },
    { value: 'accessories', label: 'Accessories' },
    { value: 'drivetrain', label: 'Drivetrain' },
    { value: 'comfort', label: 'Comfort & Seating' }
  ];

  const filteredParts = sampleParts.filter(part => {
    const matchesSearch = part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         part.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || part.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Motorcycle Parts Marketplace</h1>
          <p className="text-xl text-muted-foreground mb-8">Find quality parts for your bike</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search parts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-input rounded-md bg-background min-w-[200px]"
          >
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
          <Button variant="outline" size="default">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Stats */}
        <div className="mb-8">
          <p className="text-muted-foreground">
            Showing {filteredParts.length} of {sampleParts.length} parts
          </p>
        </div>

        {/* Parts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredParts.map((part) => (
            <Card key={part.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="aspect-video bg-muted rounded-md mb-4 overflow-hidden">
                  <img 
                    src={part.image} 
                    alt={part.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{part.name}</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">${part.price}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      part.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {part.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Condition: {part.condition}</span>
                    <span className="px-2 py-1 bg-secondary rounded text-xs">
                      {categories.find(cat => cat.value === part.category)?.label}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {part.description}
                  </p>
                  
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Seller: {part.seller}</span>
                    <span>{part.location}</span>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1" disabled={!part.inStock}>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {part.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                    <Button variant="outline" size="default">
                      Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-muted/50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">Have Parts to Sell?</h3>
          <p className="text-muted-foreground mb-6">
            Join thousands of sellers and reach motorcycle enthusiasts worldwide
          </p>
          <Button size="lg">
            Start Selling Parts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Parts;
