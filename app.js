// Growth scrubber: drag from day 0 to day 66 and Filiz grows through its five stages.
(() => {
  const range = document.getElementById("grow-range");
  if (!range) return;
  const images = [...document.querySelectorAll(".grow-stage img")];
  const dayEl = document.getElementById("grow-day");
  const labelEl = document.getElementById("grow-label");
  const stages = [
    { from: 0, label: "A tiny seed" },
    { from: 1, label: "First leaves" },
    { from: 7, label: "Growing strong" },
    { from: 21, label: "A crown of leaves" },
    { from: 66, label: "Full bloom" },
  ];

  function update() {
    const day = Number(range.value);
    let index = 0;
    stages.forEach((stage, i) => { if (day >= stage.from) index = i; });
    images.forEach((img, i) => img.classList.toggle("is-current", i === index));
    dayEl.textContent = `Day ${day}`;
    labelEl.textContent = stages[index].label;
    range.setAttribute("aria-valuetext", `Day ${day}, ${stages[index].label}`);
  }

  range.addEventListener("input", update);
  update();
})();
