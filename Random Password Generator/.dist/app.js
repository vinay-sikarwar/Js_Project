const password = document.querySelector('.password');
const generate = document.querySelector('.generate');
const copy = document.querySelector('.bar button');
const pwLength = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const symbol = "!@#$%^&*()_+-=[]{}|;:',.<>?/`~";
const numbers = "0123456789;"
const allChar = upperCase + lowerCase + symbol + numbers ;

generate.addEventListener('click', () =>{
    
    let passwordGenerated = "";

    passwordGenerated += upperCase[Math.floor(Math.random() * upperCase.length)];
    passwordGenerated += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    passwordGenerated += symbol[Math.floor(Math.random() * symbol.length)];
    passwordGenerated += numbers[Math.floor(Math.random() * numbers.length)];

    while(pwLength > passwordGenerated.length){
        passwordGenerated += allChar[Math.floor(Math.random() * allChar.length)];
    }

    password.textContent = passwordGenerated;

});

copy.addEventListener('click', () =>{
    let text = password.textContent;
    const copyContent = async () => {
      try {
        await navigator.clipboard.writeText(text);
        console.log('Content copied to clipboard');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
    copyContent();
});