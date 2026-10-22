import { useState } from 'react';
import { Info, Target, Compass, Users, MapPin, CheckCircle, AlertTriangle, Lightbulb, ShieldAlert } from 'lucide-react';
import { MISSION_STATEMENT, OBJECTIVES, SWOT_DATA, BUSINESS_INFO } from '../data/businessData';

export default function AboutSection() {
  const [activeSwotTab, setActiveSwotTab] = useState<'strengths' | 'weaknesses' | 'opportunities' | 'threats'>('strengths');

  return (
    <section id="about" className="py-20 bg-[#faf8f2] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Info className="w-3.5 h-3.5" />
            Strategic Framework
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight font-heading">
            About Squash Cheesy Balls
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Founded as an authentic student entrepreneurship project to bring nutritious, vegetable-infused street food snacking to the Eastern Samar State University community.
          </p>
        </div>

        {/* Mission & Story Hero Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Mission Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-amber-500 to-amber-600 text-stone-950 rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-950/15 text-stone-950 text-xs font-black uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                Our Enterprise Mission
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-heading leading-snug">
                "{MISSION_STATEMENT}"
              </h3>
            </div>

            <div className="mt-8 pt-6 border-t border-amber-600/30 flex items-center justify-between text-xs font-semibold">
              <span>BCSC-2A Entrepreneurial Mind</span>
              <span>ESSU Borongan Campus</span>
            </div>
          </div>

          {/* Company History & Overview */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-amber-200/80 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Origin Story & Inspiration
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-heading">
                Combining Fresh Squash with Savory Cheese
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Squash Cheesy Balls began as a collaborative student entrepreneurship project to introduce a creative and affordable snack. The group decided to combine local squash (kalabasa) and cheese to develop a product that is tasty, appealing, and suitable for students, teachers, and school personnel.
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Through hands-on teamwork, hygienic cooking, cost accounting, and customer interaction, the enterprise enables students to acquire authentic business leadership skills.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-500">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Location: Near Eastern Samar State University (ESSU) Main Campus, Maypangdan, Borongan City</span>
            </div>
          </div>

        </div>

        {/* 4 Core Objectives */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-stone-900 font-heading">
              Our 4 Strategic Objectives
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Documented in Section 3 of the Mini Business Plan
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {OBJECTIVES.map((obj) => (
              <div
                key={obj.num}
                className="bg-white rounded-2xl p-6 border border-amber-200/70 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 font-black text-sm flex items-center justify-center font-heading mb-4">
                    0{obj.num}
                  </span>
                  <h4 className="font-bold text-stone-900 text-base font-heading mb-2">
                    {obj.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {obj.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 text-[10px] font-bold uppercase tracking-wider text-amber-700">
                  Target Priority
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Target Market Demographics Strip */}
        <div className="mb-16 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
          <h3 className="text-lg font-bold text-stone-900 font-heading mb-4 flex items-center gap-2">
            <Users className="w-4 h-4 text-amber-600" />
            <span>Target Marketing Demographic & Analysis</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-[#fffdf7] border border-amber-200/60">
              <span className="font-bold text-stone-900 block text-sm font-heading mb-1">Target Age & Role</span>
              <p className="text-stone-600 leading-relaxed">
                College students, high schoolers, university faculty, campus maintenance employees, and local families seeking affordable comfort snacks.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#fffdf7] border border-amber-200/60">
              <span className="font-bold text-stone-900 block text-sm font-heading mb-1">Selling Location</span>
              <p className="text-stone-600 leading-relaxed">
                Immediate perimeter of Eastern Samar State University (ESSU) Main Campus in Maypangdan, Borongan City, Eastern Samar.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#fffdf7] border border-amber-200/60">
              <span className="font-bold text-stone-900 block text-sm font-heading mb-1">Consumer Lifestyle</span>
              <p className="text-stone-600 leading-relaxed">
                Busy students and working staff with tight schedules looking for fast, piping-hot snacks during morning/afternoon break intervals.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive SWOT Analysis */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-amber-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
              Enterprise Evaluation
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-stone-900 font-heading mt-2">
              SWOT Analysis Matrix
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Internal strengths and weaknesses alongside external opportunities and threats
            </p>
          </div>

          {/* SWOT Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveSwotTab('strengths')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSwotTab === 'strengths'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <CheckCircle className="w-4 h-4" />
              <span>Strengths ({SWOT_DATA.strengths.length})</span>
            </button>

            <button
              onClick={() => setActiveSwotTab('weaknesses')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSwotTab === 'weaknesses'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Weaknesses ({SWOT_DATA.weaknesses.length})</span>
            </button>

            <button
              onClick={() => setActiveSwotTab('opportunities')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSwotTab === 'opportunities'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <Lightbulb className="w-4 h-4" />
              <span>Opportunities ({SWOT_DATA.opportunities.length})</span>
            </button>

            <button
              onClick={() => setActiveSwotTab('threats')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSwotTab === 'threats'
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Threats ({SWOT_DATA.threats.length})</span>
            </button>
          </div>

          {/* SWOT Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SWOT_DATA[activeSwotTab].map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-stone-200/90 bg-[#fffdf8] shadow-2xs hover:shadow-xs transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-2 h-2 rounded-full ${
                    activeSwotTab === 'strengths'
                      ? 'bg-emerald-500'
                      : activeSwotTab === 'weaknesses'
                      ? 'bg-amber-500'
                      : activeSwotTab === 'opportunities'
                      ? 'bg-blue-500'
                      : 'bg-rose-500'
                  }`} />
                  <h4 className="font-bold text-stone-900 text-sm sm:text-base font-heading">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
