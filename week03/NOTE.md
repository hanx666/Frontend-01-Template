# Week03

## 表达式

从程序角度：运算符优先级

从语言生成角度：语法树

优先级：

member expression => Reference

- a.b
- super.b
- a[b]
- super['b']
- new.target
- new Foo()
- tag`template`

new

- new Foo  
   new a()() | new new a()

call

- foo()
- super()
- foo()['b']
- foo().b
- foo()`template`
  new a()['b']

以上三个分级都主要是为了处理带 new 操作符时的优先级正确性，叫做 left handside expression

= 左边要求必须是 reference



Reference

- object
- key
- delete
- Assign

update

- a++
- a--
- --a
- ++a

unary

- delete a.b
- void foo()
- typeof a
- +a
- -a
- ~a
- !a
- await a

## 语句

completion record

[[type]]: normal break continue return or throw

[[value]]: Types

[[target]]: label

- 简单语句
  - Expression
  - Empty
  - Debugger
  - Throw
  - Continue
  - Break
  - Return

- 复合语句
  - BlockStatement [[type]]: normal
  - Iteration [[type]]: break continue [[target]]: label
    - while () {}
    - do {} while ()
    - for ( ; ; ) {}
    - for ( in ) {}
    - for ( of ) {}
    - for await ( of )
  - Try {} catch () {} finally {} [[type]]: return [[target]]: label

### 作用域和上下文的区别

作用域：源代码文本的范围，从代码的角度来描述，注意和旧版标准所说的 scope 对象区别开

上下文：引擎执行之时的内存

## 声明

- FunctionDeclaration
- GeneratorDeclaration
- AsyncFunctionDeclaraion
- AsyncGeneratorDeclaration
- VariableStatement
- ClassDeclaration
- LexicallDeclaration

提升 => preprocess BoundNames

## 对象三要素

- 唯一性
- 状态
- 行为：状态的改变即是行为

类时一种描述对象的方式，归类和分类是两个主要流派。

归类：多继承 代表语言 c++

分类：单继承，并且会有一个最初的基类，以及引入 interface

类的方法一定是改变自身行为的，而不是自然语言描述的那些行为。在设计对象的状态和行为时，我们总是遵循“行为改变状态”的原则。

### Object in JS

- 属性
  - 数据属性
    - [[value]]
    - writable
    - enumerable
    - configurable
  - 访问器属性
    - get
    - set
    - enumerable
    - configurable
- 原型，注意属原型不是属性 [[prototype]]  下划线 proto 并不是原型

数据属性如果存储函数，也可以用于描述行为

#### api

- {} . [] Object.defineProperty  基本 api （创建，访问，修改）
- Object.create / Object.setPrototypeOf / Object.getPrototypeOf
- new /class / extends
- new / function / prototype

Function Object - [[call]]

特殊对象 9.4
