# From ES6 to Angular Import and Export

> in html file, what is module in this tag "<script type="module" src="/tch/main.js"></script>"?

The `type="module"` attribute in a `<script>` tag indicates that the script should be treated as an **ES6 module**. 

ES6 modules are a modern way to organize JavaScript code into reusable pieces. They have their own separate scope and won't pollute the global scope. They also support features like `import` and `export` for handling dependencies between modules.

Here's what it means in your case:
```html
<script type="module" src="/tch/main.js"></script>
```
This line is including the JavaScript file located at "/tch/main.js" as a module. This means that inside "main.js", you can use `import` to bring in functions, objects, or values from other JavaScript modules, and `export` to make your own functions, objects, or values available for other modules to import. 

Remember, modules are only supported in modern browsers and they are subject to **CORS** (Cross-Origin Resource Sharing) policy. So, if you're testing locally, you might run into issues if you're not serving your files from a local server. 

> Explain use import to bring in function, object, or values from other Javascript modules, and export.

In JavaScript ES6 modules, `import` and `export` are used to share code between different modules. 

- `export` is used when we want to make parts of our module (like functions, objects, or primitive values) available to other modules.
- `import` is used in a module to bring in functionality from other modules.

Here's a simple example:

```javascript
// helper.js
export function greet(name) {
    return `Hello, ${name}!`;
}
```

```javascript
// main.js
import { greet } from './helper.js';
console.log(greet('World')); // Outputs: Hello, World!
```

In the context of Angular, components are typically classes that are decorated with `@Component`. The `@Component` decorator identifies the class immediately below it as a component and provides the template and related component-specific metadata.

## Angular

> let create an angular 17 standalone application which exports its standalone component and that component can be imported into the other angular program.   Also show the other angular program and how it imports the  other components.

Sure, let's create a standalone Angular application with a component that can be exported and used in another Angular application.

First, let's create a standalone Angular application with a component:

```typescript
// app.component.ts in Project 1
import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: `<h1>Hello {{name}}</h1>`,
})
export class GreetingComponent {
  name = 'Angular';
}
```

In this example, `GreetingComponent` is a standalone component that we're going to export. 

To make this component available for other applications, you would typically package it into a library. However, for simplicity, let's just export it from the main module:

```typescript
// app.module.ts in Project 1
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GreetingComponent } from './app.component';

@NgModule({
  declarations: [GreetingComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
  exports: [GreetingComponent] // Exporting our component
})
export class AppModule { }
```

Now, let's see how we can use this `GreetingComponent` in another Angular application:

```typescript
// app.module.ts in Project 2
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GreetingComponent } from 'path-to-project-1/app.component'; // Importing the component

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent // Declaring the imported component
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

And then you can use `<app-greeting></app-greeting>` in the HTML of your `AppComponent` in Project 2.

Please note that this is a simplified example. In a real-world scenario, you would want to create an Angular library to share components between projects. Also, the path to import the component from Project 1 into Project 2 would depend on your project structure and configuration.

> Show me how to create Angular library for sharing components between projects. 

Sure, here's a step-by-step guide on how to create an Angular library for sharing components between projects:

1. **Create a new Angular workspace** if you don't have one already:
    ```bash
    ng new my-workspace --create-application=false
    ```
    This command creates a new workspace named `my-workspace` without creating an initial application.

2. **Navigate into the workspace directory**:
    ```bash
    cd my-workspace
    ```

3. **Generate a new library** inside the workspace:
    ```bash
    ng generate library my-lib
    ```
    This command generates a new library named `my-lib`.

4. **Create a new component** in the library:
    ```bash
    ng generate component my-component --project=my-lib
    ```
    This command creates a new component named `my-component` in `my-lib`.

5. **Build the library**:
    ```bash
    ng build my-lib
    ```
    This command builds `my-lib`, and the output is stored in the `dist/my-lib` directory.

Now, you have a library with a component that can be shared between projects. To use the library in an application, you need to follow these steps:

1. **Generate a new application** in the workspace:
    ```bash
    ng generate application my-app
    ```
    This command generates a new application named `my-app`.

2. **Add the library to the application**. Open `my-app/src/app/app.module.ts` and add the following import statement:
    ```typescript
    import { MyComponent } from 'my-lib';
    ```
    Also, add `MyComponent` to the `declarations` array in the `@NgModule` decorator.

3. **Use the component in the application**. You can now use `my-component` in the application's template.

Please note that this is a simplified example. In a real-world scenario, you would want to publish your library to a package registry like npm, so it can be easily shared and used in other projects.

> Explain when we build my-app and deploy it into web server, can we build my-lib and deploy it separately?   If my-lib can have separate build and deployment process, what are the output files?   Where to put these output files in the web server directory?   How my-app refers to the GreetingComponent?  Or, how browser loads that my-lib js files?

When you build an Angular application that uses a library, the library's code is included in the final build output of the application. This means that when you build `my-app`, the code from `my-lib` that `my-app` uses is included in the `my-app` build output. Therefore, you don't need to (and generally can't) deploy `my-lib` separately.

Here's a more detailed explanation:

1. **Building the Library (`my-lib`)**: When you build an Angular library using the `ng build my-lib` command, the output is a set of files in the `dist/my-lib` directory (by default). These files include the compiled JavaScript files (`.js`), definition type files (`.d.ts`), and metadata files (`.metadata.json`) for the library.

2. **Building the Application (`my-app`)**: When you build an Angular application that uses the library, like `my-app`, using the `ng build my-app` command, the Angular compiler includes the necessary parts of the library code in the final build output of the application. The output is a set of static files in the `dist/my-app` directory (by default). These files include HTML, CSS, and JavaScript files that can be deployed to a web server.

3. **Deploying the Application**: To deploy `my-app`, you would typically copy the contents of the `dist/my-app` directory to the root directory of your web server. You don't need to copy the `dist/my-lib` directory because its code is already included in the `dist/my-app` directory.

4. **Using the Library in the Application**: In `my-app`, you refer to the `GreetingComponent` (or any other exported entity from `my-lib`) by importing it in the file where you want to use it, like this: `import { GreetingComponent } from 'my-lib';`. The path `'my-lib'` is resolved based on the `paths` configuration in the `tsconfig.json` file.

5. **Loading the Library Code**: When a user visits your deployed application in their browser, the browser loads the JavaScript files for `my-app`. Since the necessary code from `my-lib` is included in these files, the browser doesn't need to load anything separately for `my-lib`.

> Can my-lib not be included in my-app finak build output?   Can my-lib build and deploy separately.  my-app still can refer to the Component inside my-lib?

In general, Angular libraries are meant to be built and packaged into a distributable format, then imported into an Angular application at build time. The library's code is then included in the final build output of the application. This is the standard workflow and it ensures that all the code the application needs to run is included in its build output.

However, if you want to load a library separately at runtime, you would need to use a different approach. This is not a standard use case for Angular libraries, and it involves more complex techniques such as **lazy loading** or **micro frontends**.

- **Lazy Loading**: Angular supports lazy loading of modules, which allows you to load parts of your app asynchronously only when they are needed. However, this is typically used with modules within the same application, not with external libraries.

- **Micro Frontends**: This is an architectural style where independently deliverable frontend applications are composed into a whole. With this approach, you could potentially build and deploy your library as a separate micro frontend, then load it at runtime in your main application. There are several libraries and frameworks that can help with this, such as [Single SPA](https://single-spa.js.org/).

Please note that these approaches involve more complex setup and have their own trade-offs. They may not be suitable for all use cases. If you're considering one of these approaches, I would recommend further research and careful consideration of your specific requirements and constraints.

> Explain what is Micro Frontends?   How to implement it in our my-app example?

**Micro Frontends** is an architectural style that extends the concepts of microservices to the frontend world¹. The idea behind Micro Frontends is to think about a website or web app as a composition of features which are owned by independent teams¹. Each team has a distinct area of business or mission it cares about and specializes in¹. A team is cross-functional and develops its features end-to-end, from database to user interface¹.

In other words, instead of having one monolithic application, you would break it down into smaller components that can be developed independently⁵. Each component can be considered a micro frontend and consists of one or more pages⁵.

Now, let's see how we can apply this concept to our `my-app` example:

1. **Break down your application**: Identify the different features or components of your application that can be developed and deployed independently. Each of these will become a micro frontend.

2. **Create separate repositories**: For each micro frontend, create a separate repository. This allows each team to work independently on their own micro frontend.

3. **Develop and build independently**: Each team develops their micro frontend independently, using their chosen technology stack. They also build their micro frontend independently, resulting in a separate bundle for each micro frontend.

4. **Deploy independently**: Each micro frontend is deployed independently. This could be to a separate static file server, or each micro frontend could have its own backend that serves it.

5. **Integrate at runtime**: The main application (or "container application") integrates the micro frontends at runtime. This could be done through JavaScript that fetches and executes the micro frontend bundles, or through iframes that load the micro frontends.

6. **Communicate through a defined interface**: Micro frontends communicate with each other through a defined interface. This could be through custom events, global state, or other means.

Please note that this is a high-level overview and the exact implementation can vary greatly depending on your specific use case and requirements. There are also tools and frameworks available that can help with implementing micro frontends, such as [Single SPA](https://single-spa.js.org/).

Source: Conversation with Bing, 2024-02-27
(1) Micro Frontends - extending the microservice idea to frontend development. https://micro-frontends.org/.
(2) Micro Frontends: Advantages, Best Practices, How to Build. https://www.ramotion.com/blog/micro-frontends/.
(3) Micro Frontends - Martin Fowler. https://martinfowler.com/articles/micro-frontends.html.
(4) Getting Started with Micro Frontends - DEV Community. https://dev.to/smapiot/getting-started-with-micro-frontends-ge9.
(5) Micro Frontend Architecture: What, Why, and How to Use It. https://euristiq.com/micro-frontend-architecture/.

> How my-app be done through JavaScript that fetches and executes the micro frontend bundles?

To fetch and execute micro frontend bundles in your main application (`my-app`), you can use the SystemJS library. SystemJS is a universal dynamic module loader that can import modules at runtime.

Here's a simplified example of how you might use SystemJS to load a micro frontend:

1. **Install SystemJS**: First, you need to install SystemJS in your project. You can do this using npm:

    ```bash
    npm install systemjs
    ```

2. **Configure SystemJS**: Next, you need to configure SystemJS to know where to load your micro frontend from. You can do this in a separate JavaScript file:

    ```javascript
    // systemjs.config.js
    SystemJS.config({
      map: {
        'my-lib': 'url-to-your-micro-frontend-bundle'
      }
    });
    ```

    Replace `'url-to-your-micro-frontend-bundle'` with the URL where your micro frontend bundle is hosted.

3. **Load the Micro Frontend**: Now you can use SystemJS to import your micro frontend in your main application:

    ```javascript
    SystemJS.import('my-lib').then(function(module) {
      // You can now use the exported functions from your micro frontend
      var GreetingComponent = module.GreetingComponent;
      // ...
    });
    ```

Please note that this is a simplified example and might not work out-of-the-box. The exact implementation can vary greatly depending on your specific use case and requirements. Also, keep in mind that loading JavaScript at runtime can have implications for performance and security, so it's important to ensure that your server is correctly configured to serve JavaScript files with the appropriate CORS headers.

> Does Angular 17 @defer support Micro Frontends concept?

The `@defer` feature in Angular 17 is primarily designed to improve the initial load performance of an Angular application by deferring the loading of components until they are needed². This is achieved by transforming the static import of a component into a dynamic import²³.

While this feature can be beneficial in a Micro Frontends architecture by allowing components (or micro frontends) to be loaded on demand, it's important to note that `@defer` in itself does not provide a complete solution for implementing Micro Frontends¹².

Micro Frontends typically involve loading separately compiled and published application components at runtime¹. This often requires additional considerations such as routing, state management, and possibly sharing dependencies between the different micro frontends¹.

In the context of Angular, there are other techniques and tools that are often used in conjunction with `@defer` to implement a Micro Frontends architecture. For example, **Module Federation (shipped with webpack since version 5)** is often seen as a game changer for micro frontends¹. It allows separately compiled and published application components to be loaded on demand¹.

However, with the introduction of esbuild in Angular 17, which replaces webpack and thus Module Federation, the Native Federation project was created to use the proven mental model of Module Federation independently of webpack¹.

So, while `@defer` can play a role in a Micro Frontends architecture by enabling lazy loading of components, it's just one piece of the puzzle. Implementing a full Micro Frontends architecture typically involves a combination of several techniques and tools¹.

Source: Conversation with Bing, 2024-02-27
(1) How to improve Initial Load Performance with Angular 17's Deferrable .... https://www.angulararchitects.io/blog/how-to-improve-initial-load-performance-with-angular-17s-deferrable-views/.
(2) What is the advantages of use the new "defer" instead of a *ngIf in .... https://stackoverflow.com/questions/77416993/what-is-the-advantages-of-use-the-new-defer-instead-of-a-ngif-in-angular-17.
(3) Micro Frontends with Modern Angular – Part 1: Standalone and esbuild. https://www.angulararchitects.io/en/blog/micro-frontends-with-modern-angular-part-1-standalone-and-esbuild/.
(4) How to lazy load large 3rd-party dependencies with Angular 17's @defer .... https://www.angulararchitects.io/en/blog/how-to-lazy-load-large-3rd-party-dependencies-with-angular-17s-defer/.

## https://single-spa.js.org


