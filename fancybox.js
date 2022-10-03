Fancybox.bind('[data-fancybox="gallery"]', {
  animated: false,
  showClass: false,
  hideClass: false,

  // closeButton: "top",
  dragToClose: false,

  Image: {
    zoom: false,
    fit: "cover",
  },

  Toolbar: false,
  Thumbs: false,

  Carousel: {
    Navigation: false,
    //   Dots: true,
  },

  on: {
    initLayout: (fancybox) => {
      // Create main container for left panel and Fancybox carousel
      const $mainPanel = document.createElement("div");
      $mainPanel.classList.add("fancybox__main-panel");

      // Create left panel
      const $leftPanel = document.createElement("div");
      $leftPanel.classList.add("fancybox__left-panel");

      $leftPanel.innerHTML = document.getElementById("gallery-data").innerHTML;

      $mainPanel.appendChild($leftPanel);
      $mainPanel.appendChild(fancybox.$carousel);

      fancybox.$backdrop.after($mainPanel);
    },
  },
});