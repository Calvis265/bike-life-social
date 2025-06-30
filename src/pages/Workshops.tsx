
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Calendar, 
  MapPin, 
  Users, 
  Clock,
  Star,
  Wrench,
  BookOpen,
  Award
} from 'lucide-react';

const Workshops = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const workshops = [
    {
      id: 1,
      title: 'Basic Motorcycle Maintenance',
      instructor: 'Mike Rodriguez',
      date: '2024-07-15',
      time: '10:00 AM - 4:00 PM',
      location: 'Downtown Workshop Center',
      price: 149,
      spots: 8,
      maxSpots: 15,
      rating: 4.9,
      reviews: 42,
      category: 'Maintenance',
      level: 'Beginner',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop',
      description: 'Learn essential maintenance skills including oil changes, chain adjustment, and basic troubleshooting.'
    },
    {
      id: 2,
      title: 'Advanced Engine Tuning',
      instructor: 'Sarah Chen',
      date: '2024-07-20',
      time: '9:00 AM - 5:00 PM',
      location: 'Performance Shop East',
      price: 299,
      spots: 3,
      maxSpots: 10,
      rating: 4.8,
      reviews: 28,
      category: 'Performance',
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=400&h=200&fit=crop',
      description: 'Deep dive into carburetor tuning, fuel injection mapping, and performance optimization.'
    },
    {
      id: 3,
      title: 'Motorcycle Safety & Inspection',
      instructor: 'David Thompson',
      date: '2024-07-18',
      time: '2:00 PM - 6:00 PM',
      location: 'Safety Training Center',
      price: 89,
      spots: 12,
      maxSpots: 20,
      rating: 4.7,
      reviews: 56,
      category: 'Safety',
      level: 'Beginner',
      image: 'https://images.unsplash.com/photo-1558618047-3c8f6d0d5dd8?w=400&h=200&fit=crop',
      description: 'Comprehensive safety inspection checklist and pre-ride safety protocols.'
    },
    {
      id: 4,
      title: 'Custom Paint & Restoration',
      instructor: 'Lisa Williams',
      date: '2024-07-25',
      time: '10:00 AM - 6:00 PM',
      location: 'Art & Restoration Studio',
      price: 199,
      spots: 6,
      maxSpots: 8,
      rating: 4.9,
      reviews: 31,
      category: 'Restoration',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop',
      description: 'Learn professional painting techniques and restoration methods for vintage motorcycles.'
    },
    {
      id: 5,
      title: 'Electrical Systems Troubleshooting',
      instructor: 'Tom Johnson',
      date: '2024-07-22',
      time: '1:00 PM - 5:00 PM',
      location: 'Tech Workshop Lab',
      price: 129,
      spots: 7,
      maxSpots: 12,
      rating: 4.6,
      reviews: 38,
      category: 'Electrical',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=200&fit=crop',
      description: 'Master electrical diagnostics, wiring repairs, and modern motorcycle electronics.'
    },
    {
      id: 6,
      title: 'Track Day Preparation',
      instructor: 'Racing Team Pro',
      date: '2024-07-30',
      time: '8:00 AM - 4:00 PM',
      location: 'Speedway Training Facility',
      price: 249,
      spots: 2,
      maxSpots: 15,
      rating: 5.0,
      reviews: 24,
      category: 'Racing',
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=200&fit=crop',
      description: 'Complete track preparation including suspension setup, tire selection, and racing techniques.'
    }
  ];

  const categories = ['all', 'Maintenance', 'Performance', 'Safety', 'Restoration', 'Electrical', 'Racing'];

  const filteredWorkshops = workshops.filter(workshop => {
    const matchesSearch = workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         workshop.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         workshop.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || workshop.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Motorcycle Workshops</h1>
          <p className="text-xl text-muted-foreground">Learn from expert mechanics and improve your skills</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search workshops..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Workshops Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredWorkshops.map((workshop) => (
            <Card key={workshop.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className={`absolute top-2 left-2 ${getLevelColor(workshop.level)}`}>
                  {workshop.level}
                </Badge>
                <Badge variant="secondary" className="absolute top-2 right-2">
                  {workshop.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{workshop.title}</CardTitle>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>{workshop.instructor}</span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{workshop.rating}</span>
                  <span className="text-xs text-muted-foreground">({workshop.reviews} reviews)</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{workshop.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{new Date(workshop.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{workshop.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{workshop.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{workshop.spots} spots left of {workshop.maxSpots}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold">${workshop.price}</span>
                  {workshop.spots <= 3 && (
                    <Badge variant="destructive">Almost Full</Badge>
                  )}
                </div>

                <Button className="w-full" disabled={workshop.spots === 0}>
                  {workshop.spots === 0 ? 'Sold Out' : 'Book Workshop'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredWorkshops.length === 0 && (
          <div className="text-center py-12">
            <Wrench className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No workshops found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Workshops;