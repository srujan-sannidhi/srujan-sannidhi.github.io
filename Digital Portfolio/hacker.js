var speed = 70;

var char = -1;

function start(){
    typing = true;
    char = -1;
    type();
}

function end(){
  typing = false;
  char = -1;
}

var code = "{`/margin: 0;`/padding: 0;`/box-sizing: border-box;`}``html, body {`/min-height: 100%;`}``button {`/border-radius: 0;`}``.button {`/cursor: pointer;`/border: 0;`/outline: 0;`/height: 55px;`/padding: 0 50px;`/display: inline-block;`/letter-spacing: normal;`/word-spacing: normal;`/text-transform: none;`/text-indent: 0px;`/text-rendering: auto;`/align-items: flex-start;`/text-align: center;`/line-height: 55px;`}``.button:hover, .button:active, .button:focus {`/border: none;`}``a {`/color: #4183C4;`/text-decoration: none;`/cursor: pointer;`/border-bottom: 1px solid transparent;`}``a:hover, a:active, a:focus {`/border-bottom: 1px solid #4183C4;`}``header {`/position: fixed;`/top: 0;`/left: 0;`/z-index: 99;`/height: 60px;`/width: 100%;`/background-color: rgba(255, 255, 255, 0.9);`/border-bottom: 1px solid #ececec;`}``header .logo {`/position: absolute;`/left: 25px;`/height: 60px;`/line-height: 94px;`}``header .logo img {`/width: 116px;`}``#page {`/height: 100%;`/padding-top: 60px;`/padding-bottom: 433px;`}``@media all and (max-width : 720px) {`/#page {`//padding-bottom: 0;`/}`}``/* Blog */``.postItem {`/width: 720px;`/margin: 50px auto 50px;`}``.post-seperator {`/width: 800px;`/margin-top: 20px;`/margin-left: -40px;`/border-top: 1px solid #ececec;`}``.postItem:last-child .post-seperator {`/display: none;`}``.postItem img {`/display: block;`/margin: 50px auto;`/max-width: 100%;`}``.postItem img + em {`/display: block;`/text-align: center;`/margin-top: -40px;`/font-size: 18px;`}``@media all and (max-width : 800px) {`/.post-seperator {`//width: 100%;`//margin-left: auto;`/}`}``.postTitle a {`/font-size: 40px;`/line-height: 1.15;`/font-family: Raleway;`/font-weight: 100;`/color: #807F7F;`}``.postTitle a:hover {`/color: #4183C4`}``.postAuthor {`/font-family: Lato;`/font-weight: 300;`/font-size: 18px;`/margin-top: 15px;`/color: #807F7F;`}``.postContent {`/font-family: 'Miller Text Rom', Georgia, Cambria, 'Times New Roman', Times, serif;`/font-size: 18px;`/line-height: 1.6;`/margin-top: 45px;`/color: rgb(93, 91, 91);`}`.postContent h1,`.postContent h2,`.postContent h3,`.postContent h4,`.postContent h5 {`/color: rgb(76, 75, 75);`/font-family: Lato;`/font-weight: 400;`/margin-top: 10px;`}``.postContent h1 {`/font-size: 30px;`/color: rgb(63, 64, 63);`/margin-top: 20px;`}``.postContent h2 {`/font-size: 26px;`/margin-top: 20px;`}``.postContent h3 {`/font-size: 24px;`}``.postContent h4 {`/font-size: 22px;`}``.postContent h5 {`/font-size: 20px;`}``@media all and (max-width : 720px) {`/.postItem {`//width: auto;`//margin: 50px 18px;`/}``/.postContent {`//font-size: 18px`/}``/.postAuthor {`//font-size: 16px;`/}``/.postContent h1 {`//font-size: 28px;`/}``/.postContent h2 {`//font-size: 24px;`/}``/.postContent h3 {`//font-size: 22px;`/}``/.postContent h4 {`//font-size: 20px;`/}``/.postContent h5 {`//font-size: 18px;`/}`}``.postContent p {`/margin-top: 20px;`/margin-bottom: 20px;`}``.postContent ul {`/padding-left: 5px;`}``.postContent ol {`/padding-left: 25px`}``.postContent ul {`/list-style: none;`}``.postContent ul, .postContent ol {`/margin: 20px 0;`}``.postContent ul > li:before {`/font-size: 26px;`/content: '• ';`/line-height: 0;`/color: #807F7F;`}``/* Nested */`.postContent ul > li > ul > li:before {`/font-size: 26px;`/content: '◦ ';`/line-height: 0;`/color: #807F7F;`}``.postContent ul > li {`/padding-left: 1em;`/text-indent: -.7em;`}``.postContent ol > li {`/text-indent: 0;`}``.postContent li > ul,`.postContent li > ol {`/margin-left: 10px;`}``.postContent pre {`/overflow: auto;`/border: 1px solid #e1e1e8;`/padding: 12px;`/margin-top: 20px/;`}``.postContent pre code {`/display: block;`/border-bottom: 1px solid #eee;`/overflow-x: auto;`}``.postContent code, .postContent pre {`/font-size: 12px;`/line-height: 18px;`/font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;`}``.postContent pre code {`/color: #000;`/border: none;`}``.postContent blockquote {`/font-style: italic;`/border-left: 3px solid black;`/padding-left: 20px;`}``.readMore {`/margin-bottom: 20px;`}``/* Marketing */``.marketingPage {`/font-family: Raleway, sans-serif;`}``.marketingSection {`/text-align: center;`/line-height: 1;`/width: 100%;`/background-color: #fff;`}``.marketingSection:last-child {`/padding-bottom: 100px;`}``.marketingSection h3 {`/font-size: 61px;`/font-weight: 100;`}``.marketingSection > p {`/font-size: 22px;`/margin: 25px auto 0;`/max-width: 700px;`}``.includeTopBorder {`/border-top: 1px solid #ececec;`}``.marketingHeader {`/background-color: #fff;`/color: #807F7F;`/min-height: calc(100vh - 60px);`/display: flex;`/flex-direction: column;`/justify-content: center;`/align-items: center;`/position: relative;`}``.marketingHeader .button {`/margin-top: 25px;`}``.marketingHeader .scrolldownWrapper {`/width: 40px;`/height: 40px;`/position: absolute;`/bottom: 30px;`/right: 0;`/left: 0;`/margin-right: auto;`/margin-left: auto;`/-webkit-animation-duration: 0.75s;`/animation-duration: 0.75s;`/-webkit-animation-fill-mode: both;`/animation-fill-mode: both;`}``.marketingHeader .scrolldown {`/width: 20px;`/height: 20px;`/border-right: 1px solid #807F7F;`/border-bottom: 1px solid #807F7F;`/transform: rotate(45deg);`/margin: auto;`}``@keyframes fadeInDown {`/0% {`// opacity: 0;`// transform: translateY(-40px);`/}`/100% {`// opacity: 1;`// transform: translateY(0);`/}`}``.fadeInDown {`/-webkit-animation-name: fadeInDown;`/animation-name: fadeInDown;`}``.marketingPage .actionButton {`/font-size: 19px;`/font-family: Questrial;`/color: #FFF;`/background-color: #F06A60;`/margin-top: 50px;`}``.marketingPage .actionButton:hover {`/background-color: #F1584B;`}``.featuresWrapper {`/max-width: 1200px;`/margin: 0 auto;`}``.marketingFeature {`/margin-top: 50px;`/max-width: 500px;`/text-align: left;`/display: inline-flex;`/line-height: 1.5;`}``.marketingFeature:nth-child(odd) {`/margin-right: 70px;`}``.marketingFeature .img {`/flex: 1;`/height: 100px;`/width: 100px;`/background-size: contain;`/background-repeat: no-repeat;`}``.cloudcode {`/.console {`/background-image: url('/public/images/console2.png')`}``.marketingFeature .textWrapper {`/flex: 4;`/display: flex;`/flex-direction: column;`/justify-content: center;`/margin-left: 20px;`/}`}";

var upTo = -1;

var text = "";

function type(){
  if (typing === true){
    upTo++;
    if (upTo > code.length-1){
      upTo = 0;
    }
    if (code[upTo] == '`'){
      text += '<br/>';
    } else if (code[upTo] == '/') {
      text += '<span style="color:black;display:inline-block;">___</span>';
    } else {
      text += code[upTo];
      window.scrollTo(0,document.body.scrollHeight);
      window.setTimeout(function(){type();}, speed);
    }
    document.getElementsByClassName('type')[0].innerHTML = text + "<span id='blinker' style='visibility:visible'>█</span>";
    window.scrollTo(0,document.body.scrollHeight);
  }
}