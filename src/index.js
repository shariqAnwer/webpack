import '../src/index.css'
showNotes();
// import './index.css'

//if user adds a note, add it to the local storage

var notesObj;

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
    let addText = document.getElementById("addText");

    let notes = localStorage.getItem("notes");

    if(notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));

    addText.value = "";

    showNotes();
    
});

// function to show elements from localStorage

function showNotes(){
    let notes = localStorage.getItem("notes");

    if(notes == null){
        notesObj = [];
    } else{
        notesObj = JSON.parse(notes);
    }

    let html = "";

    notesObj.forEach(function(element, index){
        html += `<div class="noteCard">
            <div class="card-body">
                <h5 class="card-title">
                    Note ${index + 1}
                </h5>
                <p class="card-text">
                    ${element}
                </p>
        </div>
    </div>`;
    });

    let notesElm = document.getElementById("notes");

	if (notesObj.length != 0) notesElm.innerHTML = html;
	else
		notesElm.innerHTML = `Nothing to show!
		Use "Add a Note" section above to add notes.`;
}

