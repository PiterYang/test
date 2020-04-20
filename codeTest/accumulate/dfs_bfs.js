// 深度遍历

var ds = obj => {
    let nodes = [];
    let stack = [];
    if (obj) {
        stack.push(obj);
        while (stack.length) {
            // 先进后出
            let item = stack.pop();
            let children = item.children;
            nodes.push(item);
            for (let i = children.length; i > 0; i--) {
                stack.push(children[i]);
            }
        }
    }
    return nodes;
};
// 深度遍历实现深拷贝

var dfs = (obj, existKey = []) => {
    let _obj;
    if (typeof obj === "array" || typeof obj === "object") {
        _obj = Array.isArray(obj) ? [] : {};
        var index = existKey.indexOf(obj);
        if (~index) {
            _obj = existKey[index];
        } else {
            existKey.push(obj);
            for (let i in obj) {
                _obj[i] = dfs(obj[i], existKey);
            }
        }
    } else if (typeof obj === "function") {
        _obj = eval("(" + obj.toString() + ")");
    } else {
        _obj = obj;
    }
    return _obj;
};
// 广度遍历
var fs = obj => {
    let nodes = [];
    let stack = [];
    if (obj) {
        stack.push(node);
        while (stack.length) {
            // 先进先出
            let item = stack.shift();
            let children = item.children;
            nodes.push(item);
            for (let i = 0; i < children.length; i++) {
                stack.push(children[i]);
            }
        }
    }
    return nodes;
};
// 广度遍历实现深拷贝
var bfs = obj => {
    let origin = [];
    let copy = {};

    let visited = [];
    if (typeof obj === "object" || Array.isArray(obj)) {
    }
};
