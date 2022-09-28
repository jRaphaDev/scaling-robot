/* globals gauge*/
"use strict";
const path = require('path');
const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    screenshot,
    click,
    text,
    into,
    textBox,
    waitFor,
    button,
    deleteCookies} = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';
var CPFTelaHome;

beforeScenario(async () => {
    await openBrowser({
        headless: headless
    })
});

afterScenario(async () => {
    await deleteCookies();
    await closeBrowser();
});

gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'],
        `screenshot-${process.hrtime.bigint()}.png`);

    await screenshot({
        path: screenshotFilePath
    });
    return path.basename(screenshotFilePath);
};

step("Abrir aplicação para solicitação de abertura de conta do iti", async function() {
    await goto("conta.iti.itau");
    
    //waitFor(async () => !(await textBox("000.000.000-00").exists()))

});

step("Ao digitar um numero de CPF <cpf>", async function(cpf) {
    CPFTelaHome = cpf;
    await write(CPFTelaHome, into(textBox("000.000.000-00"), {waitForStart: 1000, navigationTimeout: 90000}))
});

step("Sendo esse um CPF válido", async function() {
    assert.ok(!await text("Documento inválido").exists());
});

step("Então o botão para abertura de conta gratis será habilitado", async function() {
    assert.ok(!await button("abra sua conta grátis").isDisabled());
});

step("Ao clicar no botão para abertura de conta gratis", function() {
    click("abra sua conta grátis", { waitForEvents:['DOMContentLoaded']})
});

step("O cliente será redirecionado para o formulario com campos adicionais", async function() {
    
    //assert.equal(await currentURL(), "https://conta.iti.itau/abra-sua-conta/conta-gratis/")
});

step("O campo CPF deverá conter o mesmo CPF da tela anterior", async function() {
    assert.ok(await text(CPFTelaHome).exists());
});


step("Se os campos obrigatórios estiverem vazios", async function() {
    assert.ok(true);
});

step("O botão continuar, deverá estar desabilitado", async function() {
    assert.ok(await button("continuar").isDisabled());
});


step("Sendo esse um CPF inválido", async function() {
    assert.ok(await text("Documento inválido").exists());
});

step("Então o botão para abertura de conta gratis será desabilitado", async function() {
    assert.ok(await button("abra sua conta grátis").isDisabled());
});


/*
> checkBox({id: "opt_in"}).check() 
> write("Raphael Freitas", into(textBox("nome completo")))
> write("raphael.a.freitas-santos@gmail.com.br", into(textBox("email")))
> write("(11) 99263-1777", into(textBox("celular")))
> click("continuar")
> text("estamos quase lá, agora é só baixar o app").exists()
*/