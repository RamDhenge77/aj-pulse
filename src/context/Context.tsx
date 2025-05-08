import React, { createContext, useContext, useState, ReactNode } from "react";
import { TripData } from "@/components/FileUploader";
import { toast } from "@/hooks/use-toast";

// Define the shape of the context
interface CarContextType {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  checkoutSteps: number;
  setCheckoutSteps: (steps: number) => void;
  roadsideAssistance: number;
  setRoadsideAssistance: (assistance: any) => void;
  showContent: boolean;
  setShowContent: (show: boolean) => void;
  tripData: TripData[];
  setTripData: (data: TripData[]) => void;
  uploadKey: number;
  setUploadKey: (key: number) => void;
  handleFileProcessed: (data: TripData[]) => void;
}

// Create the context with a default (empty) value
const CarContext = createContext<CarContextType | undefined>(undefined);

// Define the provider's props
interface CarProviderProps {
  children: ReactNode;
}

export const CarContextProvider: React.FC<CarProviderProps> = ({
  children,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [checkoutSteps, setCheckoutSteps] = useState<number>(1);
  const [roadsideAssistance, setRoadsideAssistance] = useState<any>(1);
  const [showContent, setShowContent] = useState(false);
  const [tripData, setTripData] = useState<TripData[]>([]);
  const [uploadKey, setUploadKey] = useState(Date.now());

  const handleFileProcessed = (data: TripData[]) => {
      console.log("File processed with data:", data);
  
      // Ensure we have data
      if (!data || data.length === 0) {
        toast({
          title: "Processing Error",
          description: "No data could be extracted from the uploaded file.",
          variant: "destructive",
        });
        return;
      }
  
      // setTripData([]);
      setUploadKey(Date.now());
  
      // Delay to allow UI to refresh
      setTimeout(() => {
        setTripData(data);
        setShowContent(true);
  
        // Store in localStorage for persistence
        try {
          localStorage.setItem("tripData", JSON.stringify(data));
        } catch (error) {
          console.error("Failed to save trip data to localStorage:", error);
        }
  
        toast({
          title: "Analysis Complete",
          description: `Analyzed ${data.length} trips from your statement.`,
        });
      }, 300);
    };

  return (
    <CarContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        checkoutSteps,
        setCheckoutSteps,
        roadsideAssistance,
        setRoadsideAssistance,
        showContent,
        setShowContent,
        tripData,
        setTripData,
        uploadKey,
        setUploadKey,
        handleFileProcessed,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

// Create a custom hook with error handling
export const useCarContext = (): CarContextType => {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error("useCar must be used within a CarProvider");
  }
  return context;
};
