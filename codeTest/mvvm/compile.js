import Watcher from './watch'

let updater = {
    textUpdater(node, value) {
        node.textContent = typeof value === 'undefined' ? '' : value
    }
}

let compileUtil = {
    text(node, vm, exp) {
        this.bind(node, vm, exp, 'text')
    },
    bind(node, vm, exp, dir) {
        let updaterFn = updater[dir + 'Updater']
        updaterFn && updaterFn(node, vm[exp])
        new Watcher(vm, exp, function(value, oldValue){
            updaterFn && updaterFn(node, value, oldValue)
        })
    }
}


function Compile(el, vm) {
    this.$el = this.isElementNode(el) ? el : document.querySelector(el)
    this.$vm = vm
    if(this.$el) {
        this.$fragment = this.node2Fragment(this.$el)
        this.init()
        this.$el.appendChild(this.$fragment)
    }
}
Compile.prototype = {
    init() {
        this.compileElement(this.$fragment)
    },
    node2Fragment(el) {
        let fragment = document.createDocumentFragment(), child;
        while(child = el.firstChild) {
            fragment.appendChild(child)
        }
        return fragment

    },
    compileElement(el){
        let childNodes = el.childNodes, me = this
        [].slice.call(childNodes).forEach((node) => {
            var text = node.textContent
            let reg = /\{\{(.*)\}\}/
            if(this.isElementNode(node)) {
                this.compile(node)
            } else if(this.isTextNode(node) && reg.test(text)) {
                me.compileText(node, RegExp.$1)
            }
            if(node.childNodes && node.childNodes.length) {
                this.compileElement(node.childNodes)
            }
        })
    },
    compile(node) {
        var nodeAttrs = node.attributes
        [].slice.call(nodeAttrs).forEach(attr => {
            var attrName = attr.name
            if(this.isDirective(attrName)) {
                var exp = attr.value
                var dir = atrrName.subString(2)
                if(this.isEventDirective(dir)){
                    compileUtil.enventHandler(node, this.$vm, exp, dir)
                } else {
                    compileUtil[dir] && compileUtil[dir](node, this.$vm, exp)
                }
            }
        })
    },
    isElementNode(el) {
        return this.$el.nodeType === 1 
    }
}