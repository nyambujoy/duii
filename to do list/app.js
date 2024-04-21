const addButton = document.querySelector('.add');
const noteDiv = document.querySelector('.noteDiv');
const myForm = document.querySelector('#myform');
const titleValue = document.querySelector('#title')
const desc = document.querySelector('.desc');
const duedateValue = document.querySelector('#duedate');
const categoryValue = document.querySelector('#category');
const display = document.querySelector('.display');
const noteList = [];
const catDiv = document.querySelector('.catjoy')

addButton.addEventListener('click', () => {
    // console.log('hello world')
    noteDiv.style.display = 'block';
});


myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    addToList()
    displayNote(noteList)
    // createCategoryButton(categoryValue.value.trim());
    // categoryValue.value = '';
    createCategory()
    categoryValue.value = '';


})

function Notes(title, desc, duedate, category) {
    this.title = title;
    this.desc = desc;
    this.duedate = duedate;
    this.category = category;
}
function addToList() {
    const title = titleValue.value.trim()
    const description = desc.textContent;
    const duedate = duedateValue.value.trim()
    const category = categoryValue.value.trim()
    // console.log(title, duedate, category)


    const newList = new Notes(title, description, duedate, category)




    noteList.push(newList)
    console.log(noteList)
    return noteList

}

function displayNote(noteList) {
    display.innerHTML = '';

    for (let i = 0; i < noteList.length; i++) {
        const titleDisplay = document.createElement('h2');
        titleDisplay.textContent = noteList[i].title
        const descDisplay = document.createElement('p');
        descDisplay.textContent = noteList[i].desc
        const duedateDisplay = document.createElement('p');
        duedateDisplay.textContent = noteList[i].duedate
        const categoryDisplay = document.createElement('h3');
        categoryDisplay.className = 'categoryDs'
        categoryDisplay.textContent = noteList[i].category

        display.append(titleDisplay, descDisplay, duedateDisplay, categoryDisplay);
    }

}


function createCategory() {
    // Create a Set to store unique category names
    const uniqueCategories = new Set();

    // Iterate over each note in the noteList
    noteList.forEach(note => {
        // Add the category of the current note to the Set
        uniqueCategories.add(note.category);
    });

    // Convert the Set to an array to iterate over unique categories
    uniqueCategories.forEach(category => {
        // Check if a button with the category already exists
        if (!document.querySelector(`button[data-category="${category}"]`)) {
            // Create a new button element
            const catButton = document.createElement('button');
            // Set the text content of the button to the category
            catButton.textContent = category;
            // Add a data-category attribute to store the category
            catButton.setAttribute('data-category', category);
            // Add a class to the button
            catButton.classList.add('catButton');
            // Add an event listener to the button
            catButton.addEventListener('click', () => {
                const clickedCategory = catButton.getAttribute('data-category');

                // Filter the noteList to get only the notes with the clicked category
                const filteredNotes = noteList.filter(note => note.category === clickedCategory);

                // Display only the notes with the clicked category
                displayNote(filteredNotes);
                noteDiv.style.display = 'none';
            });
            // Append the button to the catDiv element
            catDiv.append(catButton);
        }
    });
}


