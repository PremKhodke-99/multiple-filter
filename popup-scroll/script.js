class CardPopup {
  constructor(
    cardsData,
    triggerSelector,
    popupSelector,
    contentSelector,
    closeSelector
  ) {
    this.cardsData = cardsData;
    this.triggers = document.querySelectorAll(triggerSelector);
    this.popup = document.querySelector(popupSelector);
    this.content = document.querySelector(contentSelector);
    this.closeBtn = document.querySelector(closeSelector);

    this.bindEvents();
  }

  bindEvents() {
    this.triggers.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        const index = parseInt(trigger.dataset.index);
        this.showPopup(index);
      });
    });

    this.closeBtn.addEventListener("click", () => this.hidePopup());
  }

  showPopup(scrollToIndex) {
    this.content.innerHTML = ""; // Clear existing

    this.cardsData.forEach((card, index) => {
      const cardDiv = document.createElement("div");
      cardDiv.className = "card-detail";
      cardDiv.id = `popup-card-${index}`;

      cardDiv.innerHTML = `
          <img src="${card.img}" alt="${card.title}">
          <h3>${card.title}</h3>
          <p>${card.desc}</p>
        `;

      this.content.appendChild(cardDiv);
    });

    this.popup.style.display = "flex";

    setTimeout(() => {
      const scrollTarget = document.getElementById(
        `popup-card-${scrollToIndex}`
      );
      scrollTarget?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  hidePopup() {
    this.popup.style.display = "none";
  }
}

// Initialize once DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new CardPopup(
    cardData, // data
    ".card", // trigger selector
    "#popup", // popup wrapper
    "#popup-content", // content wrapper
    "#close" // close button
  );
});
