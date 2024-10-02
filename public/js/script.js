const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function people() {
    window.scrollTo(0, 1509);
}

function contact() {
    window.scrollTo(0, 1959);
}