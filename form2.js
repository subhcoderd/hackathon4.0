document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("loginBtn");
    const loginPopup = document.getElementById("loginPopup");
    const closeBtn = document.querySelector(".close");

    // Open the popup when the login button is clicked
    loginBtn.addEventListener("click", function() {
        loginPopup.style.display = "flex";
    });

    // Close the popup when the close button is clicked
    closeBtn.addEventListener("click", function() {
        loginPopup.style.display = "none";
    });

    // Close the popup when clicking outside of the popup content
    window.addEventListener("click", function(event) {
        if (event.target === loginPopup) {
            loginPopup.style.display = "none";
        }
    });
});