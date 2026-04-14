'use client';

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const carRef = useRef<HTMLImageElement | null>(null);
  const revealRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const scene = sceneRef.current;
    const hero = heroRef.current;
    const track = trackRef.current;
    const car = carRef.current;
    const reveal = revealRef.current;
    const headline = headlineRef.current;
    const cards = cardsRef.current?.querySelectorAll("[data-stat-card]");

    if (!scene || !hero || !track || !car || !reveal || !headline || !cards?.length) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(car, { x: 0, willChange: "transform" });
      gsap.set(reveal, {
        clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)",
        willChange: "clip-path"
      });

      const introTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      introTimeline.from(headline, {
        opacity: 0,
        y: 22,
        duration: 0.75
      });

      const distance = () => {
        const maxTrackX = track.clientWidth - car.clientWidth;
        return maxTrackX > 0 ? maxTrackX : 0;
      };

      const driveTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: scene,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: hero,
          pinSpacing: false,
          invalidateOnRefresh: true
        }
      });

      driveTimeline
        .to(
          car,
          {
            x: distance,
            duration: 1,
            ease: "none"
          },
          0
        )
        .to(
          reveal,
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1,
            ease: "none"
          },
          0
        )
        .to(
          cards,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.08,
            ease: "power2.out"
          },
          0.35
        );
    }, hero);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="bg-[#eef0f3]">
      <div
        ref={sceneRef}
        className="relative h-[240vh] overflow-clip bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.8),rgba(238,240,243,0.95)_45%,rgba(220,224,229,0.9)_100%)]"
      >
        <section ref={heroRef} className="relative h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute left-1/2 top-[18%] h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-lime-200/40 blur-3xl" />
            <div className="absolute left-[12%] top-[62%] h-[220px] w-[220px] rounded-full bg-sky-200/35 blur-3xl" />
            <div className="absolute right-[8%] top-[58%] h-[200px] w-[200px] rounded-full bg-orange-200/40 blur-3xl" />
          </div>

          <div
            ref={cardsRef}
            className="pointer-events-none absolute inset-0 z-40 mx-auto w-full max-w-[1500px] px-4 md:px-10"
          >
            <article
              data-stat-card
              className="absolute left-1/2 top-[16%] w-[240px] max-w-[44vw] -translate-x-[112%] translate-y-4 rounded-xl border border-lime-300/90 bg-lime-400 p-6 text-lg font-semibold leading-tight text-zinc-900 opacity-0 shadow-lg md:w-[340px] md:-translate-x-[118%] md:text-[31px]"
            >
              58% Increase in pick up point use
            </article>
            <article
              data-stat-card
              className="absolute left-1/2 top-[16%] w-[240px] max-w-[44vw] translate-x-[12%] translate-y-4 rounded-xl border border-zinc-700 bg-zinc-900 p-6 text-lg font-semibold leading-tight text-zinc-100 opacity-0 shadow-lg md:w-[340px] md:translate-x-[18%] md:text-[31px]"
            >
              27% Increase in pick up point use
            </article>
            <article
              data-stat-card
              className="absolute bottom-[16%] left-1/2 w-[250px] max-w-[46vw] -translate-x-[112%] translate-y-4 rounded-xl border border-sky-200 bg-sky-200 p-6 text-lg font-semibold leading-tight text-zinc-900 opacity-0 shadow-lg md:w-[380px] md:-translate-x-[118%] md:text-[31px]"
            >
              23% Decreased in customer phone calls
            </article>
            <article
              data-stat-card
              className="absolute bottom-[16%] left-1/2 w-[250px] max-w-[46vw] translate-x-[12%] translate-y-4 rounded-xl border border-orange-300 bg-orange-400 p-6 text-lg font-semibold leading-tight text-zinc-900 opacity-0 shadow-lg md:w-[380px] md:translate-x-[18%] md:text-[31px]"
            >
              40% Decreased in customer phone calls
            </article>
          </div>

          <div className="absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 px-4 md:px-8 lg:px-14">
            <div
              ref={trackRef}
              className="relative h-28 w-full overflow-visible rounded-xl border border-zinc-600/70 bg-[linear-gradient(100deg,#1f2937_0%,#18181b_45%,#27272a_100%)] shadow-[0_26px_60px_-24px_rgba(17,24,39,0.75)] md:h-36"
            >
              <div className="absolute inset-x-6 top-1/2 h-[2px] -translate-y-1/2 bg-white/20" />
              <div className="absolute inset-x-6 top-1/2 h-[2px] -translate-y-[18px] bg-white/10" />
              <div className="absolute inset-x-6 top-1/2 h-[2px] translate-y-[18px] bg-white/10" />

              <div
                ref={revealRef}
                className="absolute inset-y-4 left-0 z-20 flex w-full items-center justify-center rounded-lg border border-lime-200/80 bg-[linear-gradient(90deg,#84cc16_0%,#a3e635_70%,#84cc16_100%)]"
                style={{ clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)" }}
              >
                <h1
                  ref={headlineRef}
                  className="px-3 text-[18px] font-black uppercase tracking-[0.28em] text-black sm:text-[22px] md:text-[32px] lg:text-[40px]"
                >
                  W E L C O M E I T Z F I Z Z
                </h1>
              </div>

              <img
                ref={carRef}
                src="/orange-sports-car-topdown.svg"
                alt="Top-down orange sports car"
                className="absolute left-0 top-1/2 z-30 h-auto w-[210px] -translate-y-1/2 transform-gpu drop-shadow-[0_10px_18px_rgba(0,0,0,0.35)] select-none md:w-[260px]"
                draggable={false}
                loading="eager"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
