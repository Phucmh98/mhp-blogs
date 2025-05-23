import { ThemeProvider } from "@/components/theme-provider";
import SmoothScrollProvider from "../lenis-scroll/smooth-scroll-provider";

function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={true}
      disableTransitionOnChange
    >
      <SmoothScrollProvider>{children}</SmoothScrollProvider>
    </ThemeProvider>
  );
}

export default AppProvider;
