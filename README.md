# ng_defer

## tch and eft

`tch` and `eft` are two Ng 17 application with Standalone component.   They can be built separately and run by itself.

## pams is the main program

In this pams app, we try to use **@defer** to load `tch` and `eft` in the run time such as (OR)

- http://xxxx/tch/main.ts
- /tch/main.ts

## TODO

In app.component.ts, we have successfully import

- TchComponent from ../../../tch/src/tch/tch.component
- EftComponent from ../../../eft/src/eft/eft.component

And, added the following into pams AppComponent@Component
```js
  imports: [TchComponent, EftComponent],
  schemas: [NO_ERRORS_SCHEMA],
```

Angular-compiler plugin still complains: 
1. If 'EftComponent' is an Angular component, then verify that it is included in the '@Component.imports' of this component.
2. To allow any element add 'NO_ERRORS_SCHEMA' to the '@Component.schemas' of this component.

