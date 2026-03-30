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
    first_generation: false,
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
    <div className={`transition-all duration-700 ease-in-out bg-white doodle-box overflow-hidden ${compactMode ? 'opacity-90 scale-[0.98]' : 'opacity-100'}`}>
      <div className="p-5 border-b-2 border-slate-900 bg-[#fefce8]">
        <h2 className="text-2xl font-black text-slate-800 tracking-tight flex items-center gap-2">
          <span>📝</span>
          Applicant Profile
        </h2>
        {!compactMode && <p className="text-sm font-semibold text-slate-600 mt-1">Provide the applicant details to see how contextual inputs modify baseline expectations.</p>}
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Basic Information */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest border-b-2 border-slate-200 pb-1">Demographics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={compactMode || isLoading}
                className="w-full bg-[#f8fafc] text-slate-800 font-semibold doodle-box-sm px-3 py-2 focus:outline-none focus:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  disabled={compactMode || isLoading}
                  className="w-full bg-[#f8fafc] text-slate-800 font-semibold doodle-box-sm px-3 py-2 focus:outline-none focus:bg-white transition-all disabled:opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  disabled={compactMode || isLoading}
                  className="w-full bg-[#f8fafc] text-slate-800 font-semibold doodle-box-sm px-3 py-2 focus:outline-none focus:bg-white transition-all disabled:opacity-50"
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
        <div className="space-y-3 pt-2">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest border-b-2 border-slate-200 pb-1">Standard Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Academic Score (%)</label>
              <input
                type="number"
                step="0.1"
                name="academic_score"
                value={formData.academic_score}
                onChange={handleChange}
                disabled={compactMode || isLoading}
                className="w-full bg-[#f8fafc] text-slate-800 font-semibold doodle-box-sm px-3 py-2 focus:outline-none focus:bg-white transition-all disabled:opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Family Income (INR)</label>
              <input
                type="number"
                name="family_income"
                value={formData.family_income}
                onChange={handleChange}
                disabled={compactMode || isLoading}
                className="w-full bg-[#f8fafc] text-slate-800 font-semibold doodle-box-sm px-3 py-2 focus:outline-none focus:bg-white transition-all disabled:opacity-50"
              />
            </div>
          </div>
        </div>

        {/* Contextual Signals */}
        <div className="space-y-3 pt-2">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest border-b-2 border-slate-200 pb-1">Contextual Signals</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Location Tier</label>
              <select
                name="location_tier"
                value={formData.location_tier}
                onChange={handleChange}
                disabled={compactMode || isLoading}
                className="w-full bg-[#f8fafc] text-slate-800 font-semibold doodle-box-sm px-3 py-2 focus:outline-none focus:bg-white transition-all disabled:opacity-50"
              >
                <option>Urban</option>
                <option>Suburban</option>
                <option>Rural</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Internet Access</label>
              <select
                name="internet_reliability"
                value={formData.internet_reliability}
                onChange={handleChange}
                disabled={compactMode || isLoading}
                className="w-full bg-[#f8fafc] text-slate-800 font-semibold doodle-box-sm px-3 py-2 focus:outline-none focus:bg-white transition-all disabled:opacity-50"
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Dist. from HQ (km)</label>
              <input
                type="number"
                name="distance_km"
                value={formData.distance_km}
                onChange={handleChange}
                disabled={compactMode || isLoading}
                className="w-full bg-[#f8fafc] text-slate-800 font-semibold doodle-box-sm px-3 py-2 focus:outline-none focus:bg-white transition-all disabled:opacity-50"
              />
            </div>
            
            <div className="flex items-center justify-between col-span-1 md:col-span-2 mt-2 p-3 bg-sky-50 doodle-box-sm">
              <div>
                <span className="block text-sm font-bold text-slate-800">First-Generation Student</span>
                <span className="block text-xs font-medium text-slate-500">First in family to attend higher education</span>
              </div>
              <div className="relative inline-block w-12 align-middle select-none">
                <input
                  id="first_gen_toggle"
                  type="checkbox"
                  name="first_generation"
                  checked={formData.first_generation}
                  onChange={handleChange}
                  disabled={compactMode || isLoading}
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-2 appearance-none cursor-pointer"
                />
                <label htmlFor="first_gen_toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-200 cursor-pointer"></label>
              </div>
            </div>

          </div>
        </div>

        {!compactMode && (
          <div className="pt-6">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-4 bg-[#38bdf8] text-slate-900 border-b-4 border-[#0284c7] hover:bg-[#7dd3fc] text-xl font-bold tracking-wide doodle-button flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="animate-spin text-lg">⚙️</span>
                  Analyzing Context...
                </>
              ) : (
                <>
                  <span>✨</span> Evaluate Applicant
                </>
              )}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
