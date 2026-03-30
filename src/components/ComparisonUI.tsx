
import { Info } from 'lucide-react';

interface CardData {
  outcome: "APPROVED" | "REJECTED";
  probabilityScore: number;
  requiredThreshold: number;
  reasonText?: string;
  deficitScore?: number;
  contextApplied?: string[];
  explanationText?: string;
}

interface CardProps {
  type: "traditional" | "equidecide";
  data: CardData;
}

function Card({ type, data }: CardProps) {
  const isTraditional = type === 'traditional';
  const isApproved = data.outcome === 'APPROVED';

  const containerClasses = isTraditional
    ? "doodle-box bg-white translate-y-1"
    : "doodle-box bg-[#f0fdf4] -translate-y-1 relative overflow-hidden";
  
  const stampColor = isApproved ? "text-[#16a34a] border-[#16a34a]" : "text-[#dc2626] border-[#dc2626]";
  const stampAngle = isApproved ? "rotate-[-5deg]" : "rotate-[5deg]";

  return (
    <div className={`p-6 flex flex-col h-full bg-cover bg-center ${containerClasses}`} style={{ backgroundImage: isTraditional ? 'none' : 'radial-gradient(circle, #86efac 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      <div className="flex justify-between items-start mb-4 relative z-10 bg-white/80 p-2 rounded-lg doodle-box-sm">
        <div>
          <h3 className="text-xl font-black text-slate-800 flex items-center gap-2">
            {isTraditional ? "🤖 Traditional Model" : "✨ EquiDecide Model"}
            {!isTraditional && <div className="ml-2 px-2 py-0.5 doodle-box-sm bg-[#fde047] text-slate-800 text-xs font-bold tracking-widest translate-y-0.5">CONTEXT AWARE</div>}
          </h3>
          <p className="text-slate-600 font-semibold mt-1 text-sm">{isTraditional ? "Baseline strict threshold filtering" : "Contextualized evaluation matrix"}</p>
        </div>
      </div>

      <div className="mb-6 pb-6 border-b-2 border-slate-900 border-dashed relative z-10">
        <div className={`absolute right-0 top-0 text-xl font-black uppercase stamp ${stampColor} ${stampAngle} shadow-[1px_1px_0px_#000] bg-white`}>
          {data.outcome}
        </div>
        
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-[#f8fafc] p-3 doodle-box-sm">
            <div className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Score</div>
            <div className="text-3xl font-black text-slate-800">{(data.probabilityScore * 100).toFixed(1)}%</div>
          </div>
          <div className="bg-[#f8fafc] p-3 doodle-box-sm">
            <div className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Required Threshold</div>
            <div className="text-3xl font-black text-slate-800 break-words">{(data.requiredThreshold * 100).toFixed(1)}%</div>
          </div>
        </div>
      </div>

      <div className="flex-grow space-y-4 relative z-10">
        {isTraditional && data.reasonText && (
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 px-1 border-b border-slate-300 inline-block">Decision Basis</h4>
            <p className="text-slate-700 font-semibold leading-relaxed text-sm bg-white p-4 doodle-box-sm">
              "{data.reasonText}"
            </p>
          </div>
        )}

        {!isTraditional && data.contextApplied && data.explanationText && (
          <>
            <div className="bg-white p-4 doodle-box-sm">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 px-1 border-b border-slate-300 inline-block">Context Applied</h4>
              <ul className="space-y-1 mb-4 font-semibold text-slate-700 text-sm">
                {data.contextApplied.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#16a34a] mt-0.5">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto bg-white p-4 doodle-box-sm border-l-4 border-[#0ea5e9]">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[#0ea5e9] shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-slate-800 text-sm mb-1">Explainability Module</h5>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    {data.explanationText}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export interface ComparisonUIProps {
  isLoading: boolean;
  hasEvaluated: boolean;
  applicantName: string;
  traditionalData: CardData | null;
  equidecideData: CardData | null;
}

export function ComparisonUI({ isLoading, hasEvaluated, applicantName, traditionalData, equidecideData }: ComparisonUIProps) {
  if (!hasEvaluated && !isLoading) return null;

  return (
    <div className={`transition-all duration-700 ease-in-out h-full flex flex-col ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
      <div className="mb-6 bg-white px-4 py-2 doodle-box-sm inline-block self-start border-l-4 border-[#f43f5e]">
        <h2 className="text-2xl font-black text-slate-800">Results for: <span className="text-[#0ea5e9]">{applicantName}</span></h2>
        <p className="text-slate-500 font-semibold mt-1 text-sm">Validating context-awareness impact on baseline decisions.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 flex-grow">
        {isLoading ? (
          <>
            <div className="doodle-box bg-slate-50 p-6 h-[500px] animate-pulse">
              <div className="h-6 bg-slate-200 rounded w-1/2 mb-2 doodle-box-sm"></div>
              <div className="h-3 bg-slate-200 rounded w-3/4 mb-12"></div>
              <div className="h-8 bg-slate-300 rounded w-1/3 mb-6 doodle-box-sm"></div>
              <div className="flex gap-4 mb-12">
                <div className="h-16 bg-white doodle-box-sm w-1/2"></div>
                <div className="h-16 bg-white doodle-box-sm w-1/2"></div>
              </div>
              <div className="h-32 bg-slate-200 doodle-box-sm w-full"></div>
            </div>
            <div className="doodle-box bg-[#f0fdf4]/60 p-6 h-[500px] animate-pulse">
              <div className="h-6 bg-green-200 rounded w-1/2 mb-2 doodle-box-sm"></div>
              <div className="h-3 bg-green-100 rounded w-2/3 mb-12"></div>
              <div className="h-8 bg-green-200 rounded w-1/3 mb-6 doodle-box-sm"></div>
              <div className="flex gap-4 mb-12">
                <div className="h-16 bg-white doodle-box-sm w-1/2"></div>
                <div className="h-16 bg-white doodle-box-sm w-1/2"></div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="h-4 bg-white doodle-box-sm w-full"></div>
                <div className="h-4 bg-white doodle-box-sm w-5/6"></div>
                <div className="h-4 bg-white doodle-box-sm w-4/6"></div>
              </div>
            </div>
          </>
        ) : (
          <>
            {traditionalData && <Card type="traditional" data={traditionalData} />}
            {equidecideData && <Card type="equidecide" data={equidecideData} />}
          </>
        )}
      </div>
    </div>
  );
}
