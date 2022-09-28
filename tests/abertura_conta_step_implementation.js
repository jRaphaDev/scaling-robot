/* globals gauge*/
"use strict";
const path = require('path');
const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    press,
    screenshot,
    above,
    click,
    checkBox,
    listItem,
    toLeftOf,
    link,
    text,
    into,
    waitFor,
    textBox,
    evaluate,
    button,
    currentURL,
    near,
    deleteCookies
} = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';
var CPFTelaHome;


beforeScenario(async () => {
    await openBrowser({
        headless: headless
    })
});

afterScenario(async () => {
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

step("Abrir Home de Abertura de Conta do ITI", async function() {
    await goto("conta.iti.itau");
});

step("Ao digitar um numero de CPF <cpf>", async function(cpf) {
    CPFTelaHome = cpf;
    await write(CPFTelaHome, into(textBox("000.000.000-00")))
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

step("O cliente será redirecionado para o formulario com campos de dados pessoais", async function() {
    
    //assert.equal(await currentURL(), "https://conta.iti.itau/abra-sua-conta/conta-gratis/")
});

step("O campo CPF deverá conter o mesmo CPF da tela anterior", async function() {
    assert.ok(await text(CPFTelaHome).exists());
});

step("O botão continuar, deverá estar desabilitado previamente", async function() {
    assert.ok(await button("continuar").isDisabled());
});


step("Sendo esse um CPF inválido", async function() {
    assert.ok(await text("Documento inválido").exists());
});

step("Então o botão para abertura de conta gratis será desabilitado", async function() {
    assert.ok(await button("abra sua conta grátis").isDisabled());
});
