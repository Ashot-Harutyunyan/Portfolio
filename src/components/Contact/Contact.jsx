import './style.contact.scss'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

function Contact() {

  const [formSubmit, setFormSubmit] = useState({
      name: '', 
      email: '', 
      phone: '', 
      message: '',
  })

  const [error, setError] = useState(new Array(4).fill(false))

  const language = useSelector(({language})=> language)

  function handlePhoneInput(e){
    const regex = /[^+\d]/
    const { name, value } = e.target
    if(value.match(regex)) return
    setFormSubmit({...formSubmit, [name]: value}) 
  }

  function handleChange(e){
    const { name, value } = e.target
    setFormSubmit({...formSubmit, [name]: value}) 
  }

  function handleValidate(){
    const arrError = []
    let boolean = true
    for(let i in formSubmit){
      if(formSubmit[i] === ''){
        arrError.push(true)
        boolean = false
      }else{
        arrError.push(false)
      }
    }
    setError(arrError)
    return boolean
  }

  function handleSubmit(e){
    e.preventDefault()
    if(!handleValidate()) return
    
    emailjs.send(
      'service_ms58cbr', 
      'template_klj3kwn', 
      formSubmit,
      'PRf0gnNbrDTAXMC4C' 
    )
    .then((response) => {
      const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 2000,
        background: "#272727e2",
        color: "#fff",
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      })
      Toast.fire({
        icon: 'success',
        title: language.contact.sendTitle,
        text: language.contact.sendText,
      })
    })
    .catch((err) => {
      const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 2000,
        background: "#272727e2",
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      
      })
      Toast.fire({
        icon: 'error',
        title: language.contact.sendErrTitle,
        text: language.contact.sendErrText,
      })
    })

    setFormSubmit({
      name: '', 
      email: '', 
      phone: '', 
      message: '',
    })

  }

  return (<>

    <div className='contact-header'>
      <h2>{language.contact.title}</h2>
      <p> {language.contact.text} </p>
    </div>
  
    <div className='contact-phone'>
        <a href="tel:+374-99-02-35-36" >
            <FontAwesomeIcon icon={faPhone} className='icon-phone'/>
        </a>
        <span>+374 99 02 35 36</span>
    </div>

    <form action="" autoComplete="off" className='contact-form' onSubmit={handleSubmit}>
      <div className='contact-form-div'>
        <span>{language.contact.inputTitle1}</span>
        <input
         type="text" 
         name="name" 
         placeholder={language.contact.inputName}
         style={{border: error[0] ? '2px solid crimson' : '2px solid black'}}
         value={formSubmit.name}
         onChange={handleChange}
         />
        <p className={error[0] ?  'errorInput' : 'errorNone'}>{language.formError}</p>
      </div>

      <div className='contact-form-div'>
        <span>{language.contact.inputTitle3}</span>
        <input 
         type="email" 
         name="email"  
         placeholder={language.contact.inputEmail}
         style={{border: error[1] ? '2px solid crimson' : '2px solid black'}}
         value={formSubmit.email}
         onChange={handleChange}
         />
        <p className={error[1] ? 'errorInput' : 'errorNone'}>{language.formError}</p>
      </div>

      <div className='contact-form-div'>
        <span>{language.contact.inputTitle2}</span>
        <input 
         type="text" 
         name="phone" 
         placeholder={language.contact.inputPhone}  
         style={{border: error[2] ? '2px solid crimson' : '2px solid black'}} 
         value={formSubmit.phone} 
         onChange={handlePhoneInput}
         />
        <p className={error[2] ? 'errorInput' : 'errorNone'}>{language.formError}</p>
      </div>

      <div className='contact-form-div'>
        <span>{language.contact.inputTitle4}</span>
        <textarea 
         name="message" 
         placeholder={language.contact.inputMessage}    
         style={{border: error[3] ? '2px solid crimson' : '2px solid black'}} 
         value={formSubmit.message}
         onChange={handleChange}></textarea>
        <p className={error[3] ? 'errorTextarea' : 'errorNone'}>{language.formError}</p>
      </div>

      <button type='submit'>{language.contact.inputSubmit}</button>
    </form>
  </>)
}

export default Contact