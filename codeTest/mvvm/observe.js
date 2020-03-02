function Dep() {
    this.subs = []
}
Dep.prototype = {
    addSub(item){
        this.subs.push(item)
    },
    notify(){
        this.subs.forEach(item => {
            item.update()
        })
    }
}

function observe (data) {
    if(!data || typeof data !== 'object') {
        return 
    }
    Object.keys(data).forEach(item => {
        defineReactive(data, key, data[key])
    })
}

function defineReactive(data, key, val) {
    let dep = new Dep()
    observe(val)
    Object.defineProperties(data, key, {
        get() {
            Dep.target && dep.addSub(Dep.target)
            return val
        },
        set(newVal) {
            if(newVal === val) return 
            val = newVal
            dep.notify()
        }
    })
}