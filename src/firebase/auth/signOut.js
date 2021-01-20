import firebase from 'firebase/app';

export default () => {
    firebase.auth().signOut();
    console.log('%csigned out', "color:red; font-weight: 600")
}