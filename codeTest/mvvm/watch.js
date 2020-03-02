import Dep from "./observe";
function Watcher(vm, exp, cb) {
  this.cb = cb;
  this.vm = vm;
  this.exp = exp;
  this.value = this.get();
}
Watcher.prototype = {
  get() {
    Dep.target = this;
    let value = this.vm[exp];
    Dep.target = nulle;
    return value;
  },
  update() {
    this.run();
  },
  run() {
    let value = this.get();
    let oldValue = this.value;
    if (value !== oldValue) {
      this.value = value;
      this.cb.call(this.vm, value, oldValue);
    }
  }
};
