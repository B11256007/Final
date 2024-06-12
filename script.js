document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            sections.forEach(section => {
                section.classList.remove('active');
            });

            const target = document.getElementById(this.getAttribute('data-target'));
            target.classList.add('active');
        });
    });
});