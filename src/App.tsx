import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { CarContextProvider } from "./context/Context";
import RoadsideAssitanceLayout from "./components/RoadsideAssitance/RoadsideAssitanceLayout";
import RoadsideAssitance from "./pages/RoadsideAssitancePage";
import RoadSideServices from "./components/RoadsideAssitance/Services";
import { BookingProvider } from "./context/BookingContext";
import UserProfilePage from "./pages/UserProfilePage";
import LandingLayout from "./components/Layouts/LandingLayout";
import DashboardLayout from "./components/Layouts/DashboardLayout";
import Dashboard from "./components/dashboard/Dashboard";
import LandingPage from "./components/dashboard/LandingPage";

const queryClient = new QueryClient();

const App = () => (
  <CarContextProvider>
    <QueryClientProvider client={queryClient}>
      <BookingProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route element={<LandingLayout />}>
                <Route path="/" element={<LandingPage />} />
                {/* <Route path="/landing" element={<LandingPage />} /> */}
                <Route path="/user-profile" element={<UserProfilePage />} />

                <Route element={<DashboardLayout />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                </Route>
                
              </Route>

              <Route element={<RoadsideAssitanceLayout />}>
                <Route
                  path="/roadside-assistance"
                  element={<RoadsideAssitance />}
                />
                <Route
                  path="/roadside-assistance/services"
                  element={<RoadSideServices />}
                />

                <Route
                  path="/roadside-assistance"
                  element={<RoadsideAssitance />}
                />
                <Route
                  path="/roadside-assistance/services"
                  element={<RoadSideServices />}
                />
              </Route>
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </BookingProvider>
    </QueryClientProvider>
  </CarContextProvider>
);

export default App;
