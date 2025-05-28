import React, { useState } from 'react';
import Button1 from './Buttons/Button1';
 // Adjust path based on your project structure

const EmailForm = ({ buttonTitle = "Submit", onSubmit }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      setSubmitted(false);
      return;
    }

    setError('');
    setSubmitted(true);
    if (onSubmit) onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4 w-full max-w-xl'>
      <div className='flex flex-col sm:flex-row gap-4 w-full'>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your email'
          className='min-h-[56px] flex-1 text-black px-4 bg-white outline-none rounded-md'
        />
        <Button1
          fullBg={true}
          color='#00A45A'
          title={buttonTitle}
          disabled={!email || !!error}
        />
      </div>

      {error && <p className='text-red-500 text-sm'>{error}</p>}
      {submitted && <p className='text-green-500 text-sm'>Thanks! We’ll keep you posted 🚀</p>}
    </form>
  );
};

export default EmailForm;
