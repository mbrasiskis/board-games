import React from 'react';
import { connect } from 'react-redux';

class BoardGames extends React.Component {
    newGame = {
        title: '',
        minPlayers: '',
        maxPlayers: ''
    };

    state = {
        search: '',
        game: this.newGame
    };

    onChange = (field, e) => {
        const game = Object.assign({}, this.state.game, {[field]: e.target.value});
        this.setState({game});
    };

    onAdd = () => {
        this.props.dispatch({type: 'addBoardGame', boardGame: this.state.game});
        this.setState({game: this.newGame});
    };

    onRemove = (i) => {
        this.props.dispatch({type: 'removeBoardGame', index: i});
    };

    onSearch = (e) => {
        this.setState({search: e.target.value});
    };

    render() {
        const boardGames = this.props.boardGames.reduce((games, game, i) => {
            if (game.get('title').toUpperCase().includes(this.state.search.toUpperCase())) {
                games.push(game.set('index', i));
            }
            return games;
        }, []);

        return (
            <div>
                <div>
                    <label>Search
                        <input type="text" value={this.state.search} onChange={this.onSearch} />
                    </label>
                </div>
                <div>
                    <label>Title
                        <input type="text" value={this.state.game.title} onChange={this.onChange.bind(this, 'title')}/>
                    </label>
                    <label>Min players
                        <input type="text" maxLength="2" value={this.state.game.minPlayers} onChange={this.onChange.bind(this, 'minPlayers')}/>
                    </label>
                    <label>Max players
                        <input type="text" maxLength="2" value={this.state.game.maxPlayers} onChange={this.onChange.bind(this, 'maxPlayers')}/>
                    </label>
                    <button onClick={this.onAdd}>Add</button>
                </div>
                <ul>
                    {boardGames.map((game) => {
                        return (
                            <li key={game.get('index')}>
                                <span>{game.get('title')}: {game.get('minPlayers')} - {game.get('maxPlayers')}players</span>
                                <button onClick={this.onRemove.bind(this, game.get('index'))}>Remove</button>
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
