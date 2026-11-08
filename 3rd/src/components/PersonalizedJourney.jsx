import React from 'react';
import { usePatronWellness } from '../context/PatronWellnessContext';

export default function PersonalizedJourney() {
  const { patron } = usePatronWellness();

  return (
    <section id="journey" className="py-16 px-6 lg:px-14 bg-[#0c0c0d] text-[#ececee]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column Description */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-[10px] tracking-[0.3em] text-[#b3906e] font-semibold uppercase block">
            PRECISION CARE PROTOCOL
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#f4efe8] leading-tight">
            A Personalized Sanctuary Journey
          </h2>
          <p className="text-xs sm:text-sm text-[#858380] font-light leading-relaxed">
            Before your arrival, our residency herbalists and thermal physicians analyze your natural
            circadian cycle. Water mineral densities, private sauna steam temperatures, and evening teas
            are calibrated to your elemental profile.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex gap-4 items-start">
              <span className="text-xl text-[#b3906e]">🌅</span>
              <div>
                <h4 className="text-sm font-serif font-bold text-[#f4efe8]">
                  Bespoke Biorhythm Scheduling
                </h4>
                <p className="text-xs text-[#858380] font-light mt-0.5">
                  Circadian lighting synchronizes your pineal gland alongside alpine sunrise rhythms.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-xl text-[#b3906e]">🌿</span>
              <div>
                <h4 className="text-sm font-serif font-bold text-[#f4efe8]">
                  Custom Bath Tincture Blends
                </h4>
                <p className="text-xs text-[#858380] font-light mt-0.5">
                  Hand-crafted botanical infusions formulated to regulate autonomic nervous balance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Resident Custodian Pass Card matching Screenshot 6 */}
        <div className="lg:col-span-6 bg-[#141416] border border-[#262529] rounded-3xl p-6 sm:p-8 shadow-2xl">
          {/* Member Card Header */}
          <div className="flex items-center gap-4 pb-6 border-b border-[#212024] mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#24211e] border border-[#3b3630] flex items-center justify-center text-xl">
              🧘
            </div>
            <div>
              <span className="text-[9px] tracking-[0.2em] text-[#b3906e] uppercase font-bold block">
                RESIDENT CUSTODIAN PASS •
              </span>
              <h3 className="text-xl font-serif font-bold text-[#f4efe8]">
                {patron.name}
              </h3>
              <p className="text-[10px] text-[#73716e]">{patron.memberTier}</p>
            </div>
          </div>

          {/* 4 Health Calibration Fields */}
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="p-3 bg-[#1b1a1e] border border-[#262529] rounded-xl">
              <span className="text-[8px] tracking-[0.2em] text-[#73716e] uppercase block font-bold mb-1">
                ELEMENTAL CONSTITUTION
              </span>
              <span className="text-[#f4efe8] font-serif font-medium">{patron.elementalConstitution}</span>
            </div>

            <div className="p-3 bg-[#1b1a1e] border border-[#262529] rounded-xl">
              <span className="text-[8px] tracking-[0.2em] text-[#73716e] uppercase block font-bold mb-1">
                THERMAL HYDRO PREFERENCE
              </span>
              <span className="text-[#b3906e] font-serif font-bold">{patron.thermalPreference}</span>
            </div>

            <div className="p-3 bg-[#1b1a1e] border border-[#262529] rounded-xl">
              <span className="text-[8px] tracking-[0.2em] text-[#73716e] uppercase block font-bold mb-1">
                DIETARY ALCHEMY
              </span>
              <span className="text-[#f4efe8] font-serif font-medium">{patron.dietaryAlchemy}</span>
            </div>

            <div className="p-3 bg-[#1b1a1e] border border-[#262529] rounded-xl">
              <span className="text-[8px] tracking-[0.2em] text-[#73716e] uppercase block font-bold mb-1">
                UPCOMING STAY
              </span>
              <span className="text-[#f4efe8] font-serif font-medium">{patron.upcomingStay}</span>
            </div>
          </div>

          {/* HRV Rebound Bar matching Screenshot 6 */}
          <div className="mt-4 p-4 bg-[#1b1a1e] border border-[#262529] rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-[#858380]">
              <span>📈</span>
              <span>HRV Restorative Rebound Score</span>
            </div>
            <span className="text-base font-serif font-bold text-[#b3906e]">
              {patron.hrvScore}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}