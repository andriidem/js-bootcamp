const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const noteId = location.hash.substring(1)
let myArray = getSavedNotes()
let note = myArray.find(function(note){
    return note.id === noteId
})
if(note === undefined){
    location.assign('/index.html')
}


noteTitle.value = note.title
noteBody.value = note.body

//Change note title


noteTitle.addEventListener('input', function(e){
    note.title = e.target.value
    saveNotes(myArray)
})

//Change note body

noteBody.addEventListener('input', function(e){
    note.body = e.target.value
    saveNotes(myArray)
})

//Remove notes and sends back to home page
const removeNoteFromEditScreen = document.querySelector("#remove-note")
removeNoteFromEditScreen.addEventListener('click', function(e){
    removeNote(note.id)
    saveNotes(myArray)
    location.assign('/index.html')
})

window.addEventListener('storage', function(e){
    if(e.key === 'notes'){
        myArray = JSON.parse(e.newValue)
        note = myArray.find(function(note){
            return note.id === noteId
        })
        if(note === undefined){
            location.assign('/index.html')
        }
        
        
        noteTitle.value = note.title
        noteBody.value = note.body
    }
})