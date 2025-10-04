import React, { useState } from 'react';
import Breadcrumb from '../components/breadcrumb';
import { X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const recentEvents = [
    "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://images.pexels.com/photos/8613204/pexels-photo-8613204.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://images.pexels.com/photos/8613028/pexels-photo-8613028.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://images.pexels.com/photos/8613086/pexels-photo-8613086.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://images.pexels.com/photos/8613092/pexels-photo-8613092.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  ];

  const schoolGallery = [
    "https://th.bing.com/th/id/OIP.WjqmfktthNqo8u_p3Wf1vwHaEO?w=319&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://images.pexels.com/photos/8613204/pexels-photo-8613204.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://images.pexels.com/photos/8613028/pexels-photo-8613028.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://images.pexels.com/photos/8613086/pexels-photo-8613086.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://stgeorgenpschool.com/gallery/index.php?sfpg=SU5GUkFTVFJVQ1RVUkUvKiozYzIyZDY0NzIyZDY1NDEyYjk2MmRjMGZmNTRiZmRlMjQwYmYzYWQ2NTE1OTcwNGY4ZDg4ZGMxNWVlYTNhMWIy",
    "https://stgeorgenpschool.com/gallery/index.php?sfpg=SU5GUkFTVFJVQ1RVUkUvKiozYzIyZDY0NzIyZDY1NDEyYjk2MmRjMGZmNTRiZmRlMjQwYmYzYWQ2NTE1OTcwNGY4ZDg4ZGMxNWVlYTNhMWIy",
    "https://images.pexels.com/photos/8613092/pexels-photo-8613092.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  ];

  const eventsGallery = [
    "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://images.pexels.com/photos/8613204/pexels-photo-8613204.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://images.pexels.com/photos/8613028/pexels-photo-8613028.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://images.pexels.com/photos/8613086/pexels-photo-8613086.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://images.pexels.com/photos/8613092/pexels-photo-8613092.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const GalleryGrid = ({ images, title }) => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            onClick={() => openLightbox(image)}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <Breadcrumb title="Gallery" />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <GalleryGrid images={recentEvents} title="2024 Events" />
          <GalleryGrid images={schoolGallery} title="Our Gallery" />
          <GalleryGrid images={eventsGallery} title="School Events" />
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-thistle">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-6 lg:mb-0">
              <div className="bg-white/20 p-4 rounded-full">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div className="text-white">
                <p className="text-lg">Call For More Info</p>
                <a href="tel:+919444575796" className="text-2xl font-bold hover:text-blue-200 transition-colors">
                  +91 94445 75796
                </a>
              </div>
              <div className="hidden lg:block">
                <h3 className="text-2xl font-bold text-white">Schedule a free student admission consultation now.</h3>
              </div>
            </div>
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-thistle px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
