// ==UserScript==
// @name         r/placeCosmere Logo Template
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the canvas!
// @author       oralekin, exdeejay (xDJ_), modified for r/placeCosmere by Atkion
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
				(function () {
					
					const i = document.createElement("img");
					i.src = "https://github.com/Grygon/placeCosmereOverlay/raw/master/template.png";
					i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;";
					console.log(i);

                    return i;
				})())

    }, false);

}
