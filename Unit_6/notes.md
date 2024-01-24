#React
    - created by facebook
    - is a clientside javascript library
    - Quickly renders on the page
    - companies transitioning more to react
    - netflix, uber, dropbox, airbnb
    - works through **Components**

# Rules of JSX
    - **Must** export for it to be used
    - **Must** be imported to be used.
    - **Must** be mounted to be used.
    - **Must** only return **One** JSX Element
        - should name components with pascal casing ex "PascalCasing"

# Creating a React App

    - 'npx create-react-app starting-next'
    - **npx create-react-app [your-project-name]**

## Points of interest
    - public
        - 'index.html': JavaScript being rendered to 'index.html'.
        - 'App.js': Main point where components are mounted. This is being rendered within 'index.js'

```js
/* 
    - Create a new folder within the component folder for a footer.
    - write a function that exports a single h6 element with a copyright.
    - type is the current year.
    
    - Import the component wihtin App.jsx
    - Mount at the bottom of the JSX be4ing returned in App.jsx
        - note: It doesn't need to be fixed to the bottom of the browser page

    Bonus: make the year 
        
*/
```

## About Me Challenge
```js
/* 
    Create a new folder called aboutme within the components folder.
    Create a new file inside the folder called AboutMe.jsx.
    Create a <p> tag that notes where you grew up. 
    Use variables for city and state.
    Create an unordered list with the last 3 places you have visited. (Target, Alaska, the Kitchen, etc.)
    Export the component.
    Import the component into App.jsx and mount it between the Header and Footer components.
    */
```




# State
- Helps modify data based on a condition
  - ex: 
    - offline/online status
    - session token storage
- Utilizes types of hooks
- Requires to be imported

`import { useState } from 'react'`

## `useState()`
- Structure:
  - `keyword [ variable, function ] = hook(initial value);`
  - The Process:

```js
function useState(startingData) {
  function updateState(newData) {
    startingData = newData;
  }
  return [startingData, updateState]
}


/* 
  ! Challenge:
    - Build out a Counter Component which will have two buttons (+), (-) and a span element that will take its value from a count state variable.
      - This should be within it's own folder.
    - Create two functions that will work as onClick event listeners.
      - One function will increment the current state.
      - One function will decrement the current state.
      
    Hard Mode:
      - Leave the count inside App.jsx
  */
 ```

 ## Re-Rendering
 - We can use a callback function to help with rendering processes.
 - useState can take raw value but also a callback function

 ex:
 ```jsx
 const [ count, setCount] = useState(0);
 //raw value
 const [count, setCount] = useState(()=> 0); //CB Function

 - Callback function renders initial value ONCE.
 ```