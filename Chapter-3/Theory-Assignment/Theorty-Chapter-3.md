# What is JSX?
 React components use a syntax extension called JSX to represent that markup. JSX looks a lot like HTML, but it is a bit stricter and can display dynamic information.
Is like HTML syntax but not exact HTML. Tag syntax is neither a string nor HTML. It’s syntax extension which has the full power of JavaScript. 

Each React component is a JavaScript function that may contain some markup that React renders into the browser. React components use a syntax extension called JSX to represent that markup. JSX looks a lot like HTML, but it is a bit stricter and can display dynamic information. The best way to understand this is to convert some HTML markup to JSX markup.

 JSX is a syntax extension, while React is a JavaScript library.

Superpower of JSX
```python
const element = <h1>Hello, world!</h1>; 
```
The Above code is much easy than the below mention code
```python
React.createElement(
  'div',
  {className: 'sidebar'},
  ‘HELLO Word’	
)
```
Super powers of JSX.
JSX makes it easier to write or add HTML in React.
JSX can easily convert HTML tags to react elements.
It is faster than regular JavaScript.
JSX allows us to put HTML elements in DOM without using appendChild() or createElement() method.
As JSX is an expression, we can use it inside of if statements and for loops, assign it to variables, accept it as arguments, or return it from functions.
JSX prevents XSS (cross-site-scripting) attacks popularly known as injection attacks.
It is type-safe, and most of the errors can be found at compilation time.

# JSX just provides syntactic sugar for the React.createElement(component, props, ...children) function.  
You can easily write…
```python
Const bookName = ‘Wings of Fire’
const Title3 = () => (  /// this is react functional component
    <div>
        <p>This is title three</p>
<p>{bookName}</p>
<p>{ 5 * 8}</p>
    </div>
)
```

# Role of type attribute in script tag? What options can I use there?
The type attribute specifies the type of the script.
The type attribute identifies the content between the <script> and </script> tags
text/javascript : It is the basic standard of writing javascript code inside the <script> tag.
Syntax
<script type="text/javascript"></script>
text/ecmascript : this value indicates that the script is following the EcmaScript standards.
module: This value causes the code to be treated as a JavaScript module. The processing of the script contents is deferred. The charset and defer attributes have no effect. Unlike classic scripts, module scripts require the use of the CORS protocol for cross-origin fetching.
text/babel : This value indicates that the script is a babel type and required bable to transpile it.
text/typescript: As the name suggest the script is written in TypeScript.

# {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.
A: The Difference is stated below:
•	{TitleComponent}: This value describes the TitleComponent as a javascript expression or a variable. The {} can embed a javascript expression or a variable inside it.
•	<TitleComponent/> : This value represents a Component that is basically returning Some JSX value. Its self closing component which return JSX value.
•	<TitleComponent></TitleComponent> : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.
Example
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>




