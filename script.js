document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav__link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetSectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });

                // Highlight the clicked link
                document.querySelectorAll('a.nav__link').forEach(link => {
                    link.classList.remove('active');
                });

                this.classList.add('active');
            }
        });
    });

    // Highlight the active link based on the section in view
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;

        document.querySelectorAll('section').forEach(section => {
            if (
                scrollPosition >= section.offsetTop - 50 &&
                scrollPosition < section.offsetTop + section.offsetHeight - 50
            ) {
                // Remove the active class from all links
                document.querySelectorAll('a.nav__link').forEach(link => {
                    link.classList.remove('active');
                });

                // Add the active class to the corresponding link
                const correspondingLink = document.querySelector(`a.nav__link[href="#${section.id}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    });

    // Add your other JavaScript code here
   
});
