import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';

const CreateAccountPage = () => {
  const [isAgency, setIsAgency] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Here you would typically handle form validation and submission
    // For this task, we'll just navigate to the profile page
    console.log("Form submitted with isAgency selection:", isAgency);
    navigate('/profile');
  };

  return (
    // We use flex-col and justify-between to push the button to the bottom
    <div className="bg-white h-full flex flex-col justify-between p-8">
      <div>
        <h1 className="text-3xl font-bold">Create your PopX account</h1>
        <div className="space-y-8 mt-8">
          <Input label="Full Name" placeholder="Marry Doe" isRequired={true} />
          <Input label="Phone number" placeholder="Marry Doe" isRequired={true} />
          <Input label="Email address" type="email" placeholder="Marry Doe" isRequired={true} />
          <Input label="Password" type="password" placeholder="Marry Doe" isRequired={true} />
          <Input label="Company name" placeholder="Marry Doe" />
        </div>
        
        <div className="mt-6">
          <p className="font-semibold">Are you an Agency?<span className="text-red-500">*</span></p>
          <div className="flex items-center space-x-4 mt-2">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="agency" 
                className="form-radio h-5 w-5 text-primary-purple"
                onChange={() => setIsAgency(true)}
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="agency" 
                className="form-radio h-5 w-5 text-primary-purple"
                onChange={() => setIsAgency(false)}
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
      </div>
      
      <Button text="Create Account" onClick={handleSubmit} />
    </div>
  );
};

export default CreateAccountPage;