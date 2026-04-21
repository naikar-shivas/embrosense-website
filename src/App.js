import React, { useState } from 'react';
import { ShoppingCart, BookOpen, Zap, Search, X, Menu, Star, Download } from 'lucide-react';

export default function EmbrosensePlatform() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const courses = [
    { id: 1, title: 'Embroidery Engineering Fundamentals', type: 'Course', price: 299, rating: 4.9, students: 234 },
    { id: 2, title: 'Advanced Machine Optimization', type: 'Course', price: 399, rating: 4.8, students: 156 },
    { id: 3, title: 'Live Cohort: Systems Design', type: 'Workshop', price: 599, rating: 5, students: 45, starts: 'May 15' },
    { id: 4, title: 'Production Planning Masterclass', type: 'Course', price: 249, rating: 4.7, students: 189 },
  ];

  const blogPosts = [
    { id: 1, title: 'The Hidden Cost of Setup Time in Embroidery', category: 'Operations', date: 'Today', readtime: '8 min' },
    { id: 2, title: 'Thread Tension: The #1 Quality Killer (And How to Fix It)', category: 'Quality', date: 'Yesterday', readtime: '6 min' },
    { id: 3, title: '5 Metrics Every Embroidery Shop Should Track', category: 'Data', date: '2 days ago', readtime: '10 min' },
    { id: 4, title: 'From Chaos to System: A Workflow Redesign Case Study', category: 'Case Study', date: '3 days ago', readtime: '12 min' },
    { id: 5, title: 'Scaling Without Losing Quality: The Engineering Approach', category: 'Strategy', date: '1 week ago', readtime: '9 min' },
  ];

  const products = [
    { id: 1, name: 'Production Planning Template', type: 'digital', price: 49, category: 'Template' },
    { id: 2, name: 'Quality Checklist (Excel)', type: 'digital', price: 29, category: 'Template' },
    { id: 3, name: 'Embroidery Engineering Handbook', type: 'digital', price: 79, category: 'Guide' },
    { id: 4, name: 'Premium Thread Pack (20 colors)', type: 'physical', price: 89, category: 'Supplies' },
    { id: 5, name: 'Needle Assortment Kit', type: 'physical', price: 39, category: 'Supplies' },
    { id: 6, name: 'Business Growth Playbook', type: 'digital', price: 199, category: 'Guide' },
  ];

  const reviews = [
    { id: 1, product: 'Tajima TME5', type: 'Machine', rating: 4.6, pros: 'Reliable, smooth operation', cons: 'Stop learning curve' },
    { id: 2, product: 'Wilcom Embroidery Studio', type: 'Software', rating: 4.8, pros: 'Powerful features, comprehensive', cons: 'Expensive, complex' },
  ];

  const resources = [
    { id: 1, name: 'Embroidery Setup Guide', type: 'PDF', size: '2.4MB', downloads: 3421 },
    { id: 2, name: 'Thread Color Reference Chart', type: 'Excel', size: '156KB', downloads: 5892 },
    { id: 3, name: 'Machine Maintenance Checklist', type: 'PDF', size: '892KB', downloads: 2156 },
    { id: 4, name: 'Pricing Calculator (Google Sheets)', type: 'Sheet', size: 'Online', downloads: 4234 },
    { id: 5, name: 'Quality Standards Document', type: 'PDF', size: '3.2MB', downloads: 1876 },
  ];

  const filteredBlogPosts = searchTerm
    ? blogPosts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
    : blogPosts;

  const filteredProducts = selectedFilter === 'all' 
    ? products 
    : products.filter(p => p.category === selectedFilter);

  const addToCart = () => setCartCount(cartCount + 1);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Embrosense</h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['home', 'about', 'learning', 'blog', 'consulting', 'products', 'shop', 'resources', 'contact'].map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`capitalize ${currentPage === page ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
              >
                {page === 'learning' ? 'Learning Hub' : page === 'consulting' ? 'Consulting' : page === 'products' ? 'Reviews' : page}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>}
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-50 py-4 px-4 space-y-2">
            {['home', 'about', 'learning', 'blog', 'consulting', 'products', 'shop', 'resources', 'contact'].map(page => (
              <button key={page} onClick={() => { setCurrentPage(page); setMobileMenuOpen(false); }} className="block w-full text-left py-2 capitalize">
                {page === 'learning' ? 'Learning Hub' : page === 'consulting' ? 'Consulting' : page === 'products' ? 'Reviews' : page}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* HOME PAGE */}
        {currentPage === 'home' && (
          <div className="text-center space-y-8">
            <h2 className="text-5xl font-bold text-gray-900">Embroidery with Sense</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Transform embroidery from trial-and-error into a structured engineering system. We help companies stop losing money to poor decisions and inefficient machines.</p>
            <div className="flex justify-center gap-4">
              <button onClick={() => setCurrentPage('learning')} className="bg-blue-600 text-white px-8 py-3 rounded-lg">Get Started</button>
              <button onClick={() => setCurrentPage('about')} className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg">Learn More</button>
            </div>
          </div>
        )}

        {/* ABOUT PAGE */}
        {currentPage === 'about' && (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">About Embrosense</h2>
            <p className="text-lg text-gray-700">We are consultants, educators, and engineers dedicated to bringing structure and science to the embroidery industry. Our mission is to help embroidery businesses make data-driven decisions and optimize their operations.</p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-gray-50 rounded-lg"><Zap className="w-8 h-8 text-blue-600 mb-4" /><h3 className="font-semibold text-lg">Consulting</h3><p className="text-gray-600 mt-2">Custom solutions for your embroidery business challenges</p></div>
              <div className="p-6 bg-gray-50 rounded-lg"><BookOpen className="w-8 h-8 text-blue-600 mb-4" /><h3 className="font-semibold text-lg">Education</h3><p className="text-gray-600 mt-2">Courses and training to build your skills systematically</p></div>
              <div className="p-6 bg-gray-50 rounded-lg"><Download className="w-8 h-8 text-blue-600 mb-4" /><h3 className="font-semibold text-lg">Tools</h3><p className="text-gray-600 mt-2">Ready-to-use templates and resources for immediate impact</p></div>
            </div>
          </div>
        )}

        {/* LEARNING HUB */}
        {currentPage === 'learning' && (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">Learning Hub</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {courses.map(course => (
                <div key={course.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                  <div className="flex justify-between items-start mb-4">
                    <div><h3 className="font-semibold text-lg">{course.title}</h3><span className="text-sm text-gray-500">{course.type}</span></div>
                    <span className="text-2xl font-bold text-blue-600">${course.price}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1"><Star className="w-4 h-4 fill-yellow-400" /> {course.rating}</div>
                    <div>{course.students} students</div>
                    {course.starts && <div>Starts: {course.starts}</div>}
                  </div>
                  <button onClick={addToCart} className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BLOG PAGE */}
        {currentPage === 'blog' && (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">Daily Topics & Insights</h2>
            <div className="flex gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input type="text" placeholder="Search articles..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg" />
              </div>
            </div>
            <div className="space-y-4">
              {filteredBlogPosts.map(post => (
                <div key={post.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{post.title}</h3>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{post.category}</span>
                    <span>{post.date}</span>
                    <span>{post.readtime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONSULTING PAGE */}
        {currentPage === 'consulting' && (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">Consulting Services</h2>
            <p className="text-lg text-gray-700">Custom consulting to solve your unique embroidery business challenges. We work with you to identify bottlenecks, optimize processes, and implement data-driven decision-making.</p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 border border-gray-200 rounded-lg"><h3 className="font-semibold text-lg mb-2">Process Audit</h3><p className="text-gray-600">Complete analysis of your current operations</p></div>
              <div className="p-6 border border-gray-200 rounded-lg"><h3 className="font-semibold text-lg mb-2">System Design</h3><p className="text-gray-600">Custom solutions tailored to your needs</p></div>
              <div className="p-6 border border-gray-200 rounded-lg"><h3 className="font-semibold text-lg mb-2">Implementation</h3><p className="text-gray-600">Hands-on support for successful execution</p></div>
            </div>
            <button onClick={addToCart} className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">Schedule Consultation</button>
          </div>
        )}

        {/* PRODUCTS/REVIEWS PAGE */}
        {currentPage === 'products' && (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">Equipment Reviews</h2>
            <div className="space-y-4">
              {reviews.map(review => (
                <div key={review.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div><h3 className="font-semibold text-lg">{review.product}</h3><span className="text-sm text-gray-500">{review.type}</span></div>
                    <div className="flex items-center gap-1"><Star className="w-5 h-5 fill-yellow-400" /> {review.rating}</div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div><p className="font-semibold text-green-700">Pros:</p><p className="text-gray-600">{review.pros}</p></div>
                    <div><p className="font-semibold text-red-700">Cons:</p><p className="text-gray-600">{review.cons}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SHOP PAGE */}
        {currentPage === 'shop' && (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">Shop</h2>
            <div className="flex gap-2 mb-6 flex-wrap">
              {['all', 'Template', 'Guide', 'Supplies'].map(filter => (
                <button key={filter} onClick={() => setSelectedFilter(filter)} className={`px-4 py-2 rounded-full text-sm ${selectedFilter === filter ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                  {filter}
                </button>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{product.type}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                    <button onClick={addToCart} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RESOURCES PAGE */}
        {currentPage === 'resources' && (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">Resources & Downloads</h2>
            <div className="space-y-4">
              {resources.map(resource => (
                <div key={resource.id} className="border border-gray-200 rounded-lg p-6 flex justify-between items-center hover:shadow-lg transition">
                  <div className="flex items-center gap-4">
                    <Download className="w-6 h-6 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">{resource.name}</h3>
                      <p className="text-sm text-gray-600">{resource.type} • {resource.size} • {resource.downloads} downloads</p>
                    </div>
                  </div>
                  <button onClick={() => alert('Download started!')} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 text-sm">Download</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONTACT PAGE */}
        {currentPage === 'contact' && (
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
            <div className="bg-gray-50 rounded-lg p-8 space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-600">hello@embrosense.com</p>
                <p className="text-gray-600">sales@embrosense.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <p className="text-gray-600">+1 (234) 567-890</p>
              </div>
              <form className="space-y-4 mt-8">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                <textarea placeholder="Your Message" rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-lg"></textarea>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold">Send Message</button>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div><h3 className="font-semibold mb-4">Company</h3><ul className="space-y-2 text-gray-400"><li><button onClick={() => setCurrentPage('about')} className="hover:text-white">About</button></li><li><button onClick={() => setCurrentPage('contact')} className="hover:text-white">Contact</button></li></ul></div>
            <div><h3 className="font-semibold mb-4">Learning</h3><ul className="space-y-2 text-gray-400"><li><button onClick={() => setCurrentPage('learning')} className="hover:text-white">Courses</button></li><li><button onClick={() => setCurrentPage('blog')} className="hover:text-white">Blog</button></li></ul></div>
            <div><h3 className="font-semibold mb-4">Products</h3><ul className="space-y-2 text-gray-400"><li><button onClick={() => setCurrentPage('shop')} className="hover:text-white">Shop</button></li><li><button onClick={() => setCurrentPage('products')} className="hover:text-white">Reviews</button></li></ul></div>
            <div><h3 className="font-semibold mb-4">Resources</h3><ul className="space-y-2 text-gray-400"><li><button onClick={() => setCurrentPage('resources')} className="hover:text-white">Downloads</button></li><li><button onClick={() => setCurrentPage('consulting')} className="hover:text-white">Consulting</button></li></ul></div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Embrosense. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}