# Angular-Ngrx-LOGIN


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Running state managemnet and debugging

It's best to setup the Ngrx DevTools from the very beginning of the project. We can setup an Ngrx Store and configure the DevTools all in one go with the following Angular CLI command `ng generate store AppState --root --module app.module.ts`

our application now supports the Ngrx DevTools! Now we just have to install the DevTools extension in our browser-
Installation
1. For Chrome
from Chrome Web Store;
download extension.zip from last releases, unzip, open chrome://extensions url and turn on developer mode from top left and then click; on Load Unpacked and select the extracted folder for use
or build it with npm i && npm run build:extension and load the extension's folder ./build/extension;
or run it in dev mode with npm i && npm start and load the extension's folder ./dev.
2. For Firefox
from Mozilla Add-ons;
or build it with npm i && npm run build:firefox and load the extension's folder ./build/firefox (just select a file from inside the dir).



After installing the extension, you now should have the Ngrx DevTools available under the "Redux" menu option of your browser development tools (open them with Ctrl+Shift+I in Chrome).

After opening the Ngrx DevTools, you will have to reload the application in order to start debugging the application.



## What to Improve 

*   Use of cookies insted of localstorgae.
*   Create UI more attractive.
(area which can be covered in a bigger level)

Since our application does not have that much functionalities, so for a improvement point of view we can add these features as well when we are going to develope this further-
*   Implement of auth service (guard Implementation). we can Implement Route Guard .
*   Use of backend service (as of now there is no back-end service(REST API )is involved we can create a rest API(ex: https://back-end/api/v1/login) and consume that api in our service File ).
*   Can cover more use cases which is related to user login  like (sign up, already user) functionality. we can also create rest api using node js , and use DB for storing data.
*   Token authentication(if API will be involved)


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
