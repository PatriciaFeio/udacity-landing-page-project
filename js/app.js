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

const navbarList = document.getElementById('navbar__list');
const pageSections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


//createNavBar();
function createNavBar() {

    for (const data of pageSections) {
        //console.log(data.id)
        const dataNav = data.dataset.nav;
        const navbarListItem = document.createElement('li');
        navbarListItem.innerHTML += `<a class='menu__link' href='#${data.id}'>${dataNav}</a>`;
        navbarList.appendChild(navbarListItem);
    }
};


// Add class 'active' to section when near top of viewport
function addActiveClass() {

    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Get height of each section
    for (const section of pageSections) {
        let sectionTop = (section.getBoundingClientRect().top + window.pageYOffset) - 100;
        let sectionHeight = section.getBoundingClientRect().height;

     // Add active class to the section that enters the space where current scroll position is
     // Remove active class otherwise
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    }
};


// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
createNavBar();

// Scroll to section on link click

// Set sections as active
window.addEventListener('scroll', addActiveClass);
