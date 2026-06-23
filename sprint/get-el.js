function getElementsByTag(tag) {
    return document.getElementsByTagName(tag);
}

function getElementsByClassName(className) {
    return document.getElementsByClassName(className);
}

function getElementById(id) {
    const element = document.getElementById(id);
    return element === null ? undefined : element;
}

function getElementsByAttribute(attributeName, attributeValue) {
    if (attributeValue === undefined) {
        return document.querySelectorAll(`[${attributeName}]`);
    }
    return document.querySelectorAll(`[${attributeName}="${attributeValue}"]`);
}
