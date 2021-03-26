const number = +prompt ('Введите число');


function declineMyName (number, myName) {
  let result; 
  let count = number % 100;
  if (count >= 5 && count <= 20) {
    result = myName [2];
  } else {
    count = count % 10;
    if (count === 1) {
        result = myName [0];
    } else if (count >= 2 && count <= 4) {
        result = myName [1];
    } else {
        result = myName [2];
    }
  }
  return result;
  }


console.log (declineMyName(number,['Настя', 'Насти', 'Насть']) );