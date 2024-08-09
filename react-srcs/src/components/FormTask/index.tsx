import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import BtnAddTask from '../Buttons/BtnAddTask';
import axios from 'axios';

type FormTaskProps = {
    getPosts: () => void
}

const FormTask = ({getPosts}: FormTaskProps) => {
  const [show, setShow] = useState(false);


  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const saveTask = async () => {

    const payload: Posts = {
        title: title,
        desc: desc
    }

    await axios.post("http://localhost:8000/todos", payload);

    
    setShow(false)
    getPosts()


  }

  return (
    <>
      <div className='alinharBtns'>
          <BtnAddTask onClick={() => setShow(true)}>
            +
          </BtnAddTask>
      </div>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>What will you procrastinate now?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task title</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control 
              as="textarea" 
              rows={2}
              onChange={(e) => setDesc(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={saveTask}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormTask;