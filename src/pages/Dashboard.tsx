import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layers, BookOpen, Users, Award, Clock, BarChart, Play, CheckCircle, BookOpen as BookOpenIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - would be fetched from API in a real app
  const enrolledCourses = [
    {
      id: '1',
      title: 'Complete Web Development Bootcamp',
      instructor: 'Sarah Johnson',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
      progress: 67,
      lastActivity: '2023-10-15T10:30:00Z',
    },
    {
      id: '2',
      title: 'UI/UX Design Masterclass',
      instructor: 'Michael Chen',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      progress: 32,
      lastActivity: '2023-10-18T14:45:00Z',
    },
    {
      id: '3',
      title: 'Data Science and Machine Learning',
      instructor: 'David Kim',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
      progress: 12,
      lastActivity: '2023-10-20T09:15:00Z',
    },
  ];
  
  const upcomingDeadlines = [
    {
      id: '1',
      title: 'Final Project Submission',
      course: 'Complete Web Development Bootcamp',
      dueDate: '2023-11-15T23:59:59Z',
    },
    {
      id: '2',
      title: 'Quiz: Design Principles',
      course: 'UI/UX Design Masterclass',
      dueDate: '2023-11-05T23:59:59Z',
    },
    {
      id: '3',
      title: 'Assignment: Data Visualization',
      course: 'Data Science and Machine Learning',
      dueDate: '2023-11-10T23:59:59Z',
    },
  ];
  
  const recentAchievements = [
    {
      id: '1',
      title: 'JavaScript Master',
      description: 'Completed all JavaScript modules with an average score of 95%',
      date: '2023-10-12T15:30:00Z',
    },
    {
      id: '2',
      title: 'Consistent Learner',
      description: 'Completed learning activities for 7 consecutive days',
      date: '2023-10-19T10:45:00Z',
    },
  ];

  // Instructor specific data
  const instructorCourses = [
    {
      id: '1',
      title: 'Advanced React Development',
      students: 342,
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg',
      rating: 4.8,
      revenue: '$5,680',
      status: 'active',
    },
    {
      id: '2',
      title: 'Node.js for Beginners',
      students: 215,
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      rating: 4.6,
      revenue: '$3,450',
      status: 'active',
    },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Yesterday';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    return formatDate(dateString);
  };

  const calculateDaysRemaining = (dateString: string) => {
    const dueDate = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    
    return diffInDays;
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-serif text-3xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex space-x-4">
            {user.role === 'instructor' && (
              <Button onClick={() => navigate('/dashboard/create-course')}>
                Create New Course
              </Button>
            )}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
                activeTab === 'overview'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('courses')}
              className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
                activeTab === 'courses'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              {user.role === 'student' ? 'My Learning' : 'My Courses'}
            </button>
            {user.role === 'instructor' && (
              <button
                onClick={() => setActiveTab('students')}
                className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
                  activeTab === 'students'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Students
              </button>
            )}
            <button
              onClick={() => setActiveTab('achievements')}
              className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
                activeTab === 'achievements'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              Achievements
            </button>
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  label: user.role === 'student' ? 'Enrolled Courses' : 'Active Courses',
                  value: user.role === 'student' ? enrolledCourses.length : instructorCourses.length,
                  icon: <Layers className="h-6 w-6 text-primary-600" />,
                  change: user.role === 'student' ? '+2 this month' : null,
                  bgColor: 'bg-blue-50',
                },
                {
                  label: user.role === 'student' ? 'Hours Spent' : 'Total Students',
                  value: user.role === 'student' ? '48' : instructorCourses.reduce((sum, course) => sum + course.students, 0),
                  icon: <Clock className="h-6 w-6 text-secondary-600" />,
                  change: user.role === 'student' ? '+3.5 this week' : '+28 this month',
                  bgColor: 'bg-teal-50',
                },
                {
                  label: user.role === 'student' ? 'Assignments' : 'Avg. Rating',
                  value: user.role === 'student' ? '12/15' : '4.7',
                  icon: <BookOpen className="h-6 w-6 text-accent-600" />,
                  change: user.role === 'student' ? '3 pending' : null,
                  bgColor: 'bg-orange-50',
                },
                {
                  label: user.role === 'student' ? 'Certificates' : 'Total Revenue',
                  value: user.role === 'student' ? '2' : '$9,130',
                  icon: <Award className="h-6 w-6 text-purple-600" />,
                  change: user.role === 'student' ? '1 in progress' : '+$840 this month',
                  bgColor: 'bg-purple-50',
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`rounded-lg border border-gray-200 p-6 shadow-sm ${stat.bgColor}`}
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0">{stat.icon}</div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">{stat.label}</dt>
                        <dd>
                          <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                          {stat.change && (
                            <div className="mt-1 text-xs text-gray-500">{stat.change}</div>
                          )}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Content - Student */}
            {user.role === 'student' && (
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* Continue Learning Section */}
                <div className="col-span-2 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className="mb-6 text-lg font-semibold text-gray-900">Continue Learning</h2>
                  <div className="space-y-6">
                    {enrolledCourses.map((course) => (
                      <div key={course.id} className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                        <div className="h-32 w-full sm:w-48">
                          <img 
                            src={course.image} 
                            alt={course.title} 
                            className="h-full w-full rounded-lg object-cover object-center"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                            <p className="text-sm text-gray-500">by {course.instructor}</p>
                            <div className="mt-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-700">{course.progress}% complete</span>
                                <span className="text-xs text-gray-500">Last activity: {formatRelativeTime(course.lastActivity)}</span>
                              </div>
                              <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
                                <div 
                                  className="h-2 rounded-full bg-primary-600" 
                                  style={{ width: `${course.progress}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex space-x-3">
                            <Button variant="secondary" size="sm" className="flex items-center">
                              <Play size={16} className="mr-1" /> Continue
                            </Button>
                            <Button variant="outline" size="sm">
                              View Course
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sidebar - Upcoming Deadlines & Achievements */}
                <div className="flex flex-col space-y-8">
                  {/* Upcoming Deadlines */}
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-900">Upcoming Deadlines</h2>
                    <div className="space-y-4">
                      {upcomingDeadlines.map((deadline) => (
                        <div 
                          key={deadline.id} 
                          className="rounded-lg border border-gray-200 p-4 transition-all duration-200 hover:border-primary-200 hover:bg-primary-50"
                        >
                          <h3 className="text-base font-medium text-gray-900">{deadline.title}</h3>
                          <p className="text-sm text-gray-500">{deadline.course}</p>
                          <div className="mt-2 flex items-center justify-between">
                            <div className="flex items-center">
                              <Clock size={14} className="mr-1 text-gray-400" />
                              <span className="text-xs text-gray-500">
                                Due: {formatDate(deadline.dueDate)}
                              </span>
                            </div>
                            <span className={`rounded-full px-2 py-1 text-xs font-medium ${
                              calculateDaysRemaining(deadline.dueDate) <= 2
                                ? 'bg-error-100 text-error-800'
                                : calculateDaysRemaining(deadline.dueDate) <= 5
                                ? 'bg-warning-100 text-warning-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {calculateDaysRemaining(deadline.dueDate)} days left
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Achievements */}
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-900">Recent Achievements</h2>
                    <div className="space-y-4">
                      {recentAchievements.map((achievement) => (
                        <div 
                          key={achievement.id} 
                          className="flex items-start rounded-lg border border-gray-200 p-4 transition-all duration-200 hover:border-primary-200 hover:bg-primary-50"
                        >
                          <div className="mr-3 rounded-full bg-success-100 p-2">
                            <Award size={20} className="text-success-600" />
                          </div>
                          <div>
                            <h3 className="text-base font-medium text-gray-900">{achievement.title}</h3>
                            <p className="text-sm text-gray-500">{achievement.description}</p>
                            <p className="mt-1 text-xs text-gray-400">{formatDate(achievement.date)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Main Content - Instructor */}
            {user.role === 'instructor' && (
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* Course Performance */}
                <div className="col-span-2 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">Course Performance</h2>
                    <select className="rounded-md border-gray-300 text-sm focus:border-primary-500 focus:ring-primary-500">
                      <option>Last 30 Days</option>
                      <option>Last 90 Days</option>
                      <option>This Year</option>
                      <option>All Time</option>
                    </select>
                  </div>
                  <div className="space-y-6">
                    {instructorCourses.map((course) => (
                      <div key={course.id} className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                        <div className="h-32 w-full sm:w-48">
                          <img 
                            src={course.image} 
                            alt={course.title} 
                            className="h-full w-full rounded-lg object-cover object-center"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                              <span className="rounded-full bg-success-100 px-2 py-1 text-xs font-medium text-success-800">
                                {course.status === 'active' ? 'Active' : 'Draft'}
                              </span>
                            </div>
                            <div className="mt-2 grid grid-cols-3 gap-4">
                              <div>
                                <p className="text-sm text-gray-500">Students</p>
                                <p className="text-lg font-semibold text-gray-900">{course.students}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Rating</p>
                                <div className="flex items-center">
                                  <span className="text-lg font-semibold text-gray-900">{course.rating}</span>
                                  <svg 
                                    className="ml-1 h-4 w-4 text-yellow-400" 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                </div>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Revenue</p>
                                <p className="text-lg font-semibold text-gray-900">{course.revenue}</p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex space-x-3">
                            <Button variant="secondary" size="sm">
                              Manage Course
                            </Button>
                            <Button variant="outline" size="sm">
                              View Analytics
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sidebar - Recent Activity & Quick Stats */}
                <div className="flex flex-col space-y-8">
                  {/* Recent Activity */}
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-900">Recent Activity</h2>
                    <div className="space-y-4">
                      {[
                        {
                          action: 'New enrollment',
                          description: 'Sarah Johnson enrolled in "Advanced React Development"',
                          time: '2 hours ago',
                          icon: <Users size={16} className="text-primary-600" />,
                        },
                        {
                          action: 'New review',
                          description: 'John Smith left a 5-star review on "Node.js for Beginners"',
                          time: '1 day ago',
                          icon: <Award size={16} className="text-yellow-600" />,
                        },
                        {
                          action: 'Assignment submitted',
                          description: '15 students submitted "Final Project" assignment',
                          time: '2 days ago',
                          icon: <CheckCircle size={16} className="text-success-600" />,
                        },
                      ].map((activity, index) => (
                        <div key={index} className="flex items-start">
                          <div className="mr-3 rounded-full bg-gray-100 p-2">
                            {activity.icon}
                          </div>
                          <div>
                            <h3 className="text-base font-medium text-gray-900">{activity.action}</h3>
                            <p className="text-sm text-gray-500">{activity.description}</p>
                            <p className="mt-1 text-xs text-gray-400">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-900">Quick Stats</h2>
                    <div className="space-y-4">
                      {[
                        {
                          label: 'Course Completion Rate',
                          value: '68%',
                          change: '+5% vs. last month',
                          increasing: true,
                          icon: <BarChart size={16} className="text-primary-600" />,
                        },
                        {
                          label: 'Average Engagement',
                          value: '42 min/day',
                          change: '-3 min vs. last month',
                          increasing: false,
                          icon: <Clock size={16} className="text-secondary-600" />,
                        },
                        {
                          label: 'Student Questions',
                          value: '24 open',
                          change: '12 answered this week',
                          increasing: true,
                          icon: <BookOpenIcon size={16} className="text-accent-600" />,
                        },
                      ].map((stat, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                          <div className="flex items-center">
                            <div className="rounded-full bg-gray-100 p-2">
                              {stat.icon}
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-gray-500">{stat.label}</p>
                              <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
                            </div>
                          </div>
                          <div className={`flex items-center text-xs ${
                            stat.increasing ? 'text-success-600' : 'text-error-600'
                          }`}>
                            {stat.increasing ? (
                              <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            )}
                            {stat.change}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Courses Tab */}
        {activeTab === 'courses' && (
          <div>
            {user.role === 'student' ? (
              <div>
                <h2 className="mb-6 text-xl font-semibold text-gray-900">My Learning</h2>
                {/* Student's enrolled courses */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {enrolledCourses.map((course) => (
                    <div 
                      key={course.id} 
                      className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md"
                    >
                      <div className="relative h-48">
                        <img 
                          src={course.image} 
                          alt={course.title} 
                          className="h-full w-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                        <div className="absolute bottom-4 left-4 rounded-full bg-white px-2 py-1 text-xs font-medium text-gray-800">
                          {course.progress}% Complete
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="mb-2 text-lg font-bold text-gray-900">{course.title}</h3>
                        <p className="mb-4 text-sm text-gray-600">by {course.instructor}</p>
                        <div className="mb-4">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Progress</span>
                            <span className="text-xs text-gray-500">{course.progress}%</span>
                          </div>
                          <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
                            <div 
                              className="h-2 rounded-full bg-primary-600" 
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="secondary" size="sm" className="flex items-center" fullWidth>
                            <Play size={16} className="mr-1" /> Continue
                          </Button>
                          <Button variant="outline" size="sm" fullWidth>
                            Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">My Courses</h2>
                  <Button onClick={() => navigate('/dashboard/create-course')}>
                    Create New Course
                  </Button>
                </div>
                {/* Instructor's courses */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {instructorCourses.map((course) => (
                    <div 
                      key={course.id} 
                      className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md"
                    >
                      <div className="relative h-48">
                        <img 
                          src={course.image} 
                          alt={course.title} 
                          className="h-full w-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                        <div className="absolute top-4 right-4 rounded-full bg-success-100 px-2 py-1 text-xs font-medium text-success-800">
                          {course.status === 'active' ? 'Active' : 'Draft'}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="mb-4 text-lg font-bold text-gray-900">{course.title}</h3>
                        <div className="mb-4 grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs text-gray-500">Students</p>
                            <p className="text-base font-semibold text-gray-900">{course.students}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Rating</p>
                            <div className="flex items-center">
                              <span className="text-base font-semibold text-gray-900">{course.rating}</span>
                              <svg 
                                className="ml-1 h-4 w-4 text-yellow-400" 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Revenue</p>
                            <p className="text-base font-semibold text-gray-900">{course.revenue}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="secondary" size="sm" fullWidth>
                            Edit Course
                          </Button>
                          <Button variant="outline" size="sm" fullWidth>
                            View Stats
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Students Tab (Instructor only) */}
        {activeTab === 'students' && user.role === 'instructor' && (
          <div>
            <h2 className="mb-6 text-xl font-semibold text-gray-900">Student Management</h2>
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search students..."
                      className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-primary-500 focus:ring-primary-500"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <select className="rounded-md border-gray-300 text-sm focus:border-primary-500 focus:ring-primary-500">
                      <option>All Courses</option>
                      <option>Advanced React Development</option>
                      <option>Node.js for Beginners</option>
                    </select>
                    <Button variant="outline" size="sm">
                      Export
                    </Button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                          Student
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                          Course
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                          Progress
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                          Last Activity
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {[
                        {
                          id: '1',
                          name: 'Emma Wilson',
                          email: 'emma@example.com',
                          course: 'Advanced React Development',
                          progress: 75,
                          lastActivity: '2023-10-20T14:30:00Z',
                        },
                        {
                          id: '2',
                          name: 'Alex Thompson',
                          email: 'alex@example.com',
                          course: 'Advanced React Development',
                          progress: 92,
                          lastActivity: '2023-10-21T09:15:00Z',
                        },
                        {
                          id: '3',
                          name: 'Jessica Lee',
                          email: 'jessica@example.com',
                          course: 'Node.js for Beginners',
                          progress: 45,
                          lastActivity: '2023-10-19T16:45:00Z',
                        },
                        {
                          id: '4',
                          name: 'Michael Chen',
                          email: 'michael@example.com',
                          course: 'Node.js for Beginners',
                          progress: 60,
                          lastActivity: '2023-10-18T11:30:00Z',
                        },
                        {
                          id: '5',
                          name: 'Olivia Rodriguez',
                          email: 'olivia@example.com',
                          course: 'Advanced React Development',
                          progress: 30,
                          lastActivity: '2023-10-17T13:20:00Z',
                        },
                      ].map((student) => (
                        <tr key={student.id}>
                          <td className="whitespace-nowrap px-6 py-4">
                            <div className="flex items-center">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                                {student.name.charAt(0)}
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{student.name}</div>
                                <div className="text-sm text-gray-500">{student.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                            {student.course}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <div>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500">{student.progress}%</span>
                              </div>
                              <div className="mt-1 h-2 w-full max-w-xs rounded-full bg-gray-200">
                                <div 
                                  className={`h-2 rounded-full ${
                                    student.progress < 30 ? 'bg-error-500' :
                                    student.progress < 70 ? 'bg-warning-500' :
                                    'bg-success-500'
                                  }`} 
                                  style={{ width: `${student.progress}%` }}
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                            {formatRelativeTime(student.lastActivity)}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                            <Button variant="ghost" size="sm">
                              View Details
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">12</span> students
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div>
            <h2 className="mb-6 text-xl font-semibold text-gray-900">Achievements & Certificates</h2>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Certificates */}
              <div className="col-span-2 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-medium text-gray-900">My Certificates</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {[
                    {
                      id: '1',
                      title: 'Web Development Fundamentals',
                      issueDate: '2023-05-15T00:00:00Z',
                      image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg',
                    },
                    {
                      id: '2',
                      title: 'UI/UX Design Principles',
                      issueDate: '2023-08-22T00:00:00Z',
                      image: 'https://images.pexels.com/photos/5926372/pexels-photo-5926372.jpeg',
                    },
                  ].map((certificate) => (
                    <div 
                      key={certificate.id} 
                      className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md"
                    >
                      <div className="relative h-48">
                        <img 
                          src={certificate.image} 
                          alt={certificate.title} 
                          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-20"></div>
                      </div>
                      <div className="p-4">
                        <h4 className="text-base font-semibold text-gray-900">{certificate.title}</h4>
                        <p className="text-sm text-gray-500">Issued on {formatDate(certificate.issueDate)}</p>
                        <div className="mt-4 flex space-x-2">
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                          <Button size="sm" variant="ghost">
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievement Badges */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-medium text-gray-900">Achievement Badges</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      id: '1',
                      title: 'Fast Learner',
                      description: 'Completed 5 courses in 30 days',
                      icon: <Award className="h-10 w-10 text-primary-600" />,
                      bgColor: 'bg-primary-100',
                    },
                    {
                      id: '2',
                      title: 'Discussion Leader',
                      description: 'Made 50+ forum contributions',
                      icon: <Users className="h-10 w-10 text-secondary-600" />,
                      bgColor: 'bg-secondary-100',
                    },
                    {
                      id: '3',
                      title: 'Perfect Score',
                      description: 'Achieved 100% on 3 assignments',
                      icon: <Award className="h-10 w-10 text-accent-600" />,
                      bgColor: 'bg-accent-100',
                    },
                    {
                      id: '4',
                      title: 'Early Bird',
                      description: 'Completed all assignments ahead of schedule',
                      icon: <Clock className="h-10 w-10 text-success-600" />,
                      bgColor: 'bg-success-100',
                    },
                  ].map((badge) => (
                    <div 
                      key={badge.id} 
                      className="flex flex-col items-center rounded-lg border border-gray-200 p-4 text-center transition-all duration-200 hover:border-primary-200 hover:bg-primary-50"
                    >
                      <div className={`mb-2 rounded-full ${badge.bgColor} p-3`}>
                        {badge.icon}
                      </div>
                      <h4 className="text-sm font-medium text-gray-900">{badge.title}</h4>
                      <p className="mt-1 text-xs text-gray-500">{badge.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <h3 className="mb-2 text-base font-medium text-gray-900">Progress Toward Next Badge</h3>
                  <div className="rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center">
                      <div className="rounded-full bg-gray-100 p-2">
                        <BookOpen className="h-6 w-6 text-gray-600" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-gray-900">Course Explorer</h4>
                        <p className="text-xs text-gray-500">Complete 10 different course topics</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">7/10 completed</span>
                        <span className="text-xs text-gray-500">70%</span>
                      </div>
                      <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
                        <div 
                          className="h-2 rounded-full bg-primary-600" 
                          style={{ width: '70%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;