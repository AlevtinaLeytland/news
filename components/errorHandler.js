export function errorHandler(error, container) {
  const titleError = document.createElement("h2");
  titleError.textContent = error.message;
  titleError.classList.add("titleError");
  container.innerHTML = "";
  container.append(titleError);
}
