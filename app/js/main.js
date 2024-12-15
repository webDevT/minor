//start mobile menu
document.querySelector('.menu__btn').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('.header').classList.toggle('active');
  });
//end mobile menu

//start sticky header
window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    
    if (window.scrollY > 0) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
//end sticky header
  