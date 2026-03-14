const icon = document.getElementById("theme-icon");

icon.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");

  // Si es dark o no existe, pasamos a light. Si es light, pasamos a dark.
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // Aplicamos el nuevo tema al elemento raíz (html)
  document.documentElement.setAttribute("data-theme", newTheme);

  console.log(`Cambiado a modo: ${newTheme}`);
});

