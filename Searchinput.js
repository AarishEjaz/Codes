import React from 'react';

class Searchinput extends React.Component {
    constructor(props){
        super(props)
        this.state={entry: ''}
        
        this.onFormSubmit=this.onFormSubmit.bind(this)
    }
    onFormSubmit(event){
        event.preventDefault();
        console.log(this.state.entry)
        this.propss.onSearchSubmit(this.state.entry)
    }


    render() {
        return(
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit}action='ui form'>
                    <div className='field'>
                        <div className='ui massive icon input'>
                          <input 
                          type="text" 
                          placeholder='search....'
                          onChange={(event)=>this.setState({entry: event.target.value})}
                          value={this.state.entry}
                          
                          />
                          <i className='search icon'> </i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Searchinput;

                          