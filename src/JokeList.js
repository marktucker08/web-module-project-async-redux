import React from 'react';
import { connect } from 'react-redux';

const JokeList = (props)=> {
console.log(props.jokes)
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
                        // props.jokes.length > 1 ? 
                        props.jokes.length >=1 ? props.jokes.map(joke => {
                            <tr className={joke.id}>
                                <td>{joke.type}</td>
                                <td>{joke.id}</td>
                                <td>{joke.setup}</td>
                                <td>{joke.punchline}</td>
                            </tr> 
                        }) 
                        : <tr className={props.jokes.id}>
                                <td>{props.jokes.type}</td>
                                <td>{props.jokes.id}</td>
                                <td>{props.jokes.setup}</td>
                                <td>{props.jokes.punchline}</td>
                            </tr> 
                    }
                </tbody>
            </table>
            
        </div>
    );
}

const mapStateToProps = state => {
    return {
        jokes: state.jokes
    }
}

export default connect(mapStateToProps, {})(JokeList);