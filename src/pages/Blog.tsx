
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, Search, Tag, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Understanding Sleep Apnea: Symptoms, Causes, and Treatment Options",
    excerpt: "Sleep apnea is a common but often undiagnosed sleep disorder. Learn about the warning signs, health risks, and current treatment approaches.",
    image: "/placeholder.svg",
    category: "Sleep Disorders",
    date: "July 15, 2023",
    readTime: "8 min read",
    slug: "understanding-sleep-apnea"
  },
  {
    id: 2,
    title: "Asthma Management During Changing Seasons",
    excerpt: "Seasonal changes can trigger asthma symptoms. Discover strategies to maintain control of your asthma as the seasons transition.",
    image: "/placeholder.svg",
    category: "Asthma",
    date: "June 28, 2023",
    readTime: "6 min read",
    slug: "asthma-management-seasonal"
  },
  {
    id: 3,
    title: "The Connection Between COPD and Lung Cancer: What Patients Should Know",
    excerpt: "Both COPD and lung cancer share risk factors and can occur together. Learn about the relationship and importance of early detection.",
    image: "/placeholder.svg",
    category: "COPD",
    date: "May 12, 2023",
    readTime: "10 min read",
    slug: "copd-lung-cancer-connection"
  },
  {
    id: 4,
    title: "Latest Advances in Tuberculosis Treatment",
    excerpt: "New medications and treatment approaches are changing how tuberculosis is managed. Stay informed about the latest developments.",
    image: "/placeholder.svg",
    category: "Tuberculosis",
    date: "April 30, 2023",
    readTime: "7 min read",
    slug: "tuberculosis-treatment-advances"
  },
  {
    id: 5,
    title: "How to Interpret Your Pulmonary Function Test Results",
    excerpt: "Pulmonary function tests provide valuable information about your lung health. Learn how to understand what your results mean.",
    image: "/placeholder.svg",
    category: "Diagnostics",
    date: "March 22, 2023",
    readTime: "5 min read",
    slug: "understanding-pft-results"
  },
  {
    id: 6,
    title: "Breathing Exercises for Respiratory Health",
    excerpt: "Simple breathing exercises can improve respiratory function and reduce stress. Try these techniques at home to support your lung health.",
    image: "/placeholder.svg",
    category: "Wellness",
    date: "February 14, 2023",
    readTime: "4 min read",
    slug: "breathing-exercises"
  }
];

const categories = [
  "All Categories",
  "Asthma",
  "COPD",
  "Sleep Disorders",
  "Tuberculosis",
  "Diagnostics",
  "Wellness",
  "Research"
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Blog | Dr. Karan Singla</title>
        <meta name="description" content="Read the latest articles on respiratory health, sleep medicine, and wellness from Dr. Karan Singla" />
      </Helmet>
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="section-container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <span className="chip mb-4">Health Insights</span>
            <h1 className="section-title">Medical Blog</h1>
            <p className="section-subtitle">
              Stay informed with the latest articles on respiratory health, sleep medicine, and wellness tips
              from Dr. Karan Singla and guest contributors.
            </p>
          </AnimatedSection>

          <div className="flex flex-col md:flex-row justify-between gap-6 mb-10">
            <div className="w-full md:w-2/3 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="w-full md:w-1/3">
              <select 
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <AnimatedSection 
                  key={post.id} 
                  className="h-full" 
                  animation="fade-in-up"
                  delay={index * 100}
                >
                  <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="h-4 w-4 text-primary" />
                        <span className="text-xs font-medium text-primary">{post.category}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center text-xs text-muted-foreground gap-4">
                        <div className="flex items-center">
                          <CalendarDays className="h-3 w-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0 px-6 pb-6">
                      <Button variant="link" className="p-0 h-auto font-semibold text-primary">
                        Read More <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or category filter to find what you're looking for.
              </p>
            </div>
          )}

          <AnimatedSection className="text-center mt-10">
            <Button className="bg-primary hover:bg-primary/90">
              Load More Articles
            </Button>
          </AnimatedSection>

          <AnimatedSection className="mt-16">
            <div className="bg-medical-light p-8 rounded-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-semibold mb-4">
                  Subscribe to Our Newsletter
                </h2>
                <p className="mb-6">
                  Get the latest articles, health tips, and updates from Dr. Singla delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow"
                  />
                  <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
