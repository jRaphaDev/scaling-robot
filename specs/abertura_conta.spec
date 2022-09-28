# ITI - Fluxo de abertura de conta

This is an executable specification file. This file follows markdown syntax.
Every heading in this file denotes a scenario. Every bulleted point denotes a step.

## Fluxo CPF válido para abertura de conta

* Abrir Home de Abertura de Conta do ITI
* Ao digitar um numero de CPF "384.211.928-33"
* Sendo esse um CPF válido
* Então o botão para abertura de conta gratis será habilitado
* Ao clicar no botão para abertura de conta gratis
* O cliente será redirecionado para o formulario com campos de dados pessoais
* O campo CPF deverá conter o mesmo CPF da tela anterior
* O botão continuar, deverá estar desabilitado previamente

## Fluxo CPF inválido para abertura de conta

* Abrir Home de Abertura de Conta do ITI
* Ao digitar um numero de CPF "555.555.555-55"
* Sendo esse um CPF inválido
* Então o botão para abertura de conta gratis será desabilitado

