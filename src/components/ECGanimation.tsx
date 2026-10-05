"use client";

import { motion } from "motion/react";

const BEAT = 78;
const OVERFLOW = 100;
const EXTRA_H = 20;
const PAD = 6;

const P = 8;
const Q = 5;
const R = 29;
const S = 12;
const T = 11;

const DRAW_TIME = 0.75;
const CENTER_DELAY = 0.45;
const LEFT_FADE = { delay: 0.36, duration: 0.22 };
const RIGHT_FADE = { delay: 0.81, duration: 0.28 };

export type LinkGeometry = {
  left: number;
  right: number;
  center: number;
  baselineY: number;
};

type Props = {
  geometry: LinkGeometry[];
  navSize: { width: number; height: number };
  activeIndex: number;
  animateECG: boolean;
  isDark: boolean;
  animationKey: number;
};

export default function ECGAnimation({
  geometry,
  navSize,
  activeIndex,
  animateECG,
  isDark,
  animationKey,
}: Props) {
  const current = geometry[activeIndex];
  if (!current) return null;

  const prev = geometry[activeIndex - 1];
  const next = geometry[activeIndex + 1];

  const left = current.left - PAD;
  const right = current.right + PAD;
  const y = current.baselineY;

  // Internal gaps stay original.
  // Only the two true outer waves get a full 78px region.
  const leftEdge = prev ? prev.right + 8 : left - BEAT;
  const rightEdge = next ? next.left - 8 : right + BEAT;

  const path = makeECG({
    leftEdge,
    left,
    right,
    rightEdge,
    y,
    fullLeft: activeIndex === 0,
    fullRight: activeIndex === geometry.length - 1,
  });

  const centerPath = `M ${left} ${y} L ${right} ${y}`;

  const width = navSize.width + OVERFLOW * 2;
  const height = navSize.height + EXTRA_H;
  const viewX = -OVERFLOW;

  const maskId = `ecg-mask-${animationKey}`;
  const glowId = `ecg-glow-${animationKey}`;

  const color = isDark ? "#68D5FF" : "#1689C9";
  const glowOpacity = isDark ? 0.18 : 0.12;

  const centerLine = (animated: boolean) => (
    <>
      <motion.path
        d={centerPath}
        fill="none"
        stroke={color}
        strokeWidth={8}
        strokeLinecap="round"
        initial={animated ? { opacity: 0 } : undefined}
        animate={{ opacity: glowOpacity }}
        transition={
          animated
            ? { delay: CENTER_DELAY, duration: 0.04 }
            : undefined
        }
      />

      <motion.path
        d={centerPath}
        fill="none"
        stroke={color}
        strokeWidth={3}
        strokeLinecap="round"
        initial={animated ? { opacity: 0 } : undefined}
        animate={{ opacity: 1 }}
        transition={
          animated
            ? { delay: CENTER_DELAY, duration: 0.04 }
            : undefined
        }
      />
    </>
  );

  return (
    <svg
      key={animationKey}
      viewBox={`${viewX} 0 ${width} ${height}`}
      width={width}
      height={height}
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: -OVERFLOW,
        width,
        height,
        overflow: "visible",
        pointerEvents: "none",
        zIndex: 4,
      }}
    >
      <defs>
        <filter
          id={glowId}
          x="-50%"
          y="-150%"
          width="200%"
          height="400%"
        >
          <feGaussianBlur stdDeviation="1.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <mask
          id={maskId}
          maskUnits="userSpaceOnUse"
          x={viewX}
          y={0}
          width={width}
          height={height}
        >
          <rect
            x={viewX}
            y={0}
            width={width}
            height={height}
            fill="black"
          />

          <motion.rect
            x={leftEdge}
            y={0}
            width={Math.max(0, left - leftEdge)}
            height={height}
            fill="white"
            initial={{ opacity: 1 }}
            animate={{ opacity: animateECG ? 0 : 1 }}
            transition={{
              ...LEFT_FADE,
              ease: "easeOut",
            }}
          />

          <rect
            x={left}
            y={0}
            width={right - left}
            height={height}
            fill="white"
          />

          <motion.rect
            x={right}
            y={0}
            width={Math.max(0, rightEdge - right)}
            height={height}
            fill="white"
            initial={{ opacity: 1 }}
            animate={{ opacity: animateECG ? 0 : 1 }}
            transition={{
              ...RIGHT_FADE,
              ease: "easeOut",
            }}
          />
        </mask>
      </defs>

      {!animateECG && centerLine(false)}

      {animateECG && (
        <>
          {centerLine(true)}

          <motion.path
            d={path}
            fill="none"
            stroke={color}
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            mask={`url(#${maskId})`}
            filter={`url(#${glowId})`}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              pathLength: {
                duration: DRAW_TIME,
                ease: "linear",
              },
            }}
          />
        </>
      )}
    </svg>
  );
}

/* =========================================================
   ECG PATH
========================================================= */

type ECGPathProps = {
  leftEdge: number;
  left: number;
  right: number;
  rightEdge: number;
  y: number;
  fullLeft: boolean;
  fullRight: boolean;
};

function makeECG({
  leftEdge,
  left,
  right,
  rightEdge,
  y,
  fullLeft,
  fullRight,
}: ECGPathProps) {
  const leftWidth = fullLeft
    ? BEAT
    : Math.min(BEAT, Math.max(1, left - leftEdge));

  const rightWidth = fullRight
    ? BEAT
    : Math.min(BEAT, Math.max(1, rightEdge - right));

  const leftStart = left - leftWidth;
  const rightStart = right;

  const lx = (n: number) => leftStart + leftWidth * n;
  const rx = (n: number) => rightStart + rightWidth * n;

  return [
    `M ${leftEdge} ${y}`,
    `L ${leftStart} ${y}`,

    // LEFT PQRST
    beat(lx, y),

    `L ${left} ${y}`,
    `L ${right} ${y}`,

    // RIGHT PQRST
    beat(rx, y),

    `L ${rightStart + rightWidth} ${y}`,
    `L ${rightEdge} ${y}`,
  ].join(" ");
}

/* =========================================================
   ONE PQRST COMPLEX
========================================================= */

function beat(
  x: (n: number) => number,
  y: number
) {
  return [
    `L ${x(0.06)} ${y}`,

    // P
    `C ${x(0.085)} ${y}
       ${x(0.105)} ${y - P}
       ${x(0.15)} ${y - P}`,

    `C ${x(0.195)} ${y - P}
       ${x(0.215)} ${y}
       ${x(0.245)} ${y}`,

    // QRS
    `L ${x(0.34)} ${y}`,
    `L ${x(0.385)} ${y + Q}`,
    `L ${x(0.425)} ${y - R}`,
    `L ${x(0.465)} ${y + S}`,
    `L ${x(0.515)} ${y}`,
    `L ${x(0.60)} ${y}`,

    // T
    `C ${x(0.64)} ${y}
       ${x(0.675)} ${y - T}
       ${x(0.735)} ${y - T}`,

    `C ${x(0.795)} ${y - T}
       ${x(0.835)} ${y}
       ${x(0.89)} ${y}`,
  ].join(" ");
}