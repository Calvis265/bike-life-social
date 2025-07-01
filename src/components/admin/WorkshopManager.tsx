
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Plus,
  Edit,
  Trash2,
  Search,
  Calendar,
  Users
} from 'lucide-react';


export const WorkshopManager = () => {
  const [workshops, setWorkshops] = useState([
    {
      id: 1,
      title: 'Basic Motorcycle Maintenance',
      instructor: 'Mike Rodriguez',
      date: '2024-07-15',
      price: 149,
      spots: 8,
      maxSpots: 15,
      status: 'active'
    },
    {
      id: 2,
      title: 'Advanced Engine Tuning',
      instructor: 'Sarah Chen',
      date: '2024-07-20',
      price: 299,
      spots: 3,
      maxSpots: 10,
      status: 'active'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredWorkshops = workshops.filter(workshop =>
    workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    workshop.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this workshop?')) {
      setWorkshops(workshops.filter(w => w.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Workshop Management</h3>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Workshop
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search workshops..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Workshop</TableHead>
                <TableHead>Instructor</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Spots</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredWorkshops.map((workshop) => (
                <TableRow key={workshop.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{workshop.title}</div>
                    </div>
                  </TableCell>
                  <TableCell>{workshop.instructor}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(workshop.date).toLocaleDateString()}
                    </div>
                  </TableCell>
                  <TableCell>${workshop.price}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {workshop.spots}/{workshop.maxSpots}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={workshop.status === 'active' ? 'default' : 'secondary'}>
                      {workshop.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleDelete(workshop.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
