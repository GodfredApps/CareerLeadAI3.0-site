"use client"

import { Stage } from '../kit/stage'
import type { Act } from '../kit/act'
import { Bar, Window } from '../kit/window'
import { Button } from '../kit/controls/Button'
import { Collapse } from '../kit/motion/Collapse'
import { Stream } from '../kit/motion/Stream'
import '../careerlead-hero/hero.css'
import './steps.css'

// How it works, step 3: ask the coach. The question is already sent; the
// coach thinks, its answer streams in word by word with its height, then a
// next action opens under it. No cursor: the story is the answer.
//
// Real strings: the question, the answer, the action. The rest is bars.

const ANSWER =
  'Anchor on the market range for analysts in Accra, then ask for the top of it. Lead with the dashboards you shipped, not your years.'
const WORDS = ANSWER.split(' ').length

type S = { thinking: boolean; words: number; action: boolean }

const initial: S = { thinking: false, words: 0, action: false }
const POSTER: S = { thinking: false, words: WORDS, action: true }

const WORD_MS = 70

const SCRIPT = async (a: Act<S>) => {
  await a.wait(600)
  await a.set({ thinking: true })
  await a.wait(1100)
  await a.set({ thinking: false })
  for (let n = 1; n <= WORDS; n += 1) {
    await a.set({ words: n })
    await a.wait(WORD_MS)
  }
  await a.wait(500)
  await a.set({ action: true })
}

export default function CareerLeadCoach() {
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
        const answering = s.words > 0
        return (
          <Window url="app.careerlead.ai/coach" className="cls-win">
            <div className="cls-body cls-thread">
              <div className="cls-ask">How do I negotiate my first salary offer?</div>

              <div className="cls-reply">
                <span className="cls-coach" aria-hidden />
                <div className="cls-reply-body">
                  <span className="cls-thinking" data-on={(s.thinking && !answering) || undefined}>
                    Thinking…
                  </span>
                  <Collapse open={answering} reveal="clip">
                    <p className="cls-answer-text">
                      <Stream text={ANSWER} count={s.words} />
                    </p>
                  </Collapse>
                  <Collapse open={s.action} reveal="drop">
                    <div className="cls-action-wrap">
                      <div className="cls-action">
                        <span className="cls-action-text">{compact ? 'Practise the ask' : 'Practise the ask in a mock call'}</span>
                        <Button variant="primary" size="small">Start</Button>
                      </div>
                    </div>
                  </Collapse>
                </div>
              </div>

              <div className="cls-composer">
                <Bar w={compact ? 120 : 200} h={7} r={3.5} tone={2} />
                <span className="cls-send" aria-hidden />
              </div>
            </div>
          </Window>
        )
      }}
    </Stage>
  )
}
