// search button

function performSearch() {
    // Get the search term
    const searchTerm = document.getElementById('search-input').value.toLowerCase();

    // Remove previous highlights
    removeHighlights();

    if (searchTerm) {
        // Get all text nodes
        const textNodes = document.body.querySelectorAll("*:not(script):not(style)");

        // Iterate over text nodes and highlight matches
        textNodes.forEach(node => {
            highlightMatches(node, searchTerm);
        });
    }
}

function highlightMatches(node, searchTerm) {
    if (node.children.length === 0 && node.innerText.toLowerCase().includes(searchTerm)) {
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        const highlightedText = node.innerHTML.replace(regex, '<span class="highlight">$1</span>');
        node.innerHTML = highlightedText;
    } else {
        for (let child of node.childNodes) {
            highlightMatches(child, searchTerm);
        }
    }
}

function removeHighlights() {
    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach(span => {
        span.outerHTML = span.innerText; // Replace the span with just the text content
    });
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
