function searchLinks() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const linkLists = document.querySelectorAll('.link-list');

    linkLists.forEach(list => {
        const links = list.getElementsByTagName('a');
        let hasVisibleLink = false;

        for (let link of links) {
            const text = link.textContent.toLowerCase();
            if (text.includes(input)) {
                link.parentElement.style.display = 'block';
                hasVisibleLink = true;
            } else {
                link.parentElement.style.display = 'none';
            }
        }

        const category = list.parentElement;
        category.style.display = hasVisibleLink ? 'block' : 'none';
    });
}