import React from 'react';
import Navbar from "./Navbar";
import {data} from "../data";
import MovieCard from "./MovieCard";
import {addMovies} from "../actions";

class App extends React.Component {
    componentDidMount() {
        const {store} = this.props;
        store.subscribe(() => {
            console.log('Updated');
            this.forceUpdate();
        })
        // make api call
        // dispath action
        store.dispatch(addMovies(data));
        console.log('State', this.props.store.getState());


    }

    isMovieFavourite = (movie) => {
        const {favourites} = this.props.store.getState();

        const index = favourites.indexOf(movie);
        return index !== -1;

    }

    render() {
        const {list} = this.props.store.getState(); // {list: [] , favourites: []}
        console.log("Render");
        console.log(this.props.store.getState());
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
                        {list.map((movie, index) => (
                            <MovieCard movie={movie} key={`movies-${index}`} dispatch={this.props.store.dispatch}
                                       isFavourite={this.isMovieFavourite(movie)}
                            />))}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
