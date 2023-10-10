//creating select options for categories and countries in sidebar
export function createCategoryOptions(categories) {
  return categories.map((item) => {
    const categoryOption = document.createElement("option");
    categoryOption.textContent = `${item.at(0).toUpperCase()}${item.slice(1)}`;
    categoryOption.value = item;
    categoryOption.selected = item === "science"; //by default
    return categoryOption;
  });
}

export function createCountryOptions(countriesValue, countriesLabel) {
  const entries = countriesValue.map((key, index) => {
    return [key, countriesLabel[index]];
  });
  const arr = [];
  for (const [value, label] of entries) {
    const optionELem = document.createElement("option");
    optionELem.textContent = label;
    optionELem.value = value;
    optionELem.selected = value === "nl"; //by default
    arr.push(optionELem);
  }
  return arr;
}
