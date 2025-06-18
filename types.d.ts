// import React from 'react';
// import { ModelViewerAttributes } from '@google/model-viewer';

// declare module 'react' {
//   namespace JSX {
//     interface IntrinsicElements {
//       "model-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & ModelViewerAttributes, HTMLElement>;
//     }
//   }
// }


import { ModelViewerElement } from "@google/model-viewer";

export declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<Partial<ModelViewerElement>>;
    }
  }
}