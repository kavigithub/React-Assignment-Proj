# 1)what are various way to add images into our App? Explain with codes.
ans.
Using the <img/> tag you will need to provide it with two values:"src" (source): the URL or the path of the image."alt" (alternate): an alternate text in case of the image not being available.
Always add images into 'images' folder, this folder should be located in to your 'src/asset' then import it into your component
supposed Header.js is your component file. Then add the img like this.
## With the <img/> tag
```python
import logo from "../img/kavita-logo.png";
```
and add it in your jsx like this
```python

export default function App() {
  
  return  <img src={logo} alt="React logo" style={{width:'60px'}}/>
}    
```

## Inserting a local background image
just like before you would import the image. Then you would insert it using CSS URL(…) or using inline styling as shown below.
```python
import logo from "../img/kavita-logo.png";

export default function App() {
  return <div style={{ backgroundImage: logo }}>Overlay text</div>
}
```

## Inserting img with live path
```python
<img src="https://reactjs.org/logo-og.png" alt="React Image" />  
```

# 2)What would happen if we do console.log(useState())?
Ans. This will give you 2 array. [undefined, ƒ]
      1. undefined array
      2. function  

# 3)How will useEffect behave if we don't add a dependency array?
Ans. 
1) If you do not provide dependency array at all and only provide a function to useEffect, it will run after every render.

This can lead to problems when you're attempting to update state within your useEffect Hook.

2) If you forget to provide your depednecies correctly & you are setting a piece of local state when the state is updated, the default behaviour of React is to re-render the component. And therefore, since if you are not providing dependency array to useEffect, it runs after every single render without the dependencies array, we will have an infinite loop

```python
function MyComponent() {
    const[varName, setVarName] = useState([]);
    useEffect(() => {
            fetchData().then(myData => setData(myData))
    // Error! useEffect runs after every render without the dependencies array, causing infinite loop

    })///not define dependency array
}
```
After the first render, useEffect will be run, state will be updated, which will cause a re-render, which will cause useEffect to run again, starting the process over again ad infinitum.

This is called an infinite loop and this effectively breaks our application. If you are updating state within your useEffect, make sure to provide an empty dependencies array. If you do provide an empty array, which I recommend you do by default for any time that you use useEffect, this will cause the effect function to only run once after the component has rendered the first time.

A common example for this is to fetch data. For a component, you may just want to fetch data once, put it in state, and then display it in your JSX.

function MyComponent() {
     const[varName, setVarName] = useState([]); 

     useEffect(()=> {
             fetchData().then(myData => setData(myData))
             // Correct! Runs once after render with empty array
     },[])

     return <ul>{varName.map(item => <li key={item}>{item}</li>)}</ul>
}

# 4) what is SPA?
Ans : SPA(Single page Application). In simple word we can say we don't want to load anthing from server. React is great for single page applications because it allows developers to create applications that are mobile first and responsive. React allows developers to create applications that are fast and easy to update, which is great for mobile applications.

An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown.

This therefore allows users to use websites without loading whole new pages from the server, which can result in performance gains and a more dynamic experience, with some tradeoff disadvantages such as SEO, more effort required to maintain state, implement navigation, and do meaningful performance monitoring.

# 5) What is the difference between Client Side Routing and Server Side Routing?
Ans:
## What is Routing?
Routing is the mechanism by which requests are connected to some code. It is essentially the way you navigate through a website or web-application. By clicking on a link, the URL changes which provides the user with some new data or a new webpage.

## Server-side
When browsing, the adjustment of a URL can make a lot of things happen. This will happen regularly by clicking on a link, which in turn will request a new page from the server. This is what we call a server-side route. A whole new document is served to the user.

A server-side request causes the whole page to refresh. This is because a new GET request is sent to the server which responds with a new document, completely discarding the old page altogether.

## Client-side
A client-side route happens when the route is handled internally by the JavaScript that is loaded on the page. When a user clicks on a link, the URL changes but the request to the server is prevented. The adjustment to the URL will result in a changed state of the application. The changed state will ultimately result in a different view of the webpage. This could be the rendering of a new component, or even a request to a server for some data that the application will turn into some HTML elements.

It is important to note that the whole page won’t refresh when using client-side routing. There are just some elements inside the application that will change.

ref link: https://medium.com/@wilbo/server-side-vs-client-side-routing-71d710e9227f