
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface MetricsDashboardProps {
  score: number;
  historicalRate: number;
}

export function MetricsDashboard({ score, historicalRate }: MetricsDashboardProps) {
  // Determine color based on score (Neon variations)
  const getColor = (val: number) => {
    if (val < 50) return '#d946ef'; // fuchsia-500
    if (val < 75) return '#06b6d4'; // cyan-500
    return '#a3e635'; // lime-400
  };

  const data = {
    labels: ['Equity Index', 'Gap'],
    datasets: [
      {
        data: [score, 100 - score],
        backgroundColor: [
          getColor(score),
          '#18181b' // zinc-900
        ],
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
        cutout: '80%',
        borderRadius: [4, 0]
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    },
    animation: {
      duration: 2000,
      easing: 'easeOutQuart' as const
    }
  };

  return (
    <div className="bg-[#09090b] border border-zinc-900 rounded-2xl shadow-[0_0_20px_rgba(6,182,212,0.05)] w-full p-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 h-full">
        {/* Left Section: Context Stats */}
        <div className="w-full md:w-1/3 flex-shrink-0 flex flex-col justify-center border-b md:border-b-0 md:border-r border-zinc-800 pb-6 md:pb-0 md:pr-6">
          <h2 className="text-xl font-bold text-zinc-100 mb-1 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">Equity Dashboard</h2>
          <p className="text-sm text-zinc-500 mb-6 leading-relaxed">System-wide transparency metrics tracking historical fairness over time.</p>
          
          <div className="bg-[#121214] p-4 rounded-xl border border-zinc-800 shadow-inner">
            <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-1 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">Historical Group Approval Rate</h4>
            <div className="flex items-end gap-2 text-fuchsia-500 drop-shadow-[0_0_8px_rgba(217,70,239,0.5)]">
              <span className="text-3xl font-black font-mono tracking-tighter">{(historicalRate * 100).toFixed(0)}%</span>
            </div>
          </div>
        </div>

        {/* Right Section: Gauge */}
        <div className="w-full md:w-2/3 flex flex-col items-center justify-center relative min-h-[160px]">
          <div className="w-full max-w-[300px] h-[150px] relative drop-shadow-[0_0_15px_rgba(163,230,53,0.3)]">
            <Doughnut data={data} options={options} />
            <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-[120%] text-center">
              <div className="text-5xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] tracking-tighter">{score}</div>
              <div className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mt-1">Index</div>
            </div>
            
            {/* Visual labels on max and min side of gauge */}
            <div className="absolute top-[85%] left-0 text-zinc-700 font-mono text-xs font-bold leading-none">0</div>
            <div className="absolute top-[85%] right-0 text-zinc-700 font-mono text-xs font-bold leading-none">100</div>
          </div>
        </div>
      </div>
    </div>
  );
}
