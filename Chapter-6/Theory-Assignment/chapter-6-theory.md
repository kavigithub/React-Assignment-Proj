# Theory Assignment: Chapter - 06 Exploring the world

## 1. What is a Microservice?
ans:
Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams.

Microservices architectures make applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new features.

## 2. What is Monolith architecture?
Monolith Architecture is the traditional model of software development where the application is self-contained and independent of other applications. It is also called Single Tier (One tier) architecture where a single application acts as both client and server. A small change in a single function requires compiling and testing the entire application, which is against the today's agile approach.

## 3. Monolithic vs. Microservices Architecture
With monolithic architectures, all processes are tightly coupled and run as a single service. This means that if one process of the application experiences a spike in demand, the entire architecture must be scaled. Adding or improving a monolithic application’s features becomes more complex as the code base grows. This complexity limits experimentation and makes it difficult to implement new ideas. Monolithic architectures add risk for application availability because many dependent and tightly coupled processes increase the impact of a single process failure.

With a microservices architecture, an application is built as independent components that run each application process as a service. These services communicate via a well-defined interface using lightweight APIs. Services are built for business capabilities and each service performs a single function. Because they are independently run, each service can be updated, deployed, and scaled to meet demand for specific functions of an application.

![https://d1.awsstatic.com/Developer%20Marketing/containers/monolith_1-monolith-microservices.70b547e30e30b013051d58a93a6e35e77408a2a8.png](https://d1.awsstatic.com/Developer%20Marketing/containers/monolith_1-monolith-microservices.70b547e30e30b013051d58a93a6e35e77408a2a8.png)

## 4. Why do we need a useEffect Hook?
we want to run some additional code after React has updated the DOM. The useEffect Hook allows you to perform side effects or just effect in your components. Network requests, manual DOM mutations, fetching data, directly updating the DOM, timers and logging are common examples of effects. useEffect accepts two arguments. The second argument is optional.

This Hook, tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. 

useEffect(<function>, <dependency>);

useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.

1. No dependency passed:
useEffect(() => {
  //Runs on every render
});

2. An empty array:
useEffect(() => {
  //Runs only on the first render
}, []);

3. Props or state values:
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);

eg: 
```python
function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
}
```

ref Links: 
1) https://www.w3schools.com/react/react_useeffect.asp#:~:text=The%20useEffect%20Hook%20allows%20you,useEffect%20accepts%20two%20arguments.
2) https://reactjs.org/docs/hooks-effect.html

## 5. What is Optional Chaining
Ans: The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called is undefined or null, it returns undefined instead of throwing an error.

```python
const customer = {
  name: "Carl",
  details: {
    age: 82,
    location: "Paradise Falls", // Detailed address is unknown
  },
};
const customerCity = customer.details?.address?.city;

// This also works with optional chaining function call
const customerName = customer.name?.getName?.(); // Method does not exist, customerName is undefined
```

## 6. What is Shimmer UI
A shimmer screen is a version of the UI that doesn’t contain actual content. Instead, it mimics the page’s layout by showing its elements in a shape similar to the actual content as it is loading and becoming available (i.e. when network latency allows).

A shimmer UI resembles the page’s actual UI, so users will understand how quickly the web or mobile app will load even before the content has shown up. It gives people an idea of what’s about to come and what’s happening (it's currently loading) when a page full of content/data takes more than 3 - 5 seconds to load.

ref link: https://tyler-technologies.github.io/design-guide-gallery/shimmer

## 7. What is the difference between js expression and js statement?
Ans:  An expression is a block of code that evaluates to a value. A statement is any block of code that is performing some action. The distinction between an expression and a statement is important because an expression is a subset of a statement. You can use an expression wherever a statement is expected, but this does not work vice versa.

For example, x = 10 is an expression that performs an assignment. This expression itself evaluates to 10
Such expressions make use of the assignment operator.

On the flip side, the expression 10 + 9 simply evaluates to 19
. These expressions make use of simple operators.

The arguments of a function must be an expression, not statements. For example, we can pass in a variable assignment expression as an argument, but we cannot declare a variable in the argument as it is a statement.

Suppose we have the following function:

```python
const function myFunc(arg){
    console.log(arg);
}
```
It is reasonable to pass an object or an expression, such as a ternary operator, in the argument as follows:

```python
myFunc("This is okay");
myFunc(true ? "This is okay" : None);
```

JavaScript statements often start with a statement identifier to identify the JavaScript action to be performed.
eg: 
for ... in	| for ... of | if ... else ... else if

## 8. What is Conditional Rendering, explain with a code example
Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.

You can return a JSX expression conditionally with an if statement.
You can conditionally save some JSX to a variable and then include it inside other JSX by using the curly braces.
In JSX, {cond ? <A /> : <B />} means “if cond, render <A />, otherwise <B />”.
In JSX, {cond && <A />} means “if cond, render <A />, otherwise nothing”.
The shortcuts are common, but you don’t have to use them if you prefer plain if.

**if Statement**
Creating branching logic with JavaScript’s if and return statements. In React, control flow (like conditions) is handled by JavaScript.
```python
function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
```

**Conditional (ternary) operator (? :)**
with above coding eg you can also jot down like this in Item function
```python
return (
  <li className="item">
    {isPacked ? name + ' ✔' : name}
  </li>
);
```
You can read it as “if isPacked is true, then (?) render name + ' ✔', otherwise (:) render name”.

**Logical AND operator (&&)**

Another common shortcut you’ll encounter is the JavaScript logical AND (&&) operator. Inside React components, it often comes up when you want to render some JSX when the condition is true, or render nothing otherwise. With &&, you could conditionally render the checkmark only if isPacked is true:

with above coding eg you can also jot down like this in Item function
```python
return (
  <li className="item">
    {name} {isPacked && '✔'}
  </li>
);
```
You can read this as “if isPacked, then (&&) render the checkmark, otherwise, render nothing”.

ref link: https://beta.reactjs.org/learn/conditional-rendering


## 9. What is CORS?

Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

ref link: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

## 10. What is async and await?

Async/await are keywords to make a normal function behave like a asynchornous funtion.

async function always returns a promise, any values are automatically wrapped inside a resolved promise.

await keyword makes javascript wait until the promise settles, and return its result. await cannot be used in a non-async function.

For example : Let's try to write a function getRestaurants() to fetch restaurant data from a public API.

First, let's try to write it with Promise chaining : fetch(url) returns a promise (resolve or reject), which can be consumed by the then (success) handler or catch (error) handler

```python
function getRestaurants() {
  fetch(url).then((data)=>{data.json()})
    .then((json)=>{
    console.log(json); 
  }).catch((err)=>{
    console.log(err);
  })
}
```
Using async and await : await waits until fetch(url) returns a promise with the data and headers which again needs to be resolved using .json() method to get the data. If any of promise inside try block is rejected, the control jumps to catch block.

```python
async function getRestaurants() {
  try {
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);
  } catch(err) {
    console.log(err);
  }
}
```

## 11. What is the use of const json = await data.json(); in getRestaurants()
In seen in the above example, the fetch API call returns a promise response with header, in order to get the data in json format, we have to resolve that promise using data.json()



