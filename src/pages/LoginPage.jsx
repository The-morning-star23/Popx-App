import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate a successful login and navigate to the profile page
    navigate('/profile');
  };

  return (
    // Use the same flex layout to push the button to the bottom
    <div className="bg-white h-full flex flex-col justify-between p-8">
      <div>
        <h1 className="text-3xl font-bold">Signin to your PopX account</h1>
        <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        
        <div className="space-y-8 mt-8">
          <Input label="Email Address" type="email" placeholder="Enter email address" />
          <Input label="Password" type="password" placeholder="Enter password" />
        </div>
      </div>
      
      <Button text="Login" onClick={handleLogin} />
    </div>
  );
};

export default LoginPage;