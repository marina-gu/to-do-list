## To Do List -React App

### This is an online application for managing and planning your time.
----
![img](https://github.com/marina-gu/to-do-list/blob/main/todolist.png)

### In the application you can

 - Mark tasks as To Do and Done.

 - Delete tasks.

 - View tasks in a clear and intuitive interface.


![gif](https://github.com/marina-gu/to-do-list/blob/main/animation%20(2).gif)

----
### Open [link](https://beamish-jelly-73bbcc.netlify.app) to view it in your browser
----
### Choosing the Technology Stack

To build the To Do list-App, HTML, CSS, and JavaScript were used for the Frontend and a framework for the Backend such as React and Node.js.

```Javascript
import { Component } from 'react';

class ToDoList extends Component {
    constructor(props){
      super(props);
      
      this.state = {
        todo: [],
        done: [],
        input: ''
      }
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
```
----
