import tabela2026 from "./tabela.js";
import express from "express";

const app = express();

app.use(express.json()); // Usa o que estiver no corpo das requisições como um json

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

app.put('/:sigla', (req, resp) => {
    const siglaInformada = req.params.sigla.toUpperCase();
    const timeSelecionado = tabela2026.find(t => t.sigla == siglaInformada);
    const campos = Object.keys(req.body);

    if (!timeSelecionado) {
        resp.status(404).send("Não existe na série A do Brasileirão um time com a sigla informada");
        return;
    }

    for (let campo of campos) {
        timeSelecionado[campo] = req.body[campo]
    }
    console.log(campos);
    resp.status(200).send(timeSelecionado);
});

app.post('/', (req, resp) => {
    const novoTime = req.body;
    tabela2026.push(novoTime);
    resp.status(200).send(novoTime);
});

app.delete('/:sigla', (req,resp) => {
    const siglaInformada = req.params.sigla.toUpperCase();
    const indiceTimeSelecionado = tabela2026.findIndex(t => t.sigla == siglaInformada);
    if (indiceTimeSelecionado == -1) {
        resp.status(404).send("Não existe na série A do Brasileirão com a sigla informada.")
        return;
    }
    const timeRemovido = tabela2026.splice(indiceTimeSelecionado, 1);
    resp.status(200).send(timeRemovido);
});

app.listen(300, () => console.log("Servidor rodando na porta 300"));
