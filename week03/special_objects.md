### ES 的对象类型

- 宿主对象，由 JS 宿主环境提供的对象，它们的行为完全由宿主环境决定

- 内置对象，由 JS 语言提供的对象，包括：
    - 固有对象，由标准规定，随着 JS 运行时创建的对象实例
    - 原生对象，通过内置构造器或者特定语法创建的对象
    - 普通对象，由 `{}` 语法， Object 构造器或者 class 关键字定义创建的对象，它能够被原型继承

### 标准规定的无法通过 JS 代码模拟实现的对象

- 基本类型
    - Boolean
    - String
    - Number
    - Symbol
    - Object

- 基础功能和数据结构
    - Array
    - Date
    - RegExp
    - Promise
    - Proxy
    - Map
    - WeakMap
    - Set
    - WeakSet
    - Function

- 错误类型
    - Error
    - EvalError
    - RangeError
    - ReferenceError
    - SyntaxError
    - TypeError
    - URIError

- 二进制操作
    - ArrayBuffer
    - SharedArrayBuffer
    - DataView

- 类型数组
    - Int8Array(char)
    - Uint8Array(unsigned char)
    - Uint8ClampedArray(unsigned char)
    - Int16Array(short)
    - Uint16Array(unsigned short)
    - Int32Array(int)
    - Uint32Array(unsigned int)
    - Float32Array(float)
    - Float64Array(double)

- 怪异对象
    - Bound Function Exotic Objects (bind 方法返回的函数对象，和原函数关联)
    - Array Exotic Objects (Array 的 length 属性根据最大的下标自动发生变化)
    - String Exotic Objects (String 的正整数属性访问转为字符串下标查找运算)
    - Arguments Exotic Objects (arguments 的非负整型下标属性和对应的参数变量关联)
    - Integer-Indexed Exotic Objects (整数索引属性的特殊处理，主要是对类型数组的特殊下标运算)
    - Module Namespace Exotic Objects (模块 namaspace 对象关联 import / export 语法，和其他对象差异很大)
    - Immutable Prototype Exotic Objects (Object.prototype 作为对象的默认原型，它不能再有原型)
