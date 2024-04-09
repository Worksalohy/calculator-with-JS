const buttonNum = document.querySelectorAll('.butt.chiffre');
const buttonEqual = document.querySelector('#egale');
const buttonOperator = document.querySelectorAll('.groupe1.operator');
const buttonDel = document.querySelector('.butt.delete');
const buttonDelOneByOne = document.querySelector('.butt.delOne');
let text = document.querySelector('#textDroite');
let text2 = document.querySelector('#textGauche');
let regex = /[+\/*-]/;

buttonNum.forEach((but)=>{
    but.addEventListener('click', (evt)=>{
        if(text2.innerText == ''){
            let str = document.createTextNode(evt.target.innerText);
            text.appendChild(str);  
        }else if(text2.innerText !== '' && regex.test(text.innerText)){
            text2.innerText = `${text2.innerHTML} ${text.innerText}`;
            text.innerText = evt.target.innerText;
        } else if(/^[0-9]{1,}[ 0-9+\/*-]{1,}[+\/*-]$/.test(text2.innerText) && /[0-9]/.test(evt.target.innerText)){
            text.innerText = text.innerText + evt.target.innerText;
        }
    });
});

buttonOperator.forEach((but)=>{
    but.addEventListener('click', (evt)=>{
        if(text2.innerText == ''){
            text2.innerText = text.innerText;
            text.innerText = evt.target.innerText;
        }else if(/^[0-9]{1,}[ 0-9+\/*-]{1,}[+\/*-]$/g.test(text2.innerText) == false && regex.test(evt.target.innerText)) {
            text.innerText = evt.target.innerText;
        }else if(/^[0-9]{1,}[ 0-9+\/*-]{1,}[+\/*-]$/.test(text2.innerText) && regex.test(evt.target.innerText) && /[0-9]{1,}/.test(text.innerText)){
            text2.innerText = `${text2.innerText} ${text.innerText}`;
            text.innerText = evt.target.innerText;  
        }
    })
})

buttonEqual.addEventListener('click', ()=>{
    let value = `${text2.innerText} ${text.innerText}`
    let arr = value.split(' ');
    let result = Number(arr[0]);

        for(let i=0; i<arr.length; i++){
            let odd = 0;
            if(i%2 != 0){
                odd = i;
            }

            if(arr.length == 1){
                result = result;
            } else {
                if(arr[odd] == '+' && (odd>=1 && odd<=arr.length-1)){
                    result = result + Number(arr[odd+1]);
                }else if(arr[odd] == '-' && (odd>=1 && odd<=arr.length-1)){
                    result = result - Number(arr[odd+1]);
                }else if(arr[odd] == '*' && (odd>=1 && odd<=arr.length-1)){
                    result = result * Number(arr[odd+1]);
                }else if(arr[odd] == '/' && (odd>=1 && odd<=arr.length-1)){
                    result = result / Number(arr[odd+1]);
                }
            }
           
        }

    text2.innerText = `${text2.innerText} ${text.innerText}`;
    text.innerText = result;
});

buttonDel.addEventListener('click', ()=>{
    text.innerText = '';
    text2.innerText = '';
})

buttonDelOneByOne.addEventListener('click', ()=>{
    let str = text.innerText;
    let compt = 0;

    compt++;
    str = str.slice(0, str.length-compt);
    text.innerText = str;
})
