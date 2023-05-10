function description(item) {
  const descripts = document.querySelectorAll("#description");
  const descriptionModal = document.getElementById("descriptionModal");
  descripts.forEach((descript) => {
    descript.addEventListener("click", () => {
      let descriptionID = descript.parentNode.parentNode.id;
      for (let i = 0; i < item.length; i++) {
        if (descriptionID == item[i].id) {
          descriptionModal.showModal();
          descriptionModal.innerHTML =
            `
            <form action="..." method="dialog">
              <div class="descElement" id="desItem"><strong>Item:</strong>  ` +
            item[i].type +
            `</div>
              <div class="descElement" id="desTitle"><strong>Title:</strong>` +
            item[i].title +
            `</div>
              <div class="descElement" id="desDescription"><strong>Description:</strong>` +
            item[i].description +
            `</div>
              <div class="descElement" id="desProject"><strong>Project:</strong>` +
            item[i].project +
            `</div>
              <div class="descElement" id="desDate"><strong>Due Date:</strong>` +
            item[i].date +
            `</div>
              <div class="descElement" id="desPriority"><strong>Priority:</strong>` +
            item[i].priority +
            `</div>
              <div style="margin-top:10px;width:100%;display:flex; justify-content:center;"><button id="cancel">Close</button></div>
            </form>`;
        }
      }
    });
  });
}

export { description };
