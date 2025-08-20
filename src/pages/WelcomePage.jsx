import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white h-full flex flex-col justify-end p-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Welcome to PopX</h1>
        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        
        <div className="space-y-2 pt-4">
          <Button text="Create Account" onClick={() => navigate('/register')} />
          <Button text="Already Registered? Login" variant="secondary" onClick={() => navigate('/login')} />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;