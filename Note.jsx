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

// React Folder structure
// React initially contains 3root folder 4 files

// React JS Tutorial - 4
// components
/* Component describe a part of the user interface.
They are re-usable and can be nested inside other components
 There are two types of components - Stateless Functional Components and Stateful Class Components */

// React JS Tutorial - 5
//  functional component
// properties(props)=> javascript functions => HTML(JSX)
// always start components file name pascal case
/*The simplest way to define a component is to write a JavaScript function.
 A valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element.
We call such components “function components” because they are literally JavaScript functions. 
  
All React component names must start with a capital letter. If you start a component name with a lowercase letter,
it will be treated like a built-in element like a <div> or a <span> . This is because of the way JSX works. In JSX, 
 rendering a component that begins with a lowercase letter compiles down to React.*/

// React JS Tutorial - 6
// class component
/* Class syntax is one of the most common ways to define a React component.
 While more verbose than the functional syntax, it offers more control in the form of lifecycle hooks.
Creating a class component is pretty simple; just define a class that extends Component and has a render function*/
// Functional vs Class component
// simple function = more feature rich
// use Func component as much as possible = Maintain their own private data - state
// Absence of 'this' Keyword = Complex UI logic
// Solution without using state = provide lifecycle hooks
// Mainly responsible for the UI = Stateful/Smart/Container
