import alphavitRus from './const/rusAlphavit.js';
import alphavitEng from './const/engAlphavit.js';
import textConstants from './const/textContent.js';

document.addEventListener('DOMContentLoaded', () => {
    const html = document.body.innerHTML;

    const filledHtml = html.replace(/{{\s*([^{}]+)\s*}}/g, (match, key) => {
        return textConstants[key.trim()] || match;
    });

    document.body.innerHTML = filledHtml;
    document.head.title = filledHtml;
});

function shifr (text, alphavit, sdvig) {
    let res = [];
    let lengthRegistr = alphavit.length / 2;

    for (let simvol of text) {
        let shifr = false;

        for (let i = 0; i < alphavit.length; i++) {

            if (alphavit[i] === simvol) {
                shifr = true;
                let registr = i >= lengthRegistr ? lengthRegistr : 0;
                let posShifDeShif = (i % lengthRegistr + sdvig + lengthRegistr) % lengthRegistr + registr

                res.push(alphavit[posShifDeShif]);
                break
            }
        }

        if (!shifr) {
            res.push(simvol);
        }
    }

    return res.join('')
};

function shifrovanie(sdvig) {
    const text = document.getElementById('refText').value;
    let shifrText = text;

    shifrText = shifr(shifrText, alphavitRus, sdvig);
    shifrText = shifr(shifrText, alphavitEng, sdvig);

    document.getElementById('shifrDeshifrText').textContent = shifrText;
}

document.getElementById('shifrBtn').addEventListener('click', () => {shifrovanie(13)
    const rightPan = document.getElementById('right');
    const perehod = document.getElementById('perehod');
    let perehodStyle = `
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    `;
    rightPan.style.backgroundColor = 'rgba(0, 255, 9, 0.3)';
    perehod.style.cssText = perehodStyle;
});
document.getElementById('deShifrBtn').addEventListener('click', () => {shifrovanie(-13)
    const rightPan = document.getElementById('right');
    rightPan.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';
    perehod.style.cssText = perehodStyle;
});