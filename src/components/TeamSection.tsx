import { Users, GraduationCap, Award, Mail } from 'lucide-react';
import { TEAM_MEMBERS, BUSINESS_INFO, TeamMember } from '../data/businessData';

export default function TeamSection() {
  const executives = TEAM_MEMBERS.filter((m) => m.category === 'Executive');
  const managers = TEAM_MEMBERS.filter((m) => m.category === 'Management');
  const operations = TEAM_MEMBERS.filter((m) => m.category === 'Operations & Production');

  return (
    <section id="team" className="py-20 bg-[#faf8f2] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            The Minds Behind The Bites
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight font-heading">
            Meet Our Team
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            The passionate team of <strong>BCSC-2A</strong> students from the College of Computer Studies at <strong>Eastern Samar State University – Borongan</strong> driving innovation, production, finance, and marketing.
          </p>
        </div>

        {/* Academic Course Banner */}
        <div className="mb-14 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-stone-700">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Project Fulfillment</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading">
                In Partial Fulfillment of the Course Requirement in Entrepreneurial Mind
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm">
                Course: <strong className="text-white">ELECTIVE. 211</strong> • Class: <strong className="text-white">BCSC- 2A</strong>
              </p>
              <p className="text-stone-400 text-xs">
                Eastern Samar State University – Borongan • College of Computer Studies • Information Technology Department
              </p>
            </div>
            <div className="md:col-span-4 bg-stone-800/80 rounded-2xl p-4 border border-stone-700/60 text-center md:text-right">
              <span className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold block">
                Course Instructor
              </span>
              <p className="text-base font-bold text-white mt-1">
                {BUSINESS_INFO.instructor}
              </p>
              <p className="text-xs text-stone-400 mt-0.5">
                Instructor, Elective 211
              </p>
            </div>
          </div>
        </div>

        {/* Executive Lead Spotlight */}
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            Executive Leadership
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 max-w-xl mx-auto">
            {executives.map((member: TeamMember) => (
              <div
                key={member.name}
                className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-300 shadow-md hover:shadow-xl transition-all flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"
              >
                <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-stone-950 font-black text-2xl font-heading shadow-md shrink-0 border-2 border-white">
                  {member.avatarInitials}
                  <span className="absolute -bottom-1 -right-1 bg-stone-900 text-amber-400 p-1 rounded-full text-[10px]" title="Chief Executive Officer">
                    <Award className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div className="space-y-1 flex-1">
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold">
                    {member.badge}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-stone-900 font-heading">
                    {member.name}
                  </h3>
                  <p className="text-sm font-bold text-amber-700">
                    {member.role}
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed pt-1">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Management Team Grid */}
        <div className="mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            Department Management Team
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {managers.map((member: TeamMember) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-5 border border-amber-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 font-bold font-heading flex items-center justify-center text-base border border-amber-200">
                      {member.avatarInitials}
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-stone-100 text-stone-700">
                      {member.badge}
                    </span>
                  </div>
                  <h4 className="font-bold text-stone-900 text-base font-heading">
                    {member.name}
                  </h4>
                  <p className="text-xs font-semibold text-amber-700 mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-400 font-medium">
                  {BUSINESS_INFO.department}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Operations & Production Crew */}
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            Operations, Production & Hygiene Crew
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {operations.map((member: TeamMember) => (
              <div
                key={member.name}
                className="bg-white/80 rounded-2xl p-4 border border-stone-200/80 shadow-2xs hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-800 font-bold flex items-center justify-center text-sm font-heading mb-3">
                  {member.avatarInitials}
                </div>
                <h5 className="font-bold text-stone-900 text-sm font-heading">
                  {member.name}
                </h5>
                <p className="text-xs font-semibold text-amber-700 mt-0.5">
                  {member.role}
                </p>
                <p className="text-[11px] text-stone-500 mt-1.5 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
