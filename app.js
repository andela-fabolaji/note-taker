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
        this.author = author;
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
        if (typeof(note_id) !== 'number' || note_id >= this.notes.length || note_id < 0) return false;
        return true;
    }

    /**
     * This method checks if the 'this.notes'
     * is empty. Returns 'true' if empty and false if not empty
     *
     * @return {boolean}
     */
    isEmptyNotes() {
        if (this.notes.length === 0) return true;
        return false;
    }

    /**
     * This method accepts a single param note_content
     * creates a new note and add it to 'this.notes'
     *
     * @param {string} note_content
     *
     */
    create(note_content) {
        note_content = note_content.toString();
        this.notes.push(note_content);
    }

    /**
     * This method returns a message if there are no notes 
     * and prints notes to the console if there are notes
     *
     * @return {string} 
     *
     */
    listNotes() {
        if (this.isEmptyNotes()) return 'No notes up yet';


        for (let i = 0; i < this.notes.length; i++) {
            console.log('Note ID: ' + [i]);
            console.log([this.notes[i]]);
        }

        console.log('\n By Author ' + [this.author]);
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

        if (this.isValidNoteId(note_id)) {
            note_id = parseInt(note_id);
        } else {
            response = 'Invalid id';
        }

        response = this.notes[note_id];
        
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
        
        search_text = search_text.toString();
        let search_result = [];
        let note_id = [];

        if (search_text.length === 0) {
            console.log('cannot retrieve empty search query');
        }
        
        if (isEmptyNotes()) {
            console.log('You currently have no notes');
        }

        for (let i = 0; i < this.notes.length; i++) {
            if (this.notes[i].indexOf(search_text) >= 0) {
                search_result.push(this.notes[i]);
                note_id.push(i);
            }
        }

        if (search_result.length >= 1) {
            console.log('Showing results for: ' + [search_text]);
            for (let i; i < search_result.length; i++) {
                console.log('Note ID: ' + note_id[i]);
                console.log([search_result[i]]);
            }
            console.log('\n By Author ' + [this.author]);
        } else {
            console.log('No results found');
        }
    }

    /**
     * This method returns a message if there are no notes 
     * and prints notes to the console if there are notes
     *
     * @return {string} 
     *
     */
    deleteNote(note_id) {

        if (this.isValidNoteId(note_id)) {
            note_id = parseInt(note_id);
        } else {
            console.log('Invalid ID');
        }

        this.notes.splice(note_id, 1);
        console.log('Note on id: ' + note_id.toString() + ' has been successfully removed');
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

        if (this.isValidNoteId(note_id) && new_content.toString().length !== 0){
            note_id = parseInt(note_id);
        } else {
            msg = 'Unable to update. Please check that your note id is valid and new content is not empty';
        }

        if (!this.isEmptyNotes()) {
            this.notes[note_id] = new_content;
            msg = 'Note successfully updated';
        } else {
            msg = 'You can\'t update an empty list';
        }

        console.log(msg);
     }

}