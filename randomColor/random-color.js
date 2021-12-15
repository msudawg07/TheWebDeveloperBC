const p = document.querySelector('p')
const clickOn = document.querySelector('button').addEventListener('click', () => { 
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
   document.querySelector('body').style.backgroundColor = `rgb(${r},${g},${b})`;
   p.innerText = `rgb (${r},${g},${b})`
});


//Same thing but with random color as a function:

function random(){
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`
}

const buttons = document.querySelectorAll('button');
for(let buttonss of buttons){
  buttonss.addEventListener('click', () => {
  buttonss.style.backgroundColor = random();
  })
};
