import Players from '../../services/Players';
import Rooms from '../../services/Rooms';


export async function create (player, callback) {
  try {
    const res = await Players.create(player);
    callback(res);
    Rooms.emitAll(this.io.sockets);
  } catch (e) {
    console.error(e);
  }
}

export async function changeName ({ id, name }, callback) {
  try {
    const res = await Players.changeName(id, name);
    callback(res);
    Rooms.emitAll(this.io.sockets);
  } catch (e) {
    console.error(e);
  }
}

export async function reset (id, callback) {
  try {
    const res = await Players.reset(id);
    callback(res);
  } catch (e) {
    console.error(e);
  }
}

export async function disconnect () {
  try {
    const clientId = await Rooms.leaveAll(this.client);
    await Players.delete(clientId);
    Rooms.emitAll(this.io.sockets);
  } catch (e) {
    console.error(e);
  }
}