import React from "react";
import { motion } from "framer-motion";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
];

const GalleryPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-64 bg-cover bg-center" style={{ backgroundImage: "url('/assets/img/pencil.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">Gallery</h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div 
              key={index} 
              className="rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-48 object-cover"/>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
