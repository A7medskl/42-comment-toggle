# Changelog

## [0.1.0] - 2026-11-04 (fork by asakli)
- The command now toggles: running it on a 42 comment block uncomments it
- Cursor anywhere inside a block is enough to uncomment it
- Empty lines become `**` instead of `** ` (no trailing space)
- Keeps CRLF line endings; a selection ending at column 0 no longer grabs that extra line
- New command id `extension.42-comment-toggle`, so it can be installed next to the original

## [0.0.2] - nasanov
- Keybindings were added

## [0.0.1] - 2019-11-22 - nasanov
- Initial release
