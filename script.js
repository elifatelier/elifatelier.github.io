const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const whatsappNumber = "905467894326";

document.querySelectorAll(".whatsapp-order").forEach((link) => {
  const product = link.dataset.product || "Ürün";
  const message = `Merhaba, ${product} için sipariş vermek istiyorum.`;
  link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
});

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}
