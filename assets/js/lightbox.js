// Small lightbox for gallery pages. Without JavaScript the thumbnails simply
// link to the full-size photos.
(() => {
  const links = [...document.querySelectorAll("a[data-lightbox]")];
  const box = document.querySelector("dialog.lightbox");
  if (!links.length || !box || !box.showModal) return;

  const img = box.querySelector("img");
  const caption = box.querySelector("figcaption");
  let current = 0;

  const show = (i) => {
    current = (i + links.length) % links.length;
    const link = links[current];
    img.src = link.href;
    img.alt = link.dataset.caption || "";
    caption.textContent = link.dataset.caption || "";
    // Preload the next photo.
    new Image().src = links[(current + 1) % links.length].href;
  };

  links.forEach((link, i) =>
    link.addEventListener("click", (e) => {
      e.preventDefault();
      show(i);
      box.showModal();
    })
  );

  box.querySelector(".lb-prev").addEventListener("click", () => show(current - 1));
  box.querySelector(".lb-next").addEventListener("click", () => show(current + 1));
  box.querySelector(".lb-close").addEventListener("click", () => box.close());
  // Click on the backdrop closes.
  box.addEventListener("click", (e) => { if (e.target === box) box.close(); });
  box.addEventListener("close", () => { img.removeAttribute("src"); });

  document.addEventListener("keydown", (e) => {
    if (!box.open) return;
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });

  // Swipe on touch screens.
  let startX = null;
  box.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
  box.addEventListener("touchend", (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
    startX = null;
  });
})();
