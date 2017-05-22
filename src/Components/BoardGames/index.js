import React from 'react';
import {connect} from 'react-redux';

class BoardGames extends React.Component {
    defaultState = {
        title: '',
        minPlayers: '',
        maxPlayers: ''
    };

    state = this.defaultState;

    onChange = (field, e) => {
        this.setState({[field]: e.target.value})
    };

    onAdd = () => {
        this.props.dispatch({type: 'addBoardGame', boardGame: this.state});
        this.setState(this.defaultState);
    };

    onRemove = (i) => {
        this.props.dispatch({type: 'removeBoardGame', index: i});
    };

    render() {
        return (
            <div>
                <label>Title
                    <input type="text" value={this.state.title} onChange={this.onChange.bind(this, 'title')}/>
                </label>
                <label>Min players
                    <input type="text" maxLength="2" value={this.state.minPlayers} onChange={this.onChange.bind(this, 'minPlayers')}/>
                </label>
                <label>Max players
                    <input type="text" maxLength="2" value={this.state.maxPlayers} onChange={this.onChange.bind(this, 'maxPlayers')}/>
                </label>
                <button onClick={this.onAdd}>Add</button>
                <ul>
                    {this.props.boardGames.map((game, i) => {
                        return (
                            <li key={i}>{game.title}: {game.minPlayers} - {game.maxPlayers} players
                                <button onClick={this.onRemove.bind(this, i)}>Remove</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    };
}

function mapStateToProps(state) {
    return {
        boardGames: state.get('games')
    };
}

export default connect(mapStateToProps)(BoardGames);
