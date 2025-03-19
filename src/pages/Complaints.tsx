
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lungs, AlertCircle, Calendar } from 'lucide-react';

const commonComplaints = [
  {
    id: "chronic-cough",
    title: "Chronic Cough",
    description: "A cough that persists for more than 8 weeks in adults or 4 weeks in children.",
    causes: ["Asthma", "Gastroesophageal reflux disease (GERD)", "Postnasal drip", "Chronic bronchitis", "ACE inhibitor medications", "Smoking", "Environmental irritants"],
    whenToSee: "When your cough persists for more than 8 weeks, is accompanied by blood, or causes severe discomfort."
  },
  {
    id: "shortness-of-breath",
    title: "Shortness of Breath (Dyspnea)",
    description: "Difficult or labored breathing, or the feeling of not getting enough air.",
    causes: ["Asthma", "COPD", "Heart failure", "Pneumonia", "Pulmonary embolism", "Anxiety", "Anemia", "Interstitial lung disease"],
    whenToSee: "When shortness of breath is sudden and severe, occurs at rest, or is accompanied by chest pain, fainting, or nausea."
  },
  {
    id: "chest-pain",
    title: "Chest Pain or Discomfort",
    description: "Any discomfort or pain in the chest area, which may be related to respiratory or cardiac issues.",
    causes: ["Pleurisy", "Pneumonia", "Pulmonary embolism", "Pneumothorax", "Costochondritis", "Muscle strain", "GERD"],
    whenToSee: "Immediately if chest pain is severe, sudden, or accompanied by shortness of breath, sweating, or nausea."
  },
  {
    id: "wheezing",
    title: "Wheezing",
    description: "A high-pitched whistling sound made while breathing, often associated with narrowed airways.",
    causes: ["Asthma", "COPD", "Bronchitis", "Pneumonia", "Allergic reactions", "Foreign body aspiration", "Gastroesophageal reflux"],
    whenToSee: "When wheezing is severe, persists despite treatment, or is accompanied by severe shortness of breath or bluish skin."
  },
  {
    id: "sleep-disturbances",
    title: "Sleep Disturbances",
    description: "Problems with quality sleep, including sleep apnea, insomnia, or excessive daytime sleepiness.",
    causes: ["Obstructive sleep apnea", "Central sleep apnea", "Insomnia", "Restless leg syndrome", "Narcolepsy", "Chronic lung diseases", "Allergies"],
    whenToSee: "When sleep problems affect your quality of life, cause excessive daytime drowsiness, or when others notice you stop breathing during sleep."
  },
  {
    id: "recurrent-respiratory-infections",
    title: "Recurrent Respiratory Infections",
    description: "Frequently occurring infections of the respiratory tract, including bronchitis, pneumonia, or sinusitis.",
    causes: ["Immunodeficiency disorders", "Chronic lung diseases", "Allergies", "Anatomical abnormalities", "Environmental factors", "Smoking"],
    whenToSee: "When you experience more than three respiratory infections per year, or infections that don't resolve with standard treatment."
  },
  {
    id: "allergic-reactions",
    title: "Allergic Reactions",
    description: "Immune responses to allergens that can affect the respiratory system, skin, or other body systems.",
    causes: ["Pollen", "Dust mites", "Pet dander", "Mold", "Food allergens", "Insect stings", "Medications"],
    whenToSee: "Immediately for severe reactions with swelling, breathing difficulty, or dizziness. For milder symptoms, when they interfere with daily activities."
  }
];

const Complaints = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Complaints Treated | Dr. Karan Singla</title>
        <meta name="description" content="Learn about the common respiratory complaints and symptoms treated by Dr. Karan Singla" />
      </Helmet>
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="section-container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <span className="chip mb-4">Symptoms & Conditions</span>
            <h1 className="section-title">Complaints We Treat</h1>
            <p className="section-subtitle">
              Dr. Karan Singla specializes in diagnosing and treating a wide range of respiratory 
              symptoms and sleep disorders. Learn about common complaints we address.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatedSection className="lg:col-span-2" animation="fade-in-up">
              <Accordion type="single" collapsible className="w-full">
                {commonComplaints.map((complaint) => (
                  <AccordionItem key={complaint.id} value={complaint.id}>
                    <AccordionTrigger className="text-lg font-medium">
                      {complaint.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <p>{complaint.description}</p>
                        
                        <div>
                          <h4 className="font-medium mb-2">Common Causes:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {complaint.causes.map((cause, index) => (
                              <li key={index}>{cause}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">When to see Dr. Singla:</h4>
                          <p>{complaint.whenToSee}</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>

            <AnimatedSection className="space-y-6" animation="fade-in">
              <Card className="bg-medical-light border-none">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Lungs className="h-10 w-10 text-primary" />
                    <h3 className="text-xl font-semibold">Get Expert Care</h3>
                  </div>
                  <p className="mb-6">
                    Don't wait if you're experiencing respiratory symptoms. Early diagnosis and 
                    treatment can prevent complications and improve outcomes.
                  </p>
                  <Button className="w-full">
                    <Calendar className="mr-2 h-4 w-4" /> Book Appointment
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <AlertCircle className="h-10 w-10 text-destructive" />
                    <h3 className="text-xl font-semibold">Medical Emergency?</h3>
                  </div>
                  <p className="text-sm">
                    If you're experiencing severe shortness of breath, chest pain, or any life-threatening 
                    symptoms, please call emergency services (102) or go to the nearest emergency department immediately.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Complaints;
