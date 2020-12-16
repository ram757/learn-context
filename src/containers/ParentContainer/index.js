import React from 'react';

const LazyLoadedComponent = React.lazy(() => import('./ParentContainer'));

export default (props) => (
  <React.Suspense fallback={<div>.....LOADING......</div>}>
    <LazyLoadedComponent {...props}></LazyLoadedComponent>
  </React.Suspense>
);
