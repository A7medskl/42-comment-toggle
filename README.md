# 42-comment toggle

42-style block comments that toggle: one key comments, the same key uncomments.

Fork of [42-comment](https://marketplace.visualstudio.com/items?itemName=nasanov.42-comment) by **nasanov**, which only comments.

## Features

``` c
int	main(void)
{
	return (0);
}
```
turns into:

``` c
/*
** int	main(void)
** {
** 	return (0);
** }
*/
```

and pressing the shortcut again turns it back.

- **Comment:** select the lines and run the command. The whole lines are taken, like the original.
- **Uncomment:** select the block, or just put the cursor anywhere inside it, and run the command.
- Empty lines become `**` with no trailing space, so norminette doesn't complain.
- Blocks made by the original 42-comment (`** ` on empty lines) also uncomment.
- Works with several cursors, and keeps the file's line endings (LF or CRLF).

## Usage

`ctrl+alt+*` on Windows/Linux, `shift+cmd+*` on Mac,

or `Ctrl+Shift+P` and run `> 42-comment toggle`.

Disable the original 42-comment if it is installed: both use the same shortcut.

## Keybindings

Change the shortcut in Preferences -> Keyboard Shortcuts (search for 42-comment toggle), or in `keybindings.json`:
```
{ "key": "shift+cmd+*", "command": "extension.42-comment-toggle", "when": "editorTextFocus" }
```

## Tests

`npm test`
