function merge (inputArr1, inputArr2) {

    let newArr = [];

    for ( let i = 0; i < inputArr1.length; i++) {

        if (i % 2 == 0) {
            newArr[i] = Number(inputArr1[i]) + Number(inputArr2[i]);
        } else {
            newArr[i] = inputArr1[i] + inputArr2[i];
        }
    }


    console.log(newArr.join(' - '));

}
merge(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)