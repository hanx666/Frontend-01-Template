#! /usr/bin/env node

/**
 * 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
 * ecma262 11.8.4 String Literals
 * 参考这个同学的推导过程 https://github.com/apacheao/Frontend-01-Template/blob/master/week02/StringLiteral.md
 * not enough time to do
 */

参考这个同学的推导过程 https://github.com/apacheao/Frontend-01-Template/blob/master/week02/StringLiteral.md

StringLiteral:: 由两部分组成

"DoubleStringCharactersopt"
'SingleStringCharactersopt'
DoubleStringCharacters(opt) DoubleStringCharacter | DoubleStringCharacters(opt)

DoubleStringCharacter SourceCharacter but not one of (" or \ or LineTerminator \EscapeSequence | LineContinuation)

由于式子较长 我们先来看 or \ or LineTerminator 这部分

LineTerminator => | | | <=> \r | \n | \u2028 | \u2029

[^(\r\n\u2028\u2029\)|\u2028|\u2029|\]

在看一下 \EscapeSequence | LineContinuation

EscapeSequence 由四部分组成 CharacterEscapeSequence | 0[lookahead ∉ DecimalDigit] | HexEscapeSequence | UnicodeEscapeSequence

\EscapeSequence => \['"\bfnrtv] | [^'"\bfnrtvdxu\r\n\u2028\u2029] | [xu][0-9] | x?[0-9a-fA-F] | u[0-9]{4}

LineContinuation 由\LineTerminatorSequence组成 \LineTerminatorSequence => \(\r\n|[\r\n\u2028\u2029]))*

总结：DoubleStringCharactersopt => "(^(\r\n\u2028\u2029\)|\u2028|\u2029|\|\['"\bfnrtv] | [^'"\bfnrtvdxu\r\n\u2028\u2029] | [xu][0-9] | x?[0-9a-fA-F] | u[0-9]{4}|\(\r\n|[\r\n\u2028\u2029]))*")

同理：SingleStringCharactersopt => '([^'\r\n\u2028\u2029\]|\u2028|\u2029|\((['"\bfnrtv]|[^'"\bfnrtvdxu\r\n\u2028\u2029])|0(?!d)|x[0-9a-fA-F][0-9a-fA-F]|(u[0-9a-fA-F]{4}|u{(0[0-9a-fA-F]{5}|10[0-9a-fA-F]{4}|[0-9a-fA-F]{1,4})}))|\(\r\n|[\r\n\u2028\u2029]))*')

StringLiteral的正则表达式为："(^(\r\n\u2028\u2029\)|\u2028|\u2029|\|\['"\bfnrtv] | [^'"\bfnrtvdxu\r\n\u2028\u2029] | [xu][0-9] | x?[0-9a-fA-F] | u[0-9]{4}|\(\r\n|[\r\n\u2028\u2029]))")|'([^'\r\n\u2028\u2029\]|\u2028|\u2029|\((['"\bfnrtv]|[^'"\bfnrtvdxu\r\n\u2028\u2029])|0(?!d)|x[0-9a-fA-F][0-9a-fA-F]|(u[0-9a-fA-F]{4}|u{(0[0-9a-fA-F]{5}|10[0-9a-fA-F]{4}|[0-9a-fA-F]{1,4})}))|\(\r\n|[\r\n\u2028\u2029]))')