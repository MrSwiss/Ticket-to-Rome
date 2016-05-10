import uuid from 'node-uuid';
import IO from '../socket/IO';
import {
  SET_ROOMS,
  CREATE_ROOM,
  START_GAME,
} from '../actions';

class Rooms {

  // Utilities

  isOpen = room => room.get('status') === 'open';

  isPlayerOwner = (room, player) => room.get('owner').get('id') === player.get('id');

  containsPlayer = (room, player) => {
    const playerFound = room.get('players').find(p => p.get('id') === player.get('id'));
    if (playerFound) return true;
    return false;
  };




  // Services

  onActionButtonClick = (action, room, player) => {
    if (action === START_GAME) {
      IO.emit(action, room.get('id'));
    } else {
      IO.emit(action, {
        roomId: room.get('id'),
        playerId: player.get('id'),
      });
    }
  };




  // Actions

  setRoomsAction = rooms => ({
    type: SET_ROOMS,
    rooms,
  });




  // Helpers

  createRoomDispatch = name => (dispatch, getState) => {
    const player = getState().player;
    if (name === '' || !player.has('name')) return;

    IO.emit(CREATE_ROOM, {
      name,
      id: uuid.v4(),
      owner: player.get('id'),
    });
  };

}

export default new Rooms();