var types = {};

types.isBoolean = function(obj){
    return Object.prototype.toString.call(obj) === '[object Boolean]'
}

types.isNumber = function(obj){
    return Object.prototype.toString.call(obj) === '[object Number]'
}

types.isString = function(obj){
    return Object.prototype.toString.call(obj) === '[object String]'
}

types.isArray = function(obj){
    return Object.prototype.toString.call(obj) === '[object Array]'
}

types.isObject = function(obj){
    return Object.prototype.toString.call(obj) === '[object Object]'
}

types.isFunction = function(obj){
    return Object.prototype.toString.call(obj) === '[object Function]'
}

