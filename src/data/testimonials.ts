
export interface Testimonial {
  id: number;
  name: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "James T. Moore",
    content: "The shopping experience was amazing! The website was easy to navigate, the checkout process was smooth, and my order arrived faster than expected. The sneakers are exactly as described - high quality and very comfortable. Will definitely shop here again!",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah J. Wilson",
    content: "I was hesitant about ordering shoes online but decided to give PrimeShop a try based on recommendations from friends. Best decision ever! The shoes fit perfectly, and they look even better in person than in the photos. The customer service was exceptional when I had a question about sizing.",
    rating: 5
  },
  {
    id: 3,
    name: "Robert L. Smith",
    content: "Just received my second pair of Jordan's from PrimeShop, and I'm once again impressed by the quality and service. The website makes it easy to find exactly what you're looking for, and the detailed product descriptions help ensure you get the right fit. Highly recommend!",
    rating: 5
  },
  {
    id: 4,
    name: "Emily R. Johnson",
    content: "Love my new sneakers! The shipping was incredibly fast, and the packaging was secure. These are authentic products at great prices. The size guide was spot on, and the shoes fit perfectly. Already planning my next purchase!",
    rating: 5
  },
  {
    id: 5,
    name: "Michael K. Williams",
    content: "I've been collecting sneakers for years, and PrimeShop has become my go-to store. The selection is excellent, prices are competitive, and they often have rare models that are hard to find elsewhere. The rewards program is a nice bonus too!",
    rating: 5
  },
  {
    id: 6,
    name: "Jennifer D. Collins",
    content: "After struggling to find my size at local stores, I found exactly what I needed at PrimeShop. The filtering options made it easy to narrow down my choices, and the 360-degree product views helped me make my decision. The shoes arrived in perfect condition, and I couldn't be happier!",
    rating: 5
  }
];

export const getTestimonials = (count?: number): Testimonial[] => {
  if (count) {
    return testimonials.slice(0, count);
  }
  return testimonials;
};
