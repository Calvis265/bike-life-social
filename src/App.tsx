
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Bikes from "./pages/Bikes";
import BikeDetails from "./pages/BikeDetails";
import SellBike from "./pages/SellBike";
import Parts from "./pages/Parts";
import PartDetails from "./pages/PartDetails";
import SellPart from "./pages/SellPart";
import Community from "./pages/Community";
import Workshops from "./pages/Workshops";
import Maintenance from "./pages/Maintenance";
import Profile from "./pages/Profile";
import Store from "./pages/Store";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider defaultTheme="light" storageKey="motoconnect-theme">
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* Protected Routes */}
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/bikes" element={<Bikes />} />
              <Route path="/bike/:id" element={<BikeDetails />} />
              <Route path="/sell" element={<ProtectedRoute><SellBike /></ProtectedRoute>} />
              <Route path="/parts" element={<Parts />} />
              <Route path="/part/:id" element={<PartDetails />} />
              <Route path="/sell-part" element={<ProtectedRoute><SellPart /></ProtectedRoute>} />
              <Route path="/community" element={<Community />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/maintenance" element={<ProtectedRoute><Maintenance /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/store" element={<Store />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
