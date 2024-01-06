
let arr = [];

function CustomArray(...rest) {
    this.size = rest.length;

    for (let i = 0; i < rest.length; i++) {
        arr.push(rest[i]);
    }
}

CustomArray.prototype = {
    push: function (element) {
        arr[this.size++] = element;
        console.log(arr);
    },
    pop: function () {
        if (arr.length === 0) {
            console.log("Stack is empty");
            return;
        }
        let deletedElement = arr.pop();
        this.size = arr.length;
        console.log(arr);
        return deletedElement;
    },
    top: function () {
        if (arr.length === 0) {
            console.log("Stack is empty");
            return;
        }
        console.log(arr[arr.length - 1]);
    },
    print: function () {
        console.log(arr);
    },
    printReverse: function () {
        let output = "[";
        for (let i = arr.length - 1; i >= 0; i--) {
            if (i < arr.length - 1) {
                output += ",";
            }
            output += arr[i];
        }
        output += "]";
        console.log(output);
    },
    arrSize: function () {
        console.log(arr.length);
    },
};

let result = new CustomArray(1, 2, 3, 3, 2, 1);
result.push(55);
result.pop();
result.top();
result.print();
result.printReverse();
result.arrSize();
