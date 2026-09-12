"use client"

import React from "react"
import {
  Sparkles,
  Target,
  MessageCircle,
  TrendingUp,
  CheckCircle2,
  ArrowUpRight,
  Briefcase,
  Compass,
  Award,
  Zap,
} from "lucide-react"

export function HeroDashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[36rem] rounded-[2rem] border border-teal-500/25 bg-slate-900/90 p-4 sm:p-5 shadow-2xl shadow-teal-950/60 backdrop-blur-2xl transition-all duration-500 hover:border-teal-500/40">
      {/* Glow effect behind visual */}
      <div className="absolute -inset-1 -z-10 rounded-[2.2rem] bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-teal-700/10 blur-xl opacity-75" />

      {/* Top Header Mockup */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30">
            <Sparkles className="h-5 w-5 animate-pulse" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-teal-300">
              Career Path Engine
            </h4>
            <p className="text-sm font-semibold text-white">Market Recommendations</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-bold text-teal-300">
          <span className="h-2 w-2 rounded-full bg-teal-400 animate-ping" />
          Live AI Active
        </span>
      </div>

      {/* Recommended Role Card */}
      <div className="mt-4 rounded-xl border border-white/10 bg-slate-950/80 p-4 transition-all hover:border-teal-500/30">
        <div className="flex items-start justify-between">
          <div>
            <span className="rounded bg-teal-500/20 px-2 py-0.5 text-[10px] font-bold text-teal-300 border border-teal-500/30">
              Top Recommendation • 94% Match
            </span>
            <h3 className="mt-2 text-lg font-bold text-white flex items-center gap-2">
              Senior Product Designer
              <ArrowUpRight className="h-4 w-4 text-teal-400" />
            </h3>
            <p className="text-xs text-slate-400">Accra, GH • Remote Eligible • $45K - $65K/yr</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 font-bold text-sm border border-teal-400/30">
            94%
          </div>
        </div>

        {/* Skill Gap Progress Bars */}
        <div className="mt-4 space-y-2">
          <div>
            <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
              <span>System Design & Prototyping</span>
              <span className="text-teal-400 font-bold">92%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-teal-500 to-emerald-400 w-[92%]" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
              <span>Design Leadership & Mentorship</span>
              <span className="text-teal-400 font-bold">78%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-400 w-[78%]" />
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Sub-Widgets */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        {/* Widget 1: AI Coach Prompt */}
        <div className="rounded-xl border border-white/10 bg-slate-950/70 p-3.5 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-xs font-bold text-teal-300">
            <MessageCircle className="h-4 w-4" />
            <span>AI Career Coach</span>
          </div>
          <p className="mt-2 text-xs font-medium text-slate-300 line-clamp-2">
            &ldquo;How should I frame my portfolio for remote European roles?&rdquo;
          </p>
          <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400 border-t border-white/5 pt-2">
            <span className="text-emerald-400 flex items-center gap-1 font-semibold">
              <Zap className="h-3 w-3" /> Answer Ready
            </span>
            <span>2 mins ago</span>
          </div>
        </div>

        {/* Widget 2: Resume Strength */}
        <div className="rounded-xl border border-white/10 bg-slate-950/70 p-3.5 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
            <Award className="h-4 w-4" />
            <span>Resume Readiness</span>
          </div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-black text-white">88/100</span>
            <span className="text-xs text-emerald-400 font-bold">+12 pts</span>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-300">
            <CheckCircle2 className="h-3.5 w-3.5 text-teal-400" />
            <span>Keywords synced with Ghanaian tech market</span>
          </div>
        </div>
      </div>

      {/* Floating Focus Ribbon */}
      <div className="mt-4 rounded-xl border border-teal-500/30 bg-gradient-to-r from-teal-950/90 to-slate-950/90 p-3.5 flex items-center justify-between backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/20 text-teal-300 font-bold">
            <TrendingUp className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-teal-300">
              Next Recommended Action
            </p>
            <p className="text-xs font-semibold text-white">
              Schedule 15-min mock interview preview
            </p>
          </div>
        </div>
        <button className="rounded-lg bg-teal-500 px-3 py-1.5 text-xs font-bold text-slate-950 hover:bg-teal-400 transition-colors">
          Start Now
        </button>
      </div>
    </div>
  )
}
