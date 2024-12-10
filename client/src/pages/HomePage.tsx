import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Welcome to Hoppin Raccoon Ranch</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <p>A local hop farm in Clarksburg, California, dedicated to growing quality hops.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Products</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Discover our variety of locally grown hops for your brewing needs.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Visit Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Come visit our farm in Clarksburg and learn about hop farming.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default HomePage;
