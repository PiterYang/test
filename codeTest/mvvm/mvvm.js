function MVVM(options) {
    this.$options = options
    let data = this._data = this.$options.data
    Object.keys(data).forEach(key => {
        this._proxy(key)
    })
    observe(data, this)
    this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
    _proxy(key) {
        let me = this
        Object.defineProperty(me, key, {
            get() {
                me._data[key]
            },
            set(newVal) {
                me._data[key] = newVal
            }
        })
    }
}