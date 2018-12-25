const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function(note){
    return note.id === noteId
})
if(note === undefined){
    location.assign('/index.html')
}

const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
noteTitle.value = note.title
noteBody.value = note.body

//Change note title


noteTitle.addEventListener('input', function(e){
    note.title = e.target.value
    saveNotes(notes)
})

//Change note body

noteBody.addEventListener('input', function(e){
    note.body = e.target.value
    saveNotes(notes)
})

//Remove notes and sends back to home page
const removeNoteFromEditScreen = document.querySelector("#remove-note")
removeNoteFromEditScreen.addEventListener('click', function(e){
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})