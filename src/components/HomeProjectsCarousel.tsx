"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { StudioProjectCard } from "@/components/StudioProjectCard";
import type { StudioProject } from "@/data/x3Content";

type HomeProjectsCarouselProps = {
  projects: StudioProject[];
};

export function HomeProjectsCarousel({
  projects,
}: HomeProjectsCarouselProps) {
  const carouselId = useId();
  const trackRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef({
    isDragging: false,
    isPointerDown: false,
    pointerId: -1,
    startScrollLeft: 0,
    startX: 0,
    slideIndex: null as number | null,
  });
  const didDragRef = useRef(false);
  const suppressClickUntilRef = useRef(0);
  const scrollAnimationRef = useRef<number | null>(null);
  const scrollSettleTimerRef = useRef<number | null>(null);
  const isAnimatingScrollRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();
  const hasOverflowProjects = projects.length > 3;
  const [isDragging, setIsDragging] = useState(false);
  const [activeDragIndex, setActiveDragIndex] = useState<number | null>(null);

  const cancelScrollAnimation = () => {
    if (scrollAnimationRef.current !== null) {
      window.cancelAnimationFrame(scrollAnimationRef.current);
      scrollAnimationRef.current = null;
    }

    isAnimatingScrollRef.current = false;
  };

  const getProjectTargets = (track: HTMLDivElement) => {
    const slides = Array.from(
      track.querySelectorAll<HTMLElement>("[data-project-slide]"),
    );
    const firstOffset = slides[0]?.offsetLeft ?? 0;
    const maxScrollLeft = track.scrollWidth - track.clientWidth;

    return slides.map((slide) =>
      Math.max(0, Math.min(maxScrollLeft, slide.offsetLeft - firstOffset)),
    );
  };

  const animateScrollToProject = (targetScrollLeft: number) => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    cancelScrollAnimation();

    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    const target = Math.max(0, Math.min(maxScrollLeft, targetScrollLeft));
    const start = track.scrollLeft;
    const distance = target - start;

    if (Math.abs(distance) < 1 || prefersReducedMotion) {
      track.scrollLeft = target;
      return;
    }

    const duration = Math.min(860, Math.max(520, Math.abs(distance) * 0.9));
    const startedAt = window.performance.now();
    isAnimatingScrollRef.current = true;

    const step = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      track.scrollLeft = start + distance * eased;

      if (progress < 1) {
        scrollAnimationRef.current = window.requestAnimationFrame(step);
        return;
      }

      track.scrollLeft = target;
      scrollAnimationRef.current = null;
      isAnimatingScrollRef.current = false;
    };

    scrollAnimationRef.current = window.requestAnimationFrame(step);
  };

  const settleToNearestProject = () => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const targets = getProjectTargets(track);

    if (!targets.length) {
      return;
    }

    const nearestTarget = targets.reduce((nearest, target) =>
      Math.abs(target - track.scrollLeft) < Math.abs(nearest - track.scrollLeft)
        ? target
        : nearest,
    );

    animateScrollToProject(nearestTarget);
  };

  const scrollProjects = (direction: -1 | 1) => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const targets = getProjectTargets(track);
    const current = track.scrollLeft;
    let target: number | undefined;

    if (direction > 0) {
      target = targets.find((snapTarget) => snapTarget > current + 8);
    } else {
      for (let index = targets.length - 1; index >= 0; index -= 1) {
        if (targets[index] < current - 8) {
          target = targets[index];
          break;
        }
      }
    }

    if (target === undefined) {
      animateScrollToProject(
        direction > 0 ? targets[targets.length - 1] ?? 0 : 0,
      );
      return;
    }

    animateScrollToProject(target);
  };

  const finishDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;

    if (
      !track ||
      !dragStateRef.current.isPointerDown ||
      dragStateRef.current.pointerId !== event.pointerId
    ) {
      return;
    }

    const wasDragged = dragStateRef.current.isDragging;
    dragStateRef.current.isDragging = false;
    dragStateRef.current.isPointerDown = false;
    dragStateRef.current.pointerId = -1;

    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }

    didDragRef.current = false;

    if (wasDragged) {
      suppressClickUntilRef.current = window.performance.now() + 220;
    }

    setIsDragging(false);
    setActiveDragIndex(null);

    if (wasDragged) {
      settleToNearestProject();
    }
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;

    if (!track || event.pointerType !== "mouse" || event.button !== 0) {
      return;
    }

    cancelScrollAnimation();

    const slide = (event.target as HTMLElement).closest<HTMLElement>(
      "[data-project-slide]",
    );
    const activeIndex = slide?.dataset.projectIndex
      ? Number(slide.dataset.projectIndex)
      : null;

    dragStateRef.current = {
      isDragging: false,
      isPointerDown: true,
      pointerId: event.pointerId,
      slideIndex: activeIndex,
      startScrollLeft: track.scrollLeft,
      startX: event.clientX,
    };
    didDragRef.current = false;
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    const dragState = dragStateRef.current;

    if (!track || !dragState.isPointerDown) {
      return;
    }

    const distance = event.clientX - dragState.startX;

    if (!dragState.isDragging && Math.abs(distance) <= 4) {
      return;
    }

    if (!dragState.isDragging) {
      dragState.isDragging = true;
      track.setPointerCapture(event.pointerId);
      setIsDragging(true);
      setActiveDragIndex(dragState.slideIndex);
    }

    if (Math.abs(distance) > 4) {
      didDragRef.current = true;
      event.preventDefault();
    }

    track.scrollLeft = dragState.startScrollLeft - distance;
  };

  const handleClickCapture = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (window.performance.now() > suppressClickUntilRef.current) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
  };

  const handleScroll = () => {
    if (
      dragStateRef.current.isDragging ||
      isAnimatingScrollRef.current ||
      !hasOverflowProjects
    ) {
      return;
    }

    if (scrollSettleTimerRef.current !== null) {
      window.clearTimeout(scrollSettleTimerRef.current);
    }

    scrollSettleTimerRef.current = window.setTimeout(() => {
      scrollSettleTimerRef.current = null;
      settleToNearestProject();
    }, 140);
  };

  const handleWheel = () => {
    cancelScrollAnimation();
  };

  const trackCursorClass = isDragging ? "cursor-grabbing" : "cursor-grab";

  useEffect(() => {
    return () => {
      cancelScrollAnimation();

      if (scrollSettleTimerRef.current !== null) {
        window.clearTimeout(scrollSettleTimerRef.current);
      }
    };
  }, []);

  if (!projects.length) {
    return null;
  }

  if (!hasOverflowProjects) {
    return (
      <div className="mt-14 grid gap-10 lg:grid-cols-3">
        {projects.map((project, index) => (
          <MotionReveal
            key={project.slug}
            delay={Math.min(index * 80, 180)}
            distance={18}
          >
            <StudioProjectCard project={project} priority={index === 0} />
          </MotionReveal>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-14">
      <div className="mb-6 flex justify-end gap-2">
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center border border-stone-950/20 text-stone-950 transition hover:border-stone-950 hover:bg-stone-950 hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-4 focus-visible:ring-offset-cream active:translate-y-px"
          aria-label="Previous projects"
          aria-controls={carouselId}
          onClick={() => scrollProjects(-1)}
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center border border-stone-950/20 text-stone-950 transition hover:border-stone-950 hover:bg-stone-950 hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-4 focus-visible:ring-offset-cream active:translate-y-px"
          aria-label="Next projects"
          aria-controls={carouselId}
          onClick={() => scrollProjects(1)}
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>

      <div
        id={carouselId}
        ref={trackRef}
        className={`-mx-4 flex select-none scroll-px-4 gap-6 overflow-x-auto px-4 pb-6 pt-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:scroll-px-6 sm:px-6 md:gap-6 lg:mx-0 lg:scroll-px-0 lg:gap-6 lg:px-0 ${trackCursorClass}`}
        aria-label="Projects carousel"
        onClickCapture={handleClickCapture}
        onDragStartCapture={(event) => event.preventDefault()}
        onPointerCancel={finishDrag}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onScroll={handleScroll}
        onWheel={handleWheel}
      >
        {projects.map((project, index) => (
          <div
            key={project.slug}
            data-project-slide
            data-project-index={index}
            className={`min-w-0 shrink-0 basis-[84%] transition-[filter,opacity,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] sm:basis-[58%] md:basis-[calc((100%_-_1.5rem)_/_2.35)] lg:basis-[calc((100%_-_3rem)_/_3)] ${
              activeDragIndex === index
                ? "relative z-10 drop-shadow-[0_16px_24px_rgba(29,26,23,0.10)] [transform:translate3d(0,-9px,0)_scale(1.012)]"
                : isDragging
                  ? "scale-[0.99] opacity-50"
                  : ""
            }`}
          >
            <MotionReveal delay={Math.min(index * 80, 180)} distance={18}>
              <StudioProjectCard project={project} priority={index === 0} />
            </MotionReveal>
          </div>
        ))}
      </div>
    </div>
  );
}
