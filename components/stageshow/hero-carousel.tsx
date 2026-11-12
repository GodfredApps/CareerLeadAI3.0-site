"use client"

import { useCallback, useEffect, useRef, useState, type ComponentType } from "react"
import { AnimatePresence, motion, useMotionValue, useTransform, type PanInfo } from "framer-motion"
import { useReducedMotion } from "./kit/reduced-motion"
import CareerLeadChallenge from "./careerlead-hero"
import CareerLeadPaths from "./careerlead-paths"
import "./hero-carousel.css"

// The hero's product carousel. Both slides share one frame (window,
// sidebar and the left card slot), so only the screen inside changes;
// the copy beside it never moves. Each slide plays its story once and
// holds the payoff, then the next one comes in.
//
// Touch: the slide follows the finger 1:1 sideways (vertical scrolling is
// left to the page) and on release commits on distance OR a quick flick,
// carrying its speed into the exit; otherwise it springs straight back.
// Rotation pauses while the pointer, keyboard focus or a finger is on it,
// and never auto-advances under reduced motion.

type Slide = { id: string; label: string; ms: number; Demo: ComponentType<{ play?: "loop" | "once" }> }

const SLIDES: Slide[] = [
  { id: "challenge", label: "Daily challenge", ms: 10000, Demo: CareerLeadChallenge },
  { id: "paths", label: "Career paths", ms: 8500, Demo: CareerLeadPaths },
]

/** A swipe commits past this share of the slide's width... */
const COMMIT_SHARE = 0.25
/** ...or on a flick faster than this (px/s), however short */
const FLICK_SPEED = 500
const SHIFT = 60

const spring = { type: "spring" as const, stiffness: 320, damping: 36 }

const variants = {
  enter: (dir: number) => ({ x: dir * SHIFT, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: -dir * SHIFT, opacity: 0 }),
}

export function HeroCarousel() {
  const reduced = useReducedMotion()
  const [active, setActive] = useState(0)
  const [dir, setDir] = useState(1)
  const [run, setRun] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [dragging, setDragging] = useState(false)
  const paused = hovered || dragging

  const go = useCallback(
    (next: number, direction: number) => {
      if (next === active) return
      setDir(direction)
      setActive(next)
      setRun(r => r + 1)
    },
    [active],
  )

  const step = useCallback((by: 1 | -1) => go((active + by + SLIDES.length) % SLIDES.length, by), [active, go])

  useEffect(() => {
    if (reduced || paused) return
    const t = setTimeout(() => step(1), SLIDES[active]!.ms)
    return () => clearTimeout(t)
  }, [active, run, paused, reduced, step])

  const slide = SLIDES[active]!

  return (
    <div
      className="hc"
      role="region"
      aria-roledescription="carousel"
      aria-label="CareerLead AI product preview"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <div className="hc-tabs" role="tablist" aria-label="Choose a preview">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            className="hc-tab"
            data-active={i === active || undefined}
            onClick={() => go(i, i > active ? 1 : -1)}
          >
            {s.label}
            {i === active && !reduced && (
              <span
                key={run}
                className="hc-tab-progress"
                data-paused={paused || undefined}
                style={{ animationDuration: `${s.ms}ms` }}
                aria-hidden
              />
            )}
          </button>
        ))}
      </div>

      <div className="hc-slides">
        <AnimatePresence initial={false} custom={dir}>
          <SlideView
            key={`${slide.id}-${run}`}
            slide={slide}
            dir={dir}
            reduced={reduced}
            onDragStart={() => setDragging(true)}
            onSwipe={by => {
              setDragging(false)
              if (by) step(by)
            }}
          />
        </AnimatePresence>
      </div>
    </div>
  )
}

type SlideViewProps = {
  slide: Slide
  dir: number
  reduced: boolean
  onDragStart: () => void
  onSwipe: (by: 1 | -1 | 0) => void
}

function SlideView({ slide, dir, reduced, onDragStart, onSwipe }: SlideViewProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  // Linked to the drag, so the slide is exactly as faded as it is moved
  const opacity = useTransform(x, [-320, 0, 320], [0.35, 1, 0.35])
  const { Demo } = slide

  const release = (_: PointerEvent | MouseEvent | TouchEvent, info: PanInfo) => {
    const width = ref.current?.offsetWidth || 360
    const far = Math.abs(info.offset.x) > width * COMMIT_SHARE
    const fast = Math.abs(info.velocity.x) > FLICK_SPEED
    if (!far && !fast) return onSwipe(0)
    // Swiping left (negative) brings in the next slide
    onSwipe(info.offset.x < 0 ? 1 : -1)
  }

  return (
    <motion.div
      ref={ref}
      className="hc-slide"
      custom={dir}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={reduced ? { duration: 0 } : { x: spring, opacity: { duration: 0.3 } }}
      style={{ x, opacity }}
      drag="x"
      dragDirectionLock
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1}
      dragMomentum={false}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 40 }}
      onDragStart={onDragStart}
      onDragEnd={release}
    >
      <Demo play="once" />
    </motion.div>
  )
}
