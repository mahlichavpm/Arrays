function commonElements (inputArr1, inputArr2) {

    for(let i = 0; i < inputArr1.length; i++) {
        for (let x = 0; x < inputArr2.length; x++) {
            if (inputArr1[i] === inputArr2[x]) {
                console.log(inputArr1[i]);
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)