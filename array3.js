
function is_array(value) {
    return typeof value.reduce == "function" &&
        typeof value.filter == "function" &&
        typeof value.map == "function" &&
        typeof value.length == "number"
}

let a = [2, 3];
let b = [2, 3];
let c = [5, 5];
function equalsCheck(a, b) {
    if (!(is_array(a) && is_array(b)))
        return false;

    if (a.length != b.length)
        return false;

    for (let i = 0; i < a.length; i++)
        if (a[i] !== b[i])
            return false;


    return true;
}
function isEqual(obj1, obj2) {
    let props1 = Object.getOwnPropertyNames(obj1);
    let props2 = Object.getOwnPropertyNames(obj2);

    if (props1.length != props2.length) {
        return false;
    }
    for (let i = 0; i < props1.length; i++) {
        let prop = props1[i];
        let p1 = obj1[prop];
        let p2 = obj2[prop];

        if (is_array(p1) && is_array(p2)) {
            if (!equalsCheck(p1, p2))
                return false;
        } else
            if (p1.constructor === object &&
                p2.constructor === object) {
                if (!isEqual(p1, p1))
                    return false;
            } else if (p1 !== p2)
                return false;
    }

    return true;
}

let a0 = { prop: [1, 2] }
let b0 = { prop: [1, 2] }
console.log(isEqual(a0, b0));

let a00 = { prop: [1, 2] }
let b00 = { prop: [1, 5] }
console.log(isEqual(a00, b00));
