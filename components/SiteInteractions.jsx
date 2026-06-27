"use client";

import { useEffect } from "react";

export default function SiteInteractions() {
  useEffect(() => {
    const nav = document.querySelector("[data-nav]");
    const menu = document.querySelector("[data-menu]");
    const menuButton = document.querySelector("[data-menu-button]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const handleScroll = () => {
      nav?.classList.toggle("is-scrolled", window.scrollY > 18);
    };

    const handleMenuClick = () => {
      const isOpen = menu?.classList.toggle("is-open");
      menuButton?.setAttribute("aria-expanded", String(Boolean(isOpen)));
    };

    const handleMenuLinkClick = (event) => {
      const target = event.target;
      if (target instanceof Element && target.closest("a")) {
        menu?.classList.remove("is-open");
        menuButton?.setAttribute("aria-expanded", "false");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    menuButton?.addEventListener("click", handleMenuClick);
    menu?.addEventListener("click", handleMenuLinkClick);
    handleScroll();

    const revealItems = document.querySelectorAll(".reveal");
    revealItems.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min((index % 6) * 75, 375)}ms`);
    });

    let revealObserver;
    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    } else if ("IntersectionObserver" in window) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14 },
      );

      revealItems.forEach((item) => revealObserver.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    const counters = document.querySelectorAll(".count-up");

    const formatCounter = (value, element) => {
      const suffix = element.dataset.suffix || "";
      const decimals = Number(element.dataset.decimals || 0);

      if (element.dataset.format === "space") {
        return `${new Intl.NumberFormat("fr-FR").format(Math.round(value))}${suffix}`;
      }

      const formatted = decimals > 0 ? value.toFixed(decimals).replace(".", ",") : String(Math.round(value));
      return `${formatted}${suffix}`;
    };

    const animateCounter = (element) => {
      if (element.dataset.done === "true") return;

      const target = Number(element.dataset.count || 0);
      const duration = 1150;
      const startTime = performance.now();
      element.dataset.done = "true";

      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = formatCounter(target * eased, element);

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          element.textContent = formatCounter(target, element);
        }
      };

      requestAnimationFrame(tick);
    };

    let counterObserver;
    if (reduceMotion) {
      counters.forEach((counter) => {
        counter.textContent = formatCounter(Number(counter.dataset.count || 0), counter);
      });
    } else if ("IntersectionObserver" in window) {
      counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              counterObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 },
      );

      counters.forEach((counter) => counterObserver.observe(counter));
    } else {
      counters.forEach(animateCounter);
    }

    const spotlightCards = document.querySelectorAll(".program-card, .impact-card");
    const handlePointerMove = (event) => {
      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    };

    spotlightCards.forEach((card) => {
      card.addEventListener("pointermove", handlePointerMove);
    });

    const heroVisual = document.querySelector(".hero-visual");
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const handleHeroPointerMove = (event) => {
      const rect = heroVisual.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      heroVisual.style.setProperty("--tilt-x", `${x * 5}deg`);
      heroVisual.style.setProperty("--tilt-y", `${y * -5}deg`);
    };
    const handleHeroPointerLeave = () => {
      heroVisual.style.setProperty("--tilt-x", "0deg");
      heroVisual.style.setProperty("--tilt-y", "0deg");
    };

    if (heroVisual && finePointer && !reduceMotion) {
      heroVisual.addEventListener("pointermove", handleHeroPointerMove);
      heroVisual.addEventListener("pointerleave", handleHeroPointerLeave);
    }

    const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
    const sections = navLinks
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    let activeObserver;
    if ("IntersectionObserver" in window && sections.length) {
      activeObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            navLinks.forEach((link) => {
              link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
            });
          });
        },
        {
          rootMargin: "-42% 0px -50% 0px",
          threshold: 0,
        },
      );

      sections.forEach((section) => activeObserver.observe(section));
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      menuButton?.removeEventListener("click", handleMenuClick);
      menu?.removeEventListener("click", handleMenuLinkClick);
      revealObserver?.disconnect();
      counterObserver?.disconnect();
      activeObserver?.disconnect();
      spotlightCards.forEach((card) => card.removeEventListener("pointermove", handlePointerMove));
      if (heroVisual) {
        heroVisual.removeEventListener("pointermove", handleHeroPointerMove);
        heroVisual.removeEventListener("pointerleave", handleHeroPointerLeave);
      }
    };
  }, []);

  return null;
}
