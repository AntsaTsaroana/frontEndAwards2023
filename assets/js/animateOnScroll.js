// TOP
const revealedFromTopElements = document.querySelectorAll(".animateFromTop");
// BOTTOM
const revealedFromBottomElements =
  document.querySelectorAll(".animateFromBottom");
// LEFT
const revealedFromLeftElements = document.querySelectorAll(".animateFromLeft");
// RIGHT
const revealedFromRightElements =
  document.querySelectorAll(".animateFromRight");

let lastScrollforDownPosition = window.scrollY;

// FROM TOP ELEMENT --------------------

const createTopObserver = () => {
  const observerDown = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Ajoute la classe "revealed" uniquement à l'élément actuel lorsqu'on defile vers le bas
          entry.target.classList.add("revealed");
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  const observerUp = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          // Enleve la classe "revealed" uniquement à l'élément actuel lorsqu'on defile vers le haut
          entry.target.classList.remove("revealed");
        }
      });
    },
    {
      rootMargin: "0px 0px 0px 0px",
    }
  );

  revealedFromTopElements.forEach((revealedElement) => {
    observerDown.observe(revealedElement);
  });

  revealedFromTopElements.forEach((revealedElement) => {
    observerUp.observe(revealedElement);
  });
};

let lastScrollPosition = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.scrollY;
  if (currentScrollPosition < lastScrollPosition) {
    // L'utilisateur remonte, ajoutez la classe "scroll-up"
    revealedFromTopElements.forEach((element) => {
      element.classList.add("staticTop");
    });
  } else {
    // L'utilisateur descend, retirez la classe "scroll-up"
    revealedFromTopElements.forEach((element) => {
      element.classList.remove("staticTop");
    });
  }
  lastScrollPosition = currentScrollPosition;
});

createTopObserver();


// FROM BOTTOM ELEMENT --------------------

const createBottomObserver = () => {
  const observerDown = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Ajoute la classe "revealed" uniquement à l'élément actuel lorsqu'on defile vers le bas
          entry.target.classList.add("revealed");
        }
      });
    },
    {
      rootMargin: "10% 0px",
    }
  );

  const observerUp = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          // Enleve la classe "revealed" uniquement à l'élément actuel lorsqu'on defile vers le haut
          entry.target.classList.remove("revealed");
        }
      });
    },
    {
      rootMargin: "10% 0px",
    }
  );

  revealedFromBottomElements.forEach((revealdElement) => {
    observerDown.observe(revealdElement);
  });

  revealedFromBottomElements.forEach((revealdElement) => {
    observerUp.observe(revealdElement);
  });
};

let lastScrollPositionBottom = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollPositionBottom = window.scrollY;
  if (currentScrollPositionBottom < lastScrollPositionBottom) {
    // L'utilisateur remonte, ajoutez la classe "scroll-up"
    revealedFromBottomElements.forEach((element) => {
      element.classList.add("staticBottom");
    });
  } else {
    // L'utilisateur descend, retirez la classe "scroll-up"
    revealedFromBottomElements.forEach((element) => {
      element.classList.remove("staticBottom");
    });
  }
  lastScrollPositionBottom = currentScrollPositionBottom;
});

createBottomObserver();


// FROM LEFT ELEMENT --------------------

const createLeftObserver = () => {
  const observerDown = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Ajoute la classe "revealed" uniquement à l'élément actuel lorsqu'on defile vers le bas
          entry.target.classList.add("revealed");
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  const observerUp = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          // Enleve la classe "revealed" uniquement à l'élément actuel lorsqu'on defile vers le haut
          entry.target.classList.remove("revealed");
        }
      });
    },
    {
      rootMargin: "0px 0px 0px 0px",
    }
  );

  revealedFromLeftElements.forEach((revealdElement) => {
    observerDown.observe(revealdElement);
  });

  revealedFromLeftElements.forEach((revealdElement) => {
    observerUp.observe(revealdElement);
  });
};

let lastScrollPositionLeft = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollPositionLeft = window.scrollY;
  if (currentScrollPositionLeft < lastScrollPositionLeft) {
    // L'utilisateur remonte, ajoutez la classe "scroll-up"
    revealedFromLeftElements.forEach((element) => {
      element.classList.add("staticLeft");
    });
  } else {
    // L'utilisateur descend, retirez la classe "scroll-up"
    revealedFromLeftElements.forEach((element) => {
      element.classList.remove("staticLeft");
    });
  }
  lastScrollPositionLeft = currentScrollPositionLeft;
});

createLeftObserver();


// FROM RIGHT ELEMENT --------------------

const createRightObserver = () => {
  const observerDown = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Ajoute la classe "revealed" uniquement à l'élément actuel lorsqu'on defile vers le bas
          entry.target.classList.add("revealed");
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  const observerUp = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          // Enleve la classe "revealed" uniquement à l'élément actuel lorsqu'on defile vers le haut
          entry.target.classList.remove("revealed");
        }
      });
    },
    {
      rootMargin: "0px 0px 0px 0px",
    }
  );

  revealedFromRightElements.forEach((revealdElement) => {
    observerDown.observe(revealdElement);
  });

  revealedFromRightElements.forEach((revealdElement) => {
    observerUp.observe(revealdElement);
  });
};

let lastScrollPositionRight = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollPositionRight = window.scrollY;
  if (currentScrollPositionRight < lastScrollPositionRight) {
    // L'utilisateur remonte, ajoutez la classe "scroll-up"
    revealedFromRightElements.forEach((element) => {
      element.classList.add("staticRight");
    });
  } else {
    // L'utilisateur descend, retirez la classe "scroll-up"
    revealedFromRightElements.forEach((element) => {
      element.classList.remove("staticRight");
    });
  }
  lastScrollPositionRight = currentScrollPositionRight;
});

createRightObserver();
