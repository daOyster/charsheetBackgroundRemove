// Turns the background grey on dndbeyond character sheets
try{
    // This is the name of the class that sets the background
    let classOfBackground = 'body-rpgcharacter-sheet';

    // Get all of the elements in the document with the above class name 
    var backgroundElements = document.getElementsByClassName(classOfBackground);

    // Set the background color to #808080 on all elements with the class name;
    for(let i = 0; i < backgroundElements.length; i++){
        backgroundElements[i].style.background = '#808080';
    }
} catch(e){
    // log any errors
    console.log('Character Sheet removal error: '+e);
}