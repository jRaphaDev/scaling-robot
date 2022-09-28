# ITI - Abertura de Conta 

This is an executable specification file. This file follows markdown syntax.
Every heading in this file denotes a scenario. Every bulleted point denotes a step.

## Abertura de conta com sucesso

* Abrir aplicação para solicitação de abertura de conta do iti
* Ao digitar um numero de CPF "384.211.928-33"
* Sendo esse um CPF válido
* Então o botão para abertura de conta gratis será habilitado
* Ao clicar no botão para abertura de conta gratis
* O cliente será redirecionado para o formulario com campos adicionais
* O campo CPF deverá conter o mesmo CPF da tela anterior
* Se os campos obrigatórios estiverem vazios
* O botão continuar, deverá estar desabilitado

## Fluxo CPF inválido para abertura de conta

* Abrir aplicação para solicitação de abertura de conta do iti
* Ao digitar um numero de CPF "555.555.555-55"
* Sendo esse um CPF inválido
* Então o botão para abertura de conta gratis será desabilitado

