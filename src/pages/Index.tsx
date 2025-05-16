
import React, { useEffect } from "react";
import Hero from "../components/home/Hero";
import NewCollection from "../components/home/NewCollection";
import Testimonials from "../components/home/Testimonials";
import LatestBlog from "../components/home/LatestBlog";
import HomeFAQ from "../components/home/HomeFAQ";
import FeaturesSection from "../components/home/FeaturesSection";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "PrimeShop - Premium Sneakers";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <NewCollection />
        <FeaturesSection />
        <Testimonials />
        <LatestBlog />
        <HomeFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
