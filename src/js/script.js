// поведение бургера
const burgerNode = document.querySelector('.burger')
burgerNode.addEventListener('click', function () {
   burgerNode.classList.add('burger--js-open')
})