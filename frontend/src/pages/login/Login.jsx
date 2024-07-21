import {Link, useNavigate} from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext';
import { useEffect } from 'react';
import { useState } from 'react';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const { authUser } = useAuthContext()
  const navigate = useNavigate()
  
  useEffect(() => {
    if (authUser) {
      navigate('/')
     }
  }, [authUser, navigate])
  


  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const {login, loading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(username, password)
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter bg-slate-100 backdrop-blur-sm bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login{" "}
          <span className="bg-gradient-to-r from-cyan-600 to-blue-700 p-2 rounded-lg">
            MERN Chat
          </span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
