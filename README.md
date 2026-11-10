# Agenda Tech Salvador

Projeto da atividade de AngularJS 2026. A aplicação reúne eventos fictícios de tecnologia em Salvador e permite buscar eventos, filtrar por categoria e simular uma inscrição.

## Como rodar no VS Code

1. Extraia o ZIP e abra no VS Code a pasta que contém o arquivo `index.html`.
2. No menu **Terminal**, clique em **Novo Terminal**.
3. Com o Node.js instalado, execute:

   ```bash
   npx --yes http-server . -p 8000
   ```

4. Abra [http://localhost:8000](http://localhost:8000) no navegador.

O servidor é baixado na primeira execução. Mantenha o terminal aberto enquanto usa a aplicação e pressione `Ctrl+C` para encerrar.

**No GitHub Codespaces**, execute o mesmo comando e abra a porta **8000** pela aba **Ports**.

**Para abrir direto no navegador**, dê dois cliques no `index.html`. O AngularJS 1.8.3 já está incluído na pasta `vendor/`.

## O que testar

| Componente | Como testar |
| --- | --- |
| Acordeão | Abra duas perguntas do FAQ em sequência. A primeira se fecha quando a segunda abre. |
| Paginação | Troque de página pelos números ou pelos botões **Anterior** e **Próxima**. |
| Barra de progresso | Selecione um evento para chegar a 50% e confirme a inscrição para chegar a 100%. |
| Abas | Alterne entre **Sobre**, **Participação** e **Local**. |
| Menu suspenso | Escolha uma categoria para filtrar os eventos. Reabra o menu e clique fora para fechá-lo. |
| Toast | Confirme a inscrição. A mensagem desaparece em cinco segundos ou pode ser fechada pelo botão **×**. |

## Onde está o código

- `index.html` monta a página e usa as seis diretivas.
- `app.js` configura os módulos do AngularJS.
- `controllers/agenda.controller.js` controla a busca, a paginação e a inscrição simulada.
- `directives/` contém um arquivo para cada componente.
- `services/` reúne os dados dos eventos, a lógica de busca e o controle das notificações.
- `assets/estilos.css` define o visual e o layout responsivo.