import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  generateDistribution: true,
  namespace: 'stencil-poc',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/assets/styles/_variables.scss',
      ],
    }),
  ]
};
