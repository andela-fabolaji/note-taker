'use strict';

class NotesApplication {
    
    constructor(author) {
        this.author = author;
        this.notes = [];
    }

    create(note_content) {
        note_content = note_content.toString();
        this.notes.push(note_content);
    }

    listNotes() {
        if (this.notes.length === 0) return 'No notes up yet';

        let i = 0;

        for (i; i < this.notes.length; i++) {
            console.log('Note ID: ' + i);
            console.log(this.notes[i]);
        }

        console.log('\n' + this.author);
    }

    get(note_id) {
        if (typeof(note_id) !== 'number' || note_id >= this.notes.length) return 'Invalid ID';
        return this.notes[note_id];
    }

    search(search_text) {
        
        search_text = search_text.toString();
        let i = 0;
        let search_result = [];

        if (search_text.length === 0) {
            search_result.push('cannot retrieve empty search query');
        }
        
        if (this.notes.length === 0) {
            search_result.push('You currently have no notes');
        }

        

        for (i; i < this.notes.length; i++) {
            if (this.notes[i].indexOf(search_text) >= 0) {
                search_result.push(this.notes[i]);
            }
        }

        return search_result;
    }
}
