import React, { useState } from 'react'
import Input from '../../components/Input'
import Submit from '../../components/Submit'
import axios from 'axios'

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const { email, password } = formData
  const [error, setError] = useState(false)


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const url = 'http://localhost:8080/api/auth/login'
  const data = { email, password }


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email.length === 0 || formData.password.length === 0) {
      setError(true)
    }

    try {
      const res = await axios.post(url, data, { withCredentials: true });
      console.log(res.data)
      if(res.data.token)
      {
        window.open('/admin',"_self");
      }
    } catch (err) {
      console.log(err);
    }
  }



  return (
    <>
      <div className="contain py-16">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Welcome back
          </p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="space-y-2">
              <div>
                < Input
                  title='Email'
                  type='email'
                  name='email'
                  placeholder='youremail.@gmail.com'
                  onChange={onChange}
                  value={email}

                />
              </div>
              {error && formData.email.length <= 0 ? <p style={{ 'color': 'red', fontSize: '12px' }}> Email can not be empty</p> : ''}

              <div>
                <div>
                  < Input
                    title='Password'
                    type='password'
                    name='password'
                    placeholder='*******'
                    onChange={onChange}
                    value={password}
                  />
                </div>
                {error && formData.password.length <= 0 ? <p style={{ 'color': 'red', fontSize: '12px' }}> Password can not be empty</p> : ''}
              </div>
            </div>
            <Submit />
          </form>
        </div>
      </div>
    </>
  )
}

export default Login