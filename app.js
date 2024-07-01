// start go to paragraph
function goToParagraph(paragraphId) {
    var paragraph = document.getElementById(paragraphId);
    paragraph.scrollIntoView({ behavior: 'smooth' });
}
// end go to paragraph

/*
const icon = document.querySelector('icon-header');
icon.addEventListener((click) => {
    const m = document.querySelector('icon');
    m.style = 
})
*/

// start change view-more btn
const collapseElement = document.getElementById('collapseExample');
const viewMoreButton = document.querySelector('.view-more a');

collapseElement.addEventListener('show.bs.collapse', () => {
    viewMoreButton.textContent = 'View Less';
});

collapseElement.addEventListener('hide.bs.collapse', () => {
    viewMoreButton.textContent = 'View More';
});
// end change view-more btn

// start header carousel
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 5000);
}
// end header carousel