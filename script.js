class CardFilter {
  constructor(data, cardContainerId, dateFilterId, typeFilterId) {
    this.data = data;
    this.cardContainer = document.getElementById(cardContainerId);
    this.dateFilterGroup = document.getElementById(dateFilterId);
    this.typeFilterGroup = document.getElementById(typeFilterId);

    this.selectedDateFilter = "upcoming";
    this.selectedTypeFilter = "all";

    this.addEventListeners();

    const upcomingFilter = this.dateFilterGroup.querySelector(
      'span[data-value="upcoming"]'
    );
    if (upcomingFilter) {
      this.setActive(this.dateFilterGroup, upcomingFilter);
    }

    this.renderCards(this.data);

    // Add selects if mobile
    if (window.innerWidth <= 600) {
      this.createCustomDropdown(this.dateFilterGroup, "date");
      this.createCustomDropdown(this.typeFilterGroup, "type");
    }
  }

  addEventListeners() {
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

  createCustomDropdown(group, filterType) {
    const dropdown = document.createElement("div");
    dropdown.className = "custom-dropdown";

    const toggle = document.createElement("div");
    toggle.className = "dropdown-toggle";

    const textSpan = document.createElement("span");
    textSpan.className = "toggle-text";
    const activeSpan = [...group.querySelectorAll("span")].find((span) =>
      span.classList.contains("active")
    );
    textSpan.textContent = activeSpan ? activeSpan.textContent : "Select";

    const arrowSpan = document.createElement("span");
    arrowSpan.className = "arrow";
    arrowSpan.textContent = "▾";

    toggle.appendChild(textSpan);
    toggle.appendChild(arrowSpan);

    const menu = document.createElement("div");
    menu.className = "dropdown-menu";

    group.querySelectorAll("span").forEach((span) => {
      const option = document.createElement("div");
      option.textContent = span.textContent;
      option.dataset.value = span.dataset.value;

      if (span.classList.contains("active")) {
        option.classList.add("active");
      }

      option.addEventListener("click", () => {
        group
          .querySelectorAll("span")
          .forEach((s) => s.classList.remove("active"));
        menu
          .querySelectorAll("div")
          .forEach((opt) => opt.classList.remove("active"));

        span.classList.add("active");
        option.classList.add("active");
        textSpan.textContent = option.textContent;

        menu.classList.remove("open");

        if (filterType === "date") {
          this.selectedDateFilter = span.dataset.value;
        } else {
          this.selectedTypeFilter = span.dataset.value;
        }

        this.applyFilters();
      });

      menu.appendChild(option);
    });

    toggle.addEventListener("click", () => {
      document.querySelectorAll(".dropdown-menu.open").forEach((openMenu) => {
        if (openMenu !== menu) {
          openMenu.classList.remove("open");
        }
      });

      // Toggle current menu
      menu.classList.toggle("open");

      // Optional: prevent bubbling if needed
      e.stopPropagation();
    });

    dropdown.appendChild(toggle);
    dropdown.appendChild(menu);
    group.insertAdjacentElement("afterend", dropdown);
  }

  setActive(group, activeSpan) {
    group
      .querySelectorAll("span")
      .forEach((span) => span.classList.remove("active"));
    activeSpan.classList.add("active");
  }

  applyFilters() {
    const now = new Date();
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
