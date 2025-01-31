// ADD Javascript //
document.addEventListener("DOMContentLoaded", function () {
    // navlist shop button //
    const dropdown = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    // add event listener for dropdown menu //
    dropdown.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent click from bubbling up
        dropdownMenu.classList.toggle("show"); // Toggle dropdown visibility
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });

    // Select the button that toggles the country dropdown
    const countryButton = document.querySelector(".disclosure__button");

    // Select the dropdown menu that contains the list of countries
    const countryDropdown = document.getElementById("HeaderCountryList");

    // Select the caret (arrow icon) that indicates dropdown expansion
    const caret = document.querySelector(".icon-caret");

    // Add a click event listener to the country button
    countryButton.addEventListener("click", function() {
        // Check if the dropdown is currently expanded
        const isExpanded = countryButton.getAttribute("aria-expanded") === "true";

        // Toggle the `aria-expanded` attribute (true if open, false if closed)
        countryButton.setAttribute("aria-expanded", !isExpanded);

        // Show or hide the dropdown based on the current state
        countryDropdown.style.display = isExpanded ? "none" : "block";

        // Rotate the caret (arrow) to indicate expansion or collapse
        caret.style.transform = isExpanded ? "rotate(0deg)" : "rotate(180deg)";
    });

    // Close the dropdown if the user clicks outside of it
    document.addEventListener("click", function(event) {
        // Check if the clicked element is NOT the button or dropdown menu
        if (!countryButton.contains(event.target) && !countryDropdown.contains(event.target)) {
            // Hide the dropdown
            countryDropdown.style.display = "none";

            // Reset the `aria-expanded` attribute to false
            countryButton.setAttribute("aria-expanded", "false");

            // Reset the caret rotation to default (pointing down)
            caret.style.transform = "rotate(0deg)";
        }
    });


});

// add event listener on search and favorite icon//

document.getElementById("search-icon").addEventListener("click", function(event) {
    event.preventDefault();
    let searchForm = document.getElementById("search-form");
    searchForm.style.display = searchForm.style.display === "block" ? "none" : "block";
});

document.getElementById("favorite-icon").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "https://shoparl.co/collections/all-products";
});

function submitSearch() {
    alert("Search submitted! Implement search functionality here.");
}

