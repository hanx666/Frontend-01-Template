# week05

## 结构化程序设计

JS 执行粒度

- JS Context => Realm 2

- 宏任务

- 微任务

- 函数调用（Execution Context）

- 语句 / 声明

- 表达式

- 直接量 / 变量 / this ...

### 函数调用（Execution Context）

当一个函数调用的时候，会 push 一个 Execution Context 入 Execution Context Stack

当一个函数返回的时候，会 pop 一个 Execution Context 出 Execution Context Stack

栈顶的是 Running Execution Context

Execution Context 包括：

- code evaluation state

- Function

- Script or Module

- Generator

- Realm

- LexicalEnvironment （this, new.target, super, 变量）

- VariableEnvironment (处理 var 声明的历史包袱)

Environment Record

- Delcarative ER
    - Function ER
    - module ER
- Global ER
- Object ER

## 浏览器工作原理

iso-osi 七层网络模型

- 应用 HTTP
- 表示 HTTP
- 会话 HTTP
- 传输 TCP
- 网络 Internet
- 数据链路 4G/5G/WIFI
- 物理 4G/5G/WIFI

closure / haskell / 
