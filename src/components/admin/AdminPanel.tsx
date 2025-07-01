
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ProductManager } from './ProductManager';
import { WorkshopManager } from './WorkshopManager';
import { UserManager } from './UserManager';
import { ImageManager } from './ImageManager';
import { 
  Settings,
  Package,
  Users,
  Calendar,
  Image
} from 'lucide-react';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Admin Panel
          </CardTitle>
          <Badge variant="destructive">Admin Only</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="products" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Products
            </TabsTrigger>
            <TabsTrigger value="workshops" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Workshops
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Users
            </TabsTrigger>
            <TabsTrigger value="images" className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              Images
            </TabsTrigger>
          </TabsList>
          
          
          <TabsContent value="products" className="mt-6">
            <ProductManager />
          </TabsContent>
          
          <TabsContent value="workshops" className="mt-6">
            <WorkshopManager />
          </TabsContent>
          
          <TabsContent value="users" className="mt-6">
            <UserManager />
          </TabsContent>
          
          <TabsContent value="images" className="mt-6">
            <ImageManager />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AdminPanel;
