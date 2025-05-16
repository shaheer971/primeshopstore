
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getProductById, getFeaturedProducts } from "../data/products";
import { HeartIcon, StarIcon } from "../components/icons/Icons";
import ProductCard from "../components/ProductCard";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(id ? getProductById(parseInt(id)) : null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const similarProducts = getFeaturedProducts(4);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!product) {
      if (id) {
        const foundProduct = getProductById(parseInt(id));
        if (foundProduct) {
          setProduct(foundProduct);
          document.title = `${foundProduct.name} - PrimeShop`;
        } else {
          navigate("/not-found");
        }
      } else {
        navigate("/not-found");
      }
    } else {
      document.title = `${product.name} - PrimeShop`;
    }
  }, [id, product, navigate]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    
    console.log("Added to cart:", {
      product,
      size: selectedSize,
      quantity
    });
    
    // Here you would typically dispatch to a cart context or state manager
    alert(`Added ${quantity} ${product?.name} (Size: ${selectedSize}) to cart!`);
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    
    // Add to cart then navigate to checkout
    console.log("Buy now:", {
      product,
      size: selectedSize,
      quantity
    });
    
    navigate("/checkout");
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-10">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-gray-600">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/" className="hover:text-black">Home</Link></li>
              <li className="mx-1">&gt;</li>
              <li><Link to="/products" className="hover:text-black">Products</Link></li>
              <li className="mx-1">&gt;</li>
              <li>{product.name}</li>
            </ol>
          </nav>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {/* Product Images */}
            <div>
              <div className="mb-4 overflow-hidden rounded-lg bg-gray-100">
                <motion.img 
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button 
                    key={index} 
                    onClick={() => setSelectedImage(index)}
                    className={`overflow-hidden rounded-lg bg-gray-100 border-2 ${
                      selectedImage === index ? "border-black" : "border-transparent"
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`} 
                      className="w-full aspect-square object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              {product.isOnSale && (
                <div className="inline-block bg-black text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  On Sale
                </div>
              )}
              
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} size={16} className="text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">245 Reviews</span>
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-bold">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Select Size: {product.category === "Jordan" ? "Women's Shoes" : "Men's Shoes"}</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-10 flex items-center justify-center border rounded-md transition-colors ${
                        selectedSize === size
                          ? "border-black bg-black text-white"
                          : "border-gray-300 hover:border-gray-500"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block font-semibold mb-2" htmlFor="quantity">
                  Quantity:
                </label>
                <div className="flex w-32">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-12 h-10 border-t border-b border-gray-300 text-center focus:outline-none"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-black text-white py-3 px-6 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Add To Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="flex-1 bg-white text-black py-3 px-6 rounded-full border border-black hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                >
                  Buy Now
                </button>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`w-12 h-12 flex items-center justify-center rounded-full border transition-colors ${
                    isFavorite
                      ? "border-red-500 bg-red-50 text-red-500"
                      : "border-gray-300 hover:border-gray-500"
                  }`}
                >
                  <HeartIcon size={20} filled={isFavorite} />
                </button>
              </div>
              
              <div className="mb-8">
                <h3 className="font-bold text-xl mb-4">Description</h3>
                <p className="text-gray-700">{product.description}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="font-bold text-xl mb-4">Benefits</h3>
                <ul className="list-disc list-inside space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-700">{benefit}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-xl mb-4">Product Details</h3>
                <ul className="space-y-2">
                  {Object.entries(product.productDetails).map(([key, value]) => (
                    <li key={key} className="text-gray-700">
                      <span className="font-medium">{key}:</span> {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Similar Products */}
          <div>
            <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
