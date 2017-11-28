### My React Journey  Samples with react 0.16
### State managed by **FLUX**.

*Note:* This is an exercise to make the UI same as that of, however managing state of the application with the help of FLUX framework. 

This is a react based application where we are creating some sample components and displaying the UI with the help of **MUICSS** library components. 

## Steps
1. Clone the Project
2. Make sure that webpack is installed globally "npm install -g webpack" or "yarn global add webpack"
3. Run "npm install http-server -g" so that we can run our react application with the bundled JS (by webpack) and html file. 
3. run npm install
4. run 'webpack' so that webpack can monitor and build the files at run-time.
5. run "http-server" in the dist folder (in another shell/window) 
6. open http://localhost:8080 and it will display a sample application. 
  Image 1: 
   <<<<   >>>>>>

  Image 2: 
   <<<<   >>>>>>	

Click around to play with the various functionality available. 

- Search something in the search box based upon the title
- Edit a specific Book present in the table. 
- Update the data regarding a specific book. 
- Add a new book in the table. 
- Delete an existing book in the table. 

### Code files Description  ###
1. **App.js **-> This is the main reactjs file and everything is being loaded by this file. 
2. **data.js** -> Since we are maintaing the state , this file will contain sample data that would be used initially to display the records in the table. 
3. **constants.js** This file will contain all the constants that will be used. E.g. all the click events constants which are used to identify the **TYPE** of **ACTION** that is being performed by the user. 
4. **stores.js** : This is the main file, which will be responsible for maintaining the STORE of the application (i.e. state). It is initialized with the data from data.js and contain all the functions that will be used to alter the state. It gets a DISPATCHER from actions file and register various internal functions on that ACTIONS/Events.
5. **actions.js** This file contain creation of the dispatcher and responsible for delgation of events with the data to the Dispatcher. Dispatcher has handlers against each of the events (in stores.js) file which will get fired. 
6. **home.js** This file acts as the root component of the application containing all the child components. Here we get the state initialized by the BookStore component in Stores.js file. Additionly, we will register listeners that will alter the state (not directly though) and every sub/child component will give automatically refreshed based on the props change.

  *NOTE* -> Some of the sub component will implement componentWillReceiveProps function to update the internal state of the component based upon what present in the new props.  

### Component Description ###
- **booklist.js** - This file will contain the table component that will be displayed on the left bottom side of the sample react application.It will dispatch all the actions to bookActions present in the actions.js file with the corressponding Event and Data associated with it.  
- **CrudBook.js** - This file will contain all the CRUD related operations on the UI like Add/Delete/Update. This is present in the right side of the application. This will selectively show Add/Update/Delete button based upon the state of the components. It will dispatch all the actions to bookActions present in the actions.js file with the corressponding Event and Data associated with it. 
- **searchbox.js** - This component will contain the search box present on the top left of the UI to filter down the search results based upon the SEARCHTEXT entered. It will dispatch all the actions to bookActions present in the actions.js file with the corressponding Event and Data associated with it.   

###Links:
[https://medium.com/a-beginners-guide-for-webpack-2](https://medium.com/a-beginners-guide-for-webpack-2 "WebPack  2- Begineers Guide, Good one")

[https://toddmotto.com/react-create-class-versus-component/](https://toddmotto.com/react-create-class-versus-component/ "react.createClass vs Component")

[https://mxstbr.blog/2017/02/react-children-deepdive/](https://mxstbr.blog/2017/02/react-children-deepdive/ "React Children Understanding")

###Flux: 
[https://spapas.github.io/2015/06/05/comprehensive-react-flux-tutorial/](https://spapas.github.io/2015/06/05/comprehensive-react-flux-tutorial/ "React Flux part - 1")

[https://spapas.github.io/2015/07/02/comprehensive-react-flux-tutorial-2/](https://spapas.github.io/2015/07/02/comprehensive-react-flux-tutorial-2/ "React Flux Part - 2")

[https://scotch.io/tutorials/creating-a-simple-shopping-cart-with-react-js-and-flux](https://scotch.io/tutorials/creating-a-simple-shopping-cart-with-react-js-and-flux "Flux with shopping Cart example")


