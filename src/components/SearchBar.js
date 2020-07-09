import React, { Component } from 'react'
import {Paper,TextField} from '@material-ui/core'

export default class SearchBar extends Component {
  state={
      searchTerm:''
  }
handleChange=(event)=>{
    this.setState({
        searchTerm: event.target.value
    })
}
handleSubmit=(event)=>{
    const {searchTerm}=this.state;  //destructuring
    event.preventDefault();
    this.props.onFormSubmit(searchTerm);
}

    render() {
        const {searchTerm}=this.state;  //destructuring

        return (
           <Paper elevation={6} style={{padding:"10px"}}>
               <form onSubmit={this.handleSubmit}>
                   <TextField onChange={this.handleChange} value={searchTerm} fullWidth label="Search..." />

               </form>
           </Paper>
        )
    }
}
