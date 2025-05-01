class ImagePopupViewer {
  constructor() {
    this.images = document.querySelectorAll(".img-container img");
    this.popup = document.getElementById("popup");
    this.popupImg = document.getElementById("popup-img");
    this.closeBtn = document.getElementById("close");
    this.nextBtn = document.getElementById("next");
    this.prevBtn = document.getElementById("prev");
    this.currentIndex = 0;

    this.initEvents();
  }

  initEvents() {
    this.images.forEach((img, index) => {
      img.addEventListener("click", () => {
        this.currentIndex = index;
        this.showImage();
        this.popup.style.display = "flex";
      });
    });

    this.closeBtn.addEventListener("click", () => this.closePopup());
    this.nextBtn.addEventListener("click", () => this.nextImage());
    this.prevBtn.addEventListener("click", () => this.prevImage());

    // Optional: Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.closePopup();
    });
  }

  showImage() {
    this.popupImg.src = this.images[this.currentIndex].src;
    document.body.style.overflow = 'hidden'; // disable scroll

    if(this.currentIndex === 0) {
        this.prevBtn.style.opacity = 0;
        this.prevBtn.style.pointerEvents = "none"; // disable pointer events
    } else {
        this.prevBtn.style.opacity = 1;   
        this.prevBtn.style.pointerEvents = "";
    }

    if(this.currentIndex === this.images.length - 1) {
        this.nextBtn.style.opacity = 0;
        this.nextBtn.style.pointerEvents = "none"; // disable pointer events
    } else {
        this.nextBtn.style.opacity = 1;  
        this.nextBtn.style.pointerEvents = ""; 
    }
  }

  closePopup() {
    this.popup.style.display = "none";
    document.body.style.overflow = ''; // restore scroll
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.showImage();
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.showImage();
  }
}

// Initialize the popup viewer after DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  new ImagePopupViewer();
});
