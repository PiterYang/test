// 位运算 ~ 本质是求负，然后减一

console.log(~1); // -2
console.log(~-1); // 0

// 数组去重

function unique(arr) {
    let res = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0, reslen = res.length; j < reslen; j++) {
            if (res[j] === arr[i]) {
                break;
            }
        }

        if (j === reslen) {
            res.push(arr[i]);
        }
    }

    return res;
}

var arr = [1, 1, "1", "1"];

console.log(unique(arr));

function sortedUnique(arr) {
    var res = [];
    var seen;
    for (var i = 0; i < arr.length; i++) {
        if (!i || seen !== arr[i]) {
            res.push(arr[i]);

            seen = arr[i];
        }
    }

    return res;
}

console.log(sortedIndex([1, 2, 4, 5], 3));

// 函数柯里化

function sub_curry(fn) {
    var args = [].slice.call(arguments, 1);
    return function() {
        return fn.apply(this, args.concat([].slice.call(arguments)));
    };
}

function curry(fn, length) {
    length = length || fn.length;
    var slice = Array.prototype.slice;
    return function() {
        if (arguments.length < length) {
            var combined = [fn].concat(slice.call(arguments));
            return curry(
                sub_curry.apply(this, combined),
                length - arguments.length
            );
        } else {
            return fn.apply(this, arguments);
        }
    };
}

function test(a, b, c) {
    return [a, b, c];
}

var ft = curry(test);

console.log(ft("a", "b", "c"));

console.log(ft("a", "b")("c"));

console.log(ft("a")("b")("c"));

// 偏函数

function partial(fn) {
    var args = [].slice.call(arguments, 1);
    return function() {
        var newArgs = args.concat([].slice.call(arguments));
        return fn.apply(this, newArgs);
    };
}

// 函数组合

function compose() {
    var args = arguments;
    var start = args.length - 1;

    return function() {
        var i = start;
        var result = args[start].apply(this, arguments);
        while (i--) result = args[i].call(this, result);
        return result;
    };
}

// Set 数据结构模拟实现

(function(global) {
    var NaNSymbol = Symbol("NaN");

    var encodeVal = function(value) {
        return value !== value ? NaNSymbol : value;
    };

    var decodeVal = function(value) {
        return value === NaNSymbol ? NaN : value;
    };

    var makeIterator = function(array, iterator) {
        var nextIndex = 0;

        var obj = {
            next: function() {
                return nextIndex < array.length
                    ? { value: iterator(array[nextIndex++]), done: false }
                    : { value: void 0, done: true };
            }
        };

        obj[Symbol.iterator] = function() {
            return obj;
        };

        return obj;
    };

    function forOf(obj, cb) {
        let iterable, result;
        if (typeof obj[Symbol.iterator] !== "function")
            throw new TypeError(obj + "is not iterable");
        if (typeof cb !== "function")
            throw new TypeError("cb must be callable");

        iterable = obj[Symbol.iterator]();

        result = iterable.next();

        while (!result.done) {
            cb(result.value);
            result = iterable.next();
        }
    }

    function Set(data) {
        this._value = [];
        this.size = 0;
        forOf(data, item => {
            this.add(item);
        });
    }

    Set.prototype["add"] = function(value) {
        value = encodeVal(value);
        if (this._values.indexOf(value) == -1) {
            this._value.push(value);
            ++this.size;
        }
        return this;
    };

    Set.prototype["has"] = function(value) {
        return this._values.indexOf(value) !== -1;
    };

    Set.prototype["delete"] = function(value) {
        var inx = this._values.indexOf(encodeVal(value));
        if (idx == -1) return false;
        this._values.splice(idx, 1);
        --this.size;
        return this;
    };

    Set.prototype["clear"] = function() {
        this._values = [];
        this.size = 0;
    };

    Set.prototype["forEach"] = function(callbackFn, thisArg) {
        thisArg = thisArg || global;
        for (var i = 0; i < this._values.length; i++) {
            callbackFn.call(thisArg, this._values[i], this._values[i], this);
        }
    };

    Set.prototype["values"] = Set.prototype["keys"] = function() {
        return makeIterator(this._values, function(value) {
            return decodeVal(value);
        });
    };

    Set.prototype["entries"] = function() {
        return makeIterator(this._values, function(value) {
            return [decodeVal(value), decodeVal(value)];
        });
    };

    Set.prototype[Symbol.iterator] = function() {
        return this.values();
    };

    Set.length = 0;
    global.Set = Set;
})(this);
