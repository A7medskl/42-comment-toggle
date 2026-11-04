"use strict"

const isOpen = (l) => l.trim() === "/*"
const isClose = (l) => l.trim() === "*/"
const isMiddle = (l) => l.trimStart().startsWith("**")

// Empty lines become "**" (no trailing space, so norminette stays happy)
function convertToComment(lines) {
    const body = lines.map((l) => (l.trimEnd() ? "** " + l.trimEnd() : "**"))
    return ["/*", ...body, "*/"]
}

function convertFromComment(lines) {
    return lines.slice(1, -1).map((l) => l.trimStart().replace(/^\*\* ?/, ""))
}

// True when the lines are exactly one 42-style block: /* , ** lines, */
function isComment(lines) {
    return lines.length >= 2 &&
        isOpen(lines[0]) &&
        isClose(lines[lines.length - 1]) &&
        lines.slice(1, -1).every(isMiddle)
}

function toggleComment(lines) {
    return isComment(lines) ? convertFromComment(lines) : convertToComment(lines)
}

// Finds the 42 block that fully contains lines [start, end], or returns null
function findComment(getLine, lineCount, start, end) {
    let s = start
    while (s >= 0 && !isOpen(getLine(s)))
        s--
    if (s < 0)
        return null
    let e = s + 1
    while (e < lineCount && isMiddle(getLine(e)))
        e++
    if (e >= lineCount || !isClose(getLine(e)) || e < end)
        return null
    return { start: s, end: e }
}

module.exports = {
    convertToComment,
    convertFromComment,
    isComment,
    toggleComment,
    findComment
}
