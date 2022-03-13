function rotate (inputArr, rotations) {

        for(let i = 1; i <= rotations; i++) {

            let num = inputArr.shift();
            inputArr.push(num)
        }

    console.log(inputArr.join(' '));
}
rotate([51, 47, 32, 61, 21], 2)