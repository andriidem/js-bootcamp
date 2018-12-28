let myArray = getSavedNotes()

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

window.addEventListener('storage', function(e){
    if(e.key === 'notes'){
        myArray = JSON.parse(e.newValue)
        renderNotes(myArray, filters)
    }
})

const date1 = new Date('August 18 2018 07:30:00')
const date2 = new Date('January 01 2019 00:00:00')

const date1TimeStamp = date1.getTime()
const date2TimeStamp = date2.getTime()


if(date1TimeStamp < date2TimeStamp){
    console.log(date1.toString())
}
else if(date2TimeStamp < date1TimeStamp) {
    console.log(date2.toString())
}

const now = moment()
console.log(now.minute(1))