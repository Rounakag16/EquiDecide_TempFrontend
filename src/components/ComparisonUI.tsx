
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';

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
    ? "border border-zinc-800 bg-[#09090b]/80 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"
    : "border border-lime-400/40 bg-[#09090b] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-lime-900/20 via-[#09090b] to-[#09090b] relative overflow-hidden shadow-[0_0_30px_rgba(163,230,53,0.15)]";
  
  const outcomeTextClass = isApproved ? "text-lime-400 drop-shadow-[0_0_8px_rgba(163,230,53,0.8)]" : "text-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]";
  const outcomeIcon = isApproved ? <CheckCircle className={`w-8 h-8 ${outcomeTextClass}`} /> : <AlertTriangle className={`w-8 h-8 ${outcomeTextClass}`} />;

  return (
    <div className={`p-6 rounded-2xl flex flex-col h-full transition-all duration-300 ${containerClasses}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
            {isTraditional ? "Traditional Model" : "EquiDecide Model"}
            {!isTraditional && <div className="ml-2 px-2 py-0.5 rounded text-xs font-black tracking-widest bg-lime-400/10 border border-lime-400/50 text-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.2)]">CONTEXT AWARE</div>}
          </h3>
          <p className="text-zinc-500 text-sm mt-1">{isTraditional ? "Baseline strict threshold filtering" : "Contextualized evaluation matrix"}</p>
        </div>
      </div>

      <div className="mb-6 pb-6 border-b border-zinc-800/80">
        <div className="flex items-center gap-3 mb-2">
          {outcomeIcon}
          <div className={`${outcomeTextClass} font-black text-3xl tracking-widest uppercase`}>
            {data.outcome}
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="bg-[#121214] p-3 rounded-xl border border-zinc-800/80 shadow-inner">
            <div className="text-xs text-zinc-600 uppercase font-black tracking-widest mb-1">Score</div>
            <div className="text-2xl font-mono text-zinc-200">{(data.probabilityScore * 100).toFixed(1)}%</div>
          </div>
          <div className="bg-[#121214] p-3 rounded-xl border border-zinc-800/80 shadow-inner">
            <div className="text-xs text-zinc-600 uppercase font-black tracking-widest mb-1">Required</div>
            <div className="text-2xl font-mono text-zinc-200 break-words">{(data.requiredThreshold * 100).toFixed(1)}%</div>
          </div>
        </div>
      </div>

      <div className="flex-grow space-y-4">
        {isTraditional && data.reasonText && (
          <div>
            <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Decision Basis</h4>
            <p className="text-zinc-400 leading-relaxed text-sm bg-[#121214]/50 p-4 rounded-xl border border-zinc-800/50">
              {data.reasonText}
            </p>
          </div>
        )}

        {!isTraditional && data.contextApplied && data.explanationText && (
          <>
            <div>
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Context Applied</h4>
              <ul className="space-y-2 mb-4">
                {data.contextApplied.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-zinc-300">
                    <span className="text-lime-400 mt-0.5 drop-shadow-[0_0_5px_rgba(163,230,53,0.8)]">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto bg-cyan-900/10 border-l-2 border-cyan-400 p-4 rounded-r-xl shadow-[inset_4px_0_10px_rgba(6,182,212,0.05)]">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]" />
                <div>
                  <h5 className="font-bold text-cyan-300 tracking-wide text-sm mb-1 drop-shadow-[0_0_5px_rgba(6,182,212,0.3)]">Explainability Module</h5>
                  <p className="text-sm text-cyan-100/70 leading-relaxed">
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
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-zinc-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">Evaluation Results for {applicantName}</h2>
        <p className="text-zinc-500 mt-1">Split-screen analysis demonstrating the impact of hidden contextual signals.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 flex-grow">
        {isLoading ? (
          <>
            {/* Skeleton Loaders matching Card sizes */}
            <div className="border border-zinc-800 bg-zinc-900/50 rounded-2xl p-6 h-[500px] animate-pulse">
              <div className="h-6 bg-zinc-800/80 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-zinc-800/50 rounded w-3/4 mb-12"></div>
              <div className="h-10 bg-zinc-800/80 rounded w-1/3 mb-6"></div>
              <div className="flex gap-4 mb-12">
                <div className="h-20 bg-zinc-800/50 rounded w-1/2"></div>
                <div className="h-20 bg-zinc-800/50 rounded w-1/2"></div>
              </div>
              <div className="h-32 bg-zinc-800/30 rounded w-full"></div>
            </div>
            <div className="border border-lime-900/30 bg-zinc-900/50 rounded-2xl p-6 h-[500px] animate-pulse">
              <div className="h-6 bg-zinc-800/80 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-zinc-800/50 rounded w-2/3 mb-12"></div>
              <div className="h-10 bg-zinc-800/80 rounded w-1/3 mb-6"></div>
              <div className="flex gap-4 mb-12">
                <div className="h-20 bg-zinc-800/50 rounded w-1/2"></div>
                <div className="h-20 bg-zinc-800/50 rounded w-1/2"></div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="h-4 bg-zinc-800/50 rounded w-full"></div>
                <div className="h-4 bg-zinc-800/50 rounded w-5/6"></div>
                <div className="h-4 bg-zinc-800/50 rounded w-4/6"></div>
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
