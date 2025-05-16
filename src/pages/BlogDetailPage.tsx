
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getBlogPostById, getBlogPosts } from "../data/blogs";

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState(id ? getBlogPostById(parseInt(id)) : null);
  const relatedPosts = getBlogPosts(3);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!blogPost) {
      if (id) {
        const post = getBlogPostById(parseInt(id));
        if (post) {
          setBlogPost(post);
          document.title = `${post.title} - PrimeShop Blog`;
        } else {
          navigate("/not-found");
        }
      } else {
        navigate("/not-found");
      }
    } else {
      document.title = `${blogPost.title} - PrimeShop Blog`;
    }
  }, [id, blogPost, navigate]);

  if (!blogPost) {
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
              <li><Link to="/blog" className="hover:text-black">Blog</Link></li>
              <li className="mx-1">&gt;</li>
              <li>{blogPost.title}</li>
            </ol>
          </nav>
          
          <div className="max-w-4xl mx-auto">
            {/* Blog Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{blogPost.title}</h1>
              <div className="flex items-center text-gray-600">
                <span>{blogPost.date}</span>
                <span className="mx-2">•</span>
                <span>By {blogPost.author}</span>
              </div>
            </div>
            
            {/* Featured Image */}
            <div className="mb-8">
              <img 
                src={blogPost.image} 
                alt={blogPost.title}
                className="w-full rounded-lg"
              />
            </div>
            
            {/* Blog Content */}
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            </div>
            
            {/* Share and Tags */}
            <div className="border-t border-b border-gray-200 py-6 my-10 flex flex-wrap justify-between">
              <div>
                <span className="font-semibold">Tags:</span>
                <button className="ml-2 bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-gray-200">Sneakers</button>
                <button className="ml-2 bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-gray-200">Style</button>
                <button className="ml-2 bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-gray-200">Tips</button>
              </div>
              
              <div>
                <span className="font-semibold">Share:</span>
                <button className="ml-2 p-1 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </button>
                <button className="ml-2 p-1 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </button>
                <button className="ml-2 p-1 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Related Articles */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {relatedPosts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.id}`} className="group">
                    <div className="overflow-hidden rounded-lg mb-3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold group-hover:text-gray-700">{post.title}</h4>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogDetailPage;
