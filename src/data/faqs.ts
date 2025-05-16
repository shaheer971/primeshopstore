
export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "How To Place An Order On Our Online Store?",
    answer: "To place an order on our online store, first browse our products and select the items you'd like to purchase. Click on each product to view details and choose your preferred size. Add items to your cart by clicking the 'Add to Cart' button. When you're ready to checkout, click on the cart icon, review your order, and proceed to checkout. Follow the prompts to enter your shipping information, payment details, and complete your purchase."
  },
  {
    id: 2,
    question: "How Much Does Delivery Cost?",
    answer: "We offer free standard shipping on all orders over $99. For orders under $99, there is a flat shipping fee of $8.95. Expedited shipping options are available at checkout for an additional cost, starting at $14.95 for 2-day shipping and $24.95 for overnight delivery. International shipping rates vary based on location and can be calculated at checkout."
  },
  {
    id: 3,
    question: "What Delivery Methods Are Available?",
    answer: "We offer several delivery methods to accommodate your needs. Standard shipping (3-7 business days), Expedited shipping (2 business days), and Overnight shipping (1 business day, order must be placed before 2 PM ET). We ship via trusted carriers including FedEx, UPS, and USPS. All delivery methods include package tracking information that will be sent to your email once your order ships."
  },
  {
    id: 4,
    question: "How Do I Check If A Product Is In Stock?",
    answer: "You can easily check if a product is in stock on the product page. When viewing a product, available sizes will be selectable, while out-of-stock sizes will be grayed out or marked as 'Out of Stock.' Additionally, you can sign up for restock notifications on specific products and sizes by clicking the 'Notify Me' button on out-of-stock items. We'll send you an email as soon as the item becomes available again."
  },
  {
    id: 5,
    question: "What Is Your Return Policy?",
    answer: "We offer a 30-day return policy for unworn items in their original packaging with tags attached. To initiate a return, log into your account and select the order you wish to return, or contact our customer service team. Once your return is approved, you'll receive a prepaid shipping label. Refunds will be processed within 5-7 business days after we receive the returned items. Store credit and exchanges are also available options."
  },
  {
    id: 6,
    question: "How Do I Track My Order?",
    answer: "Tracking your order is simple. Once your order ships, you'll automatically receive a shipping confirmation email containing your tracking number and a direct link to follow your package's journey. You can also track your order by logging into your account on our website, navigating to 'Order History,' and selecting the specific order you want to track. Our system updates order status in real-time so you always know where your sneakers are."
  },
  {
    id: 7,
    question: "Are All Your Products Authentic?",
    answer: "Yes, we guarantee 100% authenticity on all products sold through our store. We source our inventory directly from authorized distributors and official brand channels only. Each product undergoes a thorough authentication process before being listed on our site. We never sell replicas or unauthorized merchandise. If you ever question the authenticity of a product received, we offer a full refund or exchange."
  },
  {
    id: 8,
    question: "Do You Ship Internationally?",
    answer: "Yes, we ship to most countries worldwide. International shipping times typically range from 7-21 business days depending on the destination and local customs processing. Please note that international customers are responsible for any customs duties, taxes, or import fees that may be charged upon delivery. These charges vary by country and are not included in our shipping fees. For a complete list of countries we ship to, please visit our International Shipping Policy page."
  }
];

export const getFAQs = (count?: number): FAQ[] => {
  if (count) {
    return faqs.slice(0, count);
  }
  return faqs;
};
