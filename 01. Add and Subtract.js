function addAndSubtract (inputArr) {

    function sumArr(input) {
        
             let sum1 = 0;

         for(let i = 0; i < input.length; i++){
             sum1 += input[i];
        }

        return sum1;
    }

    let newArr = [];

    for(let i = 0; i < inputArr.length; i++){
        if (inputArr[i] % 2 == 0) {
            newArr[i] = Number(inputArr[i] + i);
        } else {
            newArr[i] = Number(inputArr[i] - i);
        }
    }

    console.log(newArr);
    console.log(sumArr(inputArr));
    console.log(sumArr(newArr));
}
addAndSubtract([5, 15, 23, 56, 35]);