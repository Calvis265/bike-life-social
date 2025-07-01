import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Navbar from '../components/Navbar';
import AdminPanel from '../components/admin/AdminPanel';
import { useAuth } from '../contexts/AuthContext';
import { 
  Bike, 
  Settings, 
  Package, 
  MessageSquare, 
  Wrench, 
  Star,
  TrendingUp,
  Calendar,
  DollarSign,
  Eye,
  Shield
} from 'lucide-react';

const Dashboard = () => {
  const { user, isAdmin } = useAuth();


  const stats = {
    totalListings: 3,
    totalViews: 1247,
    totalEarnings: 12500,
    messagesUnread: 5
  };

  const recentListings = [
    {
      id: 1,
      type: 'bike',
      title: '2022 Yamaha YZF-R1',
      price: 18500,
      views: 89,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      type: 'part',
      title: 'Akrapovic Exhaust System',
      price: 1200,
      views: 45,
      status: 'sold',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop'
    }
  ];

  const recentActivity = [
    { action: 'New message from buyer', time: '2 hours ago', type: 'message' },
    { action: 'Your listing got 15 new views', time: '4 hours ago', type: 'view' },
    { action: 'Maintenance reminder for your bike', time: '1 day ago', type: 'maintenance' },
    { action: 'Workshop review posted', time: '2 days ago', type: 'review' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={user?.avatar_url} alt={user?.username} />
              <AvatarFallback className="text-xl">
                {user?.username?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold">Welcome back, {user?.username}!</h1>
                {isAdmin && (
                  <Badge variant="destructive" className="flex items-center gap-1">
                    <Shield className="h-3 w-3" />
                    Admin
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground">Manage your listings and track your activity</p>
            </div>
          </div>
          <Button asChild>
            <Link to="/sell">
              <Bike className="h-4 w-4 mr-2" />
              List New Bike
            </Link>
          </Button>
        </div>

        {/* Admin Panel - Only show for admin users */}
        {isAdmin && (
          <div className="mb-8">
            <AdminPanel />
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Listings</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalListings}</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalViews.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+180 from last week</p>
            </CardContent>
          </Card>


          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${stats.totalEarnings.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.messagesUnread}</div>
              <p className="text-xs text-muted-foreground">3 new today</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Listings */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Recent Listings</CardTitle>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/profile">View All</Link>
                  </Button>
                </div>
                <CardDescription>
                  Your latest bikes and parts for sale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentListings.map((listing) => (
                    <div key={listing.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      <img
                        src={listing.image}
                        alt={listing.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold">{listing.title}</h3>
                          <Badge variant={listing.status === 'active' ? 'default' : 'secondary'}>
                            {listing.status}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center text-sm text-muted-foreground">
                          <span>${listing.price.toLocaleString()}</span>
                          <span>{listing.views} views</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Activity */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/sell">
                    <Bike className="h-4 w-4 mr-2" />
                    Sell a Bike
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/sell-part">
                    <Settings className="h-4 w-4 mr-2" />
                    Sell Parts
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/maintenance">
                    <Wrench className="h-4 w-4 mr-2" />
                    Log Maintenance
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/community">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Community Forum
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <p className="text-sm">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
