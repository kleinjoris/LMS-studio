import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Clock, Play, Award, FileText, Download, BookOpen, Globe, Check, ChevronDown, ChevronUp, Video, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const CourseDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<string[]>(['section-1']);

  // Mock data - would be fetched from API in real app
  const course = {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    instructor: {
      name: 'Sarah Johnson',
      title: 'Senior Web Developer',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg',
      bio: 'Sarah is a senior web developer with over 10 years of experience working with top tech companies. She specializes in full-stack development and has helped hundreds of students launch their careers in tech.',
      courses: 12,
      students: 34500,
      rating: 4.8,
    },
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
    price: '$89.99',
    salePrice: '$59.99',
    rating: 4.8,
    reviewCount: 3245,
    students: 15420,
    category: 'Programming',
    level: 'All Levels',
    lastUpdated: '2023-09-15T00:00:00Z',
    language: 'English',
    description: 'Learn web development from scratch with this comprehensive bootcamp. You will master HTML, CSS, JavaScript, React, Node.js, MongoDB, and more. By the end of this course, you will be able to build complete web applications and launch your career as a web developer.',
    whatYouWillLearn: [
      'Build 25+ projects including a full-fledged e-commerce site',
      'Master front-end technologies like HTML, CSS, JavaScript, and React',
      'Learn back-end development with Node.js, Express, and MongoDB',
      'Implement authentication, payment processing, and more',
      'Deploy your applications to the web',
      'Understand modern web development best practices',
    ],
    requirements: [
      'No prior programming experience needed - we will start from the basics',
      'A computer with internet access (Windows, macOS, or Linux)',
      'Desire to learn and build real-world applications',
    ],
    sections: [
      {
        id: 'section-1',
        title: 'Introduction to Web Development',
        lectures: 8,
        duration: '1h 45m',
        content: [
          { id: 'lecture-1-1', title: 'Welcome to the Course', type: 'video', duration: '10:15', isPreview: true },
          { id: 'lecture-1-2', title: 'What is Web Development?', type: 'video', duration: '15:30', isPreview: false },
          { id: 'lecture-1-3', title: 'Setting Up Your Development Environment', type: 'video', duration: '22:45', isPreview: false },
          { id: 'lecture-1-4', title: 'Web Development Tools Overview', type: 'article', duration: '10:00', isPreview: false },
          { id: 'lecture-1-5', title: 'Course Project Overview', type: 'video', duration: '12:20', isPreview: false },
          { id: 'lecture-1-6', title: 'Introduction Quiz', type: 'quiz', duration: '15:00', isPreview: false },
          { id: 'lecture-1-7', title: 'Developer Roadmap', type: 'download', duration: '5:00', isPreview: false },
          { id: 'lecture-1-8', title: 'Section Summary', type: 'video', duration: '8:30', isPreview: false },
        ],
      },
      {
        id: 'section-2',
        title: 'HTML Fundamentals',
        lectures: 10,
        duration: '2h 30m',
        content: [
          { id: 'lecture-2-1', title: 'HTML Structure and Syntax', type: 'video', duration: '18:45', isPreview: false },
          { id: 'lecture-2-2', title: 'HTML Tags and Elements', type: 'video', duration: '22:10', isPreview: false },
          { id: 'lecture-2-3', title: 'Working with Text', type: 'video', duration: '15:30', isPreview: false },
          { id: 'lecture-2-4', title: 'Links and Navigation', type: 'video', duration: '14:15', isPreview: false },
          { id: 'lecture-2-5', title: 'Images and Media', type: 'video', duration: '16:20', isPreview: false },
          { id: 'lecture-2-6', title: 'Lists and Tables', type: 'video', duration: '19:45', isPreview: false },
          { id: 'lecture-2-7', title: 'Forms and User Input', type: 'video', duration: '23:30', isPreview: false },
          { id: 'lecture-2-8', title: 'HTML Practice Exercise', type: 'exercise', duration: '30:00', isPreview: false },
          { id: 'lecture-2-9', title: 'HTML Cheat Sheet', type: 'download', duration: '5:00', isPreview: false },
          { id: 'lecture-2-10', title: 'Section Quiz', type: 'quiz', duration: '15:00', isPreview: false },
        ],
      },
      {
        id: 'section-3',
        title: 'CSS Styling',
        lectures: 12,
        duration: '3h 15m',
        content: [
          { id: 'lecture-3-1', title: 'Introduction to CSS', type: 'video', duration: '16:45', isPreview: false },
          { id: 'lecture-3-2', title: 'Selectors and Properties', type: 'video', duration: '20:30', isPreview: false },
          { id: 'lecture-3-3', title: 'Box Model', type: 'video', duration: '18:15', isPreview: false },
          { id: 'lecture-3-4', title: 'Colors and Typography', type: 'video', duration: '15:20', isPreview: false },
          { id: 'lecture-3-5', title: 'Layouts with Flexbox', type: 'video', duration: '22:40', isPreview: false },
          { id: 'lecture-3-6', title: 'CSS Grid', type: 'video', duration: '25:10', isPreview: false },
          { id: 'lecture-3-7', title: 'Responsive Design', type: 'video', duration: '28:45', isPreview: false },
          { id: 'lecture-3-8', title: 'CSS Animations', type: 'video', duration: '19:30', isPreview: false },
          { id: 'lecture-3-9', title: 'Styling Practice', type: 'exercise', duration: '30:00', isPreview: false },
          { id: 'lecture-3-10', title: 'CSS Frameworks Overview', type: 'video', duration: '14:25', isPreview: false },
          { id: 'lecture-3-11', title: 'CSS Resources', type: 'download', duration: '5:00', isPreview: false },
          { id: 'lecture-3-12', title: 'Section Quiz', type: 'quiz', duration: '15:00', isPreview: false },
        ],
      },
      {
        id: 'section-4',
        title: 'JavaScript Essentials',
        lectures: 15,
        duration: '4h 30m',
        content: [
          { id: 'lecture-4-1', title: 'Introduction to JavaScript', type: 'video', duration: '17:30', isPreview: false },
          { id: 'lecture-4-2', title: 'Variables and Data Types', type: 'video', duration: '20:15', isPreview: false },
          { id: 'lecture-4-3', title: 'Operators and Expressions', type: 'video', duration: '15:45', isPreview: false },
          { id: 'lecture-4-4', title: 'Control Flow', type: 'video', duration: '22:10', isPreview: false },
          { id: 'lecture-4-5', title: 'Functions', type: 'video', duration: '25:30', isPreview: false },
          { id: 'lecture-4-6', title: 'Arrays and Objects', type: 'video', duration: '28:45', isPreview: false },
          { id: 'lecture-4-7', title: 'DOM Manipulation', type: 'video', duration: '30:20', isPreview: false },
          { id: 'lecture-4-8', title: 'Events and Event Handling', type: 'video', duration: '24:15', isPreview: false },
          { id: 'lecture-4-9', title: 'Asynchronous JavaScript', type: 'video', duration: '26:40', isPreview: false },
          { id: 'lecture-4-10', title: 'Fetch API and AJAX', type: 'video', duration: '22:30', isPreview: false },
          { id: 'lecture-4-11', title: 'JavaScript Exercise 1', type: 'exercise', duration: '30:00', isPreview: false },
          { id: 'lecture-4-12', title: 'JavaScript Exercise 2', type: 'exercise', duration: '30:00', isPreview: false },
          { id: 'lecture-4-13', title: 'JavaScript Cheat Sheet', type: 'download', duration: '5:00', isPreview: false },
          { id: 'lecture-4-14', title: 'JavaScript Best Practices', type: 'article', duration: '15:00', isPreview: false },
          { id: 'lecture-4-15', title: 'Section Quiz', type: 'quiz', duration: '20:00', isPreview: false },
        ],
      },
    ],
    totalLectures: 45,
    totalDuration: '16h 30m',
  };

  const reviews = [
    {
      id: 'review-1',
      user: {
        name: 'Alex Thompson',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      },
      rating: 5,
      date: '2023-10-12T12:30:00Z',
      title: 'Exactly what I needed to start my career',
      content: 'This course is comprehensive and well-structured. I had no prior programming experience, but the instructor breaks down complex concepts into digestible pieces. I have completed 60% of the course and have already built several projects for my portfolio. Highly recommended!',
    },
    {
      id: 'review-2',
      user: {
        name: 'Jessica Lee',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      },
      rating: 5,
      date: '2023-09-28T15:45:00Z',
      title: 'Best web development course on the platform',
      content: 'I have taken several web development courses, and this is by far the best one. The projects are practical and relevant to today industry standards. The instructor\'s teaching style is clear and engaging. I particularly enjoyed the sections on React and Node.js. Worth every penny!',
    },
    {
      id: 'review-3',
      user: {
        name: 'Michael Chen',
        image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
      },
      rating: 4,
      date: '2023-10-05T09:15:00Z',
      title: 'Great content, but some sections need updating',
      content: 'The course content is excellent overall, and I have learned a lot. However, some of the JavaScript frameworks sections could use updating to reflect the latest versions. That said, the fundamentals are solid, and the instructor is very responsive in the Q&A section. I would still recommend this course to beginners.',
    },
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId) 
        : [...prev, sectionId]
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Calculate total course content
  const totalContent = course.sections.reduce(
    (total, section) => total + section.content.length,
    0
  );

  return (
    <div className="bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Course Header */}
        <div className="mb-8 rounded-xl bg-gradient-to-br from-primary-800 to-primary-900 p-8 text-white shadow-lg">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h1 className="font-serif text-3xl font-bold leading-tight">{course.title}</h1>
              <p className="mt-4 text-lg text-primary-100">{course.description}</p>
              
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                <div className="flex items-center">
                  <Star className="mr-1 h-5 w-5 text-yellow-400" fill="currentColor" />
                  <span className="font-bold">{course.rating}</span>
                  <span className="ml-1 text-primary-200">({course.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center">
                  <Globe className="mr-1 h-5 w-5 text-primary-300" />
                  <span>{course.language}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="mr-1 h-5 w-5 text-primary-300" />
                  <span>{course.totalLectures} lectures</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-5 w-5 text-primary-300" />
                  <span>{course.totalDuration} total</span>
                </div>
                <div className="flex items-center">
                  <Award className="mr-1 h-5 w-5 text-primary-300" />
                  <span>{course.level}</span>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-sm text-primary-200">
                  Last updated: {formatDate(course.lastUpdated)}
                </p>
              </div>
              
              <div className="mt-6 flex items-center">
                <img
                  src={course.instructor.image}
                  alt={course.instructor.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="font-medium">Created by</p>
                  <p className="text-lg font-bold">{course.instructor.name}</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="overflow-hidden rounded-lg bg-white p-6 shadow-lg">
                <div className="relative mb-4 aspect-video overflow-hidden rounded-md bg-gray-900">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg transition-transform duration-200 hover:scale-110"
                    >
                      <Play size={32} fill="currentColor" />
                    </button>
                  </div>
                </div>
                
                <div className="mb-4 text-center">
                  <div className="flex items-center justify-center">
                    <p className="text-xl font-bold text-gray-500 line-through">{course.price}</p>
                    <p className="ml-2 text-3xl font-bold text-gray-900">{course.salePrice}</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">74% off - 3 days left at this price!</p>
                </div>
                
                <div className="space-y-3">
                  <Button fullWidth size="lg">Enroll Now</Button>
                  <Button fullWidth variant="outline">Add to Wishlist</Button>
                </div>
                
                <div className="mt-4">
                  <p className="text-center text-sm text-gray-500">
                    30-Day Money-Back Guarantee
                  </p>
                </div>
                
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Full course access</span>
                    <Check className="h-5 w-5 text-success-500" />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">25 downloadable resources</span>
                    <Check className="h-5 w-5 text-success-500" />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Certificate of completion</span>
                    <Check className="h-5 w-5 text-success-500" />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Lifetime access</span>
                    <Check className="h-5 w-5 text-success-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Content Tabs */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="mb-6 border-b border-gray-200">
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
                  onClick={() => setActiveTab('curriculum')}
                  className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
                    activeTab === 'curriculum'
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Curriculum
                </button>
                <button
                  onClick={() => setActiveTab('instructor')}
                  className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
                    activeTab === 'instructor'
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Instructor
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
                    activeTab === 'reviews'
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Reviews
                </button>
              </nav>
            </div>

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* What You'll Learn */}
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className="mb-4 text-xl font-bold text-gray-900">What You'll Learn</h2>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {course.whatYouWillLearn.map((item, index) => (
                      <div key={index} className="flex">
                        <Check className="mr-2 h-5 w-5 flex-shrink-0 text-success-500" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className="mb-4 text-xl font-bold text-gray-900">Requirements</h2>
                  <ul className="ml-6 list-disc space-y-2 text-gray-700">
                    {course.requirements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Course Description */}
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className="mb-4 text-xl font-bold text-gray-900">Course Description</h2>
                  <div className="prose max-w-none text-gray-700">
                    <p className="mb-4">
                      This comprehensive web development bootcamp takes you from absolute beginner to professional developer. You'll learn to build fully-fledged websites and web apps using the latest technologies and frameworks.
                    </p>

                    <p className="mb-4">
                      <strong>Why take this course?</strong>
                    </p>

                    <ul className="mb-4 ml-6 list-disc space-y-2">
                      <li>Project-based learning with 25+ real-world projects</li>
                      <li>Comprehensive curriculum covering both front-end and back-end development</li>
                      <li>Learn the most in-demand skills employers are looking for</li>
                      <li>Get personalized help in the Q&A section</li>
                      <li>Flexible learning - study at your own pace</li>
                    </ul>

                    <p className="mb-4">
                      <strong>Course content:</strong>
                    </p>

                    <p className="mb-4">
                      Beginning with the fundamentals of HTML and CSS, you'll progress through JavaScript, responsive design, React, Node.js, databases, and deployment. Each section includes detailed explanations, hands-on exercises, and projects to reinforce your learning.
                    </p>

                    <p className="mb-4">
                      By the end of this bootcamp, you'll have:
                    </p>

                    <ul className="mb-4 ml-6 list-disc space-y-2">
                      <li>A strong portfolio of real-world projects</li>
                      <li>The skills to build any website you can imagine</li>
                      <li>The ability to apply for junior developer positions</li>
                      <li>A comprehensive understanding of the web development ecosystem</li>
                    </ul>

                    <p>
                      Join thousands of students who have successfully transitioned into web development careers after taking this course!
                    </p>
                  </div>
                </div>

                {/* Featured Reviews */}
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">Featured Reviews</h2>
                    <button
                      onClick={() => setActiveTab('reviews')}
                      className="text-sm font-medium text-primary-600 hover:text-primary-700"
                    >
                      See all reviews
                    </button>
                  </div>
                  <div className="space-y-6">
                    {reviews.slice(0, 2).map((review) => (
                      <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                        <div className="flex items-center">
                          <img
                            src={review.user.image}
                            alt={review.user.name}
                            className="h-10 w-10 rounded-full object-cover"
                          />
                          <div className="ml-3">
                            <p className="font-medium text-gray-900">{review.user.name}</p>
                            <div className="flex items-center">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    size={16}
                                    className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}
                                    fill={i < review.rating ? 'currentColor' : 'none'}
                                  />
                                ))}
                              </div>
                              <span className="ml-2 text-sm text-gray-500">
                                {formatDate(review.date)}
                              </span>
                            </div>
                          </div>
                        </div>
                        <h3 className="mt-3 text-lg font-medium text-gray-900">{review.title}</h3>
                        <p className="mt-2 text-gray-700">{review.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Curriculum Tab */}
            {activeTab === 'curriculum' && (
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Course Content</h2>
                  <div className="text-sm text-gray-500">
                    {course.totalLectures} lectures • {course.totalDuration} total length
                  </div>
                </div>

                <div className="space-y-4">
                  {course.sections.map((section) => (
                    <div key={section.id} className="rounded-lg border border-gray-200">
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="flex w-full items-center justify-between rounded-t-lg bg-gray-50 px-6 py-4 text-left hover:bg-gray-100"
                      >
                        <div className="flex items-center">
                          {expandedSections.includes(section.id) ? (
                            <ChevronUp className="mr-2 h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="mr-2 h-5 w-5 text-gray-500" />
                          )}
                          <span className="font-medium text-gray-900">{section.title}</span>
                        </div>
                        <div className="text-sm text-gray-500">
                          {section.lectures} lectures • {section.duration}
                        </div>
                      </button>

                      {expandedSections.includes(section.id) && (
                        <div className="divide-y divide-gray-200 px-6 py-2">
                          {section.content.map((lecture) => (
                            <div key={lecture.id} className="flex items-center justify-between py-3">
                              <div className="flex items-center">
                                {lecture.type === 'video' && <Video size={16} className="mr-3 text-gray-500" />}
                                {lecture.type === 'article' && <FileText size={16} className="mr-3 text-gray-500" />}
                                {lecture.type === 'quiz' && <BookOpen size={16} className="mr-3 text-gray-500" />}
                                {lecture.type === 'download' && <Download size={16} className="mr-3 text-gray-500" />}
                                {lecture.type === 'exercise' && <CheckCircle size={16} className="mr-3 text-gray-500" />}
                                
                                <span className="text-gray-800">{lecture.title}</span>
                                
                                {lecture.isPreview && (
                                  <span className="ml-2 rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-800">
                                    Preview
                                  </span>
                                )}
                              </div>
                              <div className="text-sm text-gray-500">{lecture.duration}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Instructor Tab */}
            {activeTab === 'instructor' && (
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col items-start sm:flex-row sm:space-x-6">
                  <img
                    src={course.instructor.image}
                    alt={course.instructor.name}
                    className="mb-4 h-32 w-32 rounded-full object-cover sm:mb-0"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{course.instructor.name}</h2>
                    <p className="text-gray-600">{course.instructor.title}</p>

                    <div className="mt-4 flex flex-wrap gap-4">
                      <div className="flex items-center space-x-2">
                        <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                        <span className="text-gray-700">
                          {course.instructor.rating} Instructor Rating
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-700">
                          {course.instructor.courses} Courses
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-700">
                          {course.instructor.students.toLocaleString()} Students
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 text-gray-700">
                      <p className="mb-4">{course.instructor.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-8 grid gap-8 sm:grid-cols-2">
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-center">
                      <span className="text-5xl font-bold text-gray-900">{course.rating}</span>
                      <div className="mt-2 flex justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={24}
                            className="text-yellow-400"
                            fill={i < Math.floor(course.rating) ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>
                      <p className="mt-1 text-gray-500">Course Rating</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-medium text-gray-900">Rating Distribution</h3>
                    {[5, 4, 3, 2, 1].map((rating) => {
                      // Mock distribution data - would come from API
                      const percent = rating === 5 ? 78 : 
                                      rating === 4 ? 15 : 
                                      rating === 3 ? 5 : 
                                      rating === 2 ? 1 : 1;
                      
                      return (
                        <div key={rating} className="mb-2 flex items-center">
                          <div className="flex w-20 items-center">
                            <span className="mr-2 text-sm font-medium text-gray-700">{rating}</span>
                            <Star size={16} className="text-yellow-400" fill="currentColor" />
                          </div>
                          <div className="flex-1">
                            <div className="h-2 w-full rounded-full bg-gray-200">
                              <div 
                                className="h-2 rounded-full bg-yellow-400" 
                                style={{ width: `${percent}%` }}
                              />
                            </div>
                          </div>
                          <div className="ml-4 w-12 text-right text-sm text-gray-500">
                            {percent}%
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                      <div className="flex items-center">
                        <img
                          src={review.user.image}
                          alt={review.user.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div className="ml-3">
                          <p className="font-medium text-gray-900">{review.user.name}</p>
                          <div className="flex items-center">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={16}
                                  className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}
                                  fill={i < review.rating ? 'currentColor' : 'none'}
                                />
                              ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-500">
                              {formatDate(review.date)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <h3 className="mt-3 text-lg font-medium text-gray-900">{review.title}</h3>
                      <p className="mt-2 text-gray-700">{review.content}</p>
                      
                      <div className="mt-3 flex space-x-2">
                        <button className="text-sm font-medium text-gray-500 hover:text-gray-700">
                          Helpful
                        </button>
                        <span className="text-gray-300">|</span>
                        <button className="text-sm font-medium text-gray-500 hover:text-gray-700">
                          Report
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Course Information Card */}
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-medium text-gray-900">This course includes:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Video className="mr-3 mt-0.5 h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">{course.totalDuration} on-demand video</span>
                </li>
                <li className="flex items-start">
                  <FileText className="mr-3 mt-0.5 h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">25 articles</span>
                </li>
                <li className="flex items-start">
                  <Download className="mr-3 mt-0.5 h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">78 downloadable resources</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="mr-3 mt-0.5 h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">15 coding exercises</span>
                </li>
                <li className="flex items-start">
                  <Award className="mr-3 mt-0.5 h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">Certificate of completion</span>
                </li>
                <li className="flex items-start">
                  <Globe className="mr-3 mt-0.5 h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">Access on all devices</span>
                </li>
                <li className="flex items-start">
                  <Clock className="mr-3 mt-0.5 h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">Full lifetime access</span>
                </li>
              </ul>
              
              <div className="mt-6 flex space-x-2">
                <Button fullWidth>Enroll Now</Button>
              </div>
              <p className="mt-3 text-center text-sm text-gray-500">
                30-Day Money-Back Guarantee
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-medium text-gray-900">Training 5 or more people?</h3>
              <p className="text-gray-700">
                Get your team access to 25,000+ top courses anytime, anywhere.
              </p>
              <Button variant="outline" fullWidth className="mt-4">
                Get EduLearn for Business
              </Button>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-medium text-gray-900">Share this course</h3>
              <div className="flex space-x-4">
                <button className="rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                  </svg>
                </button>
                <button className="rounded-full bg-blue-400 p-2 text-white hover:bg-blue-500">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
                  </svg>
                </button>
                <button className="rounded-full bg-red-500 p-2 text-white hover:bg-red-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.79 8.85s-.2-1.45-.8-2.09c-.77-.82-1.63-.82-2.03-.87-2.83-.2-7.08-.2-7.08-.2s-4.25 0-7.08.2c-.4.05-1.26.05-2.03.87-.6.64-.8 2.09-.8 2.09S1.76 10.5 1.76 12.19v1.57c0 1.62.2 3.26.2 3.26s.2 1.45.8 2.09c.77.82 1.8.8 2.25.88 1.63.16 6.96.2 6.96.2s4.25 0 7.08-.2c.4-.05 1.26-.05 2.03-.88.6-.64.8-2.1.8-2.1s.2-1.57.2-3.26v-1.57c0-1.62-.2-3.26-.2-3.26zM9.98 15.36V9.71l5.42 2.82-5.42 2.83z" />
                  </svg>
                </button>
                <button className="rounded-full bg-blue-600 p-2 text-white hover:bg-blue-700">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.66 7.96c-.08-.2-.24-.4-.5-.56-.2-.18-.48-.28-.72-.28l-.15.02c-.14.03-.28.1-.4.2-.15.12-.23.3-.24.48v.06c.02.2.07.37.22.56.17.2.37.3.58.3h.08c.16-.02.3-.06.42-.15.17-.1.28-.28.3-.47v-.02c0-.04 0-.08-.02-.1l-.07-.04zm-3.5-.95c-.23.03-.4.13-.55.28-.13.15-.2.33-.2.54v.07c.03.2.1.37.25.5.16.15.36.2.57.2h.1c.15-.02.3-.07.4-.17.16-.12.26-.3.3-.5v-.05c-.03-.2-.1-.36-.24-.5-.15-.13-.32-.2-.52-.2h-.1l-.02-.17zm-6.9 0c-.2.03-.38.13-.5.3-.14.15-.22.32-.22.52v.06c.03.2.12.38.26.53.15.16.34.25.57.22.08 0 .17-.02.24-.04.2-.06.35-.15.46-.3.13-.14.2-.33.2-.53v-.05c-.02-.2-.1-.36-.24-.5-.14-.14-.32-.22-.5-.22h-.08l-.16.02zm-3 .43c-.2.07-.35.2-.45.37-.1.18-.14.37-.12.57 0 .2.07.35.17.5.12.17.3.28.5.3h.27c.2-.03.35-.1.48-.25.14-.15.2-.34.2-.55-.02-.2-.05-.36-.17-.5-.1-.14-.25-.24-.43-.27h-.14c-.1 0-.2.03-.3.07zm5.33.44c-.2.03-.37.13-.52.3-.13.15-.22.32-.22.5v.06c.03.2.1.37.26.52.15.15.36.2.57.2h.04c.17 0 .3-.04.42-.13.17-.12.27-.28.3-.5v-.06c-.03-.2-.1-.36-.24-.5-.15-.13-.32-.22-.52-.2h-.1v-.2zm-1.26-.12c-.2.03-.37.13-.52.3-.13.15-.2.33-.2.5v.06c.02.22.1.4.25.55.15.15.36.2.57.2h.08c.16-.02.3-.06.42-.15.17-.1.27-.28.3-.48v-.05c-.03-.2-.1-.36-.24-.5-.15-.13-.32-.22-.52-.22h-.1l-.04-.2zm8.2 1.22c-.2.03-.37.13-.5.3-.13.15-.22.32-.22.5v.04c.02.22.1.4.25.55.15.15.36.22.58.2h.04c.17 0 .32-.04.43-.14.17-.12.27-.3.3-.5v-.05c-.03-.2-.1-.36-.24-.5-.15-.13-.32-.2-.52-.2h-.1-.02zm-12.85.12c-.15.04-.3.12-.4.24-.12.14-.18.3-.2.46v.06c.04.2.12.36.26.48.15.15.34.22.55.2h.08c.15-.02.3-.05.4-.15.12-.12.22-.27.24-.47v-.05c-.02-.17-.08-.3-.18-.42-.1-.13-.24-.22-.4-.24-.12-.02-.23-.02-.34 0h-.04zm16.37-.12c-.14.03-.28.1-.4.2-.15.12-.23.28-.24.48v.07c.02.2.1.36.25.5.15.15.36.2.57.18h.1c.15-.02.28-.07.38-.17.16-.13.26-.3.28-.48v-.1c-.02-.18-.1-.33-.2-.45-.12-.12-.24-.2-.4-.22-.1-.02-.2-.02-.3 0h-.02zM15.2.43c1.13.07 2.15.46 3.07 1.03.92.57 1.68 1.33 2.28 2.24.6.9 1 1.94 1.24 3.1.25 1.16.26 2.32.06 3.48-.2 1.16-.57 2.25-1.14 3.3-.57 1.03-1.28 1.93-2.14 2.67-.86.72-1.86 1.32-3 1.75-1.82.7-3.73.8-5.66.5l-.14-.02c-.8-.12-1.6-.35-2.35-.7-.75-.34-1.45-.76-2.1-1.25-.64-.5-1.22-1.06-1.75-1.72-.52-.64-.97-1.35-1.34-2.13-.35-.76-.62-1.57-.8-2.4L1.35 10c-.15-.7-.25-1.4-.3-2.17-.05-.76 0-1.5.07-2.3.07-.76.22-1.5.47-2.23.23-.75.54-1.45.9-2.13.4-.68.85-1.28 1.38-1.84L3.93 1.4c.56-.58 1.18-1.08 1.86-1.5.68-.4 1.4-.73 2.13-.94.76-.23 1.56-.36 2.37-.4.8-.07 1.53 0 2.28.15.76.14 1.52.4 2.28.8.05 0 .07.02.1.07.05.06.12.1.2.14h.06zM1.94 7.34c.05-.58.15-1.12.3-1.63.15-.52.35-1 .6-1.46.23-.47.5-.9.8-1.3.3-.42.65-.8 1.03-1.13.38-.34.8-.64 1.25-.9.44-.24.95-.43 1.46-.58.52-.15 1.06-.25 1.63-.3.56-.07 1.12-.07 1.7-.02.56.06 1.12.2 1.65.36.55.16 1.05.37 1.5.64.48.26.9.57 1.3.92.37.35.7.75 1 1.17.3.42.54.87.74 1.35l.02.05c.15.4.28.83.36 1.3.1.44.15.88.17 1.34v.1c.02.44 0 .9-.07 1.36-.07.44-.18.9-.34 1.3-.15.42-.32.82-.54 1.18-.2.37-.47.7-.76 1.03-.3.3-.6.58-.97.8-.36.25-.75.45-1.17.6-.4.18-.84.3-1.3.37-.43.08-.87.1-1.33.1-.45-.02-.88-.06-1.3-.17-.42-.1-.84-.23-1.25-.42-.37-.17-.73-.37-1.03-.62-.8-.57-1.46-1.28-1.94-2.13-.5-.85-.83-1.76-.96-2.74L2 8.68c-.06-.27-.08-.55-.1-.8v-.2c0-.13.02-.25.03-.35zm14.75-1.53c-.23.05-.4.13-.55.28-.13.15-.2.33-.2.53v.07c.03.2.1.37.25.52.15.15.36.2.57.2h.1c.15-.03.28-.08.4-.17.16-.12.26-.3.28-.5v-.05c-.02-.2-.1-.36-.23-.5-.15-.13-.32-.2-.52-.2h-.1v-.18zm3.37-.95c-.24 0-.43.08-.6.24-.16.16-.25.35-.25.58 0 .2.07.4.23.56.16.16.35.26.58.26.24 0 .43-.1.6-.26.14-.16.22-.35.2-.56-.02-.24-.1-.42-.25-.58-.16-.17-.35-.25-.5-.25z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;