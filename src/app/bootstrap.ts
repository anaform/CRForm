/// <reference path="../../typings/tsd.d.ts" />

// Angular 2
import {bootstrap} from 'angular2/angular2';

// Angular's router injectables services/bindings
import {routerInjectables} from 'angular2/router';

// Our collection of injectables services
import {appServicesInjectables} from './services/services';

// Our top level component that holds all of our components
import {App} from './components/app';

/*
  Bootstrap our Angular app with our top level component `App`
  and inject our global services/bindings into Angular's dependency injection
*/
bootstrap(
  // Top Level Component
  App,

  // AppInjectors
  [
    // Our collection of services from /services
    appServicesInjectables,

    // Angular's router
    routerInjectables
  ]
);
