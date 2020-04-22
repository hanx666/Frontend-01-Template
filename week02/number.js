#! /usr/bin/env node

const assert = require('assert')

/**
 * 写一个正则表达式 匹配所有 Number 直接量 (不考虑 NaN 和 Infinity)
 * 1. 正负十进制整数以及 1. 和 -1. /^-?\d+\.?$/
 * 2. 正负十进制浮点数以及 .1 和 -.1  /^(-?\d*)(\.\d+)?$/
 * 3. 正负二进制字面量 /^-?0[bB][01]+$/
 * 4. 正负八进制字面量 /^-?0[oO][0-7]+$/
 * 5. 正负十六进制字面量 /^-?0[xX][0-9a-fA-F]+$/
 * 6. 正负科学计数法 /^-?\d+\.?\d*[eE]-?\d+$|^-?\d*\.?\d+[eE]-?\d+$/
 */
const re = /^-?\d+\.?$|^(-?\d*)(\.\d+)?$|^-?0[bB][01]+$|^-?0[oO][0-7]+$|^-?0[xX][0-9a-fA-F]+$|^-?\d+\.?\d*[eE]-?\d+$|^-?\d*\.?\d+[eE]-?\d+$/

assert.equal(re.test('666'), true)
assert.equal(re.test('666.'), true)
assert.equal(re.test('-666'), true)
assert.equal(re.test('-666.'), true)
assert.equal(re.test('0.1'), true)
assert.equal(re.test('.1'), true)
assert.equal(re.test('-0.1'), true)
assert.equal(re.test('-.1'), true)
assert.equal(re.test('0b001'), true)
assert.equal(re.test('-0b001'), true)
assert.equal(re.test('0x12F'), true)
assert.equal(re.test('-0x12F'), true)
assert.equal(re.test('10e3'), true)
assert.equal(re.test('-10e3'), true)
assert.equal(re.test('10.e3'), true)
assert.equal(re.test('-10.e3'), true)
assert.equal(re.test('.1e3'), true)
assert.equal(re.test('-.1e3'), true)
assert.equal(re.test('2.220446049250313e-16'), true)
assert.equal(re.test('-2.220446049250313e-16'), true)
