// search button

async function fetchPageContent(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.text();
}

async function performSearch() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();
    
    if (searchTerm.length > 0) {
        let matchFound = false;

        const pages = ["about.html", "services.html", "portfolio.html", "contact.html", "faqs.html"];

        for (let page of pages) {
            try {
                const content = await fetchPageContent(page);
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = content;

                // Exclude header, nav, and footer
                const textNodes = tempDiv.querySelectorAll("body *:not(header):not(nav):not(footer)");

                textNodes.forEach(node => {
                    if (node.textContent.toLowerCase().includes(searchTerm)) {
                        matchFound = true;
                        window.location.href = page;
                    }
                });

                if (matchFound) break;

            } catch (error) {
                console.error('Error fetching page content:', error);
            }
        }

        if (!matchFound) {
            alert('No matches found');
        }
    }
}


// search button

//load more
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.readMoreBtn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const moreSection = this.previousElementSibling;
            if (moreSection.style.display === 'none' || moreSection.style.display === '') {
                moreSection.style.display = 'block';
                this.textContent = 'Show Less';
            } else {
                moreSection.style.display = 'none';
                this.textContent = 'Show More';
            }
        });
    });
});


//load more

//accordion
document.addEventListener("DOMContentLoaded", function() {
    var accordionButtons = document.querySelectorAll(".accordion-button");

    accordionButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});

//accordion

//hamburger menu

//hamburger menu


// Select all image elements inside the collage container
let images = document.querySelectorAll('#collage .img');

// Store original dimensions and styles in an array
let originalStyles = [];

// Initialize originalStyles array with each image's original style
images.forEach(function(image) {
    let originalStyle = {
        width: image.style.width,
        height: image.style.height,
        position: image.style.position,
        top: image.style.top,
        left: image.style.left,
        transform: image.style.transform,
        zIndex: image.style.zIndex
    };
    originalStyles.push(originalStyle);

    // Add click event listener to each image
    image.addEventListener('click', function(event) {
        if (event.target.classList.contains('expanded')) {
            // If already expanded, reset to original size and position
            image.style.width = originalStyle.width;
            image.style.height = originalStyle.height;
            image.style.position = originalStyle.position;
            image.style.top = originalStyle.top;
            image.style.left = originalStyle.left;
            image.style.transform = originalStyle.transform;
            image.style.zIndex = originalStyle.zIndex;
            event.target.classList.remove('expanded');
        } else {
            // Expand the clicked image to full width and height of the viewport
            image.style.width = '100%';
            image.style.height = '50%';
            image.style.position = 'fixed';
            image.style.top = '50%';
            image.style.left = '50%';
            image.style.transform = 'translate(-50%, -50%)';
            image.style.zIndex = '9999';
            event.target.classList.add('expanded');
        }
    });
});

//image

//dropdown menu
function showdropdown(event) {
    event.preventDefault();  // Prevent the default action of the anchor tag
    const dropdown = event.target.nextElementSibling;

    if (dropdown) {
        // Toggle the 'show' class on the dropdown menu
        dropdown.classList.toggle('show');
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('a')) {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
}


//dropdown menu
