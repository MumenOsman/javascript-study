


// shallow copy with changes to nested properties only
const shallowCopy = { ...original };
shallowCopy.hobbies.push("swimming");
shallowCopy.address.street = "456 Main Street";

// deep copy with Changes to any property in original, including nested ones, should not affect deepCopy. Deepcopy should be similar to the original object structure. 

const deepCopy = structuredClone(original);


