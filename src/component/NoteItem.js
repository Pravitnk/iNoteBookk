import React, {useContext} from 'react'
import noteContext from '../context/notes/notesContext';


const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    //function to delte a note
    
    const { note, updateNote } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title text-center">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className='far fa-trash-alt mx-3' onClick={()=>{deleteNote(note._id);
                         props.showAlert('Note Deleted successfully ', 'success');}}></i>
                    <i className='far fa-edit mx-3' onClick={()=>{updateNote(note)}}></i>
                    <p className="card-text">{note.tag}</p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
