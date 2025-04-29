class CardFilter {
  constructor(data, cardContainerId, dateFilterId, typeFilterId) {
    this.data = data;
    this.cardContainer = document.getElementById(cardContainerId);
    // this.dateFilter = document.getElementById(dateFilterId);
    // this.typeFilter = document.getElementById(typeFilterId);
    this.dateFilterGroup = document.getElementById(dateFilterId);
    this.typeFilterGroup = document.getElementById(typeFilterId);

    this.selectedDateFilter = "all";
    this.selectedTypeFilter = "all";

    this.addEventListeners();
    this.renderCards(this.data);
  }

  addEventListeners() {
    // this.dateFilter.addEventListener("change", () => this.applyFilters());
    // this.typeFilter.addEventListener("change", () => this.applyFilters());

    this.dateFilterGroup.querySelectorAll("span").forEach((span) => {
      span.addEventListener("click", () => {
        this.setActive(this.dateFilterGroup, span);
        this.selectedDateFilter = span.dataset.value;
        this.applyFilters();
      });
    });

    this.typeFilterGroup.querySelectorAll("span").forEach((span) => {
      span.addEventListener("click", () => {
        this.setActive(this.typeFilterGroup, span);
        this.selectedTypeFilter = span.dataset.value;
        this.applyFilters();
      });
    });
  }

  setActive(group, activeSpan) {
    group
      .querySelectorAll("span")
      .forEach((span) => span.classList.remove("active"));
    activeSpan.classList.add("active");
  }

  applyFilters() {
    const now = new Date();
    // const selectedDate = this.dateFilter.value;
    // const selectedType = this.typeFilter.value;

    // const filtered = this.data.filter((item) => {
    //   const itemDate = new Date(item.date);

    //   const matchesDate =
    //     selectedDate === "all" ||
    //     (selectedDate === "upcoming" && itemDate >= now) ||
    //     (selectedDate === "past" && itemDate < now);

    //   const matchesType = selectedType === "all" || item.type === selectedType;

    //   return matchesDate && matchesType;
    // });

    const filtered = this.data.filter((item) => {
      const itemDate = new Date(item.date);

      const matchesDate =
        this.selectedDateFilter === "all" ||
        (this.selectedDateFilter === "upcoming" && itemDate >= now) ||
        (this.selectedDateFilter === "past" && itemDate < now);

      const matchesType =
        this.selectedTypeFilter === "all" ||
        item.type === this.selectedTypeFilter;

      return matchesDate && matchesType;
    });

    this.renderCards(filtered);
  }

  renderCards(data) {
    this.cardContainer.innerHTML = "";

    if (data.length === 0) {
      this.cardContainer.innerHTML = "<p>No data found.</p>";
      return;
    }

    data.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
          <h3>${item.title}</h3>
          <p><strong>Date:</strong> ${item.date}</p>
          <p><strong>Type:</strong> ${item.type}</p>
        `;
      this.cardContainer.appendChild(card);

    //   setTimeout(() => {
    //     card.classList.add("visible");
    //   }, 50 * index); // staggered animation
    });

  }
}

// Initialize after DOM and PHP JSON data are loaded
document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((jsonData) => {
      new CardFilter(jsonData, "cardContainer", "dateFilter", "typeFilter");
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
});
