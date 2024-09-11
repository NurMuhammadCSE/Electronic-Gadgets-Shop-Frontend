"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "sonner";
import { AuthProvider } from "./AuthProviders";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Toaster></Toaster>
        <Provider store={store}>
          {/* <AuthProvider>{children}</AuthProvider> */}
          {children}
        </Provider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
