"use client"

import { Check } from 'lucide-react'
import { Stage } from '../kit/stage'
import type { Act } from '../kit/act'
import { Bar, Window } from '../kit/window'
import { Badge } from '../kit/controls/Badge'
import { Button } from '../kit/controls/Button'
import { Collapse } from '../kit/motion/Collapse'
import { Count } from '../kit/motion/Count'
import { Roll } from '../kit/motion/Roll'
import { Meter } from '../kit/parts/Meter'
import '../careerlead-hero/hero.css'
import './paths.css'

// CareerLead AI hero, slide 2: career paths. Same frame as the challenge
// slide (window, sidebar, satellite slot), so a carousel only swaps the
// screen. A system story, no cursor: the CV got better, so the resume
// score rolls 76 to 88; the top path's match follows it from 81% to 94%
// and its two skills fill; then the next recommended action opens.
//
// Real strings: the title, the role, its meta line, the two skills, the
// match, the resume score and the next action. Everything else is bars.

type S = { cv: boolean; match: boolean; skills: boolean; next: boolean }

const initial: S = { cv: false, match: false, skills: false, next: false }
const POSTER: S = { cv: true, match: true, skills: true, next: true }

const scriptFor = (once: boolean) => async (a: Act<S>) => {
  await a.wait(1000)
  a.mark('cv')
  await a.set({ cv: true })
  await a.wait(1100)
  a.mark('match')
  await a.set({ match: true })
  await a.wait(700)
  await a.set({ skills: true })
  await a.wait(1300)
  a.mark('next')
  await a.set({ next: true })
  if (once) return
  await a.wait(3000)
  await a.set({ next: false })
  await a.wait(70)
  await a.set({ skills: false, match: false })
  await a.wait(70)
  await a.set({ cv: false })
  await a.wait(1200)
}

const SCRIPT_LOOP = scriptFor(false)
const SCRIPT_ONCE = scriptFor(true)

const RING = 2 * Math.PI * 22

export default function CareerLeadPaths({ play = 'loop' }: { play?: 'loop' | 'once' }) {
  return (
    <Stage<S>
      width={720}
      height={600}
      compact={{ below: 640, width: 358, height: 358 }}
      theme="dark"
      initial={initial}
      poster={POSTER}
      script={play === 'once' ? SCRIPT_ONCE : SCRIPT_LOOP}
      play={play}
      className="clh clp"
    >
      {(s, _rect, layout) => {
        const compact = layout === 'compact'
        const match = s.match ? 94 : 81
        return (
          <>
            <Window url="app.careerlead.ai/career-paths" className="clh-win" sidebarWidth={150} sidebar={compact ? undefined : <Side />}>
              <div className="clh-body">
                {!compact && <div className="clh-title">Your career paths</div>}
                <div className="clh-card clp-card">
                  <div className="clp-head">
                    <div className="clp-lines">
                      <div className="clp-role">
                        Senior Product Designer
                        {!compact && (
                          <span className="clp-pick" data-on={s.match || undefined}>
                            <Badge tone="accent">Top pick</Badge>
                          </span>
                        )}
                      </div>
                      <div className="clp-meta">{compact ? 'Accra · Remote eligible' : 'Accra, GH · Remote eligible · $45K–$65K/yr'}</div>
                    </div>
                    <span className="clp-ring" aria-hidden>
                      <svg viewBox="0 0 52 52" width={52} height={52}>
                        <circle cx="26" cy="26" r="22" className="clp-ring-track" />
                        <circle cx="26" cy="26" r="22" className="clp-ring-arc" style={{ strokeDasharray: RING, strokeDashoffset: RING * (1 - match / 100) }} />
                      </svg>
                      <span className="clp-ring-value">
                        <Roll>{`${match}%`}</Roll>
                      </span>
                    </span>
                  </div>
                  <div className="clp-skills">
                    <Skill name="System design & prototyping" value={s.skills ? 92 : 82} />
                    <Skill name="Design leadership" value={s.skills ? 78 : 71} />
                  </div>
                  <Collapse open={s.next}>
                    <div className="clp-next-wrap">
                    <div className="clp-next">
                      <span className="clp-next-lines">
                        <span className="clp-next-label">Next step</span>
                        <span className="clp-next-text">{compact ? '15-min mock interview' : 'Schedule a 15-min mock interview'}</span>
                      </span>
                      <Button variant="primary" size="small">Start</Button>
                    </div>
                    </div>
                  </Collapse>
                </div>
                {!compact && (
                  <div className="clh-filler">
                    <div className="clh-filler-card">
                      <Bar w={170} h={8} r={4} tone={2} />
                      <Bar w={250} h={7} r={3.5} tone={1} />
                      <Bar w={200} h={7} r={3.5} tone={1} />
                    </div>
                  </div>
                )}
              </div>
            </Window>

            {!compact && (
              <div className="clh-progress clp-resume">
                <div className="clh-xp-label">Resume readiness</div>
                <div className="clh-xp">
                  <Count value={s.cv ? 88 : 76} />
                  <span className="clh-xp-unit">/100</span>
                  <span className="clh-gain" data-on={s.cv || undefined}>+12</span>
                </div>
                <div className="clh-stat">
                  <Check size={14} className="clh-award" />
                  <Bar w={96} h={7} r={3.5} tone={2} />
                </div>
              </div>
            )}
          </>
        )
      }}
    </Stage>
  )
}

function Skill({ name, value }: { name: string; value: number }) {
  return (
    <div className="clp-skill">
      <div className="clp-skill-head">
        <span>{name}</span>
        <span className="clp-skill-value">
          <Count value={value} format={n => `${n}%`} />
        </span>
      </div>
      <Meter value={value / 100} className="clp-meter" />
    </div>
  )
}

function Side() {
  return (
    <nav className="clh-side">
      {[70, 82, 54, 60, 66].map((w, i) => (
        <span key={i} className="clh-nav" data-active={i === 2 || undefined}>
          <Bar w={12} h={12} r={3} tone={i === 2 ? 4 : 2} />
          <Bar w={w} h={6} tone={i === 2 ? 4 : 2} />
        </span>
      ))}
    </nav>
  )
}
