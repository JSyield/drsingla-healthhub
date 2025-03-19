
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Procedures from "./pages/Procedures";
import Treatments from "./pages/Treatments";
import Complaints from "./pages/Complaints";
import Reviews from "./pages/Reviews";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<NotFound />} />
            <Route path="/procedures" element={<Procedures />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<NotFound />} />
            <Route path="/privacy-policy" element={<NotFound />} />
            <Route path="/terms-of-service" element={<NotFound />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
