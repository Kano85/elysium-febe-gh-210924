'use client';
import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const images = [
  { src: '/images/image-4.jpg', width: 400, height: 225 },
  { src: '/images/image-2.jpg', width: 400, height: 225 },
  { src: '/images/img3.jpg', width: 400, height: 225 },
];

// Helper function for seamless horizontal looping
function horizontalLoop(items: HTMLElement[], config: any) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: 'none' },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
    length = items.length,
    startX = items[0].offsetLeft - (parseFloat(config.paddingLeft) || 0), // Adjust startX to account for left padding
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1),
    totalWidth,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;

  // Convert x to xPercent and populate widths/xPercents arrays
  gsap.set(items, {
    xPercent: (i, el) => {
      let w = (widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px')));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, 'x', 'px')) / w) * 100 +
          gsap.getProperty(el, 'xPercent')
      );
      return xPercents[i];
    },
  });

  gsap.set(items, { x: 0 });

  // Calculate total width of all items
  totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      gsap.getProperty(items[length - 1], 'scaleX') +
    (parseFloat(config.paddingRight) || 0);

  // Create animation timeline
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop =
      distanceToStart + widths[i] * gsap.getProperty(item, 'scaleX');

    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add('label' + i, distanceToStart / pixelsPerSecond);

    times[i] = distanceToStart / pixelsPerSecond;
  }

  // Make the transition more seamless by offsetting the start/end positions
  const firstItem = items[0];
  const lastItem = items[length - 1];
  gsap.set(firstItem, { position: 'relative', left: '-20px' });
  gsap.set(lastItem, { position: 'relative', right: '-20px' });

  // Helper methods for navigating the loop
  function toIndex(index, vars) {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length); // Always go in the shortest direction
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      // If wrapping the timeline's playhead, make adjustments
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }

  tl.next = (vars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true); // Pre-render for performance

  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }

  return tl;
}

export default function Marquee() {
  const marquee1Ref = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);
  const loops = useRef<gsap.core.Timeline[]>([]);
  const [mounted, setMounted] = useState(false);
  const [cloneCount, setCloneCount] = useState(3); // Initial safe value

  useEffect(() => {
    setMounted(true);
    // Calculate clones needed only after mounting
    const calculateClones = () => {
      const viewportWidth = window.innerWidth;
      const itemWidth = 400 + 24;
      return Math.ceil(viewportWidth / itemWidth) * 2;
    };
    setCloneCount(calculateClones());
  }, []);

  useLayoutEffect(() => {
    if (!mounted) return;

    gsap.registerPlugin(ScrollTrigger);
    const currentLoops = loops.current;

    const initializeMarquee = (
      marqueeRef: React.RefObject<HTMLDivElement>,
      reversed = false
    ) => {
      if (!marqueeRef.current) return;

      const container = marqueeRef.current;
      const items = Array.from(
        container.querySelectorAll('.imageContainer')
      ) as HTMLElement[];

      if (items.length > 0) {
        gsap.set(items, { marginRight: 24 });

        loops.current.push(
          horizontalLoop(items, {
            speed: 4,
            repeat: -1,
            paddingLeft: 400,
            paddingRight: 400,
            reversed,
          })
        );
      }
    };

    initializeMarquee(marquee1Ref);
    initializeMarquee(marquee2Ref, true);

    return () => currentLoops.forEach((loop) => loop.kill());
  }, [mounted]);

  const renderClones = (reverse = false) => {
    // Use cloneCount state instead of direct window access
    const clones = Array(cloneCount)
      .fill(null)
      .flatMap(() => (reverse ? [...images].reverse() : images));

    return clones.map((img, i) => (
      <div
        key={`img-${reverse ? 'rev' : 'fwd'}-${i}`}
        className="imageContainer flex-shrink-0 relative"
      >
        <Image
          src={img.src}
          alt=""
          width={img.width}
          height={img.height}
          className="rounded-lg w-[400px] aspect-video object-cover"
          priority={i < images.length}
        />
      </div>
    ));
  };

  return (
    <div className="relative flex flex-col gap-8 overflow-visible -mt-24 px-12 sm:px-24 lg:px-48 py-24">
      {/* Marquee 1 */}
      <div className="relative overflow-visible w-full">
        <div ref={marquee1Ref} className="flex gap-1 w-max">
          {mounted
            ? renderClones()
            : images.map((img, i) => (
                <div
                  key={`fallback-${i}`}
                  className="imageContainer flex-shrink-0 relative"
                >
                  <Image
                    src={img.src}
                    alt=""
                    width={img.width}
                    height={img.height}
                    className="rounded-lg w-[400px] aspect-video object-cover"
                    priority
                  />
                </div>
              ))}
        </div>
      </div>

      {/* Marquee 2 (Reversed) */}
      <div className="relative overflow-visible w-full">
        <div ref={marquee2Ref} className="flex gap-1 w-max">
          {mounted
            ? renderClones(true)
            : [...images].reverse().map((img, i) => (
                <div
                  key={`fallback-rev-${i}`}
                  className="imageContainer flex-shrink-0 relative"
                >
                  <Image
                    src={img.src}
                    alt=""
                    width={img.width}
                    height={img.height}
                    className="rounded-lg w-[400px] aspect-video object-cover"
                    priority
                  />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
