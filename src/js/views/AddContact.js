import React, {useState} from 'react'

export const AddContact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  return (
    <div><form>
      <div class="form-group">
      <label for="exampleInputEmail1">Full Name</label>
      <input type="text" onChange={(e)=> setName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Phone</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Address</label>
      <input type="text" class="form-control" id="exampleInputPassword1"/>
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
  </form></div>
  )
}

