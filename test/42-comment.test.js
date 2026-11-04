"use strict"

const assert = require("assert")
const { toggleComment, findComment } = require("../src/42-comment")

const code = ["int\tmain(void)", "{", "", "\treturn (0);", "}"]
const commented = ["/*", "** int\tmain(void)", "** {", "**", "** \treturn (0);", "** }", "*/"]

assert.deepStrictEqual(toggleComment(code), commented)
assert.deepStrictEqual(toggleComment(commented), code)

// Output of the original 0.0.2 ("** " on empty lines) also uncomments
assert.deepStrictEqual(toggleComment(["/*", "** a", "** ", "*/"]), ["a", ""])

// Cursor inside a block finds the whole block; outside it, nothing
const file = ["x", "/*", "** a", "** b", "*/", "y"]
const get = (i) => file[i]
assert.deepStrictEqual(findComment(get, file.length, 3, 3), { start: 1, end: 4 })
assert.deepStrictEqual(findComment(get, file.length, 4, 4), { start: 1, end: 4 })
assert.strictEqual(findComment(get, file.length, 5, 5), null)
assert.strictEqual(findComment(get, file.length, 0, 0), null)
assert.strictEqual(findComment(get, file.length, 2, 5), null)

console.log("all tests passed")
