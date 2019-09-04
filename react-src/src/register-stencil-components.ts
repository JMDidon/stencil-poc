// Taken from here: https://github.com/ionic-team/stencil/issues/1090#issuecomment-501124883
// Typescript / JSX complains about Web Components created with Stencil because it doesn't know them.
// So in a TS + React application, you need to add the definition of your components to JSX's namespace.

// register-web-components.ts
/* eslint-disable */
import { defineCustomElements, JSX as LocalJSX } from '../../loader';
import { HTMLAttributes } from 'react';

type StencilToReact<T> = {
  [P in keyof T]?: T[P] & Omit<HTMLAttributes<Element>, 'className'> & { class?: string; };
};

declare global {
  export namespace JSX {
    interface IntrinsicElements extends StencilToReact<LocalJSX.IntrinsicElements> {}
  }
}

defineCustomElements(window);
