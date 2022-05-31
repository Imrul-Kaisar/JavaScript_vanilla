let main = document.getElementById('main')

// create input area
let createInputArea = document.createElement('div')
createInputArea.className = 'input-area'
createInputArea.id = 'input-area'

main.appendChild(createInputArea)

// create input field
let inputArea = document.getElementById('input-area')
let createInputField = document.createElement('input')
createInputField.id = 'input-field'
createInputField.setAttribute('type', 'text')
createInputField.setAttribute('placeholder', 'List Item')

let inputStyle = {
    padding:    '15px 20px',
    fontSize: '16px',
    fontFamily: 'Areal'
}
Object.assign(createInputField.style, inputStyle)

inputArea.appendChild(createInputField)


// create submit field
let createSubmitBtn = document.createElement('input')
createSubmitBtn.setAttribute('type', 'submit')
createSubmitBtn.value = 'Add'
createSubmitBtn.id = 'add'

inputArea.appendChild(createSubmitBtn)


// create list area
let createListArea = document.createElement('div')
createListArea.id = 'list-area'
main.appendChild(createListArea)


// create list item
let listArea = document.getElementById('list-area')
let createList = document.createElement('ul')
createList.id = 'item-list'
listArea.appendChild(createList)

let itemList = document.getElementById('item-list')

function createAListItem(value){
    let createListItem = document.createElement('li')
    createListItem.className = 'list-item'
    itemList.appendChild(createListItem)

    let itemText = document.createElement('span')
    itemText.className = 'item-text'
    itemText.innerText = value
    createListItem.appendChild(itemText)

    let createCross = document.createElement('span')
    createCross.className = 'cross'
    createCross.innerText = 'x'
    createListItem.appendChild(createCross)

    createCross.addEventListener('click', (e) => {
        itemList.removeChild(createListItem)
    })
}




// Enter keypress event listener
let inputField = document.getElementById('input-field')
inputField.addEventListener('keypress', (e) => {
    let value = e.target.value
    if(e.key === 'Enter' && value !== ''){
        createAListItem(value)
        e.target.value = ''
    }
})

// add list item by click on ADD button
let submit = document.getElementById('add')
submit.addEventListener('click', (e) => {
    let value = inputField.value
    if( value !== ''){
        createAListItem(value)
        inputField.value = ''
    }
})
