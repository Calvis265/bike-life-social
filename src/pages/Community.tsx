import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import Navbar from '../components/Navbar';
import { 
  Search, 
  MessageSquare, 
  Heart, 
  Share2, 
  TrendingUp,
  Clock,
  Users,
  Plus,
  Pin,
  Flame
} from 'lucide-react';

const Community = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');

  // Mock data - replace with actual API calls
  const categories = [
    { name: 'General Discussion', count: 1234, color: 'bg-blue-500' },
    { name: 'Bike Reviews', count: 567, color: 'bg-green-500' },
    { name: 'Maintenance Tips', count: 890, color: 'bg-yellow-500' },
    { name: 'Rides & Events', count: 456, color: 'bg-purple-500' },
    { name: 'For Sale', count: 789, color: 'bg-red-500' },
    { name: 'Technical Help', count: 345, color: 'bg-indigo-500' }
  ];

  const posts = [
    {
      id: 1,
      title: "Best routes for weekend rides in California?",
      content: "Looking for some scenic routes around LA and San Francisco. Any recommendations?",
      author: {
        username: "RoadWarrior",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
      },
      category: "Rides & Events",
      replies: 23,
      likes: 45,
      views: 234,
      timeAgo: "2 hours ago",
      isPinned: false,
      isHot: true
    },
    {
      id: 2,
      title: "Just bought my first bike - 2023 Ninja 400!",
      content: "Finally joined the motorcycle family! Any tips for a new rider?",
      author: {
        username: "NewRider2023",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face"
      },
      category: "General Discussion",
      replies: 67,
      likes: 123,
      views: 567,
      timeAgo: "4 hours ago",
      isPinned: false,
      isHot: false
    },
    {
      id: 3,
      title: "Maintenance Schedule for High Mileage Bikes",
      content: "Comprehensive guide for maintaining bikes with over 50k miles...",
      author: {
        username: "MechMaster",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
      },
      category: "Maintenance Tips",
      replies: 34,
      likes: 89,
      views: 456,
      timeAgo: "6 hours ago",
      isPinned: true,
      isHot: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Community Forum</h1>
            <p className="text-muted-foreground">Connect with fellow motorcycle enthusiasts</p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Create New Post</DialogTitle>
                <DialogDescription>
                  Share your thoughts, questions, or experiences with the community.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter post title..."
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    placeholder="Write your post content..."
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    rows={5}
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <DialogTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogTrigger>
                  <Button>Post</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {categories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                      <span className="text-sm font-medium">{category.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Community Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-sm">5,234 Members</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  <span className="text-sm">1,456 Posts</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-sm">89 Active Today</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Filter Tabs */}
            <div className="flex gap-4 mb-6 border-b">
              <button className="pb-2 px-1 border-b-2 border-primary text-primary font-medium">
                Latest
              </button>
              <button className="pb-2 px-1 border-b-2 border-transparent hover:text-primary transition-colors">
                Hot
              </button>
              <button className="pb-2 px-1 border-b-2 border-transparent hover:text-primary transition-colors">
                Top
              </button>
              <button className="pb-2 px-1 border-b-2 border-transparent hover:text-primary transition-colors">
                Unanswered
              </button>
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {posts.map((post) => (
                <Card key={post.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Avatar className="h-10 w-10 flex-shrink-0">
                        <AvatarImage src={post.author.avatar} alt={post.author.username} />
                        <AvatarFallback>{post.author.username.charAt(0)}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          {post.isPinned && <Pin className="h-4 w-4 text-primary" />}
                          {post.isHot && <Flame className="h-4 w-4 text-orange-500" />}
                          <Badge variant="outline" className="text-xs">
                            {post.category}
                          </Badge>
                        </div>
                        
                        <h3 className="font-semibold text-lg mb-2 hover:text-primary cursor-pointer">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {post.content}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>by {post.author.username}</span>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {post.timeAgo}
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <MessageSquare className="h-4 w-4" />
                              {post.replies}
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Heart className="h-4 w-4" />
                              {post.likes}
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <span>{post.views} views</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline">Load More Posts</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
