const mathObj = {
    abs: (x) => {
        return Math.abs(x);
    },
    isEven: (x) => {
        return x % 2 === 0;
    },
    isOdd: (x) => {
        return x % 2 !== 0;
    },
    isStrictlyPositive: (x) => {
        return x > 0;
    },
    min: (x, y) => {
        return Math.min(x, y);
    },
    max: (x, y) => {
        return Math.max(x, y);
    },
}

