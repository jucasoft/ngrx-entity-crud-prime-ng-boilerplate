# ngrx-entity-crud-prime-ng-boilerplate
This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

# How to use it?
This project was created to be used with the [ngrx-entity-crud](https://www.npmjs.com/package/ngrx-entity-crud) library, to understand how to use it read this [guide](https://www.npmjs.com/package/ngrx-entity-crud).

# What is it for?
You will be able to create [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) [Angular](https://angular.io/) [NgRx](https://ngrx.io/) applications.

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
