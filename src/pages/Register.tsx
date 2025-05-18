import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Check, Info } from 'lucide-react';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState('');
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const validatePassword = () => {
    if (password.length < 8) {
      return false;
    }
    return true;
  };

  const passwordsMatch = () => {
    return password === confirmPassword;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    
    if (!validatePassword()) {
      setFormError('Password must be at least 8 characters long.');
      return;
    }
    
    if (!passwordsMatch()) {
      setFormError('Passwords do not match.');
      return;
    }
    
    setLoading(true);
    
    try {
      await register(name, email, password, role);
      navigate('/dashboard');
    } catch (error: any) {
      setFormError(error.response?.data?.message || 'Failed to register. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col bg-gray-50 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center font-serif text-3xl font-bold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
            sign in to your existing account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          {formError && (
            <div className="mb-4 rounded-md bg-error-50 p-4">
              <p className="text-sm text-error-800">{formError}</p>
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full name
              </label>
              <div className="relative mt-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md border border-gray-300 py-2 pl-10 placeholder-gray-400 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="relative mt-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border border-gray-300 py-2 pl-10 placeholder-gray-400 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border border-gray-300 py-2 pl-10 pr-10 placeholder-gray-400 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  placeholder="••••••••"
                />
                <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                  )}
                </div>
              </div>
              <div className="mt-2">
                <div className="flex items-center">
                  <Check className={`h-4 w-4 ${password.length >= 8 ? 'text-success-500' : 'text-gray-300'}`} />
                  <span className="ml-2 text-xs text-gray-500">At least 8 characters</span>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm password
              </label>
              <div className="relative mt-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full rounded-md border border-gray-300 py-2 pl-10 pr-10 placeholder-gray-400 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  placeholder="••••••••"
                />
                <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                  )}
                </div>
              </div>
              {confirmPassword && (
                <div className="mt-2">
                  <div className="flex items-center">
                    <Check className={`h-4 w-4 ${passwordsMatch() ? 'text-success-500' : 'text-error-500'}`} />
                    <span className="ml-2 text-xs text-gray-500">Passwords match</span>
                  </div>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                I want to
              </label>
              <div className="mt-1">
                <div className="grid grid-cols-2 gap-3">
                  <div
                    className={`flex cursor-pointer items-center justify-center rounded-md border p-3 ${
                      role === 'student'
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-gray-300 bg-white text-gray-700'
                    }`}
                    onClick={() => setRole('student')}
                  >
                    <input
                      type="radio"
                      name="role"
                      id="role-student"
                      value="student"
                      checked={role === 'student'}
                      onChange={() => setRole('student')}
                      className="sr-only"
                    />
                    <label
                      htmlFor="role-student"
                      className="cursor-pointer text-sm font-medium"
                    >
                      Learn
                    </label>
                  </div>
                  <div
                    className={`flex cursor-pointer items-center justify-center rounded-md border p-3 ${
                      role === 'instructor'
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-gray-300 bg-white text-gray-700'
                    }`}
                    onClick={() => setRole('instructor')}
                  >
                    <input
                      type="radio"
                      name="role"
                      id="role-instructor"
                      value="instructor"
                      checked={role === 'instructor'}
                      onChange={() => setRole('instructor')}
                      className="sr-only"
                    />
                    <label
                      htmlFor="role-instructor"
                      className="cursor-pointer text-sm font-medium"
                    >
                      Teach
                    </label>
                  </div>
                </div>
                <div className="mt-2 flex items-start">
                  <Info className="mr-2 h-4 w-4 flex-shrink-0 text-gray-400" />
                  <p className="text-xs text-gray-500">
                    {role === 'student'
                      ? 'As a student, you can enroll in courses and track your progress.'
                      : 'As an instructor, you can create and manage courses, as well as view student progress.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                I agree to the{' '}
                <Link to="/terms" className="font-medium text-primary-600 hover:text-primary-500">
                  Terms
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="font-medium text-primary-600 hover:text-primary-500">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <div>
              <Button
                type="submit"
                fullWidth
                size="lg"
                disabled={loading}
              >
                {loading ? 'Creating account...' : 'Create account'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;