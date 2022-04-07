// React JS Tutorial - 1
// what is React
// open source library for building user interfaces
// Not a framework
// Focus on UI
// Rich echo system

// component Based Architecture
// Reusable code

// React is declarative
// Tell React what you want and React will build the actual UI
// DOM updates are handles gracefully in React

// Prerequisites
// HTML, CSS and JavaScript fundamentals
// ES6
// javascript - 'this' keyword, filter,map and reduce
/* ES6 - let & const, arrow function, template literals, default parameters,
  object literals, rest and spread operators and destructuring assignment*/

// Channel content -React
// Fundamentals HTTP Routing Redux Utilities

// summary
/*
React is an open source javascript library for building user interfaces.
React is a project created and maintained by Facebook.
React has more than a 100 thousand stars on GitHub and a huge community behind it.
React has become increasingly 
popular among developers and is also one of the most sought out skill-sets by companies right now.

React has a component based architecture. This lets you break down your application into small encapsulated parts which can then be composed to make more complex UI.
React is declarative.
React will make it painless for you to create complex UIs by abstracting away the difficult parts. 
React will handle efficiently updating and rendering just the right components in your application when your data changes. 
DOM updates which is one of the more expensive operations is handled gracefully in React. */

// React JS Tutorial - 2
// TOPIC - Folder structure
// Create-react-app
// There are two ways two create-react-app
// npx & npm
// npx create-react-app<project_name>
// npx = npm package runner
// npm
// npm install create-react-app-g (g for globally)
// create-react-app<project_name>
// Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.

// It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.

// React JS Tutorial - 3

// TOPIC - React Folder structure
// React initially contains 3root folder 4 files

// React JS Tutorial - 4
// TOPIC - components
/* Component describe a part of the user interface.
They are re-usable and can be nested inside other components
 There are two types of components - Stateless Functional Components and Stateful Class Components */

// React JS Tutorial - 5
// TOPIC - functional component
// properties(props)=> javascript functions => HTML(JSX)
// always start components file name pascal case
/*The simplest way to define a component is to write a JavaScript function.
 A valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element.
We call such components “function components” because they are literally JavaScript functions. 
  
All React component names must start with a capital letter. If you start a component name with a lowercase letter,
it will be treated like a built-in element like a <div> or a <span> . This is because of the way JSX works. In JSX, 
 rendering a component that begins with a lowercase letter compiles down to React.*/

// React JS Tutorial - 6
// TOPIC - class component
/* Class syntax is one of the most common ways to define a React component.
 While more verbose than the functional syntax, it offers more control in the form of lifecycle hooks.
Creating a class component is pretty simple; just define a class that extends Component and has a render function*/
// Functional vs Class component
// simple function = more feature rich
// use Func component as much as possible = Maintain their own private data - state
// Absence of 'this' Keyword = Complex UI logic
// Solution without using state = provide lifecycle hooks
// Mainly responsible for the UI = Stateful/Smart/Container
// Hooks

// React JS Tutorial - 7
// Hooks Update in 2018 using lifecycle method in function component

// React JS Tutorial - 8
//// TOPIC - JSX
/* JavaScript XML (JSX) is an extension to the JavaScript language syntax. With React, 
it's an extension to write XML-like code for elements and components. 
And just like XML, JSX tags have a tag name, attributes, and children.*/
// React.createElement expects 3 parameter(tag,null or {proprties}, string)
// jsx it makes can code easy and its convert to browser understand language.

// javascript XML(JSX) - Extension to the JavaScript language syntax. With React,
// Write XML-like code for elements and components.
// JSX tags have a tag name, attributes, children.*
// JSX is not a necessity for React application
// JSX makes your react code simpler and elegant

// JSX differences
// Class -> className
// for -> htmlFor
// camelCase property naming convention
// onClick -> onClick

// React JS Tutorial - 9
// TOPIC - REACT PROPS
// props is immutable once assign props value can't be changed
// in functional component we can accepts props value like props.something
// in class component we can also accept props value with help of this keyword like this.props.something

// React JS Tutorial - 10
// TOPIC - REACT State
//State is similar to props, but it is private and fully controlled by the component.
// props vs state
// props get passed to the component = state is managed within the component
// function parameters = variables declared in the function body
// props are immutable = state can be changed
// props-Functional Components = useStateHook-Functional Components
// this.props-Class Component = this.state-Class Component
//in class Component state is a object that is privately maintained inside a component
// state can be changed within the component

// React JS Tutorial - 11
// TOPIC - React setState
// In class component directly if modified state it will not changes UI in browser
// UI only changes only setState changes in Class component
// never modified state directly instead make use of setState
// when directly modified "state" react will not re-render the component
// when we use setState then react will re-render the component

/*whenever you need to execute some code after the state has been changed do not place that code
 right after the setState method instead place that code within the callback function
 that is passed as a second parameter to the setState method*/

//  summary
// Always Make use of the setState and never modified state directly
/* code has to be executed after the State method has been updated? place the code in the callback function
which is the second argument to the setState method*/
/* When you have to update state based on the previous state value,pass in a function as an
argument instead of the regular object
*/

// React JS Tutorial - 12
// TOPIC- Destructuring props and state
// there are two ways we can destructuring props in function component
// 1st one inside of a parameter ({name,hero name})
// 2nd one inside of  function body const{name,hero name} = props

// we can destructuring props in Class component
/*in class component inside of the render method we can destructuring props
const {name,heroName} = this.props
*/

// use of super keyword
// This is required when we need to access some variables of its parent class.

// React JS Tutorial - 13
// TOPIC - Event Handling
/*Any web application you create typically tends to have user interaction. When the user interacts with your app, events are fired. 
For example, mouse clicks, mouse over, key press, change event and so on. The application must handle such events and execute the 
necessary code*/
// we can use the event in functional and class component both
// In class component we use this keyword ex:- <Button onClick={this.ChangeValue}>click</Button>
// In functional component ex:- <Button onClick={ChangeValue}>clear</Button>
/* after adding callback function inside of onclick event no need mention bracket paranthesses.ex:- <Button onClick={ChangeVAlue()} 
if we missely add bracket paranthesses even before event is fired callback function is executed.
*/

// React JS Tutorial - 14
// TOPIC - Binding Event Handlers
// Shortcut for create class component (rce)
// shortcut for create constructor inside of class component(rconst)
/*Event Binding tells the browser that this function should be called whenever this event is triggered or,
 in other words whenever the event is trigged the function which is bind with the event should be called. 
 Bind creates a new function that will have this set to the first parameter passed to bind()
*/

// There are 4 ways to bind a function
// this keyword within our event handler is undefined
/* 'this' keyword is undefined because this used with a function returns 'window' object on the browser and 'global' object inside nodejs environment. 
Since 'react strict mode' is enabled, it is returning 'undefined'.*/
// this keyword is undefined an event handler and that is the reason event binding is necessary for react class component
/* 1st way use bind keyword Binding in the render method
<button onClick={this.ChangeValue.bind(this)}>Click</button> 
//2nd way using the arrow function in render method simply call the eventHandler  in arrow function body and return the value 
thats why we using after eventHandler bracket paranthesses() ex:-onClick={() => this.ChangeValue()}
<button onClick={() => this.ChangeValue()}>Click</button> 
// 3rd way more efficient way normally use all react application
 constructor(props) {
    super(props);

    this.state = {
      message: "steve",
    };
    this.ChangeValue = this.ChangeValue.bind(this);
  }

  <button onClick={() => this.ChangeValue}>Click</button> 
*/
