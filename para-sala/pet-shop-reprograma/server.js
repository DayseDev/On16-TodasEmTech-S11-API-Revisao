const app = require('./src/app')

const PORT = 1313;

app.listen(PORT, () => {
    console.log(`Servidor tá rodando na porta ${PORT}`);
    })