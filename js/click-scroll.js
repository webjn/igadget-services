// Array containing section numbers
var sectionArray = [1, 2, 4, 5];

// Function to handle scroll event
function handleScroll() {
    var docScroll = window.scrollY;
    sectionArray.forEach(function(value, index) {
        var offsetSection = document.getElementById('section_' + value).offsetTop - 75;
        if (docScroll >= offsetSection) {
            // Remove active class from all nav links
            document.querySelectorAll('.navbar-nav .nav-item .nav-link').forEach(function(link) {
                link.classList.remove('active');
                link.classList.add('inactive');
            });
            // Add active class to the corresponding nav link
            document.querySelectorAll('.navbar-nav .nav-item .nav-link')[index].classList.add('active');
            document.querySelectorAll('.navbar-nav .nav-item .nav-link')[index].classList.remove('inactive');
        }
    });
}

// Function to handle click event on .click-scroll elements
function handleClick(value) {
    var offsetClick = document.getElementById('section_' + value).offsetTop - 75;
    event.preventDefault();
    window.scrollTo({
        top: offsetClick,
        behavior: 'smooth'
    });
}

// Add scroll event listener
document.addEventListener('scroll', handleScroll);

// Add click event listeners to .click-scroll elements
document.querySelectorAll('.click-scroll').forEach(function(element, index) {
    element.addEventListener('click', function() {
        handleClick(sectionArray[index]);
    });
});

// Set initial state for nav links
document.querySelectorAll('.navbar-nav .nav-item .nav-link').forEach(function(link) {
    link.classList.add('inactive');
});
document.querySelectorAll('.navbar-nav .nav-item .nav-link')[0].classList.add('active');
document.querySelectorAll('.navbar-nav .nav-item .nav-link')[0].classList.remove('inactive');
