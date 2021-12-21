let pOne = 0;
let pTwo = 0;
let playingTo = document.querySelector('.playingTo')
let button = document.querySelectorAll('.buttonsMain');
for (let click of button) {
    click.addEventListener('click', () => {
        if (click.innerText == '1+PlayerOne') {
            pOne += 1;
        } else if (click.innerText == '1+PlayerTwo') {
            pTwo += 1;
        }
        document.querySelector('.score').innerText = `${pOne} to ${pTwo}`;
        if (pOne == playingTo.value || pTwo == playingTo.value) {
            disableButtons();
        }
    }
    )
}

function disableButtons() {
    button.forEach(elem => {
        elem.disabled = true
    })
}

let reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    window.location.reload();
})

