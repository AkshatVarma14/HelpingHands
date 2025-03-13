// Dark Mode Toggle
document.getElementById("dark-mode-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Dropdown Toggle
const dropdownToggle = document.getElementById("dropdown-toggle");
const dropdownMenu = document.getElementById("dropdown-menu");

let isDropdownOpen = false;

dropdownToggle.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent immediate closing
    isDropdownOpen = !isDropdownOpen;
    dropdownMenu.classList.toggle("show", isDropdownOpen);
});

// Close dropdown when clicking outside
document.addEventListener("click", function () {
    if (isDropdownOpen) {
        dropdownMenu.classList.remove("show");
        isDropdownOpen = false;
    }
});