// 1 原型链继承

function Parent(name) {
    this.name = name;
    this.parent = "parent";
}

function Child(sex) {
    this.sex = sex;
}

Child.prototype = new Parent();

var child1 = new Child(12);

console.log(child1.parent);

// 2 借用构造函数继承（经典继承）（优点：可以传参，属性各个实例不会共享，缺点：没次创建实例都会创建一遍方法）

function Parent(name) {
    this.name = name;
    this.getName = function() {
        return this.name;
    };
}

function Child(sex, name) {
    Parent.call(this, name);
    this.sex = sex;
}

var child2 = new Child("nv", "perter");

console.log(child2.getName());
console.log(child2.name);
console.log(child2.sex);

// 3 组合继承(优点：可以传参，引用类型数据不共享，缺点调用了2次构造函数)

function Parent(name) {
    this.name = name;
}

Parent.prototype.getName = function() {
    return this.name;
};

function Child(sex, name) {
    Parent.call(this, name);
    this.sex = sex;
}

Child.prototype = new Parent();

Child.prototype.constructor = Child;

// 4 原型式继承（缺点： 就是ES5 Object.create()的模拟实现，将传入的对象作为创建的对象的原型）

function createObj(obj) {
    function F() {}
    F.prototype = obj;

    return new F();
}

// 5 寄生式继承 创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来增强对象，最后返回对象

function createObj(o) {
    var obj = Object.create(o);
    obj.saName = function() {
        console.log("jj");
    };
    return obj;
}

// 6 寄生组合继承

function Parent(name) {
    this.name = name;
}

Parent.prototype.getName = function() {
    return this.name;
};

function Child(sex, name) {
    Parent.call(this, name);
    this.sex = sex;
}

var F = function() {};

F.prototype = Parent.prototype;

Child.prototype = new F();
