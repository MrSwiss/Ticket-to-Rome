import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Rooms from './Rooms';
import CreateRoom from './CreateRoom';
import SetPlayer from './SetPlayer';


class Lobby extends Component {

  constructor(props) {
    super(props);
    this.game = props.game;
    this.state = { cssClasses: 'lobby visible' };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.game.has('id')) {
      this.setState({ cssClasses: 'lobby' });
    } else {
      this.setState({ cssClasses: 'lobby visible' });
    }
  }

  render() {
    return (
      <section className={this.state.cssClasses}>
        <SetPlayer />
        <Rooms />
        <CreateRoom />
      </section>
    );
  }
}

Lobby.propTypes = {
  game: PropTypes.object.isRequired,
};




const mapStateToProps = state => ({
  game: state.game,
});

export default connect(mapStateToProps)(Lobby);
