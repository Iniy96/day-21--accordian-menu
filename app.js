const accorHeaders = document.querySelectorAll(".accordianHeader");
accorHeaders.forEach((ach) => {
  ach.addEventListener("click", toggleItem, false);
});
function toggleItem() {
  const currentcontentele = this.nextElementSibling;

  const iscollapsed = currentcontentele.classList.contains("collapse");

  accorHeaders.forEach((ach) => {
    const currentcontentele = ach.nextElementSibling;
    if (!currentcontentele.classList.contains("collapse")) {
      currentcontentele.classList.add("collapse");
    }
  });
  if(iscollapsed){
    currentcontentele.classList.remove("collapse");
  }
}
