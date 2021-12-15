const username = document.querySelector('#username');
let h1 = document.querySelector('h1');
username.addEventListener('input', () => {
 if(username.value){
    h1.innerText = `Welcome, ${username.value}`; 
 } else if(username.value === ''){
      h1.innerText = "Enter Your Username";
 }  
});
