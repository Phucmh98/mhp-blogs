import { ThemeProvider } from "@/components/theme-provider";
import SmoothScrollProvider from "../lenis-scroll/smooth-scroll-provider";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "../convex/convexClientProvider";
import { Toaster } from "@/components/ui/sonner";
import MdxProvider from "../mdx-provider/mdx-provider";
import AppBProgressProvider from "../bprogress/bprogress-provider";

function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <ConvexClientProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          <Toaster position="bottom-right" />
          <MdxProvider>
            <SmoothScrollProvider>
              <AppBProgressProvider>{children}</AppBProgressProvider>
            </SmoothScrollProvider>
          </MdxProvider>
        </ThemeProvider>
      </ConvexClientProvider>
    </ClerkProvider>
  );
}

export default AppProvider;
