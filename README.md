# ngrx-entity-crud-prime-ng-boilerplate
This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

# What is it for?

This project demonstrates how to use the ngrx-entity-crud library to create an [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) + [Angular](https://angular.io/) + [NgRx](https://ngrx.io/) project

# How to use it?

## 1) Creating a GitHub repository from a template (Angular + NgRx Boilerplate)
The project was made through [PrimeNg](https://www.primefaces.org/primeng), if you want other versions just ask me.
Creating a repository GitHub from a template:
1) Navigate to [https://github.com/jucasoft/ngrx-entity-crud-prime-ng-boilerplate](https://github.com/jucasoft/ngrx-entity-crud-prime-ng-boilerplate)
2) Above the file list, click: "Use this template".
3) Use the Owner drop-down menu, and select the account you want to own the repository.
4) Type a name for your repository/projectName, and an optional description.
5) Choose a repository visbility.
6) Click Create repository from template.
   For more information ([help.github.com creating-a-repository-from-a-template](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template))


## 2) Cloning a repository from GitHub:
```
git clone https://github.com/{account}/{repository}.git {projectName}
cd {projectName}
npm i
```
For more information ([help.github.com cloning-a-repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository))

## 3) Run application:
```
npm run start:dev
```
if there are no errors, we can continue

## 4 Project structure:

```
dist/                           compiled version
e2e/                            end-to-end tests
src/                            project source code
|- app/                         app components
|  |- core/                     core module (singleton services and single-use components)
|  |  |- components/
|  |  |- directive/
|  |  |- interceptors/
|  |  |- models/
|  |  |- pipe/
|  |  +- utils/
|  |- shared/                   shared module  (common components, directives and pipes)
|  |- main/
|  |  |- components/
|  |  |- models/
|  |  |- services/
|  |  +- views/
|  |- root-store/               as indicated in the article  https://itnext.io/ngrx-best-practices-for-enterprise-angular-applications-6f00bcdf36d7
|  |  |- router-store/
|  |  |- index.ts
|  |  |- root-reducer.ts
|  |  |- root-store.module.ts
|  |  |- selectors.ts
|  |  +- state.ts
|  |- app.component.*           app root component (shell)
|  |- app.module.ts             app root module definition
|  |- app.routing.ts            app routes
|  +- ...                       additional modules and components
+ ...
```

## 5) Back-End
In this project we will use [jsonserver](https://github.com/typicode/json-server):

Edit the /db.json file add some data:
```
{
  "coin": [
    { "id": 1, "value": "10", "name": "xxxx", "description": "xxxx" },
    { "id": 2, "value": "20", "name": "xxxx", "description": "xxxx" },
    { "id": 3, "value": "30", "name": "xxxx", "description": "xxxx" }
  ]
}
```

Start JSON Server
```
npm run start
```

Now if you go to http://localhost:3000/api/v1/coin/1, you'll get:
```
{
  "data": {
    "id": 1,
    "value": "10",
    "name": "xxxx",
    "description": "xxxx"
  }
}
```

## 6) Create the NgRx store to manage the coins
the command to use: ":store" and the parameters to pass: "--type=CRUD", "--clazz=Coin" and "--name=coin"
```
ng generate ngrx-entity-crud:store --name=coin --clazz=Coin --type=CRUD
```
the list of created and modified files will appear in the console
```
CREATE src/app/root-store/coin-store/coin-store.module.ts (787 bytes)
CREATE src/app/root-store/coin-store/actions.ts (462 bytes)
CREATE src/app/root-store/coin-store/effects.ts (1186 bytes)
CREATE src/app/root-store/coin-store/index.d.ts (265 bytes)
CREATE src/app/root-store/coin-store/index.ts (267 bytes)
CREATE src/app/root-store/coin-store/names.ts (46 bytes)
CREATE src/app/root-store/coin-store/reducer.ts (162 bytes)
CREATE src/app/root-store/coin-store/selectors.ts (543 bytes)
CREATE src/app/root-store/coin-store/state.ts (385 bytes)
CREATE src/app/main/services/coin.service.ts (347 bytes)
CREATE src/app/main/models/vo/coin.ts (221 bytes)
UPDATE src/app/root-store/index.ts (309 bytes)
UPDATE src/app/root-store/index.d.ts (309 bytes)
UPDATE src/app/root-store/state.ts (217 bytes)
UPDATE src/app/root-store/selectors.ts (665 bytes)
UPDATE src/app/root-store/root-store.module.ts (1051 bytes)
```

#### Add the attributes in Coin class
Open the class Coin "src/app/main/models/vo/coin.ts"
Add the attributes (present in the DB JSON file):

    public value:string = undefined;
    public name:string = undefined;
    public description:string = undefined;

why set the default value for class members: "undefined"?   
if we were to have a class:
````
class Dog{
    public id:string = undefined;
    public name:string = undefined;
    public description:string; // in this attribute we do not set the default value
}
````

when we create a new instance (new Dog()):
````
{
    id:undefined
    name:undefined
}
````
the description attribute will not be present


## 8)Create the new pages (search, list, detail...) of the Coin section.
The command to use: "section" and the parameters to pass: "--clazz=Coin" and "--lib=primeng"
```
ng generate ngrx-entity-crud:section --clazz=Coin --lib=primeng
```

the list of created and modified files will appear in the console
```
CREATE src/app/main/views/coin/coin-routing.module.ts (722 bytes)
CREATE src/app/main/views/coin/coin.module.ts (1102 bytes)
CREATE src/app/main/views/coin/coin-edit/coin-edit.component.html (1325 bytes)
CREATE src/app/main/views/coin/coin-edit/coin-edit.component.ts (1626 bytes)
CREATE src/app/main/views/coin/coin-list/coin-list.component.html (706 bytes)
CREATE src/app/main/views/coin/coin-list/coin-list.component.ts (2254 bytes)
CREATE src/app/main/views/coin/coin-main/coin-main.component.html (188 bytes)
CREATE src/app/main/views/coin/coin-main/coin-main.component.ts (536 bytes)
UPDATE src/app/app-routing.module.ts (517 bytes)
```

## 8) compile the application
```
ng build --aot --prod
```

## 9) start server
```
npm run start
```

Go to http://localhost:3000/coin

You have finished creating the new crud section, now you can filter, create, edit and delete coins.

## 10) deploy app to Heroku
The application (FE and BE) is ready to be started on heroku, register on heroku and run this guide [github-integration](https://devcenter.heroku.com/articles/github-integration)

# Note

compile the library:  
```
npm run build
```

publish library:  
  
go to the "libs/ngrx-entity-crud" folder. 
```
npm login (authentication)
npm publish 
```

## DEVELOP
Package linking:
```
cd <library-compiled>
npm link
```
go to the main folder of the project where to use the library:
```
npm link <library-name>
```

##  in case ...
if the error appears:  

```
... 'No provider for Injector!' ...
```
edit the file angular.json, set the value of "projects/*/architect/build/options":  
"preserveSymlinks": true. 

if you don't see changes to the library under development:  
temporarily remove the library reference from the "package.json" file and rerun "npm link <library-name>". 


>(*) TypeScript (required by other typescript plugins)
(*) TypeScript Operations (operations and fragments)
(*) TypeScript Apollo Angular (typed GQL services) <========== installa in automatico una versione di apollo angular comptibile
( ) TypeScript GraphQL files modules (declarations for .graphql files)
( ) TypeScript GraphQL document nodes (embedded GraphQL document)
( ) Introspection Fragment Matcher (for Apollo Client)
( ) Urql Introspection (for Urql Client)
