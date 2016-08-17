
// Note Taker Application

// create class NotesApplication

class NotesApplication {
    
    constructor(author) {
        this.author = author;
        this.notes = [];
    }

    create(note_content) {
        this.notes.push(note_content);
    }

    listNotes() {

    }

    get(note_id) {
        return notes[note_id];
    }

    search(search_text) {
        
        search_text = search_text.toString();

        if (search_text == '') {
            return 0;
        } else {

        }
    }
}