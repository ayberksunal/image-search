import React from 'react';
import axios from 'axios';
import Search from './Search';
import ImageList from './ImageList';

class App extends React.Component{

    state= {images: []}

    onSearchSubmit = async (entry) => {

        const response = await axios.get(`https://pixabay.com/api/?key=21284911-b2f4cc3f48a461fea3d5140c8&q=${entry}&image_type=photo`)
        this.setState({images:response.data.hits})
        
    }

    render(){
    return( 
        <div className='ui container' style={{marginTop:'30px'}} >
            <Search onSearchSubmit={this.onSearchSubmit}/>
            <ImageList images = {this.state.images} />
        </div>
    )
    }
}
export default App;