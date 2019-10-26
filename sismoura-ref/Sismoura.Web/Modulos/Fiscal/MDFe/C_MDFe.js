var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var C_MDFe = /** @class */ (function (_super) {
    __extends(C_MDFe, _super);
    function C_MDFe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_MDFe.prototype, "hdnCodigo", {
        get: function () {
            return $('#hdnCodigo')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "cboSerie", {
        get: function () {
            return window['cboSerie_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Mdfe", {
        //#region AbaDados
        //MDFe
        get: function () {
            if (!this.GetScope()["Mdfe"]) {
                this.GetScope()["Mdfe"] = {};
            }
            return this.GetScope()["Mdfe"];
        },
        set: function (value) {
            this.GetScope()["Mdfe"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "cboTipoEmitente", {
        get: function () {
            return window['cboTipoEmitente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Carregamento", {
        //Local de Carregamento
        get: function () {
            if (!this.GetScope()["Carregamento"]) {
                this.GetScope()["Carregamento"] = {};
            }
            return this.GetScope()["Carregamento"];
        },
        set: function (value) {
            this.GetScope()["Carregamento"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "ListaLocalCarregamento", {
        get: function () {
            return this.GetScope()["ListaLocalCarregamento"];
        },
        set: function (value) {
            this.GetScope()["ListaLocalCarregamento"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "grdUFCarregamento", {
        get: function () {
            return window['grdUFCarregamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Percurso", {
        //UF's do Percurso
        get: function () {
            if (!this.GetScope()["Percurso"]) {
                this.GetScope()["Percurso"] = {};
            }
            return this.GetScope()["Percurso"];
        },
        set: function (value) {
            this.GetScope()["Percurso"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "ListaUFPercurso", {
        get: function () {
            return this.GetScope()["ListaUFPercurso"];
        },
        set: function (value) {
            this.GetScope()["ListaUFPercurso"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "grdUFPercurso", {
        get: function () {
            return window['grdUFPercurso_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Emitente", {
        //#endregion
        //#region AbaEmitente
        //Identificação do Emitente
        get: function () {
            if (!this.GetScope()['Emitente']) {
                this.GetScope()['Emitente'] = {};
            }
            return this.GetScope()['Emitente'];
        },
        set: function (value) {
            this.GetScope()['Emitente'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "txtFone_DDD1", {
        get: function () {
            return window['txtFone_DDD1_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "txtCNPJ", {
        get: function () {
            return window['txtCNPJ_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Veiculo", {
        //#endregion
        //#region AbaRodoviario
        //Veículo de Tração
        //      Veiculo
        get: function () {
            if (!this.GetScope()['Veiculo']) {
                this.GetScope()['Veiculo'] = {};
            }
            return this.GetScope()['Veiculo'];
        },
        set: function (value) {
            this.GetScope()['Veiculo'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Proprietario", {
        //      Proprietario
        get: function () {
            if (!this.GetScope()['Proprietario']) {
                this.GetScope()['Proprietario'] = {};
            }
            return this.GetScope()['Proprietario'];
        },
        set: function (value) {
            this.GetScope()['Proprietario'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "txtRNTRCProp", {
        get: function () {
            return window['txtRNTRCProp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "cboTipoProp", {
        get: function () {
            return window['cboTipoProp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "cboUFProp", {
        get: function () {
            return window['cboUFProp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "txtCPF", {
        get: function () {
            return window['txtCPF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "txtNomeProp", {
        get: function () {
            return window['txtNomeProp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "lstTipo", {
        get: function () {
            return window['lstTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "txtIEProp", {
        get: function () {
            return window['txtIEProp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Condutor", {
        //      Condutores
        get: function () {
            if (!this.GetScope()['Condutor']) {
                this.GetScope()['Condutor'] = {};
            }
            return this.GetScope()['Condutor'];
        },
        set: function (value) {
            this.GetScope()['Condutor'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "ListaCondutores", {
        get: function () {
            return this.GetScope()["ListaCondutores"];
        },
        set: function (value) {
            this.GetScope()["ListaCondutores"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "grdCondutor", {
        get: function () {
            return window['grdCondutor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Reboque", {
        //Reboque
        get: function () {
            if (!this.GetScope()['Reboque']) {
                this.GetScope()['Reboque'] = {};
            }
            return this.GetScope()['Reboque'];
        },
        set: function (value) {
            this.GetScope()['Reboque'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "ListaReboque", {
        get: function () {
            return this.GetScope()["ListaReboque"];
        },
        set: function (value) {
            this.GetScope()["ListaReboque"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "grdReboque", {
        get: function () {
            return window['grdReboque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "cboTipoPropReb", {
        get: function () {
            return window['cboTipoPropReb_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "cboTipoCReb", {
        get: function () {
            return window['cboTipoCReb_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "txtRNTRCReb", {
        get: function () {
            return window['txtRNTRCReb_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "cboUFPropReb", {
        get: function () {
            return window['cboUFPropReb_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "txtNomePropReb", {
        get: function () {
            return window['txtNomePropReb_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "lstlTipoReb", {
        get: function () {
            return window['lstlTipoReb_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "txtCpfReb", {
        get: function () {
            return window['txtCpfReb_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "txtIEReb", {
        get: function () {
            return window['txtIEReb_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "CIOT", {
        //CIOT
        get: function () {
            if (!this.GetScope()['CIOT']) {
                this.GetScope()['CIOT'] = {};
            }
            return this.GetScope()['CIOT'];
        },
        set: function (value) {
            this.GetScope()['CIOT'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "ListaCIOT", {
        get: function () {
            return this.GetScope()["ListaCIOT"];
        },
        set: function (value) {
            this.GetScope()["ListaCIOT"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "txtCpfCnpjCIOT", {
        get: function () {
            return window['txtCpfCnpjCIOT_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "grdCIOT", {
        get: function () {
            return window['grdCIOT_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Contratante", {
        //Contratantes
        get: function () {
            if (!this.GetScope()['Contratante']) {
                this.GetScope()['Contratante'] = {};
            }
            return this.GetScope()['Contratante'];
        },
        set: function (value) {
            this.GetScope()['Contratante'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "ListaContratantes", {
        get: function () {
            return this.GetScope()["ListaContratantes"];
        },
        set: function (value) {
            this.GetScope()["ListaContratantes"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "txtCpfCnpjContratante", {
        get: function () {
            return window['txtCpfCnpjContratante_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "grdContratantes", {
        get: function () {
            return window['grdContratantes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Pedagio", {
        //Vale Pedagio
        get: function () {
            if (!this.GetScope()['Pedagio']) {
                this.GetScope()['Pedagio'] = {};
            }
            return this.GetScope()['Pedagio'];
        },
        set: function (value) {
            this.GetScope()['Pedagio'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "ListaPedagio", {
        get: function () {
            return this.GetScope()["ListaPedagio"];
        },
        set: function (value) {
            this.GetScope()["ListaPedagio"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "txtCpfCnpjResp", {
        get: function () {
            return window['txtCpfCnpjResp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "grdPedagio", {
        get: function () {
            return window['grdPedagio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Seguro", {
        //Seguro de Carga
        get: function () {
            if (!this.GetScope()['Seguro']) {
                this.GetScope()['Seguro'] = {};
            }
            return this.GetScope()['Seguro'];
        },
        set: function (value) {
            this.GetScope()['Seguro'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "ListaSeguro", {
        get: function () {
            return this.GetScope()["ListaSeguro"];
        },
        set: function (value) {
            this.GetScope()["ListaSeguro"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "mdSeguro", {
        get: function () {
            return window['mdSeguro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "grdSeguro", {
        get: function () {
            return window['grdSeguro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "cboResponsavelSeguro", {
        get: function () {
            return window['cboResponsavelSeguro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Documento", {
        //#endregion
        //#region AbaAquaviario
        //#endregion
        //#region AbaInformacoesDocumentos
        get: function () {
            if (!this.GetScope()['Documento']) {
                this.GetScope()['Documento'] = {};
            }
            return this.GetScope()['Documento'];
        },
        set: function (value) {
            this.GetScope()['Documento'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "mtpDocumentos", {
        get: function () {
            return window['mtpDocumentos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "cboMunDoc", {
        get: function () {
            return window['cboMunDoc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "cboUFDoc", {
        get: function () {
            return window['cboUFDoc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "MunicipioDesc", {
        //Municípios de Descarregamento
        get: function () {
            if (!this.GetScope()['MunicipioDesc']) {
                this.GetScope()['MunicipioDesc'] = {};
            }
            return this.GetScope()['MunicipioDesc'];
        },
        set: function (value) {
            this.GetScope()['MunicipioDesc'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "ListaMunDescarregamento", {
        get: function () {
            return this.GetScope()["ListaMunDescarregamento"];
        },
        set: function (value) {
            this.GetScope()["ListaMunDescarregamento"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "grdCidadeDesc", {
        get: function () {
            return window['grdCidadeDesc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "CTE", {
        //Conhecimento de Transporte (Eletrônico)
        get: function () {
            if (!this.GetScope()['CTE']) {
                this.GetScope()['CTE'] = {};
            }
            return this.GetScope()['CTE'];
        },
        set: function (value) {
            this.GetScope()['CTE'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "ListaCte", {
        get: function () {
            return this.GetScope()["ListaCte"];
        },
        set: function (value) {
            this.GetScope()["ListaCte"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "grdCte", {
        get: function () {
            return window['grdCte_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Lacre_Transporte", {
        get: function () {
            if (!this.GetScope()['Lacre_Transporte']) {
                this.GetScope()['Lacre_Transporte'] = {};
            }
            return this.GetScope()['Lacre_Transporte'];
        },
        set: function (value) {
            this.GetScope()['Lacre_Transporte'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "ListaLacreUnidTranspCte", {
        get: function () {
            return this.GetScope()["ListaLacreUnidTranspCte"];
        },
        set: function (value) {
            this.GetScope()["ListaLacreUnidTranspCte"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Unidade_Transporte", {
        get: function () {
            if (!this.GetScope()['Unidade_Transporte']) {
                this.GetScope()['Unidade_Transporte'] = {};
            }
            return this.GetScope()['Unidade_Transporte'];
        },
        set: function (value) {
            this.GetScope()['Unidade_Transporte'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "ListaUnidadeTransporteCTe", {
        get: function () {
            return this.GetScope()["ListaUnidadeTransporteCTe"];
        },
        set: function (value) {
            this.GetScope()["ListaUnidadeTransporteCTe"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "cboTipoUnTransp", {
        get: function () {
            return window['cboTipoUnTransp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "grdLacresTranspCte", {
        get: function () {
            return window['grdLacresTranspCte_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "grdUnTranspCTe", {
        get: function () {
            return window['grdUnTranspCTe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Nfe", {
        //Nota Fiscal Eletrônica
        get: function () {
            if (!this.GetScope()['Nfe']) {
                this.GetScope()['Nfe'] = {};
            }
            return this.GetScope()['Nfe'];
        },
        set: function (value) {
            this.GetScope()['Nfe'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "ListaNFe", {
        get: function () {
            return this.GetScope()["ListaNFe"];
        },
        set: function (value) {
            this.GetScope()["ListaNFe"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Unidade_Nfe", {
        get: function () {
            if (!this.GetScope()['Unidade_Nfe']) {
                this.GetScope()['Unidade_Nfe'] = {};
            }
            return this.GetScope()['Unidade_Nfe'];
        },
        set: function (value) {
            this.GetScope()['Unidade_Nfe'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Lacre_Nfe", {
        get: function () {
            if (!this.GetScope()['Lacre_Nfe']) {
                this.GetScope()['Lacre_Nfe'] = {};
            }
            return this.GetScope()['Lacre_Nfe'];
        },
        set: function (value) {
            this.GetScope()['Lacre_Nfe'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "ListaLacreUnidTranspNFe", {
        get: function () {
            return this.GetScope()["ListaLacreUnidTranspNFe"];
        },
        set: function (value) {
            this.GetScope()["ListaLacreUnidTranspNFe"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "ListaUnidadeTransporteNFe", {
        get: function () {
            return this.GetScope()["ListaUnidadeTransporteNFe"];
        },
        set: function (value) {
            this.GetScope()["ListaUnidadeTransporteNFe"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "grdLacresTranspNFe", {
        get: function () {
            return window['grdLacresTranspNFe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "grdNFe", {
        get: function () {
            return window['grdNFe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "grdUnTranspNFe", {
        get: function () {
            return window['grdUnTranspNFe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "cboTipoUnTranspNFe", {
        get: function () {
            return window['cboTipoUnTranspNFe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Referenciado", {
        //MDF-e Referenciado
        get: function () {
            if (!this.GetScope()['Referenciado']) {
                this.GetScope()['Referenciado'] = {};
            }
            return this.GetScope()['Referenciado'];
        },
        set: function (value) {
            this.GetScope()['Referenciado'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "ListaMdfe", {
        get: function () {
            return this.GetScope()["ListaMdfe"];
        },
        set: function (value) {
            this.GetScope()["ListaMdfe"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "btnAdicionaMDFe", {
        get: function () {
            return window['btnAdicionaMDFe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "grdUnTranspMDFe", {
        get: function () {
            return window['grdUnTranspMDFe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "grdLacresTranspMDFe", {
        get: function () {
            return window['grdLacresTranspMDFe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "cboTipoUnTranspMDFe", {
        get: function () {
            return window['cboTipoUnTranspMDFe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "grdMdfeRef", {
        get: function () {
            return window['grdMdfeRef_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "tpMdfeRef", {
        get: function () {
            return window['tpMdfeRef_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "agpMdfeRef", {
        get: function () {
            return window['agpMdfeRef_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Lacre", {
        //#endregion 
        //#region AbaTotalizadores
        //Totais Fonecidos -->  //Entity
        //Lacres
        get: function () {
            if (!this.GetScope()['Lacre']) {
                this.GetScope()['Lacre'] = {};
            }
            return this.GetScope()['Lacre'];
        },
        set: function (value) {
            this.GetScope()['Lacre'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "ListaLacre", {
        get: function () {
            return this.GetScope()["ListaLacre"];
        },
        set: function (value) {
            this.GetScope()["ListaLacre"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "grdLacres", {
        get: function () {
            return window['grdLacres_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Autorizado", {
        //Autorizados para Download do XML do MDF-e
        get: function () {
            if (!this.GetScope()['Autorizado']) {
                this.GetScope()['Autorizado'] = {};
            }
            return this.GetScope()['Autorizado'];
        },
        set: function (value) {
            this.GetScope()['Autorizado'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "ListaAutDownload", {
        get: function () {
            return this.GetScope()["ListaAutDownload"];
        },
        set: function (value) {
            this.GetScope()["ListaAutDownload"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "txtCpfAut", {
        get: function () {
            return window['txtCpfAut_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "grdAutoD", {
        get: function () {
            return window['grdAutoD_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Informacoes", {
        //#endregion
        //#region AbaInformacoesAdicionais
        get: function () {
            if (!this.GetScope()['Informacoes']) {
                this.GetScope()['Informacoes'] = {};
            }
            return this.GetScope()['Informacoes'];
        },
        set: function (value) {
            this.GetScope()['Informacoes'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "mdTransmitirNFe", {
        //#endregion
        //#region Modais
        get: function () {
            return window['mdTransmitirNFe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "TransmitirNFe", {
        get: function () {
            if (!this.GetScope()['TransmitirNFe']) {
                this.GetScope()['TransmitirNFe'] = {};
            }
            return this.GetScope()['TransmitirNFe'];
        },
        set: function (value) {
            this.GetScope()['TransmitirNFe'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "mdEventosMDFe", {
        get: function () {
            return window['mdEventosMDFe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Evento", {
        get: function () {
            if (!this.GetScope()['Evento']) {
                this.GetScope()['Evento'] = {};
            }
            return this.GetScope()['Evento'];
        },
        set: function (value) {
            this.GetScope()['Evento'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "mdEncerrar", {
        get: function () {
            return window['mdEncerrar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Encerrar", {
        get: function () {
            if (!this.GetScope()['Encerrar']) {
                this.GetScope()['Encerrar'] = {};
            }
            return this.GetScope()['Encerrar'];
        },
        set: function (value) {
            this.GetScope()['Encerrar'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "cboUFEncerramento", {
        get: function () {
            return window['cboUFEncerramento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "mdReboque", {
        get: function () {
            return window['mdReboque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "mdPedagio", {
        get: function () {
            return window['mdPedagio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "mdCTe", {
        get: function () {
            return window['mdCTe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "mdNFe", {
        get: function () {
            return window['mdNFe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "mdMdfe", {
        get: function () {
            return window['mdMdfe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "cboMunLocalCarregamento", {
        get: function () {
            return window['cboMunLocalCarregamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "cboMunDesc", {
        get: function () {
            return window['cboMunDesc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "cboMunEncerramento", {
        get: function () {
            return window['cboMunEncerramento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "grdDescarreg", {
        //#endregion
        //#region Aquaviario
        get: function () {
            return window['grdDescarreg_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "grdCarreg", {
        get: function () {
            return window['grdCarreg_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "ListaCarregamento", {
        get: function () {
            return this.GetScope()["ListaCarregamento"];
        },
        set: function (value) {
            this.GetScope()["ListaCarregamento"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Carregamento_Arquivario", {
        get: function () {
            if (!this.GetScope()['Carregamento_Arquivario']) {
                this.GetScope()['Carregamento_Arquivario'] = {};
            }
            return this.GetScope()['Carregamento_Arquivario'];
        },
        set: function (value) {
            this.GetScope()['Carregamento_Arquivario'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Descarregamento_Arquivario", {
        get: function () {
            if (!this.GetScope()['Descarregamento_Arquivario']) {
                this.GetScope()['Descarregamento_Arquivario'] = {};
            }
            return this.GetScope()['Descarregamento_Arquivario'];
        },
        set: function (value) {
            this.GetScope()['Descarregamento_Arquivario'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "ListaDesCarregamento", {
        get: function () {
            return this.GetScope()["ListaDesCarregamento"];
        },
        set: function (value) {
            this.GetScope()["ListaDesCarregamento"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "grdComboio", {
        get: function () {
            return window['grdComboio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "grdUnidades", {
        get: function () {
            return window['grdUnidades_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "ListaComboio", {
        get: function () {
            return this.GetScope()["ListaComboio"];
        },
        set: function (value) {
            this.GetScope()["ListaComboio"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Comboio", {
        get: function () {
            if (!this.GetScope()['Comboio']) {
                this.GetScope()['Comboio'] = {};
            }
            return this.GetScope()['Comboio'];
        },
        set: function (value) {
            this.GetScope()['Comboio'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Aquaviario", {
        get: function () {
            if (!this.GetScope()['Aquaviario']) {
                this.GetScope()['Aquaviario'] = {};
            }
            return this.GetScope()['Aquaviario'];
        },
        set: function (value) {
            this.GetScope()['Aquaviario'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Unidade", {
        get: function () {
            if (!this.GetScope()['Unidade']) {
                this.GetScope()['Unidade'] = {};
            }
            return this.GetScope()['Unidade'];
        },
        set: function (value) {
            this.GetScope()['Unidade'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "ListaCargaVazia", {
        get: function () {
            return this.GetScope()["ListaCargaVazia"];
        },
        set: function (value) {
            this.GetScope()["ListaCargaVazia"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Lacre_Mdfe", {
        get: function () {
            if (!this.GetScope()['Lacre_Mdfe']) {
                this.GetScope()['Lacre_Mdfe'] = {};
            }
            return this.GetScope()['Lacre_Mdfe'];
        },
        set: function (value) {
            this.GetScope()['Lacre_Mdfe'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "ListaLacreUnidTranspMDFe", {
        get: function () {
            return this.GetScope()["ListaLacreUnidTranspMDFe"];
        },
        set: function (value) {
            this.GetScope()["ListaLacreUnidTranspMDFe"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "Unidade_Mdfe", {
        get: function () {
            if (!this.GetScope()['Unidade_Mdfe']) {
                this.GetScope()['Unidade_Mdfe'] = {};
            }
            return this.GetScope()['Unidade_Mdfe'];
        },
        set: function (value) {
            this.GetScope()['Unidade_Mdfe'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "ListaUnidadeTransporteMDFe", {
        get: function () {
            return this.GetScope()["ListaUnidadeTransporteMDFe"];
        },
        set: function (value) {
            this.GetScope()["ListaUnidadeTransporteMDFe"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "cboUFReb", {
        get: function () {
            return window['cboUFReb_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "cboTipoEvento", {
        get: function () {
            return window['cboTipoEvento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MDFe.prototype, "txtdataEncerrar", {
        get: function () {
            return window['txtdataEncerrar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    //#endregion
    C_MDFe.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grdCIOT) {
            adicionarEventoMoura(this.grdCIOT.LimpouItem, this.LimparCiot, this);
            adicionarEventoMoura(this.grdCIOT.Validando, this.ValidandoCIOT, this);
        }
        if (this.grdContratantes) {
            adicionarEventoMoura(this.grdContratantes.LimpouItem, this.LimparContratante, this);
            adicionarEventoMoura(this.grdContratantes.Validando, this.ValidandoContratante, this);
        }
        if (this.grdAutoD) {
            adicionarEventoMoura(this.grdAutoD.LimpouItem, this.LimparAutorizados, this);
            adicionarEventoMoura(this.grdAutoD.Validando, this.validandoAutorizados, this);
        }
        if (this.grdUFCarregamento) {
            adicionarEventoMoura(this.grdUFCarregamento.Validando, this.ValidandoUFCarregamento, this);
        }
        if (this.grdUFPercurso) {
            adicionarEventoMoura(this.grdUFPercurso.Validando, this.ValidandoUFPercurso, this);
        }
        if (this.grdCondutor) {
            adicionarEventoMoura(this.grdCondutor.Validando, this.ValidandoCondutor, this);
        }
        if (this.grdReboque) {
            adicionarEventoMoura(this.grdReboque.Validando, this.ValidandoReboque, this);
        }
        if (this.grdCidadeDesc) {
            adicionarEventoMoura(this.grdCidadeDesc.Validando, this.ValidandoMunicipioDescarregamento, this);
        }
        if (this.grdPedagio) {
            adicionarEventoMoura(this.grdPedagio.Validando, this.ValidandoPedagio, this);
        }
        if (this.grdLacresTranspNFe) {
            adicionarEventoMoura(this.grdLacresTranspNFe.Validando, this.ValidandoLacreNFe, this);
        }
        if (this.grdLacresTranspMDFe) {
            adicionarEventoMoura(this.grdLacresTranspMDFe.Validando, this.ValidandoLacreMDFe, this);
        }
        if (this.grdLacres) {
            adicionarEventoMoura(this.grdLacres.Validando, this.ValidandoLacre, this);
        }
        if (this.grdLacresTranspCte) {
            adicionarEventoMoura(this.grdLacresTranspCte.Validando, this.ValidandoLacreCTe, this);
        }
        if (this.grdCte) {
            adicionarEventoMoura(this.grdCte.Validando, this.ValidandoCTe, this);
        }
        if (this.grdNFe) {
            adicionarEventoMoura(this.grdNFe.Validando, this.ValidandoNFe, this);
            adicionarEventoMoura(this.grdNFe.ItemExcluido, this.OnNFeExcluida, this);
        }
        if (this.grdCte) {
            adicionarEventoMoura(this.grdCte.ItemExcluido, this.OnCTeExcluida, this);
        }
        if (this.grdMdfeRef) {
            adicionarEventoMoura(this.grdMdfeRef.Validando, this.ValidandoMDFe, this);
        }
        if (this.grdUnTranspCTe) {
            adicionarEventoMoura(this.grdUnTranspCTe.Validando, this.ValidandoUnTranspCTe, this);
        }
        if (this.grdUnTranspNFe) {
            adicionarEventoMoura(this.grdUnTranspNFe.Validando, this.ValidandoUnTranspNFe, this);
        }
        if (this.grdUnTranspMDFe) {
            adicionarEventoMoura(this.grdUnTranspMDFe.Validando, this.ValidandoUnTranspMDFe, this);
        }
        if (this.grdDescarreg) {
            adicionarEventoMoura(this.grdDescarreg.Validando, this.ValidandoDescarregamento, this);
        }
        if (this.grdCarreg) {
            adicionarEventoMoura(this.grdCarreg.Validando, this.ValidandoCarregamento, this);
        }
        if (this.grdComboio) {
            adicionarEventoMoura(this.grdComboio.Validando, this.ValidandoComboio, this);
        }
        if (this.grdUnidades) {
            adicionarEventoMoura(this.grdUnidades.Validando, this.ValidandoUnidadeCargaVazia, this);
        }
        if (this.mtpDocumentos && this.mtpDocumentos.Painel) {
            adicionarEventoMoura(this.mtpDocumentos.ActiveTabChanged, this.OnMtpDocumentosTabChanged, this);
        }
        if (this.tab && this.tab.Painel) {
            adicionarEventoMoura(this.tab.ActiveTabChanged, this.OnTabTabChanged, this);
        }
        if (this.grdSeguro) {
            adicionarEventoMoura(this.grdSeguro.Validando, this.ValidandoSeguro, this);
        }
    };
    C_MDFe.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouUFCarregamento) {
            this.GetScope().MudouUFCarregamento = $.proxy(this.MudouUFCarregamento, this);
            var that = this;
            this.GetScope().$watch(function () { if (that.Carregamento != null) {
                return that.Carregamento.UF;
            } }, this.GetScope().MudouUFCarregamento);
        }
        if (!this.GetScope().MudouUFDescarregamento) {
            this.GetScope().MudouUFDescarregamento = $.proxy(this.MudouUFDescarregamento, this);
            var that = this;
            this.GetScope().$watch(function () { if (that.MunicipioDesc != null) {
                return that.MunicipioDesc.UF;
            } }, this.GetScope().MudouUFDescarregamento);
        }
        if (!this.GetScope().MudouUFDocumentos) {
            this.GetScope().MudouUFDocumentos = $.proxy(this.MudouUFDocumentos, this);
            var that = this;
            this.GetScope().$watch(function () { if (that.Documento != null) {
                return that.Documento.UF;
            } }, this.GetScope().MudouUFDocumentos);
        }
        if (!this.GetScope().MudouUFEncerramento) {
            this.GetScope().MudouUFEncerramento = $.proxy(this.MudouUFEncerramento, this);
            var that = this;
            this.GetScope().$watch(function () { if (that.Documento != null) {
                return that.Encerrar.UF;
            } }, this.GetScope().MudouUFEncerramento);
        }
        if (!this.GetScope().MudouTipoCIOT) {
            this.GetScope().MudouTipoCIOT = $.proxy(this.MudouTipoCIOT, this);
            var that = this;
            this.GetScope().$watch(function () { if (that.CIOT != null) {
                return that.CIOT.Tipo;
            } }, this.GetScope().MudouTipoCIOT);
        }
        if (!this.GetScope().MudouTipoContratantes) {
            this.GetScope().MudouTipoContratantes = $.proxy(this.MudouTipoContratantes, this);
            var that = this;
            this.GetScope().$watch(function () { if (that.Contratante != null) {
                return that.Contratante.Tipo;
            } }, this.GetScope().MudouTipoContratantes);
        }
        if (!this.GetScope().MudouTipoAutorizados) {
            this.GetScope().MudouTipoAutorizados = $.proxy(this.MudouTipoAutorizados, this);
            var that = this;
            this.GetScope().$watch(function () { if (that.Autorizado != null) {
                return that.Autorizado.Tipo;
            } }, this.GetScope().MudouTipoAutorizados);
        }
        if (!this.GetScope().MudouTipoPedagio) {
            this.GetScope().MudouTipoPedagio = $.proxy(this.MudouTipoPedagio, this);
            var that = this;
            this.GetScope().$watch(function () { if (that.Pedagio != null) {
                return that.Pedagio.Tipo;
            } }, this.GetScope().MudouTipoPedagio);
        }
        if (!this.GetScope().ProprietarioNaoEmitente) {
            this.GetScope().ProprietarioNaoEmitente = $.proxy(this.ProprietarioNaoEmitente, this);
            var that = this;
            this.GetScope().$watch(function () { if (that.Proprietario != null) {
                return that.Proprietario.Proprietario;
            } }, this.GetScope().ProprietarioNaoEmitente);
        }
        if (!this.GetScope().ReboqueProprietarioNaoEmitente) {
            this.GetScope().ReboqueProprietarioNaoEmitente = $.proxy(this.ReboqueProprietarioNaoEmitente, this);
            var that = this;
            this.GetScope().$watch(function () { if (that.Reboque != null) {
                return that.Reboque.Proprietario;
            } }, this.GetScope().ReboqueProprietarioNaoEmitente);
        }
        if (!this.GetScope().MudouTipoProprietario) {
            this.GetScope().MudouTipoProprietario = $.proxy(this.MudouTipoProprietario, this);
            var that = this;
            this.GetScope().$watch(function () { if (that.Proprietario != null) {
                return that.Proprietario.Tipo;
            } }, this.GetScope().MudouTipoProprietario);
        }
        if (!this.GetScope().MudouTipoReboque) {
            this.GetScope().MudouTipoReboque = $.proxy(this.MudouTipoReboque, this);
            var that = this;
            this.GetScope().$watch(function () { if (that.Reboque != null) {
                return that.Reboque.Tipo;
            } }, this.GetScope().MudouTipoReboque);
        }
        if (!this.GetScope().MudouModalidade) {
            this.GetScope().MudouModalidade = $.proxy(this.MudouModalidade, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Modalidade; }, this.GetScope().MudouModalidade);
        }
        if (!this.GetScope().MudouFormulario) {
            this.GetScope().MudouFormulario = $.proxy(this.MudouFormulario, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Formulario; }, this.GetScope().MudouFormulario);
        }
        if (!this.GetScope().MudouSerie) {
            this.GetScope().MudouSerie = $.proxy(this.MudouSerie, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Serie; }, this.GetScope().MudouSerie);
        }
        if (!this.GetScope().MudouEmpresa) {
            this.GetScope().MudouEmpresa = $.proxy(this.MudouEmpresa, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Empresa; }, this.GetScope().MudouEmpresa);
        }
        this.IsSerieValida();
        this.RefreshAngular();
    };
    C_MDFe.prototype.MudouEmpresa = function () {
        //this.PreencherEmitente(this.EntityTela);
        this.OnDepoisLimpar(this.EntityTela);
    };
    C_MDFe.prototype.MudouSerie = function (oldValue, newValue) {
        if (('' + oldValue) === ('' + newValue)) {
            return;
        }
        try {
            var parametros = {
                codEmpresa: this.EntityTela.Empresa,
                codSerie: this.EntityTela.Serie
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherNumeroNota", parametros);
            if (retorno) {
                this.EntityTela.Formulario = retorno.numeroNota;
                //this.codNota = retorno.codNota;
                //this.EntityTela.Codigo = retorno.codNota;
            }
            this.IsSerieValida();
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_MDFe.prototype.MudouFormulario = function () {
        var _this = this;
        try {
            abrirEspera();
            this.LimparItensGrades();
            this.LimparListas();
            var parametros = {
                codigo: this.EntityTela.Formulario,
                codEmpresa: this.EntityTela.Empresa,
                serie: this.EntityTela.Serie
            };
            this.ExecutarFuncaoServerSideAsynch("VerificarFormulario", parametros, function (d) {
                var retorno = GetRetornoAJAX(d);
                if (retorno && retorno.Nota != null) {
                    var that_1 = _this;
                    that_1.hdnCodigo.value = retorno.Nota.Codigo;
                    that_1.EntityTela.Codigo = retorno.Nota.Codigo;
                    that_1.EntityTela.Situacao = retorno.Nota.Situacao;
                    if (retorno.Nota.Data_Emissao && !String.IsNullOrWhiteSpace(retorno.Nota.Data_Emissao)) {
                        that_1.EntityTela.Data_Emissao = retorno.Nota.Data_Emissao;
                        that_1.Mdfe.Hora_Emissao = retorno.Nota.Data_Emissao;
                    }
                    if (retorno.Nota.Data_Inicio_Viagem && !String.IsNullOrWhiteSpace(retorno.Nota.Data_Inicio_Viagem)) {
                        that_1.EntityTela.Data_Inicio_Viagem = retorno.Nota.Data_Inicio_Viagem;
                        that_1.Mdfe.Hora_Inicio_Viagem = retorno.Nota.Data_Inicio_Viagem;
                    }
                    that_1.EntityTela.Modalidade = retorno.Nota.Modalidade;
                    if (that_1.EntityTela.Modalidade == 3 /* Aquaviario */) {
                        that_1.MudouModalidade();
                    }
                    else {
                        that_1.MudouModalidade();
                        that_1.ListaMdfe = [];
                    }
                    that_1.EntityTela.Qtde_CTe_Ref = retorno.Nota.Qtde_CTe_Ref;
                    that_1.EntityTela.Qtde_NFe_Ref = retorno.Nota.Qtde_NFe_Ref;
                    that_1.EntityTela.Qtde_NF_Ref = retorno.Nota.Qtde_NF_Ref;
                    that_1.EntityTela.UN_Medida = retorno.Nota.UN_Medida;
                    //if (retorno.Nota.UN_Medida == 'KG') {
                    //    that.EntityTela.UN_Medida = '0';
                    //}
                    //else {
                    //    that.EntityTela.UN_Medida = '1';
                    //}
                    that_1.EntityTela.Valor_Total = retorno.Nota.Valor_Total;
                    that_1.EntityTela.Peso_Carga = retorno.Nota.Peso_Carga;
                    that_1.Mdfe.Carrega_Posterior = retorno.Carrega_Posterior;
                    if (retorno.Nota.FiscalMdfeXML && retorno.Nota.FiscalMdfeXML.length > 0) {
                        retorno.Nota.FiscalMdfeXML.forEach(function (item) {
                            if (item.DadosAdicionaisFisco) {
                                that_1.Informacoes.Adicionais = item.DadosAdicionaisFisco;
                            }
                            if (item.DadosAdicionaisContribuinte) {
                                that_1.Informacoes.Complementares = item.DadosAdicionaisContribuinte;
                            }
                            that_1.ListaAutDownload = item.ListaAutDownload;
                            that_1.ListaUFPercurso = item.UFPercuso;
                            if (item.ListaCTe && item.ListaCTe.length > 0) {
                                that_1.ListaCte = item.ListaCTe;
                            }
                            if (item.ListaNFe && item.ListaNFe.length > 0) {
                                that_1.ListaNFe = item.ListaNFe;
                            }
                            if (item.ListaMDFe && item.ListaMDFe.length > 0) {
                                that_1.ListaMdfe = item.ListaMDFe;
                            }
                            if (item.ListaLacre && item.ListaLacre.length > 0) {
                                that_1.ListaLacre = item.ListaLacre;
                            }
                            that_1.ListaMunDescarregamento = item.UFDescarregamento;
                            that_1.ListaMunDescarregamento.forEach(function (itemLista) {
                                that_1.Documento.UF = itemLista.UF;
                                that_1.Documento.Municipio = itemLista.Municipio;
                            });
                            that_1.ListaLocalCarregamento = item.UFCarregamento;
                            that_1.Mdfe.UF_Descarregamento = item.UFFim;
                            that_1.Mdfe.UF = item.UFIni;
                            that_1.Mdfe.Tipo_Transportador = item.tipoTrasportador;
                            that_1.Mdfe.Tipo_Emitente = item.tipoEmitente;
                            if (item.ListaSeguro && item.ListaSeguro.length > 0) {
                                that_1.ListaSeguro = item.ListaSeguro;
                            }
                            if (that_1.EntityTela.Modalidade == 1 /* Rodoviario */) {
                                //this.MudouModalidade();
                                that_1.Veiculo.RNTRC = retorno.ModalRodo.RNTRC;
                                that_1.Veiculo.Codigo_Agendamento = retorno.ModalRodo.codAgPorto;
                                that_1.Veiculo.Codigo_Interno = retorno.ModalRodo.CodigoInterno;
                                that_1.Veiculo.Carroceria = retorno.ModalRodo.tpCar;
                                that_1.Veiculo.Placa = retorno.ModalRodo.placa;
                                that_1.Veiculo.Tara = retorno.ModalRodo.tara;
                                that_1.Veiculo.Renavam = retorno.ModalRodo.RENAVAM;
                                that_1.Veiculo.Capacidade_KG = retorno.ModalRodo.capKG;
                                that_1.Veiculo.Capacidade_M3 = retorno.ModalRodo.capM3;
                                that_1.Veiculo.UF = retorno.ModalRodo.UF;
                                that_1.Veiculo.Tipo_Rodado = retorno.ModalRodo.tpRod;
                                if (retorno.ModalRodo.prop) {
                                    that_1.Proprietario.Proprietario = true;
                                    that_1.Proprietario.CPF = retorno.ModalRodo.CPFCNPJ;
                                    that_1.Proprietario.RNTRC = retorno.ModalRodo.RNTRCProp;
                                    that_1.Proprietario.Nome = retorno.ModalRodo.xNome;
                                    that_1.Proprietario.IE = retorno.ModalRodo.IE;
                                    that_1.Proprietario.Tipo_Proprietario = retorno.ModalRodo.tpProp;
                                    that_1.Proprietario.UF = retorno.ModalRodo.UFProp;
                                }
                                that_1.ListaReboque = retorno.ModalRodo.ListaReboque;
                                that_1.ListaReboque.forEach(function (item) {
                                    if (item.TipoCarroceria) {
                                        item.Tipo_Carroceria_Text = that_1.cboTipoCReb.Combo.GetItem(item.TipoCarroceria).text;
                                    }
                                    if (item.TipoProp) {
                                        item.Tipo_Proprietario_Text = that_1.cboTipoPropReb.Combo.GetItem(item.TipoProp).text;
                                    }
                                    item.Propriedade = (item.Proprietario) ? 'Terceiro' : 'Próprio';
                                });
                                that_1.ListaCondutores = retorno.ModalRodo.ListaCondutor;
                                that_1.ListaCIOT = retorno.ModalRodo.ListaCIOT;
                                that_1.ListaContratantes = retorno.ModalRodo.ListaContratantes;
                                that_1.ListaPedagio = retorno.ModalRodo.ListaPedagio;
                            }
                            else if (that_1.EntityTela.Modalidade == 3 /* Aquaviario */) {
                                //this.MudouModalidade();
                                that_1.Aquaviario.IRIN = retorno.ModalAqua.irin;
                                that_1.Aquaviario.Codigo_Embarcacao = retorno.ModalAqua.cEmbar;
                                that_1.Aquaviario.Cod_Porto_Destino = retorno.ModalAqua.cPrtDest;
                                that_1.Aquaviario.Porto_Embarque = retorno.ModalAqua.cPrtEmb;
                                that_1.Aquaviario.Numero_Viagem = retorno.ModalAqua.nViag;
                                that_1.Aquaviario.Cod_Tipo_Embarcacao = retorno.ModalAqua.tpEmb;
                                that_1.Aquaviario.Nome_Embarcacao = retorno.ModalAqua.xEmbar;
                                that_1.Aquaviario.Porto_Transbordo = retorno.ModalAqua.prtTrans;
                                that_1.Aquaviario.Tipo_Navegacao = retorno.ModalAqua.tpNav;
                                that_1.ListaCarregamento = retorno.ModalAqua.ListaCarregamento;
                                that_1.ListaDesCarregamento = retorno.ModalAqua.ListaDescarregamento;
                                that_1.ListaComboio = retorno.ModalAqua.ListaComboio;
                                that_1.ListaCargaVazia = retorno.ModalAqua.ListaCargaVazia;
                            }
                        });
                    }
                    _this.RefreshAngular();
                }
                else {
                    _this.OnDepoisLimpar(_this.EntityTela);
                    //this.Limpar();
                }
                fecharEspera();
                //this.tab.SetActiveTabIndex(this.abadados)
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_MDFe.prototype.MudouModalidade = function () {
        if (this.EntityTela) {
            if (this.EntityTela.Modalidade && this.EntityTela.Modalidade == 1 /* Rodoviario */) {
                this.tab.AlterarVisibleAba('abaRodoviario', true);
                this.tab.AlterarVisibleAba('abaAquaviario', false);
                //this.tpMdfeRef.Enabled = false;
                this.agpMdfeRef.Enabled = false;
                this.btnAdicionaMDFe.SetEnabled(false);
            }
            else if (this.EntityTela.Modalidade && this.EntityTela.Modalidade == 3 /* Aquaviario */) {
                this.tab.AlterarVisibleAba('abaRodoviario', false);
                this.tab.AlterarVisibleAba('abaAquaviario', true);
                this.agpMdfeRef.Enabled = true;
                //this.tpMdfeRef.Enabled = true;
                this.btnAdicionaMDFe.SetEnabled(true);
            }
        }
    };
    C_MDFe.prototype.ProprietarioNaoEmitente = function () {
        var isEnabled = this.Proprietario.Proprietario;
        this.txtRNTRCProp.Enabled = isEnabled;
        this.cboTipoProp.Enabled = isEnabled;
        this.txtNomeProp.Enabled = isEnabled;
        this.cboUFProp.Enabled = isEnabled;
        this.lstTipo.Enabled = isEnabled;
        this.txtCPF.Enabled = isEnabled;
        this.txtIEProp.Enabled = !this.txtCPF.IsCPF;
    };
    C_MDFe.prototype.ReboqueProprietarioNaoEmitente = function () {
        if (this.mdEventosMDFe) {
            var isEnabled = this.Reboque.Proprietario;
            this.txtRNTRCReb.Enabled = isEnabled;
            this.cboTipoPropReb.Enabled = isEnabled;
            this.txtNomePropReb.Enabled = isEnabled;
            this.cboUFPropReb.Enabled = isEnabled;
            this.lstlTipoReb.Enabled = isEnabled;
            this.txtCpfReb.Enabled = isEnabled;
            this.txtIEReb.Enabled = isEnabled;
        }
    };
    C_MDFe.prototype.MudouUFCarregamento = function () {
        var _this = this;
        var parametros;
        abrirEspera();
        this.cboMunLocalCarregamento.ClearItems();
        parametros = {
            uf: this.Carregamento.UF + ""
        };
        //itens = this.ExecutarFuncaoServerSideSynch("GetCidadesByUF", parametros);
        this.ExecutarFuncaoServerSideAsynch("GetCidadesByUF", parametros, function (d) { return _this.carregouUF(d); }, function () { return fecharEspera(); }, this);
    };
    C_MDFe.prototype.MudouUFDescarregamento = function () {
        var _this = this;
        var parametros;
        abrirEspera();
        this.cboMunDesc.ClearItems();
        parametros = {
            uf: this.MunicipioDesc.UF + ""
        };
        //itens = this.ExecutarFuncaoServerSideSynch("GetCidadesByUF", parametros);
        this.ExecutarFuncaoServerSideAsynch("GetCidadesByUF", parametros, function (d) { return _this.carregouUFDesc(d); }, function () { return fecharEspera(); }, this);
    };
    C_MDFe.prototype.MudouUFDocumentos = function () {
        var _this = this;
        var parametros;
        abrirEspera();
        this.cboMunDoc.ClearItems();
        parametros = {
            uf: this.Documento.UF + ""
        };
        //itens = this.ExecutarFuncaoServerSideSynch("GetCidadesByUF", parametros);
        this.ExecutarFuncaoServerSideAsynch("GetCidadesByUF", parametros, function (d) { return _this.carregouUFDoc(d); }, function () { return fecharEspera(); }, this);
    };
    C_MDFe.prototype.MudouUFEncerramento = function () {
        var _this = this;
        var parametros;
        abrirEspera();
        this.cboMunEncerramento.ClearItems();
        parametros = {
            uf: this.Encerrar.UF + ""
        };
        //itens = this.ExecutarFuncaoServerSideSynch("GetCidadesByUF", parametros);
        this.ExecutarFuncaoServerSideAsynch("GetCidadesByUF", parametros, function (d) { return _this.carregouUFEncerramento(d); }, function () { return fecharEspera(); }, this);
    };
    C_MDFe.prototype.carregouUF = function (d) {
        var _this = this;
        var itens;
        var t;
        if (d) {
            t = JSON.parse(d);
            if (t) {
                itens = t.d;
            }
        }
        if (itens) {
            //var tamanho = itens.length;
            //for (var i = 0; i < tamanho; i++) {
            //    this.cboMunLocalCarregamento.AddItem(itens[i].Cidade, itens[i].Codigo, "");
            //}
            itens.forEach(function (x) {
                _this.cboMunLocalCarregamento.AddItem('' + x.Cidade, '' + x.Codigo, "");
            });
        }
        fecharEspera();
    };
    C_MDFe.prototype.carregouUFDesc = function (d) {
        var _this = this;
        var itens;
        var t;
        if (d) {
            t = JSON.parse(d);
            if (t) {
                itens = t.d;
            }
        }
        if (itens) {
            //var tamanho = itens.length;
            //for (var i = 0; i < tamanho; i++) {
            //    this.cboMunLocalCarregamento.AddItem(itens[i].Cidade, itens[i].Codigo, "");
            //}
            itens.forEach(function (x) {
                _this.cboMunDesc.AddItem('' + x.Cidade, '' + x.Codigo, "");
            });
        }
        fecharEspera();
    };
    C_MDFe.prototype.carregouUFDoc = function (d) {
        var _this = this;
        var itens;
        var t;
        if (d) {
            t = JSON.parse(d);
            if (t.d) {
                itens = t.d;
            }
            else {
                itens = t;
            }
        }
        if (itens) {
            //var tamanho = itens.length;
            //for (var i = 0; i < tamanho; i++) {
            //    this.cboMunLocalCarregamento.AddItem(itens[i].Cidade, itens[i].Codigo, "");
            //}
            itens.forEach(function (x) {
                _this.cboMunDoc.AddItem('' + x.Cidade, '' + x.Cidade, "");
            });
        }
        //if (this.Documento.Municipio && this.Documento.Municipio != ""){
        //    this.cboMunDoc.SetValue(this.Documento.Municipio);
        //}
        fecharEspera();
    };
    C_MDFe.prototype.carregouUFEncerramento = function (d) {
        var _this = this;
        var itens;
        var t;
        if (d) {
            t = JSON.parse(d);
            if (t) {
                itens = t.d;
            }
        }
        if (itens) {
            itens.forEach(function (x) {
                _this.cboMunEncerramento.AddItem('' + x.Cidade, '' + x.Codigo, "");
            });
        }
        fecharEspera();
    };
    C_MDFe.prototype.OnClickBotaoMenos = function () {
        if (!((this.EntityTela.Formulario - 1) <= 0)) {
            this.EntityTela.Formulario -= 1;
            this.RefreshAngular();
        }
    };
    C_MDFe.prototype.OnClickBotaoMais = function () {
        this.EntityTela.Formulario += 1;
        this.RefreshAngular();
    };
    C_MDFe.prototype.OnClickBotaoAdicionaReboque = function () {
        if (this.mdReboque && this.mdReboque.ModalDialog) {
            this.LimparMdReboque();
            this.mdReboque.ModalDialog.Show();
        }
    };
    C_MDFe.prototype.OnClickBotaoOkReboque = function () {
        this.grdReboque.AdicionarOuAlterarItemAtual();
    };
    C_MDFe.prototype.OnClickBotaoIncluirUnidadeCTe = function () {
        this.grdUnTranspCTe.AdicionarOuAlterarItemAtual();
    };
    C_MDFe.prototype.OnClickBotaoIncluirUnidadeNFe = function () {
        this.grdUnTranspNFe.AdicionarOuAlterarItemAtual();
    };
    C_MDFe.prototype.OnClickBotaoIncluirUnidadeMDFe = function () {
        this.grdUnTranspMDFe.AdicionarOuAlterarItemAtual();
    };
    C_MDFe.prototype.OnClickBotaoAdicionaPedagio = function () {
        if (this.mdPedagio && this.mdPedagio.ModalDialog) {
            this.LimparMdPedagio();
            this.mdPedagio.ModalDialog.Show();
        }
    };
    C_MDFe.prototype.OnClickBotaoGerenciarNFe = function () {
        var parametros = {
            codigo: this.EntityTela.Codigo
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("VerificarNota", parametros);
        if (retorno) {
            MostrarAlerta("Para acessar as opções de gerenciamento é necessário que a Nota esteja gravada!");
            return;
        }
        this.TransmitirNFe.Situacao_Atual = "";
        this.TransmitirNFe.Resultado = "";
        if (this.mdTransmitirNFe && this.mdTransmitirNFe.ModalDialog) {
            this.mdTransmitirNFe.ModalDialog.Show();
        }
    };
    C_MDFe.prototype.OnClickBotaoAdicionaCte = function () {
        if (this.mdCTe && this.mdCTe.ModalDialog) {
            this.LimparMdCTe();
            this.mdCTe.ModalDialog.Show();
            this.RefreshAngular();
        }
    };
    C_MDFe.prototype.OnClickBotaoAdicionaNFe = function () {
        if (this.mdNFe && this.mdNFe.ModalDialog) {
            this.LimparMdNFe();
            this.mdNFe.ModalDialog.Show();
            this.RefreshAngular();
        }
    };
    C_MDFe.prototype.OnClickBotaoAdicionaMDFe = function () {
        if (this.mdMdfe && this.mdMdfe.ModalDialog) {
            this.LimparMdMDFe();
            this.mdMdfe.ModalDialog.Show();
            this.RefreshAngular();
        }
    };
    C_MDFe.prototype.OnClickBotaoIncluirLacreNFe = function () {
        this.grdLacresTranspNFe.AdicionarOuAlterarItemAtual();
    };
    C_MDFe.prototype.OnClickBotaoIncluirLacreMDFe = function () {
        this.grdLacresTranspMDFe.AdicionarOuAlterarItemAtual();
    };
    C_MDFe.prototype.OnClickBotaoIncluirLacreCTe = function () {
        this.grdLacresTranspCte.AdicionarOuAlterarItemAtual();
    };
    C_MDFe.prototype.OnClickBotaoEventosMDFe = function () {
        if (this.EntityTela.Situacao.toUpperCase() !== "AUTORIZADA") {
            MostrarAlerta("A MDF-e precisa estar autorizada para realizar um evento!");
            return;
        }
        var parametros = {
            codigo: this.EntityTela.Codigo
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("VerificarNota", parametros);
        if (retorno) {
            MostrarAlerta("Para acessar as opções de gerenciamento é necessário que a Nota esteja gravada!");
            return;
        }
        if (this.mdEventosMDFe && this.mdEventosMDFe.ModalDialog) {
            this.mdEventosMDFe.ModalDialog.Show();
        }
    };
    C_MDFe.prototype.OnClickBotaoEncerrarMDFe = function () {
        //let parametros: any = {
        //    codigo: this.codNota
        //}
        //var retorno = this.ExecutarFuncaoServerSideSynch("VerificarNota", parametros);
        //if (retorno) {
        //    MostrarAlerta("Para acessar as opções de gerenciamento é necessário que a Nota esteja gravada!");
        //    return;
        //}
        if (this.EntityTela.Situacao.toUpperCase() != "AUTORIZADA") {
            MsgBoxJS("Não é possível realizar o encerramento quando a situação do MDF-e for diferente de 'AUTORIZADA'!", MsgBoxOptions.OkOnly, MsgBoxIcon.Info, $.proxy(null, this));
        }
        else {
            if (this.mdEncerrar && this.mdEncerrar.ModalDialog) {
                this.Encerrar.Data = this.DataServidor();
                this.Encerrar.Hora = this.DataServidor();
                this.RefreshAngular();
                this.mdEncerrar.Show();
            }
        }
    };
    C_MDFe.prototype.OnClickBotaoEncerrar = function () {
        try {
            var ex = [];
            if (!this.Encerrar.Data) {
                ex.push('Preencha corretamente o campo: Data do Evento <br/>');
            }
            if (!this.Encerrar.Hora) {
                ex.push('Preencha corretamente o campo: Hora do Evento <br/>');
            }
            if (!this.Encerrar.UF) {
                //this.Encerrar.UF = '';
                ex.push('Preencha corretamente o campo: UF <br/>');
            }
            if (!this.Encerrar.Municipio) {
                //this.Encerrar.Municipio = '';
                ex.push('Preencha corretamente o campo: Município <br/>');
            }
            if (ex.length > 0) {
                MostrarAlerta(ex.join(''));
                return false;
            }
            this.Encerrar.Data.setHours(this.Encerrar.Hora.getHours());
            this.Encerrar.Data.setMinutes(this.Encerrar.Hora.getMinutes());
            var parametros = {
                codNota: this.EntityTela.Codigo,
                serie: this.EntityTela.Serie,
                dataEvento: this.Encerrar.Data,
                UF: this.Encerrar.UF,
                municipio: this.Encerrar.Municipio,
                codEmpresa: this.EntityTela.Empresa
            };
            var retorno = this.ExecutarFuncaoServerSideSynch('EncerrarMDFe', parametros);
            if (retorno) {
                this.TransmitirNFe.Resultado = retorno.Resultado;
                if (retorno.Retorno) {
                    this.Evento.Situacao = retorno.Situacao;
                    this.Evento.Retorno = retorno.Retorno;
                    MostrarAlerta('' + retorno.Retorno);
                }
                this.RefreshAngular();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_MDFe.prototype.OnClickBotaoConfirmarEvento = function () {
        try {
            var ex = [];
            if (String.IsNullOrWhiteSpace(this.cboTipoEvento.GetValue())) { //(!this.Evento.Tipo) {
                //MostrarAlerta('Selecione o tipo de evento');
                //return;
                ex.push('Preencha corretamente o campo: Tipo de Evento <br/>');
            }
            if (!this.Evento.Justificativa || String.IsNullOrWhiteSpace(this.Evento.Justificativa)) {
                ex.push('Preencha corretamente o campo: Justificativa <br/>');
            }
            else {
                if (this.Evento.Justificativa.length < 15) {
                    ex.push('A justificativa deve conter no mínimo 15 caracteres! <br/>');
                }
            }
            if (ex.length > 0) {
                MostrarAlerta(ex.join(''));
                return false;
            }
            if (!this.Evento.Justificativa) {
                this.Evento.Justificativa = "";
                //MostrarAlerta('Selecione o tipo de evento');
                //return;
            }
            var parametros = {
                codigoNf: this.EntityTela.Codigo,
                xJust: this.Evento.Justificativa,
                Evento: this.cboTipoEvento.GetValue(),
                codEmpresa: this.EntityTela.Empresa,
                codSerie: this.EntityTela.Serie
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("EnviarEventoNFe", parametros);
            var arrRetorno = retorno.split("|");
            //MsgBoxJS(arrRetorno[1], MsgBoxOptions.OkOnly, MsgBoxIcon.Info, $.proxy(this.carregarEventosNFe, this))
            MsgBoxJS(arrRetorno[1], MsgBoxOptions.OkOnly, MsgBoxIcon.Info);
            if (arrRetorno[0].toString().toLowerCase() == "sucesso") {
                this.EntityTela.Situacao = "Cancelada";
                this.TransmitirNFe.Situacao_Atual = "Cancelada";
                this.Evento.Situacao = "Cancelada";
            }
            this.Evento.Retorno = arrRetorno[1];
            this.Evento.Justificativa = "";
            this.RefreshAngular();
            return false;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    //protected carregarEventosNFe(e: MsgBoxResultEventArgs) {
    //    this.cbpEventoNFe.CallBackPanel.PerformCallback("AtualizarEventosMDFe");
    //}
    C_MDFe.prototype.OnClickBotaoTransmitirMDFe = function () {
        try {
            if (this.EntityTela.Situacao.toUpperCase() === "TRANSMITIDA" || this.EntityTela.Situacao.toUpperCase() === "AUTORIZADA") {
                MostrarAlerta("A MDF-e j\u00E1 foi " + this.EntityTela.Situacao.toLowerCase() + "!");
                return;
            }
            var parametros = {
                codNota: this.EntityTela.Codigo,
                codEmpresa: this.EntityTela.Empresa,
                serie: this.EntityTela.Serie
            };
            var retorno = this.ExecutarFuncaoServerSideSynch('TransmitirMDFe', parametros);
            this.TransmitirNFe.Situacao_Atual = retorno.SituacaoAtual;
            this.TransmitirNFe.Resultado = retorno.Resultado;
            this.EntityTela.Situacao = retorno.Situacao;
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_MDFe.prototype.OnClickBotaoConsultarMDFe = function () {
        try {
            var parametros = {
                codNota: this.EntityTela.Codigo,
                codEmpresa: this.EntityTela.Empresa,
                serie: this.EntityTela.Serie,
                situacao: this.EntityTela.Situacao
            };
            var retorno = this.ExecutarFuncaoServerSideSynch('ConsultarMDFe', parametros);
            this.TransmitirNFe.Situacao_Atual = retorno.SituacaoAtual;
            this.TransmitirNFe.Resultado = retorno.Resultado;
            this.EntityTela.Situacao = retorno.Situacao;
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_MDFe.prototype.OnClickBotaoImprimirMDFe = function () {
        try {
            if (this.EntityTela.Formulario <= 0) {
                MostrarAlerta('Informe um MDF-e para ser impresso!');
                return;
            }
            var parametros = {
                codigo: this.EntityTela.Codigo
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificarNota", parametros);
            if (retorno) {
                MostrarAlerta("Para acessar as opções de gerenciamento é necessário que a Nota esteja gravada!");
                return;
            }
            parametros = {
                codNota: this.EntityTela.Codigo,
                codEmpresa: this.EntityTela.Empresa,
                emitenteCidade: this.Emitente.Cidade,
                tela: ValoresSismoura.NomeTela
            };
            var retorno = this.ExecutarFuncaoServerSideSynch('ImprimirMDFe', parametros);
            if (retorno) {
                AbrirReport('~/Report/Fixos/', 'Fiscal_MDFe.REPX');
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_MDFe.prototype.OnClickBotaoOkPedagio = function () {
        this.grdPedagio.AdicionarOuAlterarItemAtual();
    };
    C_MDFe.prototype.OnClickBotaoOkCte = function () {
        this.grdCte.AdicionarOuAlterarItemAtual();
        this.LimparMdCTe();
        this.EntityTela.Qtde_CTe_Ref = this.ListaCte.length;
        this.RefreshAngular();
    };
    C_MDFe.prototype.OnClickBotaoOkNFe = function () {
        this.grdNFe.AdicionarOuAlterarItemAtual();
        this.LimparMdNFe();
        this.EntityTela.Qtde_NFe_Ref = this.ListaNFe.length;
        this.RefreshAngular();
    };
    C_MDFe.prototype.OnClickBotaoOkMDFe = function () {
        this.grdMdfeRef.AdicionarOuAlterarItemAtual();
        this.LimparMdMDFe();
        //this.EntityTela.Qtde_NFe_Ref = this.ListaNFe.length;
        this.RefreshAngular();
    };
    C_MDFe.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        if (this.Documento.UF) {
            var parametros = {
                uf: this.Documento.UF
            };
            this.carregouUFDoc(JSON.stringify(this.ExecutarFuncaoServerSideSynch('GetCidadesByUF', parametros)));
            //this.ExecutarFuncaoServerSideAsynch("GetCidadesByUF", parametros, (d) => this.carregouUFDoc(d), () => fecharEspera(), this);
            this.cboMunDoc.SetValue(this.Documento.Municipio);
            this.cboTipoEmitente.SetValue(this.Mdfe.Tipo_Emitente);
            this.RefreshAngular();
        }
    };
    C_MDFe.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var ex = [];
        var entidade = this.GetScope().Entity;
        //if (!this.codNota){
        //    if ((entidade.Situacao == 'CADASTRADA')){
        //        entidade.Situacao ='CADASTRADA'
        //    }
        //}
        if (!this.IsSerieValida()) {
            return false;
        }
        if (!this.EntityTela.Codigo) {
            //If(Not retorno.Situacao = "ENCERRADA" And Not retorno.Situacao = "CANCELADA" And Not retorno.Situacao = "AUTORIZADA") OrElse retorno.Situacao = "REJEITADA" Then
            if (!(entidade.Situacao === 'ENCERRADA' || entidade.Situacao === 'CANCELADA' || entidade.Situacao === 'AUTORIZADA')) {
                if (entidade.Situacao === 'REJEITADA' || entidade.Situacao === '') {
                    entidade.Situacao = 'CADASTRADA';
                }
            }
        }
        else {
            if (entidade.Situacao === "TRANSMITIDA") {
                entidade.Situacao = 'CADASTRADA';
            }
        }
        if (this.ListaLocalCarregamento.length <= 0) {
            ex.push('Preencha corretamente o campo: Municípo de Carregamento <br/>');
        }
        if (this.ListaMunDescarregamento.length <= 0) {
            ex.push('Preencha corretamente o campo: Municípo de Descarregamento <br/>');
        }
        else {
            if (this.ListaCte.length <= 0 && this.ListaNFe.length <= 0 && !this.EntityTela.Carrega_Posterior) {
                ex.push('Nenhum grupo de documentos foi informado (CT-e, NF-e ou MDF-e) <br/>');
            }
        }
        if (entidade.Modalidade == 1 /* Rodoviario */) {
            if (this.ListaCondutores.length <= 0) {
                ex.push('Preencha corretamente o campo: Condutor do veículo <br/>');
            }
            if (this.Mdfe.Tipo_Emitente == 1) {
                if (this.ListaSeguro.length <= 0) {
                    ex.push('Para Tipo Emitente "Prestador de Serviço de Transporte" o Seguro de Carga é obrigatório no Modal Rodoviário. <br/>');
                }
                if (this.ListaContratantes.length <= 0 && this.ListaCIOT.length <= 0 && this.ListaPedagio.length <= 0) {
                    ex.push('Para Tipo Emitente "Prestador de Serviço de Transporte" deve existir um dos seguintes itens: CPF ou CNPJ do Contratante, Responsável pela geração do CIOT ou Responsável pelo pagamento do Vale Pedágio (aba Rodoviário). <br/>');
                }
            }
        }
        if (ex.length > 0) {
            MostrarAlerta(ex.join(''), 0);
            return false;
        }
        //entidade.Codigo = this.codNota;
        entidade.Data_Emissao = new Date(entidade.Data_Emissao.ToDate().setHours(this.Mdfe.Hora_Emissao.getHours(), this.Mdfe.Hora_Emissao.getMinutes()));
        if (entidade.Data_Inicio_Viagem && this.Mdfe.Hora_Inicio_Viagem) {
            entidade.Data_Inicio_Viagem = new Date(entidade.Data_Inicio_Viagem.ToDate().setHours(this.Mdfe.Hora_Inicio_Viagem.getHours(), this.Mdfe.Hora_Inicio_Viagem.getMinutes()));
        }
        this.PreencherXMLNota(entidade);
        return true;
    };
    C_MDFe.prototype.PreencherXMLNota = function (entidade) {
        var xml = {};
        ;
        var objMdf = {};
        var modalRodo = {};
        var modalAqua = {};
        var caminhoXMl = '';
        entidade.FiscalMdfeXML = [];
        objMdf.Empresa = entidade.Empresa;
        objMdf.ListaAutDownload = this.ListaAutDownload;
        objMdf.ListaCTe = this.ListaCte;
        objMdf.ListaLacre = this.ListaLacre;
        objMdf.ListaMDFe = this.ListaMdfe;
        objMdf.ListaNFe = this.ListaNFe;
        objMdf.MunDescDocs = this.Documento.Municipio;
        objMdf.UFDescDocs = this.Documento.UF;
        objMdf.Serie = entidade.Serie;
        objMdf.tipoEmitente = this.Mdfe.Tipo_Emitente;
        objMdf.Carrega_Posterior = this.Mdfe.Carrega_Posterior;
        objMdf.tipoTrasportador = this.Mdfe.Tipo_Transportador;
        objMdf.UFCarregamento = this.ListaLocalCarregamento;
        objMdf.UFDescarregamento = this.ListaMunDescarregamento;
        objMdf.UFPercuso = this.ListaUFPercurso;
        objMdf.UFFim = this.Mdfe.UF_Descarregamento;
        objMdf.UFIni = this.Mdfe.UF;
        objMdf.DadosAdicionaisFisco = this.Informacoes.Adicionais;
        objMdf.DadosAdicionaisContribuinte = this.Informacoes.Complementares;
        objMdf.ListaSeguro = this.ListaSeguro;
        if (entidade.Modalidade == 1 /* Rodoviario */) {
            modalRodo.capKG = this.Veiculo.Capacidade_KG;
            modalRodo.capM3 = this.Veiculo.Capacidade_M3;
            modalRodo.codAgPorto = this.Veiculo.Codigo_Agendamento; //Format(txtCAgenda.Text, "0000000000000000")
            modalRodo.CodigoInterno = this.Veiculo.Codigo_Interno;
            modalRodo.prop = this.Proprietario.Proprietario;
            modalRodo.RENAVAM = this.Veiculo.Renavam;
            modalRodo.placa = this.Veiculo.Placa;
            modalRodo.RNTRC = this.Veiculo.RNTRC; //Format(txtRNTRC.Text, "00000000")
            modalRodo.tara = this.Veiculo.Tara;
            modalRodo.UF = this.Veiculo.UF;
            modalRodo.tpCar = this.Veiculo.Carroceria;
            modalRodo.tpRod = this.Veiculo.Tipo_Rodado;
            if (modalRodo.prop) {
                modalRodo.CPFCNPJ = this.Proprietario.CPF;
                modalRodo.RNTRCProp = this.Proprietario.RNTRC;
                modalRodo.xNome = this.Proprietario.Nome;
                modalRodo.IE = this.Proprietario.IE;
                modalRodo.UFProp = this.Proprietario.UF;
                if (!String.IsNullOrWhiteSpace(this.Proprietario.Tipo_Proprietario)) {
                    modalRodo.tpProp = this.Proprietario.Tipo_Proprietario;
                }
            }
            modalRodo.ListaCondutor = this.ListaCondutores;
            modalRodo.ListaPedagio = this.ListaPedagio;
            modalRodo.ListaReboque = this.ListaReboque;
            modalRodo.ListaCIOT = this.ListaCIOT;
            modalRodo.ListaContratantes = this.ListaContratantes;
        }
        else if (entidade.Modalidade == 3 /* Aquaviario */) {
            modalAqua.cEmbar = this.Aquaviario.Codigo_Embarcacao;
            modalAqua.irin = this.Aquaviario.IRIN;
            modalAqua.cPrtDest = this.Aquaviario.Cod_Porto_Destino;
            modalAqua.cPrtEmb = this.Aquaviario.Porto_Embarque;
            modalAqua.nViag = this.Aquaviario.Numero_Viagem;
            modalAqua.tpEmb = this.Aquaviario.Cod_Tipo_Embarcacao;
            modalAqua.xEmbar = this.Aquaviario.Nome_Embarcacao;
            modalAqua.prtTrans = this.Aquaviario.Porto_Transbordo;
            if (!String.IsNullOrWhiteSpace(this.Aquaviario.Tipo_Navegacao)) {
                modalAqua.tpNav = this.Aquaviario.Tipo_Navegacao;
            }
            modalAqua.ListaCargaVazia = this.ListaCargaVazia;
            modalAqua.ListaCarregamento = this.ListaCarregamento;
            modalAqua.ListaComboio = this.ListaComboio;
            modalAqua.ListaDescarregamento = this.ListaDesCarregamento;
        }
        xml = {};
        xml.Evento = 'CADASTRO';
        var parametros = {
            codEmpresa: entidade.Empresa
        };
        var retornoEmpresa = this.ExecutarFuncaoServerSideSynch('ObterEmpresa', parametros);
        var empresa = JSON.parse(retornoEmpresa);
        empresa.Data_Cadastro_Ecf = empresa.Data_Cadastro_Ecf;
        empresa.Data_Carga = empresa.Data_Carga;
        entidade.Data_Emissao = entidade.Data_Emissao.ToDate();
        empresa.Data_Fechamento_Atual = empresa.Data_Fechamento_Atual;
        parametros = {
            entidade: entidade,
            objEmpresa: empresa,
            objMdf: objMdf,
            modalRodo: modalRodo,
            modalAqua: modalAqua,
            caminhoXMl: caminhoXMl
        };
        var retorno = this.ExecutarFuncaoServerSideSynch('GerarXML', parametros);
        xml.XML = retorno.XML;
        entidade.Chave_Acesso = retorno.Chave_Acesso;
        entidade.FiscalMdfeXML.push(xml);
    };
    C_MDFe.prototype.Limpar = function () {
        _super.prototype.Limpar.call(this);
        this.RefreshAngular();
    };
    C_MDFe.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Codigo = 0;
        this.hdnCodigo.value = '' + Entity.Codigo;
        this.LimparItensGrades();
        this.LimparListas();
        if (!Entity.Empresa) {
            Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        }
        if (this.cboSerie && !Entity.Serie) {
            this.cboSerie.SetSelectedIndex(0);
            Entity.Serie = this.cboSerie.GetValue();
        }
        this.PreencherNumeroNota(Entity);
        Entity.Data_Emissao = this.DataServidor();
        this.Mdfe.Hora_Emissao = this.DataServidor();
        this.Mdfe.Tipo_Emitente = 2;
        this.Mdfe.Carrega_Posterior = false;
        Entity.Modalidade = 1;
        this.PreencherEmitente(Entity);
        this.Veiculo.Carroceria = 0; // -1 // null
        this.Carregamento.UF = null;
        //this.Mdfe.UF = null;
        //this.Mdfe.Tipo_Emitente = null;
        //this.Mdfe.Tipo_Transportador = null;
        Entity.Data_Inicio_Viagem = null;
        Entity.Situacao = "";
        Entity.Qtde_CTe_Ref = 0;
        Entity.Qtde_NFe_Ref = 0;
        Entity.UN_Medida = '0';
        this.Proprietario.Proprietario = false;
        this.Proprietario = {};
        this.Documento = {};
        Entity.Peso_Carga = 0;
        this.Encerrar.Data = this.DataServidor();
        this.Proprietario.Tipo = 'F';
        this.Contratante.Tipo = 'F';
        this.Autorizado.Tipo = 'F';
        this.LimparCiot();
        this.LimparContratante();
        this.LimparMdPedagio();
        this.LimparMdReboque();
        this.LimparMdCTe();
        this.RefreshAngular();
        this.ProprietarioNaoEmitente();
        this.ReboqueProprietarioNaoEmitente();
        this.MudouModalidade();
        this.TransmitirNFe.Situacao_Atual = "";
        this.TransmitirNFe.Resultado = "";
    };
    C_MDFe.prototype.LimparItensGrades = function () {
        this.Veiculo = {};
        this.Carregamento = {};
        this.Percurso = {};
        this.Condutor = {};
        this.Reboque = {};
        this.CIOT = {};
        this.Contratante = {};
        this.Pedagio = {};
        this.Carregamento_Arquivario = {};
        this.Descarregamento_Arquivario = {};
        this.Comboio = {};
        this.Unidade = {};
        this.MunicipioDesc = {};
        this.CTE = {};
        this.Nfe = {};
        this.Referenciado = {};
        this.Lacre = {};
        this.Autorizado = {};
        this.Lacre_Transporte = {};
        this.Unidade_Transporte = {};
        this.Lacre_Nfe = {};
        this.Unidade_Nfe = {};
        this.Lacre_Mdfe = {};
        this.Unidade_Mdfe = {};
        this.Mdfe = {};
        this.MunicipioDesc = {};
        this.Informacoes = {};
    };
    C_MDFe.prototype.LimparListas = function () {
        this.ListaLocalCarregamento = [];
        this.ListaUFPercurso = [];
        this.ListaCondutores = [];
        this.ListaReboque = [];
        this.ListaCIOT = [];
        this.ListaContratantes = [];
        this.ListaPedagio = [];
        this.ListaCarregamento = [];
        this.ListaDesCarregamento = [];
        this.ListaComboio = [];
        this.ListaCargaVazia = [];
        this.ListaMunDescarregamento = [];
        this.ListaCte = [];
        this.ListaNFe = [];
        this.ListaMdfe = [];
        this.ListaLacre = [];
        this.ListaAutDownload = [];
        this.ListaLacreUnidTranspCte = [];
        this.ListaUnidadeTransporteCTe = [];
        this.ListaLacreUnidTranspNFe = [];
        this.ListaUnidadeTransporteNFe = [];
        this.ListaLacreUnidTranspMDFe = [];
        this.ListaUnidadeTransporteMDFe = [];
        this.ListaSeguro = [];
    };
    C_MDFe.prototype.LimparCiot = function () {
        this.CIOT.Tipo = "F";
        this.CIOT.CIOT = "";
        this.CIOT.CpfCnpj = "";
    };
    C_MDFe.prototype.LimparContratante = function () {
        this.Contratante.Tipo = "F";
        this.Contratante.CpfCnpj = "";
    };
    C_MDFe.prototype.LimparAutorizados = function () {
        this.Autorizado.Tipo = 'F';
        this.Autorizado.CPF = '';
    };
    C_MDFe.prototype.LimparMdReboque = function () {
        this.Reboque = undefined;
        this.Reboque.Tipo = 'F';
        this.Reboque.TipoCarroceria = 0;
        this.RefreshAngular();
    };
    C_MDFe.prototype.LimparMdPedagio = function () {
        this.Pedagio.CNPJfornecedor = '';
        this.Pedagio.NComprovante = '';
        this.Pedagio.Tipo = "F";
        this.Pedagio.CpfCnpjPagamento = '';
        this.Pedagio.Valor = '';
        this.RefreshAngular();
    };
    C_MDFe.prototype.LimparMdCTe = function () {
        this.CTE.chCTe = '';
        this.CTE.Cod_Barras = '';
        this.CTE.Reentrega = false;
        this.Unidade_Transporte.tpUnidTransp = -1;
        this.Unidade_Transporte.idUnidTransp = '';
        this.Unidade_Transporte.qtdRat = 0;
        this.Lacre_Transporte.Lacre = 0;
        this.ListaLacreUnidTranspCte = [];
        this.ListaUnidadeTransporteCTe = [];
        this.RefreshAngular();
    };
    C_MDFe.prototype.LimparMdNFe = function () {
        this.Nfe.chNFe = '';
        this.Unidade_Nfe.tpUnidTransp = -1;
        this.Unidade_Nfe.idUnidTransp = '';
        this.Unidade_Nfe.qtdRat = 0;
        this.Lacre_Nfe.Lacre = 0;
        this.ListaLacreUnidTranspNFe = [];
        this.ListaUnidadeTransporteNFe = [];
        this.RefreshAngular();
    };
    C_MDFe.prototype.LimparMdMDFe = function () {
        this.Referenciado.chMDFe = '';
        this.Unidade_Mdfe.tpUnidTransp = -1;
        this.Unidade_Mdfe.idUnidTransp = '';
        this.Unidade_Mdfe.qtdRat = 0;
        this.Lacre_Mdfe.Lacre = 0;
        this.ListaLacreUnidTranspMDFe = [];
        this.ListaUnidadeTransporteMDFe = [];
        this.RefreshAngular();
    };
    C_MDFe.prototype.validandoAutorizados = function (s, e) {
        if (!e.item.CPF) {
            if (this.Autorizado.Tipo == 'F') {
                MostrarAlerta('Informe o CPF corretamente');
            }
            else {
                MostrarAlerta('Informe o CNPJ corretamente');
            }
            e.cancelar = true;
            return;
        }
        var parametros = {
            cpf: e.item.CPF
        };
        if (!this.ExecutarFuncaoServerSideSynch('validarCpf', parametros)) {
            if (this.Autorizado.Tipo == 'F') {
                MostrarAlerta('O CPF informado é invalido!');
            }
            else {
                MostrarAlerta('O CNPJ informado é invalido!');
            }
            e.cancelar = true;
            return;
        }
        if (e.index < 0) {
            e.item.Item = this.ListaAutDownload.Max("Item") + 1;
        }
    };
    C_MDFe.prototype.ValidandoContratante = function (s, e) {
        if (!e.item.CpfCnpj) {
            if (this.Contratante.Tipo == 'F') {
                MostrarAlerta('Preencha corretamente o campo: CPF');
            }
            else {
                MostrarAlerta('Preencha corretamente o campo: CNPJ');
            }
            e.cancelar = true;
            return;
        }
        var parametros = {
            cpf: e.item.CpfCnpj
        };
        if (!this.ExecutarFuncaoServerSideSynch('validarCpf', parametros)) {
            if (this.Contratante.Tipo == 'F') {
                MostrarAlerta('O CPF do contratante informado é invalido!');
            }
            else {
                MostrarAlerta('O CNPJ do contratante informado é invalido!');
            }
            e.cancelar = true;
            return;
        }
        if (e.index < 0) {
            e.item.ItemContratante = this.ListaContratantes.Max("ItemContratante") + 1;
        }
    };
    C_MDFe.prototype.ValidandoUFCarregamento = function (s, e) {
        var ex = [];
        if (!e.item.UF) {
            ex.push('Preencha corretamente o campo: UF <br/>');
        }
        if (!e.item.Municipio) {
            ex.push('Preencha corretamente o campo: Município <br/>');
        }
        if (ex.length > 0) {
            MostrarAlerta(ex.join(''));
            e.cancelar = true;
            return;
        }
        if (e.index < 0) {
            e.item.Item = this.ListaLocalCarregamento.Max("Item") + 1;
        }
        if (this.cboMunLocalCarregamento) {
            e.item.Municipio = this.cboMunLocalCarregamento.GetText();
        }
    };
    C_MDFe.prototype.ValidandoUFPercurso = function (s, e) {
        if (!e.item.UF) {
            MostrarAlerta('Preencha corretamente o campo: UF');
            e.cancelar = true;
            return;
        }
        if (e.index < 0) {
            e.item.Item = this.ListaUFPercurso.Max("Item") + 1;
        }
    };
    C_MDFe.prototype.ValidandoCIOT = function (s, e) {
        var ex = [];
        if (!e.item.CIOT) {
            ex.push('Preencha corretamente o campo: CIOT <br/>');
        }
        if (!e.item.CpfCnpj) {
            if (this.CIOT.Tipo == 'F') {
                ex.push('Preencha corretamente o campo: CPF <br/>');
            }
            else {
                ex.push('Preencha corretamente o campo: CNPJ <br/>');
            }
        }
        if (ex.length > 0) {
            MostrarAlerta(ex.join(''));
            e.cancelar = true;
            return;
        }
        var parametros = {
            cpf: e.item.CpfCnpj
        };
        if (!this.ExecutarFuncaoServerSideSynch('validarCpf', parametros)) {
            if (this.CIOT.Tipo == 'F') {
                MostrarAlerta('O CPF do CIOT informado é invalido!');
            }
            else {
                MostrarAlerta('O CNPJ do CIOT informado é invalido!');
            }
            e.cancelar = true;
            return;
        }
        if (e.index < 0) {
            e.item.ItemCIOT = this.ListaCIOT.Max("ItemCIOT") + 1;
        }
    };
    C_MDFe.prototype.ValidandoCondutor = function (s, e) {
        var ex = [];
        if (!e.item.Nome) {
            ex.push('Preencha corretamente o campo: Nome do Condutor <br/>');
        }
        if (!e.item.CPF) {
            ex.push('Preencha corretamente o campo: CPF <br/>');
        }
        if (ex.length > 0) {
            MostrarAlerta(ex.join(''));
            e.cancelar = true;
            return;
        }
        var parametros = {
            cpf: e.item.CPF
        };
        if (!this.ExecutarFuncaoServerSideSynch('validarCpf', parametros)) {
            MostrarAlerta('O CPF do condutor informado é invalido!');
            e.cancelar = true;
            return;
        }
        if (e.index < 0) {
            e.item.Item = this.ListaCondutores.Max("Item") + 1;
        }
    };
    C_MDFe.prototype.ValidandoReboque = function (s, e) {
        var ex = [];
        if (!e.item.CapKG) {
            ex.push('Preencha corretamente o campo: Capacidade (Kg) <br/>');
        }
        if (!e.item.Placa) {
            ex.push('Preencha corretamente o campo: Placa <br/>');
        }
        if (!e.item.Tara) {
            ex.push('Preencha corretamente o campo: Tara <br/>');
        }
        if (e.item.TipoCarroceria == undefined) {
            ex.push('Preencha corretamente o campo: Tipo de Carroceria <br/>');
        }
        if (!e.item.UFVeiculo) {
            ex.push('Preencha corretamente o campo: UF licenciamento do Veículo <br/>');
        }
        if (e.item.Proprietario) {
            if (!e.item.TipoProp) {
                ex.push('Preencha corretamente o campo: Tipo de Proprietário <br/>');
            }
            if (!e.item.CpfCnpj) {
                ex.push('Preencha corretamente o campo: CPF\CNPJ <br/>');
            }
            if (!e.item.Nome) {
                ex.push('Preencha corretamente o campo: Nome <br/>');
            }
            if (!e.item.IE) {
                ex.push('Preencha corretamente o campo: Inscrição Estadual <br/>');
            }
            if (!e.item.RNTRC) {
                ex.push('Preencha corretamente o campo: RNTRC <br/>');
            }
            if (!e.item.UF) {
                ex.push('Preencha corretamente o campo: UF <br/>');
            }
        }
        if (ex.length > 0) {
            MostrarAlerta(ex.join(''));
            e.cancelar = true;
            return;
        }
        if (e.item.Proprietario) {
            e.item.Propriedade = "Terceiro";
        }
        else {
            e.item.Propriedade = "Próprio";
        }
        e.item.Tipo_Proprietario_Text = this.cboTipoPropReb.GetText();
        e.item.Tipo_Carroceria_Text = this.cboTipoCReb.GetText();
        if (e.index < 0) {
            e.item.Item = this.ListaReboque.Max("Item") + 1;
        }
    };
    C_MDFe.prototype.ValidandoMunicipioDescarregamento = function (s, e) {
        var ex = [];
        if (!e.item.UF) {
            ex.push('Preencha corretamente o campo: UF <br/>');
        }
        if (!e.item.Municipio) {
            ex.push('Preencha corretamente o campo: Municipio <br/>');
        }
        if (ex.length > 0) {
            MostrarAlerta(ex.join(''));
            e.cancelar = true;
            return;
        }
        if (e.index < 0) {
            e.item.Item = this.ListaMunDescarregamento.Max("Item") + 1;
        }
        e.item.Municipio = this.cboMunDesc.GetText();
    };
    C_MDFe.prototype.ValidandoCTe = function (s, e) {
        var parametros;
        var ex = [];
        if (!e.item.chCTe) {
            ex.push('Informe a Chave de Acesso do CT-e <br/>');
        }
        else {
            if (e.item.chCTe.length < 44) {
                ex.push('A Chave de Acesso do CT-e deve possuir 44 caracteres <br/>');
            }
        }
        if (ex.length > 0) {
            MostrarAlerta(ex.join(''));
            e.cancelar = true;
            return;
        }
        if (this.ListaUnidadeTransporteCTe.length > 0) {
            e.item.infUnidTransp = this.ListaUnidadeTransporteCTe;
            e.item.quantTransporte = this.ListaUnidadeTransporteCTe.length;
        }
        else {
            e.item.quantTransporte = 0;
        }
        if (e.index < 0) {
            e.item.Item = this.ListaCte.Max("Item") + 1;
        }
    };
    C_MDFe.prototype.ValidandoNFe = function (s, e) {
        var parametros;
        var ex = [];
        if (!e.item.chNFe) {
            ex.push('Informe a Chave de Acesso da NF-e <br/>');
        }
        else {
            if (e.item.chNFe.length < 44) {
                ex.push('A Chave de Acesso da NF-e deve possuir 44 caracteres <br/>');
            }
        }
        if (ex.length > 0) {
            MostrarAlerta(ex.join(''));
            e.cancelar = true;
            return;
        }
        if (this.ListaUnidadeTransporteNFe.length > 0) {
            e.item.infUnidTransp = this.ListaUnidadeTransporteNFe;
            e.item.quantTransporte = this.ListaUnidadeTransporteNFe.length;
        }
        else {
            e.item.quantTransporte = 0;
        }
        if (e.index < 0) {
            e.item.Item = this.ListaNFe.Max("Item") + 1;
        }
    };
    C_MDFe.prototype.ValidandoMDFe = function (s, e) {
        var parametros;
        var ex = [];
        if (!e.item.chMDFe) {
            ex.push('Informe a Chave de Acesso do MDF-e Referenciado <br/>');
        }
        else {
            if (e.item.chMDFe.length < 44) {
                ex.push('A Chave de Acesso do MDF-e Referenciado deve possuir 44 caracteres <br/>');
            }
        }
        if (ex.length > 0) {
            MostrarAlerta(ex.join(''));
            e.cancelar = true;
            return;
        }
        if (this.ListaUnidadeTransporteMDFe.length > 0) {
            e.item.infUnidTransp = this.ListaUnidadeTransporteMDFe;
            e.item.quantTransporte = this.ListaUnidadeTransporteMDFe.length;
        }
        else {
            e.item.quantTransporte = 0;
        }
        if (e.index < 0) {
            e.item.Item = this.ListaMdfe.Max("Item") + 1;
        }
    };
    C_MDFe.prototype.ValidandoUnTranspCTe = function (s, e) {
        var parametros;
        var ex = [];
        if (!e.item.tpUnidTransp || e.item.tpUnidTransp == -1) {
            ex.push('Informe Tipo de Unidade de Transporte <br/>');
        }
        if (!e.item.idUnidTransp) {
            ex.push('Informe a Identificação do Tipo de Unidade <br/>');
        }
        if (!e.item.qtdRat) {
            ex.push('Informe a Quantidade Rateada <br/>');
        }
        if (ex.length > 0) {
            MostrarAlerta(ex.join(''));
            e.cancelar = true;
            return;
        }
        e.item.Tipo_Transporte_Text = this.cboTipoUnTransp.GetText();
        if (this.ListaLacreUnidTranspCte.length > 0) {
            e.item.lacUnidTransp = this.ListaLacreUnidTranspCte;
            e.item.qtLacres = this.ListaLacreUnidTranspCte.length;
        }
        else {
            e.item.qtLacres = 0;
        }
        this.ListaLacreUnidTranspCte = [];
        if (e.index < 0) {
            e.item.Item = this.ListaUnidadeTransporteCTe.Max("Item") + 1;
        }
    };
    C_MDFe.prototype.ValidandoCarregamento = function (s, e) {
        var parametros;
        var ex = [];
        //CodigoCarregamento
        if (!e.item.CodigoCarregamento) {
            ex.push('Preencha corretamente o campo: Código do Terminal de Carregamento <br/>');
        }
        if (!e.item.NomeCarregamento) {
            ex.push('Preencha corretamente o campo: Nome do Terminal de Carregamento <br/>');
        }
        if (ex.length > 0) {
            MostrarAlerta(ex.join(''));
            e.cancelar = true;
            return;
        }
        if (e.index < 0) {
            e.item.Item = this.ListaCarregamento.Max("Item") + 1;
        }
    };
    C_MDFe.prototype.ValidandoDescarregamento = function (s, e) {
        var parametros;
        var ex = [];
        if (!e.item.CodigoDescarregamento) {
            ex.push('Preencha corretamente o campo: Código do Terminal de Descarregamento <br/>');
        }
        if (!e.item.NomeDescarregamento) {
            ex.push('Preencha corretamente o campo: Nome do Terminal de Descarregamento <br/>');
        }
        if (ex.length > 0) {
            MostrarAlerta(ex.join(''));
            e.cancelar = true;
            return;
        }
        if (e.index < 0) {
            e.item.Item = this.ListaDesCarregamento.Max("Item") + 1;
        }
    };
    C_MDFe.prototype.ValidandoComboio = function (s, e) {
        var parametros;
        var ex = [];
        if (!e.item.Comboio) {
            ex.push('Informe o Código da Embarcação do Comboio <br/>');
        }
        if (!e.item.Balsa) {
            ex.push('Informe a Identificação da Balsa <br/>');
        }
        if (ex.length > 0) {
            MostrarAlerta(ex.join(''));
            e.cancelar = true;
            return;
        }
        if (e.index < 0) {
            e.item.Item = this.ListaComboio.Max("Item") + 1;
        }
    };
    C_MDFe.prototype.ValidandoUnidadeCargaVazia = function (s, e) {
        var parametros;
        var ex = [];
        if (!e.item.CodigoDescarregamento) {
            ex.push('Preencha corretamente o campo: Código do Terminal de Descarregamento <br/>');
        }
        if (!e.item.NomeDescarregamento) {
            ex.push('Preencha corretamente o campo: Nome do Terminal de Descarregamento <br/>');
        }
        if (ex.length > 0) {
            MostrarAlerta(ex.join(''));
            e.cancelar = true;
            return;
        }
        if (e.index < 0) {
            e.item.Item = this.ListaDesCarregamento.Max("Item") + 1;
        }
    };
    C_MDFe.prototype.ValidandoUnTranspNFe = function (s, e) {
        var parametros;
        var ex = [];
        if (!e.item.tpUnidTransp || e.item.tpUnidTransp == -1) {
            ex.push('Informe Tipo de Unidade de Transporte <br/>');
        }
        if (!e.item.idUnidTransp) {
            ex.push('Informe a Identificação do Tipo de Unidade <br/>');
        }
        if (!e.item.qtdRat) {
            ex.push('Informe a Quantidade Rateada <br/>');
        }
        if (ex.length > 0) {
            MostrarAlerta(ex.join(''));
            e.cancelar = true;
            return;
        }
        e.item.Tipo_Transporte_Text = this.cboTipoUnTranspNFe.GetText();
        if (this.ListaLacreUnidTranspNFe.length > 0) {
            e.item.lacUnidTransp = this.ListaLacreUnidTranspNFe;
            e.item.qtLacres = this.ListaLacreUnidTranspNFe.length;
        }
        else {
            e.item.qtLacres = 0;
        }
        this.ListaLacreUnidTranspNFe = [];
        if (e.index < 0) {
            e.item.Item = this.ListaUnidadeTransporteNFe.Max("Item") + 1;
        }
    };
    C_MDFe.prototype.ValidandoUnTranspMDFe = function (s, e) {
        var parametros;
        var ex = [];
        if (!e.item.tpUnidTransp || e.item.tpUnidTransp == -1) {
            ex.push('Informe Tipo de Unidade de Transporte <br/>');
        }
        if (!e.item.idUnidTransp) {
            ex.push('Informe a Identificação do Tipo de Unidade <br/>');
        }
        if (!e.item.qtdRat) {
            ex.push('Informe a Quantidade Rateada <br/>');
        }
        if (ex.length > 0) {
            MostrarAlerta(ex.join(''));
            e.cancelar = true;
            return;
        }
        e.item.Tipo_Transporte_Text = this.cboTipoUnTranspMDFe.GetText();
        if (this.ListaLacreUnidTranspMDFe.length > 0) {
            e.item.lacUnidTransp = this.ListaLacreUnidTranspMDFe;
            e.item.qtLacres = this.ListaLacreUnidTranspMDFe.length;
        }
        else {
            e.item.qtLacres = 0;
        }
        this.ListaLacreUnidTranspMDFe = [];
        if (e.index < 0) {
            e.item.Item = this.ListaUnidadeTransporteMDFe.Max("Item") + 1;
        }
    };
    C_MDFe.prototype.ValidandoPedagio = function (s, e) {
        var parametros;
        var ex = [];
        if (!e.item.CNPJfornecedor) {
            ex.push('Informe o CNPJ da Empresa Fornecedora do Vale Pedágio <br/>');
            e.cancelar = true;
        }
        else {
            parametros = {
                cpf: e.item.CNPJfornecedor
            };
            if (!this.ExecutarFuncaoServerSideSynch('validarCpf', parametros)) {
                MostrarAlerta('O CNPJ da Empresa Fornecedora informado é inválido! <br/>');
                e.cancelar = true;
            }
        }
        if (!e.item.NComprovante || e.item.NComprovante == 0) {
            ex.push('Informe o Número do Comprovante de Compra do Vale Pedágio <br/>');
            e.cancelar = true;
        }
        if (!e.item.CpfCnpjPagamento) {
            ex.push('Informe o Documento do Responsável pelo Pagamento <br/>');
            e.cancelar = true;
        }
        else {
            parametros = {
                cpf: e.item.CpfCnpjPagamento
            };
            if (!this.ExecutarFuncaoServerSideSynch('validarCpf', parametros)) {
                if (this.Pedagio.Tipo == 'F') {
                    ex.push('O CPF do Responsável pelo Pagamento informado é inválido! <br/>');
                }
                else {
                    ex.push('O CNPJ do Responsável pelo Pagamento informado é inválido! <br/>');
                }
            }
        }
        if (!e.item.Valor) {
            ex.push('Informe o Valor do Vale-Pedágio <br/>');
        }
        if (ex.length > 0) {
            MostrarAlerta(ex.join(''));
            e.cancelar = true;
            return;
        }
        if (e.index < 0) {
            e.item.Item = this.ListaMunDescarregamento.Max("Item") + 1;
        }
    };
    C_MDFe.prototype.ValidandoLacre = function (s, e) {
        if (!e.item.Lacre || e.item.Lacre <= 0) {
            MostrarAlerta("Informe o número de lacres!");
            e.cancelar = true;
            return;
        }
        if (e.index < 0) {
            e.item.ItemLacre = this.ListaLacre.Max("ItemLacre") + 1;
        }
    };
    C_MDFe.prototype.ValidandoLacreCTe = function (s, e) {
        if (!e.item.Lacre || e.item.Lacre <= 0) {
            MostrarAlerta("Informe o número de lacres!");
            e.cancelar = true;
            return;
        }
        if (e.index < 0) {
            e.item.ItemLacre = this.ListaLacreUnidTranspCte.Max("ItemLacre") + 1;
        }
    };
    C_MDFe.prototype.ValidandoLacreNFe = function (s, e) {
        if (!e.item.Lacre || e.item.Lacre <= 0) {
            MostrarAlerta("Informe o número de lacres!");
            e.cancelar = true;
            return;
        }
        if (e.index < 0) {
            e.item.ItemLacre = this.ListaLacreUnidTranspNFe.Max("ItemLacre") + 1;
        }
    };
    C_MDFe.prototype.ValidandoLacreMDFe = function (s, e) {
        if (!e.item.Lacre || e.item.Lacre <= 0) {
            MostrarAlerta("Informe o número de lacres!");
            e.cancelar = true;
            return;
        }
        if (e.index < 0) {
            e.item.ItemLacre = this.ListaLacreUnidTranspMDFe.Max("ItemLacre") + 1;
        }
    };
    C_MDFe.prototype.ValidandoUnidade = function (s, e) {
        var ex = [];
        if (!e.item.tpUnidTransp) {
            ex.push('Informe o Tipo de Unidade de Transporte. <br/>');
        }
        if (!e.item.tpUnidTransp) {
            ex.push('Informe a Identificação do Tipo de Unidade. <br/>');
        }
        if (!e.item.tpUnidTransp) {
            ex.push('Informe a Quantidade Rateada. <br/>');
        }
        if (ex.length > 0) {
            e.cancelar = true;
            MostrarAlerta(ex.join(''));
            return;
        }
        if (e.index < 0) {
            e.item.Item = this.ListaUnidadeTransporteCTe.Max("Item") + 1;
        }
    };
    C_MDFe.prototype.ValidandoSeguro = function (s, e) {
        var ex = [];
        if (!e.item.Responsavel_Seguro) {
            ex.push('Preencha corretamente o campo: Responsável pelo Seguro <br/>');
        }
        if (!e.item.Nome_Seguradora) {
            ex.push('Preencha corretamente o campo: Nome da Seguradora <br/>');
        }
        if (e.item.Responsavel_Seguro == "2") {
            if (!e.item.CPF_CNPJ_Responsavel) {
                ex.push('Preencha corretamente o campo: CPF/CNPJ Responsável Seguro <br/>');
            }
            if (!e.item.CNPJ_Seguradora) {
                ex.push('Preencha corretamente o campo: CNPJ da Seguradora <br/>');
            }
        }
        if (ex.length > 0) {
            MostrarAlerta(ex.join(''));
            e.cancelar = true;
            return;
        }
        if (e.index < 0) {
            e.item.Item = this.ListaSeguro.Max("Item") + 1;
        }
        if (this.cboResponsavelSeguro) {
            e.item.Responsavel_Seguro_Descricao = this.cboResponsavelSeguro.GetText();
        }
    };
    C_MDFe.prototype.MudouTipoCIOT = function (newValue, oldValue) {
        if (newValue == "F") {
            this.txtCpfCnpjCIOT.IsCPF = true;
        }
        else {
            this.txtCpfCnpjCIOT.IsCPF = false;
        }
    };
    C_MDFe.prototype.MudouTipoContratantes = function (newValue, oldValue) {
        if (newValue == "F") {
            this.txtCpfCnpjContratante.IsCPF = true;
        }
        else {
            this.txtCpfCnpjContratante.IsCPF = false;
        }
    };
    C_MDFe.prototype.MudouTipoAutorizados = function (newValue, oldValue) {
        if (newValue == "F") {
            this.txtCpfAut.IsCPF = true;
        }
        else {
            this.txtCpfAut.IsCPF = false;
        }
    };
    C_MDFe.prototype.MudouTipoPedagio = function (newValue, oldValue) {
        if (newValue == "F") {
            this.txtCpfCnpjResp.IsCPF = true;
        }
        else {
            this.txtCpfCnpjResp.IsCPF = false;
        }
    };
    C_MDFe.prototype.MudouTipoProprietario = function (newValue, oldValue) {
        if (newValue == "F") {
            this.txtCPF.IsCPF = true;
            this.txtIEProp.Enabled = false;
            this.txtIEProp.SetText('');
        }
        else {
            this.txtCPF.IsCPF = false;
            this.txtIEProp.Enabled = true;
        }
    };
    C_MDFe.prototype.MudouTipoReboque = function (newValue, oldValue) {
        if (newValue == "F") {
            this.txtCpfReb.IsCPF = true;
        }
        else {
            this.txtCpfReb.IsCPF = false;
        }
    };
    C_MDFe.prototype.PreencherEmitente = function (Entity) {
        var parametros = {
            codEmpresa: Entity.Empresa
        };
        var empresa = this.ExecutarFuncaoServerSideSynch("PreencherEmpresa", parametros);
        this.txtCNPJ.IsCPF = (empresa.Tipo == "F") ? true : false;
        this.Emitente.CNPJ = empresa.Cnpj;
        this.Emitente.IE = empresa.Ie;
        this.Emitente.Nome = empresa.Razao_Social;
        this.Emitente.Fantasia = empresa.Fantasia;
        this.Emitente.Endereco = empresa.Endereco;
        this.Emitente.Numero = empresa.Numero;
        this.Emitente.Complemento = "";
        this.Emitente.Bairro = empresa.Bairro;
        this.Emitente.CEP = empresa.Cep;
        this.Emitente.Cidade = empresa.Cidade;
        this.Emitente.Email = empresa.Email_Fiscal;
        this.Emitente.Tipo = empresa.Tipo;
        if (empresa.Fone.length > 8) {
            if (empresa.Fone.indexOf('(') === 0 && empresa.Fone.indexOf(')') > 0) {
                this.txtFone_DDD1.TextBoxDDD.value = empresa.Fone.substring(1, 3);
                this.txtFone_DDD1.TextBoxTelefone.value = empresa.Fone.substring(4);
            }
            else {
                this.txtFone_DDD1.TextBoxDDD.value = empresa.Fone.substring(0, 2);
                this.txtFone_DDD1.TextBoxTelefone.value = empresa.Fone.substring(2);
            }
        }
        else {
            this.txtFone_DDD1.TextBoxTelefone.value = empresa.Fone;
        }
    };
    C_MDFe.prototype.PreencherNumeroNota = function (Entity) {
        var parametros = {
            codEmpresa: Entity.Empresa,
            codSerie: Entity.Serie
        };
        try {
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherNumeroNota", parametros);
            Entity.Formulario = retorno.numeroNota;
            //Entity.Codigo = retorno.codNota;
            //this.codNota = retorno.codNota;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_MDFe.prototype.OnMtpDocumentosTabChanged = function (s, e) {
        this.VerificarTabVisible();
    };
    C_MDFe.prototype.OnTabTabChanged = function (s, e) {
        this.VerificarTabVisible();
    };
    C_MDFe.prototype.VerificarTabVisible = function () {
        var visibilidade = this.mtpDocumentos.ActiveTabIndex != 0;
        this.cboMunDoc.Visible = visibilidade;
        this.cboUFDoc.Visible = visibilidade;
    };
    C_MDFe.prototype.OnAntesDeletar = function () {
        _super.prototype.OnAntesDeletar.call(this);
        //if (this.EntityTela.Situacao === 'CADASTRADA' || this.EntityTela.Codigo === 0) {
        //    return true;
        //}
        //return false;
        return true;
    };
    C_MDFe.prototype.IsSerieValida = function () {
        var serie;
        var parametros = {
            codSerie: this.EntityTela.Serie
        };
        serie = this.ExecutarFuncaoServerSideSynch("GetSerieNFP", parametros);
        if (this.Emitente.Tipo == "F" && (serie < 920 || serie > 969)) {
            MostrarAlerta("Para emitente Pessoa Física a série da MDF-e deve estar entre 920 e 969!");
            return false;
        }
        else {
            return true;
        }
    };
    C_MDFe.prototype.OnClickBotaoAdicionaSeguro = function () {
        if (this.mdSeguro && this.mdSeguro.ModalDialog) {
            this.LimparMdSeguro();
            this.mdSeguro.ModalDialog.Show();
        }
    };
    C_MDFe.prototype.OnClickBotaoOkSeguro = function () {
        this.grdSeguro.AdicionarOuAlterarItemAtual();
    };
    C_MDFe.prototype.LimparMdSeguro = function () {
        this.Seguro = undefined;
        this.Seguro.Tipo_Responsavel = 'F';
        this.Seguro.Responsavel_Seguro = 0;
        this.RefreshAngular();
    };
    C_MDFe.prototype.OnNFeExcluida = function () {
        this.EntityTela.Qtde_NFe_Ref = this.ListaNFe.length;
    };
    C_MDFe.prototype.OnCTeExcluida = function () {
        this.EntityTela.Qtde_CTe_Ref = this.ListaCte.length;
    };
    return C_MDFe;
}(MouraPageCadastroAngular));
var c_MDFe = new C_MDFe();
//# sourceMappingURL=C_MDFe.js.map