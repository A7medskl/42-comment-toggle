"use strict"

const vscode = require('vscode')
const {
    toggleComment,
    findComment
} = require('./42-comment')

function ignore() {}

function transformToComment(editor, builder) {
    const doc = editor.document
    const eol = doc.eol === vscode.EndOfLine.CRLF ? "\r\n" : "\n"
    const getLine = (i) => doc.lineAt(i).text
    const seen = new Set()

    editor.selections.forEach((selection) => {
        let start = selection.start.line
        let end = selection.end.line
        // A selection ending at column 0 doesn't really include that last line
        if (end > start && selection.end.character === 0)
            end--
        // Cursor or selection inside an existing 42 comment: uncomment the whole block
        const block = findComment(getLine, doc.lineCount, start, end)
        if (block) {
            start = block.start
            end = block.end
        }
        if (seen.has(start))
            return
        seen.add(start)
        const lines = []
        for (let i = start; i <= end; i++)
            lines.push(getLine(i))
        const range = new vscode.Range(start, 0, end, getLine(end).length)
        builder.replace(range, toggleComment(lines).join(eol))
    })
}

function activate(context) {
    context.subscriptions.push(
        vscode.commands.registerTextEditorCommand('extension.42-comment-toggle', transformToComment))
}

module.exports = {
    activate,
    deactivate: ignore
}
