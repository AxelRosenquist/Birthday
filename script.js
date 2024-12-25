let string = 'Den tjugoandra mars ska du och jag se Molly Hammar i Malmö. I presenten ingår även restaurangbesök och annat du vill hitta på!';
let cryptString = '';
let dictionary = {1: 'g', 2: 'a', 3: 'ö', 4: 'k', 5: 'b', 6: 'd', 7: 'o', 8: 't', 9: 'p', 10: 'v', 11: 'n', 12: 'e', 13: 'ä', 14: 'i', 15: 'å', 16: 's', 17: 'l', 18: 'c', 19: 'h', 20: 'j', 21: 'm', 22: 'u', 23: 'r', 24: 'y', 25: ' '};

string.toLowerCase().split('').forEach((letter) => {
    if (!(letter == '.' || letter == '!' || letter == ',')){
        for (let key in dictionary){
            if (dictionary[key] == letter){
                cryptString += (key.toString() + ' ' ) 
            }
        }
    } else {
        cryptString += letter 
    }
});
let currentString = cryptString;

document.getElementById('secretString').innerHTML = cryptString;

let number;
let character;
document.getElementById('submit').onclick = function(){
    event.preventDefault();
    number = Number(document.getElementById('number').value);
    character = document.getElementById('character').value;
    console.log('_' + String(number) + ' ' + '_')
    
    if (dictionary[number] == character){
        currentString = currentString.replaceAll(String(number) + ' ',  character)
        console.log('You guessed Right');
        console.log(currentString);
        document.getElementById('secretString').innerHTML = currentString;
    }else{
        console.log('You guessed wrong');

    }
};

