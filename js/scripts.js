function onPageLoad() {
  let form = document.querySelector("form");
  function onFormSubmit(event) {
    event.preventDefault();
    const userSelections = document.querySelectorAll("input[name=grocery-item]:checked");
    const userSelectionArray = Array.from(userSelections);
    userSelectionArray.sort((a, b) => {
      if (a.value < b.value) {
        return -1;
      }
      if (a.value > b.value) {
        return 1;
      }
    });
    const newArray = [];
    userSelectionArray.forEach(function(element) {
      let newElement = element.value;
      newElement = newElement.toUpperCase();
      newArray.push(newElement);
    });
    const ulElement = document.createElement("ul");
    newArray.forEach(function(element) {
      const liElement = document.createElement("li");
      liElement.append(element);
      ulElement.append(liElement);
    })
    form.setAttribute("class", "hidden");
    document.body.append(ulElement);
  }
  form.addEventListener("submit", onFormSubmit)
}

window.addEventListener("load", onPageLoad);