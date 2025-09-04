"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createNumber = (value) => {
    return Math.floor(Math.random() * value) + 1;
};
const setNumberList = (value, v, createNumber) => {
    const t = [];
    for (let i = 0; i < value; i++) {
        t.push(createNumber(5));
    }
    return t;
};
const setnumberlist2 = (count, v, createNumber) => {
    return Array.from({ length: count }, (item) => createNumber(v));
};
const number = setnumberlist2(100, 5, createNumber);
console.log(number);
const statistic = {};
//statistic["1000"] = 59
for (let v of number) {
    if (v in statistic) {
        statistic[v] += 1;
    }
    else {
        statistic[v] = 1;
    }
}
console.log(statistic);
//# sourceMappingURL=app.js.map