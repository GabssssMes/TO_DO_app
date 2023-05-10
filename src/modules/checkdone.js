function done(item) {
  const dones = document.querySelectorAll("input[type=checkbox]");
  let donID;
  dones.forEach((don) => {
    don.addEventListener("click", () => {
      if (don.checked == true) {
        donID = don.parentNode.parentNode.id;
        for (let i = 0; i < item.length; i++) {
          if (donID == item[i].id) item[i].done = true;
        }
      } else if (don.checked == false) {
        donID = don.parentNode.parentNode.id;
        for (let i = 0; i < item.length; i++) {
          if (donID == item[i].id) item[i].done = false;
        }
      }
    });
  });
}
export { done };
