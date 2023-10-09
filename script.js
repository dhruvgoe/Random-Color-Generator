const getColor = () => {
    const randomNumber = Math.floor(Math.random()*16777215);
    // console.log(randomNumber);
    const randomCode = "#" + randomNumber.toString(16);
    // console.log(randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById('color-code').innerHTML = randomCode;

    // navigator.clipboard.writeText(randomCode);
}

document.getElementById('btn').addEventListener('click',getColor);

getColor();

const  copy = () => {
    const code = document.getElementById('color-code').innerHTML;
    navigator.clipboard.writeText(code);
}
document.getElementById('color-code').addEventListener('click',copy);