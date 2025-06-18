"use client";

import { AppProgressProvider as ProgressProvider } from "@bprogress/next";

export default function AppBProgressProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProgressProvider
      height="3px"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
}
