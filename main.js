// Write class below
class ShiftCipher {
  constructor(shift){
    this.shift = shift;
  }
  encrypt(message) {
    let encryptString = '';
    const tempString = message.toUpperCase();

    for (let i=0; i < tempString.length; i++) {
      let charNum = tempString.charCodeAt(i);

      if (charNum <= 90 && charNum >= 65) {
        charNum += this.shift;
        if (charNum > 90) {
          charNum -= 26;
        }
      }
      encryptString += String.fromCharCode(charNum);
    }
    return console.log(encryptString);;
  }

  decrypt(encryptString) {
    let decryptString = '';
    const tempString = encryptString.toLowerCase();

    for (let i=0; i < tempString.length; i++) {
      let charNum = tempString.charCodeAt(i);

      if (charNum <= 122 && charNum >= 97) {
        charNum -= this.shift;
        if (charNum < 97) {
          charNum += 26;
        }
      }
      decryptString += String.fromCharCode(charNum);
    }
    return console.log(decryptString);
  }
}

const cipher = new ShiftCipher(2);
cipher.encrypt('hello');
cipher.decrypt('JGNNQ');
let arr = ['a','b','C','d'];
arr = arr.join('');
let index = 2;
console.log(arr);
console.log(`${arr.charAt(index)}`);
console.log(`${arr.charCodeAt(index)}`);
