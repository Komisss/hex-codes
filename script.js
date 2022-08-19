function changeColor(){
    code = "";
    hexCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    for(let i = 0; i < 6; i++){
        code += hexCodes[Math.floor(Math.random()* hexCodes.length)];
    }
    document.getElementById('code').innerHTML = code;
    document.body.style.backgroundColor = "#" + code;
    code = '';
}   