document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu
    const menuButton = document.querySelector('.md\:hidden button');
    const mobileMenu = document.querySelector('.md\:hidden nav');

    if (menuButton) {
        menuButton.addEventListener('click', function() {
            if (mobileMenu) {
                mobileMenu.classList.toggle('hidden');
            }
        });
    }

    // Product filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productItems = document.querySelectorAll('.product-item');

    if (filterButtons && productItems) {
        filterButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const filter = this.dataset.filter;

                filterButtons.forEach(function(btn) {
                    btn.classList.remove('bg-blue-500', 'text-white');
                    btn.classList.add('bg-gray-300', 'text-gray-700');
                });

                this.classList.remove('bg-gray-300', 'text-gray-700');
                this.classList.add('bg-blue-500', 'text-white');

                productItems.forEach(function(item) {
                    if (filter === 'all') {
                        item.classList.remove('hidden');
                    } else {
                        if (item.classList.contains(filter)) {
                            item.classList.remove('hidden');
                        } else {
                            item.classList.add('hidden');
                        }
                    }
                });
            });
        });
    }
});
