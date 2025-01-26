import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <section 
        id="hero" 
        className="hero section dark-background relative h-screen flex items-center justify-center text-white text-center bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: 'url(/img/herb.jpg)' }} // Image from public folder
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        <div className="container relative z-10 flex flex-col justify-center text-center">
        <a href="/" className="d-flex align-items-center justify-center">
  <span className="sitename">
    <img 
      src="img/logoracoon.jpg" 
      alt="Herbal Store Logo" 
      className="w-24 h-24 animate-bounce-slow" 
    />
  </span>
</a>

          <h2 className="text-4xl font-bold text-shadow-md" data-aos="fade-up" data-aos-delay="100">
            Welcome to Our Herbal Store
          </h2>
          <p className="text-xl mt-4 text-shadow-md" data-aos="fade-up" data-aos-delay="200">
            Explore our wide range of high-quality herbs and natural products.
          </p>
          <div className="mt-6">
            <a href="#products" className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full text-lg font-semibold">
              Buy Now
            </a>
          </div>

          {/* Newsletter Section */}
          <div className="mt-8" data-aos="fade-up" data-aos-delay="300">
            <form className="flex justify-center items-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-l-full text-black" 
                required
              />
              <button type="submit" className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-r-full text-white">Subscribe</button>
            </form>
          </div>
        </div>
      </section>



      <section id="about" className="about section bg-green-50 py-16">
  <div className="container section-title text-center" data-aos="fade-up">
    <div className="hero-img" data-aos="zoom-out" data-aos-delay="200">
      <h2 className="text-4xl font-semibold text-green-700">About Hoppinracoon Ranch</h2>
      <br />
    </div>
  </div>
  <div className="container">
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12"> {/* Adjusted gap to 12 */}
    
      <div className="flex-1" data-aos="fade-up" data-aos-delay="100">
        <div className="px-4"> {/* Added padding to the sides */}
          <img 
            src="img/herb.jpg" 
            alt="Herb Product 1" 
            className="w-full h-[400px] object-cover rounded-t-lg" 
          />
        </div>
      </div>

      <div className="flex-1 text-center lg:text-left" data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-3xl font-semibold text-green-600">Our Vision</h2>
        <p className="text-lg text-gray-700 mt-4">
          Our vision is to become a trusted name in the herbal industry, known for our commitment to quality, sustainability, and holistic health. We aspire to cultivate a community of wellness seekers who turn to nature for healing and care. By offering a variety of herbal products, we aim to promote a balanced and healthy lifestyle for all.
        </p>
        <a href="#services" className="read-more text-green-600 font-semibold mt-6 inline-block hover:underline">
          <span>Discover Our Herbal Offerings</span> <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>
</section>




      {/* About Us, Products, Visit Us Sections */}
      <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* About Us, Products, Visit Us Sections */}
      
        {/* About Us */}
        <Card>
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <p>We are dedicated to providing high-quality, natural herbs that promote wellness and health. Our goal is to offer the finest herbal products sourced from nature.</p>
          </CardContent>
        </Card>

        {/* Products */}
        <Card>
          <CardHeader>
            <CardTitle>Our Products</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Explore our wide range of herbs and natural products for your health and healing. We offer various teas, tinctures, and oils to support your wellness journey.</p>
            <a href="#products" className="text-green-500 hover:text-green-600 font-semibold">See Our Products</a>
          </CardContent>
        </Card>

        {/* Visit Us */}
        <Card>
          <CardHeader>
            <CardTitle>Visit Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Come visit our store to explore our products and learn more about our natural herbs. Our friendly staff will guide you through our offerings.</p>
          </CardContent>
        </Card>
      
    </div>
      </div>

      {/* Our Products Section */}
      <section id="products" className="py-16 bg-gray-100">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src="img/herb.jpg" alt="Herb Product 1" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="mt-4 text-xl font-semibold">Herb Product 1</h3>
              <p className="text-gray-600 mt-2">A high-quality herb for your wellness.</p>
              <a href="#buy" className="mt-4 inline-block text-green-500 hover:text-green-600 font-semibold">Buy Now</a>
            </div>

            {/* Product 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src="img/herb.jpg" alt="Herb Product 2" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="mt-4 text-xl font-semibold">Herb Product 2</h3>
              <p className="text-gray-600 mt-2">An essential herb for natural healing.</p>
              <a href="#buy" className="mt-4 inline-block text-green-500 hover:text-green-600 font-semibold">Buy Now</a>
            </div>

            {/* Product 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src="img/herb.jpg" alt="Herb Product 3" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="mt-4 text-xl font-semibold">Herb Product 3</h3>
              <p className="text-gray-600 mt-2">Perfect for daily health benefits.</p>
              <a href="#buy" className="mt-4 inline-block text-green-500 hover:text-green-600 font-semibold">Buy Now</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
