document.addEventListener("DOMContentLoaded", function () {
  const colorThief = new ColorThief();

  function updateBackgroundColor() {
    const firstItem = document.querySelector(".slide .item:nth-child(1)");
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = firstItem.style.backgroundImage
      .replace('url("', "")
      .replace('")', "");

    img.onload = function () {
      const palette = colorThief.getPalette(img, 6);

      document.body.style.backgroundColor = `rgb(${palette[0].join(",")})`;
    };
  }

  updateBackgroundColor();

  const slideContainer = document.querySelector(".slide");

  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === "childList") {
        updateBackgroundColor();
      }
    });
  });

  observer.observe(slideContainer, { childList: true });
});
