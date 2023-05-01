function sum(numbers) {
    let add = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            break;
        }
        add += numbers[i];
    }
    return add;
}
