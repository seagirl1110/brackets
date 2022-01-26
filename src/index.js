module.exports = function check(str, bracketsConfig) {
    const collBrackets = {};
    const openBrackets = [];
    const openCloseBrackets = [];
    const stack = [];

    bracketsConfig.forEach(element => {
        const item1 = element[0];
        const item2 = element[1];

        collBrackets[item2] = item1;

        if (item1 === item2) {
            openCloseBrackets.push(item1);
        } else {
            openBrackets.push(item1);
        }
    });

    for (const element of str) {
        if (openBrackets.includes(element)) {
            stack.push(element);
        } else if (openCloseBrackets.includes(element)) {
            if (element === stack[stack.length - 1]) {
                stack.pop();
            } else {
                stack.push(element);
            }
        } else {
            if (collBrackets[element] !== stack[stack.length - 1]) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0 ? true : false;
}