// Function to show the selected section and hide others
function showSection(sectionId) {
    // Get all sections
    const sections = document.querySelectorAll('section');
    
    // Hide all sections
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // select to the section
    document.getElementById(sectionId).style.display = 'block';
}

// show to the about me section
document.addEventListener('DOMContentLoaded', function() {
    showSection('about');
});
function move() {
    window.location.href ="file:///C:/Users/DILLI%20GHANESH%20A/Desktop/web%20desinseries/java%20script/calculat%20js/cal.html";  // Replace 'nextpage.html' with your desired page
}
function moveToNextPage() {
    window.location.href ="https://www.coursera.org/account/accomplishments/specialization/UX5T0BAKDQUY";  // Replace 'nextpage.html' with your desired page
}