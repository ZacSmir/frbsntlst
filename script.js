
var name;
var nameInput = $("#name-input")
var noteInput = $("#note-input")
var noteList = $("#note-list")

nameInput.keydown(function(e) {
  if (e.which == 13) {
    var name = $("#nameInput").val()
    console.log(name)
    addListItem(name + "/notes", "WASSAP")
    // we have a new name! Now what?
  }	
})

function getNotesForName(name) {  
  onNewListItem(name + "/notes", function(note) {
    console.log(note)
  })
}

noteInput.keydown(function(e) {
  if (e.which == 13) {    
    addListItem(name + "/notes", noteInput.val())
  }
})
