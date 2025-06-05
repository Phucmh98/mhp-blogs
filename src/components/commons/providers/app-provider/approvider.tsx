import { ThemeProvider } from "@/components/theme-provider";
import SmoothScrollProvider from "../lenis-scroll/smooth-scroll-provider";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "../convex/convexClientProvider";


function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <ConvexClientProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange
        >
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </ConvexClientProvider>
      
    </ClerkProvider>
  );
}

export default AppProvider;
