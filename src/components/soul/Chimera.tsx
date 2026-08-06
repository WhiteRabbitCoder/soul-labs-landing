import { motion, useReducedMotion } from "framer-motion";

/**
 * Original conceptual composition: a small hare-moth chimera with branching
 * antlers, drawn as a laboratory diagram. Brown line work, cream surfaces,
 * minimal orange accents.
 */
export function Chimera({ className }: { className?: string }) {
  const reduced = useReducedMotion();

  const float = reduced
    ? {}
    : {
        animate: { y: [0, -10, 0] },
        transition: { duration: 9, repeat: Infinity, ease: "easeInOut" as const },
      };

  const breathe = reduced
    ? {}
    : {
        animate: { scale: [1, 1.02, 1], opacity: [0.92, 1, 0.92] },
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
      };

  return (
    <div className={className}>
      <motion.svg
        viewBox="0 0 620 720"
        role="img"
        aria-label="Diagrama de laboratorio con una quimera de liebre, alas de polilla y astas ramificadas"
        className="h-full w-full"
        {...float}
      >
        <defs>
          <pattern id="sl-halftone" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="1.6" cy="1.6" r="1.1" className="fill-tierra/25" />
          </pattern>
          <pattern id="sl-halftone-fine" width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="1.2" cy="1.2" r="0.7" className="fill-alma/40" />
          </pattern>
          <clipPath id="sl-clip-card">
            <rect x="52" y="86" width="516" height="556" rx="2" />
          </clipPath>
        </defs>

        {/* collage backing cards */}
        <rect
          x="86"
          y="46"
          width="470"
          height="596"
          className="fill-papel stroke-tierra/30"
          strokeWidth="1"
        />
        <rect
          x="52"
          y="86"
          width="516"
          height="556"
          className="fill-luz stroke-tierra/45"
          strokeWidth="1.4"
        />
        <g clipPath="url(#sl-clip-card)">
          <rect x="52" y="430" width="516" height="212" fill="url(#sl-halftone)" />
          <rect x="52" y="86" width="150" height="120" fill="url(#sl-halftone-fine)" opacity="0.5" />
        </g>

        {/* technical grid + measurement circles */}
        <g className="stroke-tierra/25" strokeWidth="1" fill="none">
          <line x1="52" y1="196" x2="568" y2="196" strokeDasharray="3 6" />
          <line x1="200" y1="86" x2="200" y2="642" strokeDasharray="3 6" />
          <line x1="440" y1="86" x2="440" y2="642" strokeDasharray="3 6" />
          <circle cx="310" cy="372" r="196" />
          <circle cx="310" cy="372" r="140" strokeDasharray="2 8" />
        </g>

        <motion.g {...breathe} style={{ transformOrigin: "310px 400px" }}>
          {/* antlers */}
          <g
            className="stroke-tierra"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M272 300 C258 262 250 236 254 206" />
            <path d="M254 232 C238 218 226 214 210 216" />
            <path d="M256 212 C246 196 236 190 222 186" />
            <path d="M258 258 C244 250 234 250 222 254" />
            <path d="M348 300 C362 262 370 236 366 206" />
            <path d="M366 232 C382 218 394 214 410 216" />
            <path d="M364 212 C374 196 384 190 398 186" />
            <path d="M362 258 C376 250 386 250 398 254" />
          </g>
          <circle cx="210" cy="216" r="4" className="fill-alma" />
          <circle cx="410" cy="216" r="4" className="fill-alma" />

          {/* wings */}
          <g className="stroke-tierra" strokeWidth="2" fill="none">
            <path
              d="M300 400 C232 352 158 358 132 404 C108 448 152 500 214 496 C262 493 292 456 300 418 Z"
              className="fill-papel"
            />
            <path
              d="M320 400 C388 352 462 358 488 404 C512 448 468 500 406 496 C358 493 328 456 320 418 Z"
              className="fill-papel"
            />
            <path d="M300 408 C258 400 216 410 186 432" strokeWidth="1.2" />
            <path d="M300 424 C264 428 232 448 214 472" strokeWidth="1.2" />
            <path d="M320 408 C362 400 404 410 434 432" strokeWidth="1.2" />
            <path d="M320 424 C356 428 388 448 406 472" strokeWidth="1.2" />
          </g>
          <circle cx="196" cy="424" r="9" className="fill-alma/85" />
          <circle cx="424" cy="424" r="9" className="fill-alma/85" />

          {/* hare body */}
          <path
            d="M310 316 C346 316 366 344 366 384 C366 432 348 478 310 496 C272 478 254 432 254 384 C254 344 274 316 310 316 Z"
            className="fill-luz stroke-tierra"
            strokeWidth="2.6"
          />
          {/* ears */}
          <path
            d="M292 322 C282 286 282 258 292 236 C302 254 306 288 302 320"
            className="fill-luz stroke-tierra"
            strokeWidth="2.4"
          />
          <path
            d="M328 322 C338 286 338 258 328 236 C318 254 314 288 318 320"
            className="fill-luz stroke-tierra"
            strokeWidth="2.4"
          />
          {/* face */}
          <path d="M292 366 C296 362 302 362 306 366" className="stroke-tierra" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          <path d="M314 366 C318 362 324 362 328 366" className="stroke-tierra" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          <path d="M304 386 L310 392 L316 386" className="stroke-alma" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M282 430 C296 442 324 442 338 430" className="stroke-tierra/60" strokeWidth="1.4" fill="none" />
        </motion.g>

        {/* editorial notes */}
        <g className="fill-tierra/70" fontSize="11" fontFamily="Manrope, sans-serif" letterSpacing="1.6">
          <text x="70" y="112">FIG. 01</text>
          <text x="70" y="628">QUIMERA / OBSERVACIÓN CONTINUA</text>
          <text x="452" y="112">ESC. 1:1</text>
        </g>
        <g className="stroke-alma" strokeWidth="1.4" fill="none">
          <path d="M132 566 L206 566" />
          <path d="M132 562 L132 570" />
          <path d="M206 562 L206 570" />
        </g>
        <circle cx="502" cy="566" r="14" className="stroke-tierra/50 fill-none" strokeWidth="1" />
        <circle cx="502" cy="566" r="4" className="fill-alma" />
      </motion.svg>
    </div>
  );
}
