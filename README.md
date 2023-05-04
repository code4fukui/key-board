# key-board
 
- [DEMO](https://code4fukui.github.io/key-board/)

## Usage

### in HTML

```html
<script type="module" src="https://code4fukui.github.io/key-board/key-board.js"></script>
<key-board></key-board>
```

### in JavaScript

```js
document.body.onkeydown = (e) => {
	keyboard.pressKey(e.keyCode);
	text.value += String.fromCharCode(e.keyCode);
};
document.body.onkeyup = (e) => {
	keyboard.releaseKey(e.keyCode);
};
keyboard.onkeydown = (code) => {
	text.value += String.fromCharCode(code);
};
```
