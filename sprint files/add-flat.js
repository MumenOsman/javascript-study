const sumNestedArray = arr => arr.flat(Infinity).reduce((sum, val) => typeof val === "number" ? sum + val : sum, 0);

