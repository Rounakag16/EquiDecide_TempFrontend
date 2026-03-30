import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ViewHero } from './components/ViewHero';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { IntakeForm } from './components/IntakeForm';
import { ComparisonUI } from './components/ComparisonUI';
import { MetricsDashboard } from './components/MetricsDashboard';
import { Doodles } from './components/Doodles';
import { IntroAnimation } from './components/IntroAnimation';

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

function EvaluationFlow() {
  const [hasEvaluated, setHasEvaluated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEvaluate = () => {
    setIsLoading(true);
    setHasEvaluated(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-transparent flex flex-col min-h-screen text-[#0f172a] font-sans pt-24">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-grow transition-all duration-700">
        
        {/* Navigation Control */}
        <div className="mb-6 flex justify-start">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-white text-slate-800 font-bold doodle-box-sm px-4 py-2 hover:bg-[#f8fafc] transition-all no-underline"
            >
                <span className="text-xl">🔙</span> Back Homeward
            </Link>
        </div>

        {/* Dynamic Layout for the APP state */}
        <div className={`flex gap-8 transition-all duration-700 ease-in-out split-screen-container ${hasEvaluated ? 'flex-row' : 'flex-col items-center'}`}>
          
          {/* Form Column */}
          <div className={`transition-all duration-700 ease-in-out flex-shrink-0 relative ${hasEvaluated ? 'w-full lg:w-[35%] opacity-90' : 'w-full lg:w-[60%] mx-auto'}`}>
            <IntakeForm 
              onEvaluate={handleEvaluate} 
              isLoading={isLoading} 
              compactMode={hasEvaluated} 
            />
          </div>

          {/* Results Column (Mounts after evaluation begins) */}
          <div className={`transition-all duration-700 ease-in-out ${hasEvaluated ? 'w-full lg:w-[65%] opacity-100 translate-x-0' : 'w-0 opacity-0 translate-x-12 overflow-hidden'}`}>
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
        <div className={`mt-8 transition-all duration-1000 delay-300 ease-bouncy pb-12 ${!isLoading && hasEvaluated ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-24 scale-90 h-0 overflow-hidden'}`}>
          <MetricsDashboard score={MOCK_METRICS.equityIndex} historicalRate={MOCK_METRICS.historicalRate} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      <Doodles />
      <Routes>
        <Route path="/" element={
          <div className="bg-transparent flex flex-col min-h-screen text-[#0f172a] font-sans">
            <Navbar />
            <div className="flex-grow">
              <ViewHero />
            </div>
            <Footer />
          </div>
        } />
        <Route path="/form" element={<EvaluationFlow />} />
      </Routes>
    </>
  );
}

export default App;
