
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Navbar from '../components/Navbar';
import { Search, SlidersHorizontal, MapPin } from 'lucide-react';

const Bikes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  // Mock data - replace with actual API calls
  const bikes = [
    {
      id: 1,
      brand: "Yamaha",
      model: "YZF-R1",
      year: 2023,
      price: 18500,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      mileage: 1200,
      location: "Los Angeles, CA",
      condition: "Like New",
      seller: "SpeedDemon"
    },
    {
      id: 2,
      brand: "Honda",
      model: "CBR1000RR",
      year: 2022,
      price: 16800,
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop",
      mileage: 2500,
      location: "Miami, FL",
      condition: "Excellent",
      seller: "RideLife"
    },
    {
      id: 3,
      brand: "Kawasaki",
      model: "Ninja ZX-10R",
      year: 2023,
      price: 17200,
      image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=400&h=300&fit=crop",
      mileage: 800,
      location: "New York, NY",
      condition: "Like New",
      seller: "GreenMachine"
    },
    {
      id: 4,
      brand: "Ducati",
      model: "Panigale V4",
      year: 2022,
      price: 22500,
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop&sat=150",
      mileage: 3200,
      location: "Austin, TX",
      condition: "Very Good",
      seller: "RedBeast"
    },
    {
      id: 5,
      brand: "BMW",
      model: "S1000RR",
      year: 2023,
      price: 19800,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&hue=200",
      mileage: 1800,
      location: "Seattle, WA",
      condition: "Excellent",
      seller: "BavarianRider"
    },
    {
      id: 6,
      brand: "Suzuki",
      model: "GSX-R1000",
      year: 2021,
      price: 14200,
      image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=400&h=300&fit=crop&hue=260",
      mileage: 4500,
      location: "Phoenix, AZ",
      condition: "Good",
      seller: "DesertRider"
    }
  ];

  const brands = ['Yamaha', 'Honda', 'Kawasaki', 'Ducati', 'BMW', 'Suzuki'];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Motorcycles for Sale</h1>
            <p className="text-muted-foreground">Find your perfect ride from our marketplace</p>
          </div>
          <Button asChild>
            <Link to="/sell">Sell Your Bike</Link>
          </Button>
        </div>

        {/* Filters */}
        <div className="bg-muted/30 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search bikes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger>
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Brands</SelectItem>
                {brands.map(brand => (
                  <SelectItem key={brand} value={brand.toLowerCase()}>{brand}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-10k">Under $10,000</SelectItem>
                <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                <SelectItem value="20k-30k">$20,000 - $30,000</SelectItem>
                <SelectItem value="over-30k">Over $30,000</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="mileage">Lowest Mileage</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing {bikes.length} motorcycles
          </p>
          <Button variant="outline" size="sm">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Bikes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bikes.map((bike) => (
            <Card key={bike.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={bike.image}
                  alt={`${bike.brand} ${bike.model}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 right-3 bg-background/90 text-foreground hover:bg-background/90">
                  {bike.condition}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg">{bike.brand} {bike.model}</h3>
                    <p className="text-muted-foreground">{bike.year}</p>
                  </div>
                  <p className="text-2xl font-bold text-primary">${bike.price.toLocaleString()}</p>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Mileage:</span>
                    <span>{bike.mileage.toLocaleString()} miles</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {bike.location}
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Seller:</span>
                    <span className="font-medium">{bike.seller}</span>
                  </div>
                </div>
                
                <Button className="w-full" asChild>
                  <Link to={`/bike/${bike.id}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Bikes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Bikes;
