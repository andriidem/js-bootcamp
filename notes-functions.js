// read existing notes from local Storage 

const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

if(notesJSON !==null) {
    return JSON.parse(notesJSON)
}
else{
    return []
}
}

//Save the notes to localStorage

const saveNotes = function (myArray) {
    localStorage.setItem('notes', JSON.stringify(myArray))
}

//Remove a note from the list

const removeNote = function (id){
    const noteIndex = myArray.findIndex(function(note){
        return note.id === id
    })
    if (noteIndex > -1) {
        myArray.splice(noteIndex, 1)
    }
}

//Generate DOM structure for a note

const generateNoteDOM = function (note){
    const noteE1 = document.createElement('div')
    const textE1 = document.createElement('a')
    const button = document.createElement('button')

    // Setup the remove note button
    button.textContent = 'x'
    noteE1.appendChild(button)
    button.addEventListener('click', function(e){
        removeNote(note.id)
        saveNotes(myArray)
        renderNotes(myArray, filters)
    })
   
    //Setup the note title text
    
    if(note.title.length > 0){
        textE1.textContent = note.title
    }
    else{
        textE1.textContent = 'Unnamed Note'
    }
    textE1.setAttribute('href', `/edit.html#${note.id}`)
    noteE1.appendChild(textE1)
    return noteE1
}

//Render Application Notes

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = '<p>TEST</p>'

    filteredNotes.forEach(function(note){
       
       const noteE1 = generateNoteDOM(note) 
        document.querySelector('#notes').appendChild(noteE1)
    })
    
}