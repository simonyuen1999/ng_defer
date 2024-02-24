# For the record: The following is from latest Copilet. 

We try to follow the instruction, but Angular compiler complains `tch-component` and `eft-component`.

## Angular 17 defer block for dyanmically load application

>  I created an Angular v17 project.  it has three **standalone applications**, let call them: `app`, `tch`, and `eft`.   I want `app` application to dynamically load `tch` and `eft` from the same web server from **different URI**.    These 3 applications have their own build process, and generate their own bundle files.   They can upload to the web server independently.   The `app` application will dynamically load the `tch` and `eft` as a standalone application without knowing what they are.   can this be done?

This can be done using the new **@defer** feature in Angular v17. This feature allows you to **defer** the loading of components until they are needed, based on specific conditions or events. For example, you can defer the loading of `tch` and `eft` components until the user clicks on a button or navigates to a certain route¹².

To use the **@defer** feature, you need to wrap the components you want to defer in a **@defer block** in your `app` component's template. For example:

```html
<app-header></app-header>
<app-sidebar></app-sidebar>
<main>
  <router-outlet></router-outlet>
  @defer {
    <tch-component></tch-component>
  }
  @defer {
    <eft-component></eft-component>
  }
</main>
```

This will tell Angular to **not load** the `tch` and `eft` components until they are **visible** in the `viewport`, or until you **trigger** their loading manually using the **@deferLoad** directive¹².  For example, you can add a button to load the tch component:

```html
<button @deferLoad="tch-component">Load TCH</button>
```

Or, you can use the **@deferOn** directive to load the component based on a custom event¹².  For example, you can load the `eft` component when the user hovers over a link:

```html
<a @deferOn="hover" href="/eft">Go to EFT</a>
```

By using the **@defer** feature, you can **improve** the initial load performance of your `app`, as well as the user experience, by loading only the parts of your `app` that the user is actually going to use¹².

If you want to learn more about the **@defer** feature and how to use it in your Angular v17 project, you can check out the following resources:

- The official blog post¹ by Minko Gechev, which introduces the **@defer** feature and explains its benefits and usage.
- The article² by Alexander Thalhammer, which shows how to improve the initial load performance with Angular 17's **deferrable views and provides a demo app**.
- The article³ by Mixoum, which gives a quick overview of the new features in Angular v17, including the **@defer** feature.
- The documentation⁴ by Angular, which explains how to dynamically load components using the **@defer** feature and other techniques.

¹: Introducing Angular v17. Last month marked the 13th anniversary… | by Minko Gechev | Angular Blog

²: How to improve Initial Load Performance with Angular 17's Deferrable Views | ANGULARarchitects

³: Get start with Introducing Angular v17 | by Mixoum | Medium

⁴: Angular - Dynamic component loader

1. Using defer in Angular 17 to implement lazy loading. https://blog.logrocket.com/using-defer-angular-17-implement-lazy-loading/.

2. How to improve Initial Load Performance with Angular 17's Deferrable .... https://www.angulararchitects.io/en/blog/how-to-improve-initial-load-performance-with-angular-17s-deferrable-views/.

3. Dynamically loading Angular components | Techiediaries. https://www.techiediaries.com/dynamically-loading-angular-components/.

4. Angular - Dynamic component loader. https://angular.io/guide/dynamic-component-loader.


## Sample code

> Is it possible to show a complete app application sample code, the template, the typescript files, and `ng build` command.  How to upload the `dist` directory to a website?   How to build the `tch` and `eft` application, how to upload them, and to where.   Plus, how `app` application used **@defer** to load them?  What statement to specify these `tch` and `eft` URI?

- To show a complete `app` application sample code, the template, and the typescript files, you can use the Angular CLI to generate a new project with the command `ng new app`. This will create a folder called `app` with the following structure:

```bash
app
├── e2e
├── node_modules
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets
│   ├── environments
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   └── test.ts
├── .editorconfig
├── .gitignore
├── angular.json
├── browserslist
├── karma.conf.js
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── tslint.json
```

The main files you need to look at are the `app.component.html`, which contains the template for the app component, and the `app.component.ts`, which contains the typescript code for the app component. The `app.module.ts` file defines the app module, which is the root module of the application. You can also create other components, services, pipes, directives, etc. using the Angular CLI commands.

- To build the `app` application, you can use the command `ng build --prod`, which will create a `dist` folder with the production-ready files for your application. To upload the `dist` folder to a website, you can use different methods depending on your hosting provider. For example, you can use FTP, SSH, or a deployment tool to transfer the files to your web server. You can also use the `ng deploy` command to deploy your application to a supported platform, such as Firebase, Netlify, or GitHub Pages. For more information, see [Deployment](^2^).

- To build the `tch` and `eft` applications, you can follow the same steps as the `app` application, but with different project names. For example, you can use the commands `ng new tch` and `ng new eft` to generate the projects, and then `ng build --prod tch` and `ng build --prod eft` to build them. You can also upload the `dist/tch` and `dist/eft` folders to your web server using the same methods as the app application.

- To use defer to load the `tch` and `eft` applications from the `app` application, you need to wrap the components that you want to defer in a **@defer** block in your app component's template. For example:

```html
<app-header></app-header>
<app-sidebar></app-sidebar>
<main>
  <router-outlet></router-outlet>
  @defer {
    <tch-component></tch-component>
  }
  @defer {
    <eft-component></eft-component>
  }
</main>
```

This will tell Angular to not load the `tch` and `eft` components until they are visible in the viewport, or until you trigger their loading manually using the **@deferLoad** directive. For example, you can add a button to load the tch component:

```html
<button @deferLoad="tch-component">Load TCH</button>
```

Or, you can use the **@deferOn** directive to load the component based on a custom event. For example, you can load the `eft` component when the user hovers over a link:

```html
<a @deferOn="hover" href="/eft">Go to EFT</a>
```

By using the **@defer** feature, you can improve the initial load performance of your `app`, as well as the user experience, by loading only the parts of your `app` that the user is actually going to use. For more information, see [Using defer in Angular 17 to implement lazy loading](^12^).

- To specify the `tch` and `eft` URI, you need to configure the `angular.json` file of the `app` application, and add the `externalDependencies` option to the `build` target. For example:

```json
"build": {
  "builder": "@angular-devkit/build-angular:application",
  "options": {
    ...
    "externalDependencies": [
      "tch-component",
      "eft-component"
    ]
  },
  ...
}
```

This will tell Angular to exclude the `tch` and `eft` components from being bundled into the `app` bundle, and instead rely on them to be available at runtime. You also need to provide the URI of the `tch` and `eft` components in the `index.html` file of the `app` application, using the `type="module"` attribute. For example:

```html
<script type="module" src="https://example.com/tch/tch-component.js"></script>
<script type="module" src="https://example.com/eft/eft-component.js"></script>
```

This will load the `tch` and `eft` components as **ES modules**, which can be imported by the app application. For more information, see [Getting started with the Angular CLI's new build system](^6^).

1. Angular - Deployment. https://angular.io/guide/deployment.
2. Using defer in Angular 17 to implement lazy loading. https://blog.logrocket.com/using-defer-angular-17-implement-lazy-loading/.
3. Getting started with the Angular CLI's new build system. https://angular.io/guide/esbuild.
4. angular - What to do with a build "dist" folder - Stack Overflow. https://stackoverflow.com/questions/41680873/what-to-do-with-a-build-dist-folder.
5. typescript - How to build and deploy the Angular Server Side Rendering .... https://stackoverflow.com/questions/76659686/how-to-build-and-deploy-the-angular-server-side-rendering-ssr-build-files-to-a.
6. Angular 2 CLI - How to use /dist folder files created by angular-cli ng .... https://stackoverflow.com/questions/44470995/angular-2-cli-how-to-use-dist-folder-files-created-by-angular-cli-ng-build.
7. Angular - ng build. https://angular.io/cli/build.
8. Angular - CLI Overview and Command Reference. https://cli.angular.io/.
9. Upgrade to Angular 17 | Techiediaries. https://www.techiediaries.com/upgrade-angular-to-v17/.
10. Angular - Building and serving Angular apps. https://angular.io/guide/build.
11. How to create a project with App Module in Angular 17. https://medium.com/@carvalho.guilhermer/how-to-create-a-project-with-app-module-in-angular-17-a20235483713.
12. Explore Angular 17: Building Your First Project From Scratch. https://programmingfields.com/explore-angular-17-building-your-first-project-from-scratch/.
13. What is the advantages of use the new "defer" instead of a *ngIf in .... https://stackoverflow.com/questions/77416993/what-is-the-advantages-of-use-the-new-defer-instead-of-a-ngif-in-angular-17.
14. A guide to Angular Deferrable Views with @defer | Ninja Squad. https://blog.ninja-squad.com/2023/11/02/angular-defer/.
15. How to improve Initial Load Performance with Angular 17's Deferrable .... https://www.angulararchitects.io/en/blog/how-to-improve-initial-load-performance-with-angular-17s-deferrable-views/.
16. Common Routing Tasks - v17.angular.io. https://v17.angular.io/guide/router.
17. How to include Angular Material in Angular 17? - Stack Overflow. https://stackoverflow.com/questions/77538726/how-to-include-angular-material-in-angular-17.
18. Using @for in Angular 17. With the release of Angular 17, a ... - Medium. https://medium.com/@sivakishore.teru/using-for-in-angular-17-2cddff4a751a.
19. javascript - Angular 17 Http client injection - Stack Overflow. https://stackoverflow.com/questions/77483538/angular-17-http-client-injection.
20. Angular v17.2 is now available - blog.angular.io. https://blog.angular.io/angular-v17-2-is-now-available-596cbe96242d.
21. Angular 17 example project: CRUD with Rest API - GitHub. https://github.com/bezkoder/angular-17-crud-example.
22. Angular - Example applications. https://angular.io/guide/example-apps-list.
23. Angular 17 CRUD example with Web API - BezKoder. https://www.bezkoder.com/angular-17-crud-example/.
24. Angular v17 tutorial | Techiediaries. https://www.techiediaries.com/angular-tutorial/.

25. https://angular.io/guide/workspace-config.
26. https://github.com/NidhoggDJoking/Angular/tree/7da22c9ef4af82822cb0b99024f6489c414d7034/README.md.
27. https://github.com/A6terabytenta/FE-BE-Training/tree/fa97a94872560757831dd9b9e00ae2d49aa32d1e/angular-6-project%2FREADME.md.
28. https://github.com/entando/entando-docs/tree/3647b0a0a51ad8ad51231d375f989e325bdc8d96/vuepress%2Fdocs%2Fnext%2Ftutorials%2Fmicro-frontends%2Fangular.md.
29. https://github.com/luoyueyuntian/angular-react-vue/tree/25570e7fa743225c5c1751d741c6038faf358a90/heroes-tour-angular%2FfolderTree.md.



