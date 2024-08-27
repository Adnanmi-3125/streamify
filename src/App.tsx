import DashBoard from "./dashboard/DashBoard";
import { ThemeProvider } from "./theme/theme-provider";

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <DashBoard />
    </ThemeProvider>
  );
};

export default App;
