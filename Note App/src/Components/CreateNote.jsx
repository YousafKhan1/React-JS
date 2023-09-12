import React from 'react'


const CreateNote = ({inputText, setInputText, saveHandler}) => {
    const char= 100;
    const charLimit = char - inputText.length;
  return (
    <div className='note'>
        <textarea
        cols={10}
        rows={5}
        placeholder='Type...'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        maxLength={100}
        >
        </textarea>
        <div className='note_footer'>
            <span className='label'>{charLimit} Left</span>
            <button className='note_save' onClick={saveHandler}>Save</button>
        </div>
    </div>
  )
}

export default CreateNote