function getValueFromKey(obj, key) {
    return obj[key] ? obj[key] : undefined;
}

function addKeyValuePairs(obj1, ob2) {
    return { ...obj1, ...ob2 };
}

//test addKeyValuePairs

const obj1 = { key1: "value1", key2: "value2" };
const obj2 = { key3: "value3", key4: "value4" };

