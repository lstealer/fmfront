
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { TagsInput } from "react-tag-input-component";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


const fileTypes = ["JPG", "PNG", "GIF","txt","docx"];


function DragDrop() {
  const [file, setFile] = useState(null);
  const [tags, setTags] = useState([]);
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const handleChange = (file) => {
    setFile(file);
    console.log(file)
  };
  const onTypeError = (file) =>{
    setFile({"name":"Wrongtype"})
  }
  
  const uploadOnclick=()=>{
    console.log(file+","+tags+","+title+","+description)
  }

  const onChange =(tags) =>{
    setTags(tags)
    console.log(tags)
  }

  return (
    <Form>
      <h1>Upload Form</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control  value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Please Enter Title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" value={description} onChange={(e)=>setDescription(e.target.value)} rows={3} placeholder="Please Enter Description" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>File</Form.Label>
        <FileUploader  handleChange={handleChange} name="file" onTypeError={onTypeError}  types={fileTypes} dropMessageStyle   />
        <Form.Text className="text-muted">{file==null?'':file.name}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Tags</Form.Label>
        <TagsInput
          value={tags}
          onChange={onChange}
          name="fruits"
          placeHolder="enter tags"
        />
        <Form.Text className="text-muted">{tags}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Button variant="primary" onClick={uploadOnclick}>Upload</Button>
      </Form.Group>
    </Form>
  );
}

export default DragDrop;