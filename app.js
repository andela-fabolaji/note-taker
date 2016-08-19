'use strict';

/**
 *
 * Class NotesApplication
 * A simple note application taker that helps you
 * create, update, delete, search and list notes
 * 
 * @author Abolaji Femi
 *
 */
class NotesApplication {
    
    /**
     * @constructor
     *
     */
    constructor(author) {
        if (typeof(author) == 'undefined'){
            this.author = 'Anonymous';
        } else {
            this.author = author.toString();
        }
        this.notes = [];
    }

    /**
     * This method checks if a note id passed 
     * into it is valid
     * 
     * @param {int} note_id
     * @return {boolean}
     */
    isValidNoteId(note_id) {
        let validity = true;
        
        if (isNaN(note_id) || note_id >= this.notes.length || note_id < 0 || note_id.toString().length === 0) validity = false;
        return validity;
    }

    /**
     * This method checks if the 'this.notes'
     * is empty. Returns 'true' if empty and false if not empty
     *
     * @return {boolean}
     */
    isEmptyNotes() {
        let isEmpty = false;
        
        if (this.notes.length === 0) isEmpty = true;
        
        return isEmpty;
    }

    /**
     * This method accepts a single param note_content
     * creates a new note and add it to 'this.notes'
     *
     * @param {string} note_content
     *
     */
    create(note_content) {
        
        let msg;
        
        if (note_content && note_content.toString().length > 0) {
        	note_content = note_content.toString();
            this.notes.push(note_content);
            msg = 'Note successfully created';
        } else {
            msg = 'Cannot create an empty note!';
        }
        
        console.log(msg);
        
    }

    /**
     * This method returns a message if there are no notes 
     * and prints notes to the console if there are notes
     *
     * @return {string} 
     *
     */
    listNotes() {
        
        let msg;
        
        if (this.isEmptyNotes()) { 
            msg = 'No notes up yet';
        } else {

            for (let i = 0; i < this.notes.length; i++) {
                console.log('Note ID: ' + i);
                console.log(this.notes[i]);
                console.log('\n');
            }
            
            msg = '\n By Author ' + [this.author];
        }
        console.log(msg);
    }

    /**
     * This method takes a positional argument 'note_id'
     * and prints notes to the console if there are notes
     *
     * @param {int} note_id
     *
     */
    getNote(note_id) {
        let response;
        

		if (!this.isEmptyNotes()) {
			
			note_id = parseInt(note_id);
			
			if (this.isValidNoteId(note_id)) {
            	response = this.notes[note_id];    
        	} else {
            	response = 'Invalid Id';
        	}	
		} else {
			response = 'You currently have no notes';
		}
        

        console.log(response);
    }

    /**
     * This method accepts a search parameter
     * and prints out a corresponding list of matches
     *
     * @param {string} search_text
     *
     */
    search(search_text) {
        let search_result = [];
        let note_id = [];
        let msg;
        
        if (this.isEmptyNotes()) {
            msg = 'You currently have no notes';
        } else {
        
            if (typeof(search_text) === 'undefined' || search_text.toString().length === 0) {
                msg = 'Cannot retrieve empty search query';
            } else {
                search_text = search_text.toString().toLowerCase();
    
                for (let i = 0; i < this.notes.length; i++) {
                    if (this.notes[i].toLowerCase().indexOf(search_text) >= 0) {
                        search_result.push(this.notes[i]);
                        note_id.push(i);
                    }
                }
        
                if (search_result.length >= 1) {
                	let count = 0;
                    console.log('Showing results for: ' + [search_text]);
                    for (let i = 0; i < search_result.length; i++) {
                        console.log('Note ID: ' + note_id[i]);
                        console.log([search_result[i]]);
                        count++;
                    }
                    console.log('\n By Author ' + [this.author]);
                    msg = count + ' result(s) returned';
                } else {
                    msg = 'No result found';
                }
            }
        }
        console.log(msg);
    }

    /**
     * This method returns a message if there are no notes 
     * and prints notes to the console if there are notes
     *
     * @return {string} 
     *
     */
    deleteNote(note_id) {
        
        let msg;
        
        if (this.isEmptyNotes === true) {
            msg = 'There are no notes to delete';
        } else {
        	
            if (this.isValidNoteId(note_id)) {
                this.notes.splice(note_id, 1);
                msg = 'Note on id: ' + note_id.toString() + ' has been successfully removed';
            } else {
                msg = 'Invalid ID';
            }
        }
        

        console.log(msg);
        
    }

    /**
     * This method takes in two positional arguments 'note_id'
     * and 'new_content' and updates the corresponding note 
     * with the new content
     *
     * @param {int} note_id
     * @param {string} new_content
     *
     */
     editNote(note_id, new_content) {
        let msg;

        if (this.isValidNoteId(note_id) && new_content){
            note_id = parseInt(note_id);
            
            if (!this.isEmptyNotes()) {
	            this.notes[note_id] = new_content.toString();
	            msg = 'Note successfully updated';
	        } else {
	            msg = 'You can\'t update an empty list';
	        }
        } else {
            msg = 'Unable to update. Please check that your note id is valid and new content is not empty';
        }

        console.log(msg);
     }

}