document.addEventListener("DOMContentLoaded", function() {
    // 1. Define the Navbar HTML
    const navbarHTML = `
    <nav class="bg-white shadow-md sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center h-16">
                <!-- Logo with Pakistan Flag Style Icon -->
                <a href="index.html" class="flex items-center text-decoration-none group">
                    <div class="relative flex items-center justify-center mr-2">
                         <!-- Rotated -45deg to match Pakistan Flag orientation -->
                         <i class="fa-solid fa-star-and-crescent text-green-600 text-2xl transform -rotate-45 group-hover:scale-110 transition duration-300"></i>
                    </div>
                    <span class="font-bold text-xl text-gray-800 tracking-tight">Pak<span class="text-green-600">Culture</span></span>
                </a>
                
                <!-- Desktop Menu -->
                <div class="hidden md:flex space-x-1">
                    <a href="index.html" class="nav-link">Home</a>
                    <a href="punjab.html" class="nav-link">Punjab</a>
                    <a href="sindh.html" class="nav-link">Sindh</a>
                    <a href="kpk.html" class="nav-link">KPK</a>
                    <a href="balochistan.html" class="nav-link">Balochistan</a>
                    <a href="gb.html" class="nav-link">GB</a>
                    <a href="kashmir.html" class="nav-link">Kashmir</a>
                </div>

                <!-- Mobile Menu Button -->
                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-btn" class="outline-none text-gray-600 hover:text-green-600 focus:outline-none">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu (Hidden by default) -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 shadow-lg">
            <a href="index.html" class="mobile-nav-link block py-3 px-4 text-sm hover:bg-green-50 text-gray-700 border-b border-gray-100">Home</a>
            <a href="punjab.html" class="mobile-nav-link block py-3 px-4 text-sm hover:bg-green-50 text-gray-700 border-b border-gray-100">Punjab</a>
            <a href="sindh.html" class="mobile-nav-link block py-3 px-4 text-sm hover:bg-green-50 text-gray-700 border-b border-gray-100">Sindh</a>
            <a href="kpk.html" class="mobile-nav-link block py-3 px-4 text-sm hover:bg-green-50 text-gray-700 border-b border-gray-100">KPK</a>
            <a href="balochistan.html" class="mobile-nav-link block py-3 px-4 text-sm hover:bg-green-50 text-gray-700 border-b border-gray-100">Balochistan</a>
            <a href="gb.html" class="mobile-nav-link block py-3 px-4 text-sm hover:bg-green-50 text-gray-700 border-b border-gray-100">Gilgit-Baltistan</a>
            <a href="kashmir.html" class="mobile-nav-link block py-3 px-4 text-sm hover:bg-green-50 text-gray-700">Azad Kashmir</a>
        </div>
    </nav>
    `;

    // 2. Insert the Navbar at the very start of the body
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    // 3. Highlight the Active Link (Desktop & Mobile)
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    
    // Desktop Links
    const desktopLinks = document.querySelectorAll('.nav-link');
    desktopLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Mobile Links
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            // Add Tailwind classes for active state on mobile
            link.classList.add('bg-green-50', 'text-green-700', 'font-semibold');
            link.classList.remove('text-gray-700');
        }
    });

    // 4. Mobile Menu Toggle Logic
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");

    if(btn && menu) {
        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });
    }
});