# 1. When and why do we need lazy()?
Lazy loading in React is an optimization technique for websites or web applications. It is also known as on-demand loading because it only loads content visible on users’ screens. What does optimization mean?

Web optimization is the process of using controlled experimentations to improve the performance of a web application. To better understand how lazy loading React components help optimize a website, let’s take a look at a simple analogy.

So when a user visits a web page, instead of loading the entire page, only a portion of it renders. Then, react lazy loading delays the remaining webpage until the user scrolls to that portion of the web page.

For example, if a web page has an image that the user has to scroll down to see, you can display a placeholder. Then, you can lazy load the full image only when the user arrives at that section where the image is.

In a React application, images are not the only things that can be lazy-loaded, codes can also be lazy-loaded. In fact, React has made lazy-loading some sections of web pages easier. Because in React, web pages are built in small chunks called components.

Therefore, making it easy to load an entire component and only show it to the user when they scroll to that part of the webpage. Thereby saving bandwidth and precious computing resources.

Ref Site: https://www.copycat.dev/blog/react-lazy/#:~:text=React%20lazy%20loading%20can%20not,does%20not%20have%20a%20solution.

# 2. What is suspense?
React Suspense is a react component that lets components “wait” for something before rendering. React Suspense only supports one use case which is loading components dynamically with React lazy(). In the future, it will support other use cases like data fetching.

A component created using React lazy() is loaded only when it needs to be rendered. Therefore, you need to display some kind of placeholder content while the lazy component is being loaded . Such as a loading indicator so users know that there’s actually something loading that they need to wait for.

React Suspense component lets us show a loading indicator as a fallback prop while we’re waiting for the lazy component to load.

```python
import React, {lazy, Suspense } from 'react';
 
const OtherComponent = React.lazy(() => import('./OtherComponent'));
 
function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...YOu can call Shimmer Component</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```
As seen in the code example above, the fallback prop accepts JSX which it renders to the screen while waiting for react lazy components inside the Suspense component to be loaded.

Ref Link: https://www.copycat.dev/blog/react-lazy/#:~:text=React%20lazy%20loading%20can%20not,does%20not%20have%20a%20solution.

# 3. Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition. How does suspense fix this error ?
Ans.
This error is thrown as Exception by React when the promise to dynamically import the lazy component is not yet resolved and the Component is expected to render in the meantime. If only the dynamic import is done and there is no <Suspense /> component then this error is shown. React expects a Suspense boundary to be in place for showing a fallback prop until the promise is getting resolved. If showing the shimmer (loading indicator) is not desirable in some situations, then startTransistion API can used to show the old UI while new UI is being prepared. React do this without having to delete or remove the Suspense component or its props from your code.

# 4. Advantages and disadvantages of using this code splitting pattern?
Code-Splitting is a feature supported by bundlers like Webpack, Rollup, and Browserify (via factor-bundle. Bundlers can divide a large bundle of code into multiple smaller bundles that can be dynamically loaded at runtime. Bundling is great, but as your app grows, it reduces the performance of your app because your bundle grows too. And when you have a large bundle size, it impacts page load time negatively. Especially if you are including large third-party libraries.

**Advantages:** Code-splitting helps “lazy-load” the things currently needed by the user by loading the necessary code the user needs. This avoids loading code that the user may never need.

**Advantages:** Although this technique does not reduce the overall amount of code in your application, it can dramatically improve the performance of your app.

**Disadvantages:** Though the initial page load time is reduced, this increases the load time of each component thats loaded dynamically. Only the components that the user needs are loaded initially	There will be many http requests as the components are loaded dynamically

**Disadvantages:** imporve the user experience while loaded by showing suspense fallback/ loading dicator	But, this suspense boundary needs a new chunk of code to be written for showing the shimmer component

**Disadvantages:** If ur app is sufficiently small, code splitting might not provide any benefit esp if the overhead of making these requests might be more than the bytes saved.

# 5. When do we and why do we need suspense?
And. React Suspense is a react component that lets components “wait” for something before rendering. React Suspense only supports one use case which is loading components dynamically with React lazy(). 

## Ref Links Provided By Akshay
https://reactjs.org/docs/hooks-custom.html
https://beta.reactjs.org/apis/react/lazy#suspense-for-code-splitting
https://beta.reactjs.org/reference/react/startTransition