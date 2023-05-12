/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const navbar = document.querySelector('.navbar__menu');
const navbarList = document.getElementById('navbar__list');
const pageSections = document.querySelectorAll('section');
const scrollToTopBtn = document.getElementById('scroll-to-top');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


// Scroll to top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the navbar items from each section's data-nav attribute
function buildNavBar() {
    for (const data of pageSections) {
        const navbarListItem = document.createElement('li');
        const sectionId = data.getAttribute('id');
        const listItemInnerText = data.getAttribute('data-nav');
        navbarListItem.innerHTML += `<a class='menu__link' data-section-id='${sectionId}' href='#'>${listItemInnerText}</a>`;
        navbarList.appendChild(navbarListItem);
    }
};

// Scroll to section when clicking the related navbar item
function scrollToSection() {
    const navbarListItem = document.querySelectorAll('.menu__link');
    for (const item of navbarListItem) {
        item.addEventListener('click', e => {
            e.preventDefault();
            const sectionToScrollId = item.getAttribute('data-section-id');
            const sectionToScrollTo = document.getElementById(sectionToScrollId);
            sectionToScrollTo.scrollIntoView({ behavior: "smooth" });
        })
    };
};

// Add class 'active' to section and to navbar item when section is near top of viewport
function addActiveClass() {
    // Get current scroll position
    let scrollY = window.pageYOffset; 
    // Get height of each section
    for (const section of pageSections) {
        let sectionTop = (section.getBoundingClientRect().top + window.pageYOffset) - 100;
        let sectionHeight = section.getBoundingClientRect().height;
        let sectionId = section.id

     // Add active class to navbar item and the section that enters the space where current scroll position is
     // Remove active class otherwise
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            section.classList.add('active');
            document.querySelector(`[data-section-id="${sectionId}"]`).classList.add('active');
        } else {
            section.classList.remove('active');
            document.querySelector(`[data-section-id="${sectionId}"]`).classList.remove('active');
        }
    }
};

// Add scroll to top arrow button
function addScrollToTopButton() {
    if (window.scrollY > window.innerHeight) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
buildNavBar();

// Scroll to section on link click
scrollToSection();

// Set section and navbar item as 'active'
window.addEventListener('scroll', addActiveClass);

// Listen for a scroll event to display scroll to top arrow button
document.addEventListener('scroll', addScrollToTopButton);

// Add click event to scroll to top arrow button
scrollToTopBtn.addEventListener('click', scrollToTop);
