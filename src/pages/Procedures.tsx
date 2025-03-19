
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, Lungs, Microscope, Flask, FileHeart, PlusCircle, Syringe } from 'lucide-react';

const proceduresData = [
  {
    id: 1,
    title: "Allergy Testing & Immunotherapy",
    description: "Comprehensive testing to identify specific allergens causing reactions. Followed by personalized immunotherapy to build tolerance and reduce symptoms.",
    icon: <PlusCircle className="h-8 w-8 text-primary" />,
    details: "Our advanced allergy testing can identify reactions to common environmental allergens, food allergies, and medication sensitivities. Immunotherapy is then customized to gradually desensitize your body to specific allergens."
  },
  {
    id: 2,
    title: "Bronchoscopy",
    description: "A minimally invasive procedure that examines the airways using a specialized tube with a camera (bronchoscope).",
    icon: <Stethoscope className="h-8 w-8 text-primary" />,
    details: "Bronchoscopy allows Dr. Singla to examine your airways, obtain tissue samples, remove foreign objects, and perform therapeutic procedures. It's performed under mild sedation to ensure comfort."
  },
  {
    id: 3,
    title: "Thoracoscopy",
    description: "A procedure that uses a small camera (thoracoscope) to examine the pleural space and lungs for diagnosis and treatment.",
    icon: <Lungs className="h-8 w-8 text-primary" />,
    details: "Thoracoscopy enables visualization of the pleural space, allowing for biopsies, fluid drainage, and other therapeutic interventions. This minimally invasive approach reduces recovery time compared to open chest procedures."
  },
  {
    id: 4,
    title: "Pulmonary Function Testing",
    description: "Comprehensive tests that measure how well your lungs work by assessing airflow, lung volumes, and gas exchange.",
    icon: <FileHeart className="h-8 w-8 text-primary" />,
    details: "Our state-of-the-art pulmonary function laboratory provides complete assessment of lung function, including spirometry, lung volumes, diffusion capacity, and exercise testing. These tests help diagnose and monitor respiratory conditions."
  },
  {
    id: 5,
    title: "Intercostal Drainage Tube Insertion",
    description: "A procedure to drain fluid or air from the pleural space using a tube inserted between the ribs.",
    icon: <Syringe className="h-8 w-8 text-primary" />,
    details: "This procedure treats pneumothorax (collapsed lung) or pleural effusion by inserting a tube between the ribs to drain air or fluid. Dr. Singla ensures appropriate pain management and monitoring throughout the process."
  },
  {
    id: 6,
    title: "Lung Biopsy",
    description: "Collection of lung tissue samples for microscopic examination to diagnose lung diseases.",
    icon: <Microscope className="h-8 w-8 text-primary" />,
    details: "Through various techniques including bronchoscopic, CT-guided, or surgical approaches, we obtain tissue samples to diagnose conditions like cancer, infections, or interstitial lung diseases."
  },
  {
    id: 7,
    title: "FENO (Breath Test)",
    description: "A non-invasive test measuring nitric oxide in exhaled breath to assess airway inflammation.",
    icon: <Flask className="h-8 w-8 text-primary" />,
    details: "This simple breath test helps diagnose and monitor conditions like asthma by measuring nitric oxide levels, which indicate inflammation in the airways. It's quick, painless, and provides immediate results."
  }
];

const Procedures = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Procedures | Dr. Karan Singla</title>
        <meta name="description" content="Learn about the specialized pulmonary and respiratory procedures offered by Dr. Karan Singla" />
      </Helmet>
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="section-container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <span className="chip mb-4">Expert Care</span>
            <h1 className="section-title">Our Specialized Procedures</h1>
            <p className="section-subtitle">
              Dr. Karan Singla offers a range of specialized pulmonary diagnostic and therapeutic procedures, 
              all performed with the highest standard of care and expertise.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {proceduresData.map((procedure, index) => (
              <AnimatedSection 
                key={procedure.id} 
                className="h-full" 
                delay={index * 100}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {procedure.icon}
                    <div>
                      <CardTitle>{procedure.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/80 min-h-[80px]">
                      {procedure.description}
                    </CardDescription>
                    <p className="mt-4 text-sm text-foreground">
                      {procedure.details}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-16 text-center">
            <div className="bg-medical-light p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">
                Have Questions About Our Procedures?
              </h2>
              <p className="mb-6">
                Contact us to learn more about any procedure or to schedule a consultation.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Contact Dr. Singla
              </a>
            </div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Procedures;
