import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { useState, useEffect } from "react";
import SplashScreen from "@/components/splash-screen";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Tips from "@/pages/tips";
import Quiz from "@/pages/quiz";
import Posters from "@/pages/posters";
import Resources from "@/pages/resources";
import Trends from "@/pages/trends";
import Foundations from "@/pages/foundations";
import DonationInfo from "@/pages/donation-info";
import Contact from "@/pages/contact";
import MobileLayout from "@/components/layout/mobile-layout";

function Router() {
  return (
    <MobileLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/tips" component={Tips} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/posters" component={Posters} />
        <Route path="/resources" component={Resources} />
        <Route path="/trends" component={Trends} />
        <Route path="/foundations" component={Foundations} />
        <Route path="/donation-info" component={DonationInfo} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </MobileLayout>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <ThemeProvider defaultTheme="light" storageKey="securelearn-ui-theme">
      <QueryClientProvider client={queryClient}>
        <Toaster />
        {showSplash ? (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        ) : (
          <Router />
        )}
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
