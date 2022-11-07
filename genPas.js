function generatePassword(length, level, array) {
    const passwordEasy = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const passwordMedium = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const passwordHard = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*+,-./:;<=>?@[]^_{|}~';


    const passwordsArray = []
    const ara = function (length, level) {
        let newPassword = '';
        for (let i = 0; i < length; i++) {
            const randomSymbolEasy = passwordEasy[Math.floor(Math.random() * passwordEasy.length)];
            const randomSymbolMedium = passwordMedium[Math.floor(Math.random() * passwordMedium.length)];
            const randomSymbolHard = passwordHard[Math.floor(Math.random() * passwordHard.length)];
            if (level === 'easy' || level === undefined) newPassword += `${randomSymbolEasy}`;
            if (level === 'medium') newPassword += `${randomSymbolMedium}`;
            if (level === 'hard') newPassword += `${randomSymbolHard}`;
        }
        return newPassword
    }
    if (array === undefined) {
        return ara(length, level)
    }
    if (array !== undefined) {

        do {let pass = ara(length, level)
            if(!passwordsArray.includes(pass))
            passwordsArray.push(pass)} while (passwordsArray.length < array)
            
        

    }
    let vozvrat
    array === undefined ? vozvrat = newPassword : vozvrat = passwordsArray
    return vozvrat
}
console.log(generatePassword(1, 'easy', 5))
