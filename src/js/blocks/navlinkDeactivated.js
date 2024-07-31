const headerNavLinks = document.querySelectorAll('.header__navlink')
const footerNavLinks = document.querySelectorAll('.footer__nav-link')

const addressPath = window.location

function deactivatePageLink (links) {
    links.forEach(link => {

        if (link.href === addressPath.toString()) {
            link.classList.add('disabled-link')

        } else {
            link.classList.remove('disabled-link')
        }
    })
}

deactivatePageLink(headerNavLinks)
deactivatePageLink(footerNavLinks)



