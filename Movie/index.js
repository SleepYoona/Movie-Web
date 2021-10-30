const openPopupButtons = document.querySelectorAll('[data-modal-target]')
const closePopupButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openPopupButtons.forEach(a => {
	a.addEventListener('click', () => {
		const popup = document.querySelector(a.dataset.modalTarget)
		openPopup(popup)
	})
})

overlay.addEventListener('click', () => {
	const popups = document.querySelectorAll('.mvdesc.active')
	popups.forEach(popup => {
		closePopup(popup)
	})
})

closePopupButtons.forEach(button => {
	button.addEventListener('click', () => {
		const popup = button.closest('.mvdesc')
		closePopup(popup)
	})
})

function openPopup(popup){
	if (popup == null) return 
	mvdesc.classList.add('active')
	overlay.classList.add('active')
}
function closePopup(popup){
	if (popup == null) 
		return 
	mvdesc.classList.remove('active')
	overlay.classList.remove('active')
}

// const openPopupButtons = document.querySelector('.mvdesc')
// const closePopupButtons = document.querySelector('[data-close-button]')
// const overlay = document.getElementById('overlay')

// openPopupButtons.forEach(button => {
// 	button.addEventListener("click", () => {
// 		const popup = document.querySelector(button.dataset.popupTarget)
// 		openPopup(popup)
// 	})
// })

// closePopupButtons.forEach(button => {
// 	button.addEventListener('click', () => {
// 		const popup = button.closest('.mvdesc')
// 		closePopup(popup)
// 	})
// })

// function openPopup(popup){
// 	if (popup == null) return 
// 	mvdesc.classList.add('active')
// 	overlay.classList.add('active')
// }
// function closePopup(popup){
// 	if (popup == null) return 
// 	mvdesc.classList.remove('active')
// 	overlay.classList.remove('active')
// }