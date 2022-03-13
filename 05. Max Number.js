function maxNum (inputArr) {

    let flag = false;
    let outputArr = [];

    for(let i = 0; i < inputArr.length; i++) {
        for(let x = i + 1; x <= inputArr.length; x++){
                if (inputArr[i] <= inputArr[x]){
                    flag = false;
                    break;
                } else {
                    flag = true;
                }
        }
        if (flag) {
            outputArr.push(inputArr[i]);
        }
        flag = false;
    }

    console.log(outputArr.join(' '));
}
maxNum([42, 42, 20, 2, 13,])
