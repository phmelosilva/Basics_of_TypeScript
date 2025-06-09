type OrderDup = {
    price: number;
    id: number;
}

type UserDup = {
    name: string;
    age: number;
    orders: OrderDup[];
    sayMyName(): string;
}

const usuario: UserDup = {
    name: "Pedrão",
    age: 23,
    orders: [{
        price: 12, id: 1
    }],
    sayMyName() {
        return "1";
    },
}

interface IPerson2 {
    id: number;
    name: string;
    age: number;
    sayMyyName(): string;
}

class Personn implements IPerson2 {
    id: number;
    name: string;
    age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyyName(): string {
        return "Oi"
    }
}

function sumDup(x: number, y: number): number {
    return x+y;
}

const somaValores = sumDup(2, 3);

class GenericoNumero<T> {
    zeroValue: T
    sum: (x: T, y: T) => T

    constructor(zeroValue: T, sum: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}

interface MathFunc {
    (x: number, y: number): number;
}

const sum2: MathFunc = (x: number, y: number): number => {
    return x+y;
}






