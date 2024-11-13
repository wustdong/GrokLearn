const strategyObj = {
    'S': function calculateBouns(salary) {
        return salary * 4;
    },
    'A': function calculateBouns(salary) {
        return salary * 3;
    },
    'B': function calculateBouns(salary) {
        return salary * 2;
    },
    'C': function calculateBouns(salary) {
        return salary * 1;
    },
};

const context = function (level, salary) {
    return strategyObj[level](salary);
}

const sStaff = context('S', 20000);
console.log('ssataff', sStaff)