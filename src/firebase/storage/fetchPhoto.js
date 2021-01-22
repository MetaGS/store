// Points to the root reference
var storageRef = firebase.storage().ref();

// Points to 'images'
var imagesRef = storageRef.child("images");

// Points to 'images/space.jpg'
// Note that you can use variables to create child values
var fileName = "space.jpg";
var spaceRef = imagesRef.child(fileName);

// File path is 'images/space.jpg'
var path = spaceRef.fullPath;

// File name is 'space.jpg'
var name = spaceRef.name;

// Points to 'images'
var imagesRef = spaceRef.parent;

/* 
*   in input type file:
    reference as doc.querySel('input');
    has <files> property which returns Files type, where each index is File type > which has <size>, <name>, <type> properties;
    Files is as array like, so you can run over;

*   input tag may have accept attribute, by which you can control type of files allowed


*/
//
