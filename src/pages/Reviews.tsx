
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, ThumbsUp, MessageSquare, Video } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rajiv Sharma",
    image: null,
    initials: "RS",
    role: "Asthma Patient",
    content: "Dr. Singla's approach to managing my asthma has been life-changing. For the first time in years, I can exercise without fear of an attack. His thorough explanation of my condition and treatment options gave me confidence in the care plan.",
    rating: 5,
    source: "Google",
    date: "March 15, 2023"
  },
  {
    id: 2,
    name: "Priya Patel",
    image: null,
    initials: "PP",
    role: "Sleep Apnea Patient",
    content: "After struggling with fatigue for years, Dr. Singla diagnosed my sleep apnea and developed a treatment plan that worked for me. His follow-up care has been exceptional, and he's always available to answer questions. I'm sleeping better than I have in decades!",
    rating: 5,
    source: "Google",
    date: "January 7, 2023"
  },
  {
    id: 3,
    name: "Anil Kumar",
    image: null,
    initials: "AK",
    role: "COPD Patient",
    content: "Managing COPD has been a challenge, but Dr. Singla's comprehensive approach has significantly improved my quality of life. He takes time to listen and adjust my treatment as needed. His staff is also incredibly supportive and efficient.",
    rating: 5,
    source: "Google",
    date: "February 22, 2023"
  },
  {
    id: 4,
    name: "Sunita Kaur",
    image: null,
    initials: "SK",
    role: "Bronchitis Patient",
    content: "Dr. Singla treated my recurring bronchitis with such care and expertise. He didn't just prescribe medication but took time to educate me on preventing future episodes. His holistic approach to respiratory health is refreshing.",
    rating: 4,
    source: "Facebook",
    date: "December 10, 2022"
  },
  {
    id: 5,
    name: "Vikram Singh",
    image: null,
    initials: "VS",
    role: "Pulmonary Function Test Patient",
    content: "The pulmonary function test conducted by Dr. Singla was thorough and his explanation of the results was clear and understandable. He answered all my questions patiently and outlined a treatment plan that addressed all my concerns.",
    rating: 5,
    source: "Google",
    date: "April 5, 2023"
  },
  {
    id: 6,
    name: "Meera Joshi",
    image: null,
    initials: "MJ",
    role: "Allergy Patient",
    content: "Dr. Singla's allergy testing and treatment plan have made a tremendous difference in managing my seasonal allergies. His attention to detail and personalized care approach set him apart from other specialists I've seen.",
    rating: 5,
    source: "Google",
    date: "May 18, 2023"
  }
];

const videoTestimonials = [
  {
    id: 1,
    name: "Harpreet Kaur",
    thumbnail: "/placeholder.svg",
    title: "My Journey with Asthma Treatment",
    duration: "2:45",
    date: "June 12, 2023"
  },
  {
    id: 2,
    name: "Manish Verma",
    thumbnail: "/placeholder.svg",
    title: "Sleep Apnea Success Story",
    duration: "3:18",
    date: "July 24, 2023"
  },
  {
    id: 3,
    name: "Neha Sharma",
    thumbnail: "/placeholder.svg",
    title: "How Dr. Singla Helped My Chronic Cough",
    duration: "4:02",
    date: "May 30, 2023"
  }
];

const Reviews = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredTestimonials = filter === "all" 
    ? testimonials 
    : testimonials.filter(t => t.source.toLowerCase() === filter);

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Patient Reviews | Dr. Karan Singla</title>
        <meta name="description" content="Read testimonials and watch video reviews from patients of Dr. Karan Singla" />
      </Helmet>
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="section-container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <span className="chip mb-4">Testimonials</span>
            <h1 className="section-title">Patient Reviews</h1>
            <p className="section-subtitle">
              Hear from our patients about their experiences and treatment outcomes with Dr. Karan Singla.
              These testimonials reflect our commitment to excellent patient care.
            </p>
          </AnimatedSection>

          <Tabs defaultValue="written" className="w-full">
            <AnimatedSection className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="written" className="px-8">
                  <MessageSquare className="h-4 w-4 mr-2" /> Written Reviews
                </TabsTrigger>
                <TabsTrigger value="video" className="px-8">
                  <Video className="h-4 w-4 mr-2" /> Video Testimonials
                </TabsTrigger>
              </TabsList>
            </AnimatedSection>
            
            <TabsContent value="written">
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center rounded-md border border-input bg-transparent p-1">
                  <button 
                    onClick={() => setFilter("all")}
                    className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-sm ${filter === "all" ? "bg-primary text-white" : "hover:bg-secondary"}`}
                  >
                    All Reviews
                  </button>
                  <button 
                    onClick={() => setFilter("google")}
                    className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-sm ${filter === "google" ? "bg-primary text-white" : "hover:bg-secondary"}`}
                  >
                    Google
                  </button>
                  <button 
                    onClick={() => setFilter("facebook")}
                    className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-sm ${filter === "facebook" ? "bg-primary text-white" : "hover:bg-secondary"}`}
                  >
                    Facebook
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTestimonials.map((testimonial, index) => (
                  <AnimatedSection 
                    key={testimonial.id} 
                    className="h-full" 
                    animation="fade-in-up"
                    delay={index * 100}
                  >
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            {testimonial.image && <AvatarImage src={testimonial.image} alt={testimonial.name} />}
                            <AvatarFallback className="bg-primary/10 text-primary">
                              {testimonial.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{testimonial.name}</h3>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center mt-4 mb-2">
                          {renderStars(testimonial.rating)}
                          <span className="ml-2 text-sm text-muted-foreground">
                            {testimonial.rating}/5
                          </span>
                        </div>
                        
                        <p className="my-4 text-sm">"{testimonial.content}"</p>
                        
                        <div className="flex items-center justify-between mt-4 pt-4 border-t text-sm text-muted-foreground">
                          <span>via {testimonial.source}</span>
                          <span>{testimonial.date}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="video">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoTestimonials.map((video, index) => (
                  <AnimatedSection 
                    key={video.id} 
                    animation="fade-in-up"
                    delay={index * 100}
                  >
                    <div className="rounded-lg overflow-hidden border bg-card shadow-sm">
                      <div className="relative">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title} 
                          className="w-full aspect-video object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="h-16 w-16 rounded-full bg-white/80 flex items-center justify-center">
                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-primary border-b-[10px] border-b-transparent ml-1"></div>
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium">{video.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">By {video.name}</p>
                        <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
                          <span>{video.date}</span>
                          <div className="flex items-center">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            <span>Helpful</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <AnimatedSection className="mt-16 text-center">
            <div className="bg-medical-light p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">
                Share Your Experience
              </h2>
              <p className="mb-6">
                We value your feedback. If you've been a patient of Dr. Singla, please consider sharing your experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Write a Review
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 hover:bg-accent transition-colors"
                >
                  Record a Video Testimonial
                </a>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;
