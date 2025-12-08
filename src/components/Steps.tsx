'use client';

import React, { useState } from 'react';

type CardId = 'overview' | 'dribbble' | 'behance' | 'linkedin' | 'twitter' | 'hired';

const steps = [
  {
    title: 'Step 1 — Consultation',
    detail: 'Begin with a personalized assessment to understand your background, goals, and the best path into OSP engineering.',
  },
  {
    title: 'Step 2 — Enroll & Learn',
    detail: 'Join an industry-aligned bootcamp with live classes, structured modules, and real telecom workflows.',
  },
  {
    title: 'Step 3 — Build Experience',
    detail: 'Develop a project portfolio through simulated OSP design projects, AutoCAD tasks, and real-world scenarios.',
  },
  {
    title: 'Step 4 — Career Support',
    detail: 'Get resume grooming, LinkedIn optimization, mock interviews, and job search guidance tailored to telecom roles.',

  },
  {
    title: 'Step 5 — Get Hired & Pay Later',
    detail: 'Secure a job through Skarion’s placement support and pay the bulk of your program fee only after you’re hired.',
  },
];

const SocialCards: React.FC = () => {
  const [activeCard, setActiveCard] = useState<CardId>('overview');
  const [activeStep, setActiveStep] = useState(1);
  const cardIds: CardId[] = ['dribbble','behance','linkedin','twitter','hired'];

  const currentStep = steps[activeStep - 1];

  return (
    <div className="cards max-w-full overflow-hidden relative h-full bg-[#c3ddf5]">
      
      <div
        className={`card ${activeCard === 'overview' ? 'active' : ''}`}
        id="overview"
      >
        <div className="card-content h-full">
          <div className="row h-full">
              <div className="left col px-8">
                <span className="px-3 py-1 rounded-full bg-black/20 text-[12px] inline-block text-black">
                  WORKTREE OF SKARION
                </span>
                <h2 className="mt-6 text-[48px] font-semibold text-black">
                  The Skarion <strong>Advantage</strong>
                </h2>
                <p className="mt-4 max-w-lg text-black/90">
                  See how Skarion takes you from confusion to a job-ready OSP
                  engineer in five clear steps.
                  <br />
                  <span className="font-bold">Click the numbered icon below to explore each step.</span>
                </p>
              </div>
          </div>
        </div>
      </div>


      {cardIds.map((id, idx) => (
        <div
          key={id}
          className={`card ${activeCard === id ? 'active' : ''}`}
          id={id}
        >
          <button
            type="button"
            className={`card-toggle ${activeStep === idx + 1 && activeCard === id ? 'active' : ''}`}
            onClick={() => {
              setActiveCard(id);
              setActiveStep(idx + 1);
            }}
            style={{ color: activeCard === 'overview' ? '#000000' : undefined }}
          >
            <i>{idx + 1}</i>
          </button>

          <div
            className="card-content text-white relative w-full h-full"
            style={{ backgroundColor: steps[idx].color }}
          >
            <div className="row h-full">
              <div className="left col px-8">
                <span className="px-3 py-1 rounded-full bg-white/20 text-xs inline-block">
                  SKARION PROGRAM STEPS
                </span>
                <h2 className="mt-6 text-[48px] font-semibold">{steps[idx].title}</h2>
                <p className="mt-4 max-w-lg text-white/90">{steps[idx].detail}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setActiveCard('overview')}
              className="absolute top-8 right-8 text-[48px] rotate-[180deg] text-white"
            >
              ➲
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialCards;
