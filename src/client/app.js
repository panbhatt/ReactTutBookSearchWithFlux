import React from 'react'
import ReactDOM from 'react-dom';
import Container from 'muicss/lib/react/container';
import Appbar from 'muicss/lib/react/appbar';


import Data from './data.js' ;
import Home from './components/container/home' ;


window.React = React ;

class App extends React.Component {

  constructor(props) {
    super(props) ;
  }

  render() {

    let s1 = {verticalAlign: 'middle'};
   let s2 = {textAlign: 'right'};

    return (
      <Container fluid={true}>
          <Appbar>
             <table width="100%" className="mui-table">
               <tbody>
                 <tr style={s1}>
                   <td className="mui--appbar-height">Book Search App</td>
                   <td className="mui--appbar-height" style={s2}>User</td>
                 </tr>
               </tbody>
             </table>
          </Appbar>
          <Home {...Data}></Home>


      </Container>
    )

  }

}


ReactDOM.render(
   <App/>, document.getElementById('react-container')
 );
