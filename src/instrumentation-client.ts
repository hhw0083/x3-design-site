const injectedHydrationAttribute = "bis_skin_checked";

function removeInjectedHydrationAttribute(root: Document | Element = document) {
  if (root instanceof Element && root.hasAttribute(injectedHydrationAttribute)) {
    root.removeAttribute(injectedHydrationAttribute);
  }

  root
    .querySelectorAll(`[${injectedHydrationAttribute}]`)
    .forEach((element) => {
      element.removeAttribute(injectedHydrationAttribute);
    });
}

if (typeof document !== "undefined") {
  removeInjectedHydrationAttribute();

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.target instanceof Element) {
        removeInjectedHydrationAttribute(mutation.target);
      }
    });
  });

  observer.observe(document.documentElement, {
    attributeFilter: [injectedHydrationAttribute],
    attributes: true,
    subtree: true,
  });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => observer.disconnect());
  });
}
