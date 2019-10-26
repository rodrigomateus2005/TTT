var clientIDModalProcura = "dlgProcura";
var MouraException = /** @class */ (function () {
    function MouraException() {
    }
    return MouraException;
}());
function JQueryDateFormat(date, formato) {
    if (date) {
        try {
            return $.format.date(date.toString(), formato);
        }
        catch (e) {
            return "";
        }
    }
    else {
        return "";
    }
}
function gettxtBackup() {
    return $("#" + clientIDModalProcura + "_txtBackup").get(0);
}
function formatNumero(textBox, casas) {
    var numero = textBox.value.toString().CNum();
    textBox.value = numero.Format(casas);
}
function completaComZero(texto, casas, esquerda) {
    var numero = texto;
    if (numero.toString().length != casas) {
        while (numero.toString().length < casas) {
            if (esquerda == true) {
                numero = "0" + numero;
            }
            else {
                numero = numero + "0";
            }
        }
    }
    return numero;
}
function formatTextBoxInteiro(textBox) {
    textBox.value = textBox.value.replace(/[^\d.]/g, '');
}
function sonumeros(e) {
    var tecla;
    var caracter;
    var expressao;
    tecla = getTeclaCodeEvent(e);
    return IsNumberKeyCode(tecla) || IsControlKeyCode(tecla) || IsFirefoxControlKeyEvent(e);
}
function sodecimais(e) {
    var tecla = getTeclaCodeEvent(e);
    return IsNumberKeyCode(tecla) || IsControlKeyCode(tecla) ||
        Globalize.cldr.main("numbers/symbols-numberSystem-latn/decimal").charCodeAt(0) == tecla ||
        IsFirefoxControlKeyEvent(e);
}
function verificaF2(e) {
    var tecla;
    tecla = getTeclaCodeEvent(e);
    if (tecla == 113) {
        return true;
    }
    return false;
}
function verificaF2CEP(e) {
    var tecla;
    tecla = getTeclaCodeEvent(e);
    if (tecla == 113) {
        return true;
    }
    return false;
}
function executarFuncaoOnKey(e, keysCodes, funcaoExecutar) {
    if (isTeclaPressed(e, keysCodes, false, false, null)) {
        funcaoExecutar.call(this, String.fromCharCode(getTeclaCodeEvent(e)));
        return true;
    }
    return false;
}
function isTeclaPressed(e, keysCodes, alt, ctrl, shift) {
    var tecla = getTeclaCodeEvent(e);
    var altKey = isAltPressedEvent(e);
    var ctrlKey = isCtrlPressedEvent(e);
    var shiftKey = isShiftPressedEvent(e);
    if (ctrl != undefined && ctrl != null) {
        if (ctrl != ctrlKey) {
            return false;
        }
    }
    if (alt != undefined && alt != null) {
        if (alt != altKey) {
            return false;
        }
    }
    if (shift != undefined && shift != null) {
        if (shift != shiftKey) {
            return false;
        }
    }
    if ($.inArray(tecla, keysCodes) < 0) {
        return false;
    }
    return true;
}
function IsControlKeyCode(keyCode) {
    if (keyCode >= 0x00 && keyCode <= 0x1F) { //0 à 31
        return true;
    }
    else if (keyCode >= 0x7F && keyCode <= 0x9F) { //127 à 159
        return true;
    }
    return false;
}
function IsFirefoxControlKeyEvent(keyEvent) {
    if (keyEvent.charCode == 0 && keyEvent.which == 0) {
        return true;
    }
    return false;
}
function IsSymbolKeyCode(keyCode) {
    if (keyCode >= 0x21 && keyCode <= 0x2F) { //33 à 47
        return true;
    }
    else if (keyCode >= 0x3A && keyCode <= 0x40) { //58 à 64
        return true;
    }
    else if (keyCode >= 0x5C && keyCode <= 0x60) { //92 à 96
        return true;
    }
    else if (keyCode >= 0x7B && keyCode <= 0x7E) { //123 à 126
        return true;
    }
    return false;
}
function IsAccentKeyCode(keyCode) {
    if (keyCode == 0x5E || keyCode == 0x60 || keyCode == 0xB4 || keyCode == 0x7E) { //94, 96, 126, 180
        return true;
    }
    return false;
}
function IsOperatorKeyCode(keyCode) {
    if (keyCode == 0x2A || keyCode == 0x2B || keyCode == 0x2D || keyCode == 0x2F) { //42, 43, 45, 47
        return true;
    }
    return false;
}
function IsComparatorKeyCode(keyCode) {
    if (keyCode == 0x3C || keyCode == 0x3D || keyCode == 0x3E) { //60, 61, 62
        return true;
    }
    return false;
}
function IsPunctuationKeyCode(keyCode) {
    if (keyCode == 0x21 || keyCode == 0x2C || keyCode == 0x2E || keyCode == 0x3A || keyCode == 0x3B || keyCode == 0x3F) { //21, 44, 46, 58, 59, 63
        return true;
    }
    return false;
}
function IsNumberKeyCode(keyCode) {
    if (keyCode >= 0x30 && keyCode <= 0x39) { //48 à 57
        return true;
    }
    return false;
}
function IsNegativeKeyCode(keyCode) {
    if (keyCode == 0x2D) { //-
        return true;
    }
    return false;
}
function IsSeparatorKeyCode(keyCode) {
    var separadorDecimal = Globalize.cldr.main("numbers/symbols-numberSystem-latn/decimal");
    var separadorGrupal = Globalize.cldr.main("numbers/symbols-numberSystem-latn/group");
    if (keyCode == separadorDecimal.charCodeAt(0)) {
        return true;
    }
    if (keyCode == separadorGrupal.charCodeAt(0)) {
        return true;
    }
    return false;
}
function IsLetterKeyCode(keyCode) {
    if (keyCode >= 0x41 && keyCode <= 0x5A) { //65 à 90
        return true;
    }
    if (keyCode >= 0x61 && keyCode <= 0x7A) { //97 à 122
        return true;
    }
    return false;
}
function IsWhiteSpaceKeyCode(keyCode) {
    if (keyCode == 0x20) { //32
        return true;
    }
    return false;
}
function isAltPressedEvent(e) {
    var ev = getKeyEventEvent(e);
    return ev.altKey;
}
function isCtrlPressedEvent(e) {
    var ev = getKeyEventEvent(e);
    return ev.altKey;
}
function isShiftPressedEvent(e) {
    var ev = getKeyEventEvent(e);
    return ev.altKey;
}
function getTeclaCodeEvent(e) {
    var ev = getKeyEventEvent(e);
    var tecla = 0;
    if (ev.which) // Netscape/Firefox/Opera
     {
        tecla = ev.which;
    }
    if (tecla == 0) {
        if (ev.charCode) {
            tecla = ev.charCode;
        }
    }
    if (tecla == 0) {
        if (ev.keyCode) {
            tecla = ev.keyCode;
        }
    }
    if (!tecla) {
        tecla = 0;
    }
    return tecla;
}
function getKeyEventEvent(e) {
    if (e.htmlEvent) //DevExpress
     {
        return e.htmlEvent;
    }
    else {
        return e; //Normal
    }
}
function corrigirGradeProcura(CompModal, CompGrid, idGrid) {
    //CompModal.SetMaximized(true);
    //var grid = $('#' + idGrid + ' .dxgvCSD').first();
    //CompGrid.AdjustControl();
    //var tamGrid = $(window).height() * 0.65;
    //grid.height(tamGrid);
    ApsxGridViewContentFull(idGrid);
}
function ApsxGridViewContentFull(idGrid) {
    $("#" + idGrid).parent().height("100%");
    window[idGrid].SetHeight($("#" + idGrid).parent().height() - 30);
}
function selecionarRegistroProcura(modal, campoCodigo, TextBoxProcura, isCallback) {
    modal.Hide();
    if (campoCodigo != "") {
        campoCodigo = campoCodigo.split(",")[0].split(".")[0];
    }
    pesquisarTextBoxProcura(TextBoxProcura, campoCodigo.toString(), isCallback);
}
function gridDblClickProcura(grid, modal, linha, TextBoxProcura, isCallback) {
    var key = grid.GetRowKey(linha);
    selecionarRegistroProcura(modal, key, TextBoxProcura, isCallback);
}
function pesquisarTextBoxProcura(TextBoxProcura, valor, isCallback) {
    if (isCallback) {
        //var elemento = document.getElementById(TextBoxProcura.id);
        var elemento = $(TextBoxProcura)[0];
        if (elemento) {
            elemento.focus();
        }
        $(TextBoxProcura)[0].focus();
        TextBoxProcura.value = valor;
        //TextBoxProcura.specialKeyboardHandlingUsed = false
        $(TextBoxProcura).blur();
        $(TextBoxProcura)[0].focus();
    }
    else {
        TextBoxProcura.value = valor;
        $(TextBoxProcura).change();
    }
}
function InitGridViewProcura(s, e, modal, TextBoxProcura, isCallback) {
    ASPxClientUtils.AttachEventToElement(s.GetMainElement(), "keydown", function (evt) {
        switch (getTeclaCodeEvent(e)) {
            case 13:
                if (s.kbdHelper.GetFocusableElement() == document.activeElement) {
                    var key = s.GetRowKey(s.GetFocusedRowIndex());
                    selecionarRegistroProcura(modal, key, TextBoxProcura, isCallback);
                }
                break;
        }
    });
}
function testarEvento(s, e) {
    alert('testeMouraDev');
}
function textBoxProcura_LostFocus(combo, hiddenField, callBack) {
}
function removerCssTextBoxProcura() {
    $('.Control-Search .dxeButtonEditSys').css('display', 'inline-table');
    var t = $('.Control-Search .dxeButtonEditSys, .Control-Search .dxeButtonEditSys .dxeEditAreaSys');
    t.removeClass();
    t.addClass('input-mini');
    $('.controls .dx-vam').removeClass();
}
function endCallBackTextoBoxProcura(combo, hdnDigitado, funcaoExecutar, callBackIDExecutarPerfom) {
    if (combo.GetText() == '' && hdnDigitado.value != '') {
        combo.Focus();
        toastr.warning('Registro não encontrado ou inativo');
    }
    //removerCssTextBoxProcura();
    if (funcaoExecutar.value != '') {
        eval(funcaoExecutar.value);
    }
    if (callBackIDExecutarPerfom != null) {
        $.each(callBackIDExecutarPerfom, function () { this.PerformCallback(combo.GetText()); });
        //callBackIDExecutarPerfom.PerformCallback(combo.GetText());
    }
}
function adicionarParametrosTextBoxProcura(hdnParametros, novosParametros) {
    hdnParametros.value = novosParametros;
}
function mostrarGradeTodosTextBoxProcura(textBoxProcura) {
    var intervalMostrar;
    intervalMostrar = setInterval(function () {
        textBoxProcura.SetValue('***');
        textBoxProcura.filterStrategy.Filtering();
        if (textBoxProcura.droppedDown) {
            clearInterval(intervalMostrar);
            intervalMostrar = 0;
        }
    }, 100);
}
function limparTextBoxProcura(textBoxProcura) {
    textBoxProcura.SetValue('');
    textBoxProcura.specialKeyboardHandlingUsed = false;
    textBoxProcura.OnLostFocus();
}
function salvarLayoutGrid(grid) {
    grid.AdjustControl();
    grid.PerformCallback('salvarlayout');
    setTimeout(exibirMensagemSucessoLayout, 2000);
}
function exibirMensagemSucessoLayout() {
    toastr.info('Layout salvo com sucesso');
}
function abrirModalProcura(modal, nomeGrid) {
    //callBackPanel.PerformCallback('configurarGrid');
    $("#" + nomeGrid).hide();
    modal.SetMaximized(true);
    modal.Show();
}
//function digitarProcura(modal, callBackPanel, textBoxProcura, caractere) {
//    callBackPanel.PerformCallback('configurarGrid');
//    modal.Show();
//    var text = document.getElementById(textBoxProcura);
//    if (text != null) {
//        text.focus();
//        text.value = caractere;
//    }        
//}
function digitarProcura(imgProcura, divSuperiorModal, caractere) {
    //callBackPanel.PerformCallback('configurarGrid');
    //modal.Show();
    dispararEventoDx(imgProcura.Click, imgProcura, null);
    var text = $("#" + divSuperiorModal).find("input").first().get(0);
    if (text != null) {
        text.value = "";
        text.focus();
        //text.value = caractere;
    }
}
function clicarBotaoGrid(grid, visibleIndex, keyValue, hdnBotaoGrid, CommandArgument, CommandName, BotaoClique) {
    var arg = document.getElementById(hdnBotaoGrid);
    if (arg != null) {
        arg.value = visibleIndex + '#|!' + keyValue + '#|!' + CommandArgument + '#|!' + CommandName;
    }
    var evento;
    var cancelarClick = false;
    if (CommandArgument == "grd_excluir") {
        evento = jQuery.Event("ClickExcluir");
    }
    else if (CommandArgument == "grd_selecionar") {
        evento = jQuery.Event("ClickSelecionar");
    }
    else if (CommandArgument == "grd_alterar") {
        evento = jQuery.Event("ClickAlterar");
    }
    else if (CommandArgument == "grd_imprimir") {
        evento = jQuery.Event("ClickImprimir");
    }
    if (evento) {
        evento.VisibleIndex = visibleIndex;
        $(grid).trigger(evento);
        if (evento.isDefaultPrevented()) {
            cancelarClick = true;
        }
    }
    if (!cancelarClick) {
        var botao = document.getElementById(BotaoClique);
        if (botao != null) {
            botao.click();
        }
    }
}
function selecionarProximoFocus(elementoAtual) {
    var elementosSelecionaveis;
    var indexSelecionado;
    var dxComponente = null;
    var elementoToFocus;
    if (!elementoAtual || elementoAtual == null)
        elementoAtual = document.activeElement;
    if (isBotao(elementoAtual))
        return;
    if (elementoAtual.nodeName.toLowerCase() == "table")
        return;
    elementosSelecionaveis = $(':not([tabindex="-1"]) > input, :not([tabindex="-1"]) > select, :not([tabindex="-1"]) > button, :not([tabindex="-1"]) > textarea, :not([tabindex="-1"]) > div.btn.dxbButtonSys.dxbTSys');
    elementosSelecionaveis = elementosSelecionaveis.filter(function (index) {
        return $(this).is(":visible") &&
            ($(this).is(":enabled") || $(this).is("div")) &&
            (!$(this).attr("tabindex") || $(this).attr("tabindex").CNum() >= 0);
    });
    indexSelecionado = elementosSelecionaveis.index($(elementoAtual));
    if (indexSelecionado < 0)
        indexSelecionado = elementosSelecionaveis.length - 1;
    if (indexSelecionado == elementosSelecionaveis.length - 1) { //ultimo
        elementoToFocus = elementosSelecionaveis.get(0);
    }
    else {
        elementoToFocus = elementosSelecionaveis.get(indexSelecionado + 1);
    }
    var idComponente = "";
    if (elementoToFocus && !String.IsNullOrWhiteSpace(elementoToFocus.id)) {
        idComponente = elementoToFocus.id;
    }
    if (!String.IsNullOrWhiteSpace(idComponente)) {
        dxComponente = ASPxClientControl.GetControlCollection().GetByName(idComponente);
    }
    if (dxComponente != null) {
        dxComponente.Focus();
    }
    else {
        elementoToFocus.focus();
    }
}
function dispararEventoDx(evento, obj, args) {
    for (var i = 0; i < evento.handlerInfoList.length; i++) {
        var handlerInfo = evento.handlerInfoList[i];
        handlerInfo.handler.call(handlerInfo.executionContext, obj, args);
    }
}
function isBotao(element) {
    var tagName = $(element).prop("tagName");
    if (tagName == undefined || tagName == null) {
        tagName = "";
    }
    tagName = tagName.toLocaleLowerCase();
    if (tagName == "input") {
        var atrib = $(element).attr("type");
        if (atrib == undefined || atrib == null) {
            atrib = "";
        }
        atrib = atrib.toLocaleLowerCase();
        if (atrib == "button" || atrib == "submit" || atrib == "reset") {
            return true;
        }
    }
    else if (tagName == "button") {
        return true;
    }
    return false;
}
function isTextarea(element) {
    if ($(element).is("textarea")) {
        return true;
    }
    return false;
}
function isLink(element) {
    if ($(element).is("a")) {
        return true;
    }
    return false;
}
function isDevExpressGridView(element) {
    if (!element || String.IsNullOrWhiteSpace(element.id))
        return false;
    if (window[element.id]) {
        if (window[element.id].isASPxClientControl) {
            var tagName = window[element.id].GetMainElement().tagName;
            tagName = tagName.toLowerCase();
            if (tagName == "table") {
                return true;
            }
        }
    }
    return false;
}
function procurarMenu(textoProcurar) {
    var divMenu = $('#DivMenu');
    var divMenuResultado = $('#DivMenuResultadoPesquisa');
    var listaMenu = divMenuResultado.find(".navegacao");
    var menusEncontrados;
    if (textoProcurar != '') {
        divMenu.hide();
        divMenuResultado.show();
        listaMenu.empty();
        menusEncontrados = divMenu.find('li.menuNormal').find('a').not('.navegacaoExpand').filter(function (index) {
            //return $(this).text().toUpperCase().indexOf(textoProcurar.toUpperCase()) > -1;
            return $(this).text().ConverterCaracter().toUpperCase().indexOf(textoProcurar.ConverterCaracter().toUpperCase()) > -1;
        });
        menusEncontrados.each(function (index) { listaMenu.append($(this).parent().clone()); });
    }
    else {
        divMenu.show();
        divMenuResultado.hide();
    }
}
function gradeFullScreen(grid) {
    var height = Math.max(0, document.documentElement.clientHeight);
    grid.SetHeight(height);
}
function globalEventsEndCallBack() {
    removerCssTextBoxProcura();
}
function executarCallBackPanel(CompCallBackPanel) {
    if (!CompCallBackPanel.InCallback()) {
        CompCallBackPanel.PerformCallback();
        return true;
    }
    else {
        return false;
    }
}
function executarCallBackPanelArgumento(CompCallBackPanel, arg) {
    if (!CompCallBackPanel.InCallback()) {
        CompCallBackPanel.PerformCallback(arg);
        return true;
    }
    else {
        return false;
    }
}
function endCallBackMoura(CompCallBackPanel, hdnTipoAlerta, hdnMensagem) {
    var hdnTipo = document.getElementById(hdnTipoAlerta);
    var hdnMsg = document.getElementById(hdnMensagem);
    if (hdnTipo.value == 'alerta') {
        toastr.warning(hdnMsg.value);
    }
    else if (hdnTipo.value == 'erro') {
        toastr.error(hdnMsg.value);
    }
    hdnMsg.value = '';
    hdnTipo.value = '';
}
function menuToggle(linkButtonID, divEsconderID, caminhoImagemMais, caminhoImagemMenos, caminhoImagemFavorito) {
    $('#' + linkButtonID).click(function () {
        var collapse_content_selector = $('#' + divEsconderID);
        //$(collapse_content_selector).toggle('fast');
        $(collapse_content_selector).slideToggle('fast', function () {
            if ($(collapse_content_selector).is(":visible")) {
                $('#' + linkButtonID).find("img").attr("src", caminhoImagemMenos);
            }
            else {
                if ($('#' + linkButtonID).text() === "Favoritos") {
                    $('#' + linkButtonID).find("img").attr("src", caminhoImagemFavorito);
                }
                else {
                    $('#' + linkButtonID).find("img").attr("src", caminhoImagemMais);
                }
            }
        });
    });
}
function onGridProcuraRowKeyDown(event, visibleIndex, grid) {
    if (getTeclaCodeEvent(event) == 13) {
        if (grid.GetRow(visibleIndex).cells.length > 0) {
            if (grid.GetRow(visibleIndex).cells[0].children.length > 0) {
                grid.GetRow(visibleIndex).cells[0].children[0].click();
            }
        }
    }
}
function selecionarIndex(textBox) {
    var index;
    index = document.getElementById(textBox.name + "_Index").value;
    textBox.Focus();
    if (parseInt(index) >= 0 && parseInt(index) < textBox.GetItemCount()) {
        textBox.SetSelectedIndex(index);
    }
    else {
        if (textBox.GetItemCount() > 0) {
            textBox.SetSelectedIndex(0);
            document.getElementById(textBox.name + "_Index").value = "0";
        }
    }
}
function setFocusRowIndexGrid(grid, index) {
    var linhas = grid.GetVisibleRowsOnPage();
    if (index < linhas) {
        grid.Focus();
        grid.SetFocusedRowIndex(index);
    }
}
function KeydownTela(event) {
    if (isEsperaAberta) {
        event.preventDefault();
        return;
    }
    if (isTeclaPressed(event, [13], false, false, false)) {
        if (isBotao(document.activeElement)) {
            event.preventDefault();
            document.activeElement.click();
        }
        else if (isTextarea(document.activeElement)) {
        }
        else if (isLink(document.activeElement)) {
        }
        else if (isDevExpressGridView(document.activeElement)) {
            event.preventDefault();
        }
        else {
            selecionarProximoFocus();
            event.preventDefault();
        }
    }
}
function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
function escapeRegExpNoCase(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/i, "\\$1");
}
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
function replaceAllNoCase(str, find, replace) {
    return str.replace(new RegExp(escapeRegExpNoCase(find), 'i'), replace);
}
function Right(str, n) {
    if (n <= 0)
        return "";
    else if (n > String(str).length)
        return str;
    else {
        var iLen = String(str).length;
        return String(str).substring(iLen, iLen - n);
    }
}
function GridViewBatchEditRowValidating(s, e) {
    alert('teste');
}
function CorrigirPopUpCalendario(idDivCalendario) {
    $('#' + idDivCalendario).detach().appendTo("form");
}
function SetFocusComponente(idComponente) {
    var dxComponente;
    var componente;
    dxComponente = ASPxClientControl.GetControlCollection().GetByName(idComponente);
    if (dxComponente != null) {
        dxComponente.Focus();
    }
    else {
        componente = document.getElementById(idComponente);
        if (componente) {
            componente.focus();
        }
    }
}
Globalize.addCultureInfo = function (loc, json) {
    Globalize.loadMessages(json);
};
function ClickBotaoRemoverProcuraComLista(callback, lista) {
    var param = "btnRemover:" + lista.selectedIndex.toString();
    //alert(param);
    callback.PerformCallback(param);
}
function DuploClickListaProcuraComLista(botaoRemover) {
    botaoRemover.OnClick();
}
function ExecutarAjaxCallbackSync(methodType, methodUrl, data) {
    var retorno;
    var erroServer;
    if (data != null && methodType.toLocaleLowerCase() == "get") {
        data["v"] = new Date().getTime();
    }
    $.ajax({
        async: false,
        type: methodType,
        url: methodUrl,
        data: data,
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        timeout: 1800000,
        success: function (d) {
            retorno = d;
        },
        error: function (erro, ajaxOptions, thrownError) {
            if (erro && erro.status == 403) {
                window.location.href = formataURLRelativa("/Login");
            }
            erroServer = erro;
        }
    });
    if (erroServer) {
        throw erroServer;
    }
    return retorno;
}
function ExecutarAjaxCallBackAsync(methodType, methodUrl, data, funcaoSucesso, funcaoErro, context) {
    $.ajax({
        async: true,
        type: methodType,
        url: methodUrl,
        data: data,
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        timeout: 1800000,
        success: $.proxy(funcaoSucesso, context),
        error: $.proxy(funcaoErro, context)
    });
}
function ExecutarDownloadBlobHttpRequestAsyncPost(nomeFuncao, data) {
    return ExecutarDownloadBlob("POST", ValoresSismoura.ApplicationPath + "JNPost.ashx/" + nomeFuncao, JSON.stringify(data));
}
function ExecutarDownloadBlob(methodType, methodUrl, data) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open(methodType, methodUrl, true);
        req.responseType = "blob";
        req.onload = function (event) {
            resolve({ event: event, request: req });
        };
        req.send(data);
    });
}
function adicionarEventoDevExpress(evento, handler, context) {
    if (!evento || evento == null)
        return;
    if (!handler || handler == null)
        return;
    var contemEvento = false;
    $.each(evento.handlerInfoList, function () {
        if (this.handler == handler) {
            contemEvento = true;
        }
    });
    if (!contemEvento) {
        evento.RemoveHandler(handler, context);
        evento.AddHandler(handler, context);
    }
}
function adicionarEventoDevExtreme(objeto, evento, handler, context) {
    if (!objeto || objeto == null)
        return;
    if (!evento || evento == null)
        return;
    if (!handler || handler == null)
        return;
    var contemEvento = false;
    var lista;
    var handlerTratado;
    if (context) {
        handlerTratado = $.proxy(handler, context);
    }
    else {
        handlerTratado = handler;
    }
    if (objeto._eventsStrategy) {
        if (objeto._eventsStrategy._events) {
            if (objeto._eventsStrategy._events[evento]) {
                if (objeto._eventsStrategy._events[evento].has) {
                    contemEvento = objeto._eventsStrategy._events[evento].has(handlerTratado);
                }
            }
        }
    }
    if (!contemEvento) {
        objeto.off(evento, handlerTratado);
        objeto.on(evento, handlerTratado);
    }
}
function adicionarEventoJQuery(objeto, evento, handler, context) {
    if (!objeto || objeto == null)
        return;
    if (!evento || evento == null)
        return;
    if (!handler || handler == null)
        return;
    var contemEvento = false;
    var handlerList;
    if ($._data(objeto, "events")) {
        handlerList = $._data(objeto, "events")[evento];
    }
    var handlerTratado;
    if (context) {
        handlerTratado = $.proxy(handler, context);
    }
    else {
        handlerTratado = handler;
    }
    if (handlerList) {
        $.each(handlerList, function () {
            if (this.handler == handlerTratado) {
                contemEvento = true;
            }
        });
    }
    if (!contemEvento) {
        $(objeto).off(evento, handlerTratado);
        $(objeto).on(evento, handlerTratado);
    }
}
function adicionarEventoMoura(evento, handler, context) {
    if (!evento || evento == null)
        return;
    if (!handler || handler == null)
        return;
    var index;
    index = evento.GetIndexHandler(handler, context);
    if (index < 0) {
        evento.RemoveHandler(handler, context);
        evento.AddHandler(handler, context);
    }
}
function MostrarMensagem(mensagem, timeOut) {
    if (mensagem)
        mensagem = mensagem.GetString();
    if (timeOut == undefined || timeOut == null)
        timeOut = 5000;
    setTimeout(function () { toastr.info(tratarMensagemToast(mensagem), "", { timeOut: timeOut }); }, 100);
}
function MostrarAlerta(mensagem, timeOut) {
    if (mensagem)
        mensagem = mensagem.GetString();
    if (timeOut == undefined || timeOut == null)
        timeOut = 5000;
    setTimeout(function () { toastr.warning(tratarMensagemToast(mensagem), "", { timeOut: timeOut }); }, 100);
}
function MostrarError(mensagem, timeOut) {
    if (mensagem)
        mensagem = mensagem.GetString();
    if (timeOut == undefined || timeOut == null)
        timeOut = 5000;
    setTimeout(function () { toastr.error(tratarMensagemToast(mensagem), "", { timeOut: timeOut }); }, 100);
}
function MostrarMensagemCampoObrigatorio(descricaoCampo) {
    MostrarAlerta("Preencha o campo corretamente: " + descricaoCampo);
}
function tratarMensagemToast(mensagem) {
    var msg = mensagem;
    msg = replaceAll(msg, String.fromCharCode(10), "");
    msg = replaceAll(msg, String.fromCharCode(13), "<br />");
    return msg;
}
function consultarVenda(venda) {
    var parametros = [];
    parametros.push("codigo=" + venda);
    abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.ConsultarVenda), parametros);
}
function abrirTelaNovaAbaCodigo(url, codigo) {
    var parametros = [];
    parametros.push("codigo=" + codigo);
    abrirTelaNovaAbaParametros(url, parametros);
}
function abrirTelaNovaAbaParametros(url, parametros) {
    if ((!url) || (url == null) || (url == ''))
        return;
    if (!parametros) {
        parametros = [];
    }
    var aux = "";
    for (var x = 0; x <= parametros.length - 1; x++) {
        if (aux != "") {
            aux += "|";
        }
        aux += parametros[x];
    }
    if (aux != "") {
        aux = "?Parametros=(" + aux + ")";
        url = url + aux;
    }
    window.open(url, "_blank");
}
function formataURLRelativa(url) {
    var aux;
    if (String.IsNullOrWhiteSpace(url)) {
        url = "";
    }
    if (url == URLTela.CadastroDeAtendimento && ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
        url = '/Modulos/Petshop/Atendimento/C_Animal_Petz.aspx';
    }
    if (url == URLTela.CadastroDeExameDoAnimal && ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
        url = '/Modulos/Petshop/Consulta/C_AtmExa_Petz.aspx';
    }
    url = url.trim();
    var pathBase = $("#hdnPathBase").val();
    if (String.IsNullOrWhiteSpace(pathBase)) {
        pathBase = "";
    }
    pathBase = pathBase.trim();
    aux = pathBase + url;
    aux = replaceAll(aux, "//", "/");
    return aux;
}
function cloneObject(obj) {
    if (null == obj || "object" != typeof obj)
        return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) {
            if (Array.isArray(obj[attr])) {
                copy[attr] = cloneArray(obj[attr]);
            }
            else if (typeof obj[attr] === 'object' && obj[attr] && !obj[attr].getDate) {
                copy[attr] = cloneObject(obj[attr]);
            }
            else {
                copy[attr] = obj[attr];
            }
        }
    }
    return copy;
}
function cloneArray(arr) {
    var retorno;
    if (arr && Array.isArray(arr)) {
        retorno = [];
        for (var x = 0; x < arr.length; x++) {
            retorno.push(cloneObject(arr[x]));
        }
    }
    return retorno;
}
var isEsperaAberta;
function abrirEspera(mensagem) {
    $("#divCarregando2").show();
    if (!String.IsNullOrWhiteSpace(mensagem)) {
        $("#mensagemCarregando").html(mensagem.GetString());
    }
    else {
        $("#mensagemCarregando").html("Carregando ...".GetString());
    }
    //Envia o foco para a div para que o usuário não consiga ficar navegando nos itens que estiverem atras dela com o TAB
    $("#divCarregando2").focus();
    isEsperaAberta = true;
    return true;
}
function fecharEspera() {
    $("#divCarregando2").hide();
    $("#mensagemCarregando").html("Carregando ...");
    isEsperaAberta = false;
    return true;
}
var MsgBoxIcon;
(function (MsgBoxIcon) {
    MsgBoxIcon[MsgBoxIcon["Info"] = 1] = "Info";
    MsgBoxIcon[MsgBoxIcon["Alert"] = 2] = "Alert";
    MsgBoxIcon[MsgBoxIcon["Question"] = 3] = "Question";
})(MsgBoxIcon || (MsgBoxIcon = {}));
var MsgBoxOptions;
(function (MsgBoxOptions) {
    MsgBoxOptions[MsgBoxOptions["OkOnly"] = 1] = "OkOnly";
    MsgBoxOptions[MsgBoxOptions["YesNo"] = 2] = "YesNo";
    MsgBoxOptions[MsgBoxOptions["YesNoCancel"] = 3] = "YesNoCancel";
})(MsgBoxOptions || (MsgBoxOptions = {}));
var MsgBoxResult;
(function (MsgBoxResult) {
    MsgBoxResult[MsgBoxResult["Ok"] = 1] = "Ok";
    MsgBoxResult[MsgBoxResult["Yes"] = 2] = "Yes";
    MsgBoxResult[MsgBoxResult["No"] = 3] = "No";
    MsgBoxResult[MsgBoxResult["Cancel"] = 4] = "Cancel";
})(MsgBoxResult || (MsgBoxResult = {}));
var MsgBoxResultEventArgs = /** @class */ (function () {
    function MsgBoxResultEventArgs() {
    }
    return MsgBoxResultEventArgs;
}());
function MsgBoxJS(msg, buttons, icone, funcaoResultado, argument, titulo) {
    //var botoes: { [buttonText: string]: (event?: Event) => void } | JQueryUI.DialogButtonOptions[];
    var botoes;
    var strIcone;
    if (!buttons) {
        buttons = MsgBoxOptions.OkOnly;
    }
    if (!icone) {
        icone = MsgBoxIcon.Info;
    }
    //Seta o CSS para o ícone do botão selecionado
    switch (icone) {
        case MsgBoxIcon.Alert:
            strIcone = 'ui-icon-alert';
            break;
        case MsgBoxIcon.Info:
            strIcone = 'ui-icon-info';
            break;
        case MsgBoxIcon.Question:
            strIcone = 'ui-icon-help';
            break;
        default:
            strIcone = 'ui-icon-alert';
            break;
    }
    ;
    //Remove a div anterior, caso haja
    $('#dialog-confirm').remove();
    if (String.IsNullOrWhiteSpace(titulo)) {
        titulo = "Moura Informática";
    }
    if (msg)
        msg = msg.GetString();
    //Cria a div que irá exibir a mensagem
    var html = $('<div id="dialog-confirm" title="' + titulo + '" > \
                    <div style="max-height: 200px; overflow: auto;"> \
                        <p> \
                            <span class="ui-icon ' + strIcone + '" style= "float:left; margin:2px 12px 20px 0;" > </span>\
                            ' + msg + ' \
                        </p> \
                     </div> \
                   </div>');
    //Monta os botões 
    botoes = [];
    var botaoAtual;
    if (buttons == MsgBoxOptions.OkOnly) {
        //botoes = {
        //    "OK": function () {
        //        $(this).dialog("close");
        //        resultadoMsgBox(MsgBoxResult.Ok, funcaoResultado, argument);
        //    }
        //}
        botaoAtual = {};
        botaoAtual.text = "OK".GetString();
        botaoAtual.click = function () {
            $(this).dialog("close");
            resultadoMsgBox(MsgBoxResult.Ok, funcaoResultado, argument);
        };
        botoes.push(botaoAtual);
    }
    else {
        //botoes = {
        //    "Sim": function () {
        //        $(this).dialog("close");
        //        resultadoMsgBox(MsgBoxResult.Yes, funcaoResultado, argument);
        //    },
        //    "Não": function () {
        //        $(this).dialog("close");
        //        resultadoMsgBox(MsgBoxResult.No, funcaoResultado, argument);
        //    }
        //}
        botaoAtual = {};
        botaoAtual.text = "Sim".GetString();
        botaoAtual.click = function () {
            $(this).dialog("close");
            resultadoMsgBox(MsgBoxResult.Yes, funcaoResultado, argument);
        };
        botoes.push(botaoAtual);
        botaoAtual = {};
        botaoAtual.text = "Não".GetString();
        botaoAtual.click = function () {
            $(this).dialog("close");
            resultadoMsgBox(MsgBoxResult.No, funcaoResultado, argument);
        };
        botoes.push(botaoAtual);
        if (buttons == MsgBoxOptions.YesNoCancel) {
            //botoes["Cancelar"] = function () {
            //    $(this).dialog("close");
            //    resultadoMsgBox(MsgBoxResult.Cancel, funcaoResultado, argument);
            //}
            botaoAtual = {};
            botaoAtual.text = "Não".GetString();
            botaoAtual.click = function () {
                $(this).dialog("close");
                resultadoMsgBox(MsgBoxResult.Cancel, funcaoResultado, argument);
            };
            botoes.push(botaoAtual);
        }
    }
    //Exibe o dialog
    html.dialog({
        resizable: false,
        closeOnEscape: false,
        height: "auto",
        width: 380,
        modal: true,
        draggable: false,
        buttons: botoes
    });
    //setTimeout(function () {
    //    $(html).parent().find("button").first().focus();            
    //}, 500);
}
function resultadoMsgBox(resultado, funcaoResultado, argument) {
    try {
        if (funcaoResultado && funcaoResultado != null) {
            var ret = new MsgBoxResultEventArgs();
            ret.Resultado = resultado;
            ret.Argument = argument;
            funcaoResultado(ret);
        }
    }
    catch (ex) {
        console.log(ex);
    }
}
var InputBoxResultEventArgs = /** @class */ (function () {
    function InputBoxResultEventArgs() {
    }
    return InputBoxResultEventArgs;
}());
function InputBoxJS(titulo, mensagem, argument, funcaoRetorno, context, valorDefault) {
    var botoes;
    var strIcone;
    var idInput = "txtInputJSMoura";
    strIcone = 'ui-icon-info';
    if (String.IsNullOrWhiteSpace(valorDefault)) {
        valorDefault = "";
    }
    //Remove a div anterior, caso haja
    $('#dialog-input').remove();
    //Cria a div que irá exibir a mensagem
    var html = $('<div id="dialog-input" title="' + titulo + '" > \
                    <div style="max-height: 200px; overflow: auto;"> \
                        <p> \
                            <span class="ui-icon ' + strIcone + '" style= "float:left; margin:2px 12px 20px 0;" > </span>\
                            ' + mensagem + ' \
                            <br /><input type="text" id="' + idInput + '" value="' + valorDefault + '" style="width: 100%;" /> \
                        </p> \
                     </div> \
                   </div>');
    //Monta os botões 
    botoes = {
        "OK": function () {
            $(this).dialog("close");
            var funcao;
            if (context) {
                funcao = $.proxy(funcaoRetorno, context);
            }
            else {
                funcao = funcaoRetorno;
            }
            resultadoInputBox($("#" + idInput).val(), funcao, argument);
        },
        "Cancelar": function () {
            $(this).dialog("close");
        }
    };
    //Exibe o dialog
    var dlg = html.dialog({
        resizable: false,
        closeOnEscape: false,
        height: "auto",
        width: 380,
        modal: true,
        draggable: false,
        buttons: botoes
    });
    dlg.parent().appendTo(jQuery("form:first"));
    setTimeout(function () { $("#" + idInput).focus(); }, 100);
}
function resultadoInputBox(resultado, funcaoResultado, argument) {
    try {
        if (funcaoResultado && funcaoResultado != null) {
            var ret = new InputBoxResultEventArgs();
            ret.Valor = resultado;
            ret.Argument = argument;
            funcaoResultado(ret);
        }
    }
    catch (ex) {
        console.log(ex);
    }
}
var DiferencaData;
(function (DiferencaData) {
    DiferencaData[DiferencaData["MilliSeconds"] = 0] = "MilliSeconds";
    DiferencaData[DiferencaData["Seconds"] = 1] = "Seconds";
    DiferencaData[DiferencaData["Minutes"] = 2] = "Minutes";
    DiferencaData[DiferencaData["Hours"] = 3] = "Hours";
    DiferencaData[DiferencaData["Days"] = 4] = "Days";
    DiferencaData[DiferencaData["Months"] = 5] = "Months";
    DiferencaData[DiferencaData["Years"] = 6] = "Years";
})(DiferencaData || (DiferencaData = {}));
;
function calcularDiferencaData(dataInicio, dataFim, diferenca) {
    var dataInicio;
    var dataFim;
    var resultado;
    if (dataInicio.getTimezoneOffset() != dataFim.getTimezoneOffset()) { //Horário de verão
        if (dataInicio.getTimezoneOffset() < dataFim.getTimezoneOffset()) {
            dataInicio.setHours(dataInicio.getHours() - 1);
        }
        if (dataFim.getTimezoneOffset() < dataInicio.getTimezoneOffset()) {
            dataFim.setHours(dataFim.getHours() + 1);
        }
    }
    if (diferenca == DiferencaData.Days || diferenca == DiferencaData.Months || diferenca == DiferencaData.Years) {
        dataInicio = removeTimeFromDate(dataInicio);
        dataFim = removeTimeFromDate(dataFim);
    }
    resultado = Math.abs(dataInicio.getTime() - dataFim.getTime());
    if (diferenca == DiferencaData.Months) {
        resultado = (dataFim.getMonth() + (12 * dataFim.getFullYear()));
        resultado -= (dataInicio.getMonth() + (12 * dataInicio.getFullYear()));
    }
    else {
        if (diferenca >= DiferencaData.Seconds) {
            resultado = resultado / 1000;
        }
        if (diferenca >= DiferencaData.Minutes) {
            resultado = resultado / 60;
        }
        if (diferenca >= DiferencaData.Hours) {
            resultado = resultado / 60;
        }
        if (diferenca >= DiferencaData.Days) {
            resultado = resultado / 24;
        }
        if (diferenca >= DiferencaData.Years) {
            if (diferenca > (365 * 4)) { //Bissexto
                resultado = resultado / 365;
            }
            else {
                resultado = resultado / 365.25;
            }
        }
    }
    resultado = Math.floor(resultado);
    return resultado;
}
function removeTimeFromDate(value) {
    var resultado = ConvertToDate(value);
    if (!resultado) {
        return null;
    }
    resultado = new Date(resultado.getFullYear(), resultado.getMonth(), resultado.getDate());
    return resultado;
}
function corrigirTamanhoMouraGridViewJS(grid, idDivConteudo) {
    var divConteudo = $("#" + idDivConteudo);
    divConteudo.width("50px");
    var divPai = divConteudo.parent();
    divConteudo.width(divPai.width());
    grid.refresh();
}
function RedrawGridsJS(idContainer) {
    var seletor = "";
    if (!String.IsNullOrWhiteSpace(idContainer)) {
        seletor = "#" + idContainer + " [moura-dx-grid]";
    }
    else {
        seletor = "[moura-dx-grid]";
    }
    $(seletor).each(function (i, element) {
        var elemento = $(element).attr('moura-dx-grid');
        if (elemento) {
            window[elemento].Refresh();
        }
    });
    seletor = "";
    if (!String.IsNullOrWhiteSpace(idContainer)) {
        seletor = "#" + idContainer + " [moura-grid-server]";
    }
    else {
        seletor = "[moura-grid-server]";
    }
    $(seletor).each(function (i, element) {
        var mouraGridServer = window[element.id + "_Object"];
        if (mouraGridServer) {
            mouraGridServer.Grid.AdjustControl();
        }
    });
}
function DecodeTextoJSON(texto) {
    var aux = "";
    if (String.IsNullOrWhiteSpace(texto)) {
        aux = "";
    }
    aux = replaceAll(texto, '#Q;', '"');
    return aux;
}
function EncodeTextoJSON(texto) {
    var aux = "";
    if (String.IsNullOrWhiteSpace(texto)) {
        aux = "";
    }
    aux = replaceAll(texto, '"', '#Q;');
    return aux;
}
function ExibirMensagemAdicionalProcura(msg, titulo) {
    var botoes;
    if (!titulo || titulo == undefined) {
        titulo = "Informações Adicionais";
    }
    else {
        titulo = titulo;
    }
    //Remove a div anterior, caso haja
    $('#dialog-informacao-procura').remove();
    //Cria a div que irá exibir a mensagem
    var html = $('<div id="dialog-informacao-procura" title="' + titulo + '" > \
                    <div style="max-height: 250px; overflow: auto;"> \
                            <span> \
                            ' + msg + ' \
                            </span> \
                     </div> \
                   </div>');
    //Monta os botões 
    botoes = {
        "OK": function () {
            $(this).dialog("close");
        }
    };
    var widthWindow = $(window).width();
    if (widthWindow < 700) {
        widthWindow = widthWindow - 10;
    }
    else {
        widthWindow = 700;
    }
    //Exibe o dialog
    var dlg = html.dialog({
        resizable: false,
        closeOnEscape: false,
        height: "auto",
        width: widthWindow,
        modal: true,
        draggable: false,
        buttons: botoes
    });
    dlg.parent().appendTo(jQuery("form:first"));
}
function AtualizarModelAngular(Elemento) {
    var elementoAtivo = document.activeElement;
    var enviarFoco = false;
    if (elementoAtivo && $(elementoAtivo).attr('id') == $(Elemento).attr('id')) {
        enviarFoco = true;
    }
    //Utilizado para atualizar o atributo ng-model do angular
    $(Elemento).trigger("input");
    $(Elemento).trigger("blur");
    if (enviarFoco) {
        $(Elemento).focus();
    }
}
function RecebeFoco(idComponente) {
    try {
        if (!String.IsNullOrWhiteSpace(idComponente)) {
            $("#" + idComponente).focus();
        }
    }
    catch (e) {
    }
}
function Sting64ToByteArray(str) {
    var byteCharacters = atob(str);
    var byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    return byteNumbers;
}
function ByteArrayToSting64(arr) {
    var binary = '';
    var bytes = new Uint8Array(arr);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}
function StringToParametros(StringParametros) {
    var retorno = {};
    var parametro;
    var campo;
    if (String.IsNullOrWhiteSpace(StringParametros)) {
        StringParametros = "";
    }
    if (StringParametros.indexOf("(") == 0) {
        StringParametros = StringParametros.slice(1);
    }
    if (StringParametros.indexOf(")") == StringParametros.length - 1) {
        StringParametros = StringParametros.slice(0, -1);
    }
    //If Not StringParametros.EndsWith("|") Then
    //StringParametros = StringParametros & "|"
    //End If
    if (String.IsNullOrWhiteSpace(StringParametros)) {
        return retorno;
    }
    parametro = StringParametros.split("|");
    if (parametro) {
        for (var x = 0; x < parametro.length; x++) {
            if (!String.IsNullOrWhiteSpace(parametro[x])) {
                campo = parametro[x].split("=");
                if (campo.length = 2) {
                    retorno[campo[0]] = campo[1];
                }
            }
        }
    }
    return retorno;
}
function FecharModalCadastro(idHdnRetorno, parametrosRetorno, idUPDPanel, idMouraTelaModal) {
    if (!String.IsNullOrWhiteSpace(idHdnRetorno)) {
        window.parent.document.getElementById(idHdnRetorno).value = parametrosRetorno;
        //(<any>window.parent).__doPostBack(idUPDPanel, '');
        if (!String.IsNullOrWhiteSpace(idMouraTelaModal)) {
            var MouraTelaModal = window.parent.window[idMouraTelaModal];
            if (MouraTelaModal) {
                MouraTelaModal.HiddenRetorno.value = parametrosRetorno;
                MouraTelaModal.FinalizarModal(parametrosRetorno);
            }
        }
    }
}
function FullScreenObjeto(element) {
    //var element: any = document.documentElement;
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    }
    else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}
function ToggleFullScreen(elem) {
    var doc = document;
    //Para fullscrenn em todo o browser, utilizar como parametro da funcao: document.documentElement
    // ## The below if statement seems to work better ## if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if ((doc.fullScreenElement !== undefined && doc.fullScreenElement === null) || (doc.msFullscreenElement !== undefined && doc.msFullscreenElement === null) || (doc.mozFullScreen !== undefined && !doc.mozFullScreen) || (doc.webkitIsFullScreen !== undefined && !doc.webkitIsFullScreen)) {
        if (elem.requestFullScreen) {
            elem.requestFullScreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    }
    else {
        if (doc.cancelFullScreen) {
            doc.cancelFullScreen();
        }
        else if (doc.mozCancelFullScreen) {
            doc.mozCancelFullScreen();
        }
        else if (doc.webkitCancelFullScreen) {
            doc.webkitCancelFullScreen();
        }
        else if (doc.msExitFullscreen) {
            doc.msExitFullscreen();
        }
    }
}
function LogarException(ex) {
    if (ex.responseText) {
        try {
            var e = JSON.parse(ex.responseText);
            MostrarAlerta(e.Message);
        }
        catch (exx) {
            MostrarError("Ocorreu um erro no sistema");
        }
        console.error(ex);
    }
    else {
        MostrarError("Ocorreu um erro no sistema");
        if (ex.message) {
            console.error("Erro do sistema: " + ex.message);
        }
        console.error(ex);
    }
}
function LogarExceptionAjax(ex) {
    LogarException(ex);
}
function GetRetornoAJAX(d) {
    if (String.IsNullOrWhiteSpace(d)) {
        return null;
    }
    else {
        return JSON.parse(d).d;
    }
}
function Sleep(ms) {
    var inicial = new Date();
    var agora;
    var diferenca = 0;
    while (diferenca < ms) {
        agora = new Date();
        diferenca = agora.getTime() - inicial.getTime(); // This will give difference in milliseconds
        //var resultInMinutes = Math.round(difference / 60000);
    }
    return true;
}
var enmKeyCode;
(function (enmKeyCode) {
    enmKeyCode[enmKeyCode["ENTER"] = 13] = "ENTER";
    enmKeyCode[enmKeyCode["RETURN"] = 13] = "RETURN";
    enmKeyCode[enmKeyCode["ESC"] = 27] = "ESC";
    enmKeyCode[enmKeyCode["F1"] = 112] = "F1";
    enmKeyCode[enmKeyCode["F2"] = 113] = "F2";
    enmKeyCode[enmKeyCode["F3"] = 114] = "F3";
    enmKeyCode[enmKeyCode["F4"] = 115] = "F4";
    enmKeyCode[enmKeyCode["F5"] = 116] = "F5";
    enmKeyCode[enmKeyCode["F6"] = 117] = "F6";
    enmKeyCode[enmKeyCode["F7"] = 118] = "F7";
    enmKeyCode[enmKeyCode["F8"] = 119] = "F8";
    enmKeyCode[enmKeyCode["F9"] = 120] = "F9";
    enmKeyCode[enmKeyCode["F10"] = 121] = "F10";
    enmKeyCode[enmKeyCode["F11"] = 122] = "F11";
    enmKeyCode[enmKeyCode["F12"] = 123] = "F12";
})(enmKeyCode || (enmKeyCode = {}));
function AdicionarAtalhoHTML(target, keycode, stopPropagation, funcaoExecutar, context) {
    var keyDown = function OnKeyDownComponente(e) {
        var tecla = getTeclaCodeEvent(e);
        if (!tecla || tecla != keycode) {
            return;
        }
        if (stopPropagation) {
            e.cancelBubble = true;
            e.returnValue = false;
            //e.stopPropagation works in Firefox.
            if (e.stopPropagation) {
                e.stopPropagation();
                e.preventDefault();
            }
        }
        $.proxy(funcaoExecutar, context)();
    };
    //var keyDown = OnKeyDownComponente;
    //var args = {
    //    keycode: keycode,
    //    stopPropagation: stopPropagation,
    //    funcaoExecutar: funcaoExecutar,
    //    context: context
    //}
    //adicionarEventoJQuery(target, "keydown", $.proxy(keyDown, args), this);
    adicionarEventoJQuery(target, "keydown", keyDown, this);
}
function OnKeyDownComponente(e) {
    var tecla = getTeclaCodeEvent(e);
    if (!tecla || tecla != this.keycode) {
        return;
    }
    if (this.stopPropagation) {
        e.cancelBubble = true;
        e.returnValue = false;
        //e.stopPropagation works in Firefox.
        if (e.stopPropagation) {
            e.stopPropagation();
            e.preventDefault();
        }
    }
    $.proxy(this.funcaoExecutar, this.context)();
}
function StopPropagationJQuery(e) {
    e.cancelBubble = true;
    e.returnValue = false;
    //e.stopPropagation works in Firefox.
    if (e.stopPropagation) {
        e.stopPropagation();
        e.preventDefault();
    }
}
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        var indexIgual = hashes[i].indexOf("=");
        var key = hashes[i].slice(0, indexIgual);
        var value = hashes[i].slice((hashes[i].length - indexIgual - 1) * -1);
        vars.push(key);
        vars[key] = decodeURIComponent(value);
    }
    return vars;
}
function createCookie(name, value, days) {
    try {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }
    catch (ex) {
    }
}
function readCookie(name) {
    try {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    catch (ex) {
        return null;
    }
}
function eraseCookie(name) {
    createCookie(name, "", -1);
}
function mouraXOR(a, b) {
    return (a || b) && !(a && b);
}
function criarPropertyObjeto(obj, propertyName, setMethod, getMethod) {
    Object.defineProperty(obj, propertyName, {
        get: getMethod,
        set: setMethod
    });
}
function MontarEnderecoProprietario(Endereco, Bairro, Cidade) {
    var retorno = "";
    if (!String.IsNullOrWhiteSpace(Endereco))
        retorno += Endereco;
    if (!String.IsNullOrWhiteSpace(Bairro)) {
        if (!String.IsNullOrWhiteSpace(retorno))
            retorno += " - ";
        retorno += Bairro;
    }
    if (!String.IsNullOrWhiteSpace(Cidade)) {
        if (!String.IsNullOrWhiteSpace(retorno))
            retorno += " - ";
        retorno += Cidade;
    }
    return retorno;
}
function ConvertToDate(valor) {
    try {
        if (valor == null || valor == undefined || String.IsNullOrWhiteSpace(valor)) {
            return null;
        }
        if (valor.getDate) {
            return valor;
        }
        else {
            var retorno = ("" + valor).ToDate();
            if (!retorno) {
                try {
                    retorno = new Date(valor);
                }
                catch (ex2) {
                    retorno = null;
                }
            }
            return retorno;
        }
    }
    catch (ex) {
        return null;
    }
}
function CNum(valor) {
    if (!valor) {
        return 0;
    }
    if (typeof valor == "number") {
        return valor;
    }
    else {
        return ("" + valor).CNum();
    }
}
function iniciarMascaras() {
    $("[data-inputmask]").inputmask();
    $("[data-inputmask-regex]").inputmask("Regex");
}
function DiffDays(startDate, endDate) {
    // 24 * 60 * 60 * 1000;
    var millisecDia = 86400000;
    return Math.round((endDate - startDate) / millisecDia);
}
function ValidarPeriodo(dataInicial, dataFinal) {
    dataInicial = ConvertToDate(dataInicial);
    dataFinal = ConvertToDate(dataFinal);
    if (!dataInicial) {
        MostrarAlerta("Data inicial inválida");
        return false;
    }
    if (!dataFinal) {
        MostrarAlerta("Data final inválida");
        return false;
    }
    if (dataInicial > dataFinal) {
        MostrarAlerta("Data inicial não pode ser maior que a data final");
        return false;
    }
    return true;
}
function PreencherImagemBlob(htmlImage, file) {
    var reader = new FileReader();
    reader.onload = (function (aImg) { return function (e) { aImg.src = e.target.result; }; })(htmlImage);
    reader.readAsDataURL(file);
}
function AbrirReport(path, arquivo) {
    if (ValoresSismoura.IsDebug) {
        var dlgReport = window['dlgReport_Object'];
        if (dlgReport) {
            dlgReport.Mostrar(path, arquivo);
        }
        else {
            AbrirReportInternal(path, arquivo);
        }
    }
    else {
        AbrirReportInternal(path, arquivo);
    }
}
function AbrirReportInternal(path, arquivo) {
    if (String.IsNullOrWhiteSpace(path)) {
        path = "";
    }
    if (!path.endsWith('/')) {
        path += "/";
    }
    debugger;
    var parametros = "?relatorio=" + path + arquivo;
    abrirTelaNovaAbaParametros(formataURLRelativa("ReportView.aspx" + parametros), []);
}
function downloadArquivo(content, filename, contentType) {
    if (!contentType) {
        contentType = 'application/octet-stream';
    }
    var a = document.createElement('a');
    var blob = new Blob([content], { 'type': contentType });
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;
    a.click();
}
function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}
//# sourceMappingURL=MouraScript.js.map