import tabela2026 from "./tabela.js";
import express from "express";

const app = express();

app.get('/', (requisicao, resposta) => {
    resposta.status(200).send(tabela2026);
});

app.get('/:sigla', (requisicao, resposta) => {
    const siglaInformada = requisicao.params.sigla.toUpperCase();
    const time = tabela2026.find(infoTime => infoTime.sigla == siglaInformada);

    if (!time) {
        resposta.status(404).send('Não existe na série A do Brasileirão um time com a sigla informada.');
        return;
    }


    resposta.status(200).send(time);
});

app.listen(300, () => console.log("Servidor rodando na porta 300"));
