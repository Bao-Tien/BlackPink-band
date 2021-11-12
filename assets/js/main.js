// Buy Tickets
const btnBuys = document.querySelectorAll('.js-btn-buy')

const modal = document.querySelector('.js-modal')

const modalClose = document.querySelector('.js-modal-close')

const modalContainer = document.querySelector('.js-modal-container')


const showBuyTicket = () => {
    modal.classList.add('open')
}

const closeBuyTicket = () => {
    modal.classList.remove('open')
}

for (let btnBuy of btnBuys) {
    btnBuy.addEventListener('click', showBuyTicket)
}

modalClose.addEventListener('click', closeBuyTicket)

modal.addEventListener('click', closeBuyTicket)

modalContainer.addEventListener('click', (e) => {
    e.stopPropagation()
})

// Handle menu mobile
const header = document.getElementById('header')
const btnMenu = document.querySelector('.btn-menu-mobile')

const heightHeader = header.clientHeight;

const handleAction = () => {
    let isOpen = header.clientHeight === heightHeader
    if (isOpen) {
        header.style.height = 'auto'
    }
    else {
        header.style.height = null
    }
}

btnMenu.addEventListener('click', handleAction)

// Move tab
const menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for (let menuItem of menuItems) {
    menuItem.addEventListener('click', (e) => {
        let isSibling = menuItem.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav')
        if(isSibling) {
            e.preventDefault()
        } else{
            header.style.height = null
        }
    })
}