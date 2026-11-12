"use client"

import type { ReactNode } from 'react'
import { Stage } from '../kit/stage'
import type { Act } from '../kit/act'
import { Bar, Window } from '../kit/window'
import { Badge } from '../kit/controls/Badge'
import { Count } from '../kit/motion/Count'
import { Meter } from '../kit/parts/Meter'
import '../careerlead-hero/hero.css'
import './steps.css'

// How it works, step 1: the profile fills in. A system story, no cursor:
// the CV's experience lands, then the person's values, then their goal,
// and the profile strength climbs with each one (45 to 90).
//
// Real strings: the title, the strength label and value, the three row
// labels, the role line, the three values and the goal. The rest is bars.

type S = { exp: boolean; values: boolean; goal: boolean }

const initial: S = { exp: false, values: false, goal: false }
const POSTER: S = { exp: true, values: true, goal: true }

const SCRIPT = async (a: Act<S>) => {
  await a.wait(700)
  await a.set({ exp: true })
  await a.wait(1000)
  await a.set({ values: true })
  await a.wait(1000)
  await a.set({ goal: true })
}

const strength = (s: S) => 45 + (s.exp ? 15 : 0) + (s.values ? 15 : 0) + (s.goal ? 15 : 0)

export default function CareerLeadProfile() {
  return (
    <Stage<S>
      width={600}
      height={440}
      compact={{ below: 520, width: 358, height: 358 }}
      theme="dark"
      accent="#22bfae"
      initial={initial}
      poster={POSTER}
      script={SCRIPT}
      play="once"
      className="clh cls"
    >
      {(s, _rect, layout) => {
        const compact = layout === 'compact'
        const value = strength(s)
        return (
          <Window url="app.careerlead.ai/profile" className="cls-win">
            <div className="cls-body">
              <div className="clh-title">Your profile</div>
              <div className="clh-card cls-card">
                <div className="cls-strength">
                  <span className="cls-label">Profile strength</span>
                  <span className="cls-value">
                    <Count value={value} format={n => `${n}%`} />
                  </span>
                </div>
                <Meter value={value / 100} className="clp-meter" />

                <div className="cls-rows">
                  <Row label="Experience" open={s.exp}>
                    <span className="cls-text">{compact ? 'Data analyst · 2 yrs' : 'Junior data analyst · 2 years'}</span>
                  </Row>
                  <Row label="Values" open={s.values}>
                    <span className="cls-chips">
                      <Badge tone="accent">Impact</Badge>
                      <Badge tone="accent">Growth</Badge>
                      {!compact && <Badge tone="accent">Stability</Badge>}
                    </span>
                  </Row>
                  <Row label="Goal" open={s.goal}>
                    <span className="cls-text">Move into data science</span>
                  </Row>
                </div>
              </div>
              {!compact && (
                <div className="clh-filler-card cls-filler">
                  <Bar w={150} h={8} r={4} tone={2} />
                  <Bar w={260} h={7} r={3.5} tone={1} />
                </div>
              )}
            </div>
          </Window>
        )
      }}
    </Stage>
  )
}

function Row({ label, open, children }: { label: string; open: boolean; children: ReactNode }) {
  // The empty state is a bar where the answer will go; the answer lands
  // in the same cell as the bar fades, so the row never changes height.
  return (
    <div className="cls-row">
      <span className="cls-row-label">{label}</span>
      <span className="cls-row-value">
        <span className="cls-empty" data-off={open || undefined}>
          <Bar w={120} h={7} r={3.5} tone={2} />
        </span>
        <span className="cls-answer" data-on={open || undefined}>
          {children}
        </span>
      </span>
    </div>
  )
}
