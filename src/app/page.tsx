import Image from "next/image";

let data = [
  {
    question: "What is React?",
    answer:
      "React is a front-end JavaScript library developed by Facebook in 2011.It follows the component based approach which helps in building reusable UI components.It is used for developing complex and interactive web and mobile UI.Even though it was open-sourced only in 2015, it has one of the largest communities supporting it.",
    code: ""
  },
  {
    question: "What are the features of React?",
    answer:
      `<ul className="list-disc">
      <li>It uses the virtual DOM instead of the real DOM.</li>
      <li>It uses server-side rendering.</li>
      <li>It follows uni-directional data flow or data binding.</li>
    </ul>`,
    code: ""
  },
  {
    question: "List some of the major advantages of React.",
    answer:
      " React is a front-end JavaScript library developed by Facebook in 2011.It follows the component based approach which helps in build in reusable UI components.It is used for developing complex andinteractive web and mobile UI.Even though it was open- sourced only in 2015, it has one of the largest communities supporting it.",
    code: ""
  },
  {
    question: "What are the limitations of React?",
    answer:
      "React is just a library, not a full-blown framework Its library is very large and takes time to understand It can be little difficult for the novice programmers to understand Coding gets complex as it uses inline templating and JSX",
    code: ""
  },
  {
    question: "What is JSX?",
    answer:
      "JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand. This file makes applications robust and boosts its performance.",
    code: `render(){
      return(        
            
  <div>
               
  <h1> Hello World from Edureka!!</h1>
   
           </div>
   
      );
  }`
  },
  {
    question: " What do you understand by Virtual DOM? Explain its works.",
    answer:
      `A virtual DOM is a lightweight JavaScript object which originally is just a copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties. React’s render function creates a node tree out of the React components. It then updates this tree in response to the mutations in the data model which is caused by various actions done by the user or by the system
      Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.
      Then the difference between the previous DOM representation and the new one is calculated.
      Once the calculations are done, the real DOM will be updated with only the things that have actually changed.`,
    code: ` 
    `
  },
  {
    question: " Why can’t browsers read JSX?",
    answer:
      `Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.`,
    code: ""
  },
  {
    question: "How different is React’s ES6 syntax when compared to ES5?",
    answer:
      `require vs import
      // ES5
      var React = require('react');
       
      // ES6
      import React from 'react';
      export vs exports
   
      // ES5
      module.exports = Component;
       
      // ES6
      export default Component;
      component and function
     
      // ES5
      var MyComponent = React.createClass({
          render: function() {
              return
       
      <h3>Hello Edureka!</h3>
      ;
          }
      });
       
      // ES6
      class MyComponent extends React.Component {
          render() {
              return
       
      <h3>Hello Edureka!</h3>
      ;
          }
      }
      props
     
      // ES5
      var App = React.createClass({
          propTypes: { name: React.PropTypes.string },
          render: function() {
              return
       
      <h3>Hello, {this.props.name}!</h3>
      ;
          }
      });
       
      // ES6
      class App extends React.Component {
          render() {
              return
       
      <h3>Hello, {this.props.name}!</h3>
      ;
          }
      }
      state
      
      // ES5
      var App = React.createClass({
          getInitialState: function() {
              return { name: 'world' };
          },
          render: function() {
              return
       
      <h3>Hello, {this.state.name}!</h3>
      ;
          }
      });
       
      // ES6
      class App extends React.Component {
          constructor() {
              super();
              this.state = { name: 'world' };
          }
          render() {
              return
       
      <h3>Hello, {this.state.name}!</h3>
      ;
          }
      }`,
    code: ""
  },
  {
    question: "In React, everything is a component.” Explain",
    answer:
      `Components are the building blocks of a React application’s UI. These components split up the entire UI into small independent and reusable pieces. Then it renders each of these components independent of each other without affecting the rest of the UI.`,
    code: ""
  },
  {
    question: "What is the purpose of render() in React?",
    answer:
      `Each React component must have a render() mandatorily. It returns a single React element which is the representation of the native DOM component. If more than one HTML element needs to be rendered, then they must be grouped together inside one enclosing tag such as <form>, <group>,<div> etc. This function must be kept pure i.e., it must return the same result each time it is invoked.`,
    code: ""
  },
  {
    question: " How can you embed two or more components into one?",
    answer:
      "We can embed components into one in the following way:",
    code: `class MyComponent extends React.Component{
      render(){
          return(          
               
  <div>
                 
  <h1>Hello</h1>
   
                  <Header/>
              </div>
   
          );
      }
  }
  class Header extends React.Component{
      render(){
          return
   
  <h1>Header Component</h1>
     
     };
  }
  ReactDOM.render(
      <MyComponent/>, document.getElementById('content')
  );`
  },
  {
    question: "What is Props?",
    answer:
      "Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component. This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data",
    code: ""
  },
  {
    question: "What is a state in React and how is it used?",
    answer:
      "States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components. They are accessed via this.state().",
    code: ""
  },
  {
    question: "Differentiate between states and props.",
    answer:
      `Conditions	State	Props
      1. Receive initial value from parent component	Yes	Yes
      2. Parent component can change value	No	Yes
      3. Set default values inside component	Yes	Yes
      4. Changes inside component	Yes	No
      5. Set initial value for child components	Yes	Yes
      6. Changes inside child components	No	Yes`,
    code: ""
  },
  {
    question: "How can you update the state of a component?",
    answer:
      "State of a component can be updated using this.setState().",
    code: `class MyComponent extends React.Component {
      constructor() {
          super();
          this.state = {
              name: 'Maxx',
              id: '101'
          }
      }
      render()
          {
              setTimeout(()=>{this.setState({name:'Jaeha', id:'222'})},2000)
              return (                                 
   
  <div>
                     
  <h1>Hello {this.state.name}</h1>
       
  <h2>Your Id is {this.state.id}</h2>
   
                     </div>
   
              );
          }
      }
  ReactDOM.render(
      <MyComponent/>, document.getElementById('content')
  );`
  },
  {
    question: "What is arrow function in React? How is it used?",
    answer:
      "Arrow functions are more of brief syntax for writing the function expression. They are also called ‘fat arrow‘ (=>) the functions. These functions allow to bind the context of the components properly since in ES6 auto binding is not available by default. Arrow functions are mostly useful while working with the higher order functions.",
    code: `//General way
    render() {    
        return(
            <MyInput onChange={this.handleChange.bind(this) } />
        );
    }
    //With Arrow Function
    render() {  
        return(
            <MyInput onChange={ (e) => this.handleOnChange(e) } />
        );
    }`
  },
  {
    question: "What is React?",
    answer:
      "",
    code: ``
  },
  {
    question: " Differentiate between stateful and stateless components.",
    answer:
      `Stateful Component	Stateless Component
      1. Stores info about component’s state change in memory	1. Calculates the internal state of the components
      2. Have authority to change state	2. Do not have the authority to change state
      3. Contains the knowledge of past, current and possible future changes in state	3. Contains no knowledge of past, current and possible future state changes
      4. Stateless components notify them about the requirement of the state change, then they send down the props to them.	4. They receive the props from the Stateful components and treat them as callback functions.`,
    code: ``
  },
  {
    question: ` What are the different phases of React component’s lifecycle?`,
    answer: `There are three different phases of React component’s lifecycle:

    Initial Rendering Phase: This is the phase when the component is about to start its life journey and make its way to the DOM.
    Updating Phase: Once the component gets added to the DOM, it can potentially update and re-render only when a prop or state change occurs. That happens only in this phase.
    Unmounting Phase: This is the final phase of a component’s life cycle in which the component is destroyed and removed from the DOM.`,
    code: ``

  },
  {
    question: `Explain the lifecycle methods of React components in detail.`,
    answer: `Some of the most important lifecycle methods are:

    componentWillMount() – Executed just before rendering takes place both on the client as well as server-side.
    componentDidMount() – Executed on the client side only after the first render.
    componentWillReceiveProps() – Invoked as soon as the props are received from the parent class and before another render is called.
    shouldComponentUpdate() – Returns true or false value based on certain conditions. If you want your component to update, return true else return false. By default, it returns false.
    componentWillUpdate() – Called just before rendering takes place in the DOM.
    componentDidUpdate() – Called immediately after rendering takes place.
    componentWillUnmount() – Called after the component is unmounted from the DOM. It is used to clear up the memory spaces.`,
    code: ``

  },

  {
    question: `. What is an event in React?`,
    answer: `In React, events are the triggered reactions to specific actions like mouse hover, mouse click, key press, etc. Handling these events are similar to handling events in DOM elements. But there are some syntactical differences like:

    Events are named using camel case instead of just using the lowercase.
    Events are passed as functions instead of strings.
    The event argument contains a set of properties, which are specific to an event. Each event type contains its own properties and behavior which can be accessed via its event handler only.`,
    code: ``

  },

  {
    question: ` How do you create an event in React?`,
    answer: ``,
    code: `class Display extends React.Component({    
      show(evt) {
          // code   
      },   
      render() {      
          // Render the div with an onClick prop (value is a function)        
          return (            
             
  <div onClick={this.show}>Click Me!</div>
   
          );    
      }
  });`

  }
  ,
  {
    question: ``,
    answer: ``,
    code: ``

  }


];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl  font-mono text-sm flex flex-col items-center gap-10">
        {data?.map((el, i) => <div className="flex-col gap-4" key={i}>

          <h1 className="text-3xl bold text-yellow-300  font-bold relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
            {i + 1}- {el.question}
          </h1>
          <br />
          <h2 className="text-2xl bold  font-bold">
            {el.answer}
          </h2>
          <br />
          {el.code != "" && <div className="bg-gray-900 p-4 rounded-md">
            <pre className="text-gray-200"><code className="text-green-400">
              {el.code}
            </code></pre>
          </div>}

        </div>)}






      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
