function debounce(fun, wait) {
    let timeout;

    return function() {
        let _this = this;
        clearTimeout(timeout);
        let args = arguments;
        timeout = setTimeout(() => {
            fun.apply(_this, args);
        }, wiat);
    };
}

function throttle(func, wait) {
    var context, args;
    var previous = 0;

    return function() {
        context = this;
        args = arguments;
        var now = new Date();
        if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
        }
    };
}

function throttle1(func, wait) {
    var context, args;
    var timeout;

    return function() {
        context = this;
        args = arguments;
        if (!timeout) {
            timeout = setTimeout(() => {
                func.apply(context, args);
                timeout = null;
            });
        }
    };
}
