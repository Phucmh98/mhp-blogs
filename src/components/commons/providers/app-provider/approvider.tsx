
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScrollProvider from "../lenis-scroll/smooth-scroll-provider";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "../convex/convexClientProvider";
import { Toaster } from "@/components/ui/sonner";
import MdxProvider from "../mdx-provider/mdx-provider";
function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <ConvexClientProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange
        >
          <Toaster position="bottom-right" />
          <SmoothScrollProvider>
            <MdxProvider >
            {children}
            </MdxProvider>
          </SmoothScrollProvider>
        </ThemeProvider>
      </ConvexClientProvider>
    </ClerkProvider>
  );
}

export default AppProvider;
