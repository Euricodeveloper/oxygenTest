sap.ui.define([
    'sap/ui/core/UIComponent',
], function(UIComponent) {
    'use strict';

    return UIComponent.extend('my.app.Component', {
        metadata: {
            manifest: 'json',
            routing: {
                config: {
                    routerClass: 'sap.m.routing.Router',
                    viewType: 'XML',
                    viewPath: 'my.app.view',
                    controlId: 'app',
                    controlAggregation: 'pages',
                    async: true
                },
                routes: [
                    {
                        pattern: '',
                        name: 'main',
                        target: 'main'
                    },
                    {
                        pattern: 'second',
                        name: 'second',
                        target: 'second'
                    }
                ],
                targets: {
                    main: {
                        viewName: 'MainPage',
                        viewLevel: 1
                    },
                    second: {
                        viewName: 'SecondPage',
                        viewLevel: 2
                    }
                }
            }
        }
        
    });
});
