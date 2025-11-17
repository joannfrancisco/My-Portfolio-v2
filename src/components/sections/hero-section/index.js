"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrambleTextPlugin, SplitText);
}

export default function HeroSection() {
  const [isDecoded, setIsDecoded] = useState(false);
  const targetRef = useRef(null);
  const h1Ref = useRef(null);
  const quotesRef = useRef([]);

  const message1 = "Imagination is Power";
  const message2 = "Scroll for more...";
  const scrambleChars = "upperAndLowerCase";

  const quotes = [
    "Code is poetry",
    // "Creativity takes courage",
    // "Design is intelligence made visible",
    // "Every pixel has a purpose",
    // "Simplicity is the ultimate sophistication",
    "Next.js",
    "Tailwind CSS",
    "PostgreSQL",
    "React.js",
    "Node.js",
    "UI/UX Design",
    "HTML + CSS + JavaScript",
    "Figma",
    "Adobe Photoshop & Illustrator",
    "Vercel",
    "GSAP Animation",
    "LottieFiles",
    "ShadCN + Lucide React ",
    "Express.js",
    "Firebase",
    "Typography + Color Palette",
    "RestAPI",
    "TypeScript",
  ];

  // Helper: Get random position
  const getRandomPosition = () => {
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 100);
    return { x, y };
  };

  // Helper: Scramble quote animation
  const scrambleQuote = (quote, text) => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.call(() => {
      const { x, y } = getRandomPosition();
      gsap.set(quote, { x, y });
    })
      .to(quote, {
        delay: Math.random() * 5,
        duration: 1,
        opacity: 1,
        scrambleText: {
          text,
          chars: scrambleChars,
          revealDelay: 0.5,
          speed: 1,
        },
        ease: "power2.out",
      })
      .to(quote, {
        delay: 0.5,
        duration: 1,
        scrambleText: { text: "", chars: scrambleChars },
        opacity: 0,
        ease: "power2.in",
      });
  };

  const toggleScramble = () => {
    if (!targetRef.current) return;

    if (isDecoded) {
      // Going back to scrambled state
      gsap.to(targetRef.current, {
        duration: 1,
        scrambleText: {
          text: "*&@#$@$*&$(@#^)",
          chars: scrambleChars,
          speed: 0.3,
        },
      });
    } else {
      // Decoding: show message1 then message2
      const tl = gsap.timeline();

      tl.to(targetRef.current, {
        duration: 1.5,
        scrambleText: {
          text: message1,
          chars: scrambleChars,
          revealDelay: 0.5,
          speed: 1,
        },
      }).to(
        targetRef.current,
        {
          duration: 1.5,
          scrambleText: {
            text: message2,
            chars: scrambleChars,
            revealDelay: 0.3,
            speed: 1,
          },
        },
        "+=1" // delay before showing message2
      );
    }

    setIsDecoded(!isDecoded);
  };

  useEffect(() => {
    // Init scramble box
    if (targetRef.current) {
      gsap.set(targetRef.current, {
        scrambleText: {
          text: "*&@#$@$*&$(@#^)",
          chars: scrambleChars,
          speed: 0.3,
        },
      });
    }

    // Init quotes
    quotesRef.current.forEach((quote) => {
      if (quote) {
        gsap.set(quote, {
          position: "absolute",
          opacity: 0,
          whiteSpace: "nowrap",
        });
        scrambleQuote(quote, quote.textContent);
      }
    });

    // Animate H1
    if (h1Ref.current) {
      const split = new SplitText(h1Ref.current, { type: "words,lines" });
      gsap.from(split.words, {
        x: "random([-1000, 1000])",
        y: "random([-1000, 1000])",
        opacity: 0,
        ease: "expo.inOut",
        duration: 1.25,
      });
    }
  }, []);

  return (
    // <div className="relative w-screen h-dvh lg:h-screen overflow-hidden text-xs font-semibold z-1">
    <div className="max-w-screen-2xl mx-auto text-xs font-semibold">
      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 max-w-[800pxx] mx-auto px-4 gap-15">
        {/* Headline */}
        <div className="flex flex-col relative">
          <h1
            ref={h1Ref}
            className="self-start pl-0.5 mb-[-5] md:mb-[-10] font-hero tracking-wider "
            style={{ fontSize: "clamp(1rem, 6vw, 2rem)" }}
          >
            FULL-STACK
          </h1>

          <h1
            ref={h1Ref}
            className="font-hero scale-y-150 outline"
            style={{
              fontSize: "clamp(2.4rem, 10vw, 5.8rem)",
            }}
          >
            WEB DEVELOPER
          </h1>
          <h1
            className="self-end font-cursive absolute top-10/12 right-[-5] md:right-[-45]"
            style={{
              fontSize: "clamp(1rem, 6vw, 2.1rem)",
            }}
          >
            Jo Ann Francisco
          </h1>
        </div>

        {/* Scramble Box */}
        <div className="relative w-54 bg-(--light) text-(--dark) border border-(--dark) py-3.5 md:py-5 px-4 rounded-4xl overflow-hidden scale-150 hover:scale-[1.6] transition">
          <span ref={targetRef} className="select-none block w-full text-left">
            *&@#$@$*&$(@#^)
          </span>
          <button
            onClick={toggleScramble}
            type="button"
            className="absolute top-1/2 -translate-y-1/2 right-0 border border-(--dark) h-full aspect-square bg-(--dark) text-(--light) hover:bg-(--hover)/85 transition rounded-full text-[10px] scale-95 cursor-pointer"
          >
            {isDecoded ? "Encrypt" : "Decrypt"}
          </button>
        </div>
      </div>

      {/* Floating Quotes */}
      <div className="opacity-20">
        {quotes.map((quote, index) => (
          <div
            key={index}
            ref={(el) => {
              quotesRef.current[index] = el;
            }}
            className="opacity-0"
          >
            {quote}
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
}
