const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
    try {
        const filePath = path.join(__dirname, 'login.txt');
        const data = fs.readFileSync(filePath, 'utf-8');
        return {
            statusCode: 200,
            body: data,
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: 'Erro ao ler as informações.',
        };
    }
};
