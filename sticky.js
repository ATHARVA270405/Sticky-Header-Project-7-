// JavaScript to handle dropdown toggle on click
document.addEventListener("DOMContentLoaded", function () {
    // Get all dropdown links
    const dropdowns = document.querySelectorAll(".dropdown > a");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function (event) {
            event.preventDefault();
            
            // Close all other dropdowns before opening the clicked one
            closeAllDropdowns();

            // Open the clicked dropdown
            const dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    });

    // Close all dropdowns
    function closeAllDropdowns() {
        const dropdownContents = document.querySelectorAll(".dropdown-content");
        dropdownContents.forEach(content => content.style.display = "none");
    }

    // Close dropdown if clicked outside
    document.addEventListener("click", function (event) {
        if (!event.target.matches('.dropdown > a')) {
            closeAllDropdowns();
        }
    });
});
