const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')
const goalInput = document.getElementById('goal')
const cupsContainer = document.getElementById('cups')

goalInput.addEventListener('change', updateCups)
    updateCups() 
    function updateCups() {
        let goal = +goalInput.value
        goal = Math.round(goal * 4) / 4 // Round to the nearest 0.25L increment
        goalInput.value = goal.toFixed(2)
        const numberOfCups = goal * 4 // Each cup is 0.25L, so multiply by 4 for L

        cupsContainer.innerHTML = ''

        for (let i = 0; i < numberOfCups; i++) {
            const cup = document.createElement('div')
            cup.classList.add('cup', 'cup-small')
            cup.innerText = '250 ml'
            cup.addEventListener('click', () => highlightCups(i))
            cupsContainer.appendChild(cup)
        }

        highlightCups(-1)
}

function highlightCups(idx) {
    const allCups = document.querySelectorAll('.cup-small')

    if (idx !== -1 && allCups[idx].classList.contains('full') && 
        (allCups[idx].nextElementSibling === null || !allCups[idx].nextElementSibling.classList.contains('full'))) {
        idx--
    }

    allCups.forEach((cup, ind) => {
        if (ind <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const goal = +goalInput.value
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = document.querySelectorAll('.cup-small').length

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${Math.round(fullCups / totalCups * 100)}%`
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerHTML = `${goal - (0.25 * fullCups)}L`
    }
}

updateBigCup()
