import React from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  Award, 
  Users, 
  Download,
  Calendar,
  Coffee,
  ChefHat,
  Utensils
} from 'lucide-react';

function App() {
  const skills = [
    { name: 'Customer Service', level: 95, icon: Users },
    { name: 'Food Safety', level: 90, icon: ChefHat },
    { name: 'Cash Handling', level: 85, icon: Award },
    { name: 'Team Collaboration', level: 92, icon: Users },
    { name: 'Order Processing', level: 88, icon: Utensils },
    { name: 'Time Management', level: 90, icon: Clock }
  ];

  const experience = [
    {
      title: 'Crew Member',
      company: 'Quick Serve Restaurant',
      duration: '2022 - 2024',
      responsibilities: [
        'Provided excellent customer service to 200+ customers daily',
        'Operated POS systems and handled cash transactions',
        'Maintained food safety standards and cleanliness protocols',
        'Collaborated effectively with team members during peak hours'
      ]
    },
    {
      title: 'Food Service Assistant',
      company: 'Local Diner',
      duration: '2021 - 2022',
      responsibilities: [
        'Assisted kitchen staff with food preparation',
        'Managed inventory and restocked supplies',
        'Maintained clean work environment',
        'Learned multitasking in fast-paced environment'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <nav className="bg-white/80 backdrop-blur-md fixed w-full top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-800">Sohayb Fatmi</h1>
            <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors">
              <Download size={16} />
              Download CV
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              YN
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Sohayb Fatmi
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Dedicated Restaurant Professional
            </p>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Experienced food service professional with a passion for delivering exceptional customer experiences. 
              Seeking to bring my skills and enthusiasm to restaurants.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-orange-500" />
              <span>Oujda, Morocco</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-orange-500" />
              <span>+212 7 03 38 55 16</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-orange-500" />
              <span>fatmi.sohayb2005@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Professional Summary</h3>
                <p className="text-gray-700 leading-relaxed">
                  Reliable and energetic team player with 3+ years of restaurant experience. 
                  Known for maintaining high standards of food safety, providing excellent customer service, 
                  and working efficiently under pressure. Committed to contributing to a positive work environment.
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Key Strengths</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Star size={16} className="text-orange-500" />
                    Fast learner with strong attention to detail
                  </li>
                  <li className="flex items-center gap-2">
                    <Star size={16} className="text-orange-500" />
                    Excellent communication and interpersonal skills
                  </li>
                  <li className="flex items-center gap-2">
                    <Star size={16} className="text-orange-500" />
                    Flexible schedule and reliable attendance
                  </li>
                  <li className="flex items-center gap-2">
                    <Star size={16} className="text-orange-500" />
                    Positive attitude and team-oriented mindset
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Availability</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-blue-500" />
                    <span className="text-gray-700">Monday - Sunday</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-blue-500" />
                    <span className="text-gray-700">6:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Coffee size={16} className="text-blue-500" />
                    <span className="text-gray-700">All shifts available</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Certifications</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Award size={16} className="text-green-500" />
                    Food Safety Certification
                  </li>
                  <li className="flex items-center gap-2">
                    <Award size={16} className="text-green-500" />
                    Customer Service Training
                  </li>
                  <li className="flex items-center gap-2">
                    <Award size={16} className="text-green-500" />
                    Cash Handling Certification
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Skills & Competencies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <IconComponent size={24} className="text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-orange-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 mt-1 block">{skill.level}% Proficiency</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Work Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                    <p className="text-xl text-blue-600 font-semibold">{job.company}</p>
                  </div>
                  <span className="text-orange-600 font-semibold bg-orange-100 px-3 py-1 rounded-full text-sm">
                    {job.duration}
                  </span>
                </div>
                <ul className="space-y-3">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <Star size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Join Your Team</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            I'm excited about the opportunity to contribute to McDonald's success. 
            Let's discuss how my experience and enthusiasm can benefit your restaurant.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Phone size={32} className="mx-auto mb-3 text-orange-400" />
              <h3 className="font-semibold mb-2">Call Me</h3>
              <p className="text-blue-100">+212 7 03 38 55 16</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Mail size={32} className="mx-auto mb-3 text-orange-400" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-blue-100">fatmi.sohayb2005@gmail.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <MapPin size={32} className="mx-auto mb-3 text-orange-400" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-blue-100">Oujda, Morocco</p>
            </div>
          </div>
          
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg">
            Contact Me Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Sohayb Fatmi. Ready to serve with excellence.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;