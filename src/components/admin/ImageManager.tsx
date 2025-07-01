
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { ImageUpload } from './ImageUpload';
import { 
  Plus,
  Trash2,
  Search,
  Download,
  Eye
} from 'lucide-react';

export const ImageManager = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      name: 'motorcycle-helmet.jpg',
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop',
      size: '2.3 MB',
      uploadDate: '2024-01-15',
      category: 'Products'
    },
    {
      id: 2,
      name: 'leather-jacket.jpg',
      url: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=200&fit=crop',
      size: '1.8 MB',
      uploadDate: '2024-01-20',
      category: 'Products'
    },
    {
      id: 3,
      name: 'workshop-banner.jpg',
      url: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=200&h=200&fit=crop',
      size: '3.1 MB',
      uploadDate: '2024-02-01',
      category: 'Workshops'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showUpload, setShowUpload] = useState(false);

  const filteredImages = images.filter(image =>
    image.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    image.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this image?')) {
      setImages(images.filter(img => img.id !== id));
    }
  };

  const handleNewImage = (imageUrl: string) => {
    const newImage = {
      id: Date.now(),
      name: `image-${Date.now()}.jpg`,
      url: imageUrl,
      size: '2.1 MB',
      uploadDate: new Date().toISOString().split('T')[0],
      category: 'Uncategorized'
    };
    setImages([...images, newImage]);
    setShowUpload(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Image Management</h3>
        <Button onClick={() => setShowUpload(!showUpload)}>
          <Plus className="h-4 w-4 mr-2" />
          Upload Image
        </Button>
      </div>

      {showUpload && (
        <Card>
          <CardContent className="p-6">
            <h4 className="text-md font-medium mb-4">Upload New Image</h4>
            <ImageUpload onImageUpload={handleNewImage} />
          </CardContent>
        </Card>
      )}

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search images..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <Card key={image.id} className="overflow-hidden">
            <div className="aspect-square relative">
              <img
                src={image.url}
                alt={image.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex gap-1">
                <Button size="sm" variant="secondary">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="secondary">
                  <Download className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(image.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <CardContent className="p-4">
              <h4 className="font-medium truncate" title={image.name}>
                {image.name}
              </h4>
              <div className="text-sm text-muted-foreground mt-1">
                <p>{image.category} • {image.size}</p>
                <p>Uploaded: {new Date(image.uploadDate).toLocaleDateString()}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

