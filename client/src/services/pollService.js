import firebase from "../firebase";

const db = firebase.ref("/polls");

const getAll = () => {
  return db;
};

const getOne = () => {
  const key = ""
  return db.child(key);
};

const create = (data) => {
  return db.push(data);
};

const update = (key, data) => {
  return db.child(key).update(data);
};

const remove = (key) => {
  return db.child(key).remove();
};

const removeAll = () => {
  return db.remove();
};

const One = (id) => {

  firebase().ref('/polls').orderByChild("id").equalTo(id).on('value', function (snapshot) {
       //snapshot would have list of NODES that satisfies the condition
}

export default {
  getAll,
  getOne,
  create,
  update,
  remove,
  removeAll,
  One,
};
