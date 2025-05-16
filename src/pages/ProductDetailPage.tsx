
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getProductById, getFeaturedProducts } from "../data/products";
import { HeartIcon, StarIcon } from "../components/icons/Icons";
import ProductCard from "../components/ProductCard";
import { Button } from "@/components/ui/button";
import { addToast } from "../components/ui/hero-toast";
import { 
  Select,
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
      addToast({
        title: "Size Selection Required",
        description: "Please select a size before adding to cart",
        color: "warning",
        duration: 5000,
      });
      return;
    }
    
    console.log("Added to cart:", {
      product,
      size: selectedSize,
      quantity
    });
    
    // Use the toast notification instead of an alert
    addToast({
      title: "Added to Cart",
      description: `${quantity} x ${product?.name} (Size: ${selectedSize}) has been added to your cart`,
      color: "success",
      duration: 5000,
    });
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      addToast({
        title: "Size Selection Required",
        description: "Please select a size before proceeding",
        color: "warning",
        duration: 5000,
      });
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
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products">Products</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
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
                <Select onValueChange={setSelectedSize} value={selectedSize}>
                  <SelectTrigger className="w-full max-w-xs">
                    <SelectValue placeholder="Select a size" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizes.map((size) => (
                      <SelectItem key={size} value={size}>{size}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="mb-6">
                <label className="block font-semibold mb-2" htmlFor="quantity">
                  Quantity:
                </label>
                <div className="flex w-32">
                  <Button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    variant="outline"
                    className="rounded-r-none"
                    size="icon"
                  >
                    -
                  </Button>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-12 h-10 border-t border-b border-gray-300 text-center focus:outline-none"
                  />
                  <Button
                    onClick={() => setQuantity(quantity + 1)}
                    variant="outline"
                    className="rounded-l-none"
                    size="icon"
                  >
                    +
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-black text-white hover:bg-black/90"
                >
                  Add To Cart
                </Button>
                <Button
                  onClick={handleBuyNow}
                  variant="outline"
                  className="flex-1"
                >
                  Buy Now
                </Button>
                <Button
                  onClick={() => setIsFavorite(!isFavorite)}
                  variant={isFavorite ? "destructive" : "outline"}
                  size="icon"
                  className="w-10 h-10 rounded-full"
                >
                  <HeartIcon size={20} filled={isFavorite} />
                </Button>
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
