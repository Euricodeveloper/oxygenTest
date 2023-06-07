sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/core/routing/History'
], function(Controller, History) {
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
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo('main', {}, true);
            }
        }
    });
});
