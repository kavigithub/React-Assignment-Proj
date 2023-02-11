# Is JSX mandatory for React?
Ans : No, it’s not mandatory but its good practice and recommended by react. But it will definitely make developer life easy. With the help of JSX developer can make user friendly code.

# Is ES6 mandatory for React?
ANS : No, but is highly recommendable, with the help of ES6 we can write complex code in readable and more meaning format.

# {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent> <TitleComponent/>} in JSX?
ANS : 
{TitleComponent}…this will work as react element you can pass any {var || expression || any js code in it}
{<TitleComponent/>}…with the help of this code we can call react functional component.
{<TitleComponent> <TitleComponent/>}…you can return number of children list in it or call nested functional component...with the help of this syntax we can write multiple line code in it…
Eg
```python
{<TitleComponent> 
<Header />
 <Body />
 <Footer/>
<TitleComponent/>}
```

# How can I write comments in JSX?
// for single line … shortcut on windows ..(ctrl + /);
{/* <p>This is some text</p> */} …for  multiple lines.... shortcut on windows (Shift + Alt + A)
Tip: Instead of manually typing the comment, you can use Cmd + / (Mac) or Ctrl + / shortcut keys to add or remove the comment.

# What is <React.Fragment></React.Fragment> and <></> ?
Ans:
Fragments let you group things without leaving any trace in the browser HTML tree.

Its a component exported by React. Fragments let you group a list of children without adding extra nodes to the DOM. If you don’t want to created extra div inspite of your root parent or any other new div or tag then you can used <React.Fragment>. This will can only ONE PARENT. This will work as empty tag
Eg 
 ```python
const testFrag = () => {
  return (
    <React.Fragment key=’test1’>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    </React.Fragment>
  )
 }
```

Or you can work like this… but in the below syntax you can’t pass attribute…like className or style but you can add key attribute for both eg

 ```python
const testFrag = () => {
  return (
    < key=’emptyTest’>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    </>
  )
 }
```

In your browser if you check code this will look like this in console
```python
<div id=”root”>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>	
</div>
```
 
# What is Virtual DOM?
ANS: 
It is representation of your Actual Dom. But its not Actual DOM. The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.  The virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.
Virtual DOM is a virtual representation of the Document Object Model that is kept as temporary memory storage for all the changes brought to the user interface and is synced with the real DOM by a library such as ReactDOM.

In React world, the term “virtual DOM” is usually associated with React elements since they are the objects representing the user interface. React, however, also uses internal objects called “fibers” to hold additional information about the component tree. They may also be considered a part of “virtual DOM” implementation in React.

Reference Link: https://atulkawasthi.medium.com/what-is-the-dom-virtual-dom-afea2de36a00

# What is Reconciliation in React?
ANS : 
To make high performance app react uses ’diffing algorithm’. This will help you when you make changes in your app easily. The diffing algorithm uses to differentiate one tree of React elements with another different tree of React elements (you may consider or think of DOM tree) to determine which parts need to be changed. This will find out the differciation, It will re-render only the specific portion which needs to be changed. This called reconciliation. 

The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation. 

# What is React Fiber?
Ans:
Its new Reconciliation engine which is responsible for diff algorithm.  Its main goal is to enable incremental rendering of the virtual DOM.
Ref Link: https://github.com/acdlite/react-fiber-architecture

# Why we need keys in React? When do we need keys in React? 
 Keys are necessary to improve performance of your React app. Keys help React identify which items have changed (added/removed/re-ordered). To give a unique identity to every element inside the array, a key is required.
 ```python
const numbers = [
  {
    id: 1,
    name: 'XYZ'
  },
  {
    id: 2,
    name: 'uiop'
  },
  {
    id: 3,
    name: 'ABC'
  }
];
const ListItems = numbers.map((item) =>
  <li key={item.id}>
    {item.name}
  </li>
);
```

# Can we use index as keys in React?
Ans:
Yes, but that is the last option and it is not good practices.  React recommends that you do not use indexes as keys, since it could impact performance negatively and could lead to some unstable component behaviour.

To help you decide, Three conditions which these examples have in common:

1) the list and items are static–they are not computed and do not change;
2) the items in the list have no ids;
3) the list is never reordered or filtered.
When all of them are met, you may safely use the index as a key.
Ref Link: https://adhithiravi.medium.com/why-do-i-need-keys-in-react-lists-dbb522188bbb

# What is props in React? Ways to
Props are like passing param and receiving arguments in React functional component. props are the attributes you want the element to have. In react functional component call or invoke we pass the actual data (in JS functin argument term) to the props in it and then when we define react functional component declaration we get that props as an Parameter with the same said attr or props name. With the help of those props, u can access the API properties.

We use props in React to pass data from one component to another (from a parent component to a child component(s)). Props is just a shorter way of saying properties. They are useful when you want the flow of data in your app to be dynamic.

props allow us reuse a component's logic dynamically. This means that the data in the component will not be static. So for every other component using that logic, its data can be modified to fit the requirements.

 eg. This is without destructuring
```python
 const TestOne = (props) => { <!-- {name, tool = 'Design'} with destructuring and default val-->
    const name = props.name;  // const myPropName = props.name
    const age = props.age;
    return(
        <div>
          <h1>My name is {name} and age is {age}</h1> // <h1>My name is {myPropName}.</h1>
        </div>
    )
 } 

const App() {
  return (
    <TestOne name='Zitopia' age='23'/>
  )
 }

```
Note that the variable name is not the prop itself. If I had created a variable this way – const myPropName = props.name – and used the variable in my template like this
```python
<h1>My name is {myPropName}.</h1>
``` 
then the code would still work perfectly if I were to do this: 
```python
<TestOne name="Ihechikara" age="66"/>'.
``` 
The name attribute is derived from props.name and not from the variable name containing the prop.
Refernce Link : https://www.freecodecamp.org/news/how-to-use-props-in-react/


 # What is a Config Driven UI ?
 An application that could easily adapt with just a few changes in this configuration is called Config Driven UI.

CDD(Config Driven Development) is a different way to build applications.

Traditionally we build applications like this:

Lead architects design around business requirements
Application is built and deployed
Changes are done through additional components (SOLID Principles) or painful refactor
With CDD we build applications like this:

Independent components are built first, starting at the atomic level
An interface (usually JSON) is defined to compose the higher level UI
Combination of reusable components and JSON blueprint allows developers to easily build up and out
At its core, CDD is a way of using modularity to build a loosely coupled set of components that are then composed together using a common interface.
Ref Link: 
https://iamrajatsingh1.medium.com/config-driven-ui-c8e93b730993
https://medium.com/captech-corner/an-intro-to-configuration-driven-development-cdd-48a1c088baa9

# Ref Link
<ul>
	<li>Code Link: <a href="https://bitbucket.org/namastedev/namaste-react-live/src/master/" target="_blank">https://bitbucket.org/namastedev/namaste-react-live/src/master/</a></li>
	<li>React without JSX: <a href="https://reactjs.org/docs/react-without-jsx.html" target="_blank">https://reactjs.org/docs/react-without-jsx.html</a></li>
	<li>Virtual DOM: <a href="https://reactjs.org/docs/faq-internals.html" target="_blank">https://reactjs.org/docs/faq-internals.html</a></li>
	<li>Reconciliation: <a href="https://reactjs.org/docs/reconciliation.html" target="_blank">https://reactjs.org/docs/reconciliation.html</a></li>
	<li>React Fiber Architecture: <a href="https://github.com/acdlite/react-fiber-architecture" target="_blank">https://github.com/acdlite/react-fiber-architecture</a></li>
	<li>React Without ES6: <a href="https://reactjs.org/docs/react-without-es6.html" target="_blank">https://reactjs.org/docs/react-without-es6.html</a></li>
	<li>Index Keys as Anti-Pattern: <a href="https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/" target="_blank">https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/</a></li>
</ul>






