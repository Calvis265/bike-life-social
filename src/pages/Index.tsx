
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '../components/Navbar';
import { Bike, Users, Wrench, ShoppingBag, Star, ArrowRight, Zap, Shield, Heart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  🏍️ The Ultimate Motorcycle Community
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Connect, Buy, Ride
                  <span className="block text-primary">Together</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Join thousands of motorcycle enthusiasts in the ultimate marketplace and community platform. Buy, sell, maintain, and connect with fellow riders.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="group">
                  <Link to="/bikes">
                    Explore Bikes
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/register">Join Community</Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span>1000+ Active Listings</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>5000+ Members</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Verified Sellers</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 p-8">
                <img
                  src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=600&fit=crop"
                  alt="Motorcycle rider"
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background border rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">4.9/5</span>
                  <span className="text-muted-foreground text-sm">from 2000+ reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need in One Place
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From buying your dream bike to connecting with the community, MotoConnect has you covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Bike className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Marketplace</CardTitle>
                <CardDescription>
                  Buy and sell motorcycles and parts with confidence
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Community</CardTitle>
                <CardDescription>
                  Connect with fellow riders and share experiences
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Maintenance</CardTitle>
                <CardDescription>
                  Track your bike's maintenance and find trusted workshops
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Gear Store</CardTitle>
                <CardDescription>
                  Shop premium motorcycle gear and accessories
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Bikes Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Bikes</h2>
              <p className="text-muted-foreground">Discover the most popular motorcycles on our platform</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/bikes">View All</Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                brand: "Yamaha",
                model: "YZF-R1",
                year: 2023,
                price: 18500,
                image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
                mileage: 1200,
                location: "Los Angeles, CA"
              },
              {
                id: 2,
                brand: "Honda",
                model: "CBR1000RR",
                year: 2022,
                price: 16800,
                image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop",
                mileage: 2500,
                location: "Miami, FL"
              },
              {
                id: 3,
                brand: "Kawasaki",
                model: "Ninja ZX-10R",
                year: 2023,
                price: 17200,
                image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=400&h=300&fit=crop",
                mileage: 800,
                location: "New York, NY"
              }
            ].map((bike) => (
              <Card key={bike.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={bike.image}
                    alt={`${bike.brand} ${bike.model}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{bike.brand} {bike.model}</h3>
                    <Badge variant="secondary">{bike.year}</Badge>
                  </div>
                  <p className="text-2xl font-bold text-primary mb-3">${bike.price.toLocaleString()}</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>{bike.mileage.toLocaleString()} miles</p>
                    <p>{bike.location}</p>
                  </div>
                  <Button className="w-full mt-4" asChild>
                    <Link to={`/bike/${bike.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Heart className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join the Ride?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Connect with thousands of motorcycle enthusiasts and find your perfect ride today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/register">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/bikes">Browse Bikes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Bike className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">MotoConnect</span>
              </div>
              <p className="text-muted-foreground">
                The ultimate platform for motorcycle enthusiasts to connect, buy, and ride together.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Marketplace</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/bikes" className="hover:text-primary transition-colors">Buy Bikes</Link></li>
                <li><Link to="/parts" className="hover:text-primary transition-colors">Buy Parts</Link></li>
                <li><Link to="/sell" className="hover:text-primary transition-colors">Sell Your Bike</Link></li>
                <li><Link to="/workshops" className="hover:text-primary transition-colors">Find Workshops</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/community" className="hover:text-primary transition-colors">Forum</Link></li>
                <li><Link to="/maintenance" className="hover:text-primary transition-colors">Maintenance</Link></li>
                <li><Link to="/store" className="hover:text-primary transition-colors">Gear Store</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Account</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/login" className="hover:text-primary transition-colors">Login</Link></li>
                <li><Link to="/register" className="hover:text-primary transition-colors">Sign Up</Link></li>
                <li><Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
                <li><Link to="/profile" className="hover:text-primary transition-colors">Profile</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 MotoConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
