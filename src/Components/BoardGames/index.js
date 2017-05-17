import React from 'react';
import {connect} from 'react-redux';

class BoardGames extends React.Component {
    state = {
        input: ''
    };

    onChange = (e) => {
        this.setState({input: e.target.value})
    };

    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.props.dispatch({type: 'addBoardGame', payload: this.state.input});
            this.setState({input: ''});
        }
    };

    onRemove = (i) => {
        this.props.dispatch({type: 'removeBoardGame', index: i});
    };

    render() {
        return (
            <div>
                <input type="text" value={this.state.input} onChange={this.onChange} onKeyPress={this.onKeyPress}/>
                <ul>
                    {this.props.boardGames.map((game, i) => {
                        return (
                            <li key={i}>{game}
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
