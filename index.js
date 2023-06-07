sap.ui.define([
    'sap/ui/core/ComponentContainer',
    'sap/ui/core/mvc/XMLView',
    'sap/ui/core/mvc/Controller'
], function(ComponentContainer, XMLView, Controller) {
    'use strict';

    new ComponentContainer({
        name: 'my.app',
        settings: {
            id: 'demo'
        },
        async: true
    }).placeAt('content');
});


