import React from 'react';
import { Route, Switch } from 'wouter';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import { Toaster } from '@/components/ui/toaster';

// Import layouts and pages
import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/pages/HomePage';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </MainLayout>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
