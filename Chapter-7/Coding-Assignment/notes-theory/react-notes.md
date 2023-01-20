Ref Links :
https://reactjs.org/docs/glossary.html

# Reconciliation
When a component’s props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called “reconciliation”.

# Keys
A “key” is a special string attribute you need to include when creating arrays of elements. Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside an array to give the elements a stable identity.

Keys only need to be unique among sibling elements in the same array. They don’t need to be unique across the whole application or even a single component.

Don’t pass something like Math.random() to keys. It is important that keys have a “stable identity” across re-renders so that React can determine when items are added, removed, or re-ordered. Ideally, keys should correspond to unique and stable identifiers coming from your data, such as post.id.

# Components
React components are small, reusable pieces of code that return a React element to be rendered to the page. The simplest version of React component is a plain JavaScript function that returns a React element:
```python

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
Components can also be ES6 classes:

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
Components can be broken down into distinct pieces of functionality and used within other components. Components can return other components, arrays, strings and numbers. A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be a reusable component. Component names should also always start with a capital letter (<Wrapper/> not <wrapper/>). See this documentation for more information on rendering components.

**props**
props are inputs to a React component. They are data passed down from a parent component to a child component.

Remember that props are readonly. They should not be modified in any way:

// Wrong!
props.number = 42;
If you need to modify some value in response to user input or a network response, use state instead.

props.children
props.children is available on every component. It contains the content between the opening and closing tags of a component. For example:

<Welcome>Hello world!</Welcome>
The string Hello world! is available in props.children in the Welcome component:

```python
function Welcome(props) {
  return <p>{props.children}</p>;
}
For components defined as classes, use this.props.children:

class Welcome extends React.Component {
  render() {
    return <p>{this.props.children}</p>;
  }
}
```

**State**
A component needs state when some data associated with it changes over time. For example, a Checkbox component might need isChecked in its state, and a NewsFeed component might want to keep track of fetchedPosts in its state.

The most important difference between state and props is that props are passed from a parent component, but state is managed by the component itself. A component cannot change its props, but it can change its state.

For each particular piece of changing data, there should be just one component that “owns” it in its state. Don’t try to synchronize states of two different components. Instead, lift it up to their closest shared ancestor, and pass it down as props to both of them.

