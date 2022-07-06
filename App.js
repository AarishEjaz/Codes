import React from 'react';
import Searchinput from './Searchinput';
import axios from 'axios';
class App extends React.Component {
    constructor(props){
        super(props)
        this.onSearchSubmit=this.onSearchSubmit.bind(this)
    }


    onSearchSubmit(entry){
        console.log(entry)
        axios.get(`https://pixabay.com/api/?key=28461825-93cb1763ae892c3ca2d887e5c&q=${entry}&image_type=photo`)

    }


   render(){
    return (
        <div className='ui container' style={{marginTop:'100px', marginLeft:'300px'}}>
            <Searchinput onSearchSubmit={this.onSearchSubmit} />
        </div>
    )
   }
}
export default App;