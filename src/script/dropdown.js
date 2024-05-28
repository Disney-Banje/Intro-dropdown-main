document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    // console.log(dropdowns);

    dropdowns.forEach(dropdown => {
        const dropdownBtn = dropdown.querySelector('.dropdown-btn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        const arrowIcon = dropdown.querySelector('.arrow');

        dropdownBtn.addEventListener('click', () => {
           const isActive = dropdownContent.classList.toggle('active');

           arrowIcon.src = isActive ? '../../src/assets/icon-arrow-down.svg' : '../../src/assets/icon-arrow-up.svg';

            dropdowns.forEach(otherDropdrown => {
                if (otherDropdrown !== dropdown) {
                    otherDropdrown.querySelector('.dropdown-content').classList.add('active');
                    const otherArrowIcon = otherDropdrown.querySelector('.arrow');
                    otherArrowIcon.src = '../../src/assets/icon-arrow-down.svg';
                }
            });
        });
    });

});

