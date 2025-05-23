import textConstants from './const/textContent.js';

function replacePlaceholdersInText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        const replaced = node.textContent.replace(/{{\s*([^{}]+)\s*}}/g, (match, key) => {
            return textConstants[key.trim()] || match;
        });
        node.textContent = replaced;
    } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE') {
        if ((node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') && node.hasAttribute('placeholder')) {
            const placeholder = node.getAttribute('placeholder');
            const replaced = placeholder.replace(/{{\s*([^{}]+)\s*}}/g, (match, key) => {
                return textConstants[key.trim()] || match;
            });
            node.setAttribute('placeholder', replaced);
        }

        node.childNodes.forEach(replacePlaceholdersInText);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    replacePlaceholdersInText(document.body);

    const titleMatch = document.title.match(/{{\s*([^{}]+)\s*}}/);
    if (titleMatch) {
        const key = titleMatch[1].trim();
        if (textConstants[key]) {
            document.title = textConstants[key];
        }
    }
});