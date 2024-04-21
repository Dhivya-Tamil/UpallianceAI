import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar: [
        ["bold","italic","underline"],
        [{ list: "ordered"},{list: "bullet"}]
    ]
}
const TextEditor = () => {
    const[value,setValue] = useState("");
  return (
    <div className='container'>
    
      <div className="row">
      <h1 style={{textAlign:"center", marginBottom: "40px"}}>Rich Text Editor</h1>
        <div className="editor">          
            <ReactQuill theme='snow'
              value={value}
              onChange={setValue}
              className='editor-input'
              modules={modules}
            />
        </div>
      </div>
    </div>
  )
}

export default TextEditor
