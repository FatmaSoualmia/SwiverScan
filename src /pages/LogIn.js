import { Form, redirect, useActionData } from "react-router-dom"

//pages
import HomePage from './HomePage.jpg'

function LogIn() {
  const data = useActionData() 
  return (
    <div className="container">
      <div className="row">
      <div className="col-md-8">
        <img className="img-fluid custom-img" src={HomePage} alt="logIn" />
      </div>
      <div className="login-container col-md">
      <h3 className="my-4">Log In</h3>
      <Form method="post" action="/login"  className="form-inline">
      <div className="form-group">
          <label className="my-3">
            <span>Email:</span>
            <input type="email" name="email" className="form-control" required />
          </label>
        </div>
        <div className="form-group">
          <label className="my-2">
            <span>Password:</span>
            <input type="password" name="password" className="form-control " required />
          </label>
        </div>
        <button type="submit" className="btn btn-secondary my-3">Log in</button>
        </Form>
      </div>
      </div>
      

        {data && data.error && <p>{data.error}</p>}
      
    </div>
  )
}

export default LogIn

export const LogInAction = async ({ request }) => {
  const data = await request.formData()

  const submission = {
    email: data.get('email'),
    pasword: data.get('password')
  }

  console.log(submission)

  // redirect the user
  return redirect('/')
}

