import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams} from 'react-router-dom';

function AddUser({ users, setUsers }) {
  let navigate = useNavigate()
  let params= useParams()
  
  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [mobile,setMobile] = useState("")
  let [dob,setDob] = useState("")

  // let handleSubmit = ()=>{
  //   let newUser = { name,email,mobile,dob }
  //   let newArray = [...users]
  //   newArray.push(newUser)
  //   setUsers(newArray)
  //   navigate('/dashboard')
  // }

  let handleSubmit = ()=>{
    let newUser = { name,email,mobile,dob }
    let newArray = [...users]
    if(params.id!==undefined)
    {
      newArray.splice(params.id,1,newUser)
    }
    else
    {
      newArray.push(newUser)
    }
    setUsers(newArray)
    navigate('/dashboard')
  }

  useEffect(()=>{
    if (params.id !== undefined)
    {
      setName(users[params.id].name)
      setEmail(users[params.id].email)
      setMobile(users[params.id].mobile)
      setDob(users[params.id].dob)
    }
  },[])

  return <>
 <div className='container-fluid'>
 <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Full Name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email ID" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Mobile Number" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="date" value={dob} onChange={(e)=>setDob(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
 </div>

  </>
}

export default AddUser