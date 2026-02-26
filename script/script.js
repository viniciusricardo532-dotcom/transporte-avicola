document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector(".routes");
  const searchInput = document.querySelector("#q");

  function normalize(text) {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s]/g, "")
      .trim();
  }

  function matchesSearch(route, query) {
    const q = normalize(query);
    if (!q) return true;

    const blob = normalize(
      [
        route.title,
        route.meta || "",
        ...route.sections.flatMap(s =>
          [
            s.name,
            s.note || "",
            ...s.stops.flatMap(p => [
              p.name,
              p.address || "",
              p.time || ""
            ])
          ]
        )
      ].join(" ")
    );

    return blob.includes(q);
  }

  function stopMatches(stop, query) {
    const q = normalize(query);
    if (!q) return true;

    const blob = normalize(
      [stop.name, stop.address || "", stop.time || ""].join(" ")
    );

    return blob.includes(q);
  }

  function createRoute(route, startOpen = false) {
    const wrapper = document.createElement("div");
    wrapper.className = "route";

    const button = document.createElement("button");
    button.className = "route-btn";

    button.innerHTML = `
      <span class="route-left">
        <span class="route-title">🚌 ${route.title}</span>
        ${route.meta ? `<span class="route-meta">${route.meta}</span>` : ""}
      </span>
      <span class="arrow">▼</span>
    `;

    const content = document.createElement("div");
    content.className = "route-content";

    route.sections.forEach(section => {
      const matchingStops = section.stops.filter(stop =>
        stopMatches(stop, searchInput.value)
      );

      if (!matchingStops.length && searchInput.value.trim().length > 0) {
        return;
      }

      const secTitle = document.createElement("h3");
      secTitle.textContent = section.name;
      content.appendChild(secTitle);

      if (section.note) {
        const note = document.createElement("p");
        note.className = "section-note";
        note.textContent = section.note;
        content.appendChild(note);
      }

      matchingStops.forEach(stop => {
        const stopDiv = document.createElement("div");
        stopDiv.className = "stop";

        const mapsQuery = encodeURIComponent(
          `${stop.name}, ${stop.address || ""}, Pato Branco - PR`
        );

        stopDiv.innerHTML = `
          <div>
            <strong>${stop.name}</strong>
            ${stop.time ? `<div class="time">⏰ ${stop.time}</div>` : ""}
          </div>
          <a target="_blank"
            rel="noopener"
            class="maps"
            href="https://www.google.com/maps/search/?api=1&query=${mapsQuery}">
            Ver no Maps
          </a>
        `;

        content.appendChild(stopDiv);
      });
    });

    button.addEventListener("click", () => {
      const isOpen = content.classList.contains("open");

      document.querySelectorAll(".route-content").forEach(c => {
        c.classList.remove("open");
      });

      document.querySelectorAll(".arrow").forEach(a => {
        a.textContent = "▼"
      });
      
      if (!isOpen) {
        content.classList.add("open")
        button.querySelector(".arrow").textContent = "▲"
      }
    });

    if (startOpen) {
      content.classList.add("open");
      button.querySelector(".arrow").textContent = "▲"
    }

    wrapper.appendChild(button);
    wrapper.appendChild(content);

    return wrapper;
  }

  function renderRoutes() {
    const query = searchInput.value;
    container.innerHTML = "";
    const hasSearch = query.trim().length > 0;

    ROUTES
      .filter(route => matchesSearch(route, query))
      .forEach(route => {
        container.appendChild(createRoute(route, hasSearch));
      });

    if (!container.children.length) {
      container.innerHTML = `
        <p style="padding:20px;text-align:center;">
          Nenhuma rota encontrada.
        </p>
      `;
    }
  }

  searchInput.addEventListener("input", renderRoutes);

  renderRoutes();

});
