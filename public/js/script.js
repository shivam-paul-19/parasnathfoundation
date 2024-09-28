// navbar


let tabs = document.querySelectorAll('.nav-link');
for(tab of tabs) {
    tab.addEventListener('click', (event) => {
        for(t of tabs) {
            t.classList.remove('active');
        }

        event.target.classList.add('active');
        console.log(event.target);
    });
}