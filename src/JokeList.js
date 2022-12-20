import React from 'react';
import { connect } from 'react-redux';

const JokeList = (props)=> {

    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Type</th>
                    <th>ID</th>
                    <th>Setup</th>
                    <th>Punchline</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        // props.movies.map(movie=><MovieListItem key={movie.id} movie={movie}/>)
                    }
                </tbody>
            </table>
            
        </div>
    );
}

export default JokeList