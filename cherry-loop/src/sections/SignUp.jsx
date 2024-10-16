import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
      <div className="relative min-h-screen flex items-center justify-center px-6 py-9">
        {/* Container to wrap image with text and form */}
        <div className="flex flex-col sm:flex-row items-center justify-center w-full sm:space-x-10">
          
          {/* Left Column: Image and text stacked */}
          <div className="flex flex-col items-center sm:w-1/2">
            <img 
              src="assets/cherryloop.png" 
              alt="cherryloop-logo" 
              className="inline-block w-full sm:h-[400px] h-fit object-contain mt-[-2rem] mb-[-6rem]"
            />
            <h3 className="head-text text-center mt-0">stay in the loop</h3>
          </div>
  
          {/* Right Column: Form */}
          <div className="sm:w-1/2">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-peach-100">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-full border-0 py-1.5 text-peach shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-peach sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
  
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-peach-100">
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-full border-0 py-1.5 text-peach shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-peach sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
  
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-sage px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sage-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >Join Now
                  </button>
                </div>
              </form>
              <p className="mt-10 text-center text-sm text-peach-200">
                Already have an account?{' '}
                <Link to="/login" className="font-semibold leading-6 text-sage-100 hover:text-peach-500">
                    Sign in!
                </Link>
                </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SignUp;