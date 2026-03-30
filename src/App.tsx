import { useState } from 'react';
import { ViewHero } from './components/ViewHero';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { IntakeForm } from './components/IntakeForm';
import { ComparisonUI } from './components/ComparisonUI';
import { MetricsDashboard } from './components/MetricsDashboard';

type AppState = "LANDING" | "APP";

const MOCK_TRADITIONAL = {
  outcome: "REJECTED" as const,
  probabilityScore: 0.45,
  requiredThreshold: 0.60,
  reasonText: "Family income meets criteria, but academic score is below the strict 85% regional cutoff."
};

const MOCK_EQUIDECIDE = {
  outcome: "APPROVED" as const,
  probabilityScore: 0.72,
  requiredThreshold: 0.50,
  deficitScore: 15,
  contextApplied: [
    "Tier-3 Rural District",
    "First-generation applicant",
    ">30km from nearest institution"
  ],
  explanationText: "Baseline threshold was dynamically lowered by 10% due to an Opportunity Deficit Score of 15. The applicant's academic performance of 82.5% demonstrates high resilience when accounting for a lack of reliable internet and first-generation status."
};

const MOCK_METRICS = {
  equityIndex: 84,
  historicalRate: 0.12
};

function App() {
  const [appState, setAppState] = useState<AppState>("LANDING");
  const [hasEvaluated, setHasEvaluated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLaunch = () => {
    setAppState("APP");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEvaluate = () => {
    setIsLoading(true);
    setHasEvaluated(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  if (appState === "LANDING") {
    return (
      <div className="bg-black min-h-screen text-zinc-50 font-sans">
        <Navbar />
        <ViewHero onLaunch={handleLaunch} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-zinc-50 font-sans pb-24 pt-20">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full transition-all duration-700">
        
        {/* Dynamic Layout for the APP state */}
        <div className={`flex gap-8 transition-all duration-700 ease-in-out split-screen-container ${hasEvaluated ? 'flex-row' : 'flex-col items-center'}`}>
          
          {/* Form Column */}
          <div className={`transition-all duration-700 ease-in-out flex-shrink-0 relative ${hasEvaluated ? 'w-full lg:w-[30%] opacity-90' : 'w-full lg:w-[60%] mx-auto'}`}>
            <IntakeForm 
              onEvaluate={handleEvaluate} 
              isLoading={isLoading} 
              compactMode={hasEvaluated} 
            />
          </div>

          {/* Results Column (Mounts after evaluation begins) */}
          <div className={`transition-all duration-700 ease-in-out ${hasEvaluated ? 'w-full lg:w-[70%] opacity-100 translate-x-0' : 'w-0 opacity-0 translate-x-8 overflow-hidden'}`}>
            <ComparisonUI 
              isLoading={isLoading}
              hasEvaluated={hasEvaluated}
              applicantName="Ravi Kumar"
              traditionalData={MOCK_TRADITIONAL}
              equidecideData={MOCK_EQUIDECIDE}
            />
          </div>
        </div>

        {/* Dashoard (Bottom Row) */}
        <div className={`mt-8 transition-all duration-1000 delay-300 ease-out transform ${!isLoading && hasEvaluated ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95 h-0 overflow-hidden'}`}>
          <MetricsDashboard score={MOCK_METRICS.equityIndex} historicalRate={MOCK_METRICS.historicalRate} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
