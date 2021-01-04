(function(){
    let button = document.querySelector('#btn');
    const body = document.querySelector('body');
    const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    const value = document.querySelector('#hex-value');

    button.addEventListener('click', changeHexValue);


    function changeHexValue() {
        let hex = '#';

        for(let i = 0; i < 6; i++) {
            const index = Math.floor(Math.random() * hexValues.length); // od 0 do 15
            hex += hexValues[index];
            console.log(hex, 'hex');
        }

        value.textContent = hex;
        body.style.backgroundColor = hex;

    }

})()







