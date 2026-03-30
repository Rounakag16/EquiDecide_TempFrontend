import React, { useState } from 'react';

interface IntakeFormProps {
  onEvaluate: () => void;
  isLoading: boolean;
  compactMode: boolean;
}

export function IntakeForm({ onEvaluate, isLoading, compactMode }: IntakeFormProps) {
  const [formData, setFormData] = useState({
    name: 'Ravi Kumar',
    age: 19,
    gender: 'Male',
    academic_score: 82.5,
    family_income: 8000,
    location_tier: 'Rural',
    first_generation: true,
    distance_km: 45,
    internet_reliability: 'Low'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!compactMode && !isLoading) {
      onEvaluate();
    }
  };

  return (
    <div className={`transition-all duration-700 ease-in-out bg-[#09090b] border border-zinc-800 rounded-2xl shadow-[0_0_20px_rgba(6,182,212,0.1)] overflow-hidden ${compactMode ? 'opacity-80' : 'opacity-100'}`}>
      <div className="p-6 border-b border-zinc-800 bg-[#09090b]/50">
        <h2 className="text-2xl font-semibold text-zinc-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">Applicant Context Profile</h2>
        {!compactMode && <p className="text-sm text-zinc-400 mt-1">Enter demographic and contextual signals to evaluate baseline models vs EquiDecide framework.</p>}
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Basic Information */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-cyan-500 uppercase tracking-widest drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">Demographics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={compactMode || isLoading}
                className="w-full bg-[#121214] text-white rounded-xl px-4 py-2 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-inner shadow-black/50"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  disabled={compactMode || isLoading}
                  className="w-full bg-[#121214] text-white rounded-xl px-4 py-2 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all shadow-inner shadow-black/50 disabled:opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  disabled={compactMode || isLoading}
                  className="w-full bg-[#121214] text-white rounded-xl px-4 py-2 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all shadow-inner shadow-black/50 disabled:opacity-50"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Non-binary</option>
                  <option>Prefer not to say</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Standard Metrics */}
        <div className="space-y-4 pt-4 border-t border-zinc-800">
          <h3 className="text-xs font-bold text-fuchsia-500 uppercase tracking-widest drop-shadow-[0_0_5px_rgba(217,70,239,0.5)]">Standard Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1">Academic Score (%)</label>
              <input
                type="number"
                step="0.1"
                name="academic_score"
                value={formData.academic_score}
                onChange={handleChange}
                disabled={compactMode || isLoading}
                className="w-full bg-[#121214] text-white rounded-xl px-4 py-2 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all shadow-inner shadow-black/50 disabled:opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1">Family Income (INR/mo)</label>
              <input
                type="number"
                name="family_income"
                value={formData.family_income}
                onChange={handleChange}
                disabled={compactMode || isLoading}
                className="w-full bg-[#121214] text-white rounded-xl px-4 py-2 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all shadow-inner shadow-black/50 disabled:opacity-50"
              />
            </div>
          </div>
        </div>

        {/* Contextual Signals */}
        <div className="space-y-4 pt-4 border-t border-zinc-800">
          <h3 className="text-xs font-bold text-lime-400 uppercase tracking-widest drop-shadow-[0_0_5px_rgba(163,230,53,0.5)]">Contextual Signals</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1">Location Tier</label>
              <select
                name="location_tier"
                value={formData.location_tier}
                onChange={handleChange}
                disabled={compactMode || isLoading}
                className="w-full bg-[#121214] text-white rounded-xl px-4 py-2 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all shadow-inner shadow-black/50 disabled:opacity-50"
              >
                <option>Urban</option>
                <option>Suburban</option>
                <option>Rural</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1">Internet Access</label>
              <select
                name="internet_reliability"
                value={formData.internet_reliability}
                onChange={handleChange}
                disabled={compactMode || isLoading}
                className="w-full bg-[#121214] text-white rounded-xl px-4 py-2 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all shadow-inner shadow-black/50 disabled:opacity-50"
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1">Dist. from Institution (km)</label>
              <input
                type="number"
                name="distance_km"
                value={formData.distance_km}
                onChange={handleChange}
                disabled={compactMode || isLoading}
                className="w-full bg-[#121214] text-white rounded-xl px-4 py-2 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all shadow-inner shadow-black/50 disabled:opacity-50"
              />
            </div>
            
            <div className="flex items-center justify-between col-span-1 md:col-span-2 mt-2 p-3 bg-[#121214]/80 rounded-xl border border-zinc-800 shadow-inner">
              <div>
                <span className="block text-sm font-medium text-zinc-200">First-Generation Student</span>
                <span className="block text-xs text-zinc-500">First in family to attend higher education</span>
              </div>
              <div className="relative inline-block w-12 align-middle select-none">
                <input
                  type="checkbox"
                  name="first_generation"
                  checked={formData.first_generation}
                  onChange={handleChange}
                  disabled={compactMode || isLoading}
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-[#121214] border-4 appearance-none cursor-pointer"
                />
                <label className="toggle-label block overflow-hidden h-6 rounded-full bg-zinc-700 cursor-pointer"></label>
              </div>
            </div>

          </div>
        </div>

        {!compactMode && (
          <div className="pt-6">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-4 bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500 hover:text-black text-lg font-black tracking-wide rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.8)] disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing Context...
                </>
              ) : (
                'Evaluate Applicant'
              )}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
