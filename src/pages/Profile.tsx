
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera, Trash2, Save, Edit, User, Mail, MapPin, Phone, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';


const Profile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState<string>('');
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Motorcycle enthusiast and rider passionate about connecting with fellow riders.',
    location: 'San Francisco, CA',
    phone: '+1 (555) 123-4567'
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          title: "File too large",
          description: "Please select an image smaller than 5MB",
          variant: "destructive"
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
        toast({
          title: "Profile picture updated",
          description: "Your profile picture has been successfully updated!"
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setProfileImage('');
    toast({
      title: "Profile picture removed",
      description: "Your profile picture has been deleted."
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile information has been saved successfully!"
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              My Profile
            </h1>
            <p className="text-muted-foreground">Manage your personal information and connect with the community</p>
          </div>

          {/* Profile Picture Section */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
            <CardHeader className="text-center pb-4">
              <CardTitle className="flex items-center justify-center gap-2 text-xl">
                <Camera className="h-5 w-5 text-primary" />
                Profile Picture
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-6">
              <div className="relative group">
                <Avatar className="w-32 h-32 ring-4 ring-primary/20 transition-all duration-300 group-hover:ring-primary/40">
                  <AvatarImage src={profileImage} alt="Profile" className="object-cover" />
                  <AvatarFallback className="text-2xl bg-gradient-to-br from-primary/20 to-primary/10">
                    {profileData.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Camera className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <div className="flex gap-3">
                <Label htmlFor="profile-upload" className="cursor-pointer">
                  <Button variant="outline" className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
                    <span>
                      <Camera className="h-4 w-4" />
                      Upload Photo
                    </span>
                  </Button>
                </Label>
                <Input
                  id="profile-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                
                {profileImage && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDeleteImage}
                    className="flex items-center gap-2 text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                    Remove
                  </Button>
                )}
              </div>
              
              <p className="text-sm text-muted-foreground text-center bg-muted/50 px-4 py-2 rounded-lg">
                Upload a profile picture to personalize your account • Max file size: 5MB
              </p>
            </CardContent>
          </Card>

          {/* Profile Information */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between pb-6">
              <CardTitle className="flex items-center gap-2 text-xl">
                <User className="h-5 w-5 text-primary" />
                Personal Information
              </CardTitle>
              <Button
                variant={isEditing ? "default" : "outline"}
                size="sm"
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                className="flex items-center gap-2 transition-all duration-200 hover:scale-105"
              >
                {isEditing ? (
                  <>
                    <Save className="h-4 w-4" />
                    Save Changes
                  </>
                ) : (
                  <>
                    <Edit className="h-4 w-4" />
                    Edit Profile
                  </>
                )}
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="name" className="flex items-center gap-2 text-sm font-medium">
                    <User className="h-4 w-4 text-primary" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={profileData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    disabled={!isEditing}
                    className={`transition-all duration-200 ${!isEditing ? 'bg-muted/50 border-muted' : 'focus:ring-2 focus:ring-primary/20'}`}
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
                    <Mail className="h-4 w-4 text-primary" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    disabled={!isEditing}
                    className={`transition-all duration-200 ${!isEditing ? 'bg-muted/50 border-muted' : 'focus:ring-2 focus:ring-primary/20'}`}
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="location" className="flex items-center gap-2 text-sm font-medium">
                    <MapPin className="h-4 w-4 text-primary" />
                    Location
                  </Label>
                  <Input
                    id="location"
                    value={profileData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    disabled={!isEditing}
                    className={`transition-all duration-200 ${!isEditing ? 'bg-muted/50 border-muted' : 'focus:ring-2 focus:ring-primary/20'}`}
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium">
                    <Phone className="h-4 w-4 text-primary" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={profileData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    disabled={!isEditing}
                    className={`transition-all duration-200 ${!isEditing ? 'bg-muted/50 border-muted' : 'focus:ring-2 focus:ring-primary/20'}`}
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="bio" className="flex items-center gap-2 text-sm font-medium">
                  <User className="h-4 w-4 text-primary" />
                  Bio
                </Label>
                <Textarea
                  id="bio"
                  value={profileData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  disabled={!isEditing}
                  className={`transition-all duration-200 min-h-[100px] ${!isEditing ? 'bg-muted/50 border-muted' : 'focus:ring-2 focus:ring-primary/20'}`}
                  rows={4}
                  placeholder="Tell us about your riding experience and interests..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Account Actions */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in border-l-4 border-l-destructive">
            <CardHeader>
              <CardTitle className="text-destructive flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Danger Zone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-6 bg-destructive/5 border border-destructive/20 rounded-lg hover:bg-destructive/10 transition-colors">
                <div>
                  <h3 className="font-semibold text-destructive">Delete Account</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Permanently delete your account and all associated data. This action cannot be undone.
                  </p>
                </div>
                <Button variant="destructive" size="sm" className="hover:bg-destructive/90 transition-colors">
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
