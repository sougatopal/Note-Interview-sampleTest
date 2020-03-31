function Note() {
  let template = document.querySelector("#myTemplate");
  return {
    addNode: elem => {
      elem.appendChild(template.content.cloneNode(true));
    },
    delNode: elem => {
      elem.remove();
    },
    render: elem => {
      elem.appendChild(template.content.cloneNode(true));
    }
  };
}
var cont = document.querySelector("#app");
var note = new Note();
note.render(cont);
cont.addEventListener("click", function(e) {
  if (e.target.dataset.action === "add") {
    note.addNode(e.target.parentElement.lastElementChild);
  }
  if (e.target.dataset.action === "delete") {
    note.delNode(e.target.parentElement);
  }
});
