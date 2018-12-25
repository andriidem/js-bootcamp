const myArray = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(myArray, filters)

document.querySelector('#create-note').addEventListener('click', function(e){
    const id = uuidv4()
    myArray.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(myArray)
    location.assign(`/edit.html#${id}`)  

})



document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(myArray, filters)
})


document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value)
})