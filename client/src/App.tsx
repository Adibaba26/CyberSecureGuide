import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Tips from "@/pages/tips";
import Quiz from "@/pages/quiz";
import Posters from "@/pages/posters";
import Resources from "@/pages/resources";
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
        <Route component={NotFound} />
      </Switch>
    </MobileLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
