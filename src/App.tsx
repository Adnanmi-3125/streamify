import { Toaster } from "@/components/ui/toaster";
import { AnalyticsDataProvider } from "./context/AnalyticsDataContext";
import { ThemeProvider } from "./context/ThemeProvider";
import DashBoard from "./dashboard/DashBoard";

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AnalyticsDataProvider>
        <DashBoard />
        <Toaster />
      </AnalyticsDataProvider>
    </ThemeProvider>
  );
};

export default App;
