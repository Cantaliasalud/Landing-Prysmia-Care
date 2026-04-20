import { motion, useReducedMotion } from "framer-motion";

const horizontalLines = [16, 28, 40, 52, 64, 76, 88];
const verticalLines = [8, 18, 28, 38, 48, 58, 68, 78, 88];

const eventMarkers = [
  { x: "54.6%", y: "48.5%", label: "Activación" },
  { x: "84.8%", y: "38.8%", label: "Señal continua" }
];

export default function SignalField() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      id="signal-field"
      className="signal-shell absolute inset-0 isolate overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(4,18,35,0.56)] shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
    >
      <div className="signal-noise" />
      <div className="signal-grid" />
      <div className="signal-vignette" />
      <div className="signal-copy-shade" />

      <div className="absolute inset-x-[3%] top-[14%] h-px bg-gradient-to-r from-transparent via-[rgba(96,141,255,0.22)] to-transparent" />
      <div className="absolute inset-x-[4%] bottom-[15%] h-px bg-gradient-to-r from-transparent via-[rgba(96,141,255,0.18)] to-transparent" />
      <div className="absolute bottom-[13%] left-[8%] top-[14%] w-px bg-gradient-to-b from-transparent via-[rgba(96,141,255,0.14)] to-transparent" />

      {horizontalLines.map((line) => (
        <div
          key={line}
          className="absolute inset-x-0 h-px bg-[rgba(96,141,255,0.08)]"
          style={{ top: `${line}%` }}
        />
      ))}
      {verticalLines.map((line) => (
        <div
          key={line}
          className="absolute inset-y-[12%] w-px bg-[rgba(96,141,255,0.05)]"
          style={{ left: `${line}%` }}
        />
      ))}

      <div className="absolute left-[7.1%] top-[53.7%] h-4 w-4 rounded-full border border-[rgba(96,141,255,0.55)] bg-[rgba(4,18,35,0.92)]" />
      <div className="absolute left-[23.4%] top-[53.7%] h-4 w-4 rounded-full border border-[rgba(96,141,255,0.55)] bg-[rgba(4,18,35,0.92)]" />
      <div className="absolute left-[10.4%] top-[55.4%] h-px w-[10%] bg-gradient-to-r from-[rgba(96,141,255,0.26)] to-transparent" />
      <div className="absolute left-[27.8%] top-[54.2%] h-px w-[12%] border-t border-dashed border-[rgba(96,141,255,0.18)]" />
      {eventMarkers.map((marker, index) => (
        <motion.div
          key={marker.label}
          className="absolute"
          style={{ left: marker.x, top: marker.y }}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 + index * 0.12, ease: "easeOut" }}
        >
          <div className="relative flex items-center gap-3">
            <div className="signal-event">
              <motion.div
                className="signal-event__glow"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { opacity: [0.12, 0.82, 0.12], scale: [0.86, 1.08, 0.86] }
                }
                transition={{
                  duration: marker.label === "Activación" ? 3.2 : 4.4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }}
              />
            </div>
            <span className="signal-label">
              {marker.label}
            </span>
          </div>
        </motion.div>
      ))}

      <div className="absolute inset-x-[5%] inset-y-[14%]">
        <svg viewBox="0 0 1400 760" className="h-full w-full overflow-visible">
          <defs>
            <linearGradient id="baseline-blue" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="rgba(96,141,255,0.06)" />
              <stop offset="100%" stopColor="rgba(96,141,255,0.26)" />
            </linearGradient>
            <linearGradient id="signal-primary" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="rgba(96,141,255,0.06)" />
              <stop offset="38%" stopColor="rgba(96,141,255,0.18)" />
              <stop offset="56%" stopColor="rgba(96,141,255,0.94)" />
              <stop offset="100%" stopColor="rgba(96,141,255,0.92)" />
            </linearGradient>
            <linearGradient id="signal-secondary" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="rgba(96,141,255,0.02)" />
              <stop offset="42%" stopColor="rgba(96,141,255,0.1)" />
              <stop offset="100%" stopColor="rgba(96,141,255,0.52)" />
            </linearGradient>
            <filter id="eventGlow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 16 -8"
                result="glow"
              />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M32 424 L1368 424"
            fill="none"
            stroke="url(#baseline-blue)"
            strokeWidth="1.5"
            strokeDasharray="8 14"
          />

          <motion.path
            d="M36 424 C96 424 120 422 160 420 C204 418 236 418 278 422 C320 426 350 428 388 426 C426 424 452 420 486 410 C520 399 544 384 570 352 C600 314 622 292 652 282 C680 272 710 280 738 308 C770 340 798 350 836 340 C882 327 924 292 972 256 C1020 220 1070 198 1132 188 C1196 178 1268 184 1364 206"
            fill="none"
            stroke="url(#signal-primary)"
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#eventGlow)"
            initial={prefersReducedMotion ? false : { pathLength: 0.15, opacity: 0.45 }}
            animate={prefersReducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.6, ease: [0.2, 0.9, 0.2, 1] }}
          />

          <motion.path
            d="M36 446 C124 446 182 440 248 434 C308 428 366 424 442 430 C518 438 564 420 616 370 C658 330 694 316 738 332 C770 344 812 366 854 368 C920 372 988 344 1082 292 C1178 240 1264 226 1364 248"
            fill="none"
            stroke="url(#signal-secondary)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={prefersReducedMotion ? false : { pathLength: 0.2, opacity: 0.18 }}
            animate={prefersReducedMotion ? undefined : { pathLength: 1, opacity: [0.18, 0.52, 0.18] }}
            transition={{
              duration: 5.4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
          />

          <motion.path
            d="M36 458 C116 454 182 448 236 438 C296 428 354 420 410 418 C470 416 534 402 584 354 C630 309 666 294 706 300 C738 306 778 334 826 342 C900 356 968 326 1050 274 C1154 208 1250 188 1364 192"
            fill="none"
            stroke="rgba(96,141,255,0.14)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeDasharray="4 11"
            initial={prefersReducedMotion ? false : { pathLength: 0.1, opacity: 0 }}
            animate={prefersReducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.15, ease: "easeOut" }}
          />

          <g fill="rgba(96,141,255,0.35)">
            <circle cx="420" cy="425" r="1.8" />
            <circle cx="522" cy="394" r="1.6" />
            <circle cx="640" cy="292" r="1.7" />
            <circle cx="866" cy="340" r="1.6" />
            <circle cx="1116" cy="194" r="1.8" />
          </g>

          <g stroke="rgba(96,141,255,0.18)" strokeWidth="1">
            <path d="M572 352 L572 510" />
            <path d="M1190 190 L1190 460" />
          </g>

          <g>
            <circle cx="572" cy="352" r="4" fill="rgba(249,255,45,0.95)" filter="url(#eventGlow)" />
            <circle cx="1190" cy="190" r="3.5" fill="rgba(249,255,45,0.95)" filter="url(#eventGlow)" />
          </g>
        </svg>
      </div>
    </div>
  );
}
