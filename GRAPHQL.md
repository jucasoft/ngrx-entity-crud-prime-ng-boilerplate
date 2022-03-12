
install server json-graphql-server:https://github.com/marmelab/json-graphql-server
npm i -g json-graphql-server

create file db.js
```js
module.exports = {
    coin: [
        { id: 1, title: "Lorem Ipsum", views: 254 },
        { id: 2, title: "Sic Dolor amet", views: 65 },
    ]
}
```

add script "scripts":
{
"start:glq": "json-graphql-server db.js",
},


instructions to install graphql-code-generator

npm install --save graphql
npm install --save-dev @graphql-codegen/cli
npm i

initialize project
npx graphql-codegen init

a series of choices appear:

? What type of application are you building? Application built with Angular
? Where is your schema?: (path or url) http://localhost:4000 <======= queste impostazioni potranno essere cambiate in un seconod momento
? Where are your operations and fragments?: src/**/*.graphql
? Pick plugins: (Press <space> to select, <a> to toggle all, <i> to invert selection) <======== analizzare con attenzione cosa viene generato attivando i vari plugin
>(*) TypeScript (required by other typescript plugins)
(*) TypeScript Operations (operations and fragments)
(*) TypeScript Apollo Angular (typed GQL services) <========== installa in automatico una versione di apollo angular comptibile
( ) TypeScript GraphQL files modules (declarations for .graphql files)
( ) TypeScript GraphQL document nodes (embedded GraphQL document)
( ) Introspection Fragment Matcher (for Apollo Client)
( ) Urql Introspection (for Urql Client)


in the tests performed on my pc, the initialization process had automatically added the plugin libraries.
In the virtual machine I had to install them manually

npm i -D @graphql-codegen/typescript
npm i -D @graphql-codegen/typescript-operations
npm i -D @graphql-codegen/typescript-apollo-angular
npm i -D @graphql-codegen/introspection

Install and configure apollo angular:
npm i @apollo/client
npm i apollo-angular

add the configuration in the main module as in the online guide and be careful where the modules are imported from.
```
import {HttpClientModule} from '@angular/common/http';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core'; <<=== intellij import this module from '@apollo/client' reporting several errors.

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://48p1r2roz4.sse.codesandbox.io',
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
})
export class AppModule {}
```

and added the script for the generation
```
{
  "scripts": {
    "generate": "graphql-codegen"
  }
}
```

create file src/app/app.graphql:
```
query allpost{
  allPosts {
    title
    views
  }
}
```

run command "npm run generate"

test the function of the call, add to app.component.ts component:
```
  constructor(private allpostGQL: AllpostGQL) {
    debugger
    allpostGQL.fetch().subscribe(value => console.log('allpostGQL.fetch():' + value));
  }
```
