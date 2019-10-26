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
var translateService;
var MouraPageAngular = /** @class */ (function (_super) {
    __extends(MouraPageAngular, _super);
    function MouraPageAngular() {
        return _super.call(this) || this;
    }
    MouraPageAngular.prototype.GetScope = function () {
        return angular.element(document.getElementsByTagName("form")).scope();
    };
    Object.defineProperty(MouraPageAngular.prototype, "hdnIsModalAg", {
        get: function () {
            return $("#hdnIsModalAg")[0];
        },
        enumerable: true,
        configurable: true
    });
    MouraPageAngular.prototype.RefreshAngular = function () {
        if (this.GetScope()) {
            this.GetScope().$applyAsync();
        }
    };
    Object.defineProperty(MouraPageAngular.prototype, "IsModal", {
        get: function () {
            if (this.hdnIsModalAg) {
                if (this.hdnIsModalAg.value == "S") {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    MouraPageAngular.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    return MouraPageAngular;
}(MouraPage));
//var TraducaoApp = angular.module("TraducaoApp", ['pascalprecht.translate']);
//TraducaoApp.controller("TraducaoController", ['$scope', function ($scope: ng.IScope) {
//}]);
//TraducaoApp.config(['$translateProvider', function ($translateProvider) {
//    configurarTranslateProvider($translateProvider);
//}]);
//TraducaoApp.run(['$translate', function ($translate) {
//    translateService = $translate;
//}]);
//TraducaoApp.factory('$exceptionHandler', ['$log', angularErrorHandler]);
//SisMouraAngularAPP.factory('$exceptionHandler', ['$log', angularErrorHandler]);
function angularErrorHandler($log) {
    return function myExceptionHandler(exception, cause) {
        console.log($log);
        console.log(cause);
        console.log(exception);
    };
}
function configurarTranslateProvider($translateProvider) {
    //debugger;
    //$translateProvider.translations(translateMoura.idioma, translateMoura.traducao);
    //$translateProvider.preferredLanguage(translateMoura.idioma);
}
//Utilizado para setar o atributo ngmodel dentro dos inputs em cada item da lista do radiobutton list
SisMouraAngularAPP.run(function () {
    setNgModelRadioButton();
});
function setNgModelRadioButton() {
    $("[ng-radiobutton]").each(function (index, element) {
        var input = $(element).find("input");
        input.each(function (index, itemList) {
            if (!String.IsNullOrWhiteSpace($(element).attr("ng-model"))) {
                $(itemList).removeAttr("class");
                $(itemList).attr("ng-model", $(element).attr("ng-model"));
                $(itemList).attr("ng-value", $(itemList).parent().attr("ng-value"));
                $(itemList).parent().removeAttr("ng-value");
            }
        });
        $(element).removeAttr("ng-model");
    });
}
SisMouraAngularAPP.controller("SisMouraController", ['$scope', '$compile', function ($scope, $compile) {
        var tpInstanciaTela = $("#hdnInstanciaTS").val();
        if (String.IsNullOrWhiteSpace(tpInstanciaTela)) {
            tpInstanciaTela = "mpCadastroAngular";
        }
        //$scope.Entity = {};
        if (window[tpInstanciaTela]) {
            if (window[tpInstanciaTela].Limpar) {
                if (window[tpInstanciaTela].GetScope) {
                    if (!window[tpInstanciaTela].GetScope().Entity) {
                        window[tpInstanciaTela].Limpar();
                    }
                }
                else {
                    window[tpInstanciaTela].Limpar();
                }
                $scope.$watch(function ($scope) {
                    return $scope.Entity[atributoID];
                }, $.proxy(window[tpInstanciaTela].OnAtualizouID, window[tpInstanciaTela]));
            }
        }
        $(document).on("DevExpressEndCallback", function () {
            setNgModelRadioButton();
            var elem = angular.element(document.getElementById("form1"));
            $compile(elem.children())($scope);
            $scope.$applyAsync();
        });
        $(document).on("AspEndRequest", function () {
            var elem = angular.element($("form")[0]);
            setNgModelRadioButton();
            elem.replaceWith(function () {
                return $compile(elem)($scope);
            });
            $scope.$applyAsync();
        });
        //Sys.WebForms.PageRequestManager.getInstance().add_endRequest(function () {
        //    setNgModelRadioButton();
        //    var elem = angular.element(document.getElementById("form1"));
        //    $compile(elem.children())($scope);
        //    $scope.$applyAsync();
        //});
        var atributoID = $("#hdnAtributoID").val();
        if (String.IsNullOrWhiteSpace(atributoID)) {
            atributoID = "Codigo";
        }
    }]);
angular.element(document).ready(function () {
    var tpInstanciaTela = $("#hdnInstanciaTS").val();
    if (String.IsNullOrWhiteSpace(tpInstanciaTela)) {
        tpInstanciaTela = "mpCadastroAngular";
    }
    //$scope.Entity = {};
    if (window[tpInstanciaTela]) {
        if (window[tpInstanciaTela].Limpar) {
            if (window[tpInstanciaTela].GetScope) {
                if (!window[tpInstanciaTela].GetScope().Entity) {
                    window[tpInstanciaTela].Limpar();
                }
            }
            else {
                window[tpInstanciaTela].Limpar();
            }
        }
    }
});
SisMouraAngularAPP.directive('mouraTextBox', function () {
    return {
        priority: 1,
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModel) {
            var textBox = window[attr.mouraTextBox];
            function toModel(value) {
                var retorno;
                if (String.IsNullOrWhiteSpace(value) && textBox.PermitirVazio) {
                    return null;
                }
                if (typeof value === "number") {
                    retorno = value;
                }
                else {
                    retorno = ("" + value).CNum();
                }
                var casas = textBox.QuantidadeCasas;
                var retornoFormatado = retorno.Format(casas);
                if (retornoFormatado.length > textBox.Textbox.maxLength && textBox.Textbox.maxLength > -1) {
                    retornoFormatado = retornoFormatado.substr(retornoFormatado.length - textBox.Textbox.maxLength, textBox.Textbox.maxLength);
                }
                if (retornoFormatado[0] == ".") {
                    retornoFormatado = retornoFormatado.substr(1, retornoFormatado.length - 1);
                }
                return retornoFormatado.CNum();
            }
            function toView(value) {
                var retorno;
                if (!value && textBox.PermitirVazio) {
                    return "";
                }
                if (typeof value === "number") {
                    retorno = value;
                }
                else {
                    retorno = ("" + value).CNum();
                }
                //return value;
                var casas = textBox.QuantidadeCasas;
                var retornoFormatado = retorno.Format(casas);
                if (retornoFormatado[0] == ".") {
                    retornoFormatado = retornoFormatado.substr(1, retornoFormatado.length - 1);
                }
                return retornoFormatado;
            }
            adicionarEventoMoura(textBox.LostFocus, function () {
                var retornoFormatado = textBox.GetText();
                ngModel.$setViewValue(retornoFormatado);
                //ngModel.$render();
            }, this);
            ngModel.$formatters.push(toView);
            ngModel.$parsers.push(toModel);
        }
    };
});
SisMouraAngularAPP.directive('mouraDdd', function () {
    return {
        priority: 1,
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModel) {
            var casas = parseInt(attr.mouraDdd);
            function toModel(value) {
                var retorno;
                if (String.IsNullOrWhiteSpace(value)) {
                    return null;
                }
                if (typeof value === "number") {
                    retorno = value;
                }
                else {
                    retorno = ("" + value).CNum();
                }
                return retorno.Format(casas).CNum();
            }
            function toView(value) {
                var retorno;
                if (!value) {
                    return "";
                }
                if (typeof value === "number") {
                    retorno = value;
                }
                else {
                    retorno = ("" + value).CNum();
                }
                return retorno.Format(casas);
            }
            ngModel.$formatters.push(toView);
            ngModel.$parsers.push(toModel);
        }
    };
});
SisMouraAngularAPP.directive('mouraComboDevexpress', function () {
    return {
        priority: 1,
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModel) {
            var comboDevExpress = window[attr.mouraComboDevexpress];
            function toModel(value) {
                return value;
            }
            function toView(value) {
                if (comboDevExpress) {
                    try {
                        if (value == null || value == undefined) {
                            comboDevExpress.SetSelectedIndex(-1);
                        }
                        else {
                            if (comboDevExpress.FindItemByValue(value) != null) {
                                //setTimeout(() => { comboDevExpress.SetValue(value); }, 1000);
                                comboDevExpress.SetValue(value);
                            }
                            else {
                                comboDevExpress.SetSelectedIndex(-1);
                            }
                        }
                    }
                    catch (e) {
                    }
                }
                return value;
            }
            if (comboDevExpress) {
                adicionarEventoDevExpress(comboDevExpress.SelectedIndexChanged, OnSelectedIndexDX, this);
            }
            function OnSelectedIndexDX(s, e) {
                //ngModel.$modelValue = s.GetValue();    
                //scope.$applyAsync();
                ngModel.$setViewValue(s.GetValue());
            }
            ngModel.$formatters.push(toView);
            ngModel.$parsers.push(toModel);
        }
    };
});
SisMouraAngularAPP.directive('mouraTextboxData', function () {
    return {
        priority: 1,
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModel) {
            var textBoxData = window[attr.mouraTextboxData];
            function toView(value) {
                if (textBoxData) {
                    try {
                        var data;
                        if (value) {
                            if (typeof value == "object" && value.getDate) {
                                data = value;
                            }
                            else {
                                if (value.indexOf("/") == 0) {
                                    data = eval("new " + replaceAll(value, "/", ""));
                                }
                                else {
                                    data = Globalize.parseDate(value);
                                }
                            }
                        }
                        textBoxData.SetDate(data);
                    }
                    catch (e) {
                    }
                }
                return value;
            }
            if (textBoxData) {
                adicionarEventoDevExpress(textBoxData.ValueChanged, OnValueChanged, this);
            }
            function OnValueChanged(s, e) {
                ngModel.$setViewValue(s.GetValue());
            }
            ngModel.$formatters.push(toView);
        }
    };
});
SisMouraAngularAPP.directive('mouraTextboxHora', function () {
    return {
        priority: 1,
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModel) {
            var textBoxHora = window[attr.mouraTextboxHora];
            var tipo = 1;
            if (attr.mouraTextboxHoraTipo) {
                tipo = attr.mouraTextboxHoraTipo.CNum();
            }
            function toView(value) {
                if (textBoxHora) {
                    try {
                        var data = null;
                        if (value) {
                            if (tipo == 1) {
                                if (typeof value == "object" && value.getDate) {
                                    data = value;
                                }
                                else if (typeof value == "object" && value.Ticks != undefined) {
                                    var dataAux = new Date();
                                    data = new Date(dataAux.getFullYear(), dataAux.getMonth(), dataAux.getDate(), value.Hours, value.Minutes, value.Seconds);
                                }
                                else if (value.indexOf("/") == 0) {
                                    data = eval("new " + replaceAll(value, "/", ""));
                                }
                                ngModel.$setViewValue(data);
                            }
                            else if (tipo == 2) {
                                data = Globalize.parseDate(value, { skeleton: "Hm" });
                            }
                        }
                        textBoxHora.textBoxHorario.SetDate(data);
                    }
                    catch (e) {
                    }
                }
                return value;
            }
            if (textBoxHora) {
                adicionarEventoDevExpress(textBoxHora.textBoxHorario.ValueChanged, OnValueChanged, this);
            }
            function OnValueChanged(s, e) {
                var dataAux = s.GetText();
                var data = null;
                if (!String.IsNullOrWhiteSpace(dataAux)) {
                    var dataAtual = new Date();
                    var aux = dataAux.split(":");
                    var hora = 0, minuto = 0;
                    if (aux.length > 1) {
                        hora = CNum(aux[0]);
                        minuto = CNum(aux[1]);
                    }
                    data = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dataAtual.getDate(), hora, minuto);
                }
                if (tipo == 1) {
                    ngModel.$setViewValue(data);
                }
                else if (tipo == 2) {
                    var valor = data.FormataHoraSismoura();
                    ngModel.$setViewValue(valor);
                }
            }
            ngModel.$formatters.push(toView);
        }
    };
});
SisMouraAngularAPP.directive('mouraTextboxProcura', function () {
    return {
        priority: 1,
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModel) {
            var txtProcura = window[attr.mouraTextboxProcura];
            function toModel(value) {
                var retorno;
                if (typeof value === "number") {
                    retorno = value;
                }
                else {
                    retorno = ("" + value).CNum();
                }
                if (retorno > 0) {
                    return retorno.Format(0).CNum();
                }
                else {
                    return null;
                }
            }
            function toView(value) {
                var retorno;
                if (typeof value === "number") {
                    retorno = value;
                }
                else {
                    retorno = ("" + value).CNum();
                }
                if (txtProcura) {
                    if (retorno > 0) {
                        txtProcura.EsconderGradeTodos();
                        txtProcura.Procurar(retorno.Format(0));
                        if (String.IsNullOrWhiteSpace(txtProcura.GetText())) {
                            retorno = 0;
                        }
                    }
                    else {
                        txtProcura.Limpar();
                    }
                }
                if (retorno > 0) {
                    return retorno;
                }
                else {
                    return null;
                }
            }
            ngModel.$formatters.push(toView);
            ngModel.$parsers.push(toModel);
        }
    };
});
SisMouraAngularAPP.directive('mouraComboBoxEmpresa', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModel) {
            function toModel(value) {
                var retorno;
                if (typeof value === "number") {
                    retorno = value;
                }
                else {
                    retorno = ("" + value).CNum();
                }
                if (retorno > 0) {
                    return retorno.Format(0).CNum();
                }
                else {
                    return 0;
                }
            }
            function toView(value) {
                var retorno;
                if (typeof value === "number") {
                    retorno = value;
                }
                else {
                    retorno = ("" + value).CNum();
                }
                if (retorno >= 0) {
                    return retorno.Format(0);
                }
                else {
                    return null;
                }
            }
            ngModel.$formatters.push(toView);
            ngModel.$parsers.push(toModel);
        }
    };
});
SisMouraAngularAPP.directive('mouraTextBoxMascara', function ($http) {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            //listen for events on text element
            element.on('keyup paste focus blur', function () {
                var val = $(this).val();
                // update the ng-model value
                ngModel.$setViewValue(val);
                ngModel.$render();
            });
        }
    };
});
SisMouraAngularAPP.directive('mouraCheckBoxList', function () {
    return {
        restrict: 'A',
        compile: function (templateElement, templateAttributes, transclude) {
            templateElement.find("span[checklist-model]").each(function (index, element) {
                var check = $(element).find("input[type='checkbox']");
                var span = $(element);
                check.attr("checklist-model", span.attr("checklist-model"));
                check.attr("checklist-value", span.attr("checklist-value"));
                span.removeAttr("checklist-model");
                span.removeAttr("checklist-value");
            });
            return {
                pre: function (scope, instanceElement, instanceAttributes, controller, transclude) {
                },
                post: function (scope, instanceElement, instanceAttributes, controller, transclude) {
                }
            };
        }
    };
});
SisMouraAngularAPP.directive('auxMouraCampoGetNgModel', function () {
    return {
        require: "?ngModel",
        compile: function (templateElement, templateAttributes, transclude) {
            return {
                pre: function (scope, instanceElement, instanceAttributes, controller, transclude) {
                    if (controller) {
                        var idCampo = instanceAttributes.auxMouraCampoGetNgModel;
                        var campoObject = window[idCampo + '_Object'];
                        if (campoObject) {
                            campoObject.NgModelController = controller;
                        }
                    }
                },
                post: function (scope, instanceElement, instanceAttributes, controller, transclude) {
                }
            };
        }
    };
});
SisMouraAngularAPP.directive('mouraCampo', function () {
    return {
        compile: function (templateElement, templateAttributes, transclude) {
            templateElement.find("ng-model").attr("aux-moura-campo-get-ng-model", templateElement[0].id);
            return {
                pre: function (scope, instanceElement, instanceAttributes, controller, transclude) {
                },
                post: function (scope, instanceElement, instanceAttributes, controller, transclude) {
                }
            };
        }
    };
});
//SisMouraAngularAPP.directive('ngModelOnblur', function () {
//    return {
//        restrict: 'A',
//        require: 'ngModel',
//        link: function (scope, elm, attr, ngModelCtrl: ng.INgModelController) {
//            if (attr['type'] === 'radio' || attr['type'] === 'checkbox') return;
//            elm.unbind('keydown').unbind('change').unbind('input'); //unbind('input')
//            elm.bind('blur', function () {
//                scope.$apply(function () {
//                    ngModelCtrl.$setViewValue(elm.val());
//                });
//            });
//        }
//    };
//});
//# sourceMappingURL=MouraPageAngular.js.map