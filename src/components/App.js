import React from 'react';
import Navbar from "./Navbar";
import {data} from "../data";
import MovieCard from "./MovieCard";
class App extends React.Component {
    componentDidMount() {
        const { store } = this.props ;
        store.subscribe(()=> {
            console.log('Updated');
            this.forceUpdate();
        })
        // make api call
        // dispath action
        store.dispatch({
            type: 'ADD_MOVIES',
            movies: data
        });
        console.log('State', this.props.store.getState());



    }

    render() {
        const movies = this.props.store.getState();
        console.log("Render");
        return (
            <div className="App">
                <Navbar/>
                <div className="main">
                    <div className="tabs">
                        <div className="tab">
                            Movies
                        </div>
                        <div className="tab">
                            Favourites
                        </div>
                    </div>
                    <div className="list">
                        {movies.map((movie, index) => (
                            <MovieCard movie={movie} key={`movies-${index}`}/>))}
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
