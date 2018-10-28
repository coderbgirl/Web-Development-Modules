const questionOne = function questionOne(arr) {
    let myNumArraySquared = arr.map(x => {
        return x * x;
      });
      let sum = myNumArraySquared.reduce((currentTotal, newValue) => {
        const newTotal = currentTotal + newValue;
        return newTotal;
      }, 0);
      return sum;
}

const questionTwo = function questionTwo(num) { 
    let fib1 = 0;
    let fib2 = 1;
    let n = 2;

    if (num <= 0) {
        return 0;
    }
    if (num == 1) {
        return 1;
    }
    while(n <= num) {
        let temp = fib2;
        fib2 = fib2 + fib1;
        fib1 = temp;
        n++;
    }
    return fib2;
}

const questionThree = function questionThree(text) {
    let count = 0;
    let i = 0;
    text = text.toUpperCase();

    while (i < text.length) {
        i++;
        if(text.charAt(i) == "A" || text.charAt(i) == "E" || text.charAt(i) == "I" || text.charAt(i) == "O" || text.charAt(i) == "U") {
            count++;
        }
    }
    return count;

}

const questionFour = function questionFour(num) {
    let ret = 1;

    if(num<0) {
        return NaN;
    }
    if (num == 0) {
        return 1;
    }

    while(num>0) {
        ret = ret*num;
        num--;
    }
    return ret;
}

module.exports = {
    firstName:"BHUMIKA", 
    lastName: "PATOLIYA", 
    studentId: "10432870",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};