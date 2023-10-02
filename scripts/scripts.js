// when hovering over element, add classlist to dropdown menu to make it visible

const dropdown = document.querySelector('.destinations');
const dropdown2 = document.querySelector('.packages');
const dropdownMenu = document.querySelector('.dropdown-list1');
const dropdownMenu2 = document.querySelector('.dropdown-list2');
const dropdownMenuChild = document.querySelector('.dropdown-list1-grid');
const dropdownMenuChild2 = document.querySelector('.dropdown-list2-grid');

function addActive() {
  dropdownMenu.classList.add('active');
}

function addActive2() {
  dropdownMenu2.classList.add('active');
}

dropdown.addEventListener('mouseover', () => {
  addActive();
});

dropdown.addEventListener('mouseout', () => {
  dropdownMenu.classList.remove('active');
}
);

dropdown2.addEventListener('mouseover', () => {
  addActive2();
});

dropdown2.addEventListener('mouseout', () => {
  dropdownMenu2.classList.remove('active');
}
);

dropdownMenu.addEventListener('mouseover', () => {
  addActive();
});

dropdownMenu.addEventListener('mouseout', () => {
  dropdownMenu.classList.remove('active');
}
);

dropdownMenu2.addEventListener('mouseover', () => {
  addActive2();
});

dropdownMenu2.addEventListener('mouseout', () => {
  dropdownMenu2.classList.remove('active');
}
);

const menuClick = document.querySelector('.menu-icon-parent');
const menu = document.querySelector('.enter-details-page');
const closeButton = document.querySelector('.fa-circle-xmark');

function addActive3() {
  menu.classList.add('clicked');
}

menuClick.addEventListener('click', () => {
  addActive3();
});

closeButton.addEventListener('click', () => {
  menu.classList.remove('clicked');
}

);




