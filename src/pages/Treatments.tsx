
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Stethoscope, Droplet, Brain, MoonStar, HeartPulse, Activity } from 'lucide-react';

const respiratoryTreatments = [
  {
    id: 1,
    title: "Asthma Management",
    description: "Personalized treatment plans to control asthma symptoms and improve quality of life.",
    icon: <Heart className="h-8 w-8 text-primary" />,
    details: "Our comprehensive asthma management includes identifying triggers, medication management, inhaler technique training, and pulmonary rehabilitation when needed."
  },
  {
    id: 2,
    title: "COPD Treatment",
    description: "Evidence-based approaches to manage Chronic Obstructive Pulmonary Disease and slow progression.",
    icon: <Stethoscope className="h-8 w-8 text-primary" />,
    details: "We offer pulmonary rehabilitation, medication optimization, oxygen therapy assessment, and smoking cessation support to improve breathing and quality of life for COPD patients."
  },
  {
    id: 3,
    title: "Sleep Disorder Management",
    description: "Diagnosis and treatment of sleep apnea, insomnia, and other sleep-related breathing disorders.",
    icon: <MoonStar className="h-8 w-8 text-primary" />,
    details: "After proper diagnosis through sleep studies, we provide CPAP therapy, lifestyle modifications, and specialized treatments for various sleep disorders."
  },
  {
    id: 4,
    title: "Tuberculosis Treatment",
    description: "Comprehensive management of TB infections following international protocols.",
    icon: <Droplet className="h-8 w-8 text-primary" />,
    details: "We provide medication regimens, monitoring for side effects, and follow-up testing to ensure complete eradication of tuberculosis infections."
  },
  {
    id: 5,
    title: "Interstitial Lung Disease Treatment",
    description: "Specialized care for various forms of pulmonary fibrosis and other interstitial lung conditions.",
    icon: <Heart className="h-8 w-8 text-primary" />,
    details: "Treatment may include anti-fibrotic medications, immunosuppressants, oxygen therapy, pulmonary rehabilitation, and in some cases, evaluation for lung transplantation."
  }
];

const generalTreatments = [
  {
    id: 1,
    title: "Diabetes Management",
    description: "Comprehensive care for managing blood glucose levels and preventing complications.",
    icon: <Droplet className="h-8 w-8 text-primary" />,
    details: "Our diabetes management includes medication optimization, nutrition counseling, blood glucose monitoring education, and regular screenings for complications."
  },
  {
    id: 2,
    title: "Hypertension Treatment",
    description: "Evidence-based approaches to control blood pressure and reduce cardiovascular risk.",
    icon: <HeartPulse className="h-8 w-8 text-primary" />,
    details: "We provide personalized treatment plans that may include medication, lifestyle modifications, regular monitoring, and strategies to improve compliance."
  },
  {
    id: 3,
    title: "Preventive Cardiology",
    description: "Proactive measures to prevent cardiovascular disease in high-risk individuals.",
    icon: <Activity className="h-8 w-8 text-primary" />,
    details: "Our preventive approach includes risk assessment, lifestyle optimization, management of modifiable risk factors, and appropriate diagnostic testing."
  },
  {
    id: 4,
    title: "Cognitive Health",
    description: "Assessment and management of cognitive function and neurological symptoms.",
    icon: <Brain className="h-8 w-8 text-primary" />,
    details: "We offer cognitive assessments, treatment for memory disorders, and coordination with specialists for comprehensive neurological care."
  }
];

const Treatments = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Treatments | Dr. Karan Singla</title>
        <meta name="description" content="Comprehensive treatments for respiratory and general health conditions by Dr. Karan Singla" />
      </Helmet>
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="section-container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <span className="chip mb-4">Comprehensive Care</span>
            <h1 className="section-title">Medical Treatments</h1>
            <p className="section-subtitle">
              Dr. Karan Singla provides evidence-based treatments for a wide range of respiratory 
              and general health conditions, tailored to each patient's unique needs.
            </p>
          </AnimatedSection>

          <Tabs defaultValue="respiratory" className="max-w-5xl mx-auto">
            <AnimatedSection className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="respiratory" className="px-8">Respiratory Conditions</TabsTrigger>
                <TabsTrigger value="general" className="px-8">General Health</TabsTrigger>
              </TabsList>
            </AnimatedSection>
            
            <TabsContent value="respiratory">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {respiratoryTreatments.map((treatment, index) => (
                  <AnimatedSection 
                    key={treatment.id} 
                    className="h-full" 
                    animation="fade-in-up"
                    delay={index * 100}
                  >
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <CardHeader className="flex flex-row items-center gap-4">
                        {treatment.icon}
                        <CardTitle>{treatment.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-foreground/80 mb-4">
                          {treatment.description}
                        </CardDescription>
                        <p className="text-sm text-foreground">
                          {treatment.details}
                        </p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="general">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {generalTreatments.map((treatment, index) => (
                  <AnimatedSection 
                    key={treatment.id} 
                    className="h-full" 
                    animation="fade-in-up"
                    delay={index * 100}
                  >
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <CardHeader className="flex flex-row items-center gap-4">
                        {treatment.icon}
                        <CardTitle>{treatment.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-foreground/80 mb-4">
                          {treatment.description}
                        </CardDescription>
                        <p className="text-sm text-foreground">
                          {treatment.details}
                        </p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <AnimatedSection className="mt-16 text-center">
            <div className="bg-medical-light p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">
                Need Personalized Treatment?
              </h2>
              <p className="mb-6">
                Schedule a consultation to discuss your specific health concerns and treatment options.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Book a Consultation
              </a>
            </div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Treatments;
