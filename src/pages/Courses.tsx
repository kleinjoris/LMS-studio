import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, X, Star } from 'lucide-react';
import Button from '../components/ui/Button';

const Courses = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  
  // Mock data - would come from API in real app
  const categories = [
    { id: 'programming', name: 'Programming' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'personal-dev', name: 'Personal Development' },
  ];
  
  const levels = [
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' },
    { id: 'all-levels', name: 'All Levels' },
  ];
  
  const courses = [
    {
      id: '1',
      title: 'Complete Web Development Bootcamp',
      instructor: 'Sarah Johnson',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
      price: '$89.99',
      rating: 4.8,
      students: 15420,
      category: 'programming',
      level: 'all-levels',
      description: 'Learn web development from scratch. This comprehensive course covers HTML, CSS, JavaScript, React, Node.js and more.',
    },
    {
      id: '2',
      title: 'UI/UX Design Masterclass',
      instructor: 'Michael Chen',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      price: '$69.99',
      rating: 4.7,
      students: 8765,
      category: 'design',
      level: 'intermediate',
      description: 'Master the fundamentals of UI/UX design and create beautiful, user-friendly interfaces that customers will love.',
    },
    {
      id: '3',
      title: 'Digital Marketing Strategy',
      instructor: 'Emily Rodriguez',
      image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg',
      price: '$59.99',
      rating: 4.6,
      students: 12350,
      category: 'marketing',
      level: 'beginner',
      description: 'Learn proven digital marketing strategies to grow your business, increase brand awareness, and drive sales.',
    },
    {
      id: '4',
      title: 'Data Science and Machine Learning',
      instructor: 'David Kim',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
      price: '$94.99',
      rating: 4.9,
      students: 10280,
      category: 'data-science',
      level: 'advanced',
      description: 'Dive into data science and machine learning with Python. Learn statistical analysis, visualization, and model building.',
    },
    {
      id: '5',
      title: 'Business Management Fundamentals',
      instructor: 'Jessica Taylor',
      image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg',
      price: '$79.99',
      rating: 4.5,
      students: 7890,
      category: 'business',
      level: 'beginner',
      description: 'Learn essential business management skills including leadership, finance, operations, and strategic planning.',
    },
    {
      id: '6',
      title: 'Mobile App Development with React Native',
      instructor: 'Ryan Jackson',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
      price: '$84.99',
      rating: 4.7,
      students: 9450,
      category: 'programming',
      level: 'intermediate',
      description: 'Build cross-platform mobile apps for iOS and Android using React Native and JavaScript.',
    },
    {
      id: '7',
      title: 'Personal Productivity Mastery',
      instructor: 'Emma Wilson',
      image: 'https://images.pexels.com/photos/1059116/pexels-photo-1059116.jpeg',
      price: '$49.99',
      rating: 4.8,
      students: 14680,
      category: 'personal-dev',
      level: 'all-levels',
      description: 'Transform your productivity habits and achieve more in less time with proven time management techniques.',
    },
    {
      id: '8',
      title: 'Advanced JavaScript Patterns',
      instructor: 'Alex Thompson',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
      price: '$79.99',
      rating: 4.9,
      students: 6320,
      category: 'programming',
      level: 'advanced',
      description: 'Master advanced JavaScript patterns and techniques used by top-tier developers and tech companies.',
    },
  ];

  // Filter courses based on search and filters
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? course.category === selectedCategory : true;
    const matchesLevel = selectedLevel ? course.level === selectedLevel : true;
    const matchesRating = selectedRating ? course.rating >= selectedRating : true;
    
    return matchesSearch && matchesCategory && matchesLevel && matchesRating;
  });

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedLevel(null);
    setSelectedRating(null);
  };

  // Toggle mobile filters
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="font-serif text-3xl font-bold text-gray-900">Explore Courses</h1>
          <p className="mt-2 text-lg text-gray-600">
            Discover our wide range of courses to advance your skills and career
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          {/* Search Bar */}
          <div className="relative w-full md:max-w-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search courses or instructors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 text-gray-900 focus:border-primary-500 focus:ring-primary-500"
            />
          </div>

          {/* Filter Toggle (Mobile) */}
          <div className="flex justify-end md:hidden">
            <Button
              variant="outline"
              onClick={toggleFilters}
              className="flex items-center space-x-2"
            >
              <Filter size={16} />
              <span>Filters</span>
            </Button>
          </div>

          {/* Desktop Filters */}
          <div className="hidden space-x-4 md:flex">
            {/* Category Filter */}
            <select
              value={selectedCategory || ''}
              onChange={(e) => setSelectedCategory(e.target.value || null)}
              className="rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-10 text-gray-900 focus:border-primary-500 focus:ring-primary-500"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            {/* Level Filter */}
            <select
              value={selectedLevel || ''}
              onChange={(e) => setSelectedLevel(e.target.value || null)}
              className="rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-10 text-gray-900 focus:border-primary-500 focus:ring-primary-500"
            >
              <option value="">All Levels</option>
              {levels.map((level) => (
                <option key={level.id} value={level.id}>
                  {level.name}
                </option>
              ))}
            </select>

            {/* Rating Filter */}
            <select
              value={selectedRating || ''}
              onChange={(e) => setSelectedRating(e.target.value ? parseFloat(e.target.value) : null)}
              className="rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-10 text-gray-900 focus:border-primary-500 focus:ring-primary-500"
            >
              <option value="">Any Rating</option>
              <option value="4.5">4.5 & Up</option>
              <option value="4.0">4.0 & Up</option>
              <option value="3.5">3.5 & Up</option>
            </select>

            {/* Reset Filters Button */}
            {(selectedCategory || selectedLevel || selectedRating) && (
              <Button variant="ghost" onClick={resetFilters} className="flex items-center space-x-1">
                <X size={16} />
                <span>Reset</span>
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Filters Panel */}
        {showFilters && (
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:hidden">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Filters</h3>
              <Button variant="ghost" onClick={toggleFilters} size="sm">
                <X size={16} />
              </Button>
            </div>
            <div className="mt-4 space-y-4">
              {/* Category Filter */}
              <div>
                <label htmlFor="mobile-category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  id="mobile-category"
                  value={selectedCategory || ''}
                  onChange={(e) => setSelectedCategory(e.target.value || null)}
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Level Filter */}
              <div>
                <label htmlFor="mobile-level" className="block text-sm font-medium text-gray-700">
                  Level
                </label>
                <select
                  id="mobile-level"
                  value={selectedLevel || ''}
                  onChange={(e) => setSelectedLevel(e.target.value || null)}
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                >
                  <option value="">All Levels</option>
                  {levels.map((level) => (
                    <option key={level.id} value={level.id}>
                      {level.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Rating Filter */}
              <div>
                <label htmlFor="mobile-rating" className="block text-sm font-medium text-gray-700">
                  Rating
                </label>
                <select
                  id="mobile-rating"
                  value={selectedRating || ''}
                  onChange={(e) => setSelectedRating(e.target.value ? parseFloat(e.target.value) : null)}
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                >
                  <option value="">Any Rating</option>
                  <option value="4.5">4.5 & Up</option>
                  <option value="4.0">4.0 & Up</option>
                  <option value="3.5">3.5 & Up</option>
                </select>
              </div>

              <div className="flex justify-between pt-2">
                <Button variant="ghost" onClick={resetFilters} size="sm">
                  Reset All
                </Button>
                <Button onClick={toggleFilters}>Apply Filters</Button>
              </div>
            </div>
          </div>
        )}

        {/* Active Filters Display */}
        {(selectedCategory || selectedLevel || selectedRating) && (
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Active filters:</span>
            
            {selectedCategory && (
              <div className="flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm text-primary-700">
                <span>
                  {categories.find((c) => c.id === selectedCategory)?.name}
                </span>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="ml-1.5 rounded-full p-0.5 hover:bg-primary-100"
                >
                  <X size={14} />
                </button>
              </div>
            )}
            
            {selectedLevel && (
              <div className="flex items-center rounded-full bg-secondary-50 px-3 py-1 text-sm text-secondary-700">
                <span>
                  {levels.find((l) => l.id === selectedLevel)?.name}
                </span>
                <button
                  onClick={() => setSelectedLevel(null)}
                  className="ml-1.5 rounded-full p-0.5 hover:bg-secondary-100"
                >
                  <X size={14} />
                </button>
              </div>
            )}
            
            {selectedRating && (
              <div className="flex items-center rounded-full bg-accent-50 px-3 py-1 text-sm text-accent-700">
                <span>Rating: {selectedRating}+ stars</span>
                <button
                  onClick={() => setSelectedRating(null)}
                  className="ml-1.5 rounded-full p-0.5 hover:bg-accent-100"
                >
                  <X size={14} />
                </button>
              </div>
            )}
            
            <button
              onClick={resetFilters}
              className="ml-2 text-sm font-medium text-primary-600 hover:text-primary-700"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-500">
            Showing {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'}
          </p>
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 rounded-md bg-primary-600 px-2 py-1 text-xs font-semibold text-white">
                    {categories.find((c) => c.id === course.category)?.name}
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-800">
                      {levels.find((l) => l.id === course.level)?.name}
                    </span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                      <span className="ml-1 text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors duration-200 group-hover:text-primary-600">
                    {course.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-500">
                    by {course.instructor}
                  </p>
                  <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-gray-900">{course.price}</p>
                    <Button 
                      size="sm" 
                      onClick={() => navigate(`/courses/${course.id}`)}
                    >
                      View Course
                    </Button>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    {course.students.toLocaleString()} students enrolled
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-4 w-16">
              <Search className="h-16 w-16 text-gray-400" />
            </div>
            <h3 className="mb-2 text-lg font-medium text-gray-900">No courses found</h3>
            <p className="text-gray-600">
              We couldn't find any courses matching your search criteria. Try adjusting your filters or search term.
            </p>
            <Button 
              variant="outline" 
              className="mt-4" 
              onClick={resetFilters}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;