const alphavitRus = [
    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М',
    'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я',
    'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м',
    'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'
];

const alphavitEng = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

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

    
};

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