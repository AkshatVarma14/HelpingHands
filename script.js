document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Dropdown Toggle with accessibility enhancements
    const dropdownToggle = document.getElementById("dropdown-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");

    let isDropdownOpen = false;

    dropdownToggle.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent immediate closing
        isDropdownOpen = !isDropdownOpen;
        dropdownMenu.classList.toggle("show", isDropdownOpen);
        dropdownToggle.setAttribute("aria-expanded", isDropdownOpen);
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function () {
        if (isDropdownOpen) {
            dropdownMenu.classList.remove("show");
            isDropdownOpen = false;
            dropdownToggle.setAttribute("aria-expanded", "false");
        }
    });
});
