function toggleContent(el) {
  el.classList.toggle("active");

  el.classList.add("clicked");

  // Remove it after animation completes (150ms)
  setTimeout(() => {
    el.classList.remove("clicked");
  }, 150);
}