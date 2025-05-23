import http from 'http';
import fs from 'fs';

const PORT = 3000;
const HOST = 'localhost';

export function main(request, response) {
    if (request.url === '/') {
        response.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
        fs.createReadStream('./public/index.html').pipe(response);
        return;
    }

    if (request.url === '/style.css') {
        response.writeHead(200, {'Content-Type': 'text/css'});
        fs.createReadStream('src/style.css').pipe(response);
        return;
    };

    if (request.url === '/loadetText.js') {
        response.writeHead(200, {'content-type': 'text/javascript'});
        fs.createReadStream('src/loadetText.js').pipe(response);
        return;
    }

    if (request.url === '/app.js') {
        response.writeHead(200, {'Content-Type': 'text/javascript'});
        fs.createReadStream('src/app.js').pipe(response);
        return;
    };

    if (request.url === '/password-alt.png') {
        response.writeHead(200, {'content-type': 'image/png'});
        fs.createReadStream('public/password-alt.png').pipe(response);
        return;
    }

    if (request.url === '/image/icons8-forward-100.png') {
        response.writeHead(200, {'content-type': 'image/png'});
        fs.createReadStream('public/image/icons8-forward-100.png').pipe(response);
        return;
    }

    if (request.url === '/components/fonts/Comfortaa.ttf') {
        response.writeHead(200, {'content-type': 'font/ttf'});
        fs.createReadStream('public/components/fonts/Comfortaa.ttf').pipe(response);
        return;
    }

    if (request.url === '/const/engAlphavit.js') {
        response.writeHead(200, {'content-type': 'text/javascript'});
        fs.createReadStream('src/const/engAlphavit.js').pipe(response);
        return;
    }

    if (request.url === '/const/rusAlphavit.js') {
        response.writeHead(200, {'content-type': 'text/javascript'});
        fs.createReadStream('src/const/rusAlphavit.js').pipe(response);
        return;
    }

    if (request.url === '/const/textContent.js') {
        response.writeHead(200, {'content-type': 'text/javascript'});
        fs.createReadStream('src/const/textContent.js').pipe(response);
        return;
    }

    response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    fs.createReadStream('public/errorPage.html').pipe(response);
} 

const server = http.createServer((main));
server.listen(PORT, HOST, () => {
    console.log(`Сервер запущен по адрессу: http://${HOST}:${PORT}/`);
});

// Задание: Используя исходный код лр2, необходимо вынести код отвечающий за обработку логики в отдельный 
// экспортируемый модуль, а HTML файл измениить таким образом, что бы все текстовые статистические константы 
// хранились отдельно на уровне node.js 