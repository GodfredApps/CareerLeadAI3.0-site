"use client"

import { useLayoutEffect, useRef, useState, type ReactNode } from "react"
import { Stage } from "../kit/stage"
import type { Act } from "../kit/act"
import { Bar } from "../kit/window"
import { Chart } from "../kit/chart"
import { Check } from "../kit/parts/Check"
import { Meter } from "../kit/parts/Meter"
import { Collapse } from "../kit/motion/Collapse"
import "./bento.css"

// The homepage's platform section as one bento (stageshow references/bento.md).
//
//   Tile       Span   Kind       The one thing                         Moves
//   Coach      2 x 1  Hero UI    a question and the coach's answer     the answer drops in
//   Markets    1 x 1  Statement  "Built for Ghana, Nigeria and Kenya"  none
//   Skills     1 x 1  Component  one skill and how far along it is     the meters fill
//   Insights   1 x 1  Diagram    demand by month, one bar lit           the bars grow
//   Learning   1 x 1  Component  the next course, ticked                the tick draws
//
// One chat panel in the whole grid (the hero's), no window chrome. Neighbors
// differ in kind across and down. Each picture is its own Stage at 1:1,
// measured to its slot, pinned to the tile's bottom; copy is page text.
// Each tile plays its beat once as the grid scrolls in, 110ms apart.

const STEP = 110
const LEAD = 450

type Beat = { on: boolean }
const before: Beat = { on: false }
const after: Beat = { on: true }
const beat = (i: number) => async (a: Act<Beat>) => {
  await a.wait(LEAD + i * STEP)
  await a.set({ on: true })
}

function usePictureWidth() {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(340)
  useLayoutEffect(() => {
    const node = ref.current
    if (!node) return
    const measure = () => setWidth(Math.max(1, node.getBoundingClientRect().width))
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  return [ref, width] as const
}

type TileProps = { area: string; title: ReactNode; children?: ReactNode; picture?: ReactNode; dark?: boolean }

function Tile({ area, title, children, picture, dark }: TileProps) {
  return (
    <section className={`cb-tile cb-tile--${area}`} data-dark={dark || undefined}>
      <p className="cb-copy">
        {title} {children}
      </p>
      {picture}
    </section>
  )
}

/* ---------------- Coach (hero) ---------------- */

function Coach() {
  const [picture, width] = usePictureWidth()
  const compact = width < 560
  return (
    <Tile
      area="hero"
      title={<b>Ask your AI career coach.</b>}
      picture={
        <div ref={picture} className="cb-picture cb-picture--hero">
          <Stage<Beat> width={width} height={compact ? 270 : 262} initial={before} poster={after} play="once" script={beat(0)} className="cb-stage">
            {s => (
              <div className="cb-chat" data-compact={compact || undefined}>
                <div className="cb-ask">How do I negotiate my first salary offer in Accra?</div>
                <Collapse open={s.on} reveal="drop">
                  <div className="cb-answer">
                    <div className="cb-answer-lead">Anchor on the role&apos;s market range, then ask for the top of it.</div>
                    <div className="cb-answer-rest">
                      <Bar w={compact ? 230 : 380} h={7} r={3.5} tone={2} />
                      <Bar w={compact ? 200 : 330} h={7} r={3.5} tone={2} />
                      <Bar w={compact ? 160 : 250} h={7} r={3.5} tone={2} />
                    </div>
                  </div>
                </Collapse>
                <div className="cb-composer">
                  <Bar w={compact ? 120 : 180} h={7} r={3.5} tone={2} />
                  <span className="cb-send" aria-hidden />
                </div>
              </div>
            )}
          </Stage>
        </div>
      }
    >
      Specific answers on interviews, CVs, salaries and job search.
    </Tile>
  )
}

/* ---------------- Markets (statement) ---------------- */

function Markets() {
  return (
    <section className="cb-tile cb-tile--markets" data-dark>
      <p className="cb-statement">Built for Ghana, Nigeria and Kenya.</p>
      <p className="cb-statement-sub">The salaries, employers and job markets you actually face.</p>
    </section>
  )
}

/* ---------------- Skills (component) ---------------- */

function Skills() {
  return (
    <Tile
      area="skills"
      title={<b>Know your gaps.</b>}
      picture={
        <div className="cb-picture cb-picture--small">
          <Stage<Beat> width={320} height={170} initial={before} poster={after} play="once" script={beat(1)} className="cb-stage">
            {s => (
              <div className="cb-card cb-skills">
                <div className="cb-skill">
                  <div className="cb-skill-head">
                    <span className="cb-skill-name">Data analysis</span>
                    <span className="cb-skill-value">72%</span>
                  </div>
                  <Meter value={s.on ? 0.72 : 0} className="cb-meter" />
                </div>
                <div className="cb-skill">
                  <div className="cb-skill-head">
                    <Bar w={96} h={7} r={3.5} tone={3} />
                  </div>
                  <Meter value={s.on ? 0.48 : 0} tone="ink" className="cb-meter" />
                </div>
                <div className="cb-skill">
                  <div className="cb-skill-head">
                    <Bar w={74} h={7} r={3.5} tone={3} />
                  </div>
                  <Meter value={s.on ? 0.3 : 0} tone="ink" className="cb-meter" />
                </div>
              </div>
            )}
          </Stage>
        </div>
      }
    >
      See where you stand on the skills your path needs.
    </Tile>
  )
}

/* ---------------- Insights (diagram) ---------------- */

const DEMAND = [4, 5, 4.5, 6, 5.5, 7, 6.5, 8.5]

function Insights() {
  return (
    <Tile
      area="insights"
      title={<b>Read the market.</b>}
      picture={
        <div className="cb-picture cb-picture--small">
          <Stage<Beat> width={320} height={170} initial={before} poster={after} play="once" script={beat(2)} className="cb-stage">
            {s => (
              <div className="cb-chart">
                <Chart kind="bars" data={DEMAND} width={256} height={120} show={s.on} max={9} className="cb-bars" />
              </div>
            )}
          </Stage>
        </div>
      }
    >
      Demand signals for the roles you are aiming at.
    </Tile>
  )
}

/* ---------------- Learning (component) ---------------- */

function Learning() {
  return (
    <Tile
      area="learning"
      title={<b>Learn what counts.</b>}
      picture={
        <div className="cb-picture cb-picture--small">
          <Stage<Beat> width={320} height={170} initial={before} poster={after} play="once" script={beat(3)} className="cb-stage">
            {s => (
              <div className="cb-card cb-courses">
                <div className="cb-course" data-done={s.on || undefined}>
                  <Check on={s.on} size={18} />
                  <span className="cb-course-name">SQL for analysts</span>
                </div>
                <div className="cb-course">
                  <span className="cb-ring" aria-hidden />
                  <Bar w={132} h={7} r={3.5} tone={3} />
                </div>
                <div className="cb-course">
                  <span className="cb-ring" aria-hidden />
                  <Bar w={104} h={7} r={3.5} tone={3} />
                </div>
              </div>
            )}
          </Stage>
        </div>
      }
    >
      Priorities tied to the path you chose.
    </Tile>
  )
}

export function PlatformBento() {
  return (
    <div className="cl-bento">
      <div className="cb-grid">
        <Coach />
        <Markets />
        <Skills />
        <Insights />
        <Learning />
      </div>
    </div>
  )
}
