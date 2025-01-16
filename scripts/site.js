
const seconds = (new Date()). getSeconds()

setTimeout(() => {

const p = document.querySelector('p')
p.textContent = 'General Kenobi' + seconds

}, 2000)

setTimeout(() => {
    if(seconds % 2 == 1)
    {
    p.style.color = '#990000'
    }
    {
        p.style.color = '#00CC00'
    }
}, 3000)