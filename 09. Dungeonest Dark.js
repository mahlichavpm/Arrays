function dungeon (inputArr) {

    let newArr = inputArr[0].split('|');
    let roomCount = 1;
    let health = 100;
    let coins = 0;
    let flag = false;

    let command = [];
    
   
    for(let i = 0; i < newArr.length; i++) {
        command = newArr[i].split(' ');

        if (command[0] == 'potion'){
            
            health += Number(command[1]);
            if (health > 100) {
                let excess = health - 100;
                 command[1] = Number(command[1]) - excess;
                health = 100;
            }
            console.log(`You healed for ${command[1]} hp.`);
            console.log(`Current health: ${health} hp.`);
            roomCount ++;

        } else if (command[0] == 'chest') {

            coins += Number(command[1]);
            console.log(`You found ${command[1]} coins.`);
            roomCount++;

        } else {
            health -= Number(command[1]);
            if (health <= 0) {
                console.log(`You died! Killed by ${command[0]}.`);
                console.log(`Best room: ${roomCount}`);
                flag = true;
                break;
            } else {
                console.log(`You slayed ${command[0]}.`);
                roomCount++;
            }
        } 
    }

    if (!flag) {
        console.log('You\'ve made it!');
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);

    }

    
}
dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])