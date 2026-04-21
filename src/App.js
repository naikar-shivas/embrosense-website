import React, { useState } from 'react';
import { ShoppingCart, BookOpen, Zap, Search, X, Menu, ArrowRight, Star, Download } from 'lucide-react';

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
    { id: 1, title: 'The Hidden Cost of Setup Time in Embroidery', category: 'Operations', date: 'Today', readTime: '8 min' },
    { id: 2, title: 'Thread Tension: The #1 Quality Killer (And How to Fix It)', category: 'Quality', date: 'Yesterday', readTime: '6 min' },
    { id: 3, title: '5 Metrics Every Embroidery Shop Should Track', category: 'Data', date: '2 days ago', readTime: '10 min' },
    { id: 4, title: 'From Chaos to System: A Workflow Redesign Case Study', category: 'Case Study', date: '3 days ago', readTime: '12 min' },
    { id: 5, title: 'Scaling Without Losing Quality: The Engineering Approach', category: 'Strategy', date: '1 week ago', readTime: '9 min' },
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
    { id: 1, product: 'Tajima TMEG', type: 'Machine', rating: 4.6, pros: 'Reliable, smooth operation', cons: 'Steep learning curve', price: '$$$$' },
    { id: 2, product: 'Wilcom EmbroideryStudio', type: 'Software', rating: 4.4, pros: 'Powerful features', cons: 'Expensive, complex UI', price: '$$$' },
    { id: 3, product: 'Gutermann Mettler', type: 'Thread', rating: 4.8, pros: 'Excellent color range', cons: 'Premium pricing', price: '$$' },
    { id: 4, product: 'Singer Quantum', type: 'Machine', rating: 4.1, pros: 'Affordable', cons: 'Limited to small designs', price: '$$$' },
  ];

  const resources = [
    { id: 1, title: 'Embroidery Design Template (PSD)', type: 'Template', downloads: 1200 },
    { id: 2, title: 'Production Timeline Case Study', type: 'Whitepaper', downloads: 890 },
    { id: 3, title: 'Machine Maintenance Checklist', type: 'Template', downloads: 2100 },
    { id: 4, title: 'Quality Standards Video Series', type: 'Video', downloads: 650 },
    { id: 5, title: 'Cost Analysis Spreadsheet', type: 'Template', downloads: 1450 },
  ];

  const Navigation = () => (
    <nav className="fixed w-full top-0 bg-white/95 backdrop-blur border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold tracking-tight cursor-pointer hover:text-gray-600">
          Embrosense
        </button>
        
        <div className="hidden md:flex gap-8 text-sm">
          {['home', 'about', 'learning', 'blog', 'consulting', 'reviews', 'shop', 'resources', 'contact'].map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`font-medium transition ${currentPage === page ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {page.charAt(0).toUpperCase() + page.slice(1).replace(/([A-Z])/g, ' $1')}
            </button>
          ))}
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <button onClick={() => setCurrentPage('shop')} className="relative">
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>}
          </button>
        </div>

        <button onClick={() => setCurrentPage('shop')} className="hidden md:flex items-center gap-2 relative">
          <ShoppingCart className="w-5 h-5" />
          {cartCount > 0 && <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          {['home', 'about', 'learning', 'blog', 'consulting', 'reviews', 'shop', 'resources', 'contact'].map(page => (
            <button
              key={page}
              onClick={() => { setCurrentPage(page); setMobileMenuOpen(false); }}
              className="block w-full text-left px-6 py-3 text-sm border-b border-gray-100 hover:bg-gray-50"
            >
              {page.charAt(0).toUpperCase() + page.slice(1).replace(/([A-Z])/g, ' $1')}
            </button>
          ))}
        </div>
      )}
    </nav>
  );

  const HomePage = () => (
    <div>
      <section className="pt-32 pb-24 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <span className="text-sm font-mono text-blue-600 uppercase tracking-widest">Engineering Embroidery</span>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mt-4 mb-8">Embroidery with Sense</h1>
          <p className="text-xl text-gray-600 mb-4">Transform your business from trial-and-error to structured engineering.</p>
          <p className="text-lg text-gray-500 mb-12">Education, system design, product reviews, and real-world consulting — everything you need.</p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => setCurrentPage('consulting')} className="px-8 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition">
              Get Consulting →
            </button>
            <button onClick={() => setCurrentPage('learning')} className="px-8 py-3 border border-gray-900 text-gray-900 text-sm font-medium hover:bg-gray-50 transition">
              Start Learning
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <BookOpen className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Learning Hub</h3>
              <p className="text-gray-600 mb-4">Courses, live workshops, and resource library to build engineering expertise.</p>
              <button onClick={() => setCurrentPage('learning')} className="text-blue-600 font-medium text-sm">Explore →</button>
            </div>
            <div>
              <Zap className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Consulting Services</h3>
              <p className="text-gray-600 mb-4">Custom strategy and implementation for your specific business challenges.</p>
              <button onClick={() => setCurrentPage('consulting')} className="text-blue-600 font-medium text-sm">Learn more →</button>
            </div>
            <div>
              <Star className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Product Reviews</h3>
              <p className="text-gray-600 mb-4">Honest, technical reviews of machines, software, and materials.</p>
              <button onClick={() => setCurrentPage('reviews')} className="text-blue-600 font-medium text-sm">Read reviews →</button>
            </div>
            <div>
              <ShoppingCart className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Shop & Resources</h3>
              <p className="text-gray-600 mb-4">Templates, guides, supplies, and downloads to accelerate your growth.</p>
              <button onClick={() => setCurrentPage('shop')} className="text-blue-600 font-medium text-sm">Browse shop →</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Latest Insights</h2>
            <button onClick={() => setCurrentPage('blog')} className="text-blue-600 font-medium">View all →</button>
          </div>
          <div className="space-y-4">
            {blogPosts.slice(0, 3).map(post => (
              <div key={post.id} className="pb-6 border-b border-gray-200 hover:bg-gray-50 p-4 -m-4 transition cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-mono text-gray-500 uppercase">{post.category}</span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <span className="text-xs text-gray-500">{post.readTime} read</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-12">About Embrosense</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Transform embroidery from a trial-and-error process into a structured engineering system. We help businesses stop losing money to poor decisions, inefficient operations, and lack of technical integration.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">The Problem We Solve</h2>
            <ul className="text-gray-600 leading-relaxed space-y-3">
              <li>• Companies making costly product decisions without a framework</li>
              <li>• Machines sitting idle due to inefficient workflows</li>
              <li>• Teams disconnected from modern tools and systematic approaches</li>
              <li>• Inability to scale without losing quality</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
            <p className="text-gray-600 leading-relaxed">
              We combine industry expertise, systematic thinking, and practical implementation. Through education, system design, and real-world consulting, we help embroidery businesses achieve higher efficiency, better quality, and sustainable profitability.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Why Embrosense</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <div>
                <h3 className="font-semibold mb-2">Industry Expertise</h3>
                <p className="text-gray-600">We understand embroidery from the inside out, not from theory.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Proven Results</h3>
                <p className="text-gray-600">Real companies achieving measurable improvements in efficiency and profitability.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Practical Systems</h3>
                <p className="text-gray-600">Everything grounded in real-world application, implementable immediately.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Long-term Partnership</h3>
                <p className="text-gray-600">We're invested in your sustainable success for the long haul.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const LearningPage = () => (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Learning Hub</h1>
        <p className="text-lg text-gray-600 mb-12">Courses, live workshops, and resources to build engineering expertise</p>

        <div className="mb-8">
          <div className="flex gap-4 mb-8 flex-wrap">
            {['All', 'Courses', 'Workshops', 'Resources'].map(filter => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-2 text-sm font-medium transition ${
                  selectedFilter === filter ? 'bg-gray-900 text-white' : 'border border-gray-300 hover:border-gray-900'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map(course => (
            <div key={course.id} className="border border-gray-200 p-6 hover:shadow-lg transition">
              <span className="text-xs font-mono text-blue-600 uppercase">{course.type}</span>
              <h3 className="text-xl font-semibold my-4">{course.title}</h3>
              
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                  </div>
                  <span className="text-sm text-gray-600">{course.rating}</span>
                </div>
                <span className="text-sm text-gray-500">{course.students} students</span>
              </div>

              {course.starts && <p className="text-sm text-blue-600 mb-4">Starts {course.starts}</p>}

              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">${course.price}</span>
                <button className="px-6 py-2 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
                  Enroll
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const BlogPage = () => (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Blog & Daily Topics</h1>
        <p className="text-lg text-gray-600 mb-12">Daily insights on embroidery engineering, operations, and business</p>

        <div className="mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
            />
          </div>
        </div>

        <div className="space-y-6">
          {blogPosts.map(post => (
            <div key={post.id} className="pb-6 border-b border-gray-200 hover:bg-gray-50 p-4 -m-4 transition cursor-pointer">
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-mono text-blue-600 uppercase">{post.category}</span>
                <div className="text-right">
                  <span className="text-xs text-gray-500 block">{post.date}</span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold">{post.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ConsultingPage = () => (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Consulting Services</h1>
        <p className="text-lg text-gray-600 mb-12">Custom strategy and implementation for your embroidery business</p>

        <div className="space-y-12">
          <div className="border-b border-gray-200 pb-12">
            <h2 className="text-3xl font-bold mb-4">Strategic Audit</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We audit your current operations, identify inefficiencies, and build a custom roadmap for transformation. Deep dive into your production environment, workflows, and organizational structure.
            </p>
            <button className="px-6 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition">
              Book Audit Consultation
            </button>
          </div>

          <div className="border-b border-gray-200 pb-12">
            <h2 className="text-3xl font-bold mb-4">Implementation Support</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We work with your team to implement systems, train staff, and ensure successful adoption. Ongoing support ensures you get lasting results.
            </p>
            <button className="px-6 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition">
              Learn About Implementation
            </button>
          </div>

          <div className="pb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Let's talk about your specific challenges and how we can help. Schedule a free consultation.
            </p>
            <button onClick={() => setCurrentPage('contact')} className="px-6 py-3 border border-gray-900 text-gray-900 text-sm font-medium hover:bg-gray-50 transition">
              Schedule Consultation →
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ReviewsPage = () => (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Product Reviews</h1>
        <p className="text-lg text-gray-600 mb-12">Honest, technical reviews of embroidery machines, software, materials, and supplies</p>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map(review => (
            <div key={review.id} className="border border-gray-200 p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{review.product}</h3>
                  <span className="text-xs text-gray-500">{review.type}</span>
                </div>
                <span className="text-sm font-semibold">{review.price}</span>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(Math.floor(review.rating))].map((_, i) => <span key={i}>★</span>)}
                </div>
                <span className="text-sm font-medium">{review.rating}/5</span>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-green-600">✓ Pros:</span>
                  <p className="text-gray-600">{review.pros}</p>
                </div>
                <div>
                  <span className="font-semibold text-red-600">✗ Cons:</span>
                  <p className="text-gray-600">{review.cons}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ShopPage = () => (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Shop</h1>
        <p className="text-lg text-gray-600 mb-12">Digital products, templates, supplies, and guides</p>

        <div className="mb-8">
          <div className="flex gap-4 flex-wrap">
            {['All', 'Digital', 'Physical', 'Templates', 'Guides'].map(filter => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-2 text-sm font-medium transition ${
                  selectedFilter === filter ? 'bg-gray-900 text-white' : 'border border-gray-300 hover:border-gray-900'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="border border-gray-200 p-6 hover:shadow-lg transition">
              <span className="text-xs font-mono text-blue-600 uppercase">{product.category}</span>
              <h3 className="text-lg font-semibold my-4">{product.name}</h3>
              
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">${product.price}</span>
                <button 
                  onClick={() => setCartCount(cartCount + 1)}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ResourcesPage = () => (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Resources & Downloads</h1>
        <p className="text-lg text-gray-600 mb-12">Templates, guides, case studies, videos, and tools to accelerate your growth</p>

        <div className="space-y-4">
          {resources.map(resource => (
            <div key={resource.id} className="border border-gray-200 p-6 hover:bg-gray-50 transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-mono text-blue-600 uppercase">{resource.type}</span>
                  <h3 className="text-lg font-semibold mt-2">{resource.title}</h3>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
              <span className="text-xs text-gray-500">{resource.downloads.toLocaleString()} downloads</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-600 mb-16">Let's talk about how we can help your embroidery business</p>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-8">Contact Us</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea rows="5" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900"></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition">
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8">Other Ways to Connect</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold mb-2">Book a Consultation</h3>
                <p className="text-gray-600 mb-4">Schedule a free consultation to discuss your specific challenges.</p>
                <a href="mailto:hello@embrosense.com" className="text-blue-600 font-medium">hello@embrosense.com</a>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Sales Inquiry</h3>
                <p className="text-gray-600 mb-4">Questions about products, courses, or services?</p>
                <a href="mailto:sales@embrosense.com" className="text-blue-600 font-medium">sales@embrosense.com</a>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-600 mb-4">Call us during business hours</p>
                <a href="tel:+1234567890" className="text-blue-600 font-medium">+1 (234) 567-890</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const pageMap = {
    home: HomePage,
    about: AboutPage,
    learning: LearningPage,
    blog: BlogPage,
    consulting: ConsultingPage,
    reviews: ReviewsPage,
    shop: ShopPage,
    resources: ResourcesPage,
    contact: ContactPage,
  };

  const CurrentPage = pageMap[currentPage] || HomePage;

  return (
    <div className="bg-white text-gray-900 font-sans">
      <Navigation />
      <CurrentPage />

      <footer className="bg-gray-900 text-gray-400 px-6 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-white font-bold mb-4">Embrosense</h3>
              <p className="text-sm leading-relaxed">Embroidery with Sense — transforming the industry through engineering.</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Learning</h3>
              <ul className="text-sm space-y-2">
                <li><button onClick={() => setCurrentPage('learning')} className="hover:text-white">Courses</button></li>
                <li><button onClick={() => setCurrentPage('learning')} className="hover:text-white">Workshops</button></li>
                <li><button onClick={() => setCurrentPage('resources')} className="hover:text-white">Resources</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Products</h3>
              <ul className="text-sm space-y-2">
                <li><button onClick={() => setCurrentPage('shop')} className="hover:text-white">Shop</button></li>
                <li><button onClick={() => setCurrentPage('reviews')} className="hover:text-white">Reviews</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="text-sm space-y-2">
                <li><button onClick={() => setCurrentPage('about')} className="hover:text-white">About</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white">Contact</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2024 Embrosense. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}