sap.ui.define([
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel'
], function(UIComponent, JSONModel) {
    'use strict';

    return UIComponent.extend('my.app.Component', {
        metadata: {
            rootView: {
                viewName: 'my.app.view.MainPage',
                type: 'XML',
                id: 'app'
            }
        },

        init: function() {
            UIComponent.prototype.init.apply(this, arguments);
        
            var oModel = new JSONModel();
        
            oModel.attachRequestCompleted(function() {
                if (oModel.getProperty('/products')) {
                    if (deletedProducts.length > 0) {
                        var products = oModel.getProperty('/products');
                        deletedProducts.forEach(function(deletedProduct) {
                            var index = products.findIndex(function(product) {
                                return product.id === deletedProduct.id;
                            });
                            if (index > -1) {
                                products.splice(index, 1);
                            }
                        });
                        oModel.setProperty('/products', products);
                    }
                    sap.ui.getCore().applyChanges();
                } else {
                    console.error('Falha ao carregar os dados do arquivo products.json');
                }
            });
        
            oModel.loadData('products.json');
        
            this.setModel(oModel);
        }
        
    });
});
