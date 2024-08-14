document.addEventListener("DOMContentLoaded", function() {
    var sidebar = document.getElementById("sidebar");
    var sections = document.querySelectorAll(".section");

    function updateSidebar() {
        sections.forEach(function(section) {
            var rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                sidebar.querySelector("a[href='#" + section.id + "']").classList.add("active");
                section.classList.add("active");
            } else {
                sidebar.querySelector("a[href='#" + section.id + "']").classList.remove("active");
                section.classList.remove("active");
            }
        });
    }

    function toggleSidebar() {
        if (window.scrollY > 100 && sidebar.style.display !== "block") {
            sidebar.style.opacity = "0";
            sidebar.style.display = "block";
            setTimeout(() => {
                sidebar.style.opacity = "1";
            }, 50); 
        } else if (window.scrollY <= 100 && sidebar.style.display === "block") {
            sidebar.style.opacity = "0";
            setTimeout(() => {
                sidebar.style.display = "none";
            }, 300);
        }
    }

    window.addEventListener("scroll", function() {
        updateSidebar();
        toggleSidebar();
    });

    updateSidebar();
    toggleSidebar();
});
