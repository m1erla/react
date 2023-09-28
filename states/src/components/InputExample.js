import {useState} from 'react';


function InputExample() {
    const [name, setName] = useState('') 
    const [surname, setSurname] = useState('')
    

    // const onChangeName = (event => setName(event.target.value))
    // const onChangeSurname = (event => setSurname(event.target.value))
    const [form, setForm] = useState({name: '', surname: ''})
    
    const onChangeInput = (event) => {
      console.log(event.target.name)
      setForm({...form, [event.target.name]: event.target.value})
    }
     return (
       <div>
        <h1>Name</h1>
        <br />
       <input name='name' value={form.name} onChange={onChangeInput} />    
       <br />
       {form.name}
       <h1>Surname</h1>
        <br />
       <input name='surname' value={form.surname} onChange={onChangeInput} /> 
       <br />
        {form.surname}
        </div>

     )
}

export default InputExample