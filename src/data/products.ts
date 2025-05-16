export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  description: string;
  isOnSale?: boolean;
  isPopular?: boolean;
  releaseDate?: string;
  category: string;
  sizes: string[];
  benefits: string[];
  productDetails: {
    [key: string]: string;
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: "Jordan Flight Court",
    price: 109.99,
    originalPrice: 129.99,
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "Inspired By The Past, Built For Tomorrow. We Remixed Elements From The AJ3, AJ4 And AJ5 To Create A Fresh Take On The Classics. Smooth Leather And Soft Suede Give You Style And Durability While Textile Panels Add Breathability. Plus, Embroidered Details Infuse These Kicks With Jordan Heritage.",
    isOnSale: true,
    isPopular: true,
    releaseDate: "2023-10-15",
    category: "Jordan",
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14", "15"],
    benefits: [
      "Real And Synthetic Leather In The Upper Add Durability And Support",
      "Foam Midsole Gives You Lightweight Cushioning",
      "Double Top Eyelet Enables Heel Lock Lacing",
      "Rubber Outsole Helps Provide Durable Traction"
    ],
    productDetails: {
      "Shown": "White/Black/Black",
      "Style": "DJ2664-100"
    }
  },
  {
    id: 2,
    name: "Jordan Spizike Low",
    price: 127.99,
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "The Jordan Spizike Low takes inspiration from several iconic Air Jordan models, combining their best features for a unique and stylish look. With premium materials and exceptional comfort, these sneakers are perfect for everyday wear.",
    isPopular: true,
    releaseDate: "2023-07-22",
    category: "Jordan",
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
    benefits: [
      "Combination of leather, synthetic materials and textile for durability",
      "Air-Sole unit for lightweight cushioning",
      "Rubber outsole with herringbone pattern for excellent traction",
      "Padded collar for added comfort"
    ],
    productDetails: {
      "Shown": "Black/Cement Grey/Red",
      "Style": "DJ0550-003"
    }
  },
  {
    id: 3,
    name: "Jordan Winterized 6 Rings",
    price: 138.99,
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "The Jordan Winterized 6 Rings combines elements from the six championship shoes worn by Michael Jordan. Built for colder weather, these sneakers feature water-resistant materials and enhanced insulation for comfort in any condition.",
    category: "Jordan",
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
    benefits: [
      "Water-resistant upper keeps feet dry in wet conditions",
      "Enhanced insulation for warmth in cold weather",
      "Cushioned midsole for all-day comfort",
      "Durable rubber outsole for traction on various surfaces"
    ],
    productDetails: {
      "Shown": "Brown/Gum/Black",
      "Style": "DV0992-200"
    }
  },
  {
    id: 4,
    name: "Jordan Spizike Low",
    price: 109.99,
    originalPrice: 119.99,
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "The Jordan Spizike Low combines elements from several classic Air Jordan models, creating a hybrid that pays homage to Spike Lee's contributions to the Jordan legacy. With its distinctive design and premium materials, this sneaker stands out in any collection.",
    isOnSale: true,
    isPopular: true,
    releaseDate: "2023-06-10",
    category: "Jordan",
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
    benefits: [
      "Leather, synthetic and textile upper for durability and support",
      "Air-Sole unit provides lightweight cushioning",
      "Rubber outsole delivers excellent traction and durability",
      "Padded collar enhances comfort around the ankle"
    ],
    productDetails: {
      "Shown": "White/Gold/Red",
      "Style": "DJ0550-106"
    }
  },
  {
    id: 5,
    name: "Air Jordan 1 Mid",
    price: 119.99,
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "The Air Jordan 1 Mid offers a timeless design that celebrates the first AJ signature shoe. With premium materials and classic colorways, this mid-top sneaker delivers iconic style and everyday comfort.",
    category: "Jordan",
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
    benefits: [
      "Leather, synthetic or textile upper depending on color",
      "Air-Sole unit in the heel for lightweight cushioning",
      "Solid rubber outsole for excellent traction",
      "Padded collar for enhanced comfort"
    ],
    productDetails: {
      "Shown": "White/Black",
      "Style": "554724-113"
    }
  },
  {
    id: 6,
    name: "Air Jordan 1 High",
    price: 149.99,
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "The Air Jordan 1 High is where legend begins. This iconic silhouette changed the game when it debuted in 1985 and continues to set the standard for basketball sneakers. With its high-top design and premium materials, this shoe delivers timeless style and heritage.",
    category: "Jordan",
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
    benefits: [
      "Full-grain leather upper for durability and a premium look",
      "Encapsulated Air-Sole unit in the heel for responsive cushioning",
      "Solid rubber outsole with pivot point for traction and flexibility",
      "Perforations on toe for enhanced breathability"
    ],
    productDetails: {
      "Shown": "White/University Blue",
      "Style": "555088-140"
    }
  },
  {
    id: 7,
    name: "Air Jordan 4 Mid",
    price: 129.99,
    originalPrice: 149.99,
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "The Air Jordan 4 Mid brings a fresh perspective to the classic AJ4 silhouette. With iconic design elements and modern comfort technology, these sneakers deliver both style and performance for everyday wear.",
    isOnSale: true,
    isPopular: true,
    releaseDate: "2023-05-18",
    category: "Jordan",
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
    benefits: [
      "Combination of leather and synthetic materials for durability",
      "Visible Air cushioning in the heel for impact protection",
      "Supportive midfoot cage for stability",
      "Rubber outsole with herringbone pattern for excellent traction"
    ],
    productDetails: {
      "Shown": "Black/Red",
      "Style": "BQ3835-006"
    }
  },
  {
    id: 8,
    name: "Nike Dunk Low Retro",
    price: 99.99,
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colors. This basketball icon channels '80s vibes with a padded, low-cut collar that looks sleek while feeling comfortable.",
    category: "Nike",
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
    benefits: [
      "Leather, synthetic and textile upper for durability",
      "Foam midsole provides lightweight cushioning",
      "Padded, low-cut collar for a comfortable fit around the ankle",
      "Rubber sole with pivot points for traction and flexibility"
    ],
    productDetails: {
      "Shown": "White/Black",
      "Style": "DD1391-100"
    }
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsOnSale = (): Product[] => {
  return products.filter(product => product.isOnSale);
};

export const getAllCategories = (): string[] => {
  const categories = products.map(product => product.category);
  return [...new Set(categories)];
};

export const getFeaturedProducts = (count: number = 4): Product[] => {
  return products.slice(0, count);
};
