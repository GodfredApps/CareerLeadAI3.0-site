"use client"

import { Award, Check, Flame, X } from 'lucide-react'
import { Stage } from '../kit/stage'
import type { Act } from '../kit/act'
import { Bar, Window } from '../kit/window'
import { Badge } from '../kit/controls/Badge'
import { Collapse } from '../kit/motion/Collapse'
import { Count } from '../kit/motion/Count'
import { Roll } from '../kit/motion/Roll'
import { States } from '../kit/motion/States'
import './hero.css'

// CareerLead AI's homepage hero: one Daily Career Challenge, played.
// Beats: a wrong pick shows the hint on the card; the right pick turns
// green and the feedback line rolls to the answer; the progress card
// rises over the sidebar carrying +20 XP, and the streak rolls 1 to 2.
// The payoff holds, then what the loop added leaves around the anchor
// (the question and its options stay) in one reverse stagger.
//
// Real strings: the window title, the question, its prompt, the three
// ads, the feedback line, the XP total and the streak. The rest is bars.
//
// The progress card is present from the first frame. Each loop is a new
// day, so its totals never rewind: they carry on from where the last loop
// left them. `day` lives outside scene state and moves at the seam in the
// same snap that clears `earned`, so the shown numbers do not change.

type Pick = 'a' | 'b' | 'c'
type S = { wrong: Pick | null; right: Pick | null; feedback: 'none' | 'hint' | 'solved'; earned: boolean; gain: boolean }

const initial: S = { wrong: null, right: null, feedback: 'none', earned: false, gain: false }
const POSTER: S = { wrong: 'a', right: 'c', feedback: 'solved', earned: true, gain: true }

const REST = { wide: { x: 640, y: 560 }, compact: { x: 320, y: 330 } }
const BASE_XP = 120
let day = 0
const xpFor = (earned: boolean) => BASE_XP + 20 * (day + (earned ? 1 : 0))
const streakFor = (earned: boolean) => 1 + day + (earned ? 1 : 0)

const ADS: { id: Pick; role: string; pay: string }[] = [
  { id: 'a', role: 'Admin Officer, Accra', pay: 'GHS 3,200 a month' },
  { id: 'b', role: 'Sales Rep, Kumasi', pay: 'GHS 2,800 + commission' },
  { id: 'c', role: 'Data Entry, remote', pay: 'GHS 6,000 · pay a GHS 300 fee' },
]

const scriptFor = (once: boolean) => async (a: Act<S>) => {
  await a.wait(900)
  a.mark('wrong')
  await a.move('opt-a')
  await a.wait(250)
  await a.click()
  await a.set({ wrong: 'a', feedback: 'hint' })
  await a.wait(1700)

  a.mark('right')
  await a.move('opt-c')
  await a.wait(250)
  await a.click()
  await a.set({ right: 'c', feedback: 'solved' })
  await a.wait(600)
  a.mark('payoff')
  await a.set({ earned: true, gain: true })
  void a.move(REST[a.layout])
  if (once) return
  await a.wait(2400)

  // The +20 fades first; then the day turns over
  await a.set({ gain: false })
  await a.wait(400)

  // A new day: the earned totals become the base, unseen (same numbers),
  // then what the loop added leaves in a reverse stagger around the card
  day += 1
  await a.snap({ earned: false })
  await a.set({ feedback: 'none' })
  await a.wait(70)
  await a.set({ right: null })
  await a.wait(70)
  await a.set({ wrong: null })
  await a.wait(900)
}

const SCRIPT_LOOP = scriptFor(false)
const SCRIPT_ONCE = scriptFor(true)

export default function CareerLeadHero({ play = 'loop' }: { play?: 'loop' | 'once' }) {
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
      cursor={{ at: REST }}
      className="clh"
    >
      {(s, _rect, layout) => {
        const compact = layout === 'compact'
        return (
          <>
            <Window url="app.careerlead.ai/challenge" className="clh-win" sidebarWidth={150} sidebar={compact ? undefined : <Side />}>
              <div className="clh-body">
                {!compact && <div className="clh-title">Daily Career Challenge</div>}
                <div className="clh-card">
                  <div className="clh-q">Spot the fake job</div>
                  <div className="clh-prompt">Which of these ads is a scam?</div>
                  <div className="clh-opts">
                    {ADS.map(ad => {
                      const state = s.right === ad.id ? 'right' : s.wrong === ad.id ? 'wrong' : 'idle'
                      return (
                        <div key={ad.id} className="clh-opt" data-target={`opt-${ad.id}`} data-cursor="pointer" data-state={state}>
                          <States
                            className="clh-mark"
                            value={state}
                            states={{
                              idle: <span className="clh-letter">{ad.id.toUpperCase()}</span>,
                              wrong: <X size={14} strokeWidth={2.5} />,
                              right: <Check size={14} strokeWidth={2.5} />,
                            }}
                          />
                          <span className="clh-lines">
                            <span className="clh-role">{ad.role}</span>
                            <span className="clh-pay">{ad.pay}</span>
                          </span>
                        </div>
                      )
                    })}
                  </div>
                  <Collapse open={s.feedback !== 'none'}>
                    <div className="clh-feedback" data-tone={s.feedback === 'solved' ? 'right' : 'hint'}>
                      <Roll>{feedbackText(s.feedback, compact)}</Roll>
                      {compact && (
                        <span className="clh-inline-xp" data-on={s.gain || undefined}>
                          <Badge tone="accent">+20 XP</Badge>
                        </span>
                      )}
                    </div>
                  </Collapse>
                </div>
                {!compact && (
                  <div className="clh-filler">
                    <Bar w={120} h={8} r={4} tone={2} />
                    <div className="clh-filler-row">
                      <Bar w={64} h={22} r={6} tone={1} />
                      <Bar w={64} h={22} r={6} tone={1} />
                      <Bar w={64} h={22} r={6} tone={1} />
                    </div>
                    <div className="clh-filler-card">
                      <Bar w={150} h={8} r={4} tone={2} />
                      <Bar w={250} h={7} r={3.5} tone={1} />
                      <Bar w={200} h={7} r={3.5} tone={1} />
                    </div>
                  </div>
                )}
              </div>
            </Window>

            {!compact && (
              <div className="clh-progress">
                <div className="clh-xp-label">Your progress</div>
                <div className="clh-xp">
                  <Count value={xpFor(s.earned)} />
                  <span className="clh-xp-unit">XP</span>
                  <span className="clh-gain" data-on={s.gain || undefined}>+20</span>
                </div>
                <div className="clh-stat">
                  <Flame size={14} className="clh-flame" />
                  <Roll>{`${streakFor(s.earned)}-day streak`}</Roll>
                </div>
                <div className="clh-stat">
                  <Award size={14} className="clh-award" />
                  <Bar w={84} h={7} r={3.5} tone={2} />
                </div>
              </div>
            )}

          </>
        )
      }}
    </Stage>
  )
}

function Side() {
  return (
    <nav className="clh-side">
      {[70, 54, 82, 60, 66].map((w, i) => (
        <span key={i} className="clh-nav" data-active={i === 1 || undefined}>
          <Bar w={12} h={12} r={3} tone={i === 1 ? 4 : 2} />
          <Bar w={w} h={6} tone={i === 1 ? 4 : 2} />
        </span>
      ))}
    </nav>
  )
}

function feedbackText(feedback: S['feedback'], compact: boolean): string {
  if (feedback === 'solved') return compact ? 'Solved. It asks for a fee.' : 'Solved. Ad C asks you for money.'
  return compact ? 'Not quite. 1 try left' : 'Not quite. Real employers pay you. 1 try left'
}
