const openSidebarBtn = document.querySelector('.open-btn');
const closeSidebarBtn = document.querySelector('.close-btn');
const sidebarEl = document.querySelector('.sidebar');
const navBtns = document.querySelector('.nav-btns');
const sidebarBtnsEl = document.querySelectorAll('.side-nav');

openSidebarBtn.addEventListener('click', () => {
  sidebarEl.classList.add('show-sidebar');
  navBtns.classList.add('sidebar-open');
});
closeSidebarBtn.addEventListener('click', () => {
  sidebarEl.classList.remove('show-sidebar');
  navBtns.classList.remove('sidebar-open');
});

sidebarBtnsEl.forEach((btn) =>
  btn.addEventListener('click', () => {
    navBtns.classList.remove('sidebar-open');
    sidebarEl.classList.remove('show-sidebar');
  })
);
