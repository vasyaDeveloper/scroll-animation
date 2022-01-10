const links = document.querySelectorAll('a[href*="#"]');

for (let link of links) {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const getId = link.getAttribute('href').substr(1);
        document.getElementById(getId).scrollIntoView({
            block: "start",
            behavior: "smooth",
        })
    })
}