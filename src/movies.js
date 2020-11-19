
import React, { Component } from 'react';
import Users from './users';

class Movies extends Component{
    render(){
      const movies = Object.keys(this.props.movies).map( movie => this.props.movies[movie]);
      
      return (
        <div>
     		{movies.map(movie => {
            const profiles = this.props.profiles.filter(profile => profile.favoriteMovieID === movie.id);
            const text = profiles.length > 0 ? 'Liked by' : 'None of the current users liked this movie';
            return ( 
                    <div key={movie.id}>
                            <h2>{movie.name}</h2>
                            <p>{text}</p>
                            <Users profiles={profiles} users={this.props.users}/>
                        </div>     
                        )
                })}
            </div>
                );
    }
}

export default Movies