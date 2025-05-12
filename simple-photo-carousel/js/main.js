window.onload = function () {
  const a1 = document.getElementById("a1");
  const a2 = document.getElementById("a2");
  const a3 = document.getElementById("a3");
  const a4 = document.getElementById("a4");
  const a5 = document.getElementById("a5");
  const phone = document.getElementById("contentPhone");
  const photoUrl = [
    'url("https://images.pexels.com/photos/9942763/pexels-photo-9942763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    'url("https://images.pexels.com/photos/30482111/pexels-photo-30482111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    'url("https://images.pexels.com/photos/31886164/pexels-photo-31886164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    'url("https://images.pexels.com/photos/30565210/pexels-photo-30565210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    'url("https://images.pexels.com/photos/31989246/pexels-photo-31989246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
  ];
  let pageIdx = 1;
  let timeBox = null;

  a1.addEventListener("click", showPhoto);
  a2.addEventListener("click", showPhoto);
  a3.addEventListener("click", showPhoto);
  a4.addEventListener("click", showPhoto);
  a5.addEventListener("click", showPhoto);

  function showPhoto() {
    pageIdx = Number(this.id.substr(1));
    phone.style.backgroundImage = photoUrl[pageIdx - 1];
    resetPhoto();
    clearInterval(timeBox);
    timeGO();
  }

  function resetPhoto() {
    for (let i = 1; i < 6; i++) {
      document.getElementById("a" + i).style.opacity = 0.5;
    }
    document.getElementById("a" + pageIdx).style.opacity = 1;
  }

  function timeGO() {
    timeBox = setInterval(() => {
      pageIdx++;
      if (pageIdx > 5) {
        pageIdx = 1;
      }
      resetPhoto();
      phone.style.backgroundImage = photoUrl[pageIdx - 1];
    }, 1000);
  }

  a1.style.opacity = 1;
  timeGO();
};
