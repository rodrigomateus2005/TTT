var SisMouraAngularAPP = angular.module("SisMouraApp", ['ng', 'ngRoute', 'pascalprecht.translate', 'checklist-model']);
//SisMouraAngularAPP.config(['$translateProvider', function ($translateProvider) {
//    configurarTranslateProvider($translateProvider);
//}]);
//SisMouraAngularAPP.run(['$translate', function ($translate) {
//    translateService = $translate;
//}]);
if (window['rotas']) {
    SisMouraAngularAPP.config(function ($routeProvider, $locationProvider) {
        // Utilizando o HTML5 History API
        $locationProvider.html5Mode(true);
        for (var i = 0; i < rotas.length; i++) {
            var rota = rotas[i];
            var routeParams = {
                controller: rota.controller,
                controllerAs: "$ctrl",
                templateUrl: rota.rota + "/Html",
                resolve: null
            };
            if (rota.autenticada) {
                routeParams.resolve = {
                    auth: function (mouraService) {
                        return new Promise(function (resolve, reject) {
                            if (mouraService.isLogado()) {
                                resolve(true);
                            }
                            else {
                                mouraService.checkarLoginSessao().then(resolve).catch(function (erro) {
                                    mouraService.navegar("Login");
                                    reject(erro);
                                });
                            }
                        });
                    }
                };
            }
            $routeProvider.when("/" + rota.rota, routeParams);
        }
        $routeProvider.otherwise({ redirectTo: '/Principal' });
    });
}
//# sourceMappingURL=AngularSisMoura.js.map