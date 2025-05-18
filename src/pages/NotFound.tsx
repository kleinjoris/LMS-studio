import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="mb-2 font-serif text-9xl font-bold text-primary-600">404</h1>
      <h2 className="mb-4 text-2xl font-bold text-gray-900">Page Not Found</h2>
      <p className="mb-8 max-w-md text-gray-600">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Button 
        onClick={() => navigate('/')}
        className="flex items-center"
      >
        <Home className="mr-2 h-4 w-4" />
        Return to Home
      </Button>
    </div>
  );
};

export default NotFound;