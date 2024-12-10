import React from 'react';
import { Route, Switch } from 'wouter';
import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/pages/HomePage';

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route>404 - Not Found</Route>
      </Switch>
    </MainLayout>
  );
}

export default App;
