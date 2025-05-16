
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeartIcon } from './icons/Icons';
import { Product } from '../data/products';
import { addToast } from './ui/hero-toast';

interface ProductCardProps {
  product: Product;
}

// Mock of the Hero UI Card component
const Card = ({ 
  children, 
  isPressable = false,
  shadow = "sm",
  className = "",
  onPress = () => {},
  ...props 
}: { 
  children: React.ReactNode;
  isPressable?: boolean;
  shadow?: string;
  className?: string;
  onPress?: () => void;
  [key: string]: any;
}) => {
  return (
    <div 
      className={`rounded-lg overflow-hidden ${shadow === "sm" ? "shadow-sm" : shadow === "md" ? "shadow-md" : "shadow-lg"} ${isPressable ? "cursor-pointer hover:shadow-md transition-shadow" : ""} ${className}`}
      onClick={isPressable ? onPress : undefined}
      {...props}
    >
      {children}
    </div>
  );
};

// Mock of the Hero UI CardBody component
const CardBody = ({ children, className = "", ...props }: { children: React.ReactNode; className?: string; [key: string]: any; }) => {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  );
};

// Mock of the Hero UI CardFooter component
const CardFooter = ({ children, className = "", ...props }: { children: React.ReactNode; className?: string; [key: string]: any; }) => {
  return (
    <div className={`p-3 ${className}`} {...props}>
      {children}
    </div>
  );
};

// Mock of the Hero UI Image component
const Image = ({ 
  src, 
  alt,
  className = "",
  width,
  radius = "",
  shadow = "",
  ...props 
}: { 
  src: string;
  alt: string;
  className?: string;
  width?: string;
  radius?: string;
  shadow?: string;
  [key: string]: any;
}) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`${className} ${radius === "lg" ? "rounded-lg" : radius === "md" ? "rounded-md" : radius === "sm" ? "rounded-sm" : ""} ${shadow === "sm" ? "shadow-sm" : shadow === "md" ? "shadow-md" : shadow === "lg" ? "shadow-lg" : ""}`}
      style={width ? { width } : {}}
      {...props} 
    />
  );
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    
    // Show toast notification
    addToast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: `${product.name} has been ${isFavorite ? "removed from" : "added to"} your favorites`,
      color: isFavorite ? "danger" : "success",
      duration: 2000,
    });
  };

  return (
    <Link to={`/product/${product.id}`}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card isPressable shadow="sm">
          <CardBody className="overflow-visible p-0 relative">
            <div className="relative">
              <Image
                alt={product.name}
                className="w-full object-cover h-[240px]"
                radius="lg"
                shadow="sm"
                src={product.images[0]}
                width="100%"
              />
              {product.isOnSale && (
                <div className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
                  SALE
                </div>
              )}
              <button 
                onClick={handleFavoriteClick}
                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
              >
                <HeartIcon 
                  size={20} 
                  className={isFavorite ? "text-red-500" : "text-gray-600"} 
                  filled={isFavorite}
                />
              </button>
            </div>
          </CardBody>
          <CardFooter className="text-small justify-between flex flex-col">
            <div className="w-full flex justify-between items-center">
              <h3 className="font-semibold text-lg truncate">{product.name}</h3>
              <div className="text-right">
                {product.originalPrice && (
                  <p className="text-gray-500 line-through text-sm">${product.originalPrice.toFixed(2)}</p>
                )}
                <p className={`font-bold ${product.originalPrice ? "text-red-600" : ""}`}>${product.price.toFixed(2)}</p>
              </div>
            </div>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3"
              >
                <button className="w-full bg-black text-white py-2 rounded-md hover:opacity-80 transition-opacity">
                  View Details
                </button>
              </motion.div>
            )}
          </CardFooter>
        </Card>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
