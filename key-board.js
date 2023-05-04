const html = `
<div class="keyboard">
	<ul class="cf">
		<li><p class="key c27 fn esc"><span>esc</span></p></li>
		<li><p class="key c112 fn"><span>F1</span></p></li>
		<li><p class="key c113 fn"><span>F2</span></p></li>
		<li><p class="key c114 fn"><span>F3</span></p></li>
		<li><p class="key c115 fn"><span>F4</span></p></li>
		<li><p class="key c116 fn"><span>F5</span></p></li>
		<li><p class="key c117 fn"><span>F6</span></p></li>
		<li><p class="key c118 fn"><span>F7</span></p></li>
		<li><p class="key c119 fn"><span>F8</span></p></li>
		<li><p class="key c120 fn"><span>F9</span></p></li>
		<li><p class="key c121 fn"><span>F10</span></p></li>
		<li><p class="key c122 fn"><span>F11</span></p></li>
		<li><p class="key c123 fn"><span>F12</span></p></li>
		<li><p class="key fn eject"><span>Eject</span></p></li>
	</ul>
	<ul class="cf" id="numbers">
		<li><p class="key c192"><b>~</b><span>\`</span></p></li>
		<li><p class="key c49"><b>!</b><span>1</span></p></li>
		<li><p class="key c50"><b>@</b><span>2</span></p></li>
		<li><p class="key c51"><b>#</b><span>3</span></p></li>
		<li><p class="key c52"><b>$</b><span>4</span></p></li>
		<li><p class="key c53"><b>%</b><span>5</span></p></li>
		<li><p class="key c54"><b>^</b><span>6</span></p></li>
		<li><p class="key c55"><b>&amp;</b><span>7</span></p></li>
		<li><p class="key c56"><b>*</b><span>8</span></p></li>
		<li><p class="key c57"><b>(</b><span>9</span></p></li>
		<li><p class="key c48"><b>)</b><span>0</span></p></li>
		<li><p class="key c189 alt"><b>_</b><span>-</span></p></li>
		<li><p class="key c187"><b>+</b><span>=</span></p></li>
		<li><p class="key c46 delete"><span>Delete</span></p></li>
	</ul>
	<ul class="cf" id="qwerty">
		<li><p class="key c9 tab"><span>tab</span></p></li>
		<li><p class="key c81"><span>q</span></p></li>
		<li><p class="key c87"><span>w</span></p></li>
		<li><p class="key c69"><span>e</span></p></li>
		<li><p class="key c82"><span>r</span></p></li>
		<li><p class="key c84"><span>t</span></p></li>
		<li><p class="key c89"><span>y</span></p></li>
		<li><p class="key c85"><span>u</span></p></li>
		<li><p class="key c73"><span>i</span></p></li>
		<li><p class="key c79"><span>o</span></p></li>
		<li><p class="key c80"><span>p</span></p></li>
		<li><p class="key c219 alt"><b>{</b><span>[</span></p></li>
		<li><p class="key c221 alt"><b>}</b><span>]</span></p></li>
		<li><p class="key c220 alt"><b>|</b><span>\\</span></p></li>
	</ul>
	<ul class="cf" id="asdfg">
		<li><p class="key c20 alt caps"><b></b><span>caps lock</span></p></li>
		<li><p class="key c65"><span>a</span></p></li>
		<li><p class="key c83"><span>s</span></p></li>
		<li><p class="key c68"><span>d</span></p></li>
		<li><p class="key c70"><span>f</span></p></li>
		<li><p class="key c71"><span>g</span></p></li>
		<li><p class="key c72"><span>h</span></p></li>
		<li><p class="key c74"><span>j</span></p></li>
		<li><p class="key c75"><span>k</span></p></li>
		<li><p class="key c76"><span>l</span></p></li>
		<li><p class="key c186 alt"><b>:</b><span>;</span></p></li>
		<li><p class="key c222 alt"><b>"</b><span>'</span></p></li>
		<li><p class="key c13 alt enter"><span>return</span></p></li>
	</ul>
	<ul class="cf" id="zxcvb">
		<li><p class="key c16 shiftleft"><span>Shift</span></p></li>
		<li><p class="key c90"><span>z</span></p></li>
		<li><p class="key c88"><span>x</span></p></li>
		<li><p class="key c67"><span>c</span></p></li>
		<li><p class="key c86"><span>v</span></p></li>
		<li><p class="key c66"><span>b</span></p></li>
		<li><p class="key c78"><span>n</span></p></li>
		<li><p class="key c77"><span>m</span></p></li>
		<li><p class="key c188 alt"><b>&lt;</b><span>,</span></p></li>
		<li><p class="key c190 alt"><b>&gt;</b><span>.</span></p></li>
		<li><p class="key c191 alt"><b>?</b><span>/</span></p></li>
		<li><p class="key c16 shiftright"><span>Shift</span></p></li>
	</ul>
	<ul class="cf" id="bottomrow">
		<li><p class="key" id="fn"><span>fn</span></p></li>
		<li><p class="key c17" id="control"><span>control</span></p></li>
		<li><p class="key option" id="optionleft"><span>option</span></p></li>
		<li><p class="key command" id="commandleft"><span>command</span></p></li>
		<li><p class="key c32" id="spacebar"></p></li>
		<li><p class="key command" id="commandright"><span>command</span></p></li>
		<li><p class="key option" id="optionright"><span>option</span></p></li>
			<ol class="cf">
				<li><p class="key c37" id="left"><span></span></p></li>
					<li>
						<p class="key c38" id="up"><span></span></a>
						<p class="key c40" id="down"><span></span></a>
					</li>
				<li><p class="key c39" id="right"><span></span></p></li>
			</ol>
	</ul>
</div>

<style>
.keyboard {
	background-color: black;
	margin: 10px auto 10px;
	width: 794px;
	height: 307px;
	background:	#d5d9dc;
	-moz-border-radius: 10px;
	border-radius: 10px;
	padding: 10px 0 0 10px;
	-moz-box-shadow:  
		inset 0 0 8px #bbb,
		0 1px 0 #aaa,
		0 3px 0 #bbb,
		0 5px 5px #ddd;
	box-shadow:  
		inset 0 0 8px #bbb,
		0 1px 0 #aaa,
		0 3px 0 #bbb,
		0 5px 5px #ddd;
}
ul {
	list-style-type: none;
	width: 784px;
	margin: 0 auto;
}
li {
	float: left;
}
.key {
	display: block;
	color: #aaa;
	font: bold 9pt arial;
	text-decoration: none;
	text-align: center;
	width: 44px;
	height: 41px;
	margin: 5px 5px 5px 5px;
	background: #eff0f2;
	-moz-border-radius: 4px;
	border-radius: 4px;
	border-top: 1px solid #f5f5f5;
	-webkit-box-shadow: 
		inset 0 0 25px #e8e8e8,
		0 1px 0 #c3c3c3,
		0 2px 0 #c9c9c9,
		0 2px 3px #333;
	-moz-box-shadow: 
		inset 0 0 25px #e8e8e8,
		0 1px 0 #c3c3c3,
		0 2px 0 #c9c9c9,
		0 2px 3px #333;
	box-shadow: 
		inset 0 0 25px #e8e8e8,
		0 1px 0 #c3c3c3,
		0 2px 0 #c9c9c9,
		0 2px 3px #333;
	text-shadow: 0px 1px 0px #f5f5f5;
}
.key:visited, .key:link, .key:hover, .key:active {
	text-decoration: none;
	color: #aaa;
}
.key:active, .keydown {
	color: #888;
	background: #ebeced;
	margin: 7px 5px 3px;
	-webkit-box-shadow:
		inset 0 0 25px #ddd,
		0 0 3px #333;
	-moz-box-shadow: 
		inset 0 0 25px #ddd,
		0 0 3px #333;
	box-shadow: 
		inset 0 0 25px #ddd,
		0 0 3px #333;
	border-top: 1px solid #eee;
}
.fn span {
	display: block;
	margin: 15px 8px 0 0;
	text-align: right;
	font: bold 6pt arial;
	text-transform: uppercase;
}
.esc span {
	margin: 8px 15px 0 0;
	font-size: 7.5pt;
	text-transform: lowercase;
}
.eject span {
	margin: 8px 11px 0 0;
	font-size: 7.5pt;
	text-transform: lowercase;
}
#numbers li p span {
	display: block;
}
#numbers li p b {
	margin: 3px 0 3px;
	display: block;
}
#numbers li .alt b {
	display: block;
	margin: 0 0 3px;
}
#numbers li .delete span {
	text-align: right;
	margin: 27px 8px 0 0;
	font-size: 7.5pt;
	text-transform: lowercase;
}
#qwerty li p span {
	display: block;
	margin: 13px 0 0;
	text-transform: uppercase;
}
#qwerty li .tab span {
	text-align: left;
	margin: 27px 0 0 8px;
	font-size: 7.5pt;
	text-transform: lowercase;
}
#qwerty li .alt b {
	display: block; margin: 3px 0 0;
}
#qwerty li .alt span {
	margin: 2px 0 0;
}
#asdfg li p span {
	display: block;
	margin: 13px 0 0;
	text-transform: uppercase;
}
#asdfg li .alt span {
	margin: 0;
	text-transform: lowercase;
}
#asdfg li .alt b {
	display: block;
	margin: 3px 0 0;
}
#asdfg li .caps b {
	display: block;
	background: #999;
	width: 4px;
	height: 4px;
	border-radius: 10px;
	margin: 4px 0 0 8px;
	-webkit-box-shadow: inset 0 1px 0 #666;
	-moz-box-shadow:inset 0 1px 0 #666;
	box-shadow:inset 0 1px 0 #666;
}
#asdfg li .caps span {
	text-align: left;
	margin: 19px 0 0 8px;
	font-size: 7.5pt;
}
#asdfg li .enter span {
	text-align: right;
	margin: 27px 8px 0 0;
	font-size: 7.5pt;
}
#zxcvb li p span {
	display: block;
	margin: 13px 0 0;
	text-transform: uppercase;
}
#zxcvb li .shiftleft span {
	text-align: left;
	margin: 27px 0 0 8px;
	font-size: 7.5pt;
	text-transform: lowercase;
}
#zxcvb li .shiftright span {
	text-align: right;
	margin: 27px 10px 0 0;
	font-size: 7.5pt;
	text-transform: lowercase;
}
#zxcvb li .alt b {
	display: block;
	margin: 4px 0 0;
}
#zxcvb li .alt span {
	margin: 0;
}
.delete, .tab {
	width: 72px;
}
.caps, .enter {
	width: 85px;
}
.shiftleft, .shiftright {
	width: 112px;
}
#bottomrow li #fn span, #bottomrow li #control span, #bottomrow li #optionleft span, #bottomrow li #commandleft span {
	display: block;
	text-align: left;
	margin: 27px 0 0 8px;
	font-size: 7.5pt;
	text-transform: lowercase;
}
#bottomrow li #optionright span, #bottomrow li #commandright span {
	display: block;
	text-align: right;
	margin: 27px 8px 0 0;
	font-size: 7.5pt;
	text-transform: lowercase;
}
.fn {
	height: 26px;
	width: 46px;
}
#control {
	width: 56px;
}
.option {
	width: 46px;
}
.command {
	width: 67px;
}
#spacebar {
	width: 226px;
}
#left img, #up img, #down img, #right img {
	border: none;
}
#keyboard ul ol {
	list-style-type: none;
}
#down {
	height: 19px;
}
#up, #left, #right {
	height: 20px;
}
#left, #right {
	margin: 26px 5px 5px;
}
#left:active, #right:active {
	margin: 28px 5px 3px;
}
#up {
	margin: 5px 5px 1px;
	border-bottom-right-radius: 0px;
	border-bottom-left-radius: 0px;
}
#up:active {
	margin: 8px 5px -2px;
}
#down {
	margin: 0 5px 5px;
	border-top-left-radius: 0px;
	border-top-right-radius: 0px;
}
#down:active {
	margin: 3px 5px 4px;
}
#keyboard ul, ol {
	padding: 0px;
	margin: 0;
}
/* Micro Clearfix by Nicolas Gallagher - http://nicolasgallagher.com/micro-clearfix-hack */
        /* For modern browsers */
/*        .cf:before, .cf:after {content:""; display:table;}
        .cf:after {clear:both;}
*/
        /* For IE 6/7 (trigger hasLayout) */
/*        .cf {zoom:1;} */
</style>
`;

const kbkeycode = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, -1/*eject*/, 192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8/*46*/, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, -1/*x*/, 17, 18/*option*/, 91/*command*/, 32, 93/*command*/, -1/*option*/, 37, 38, 40, 39];

export class KeyBoard extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = html;
		this.keys = this.getElementsByTagName("p");
		const p = this;
		for (const key of this.keys) {
			key.onclick = function (e) {
				const code = this.classList[1].substring(1);
				if (p.onkeydown) {
					p.onkeydown(code);
					//console.log(this.className, code);
				}
			};
		}
	}
	getElement(key) {
		for (let i = 0; i < kbkeycode.length; i++) {
			if (kbkeycode[i] == key) {
				return this.keys[i];
			}
		}
		return null;
	};
	pressKey(key) {
		const k = this.getElement(key);
		if (k == null) return;
		if (k.className.indexOf(" keydown") == -1) {
			k.className += " keydown";
		}
	}
	releaseKey(key) {
		const k = this.getElement(key);
		if (k == null) return;
		k.className = k.className.replace(" keydown", "");
	}
}

customElements.define("key-board", KeyBoard);
