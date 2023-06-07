sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast'
], function(Controller, MessageToast) {
    'use strict';

    return Controller.extend('my.app.controller.MainPage', {
        handleNavPress: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo('second');
        },

        handleBackPress: function() {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo('main', {}, true);
            }
        },

        handleDelete: function(oEvent) {
            var oButton = oEvent.getSource();
            var oContext = oButton.getBindingContext();
            var oModel = this.getView().getModel();
            var aProducts = oModel.getProperty("/products");
            var nIndex = aProducts.indexOf(oContext.getObject());
        
            if (nIndex > -1) {
                aProducts.splice(nIndex, 1);
                oModel.setProperty("/products", aProducts);
        
                localStorage.setItem("products", JSON.stringify(aProducts));
        
                MessageToast.show("Produto excluído com sucesso");
            } else {
                MessageToast.show("Nenhum produto selecionado para exclusão");
            }
        },

        handleSearch: function(event) {
            var query = event.getParameter("query");
        
            var table = this.byId("table");
        
            var model = table.getModel();
        
            var items = table.getItems();
        
            items.forEach(function(item) {
                var context = item.getBindingContext();
        
                var productName = model.getProperty("name", context);
        
                var isMatch = productName.toLowerCase().indexOf(query.toLowerCase()) > -1;
        
                item.setVisible(isMatch);
            });
        },
        
        
        handleToastPress: function() {
            MessageToast.show('Nossa jornada está apenas começando!');
        },
        
        handleNavPress: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo('second');
        }
        
    });
});
