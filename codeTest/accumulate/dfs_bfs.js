// 深度遍历实现深拷贝

const dfs = (obj, existKey = {}){
    if (typeof obj === 'array' || typeof obj === 'object') {
        let _obj = typeof obj === 'object' ? {} : []
        
        for (let i in obj) {
            if (!existKey[i]) {
                _obj[i] = obj[i]
                existKey[i] = obj[i]
            } else {
                obj[i] = existKey[i]
            }
            dfs(obj[i])
        }
    } else if (typeof obj === 'function') {
        _obj = eval('(' + obj.toString() + ')')
    } else {
        _obj = obj
    }
}
