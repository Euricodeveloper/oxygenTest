sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/core/routing/History',
    'sap/ui/core/routing/Router'
], function(Controller, History, Router) {
    'use strict';

    return Controller.extend('my.app.controller.SecondPage', {
        onInit: function() {
            // Lógica de inicialização, se necessário
        },

        onBack: function() {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash) {
                window.history.go(-1);
            } else {
                var oRouter = Router.getRouter('app'); 
                oRouter.navTo('main');
            }
        }
    });
});
