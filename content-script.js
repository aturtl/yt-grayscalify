const ELEMS = [
    "#contents.style-scope.ytd-rich-grid-renderer",
    "#items",
    "#secondary.ytd-watch-flexy.style-scope",
    "#video-preview > ytd-video-preview-loader > div > ytd-video-preview > div",
    "#guide-wrapper",
    "#container.style-scope.ytd-masthead",
    "#below",
    "#header.ytd-multi-page-menu-renderer.style-scope",
    "#contents.ytd-section-list-renderer.style-scope",
    "#contentContainer.tp-yt-app-header.style-scope",
    "#page-manager > ytd-browse > ytd-two-column-browse-results-renderer"
];

function main() {
    for (let i = 0; i < ELEMS.length; i++)
    {
        let eName = ELEMS[i];
        waitForElm(eName).then(
            (elm) => 
            {
                console.log("SETTING STYLE OF " + eName);
                elm.style.filter = "grayscale(100%)"
            }
        );
    }
}

// Source - https://stackoverflow.com/a/61511955
// Posted by Yong Wang, modified by community. See post 'Timeline' for change history
// Retrieved 2026-11-09, License - CC BY-SA 4.0

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

main();