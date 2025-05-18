import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, Award, Monitor, Clock, Check } from 'lucide-react';
import Button from '../components/ui/Button';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 font-serif text-4xl font-bold leading-tight md:text-5xl">
                Unlock Your Potential with Online Learning
              </h1>
              <p className="mb-8 text-lg text-primary-100">
                Access over 1,000 high-quality courses taught by industry experts and transform your career with EduLearn.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button
                  size="lg"
                  onClick={() => navigate('/courses')}
                  className="shadow-lg"
                >
                  Explore Courses
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/register')}
                  className="border-white text-white hover:bg-primary-800 hover:bg-opacity-30"
                >
                  Sign Up Free
                </Button>
              </div>
            </div>
            <div className="relative hidden rounded-xl bg-white p-6 shadow-2xl md:block">
              <img 
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg" 
                alt="Students learning online" 
                className="h-full w-full rounded-lg object-cover object-center"
              />
              <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-primary-100 p-3">
                    <Users size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Join our community</p>
                    <p className="text-xl font-bold text-gray-900">10K+ Students</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 -top-6 rounded-lg bg-white p-4 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-secondary-100 p-3">
                    <BookOpen size={24} className="text-secondary-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Learn at your pace</p>
                    <p className="text-xl font-bold text-gray-900">1,000+ Courses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose EduLearn?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Our learning platform is designed with your success in mind, providing the tools and resources you need to achieve your goals.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Monitor className="h-8 w-8 text-primary-600" />,
                title: 'Learn Anytime, Anywhere',
                description: 'Access courses on any device, whether you\'re at home or on the go.',
              },
              {
                icon: <Award className="h-8 w-8 text-primary-600" />,
                title: 'Expert Instructors',
                description: 'Learn from industry professionals with real-world experience and expertise.',
              },
              {
                icon: <Clock className="h-8 w-8 text-primary-600" />,
                title: 'Self-Paced Learning',
                description: 'Study at your own pace and complete courses on your own schedule.',
              },
              {
                icon: <BookOpen className="h-8 w-8 text-primary-600" />,
                title: 'Diverse Course Library',
                description: 'Explore a wide range of subjects from programming to business and design.',
              },
              {
                icon: <Check className="h-8 w-8 text-primary-600" />,
                title: 'Verified Certificates',
                description: 'Earn certificates upon completion to showcase your new skills to employers.',
              },
              {
                icon: <Users className="h-8 w-8 text-primary-600" />,
                title: 'Community Support',
                description: 'Connect with fellow learners and instructors for guidance and collaboration.',
              },
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-200 hover:shadow-md"
              >
                <div className="mb-4 rounded-full bg-primary-50 p-3 inline-block group-hover:bg-primary-100 transition-colors duration-200">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
                Popular Courses
              </h2>
              <p className="mt-2 max-w-2xl text-lg text-gray-600">
                Discover our most popular courses across various categories.
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => navigate('/courses')}
              className="sm:self-end"
            >
              View All Courses
            </Button>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              {
                title: 'Complete Web Development Bootcamp',
                instructor: 'Sarah Johnson',
                image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
                price: '$89.99',
                rating: 4.8,
                students: 15420,
                category: 'Programming',
              },
              {
                title: 'UI/UX Design Masterclass',
                instructor: 'Michael Chen',
                image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
                price: '$69.99',
                rating: 4.7,
                students: 8765,
                category: 'Design',
              },
              {
                title: 'Digital Marketing Strategy',
                instructor: 'Emily Rodriguez',
                image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg',
                price: '$59.99',
                rating: 4.6,
                students: 12350,
                category: 'Marketing',
              },
              {
                title: 'Data Science and Machine Learning',
                instructor: 'David Kim',
                image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
                price: '$94.99',
                rating: 4.9,
                students: 10280,
                category: 'Data Science',
              },
            ].map((course, index) => (
              <div 
                key={index} 
                className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-200 hover:shadow-md"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 rounded-md bg-primary-600 px-2 py-1 text-xs font-medium text-white">
                    {course.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors duration-200 group-hover:text-primary-600">
                    {course.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">
                    by {course.instructor}
                  </p>
                  <div className="mb-4 flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-sm font-medium text-gray-600">
                        {course.rating} ({course.students.toLocaleString()} students)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">{course.price}</span>
                    <Button size="sm" variant="secondary">
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
              What Our Students Say
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Read testimonials from our students who have transformed their careers with EduLearn.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Alex Thompson',
                role: 'Software Developer',
                image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
                testimonial: 'The web development courses on EduLearn helped me transition from a marketing career to a full-time developer role in just 6 months. The instructors were exceptional and the hands-on projects gave me real-world experience.',
              },
              {
                name: 'Jessica Lee',
                role: 'UX Designer',
                image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
                testimonial: 'I\'ve taken several design courses on other platforms, but EduLearn\'s UI/UX design courses were by far the most comprehensive. I landed a job at a top tech company thanks to the portfolio I built through these courses.',
              },
              {
                name: 'Marcus Johnson',
                role: 'Data Analyst',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
                testimonial: 'The data science curriculum at EduLearn is incredibly well-structured. I went from knowing basic spreadsheet functions to implementing complex machine learning models. The skills I gained directly led to a 30% salary increase.',
              },
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="relative rounded-xl bg-white p-8 shadow-md"
              >
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="inline-block h-5 w-5 text-yellow-400" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-6 italic text-gray-600">"{testimonial.testimonial}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-secondary-700 to-secondary-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-100">
            Join thousands of students who are already advancing their careers with EduLearn.
          </p>
          <div className="mt-8 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button 
              size="lg"
              onClick={() => navigate('/register')}
              className="bg-white text-secondary-700 hover:bg-gray-100"
            >
              Get Started for Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/courses')}
              className="border-white text-white hover:bg-secondary-800 hover:bg-opacity-30"
            >
              Browse Courses
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;