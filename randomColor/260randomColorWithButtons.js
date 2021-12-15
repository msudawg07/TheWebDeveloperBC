//Needs html file with multiple buttons

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
