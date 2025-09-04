const createNumber = (value: number): number => {
    return Math.floor(Math.random()* value)+1;
};

const setNumberList = (value:number, v:number ,createNumber: (v:number) => number): number[] =>{
    const t: number[] = [];
    for (let i = 0; i< value; i++) {
        t.push(createNumber(5))
    }
    return t;
}

const setnumberlist2 = (count: number, v:number, createNumber: (v:number) => number):number[] =>{
    return Array.from({length: count}, (item) => createNumber(v));
}



const number = setnumberlist2(100, 5, createNumber)
console.log(number);

type Stat = Record<number, number>;

const statistic : Stat = {};

//statistic["1000"] = 59



for (let v of number){
    if (v in statistic) {
        statistic[v]! += 1;
    } else {
        statistic[v] = 1;
    }
}
console.log(statistic);