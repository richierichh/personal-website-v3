import Header from "./Header"
import { ChevronDown } from "lucide-react"
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SectionTitle = ({ title }: { title: string }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
    <div className="w-16 h-0.5 bg-gray-900 mx-auto"></div>
  </div>
)

export default function ProjectWorkday() {
  const navigate = useNavigate();
  const isHome = window.location.pathname === '/';
  const location = useLocation();

  const scrollToPrototype = () => {
    const el = document.getElementById('prototype');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Workday Case Study</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Improving user experience for one of the world's most popular job application platforms 
          </p>
          <div className="flex justify-center mb-12">
            <img
              src="/workday logo.png"
              alt="Workday Logo"
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              onClick={scrollToPrototype}
            >
              View Prototype
            </button>
            <button className="border border-gray-300 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Read Full Study
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <ChevronDown className="h-6 w-6 text-gray-400 animate-bounce" />
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="space-y-20">

          {/* Overview */}
          <section>
            <SectionTitle title="Overview" />
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                I have been actively applying to product management and software engineering roles through Workday and can't help but notice several improvements that could be made to the user flow. This case study demonstrates my ability to identify user pain points, conduct research, align product decisions with business goals, and prioritize improvements for a more seamless application experience.
              </p>
            </div>
          </section>

          {/* My Role */}
          <section>
            <SectionTitle title="My Role" />
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                I will be taking on a role as a product manager and will be responsible for gathering user data, researching, prioritizing features, creating a new user workflow, and designing an improved user
                interface prototype.
              </p>
            </div>
          </section>

          {/* Skills */}
          <section>
            <SectionTitle title="Skills Applied" />
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Product Discovery & User Research",
                "Problem Framing",
                "Competitive Analysis (LinkedIn, Greenhouse, Lever)",
                "MVP Definition",
                "Wireframing & Prototyping (Figma/Sketch)",
                "Product Metrics & Success Criteria",
                "A/B Test Planning",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <span className="text-gray-800 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Background */}
          <section>
            <SectionTitle title="Background" />
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                Workday is a leading human capital management platform used by many Fortune 500 companies to manage their hiring processes. While it offers powerful enterprise features, the job application experience, especially when transitioning from platforms like LinkedIn, may feel redundant and repetitive. As a job seeker, I've observed opportunities to simplify the process, reduce repetitive data entry, and modernize the user experience to match industry standards.
              </p>
            </div>
          </section>

          {/* Problem Statement */}
          <section>
            <SectionTitle title="Problem Statement" />
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white shadow-lg">
              <p className="text-xl font-medium leading-relaxed">
                How can we improve the user experience of Workday, one of the world's most widely used job application platforms, to increase application completion rates and reduce drop-off after users click "Apply" from job boards like LinkedIn?
              </p>
            </div>
          </section>

          {/* Research Process */}
          <section>
            <SectionTitle title="Research Process" />
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-blue-600 mr-2">📊</span>
                  User Surveys
                </h3>
                <p className="text-gray-600 mb-4 font-medium">Key findings from a survey of 25 users:</p>
                <ul className="text-gray-600 space-y-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-semibold mr-3 text-lg">1.</span>
                    <div>
                      <strong className="text-gray-800">Most Common Frustrations:</strong>
                      <p className="mt-1">Repeatedly entering the same information and poor navigation were the most frequently reported pain points.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-semibold mr-3 text-lg">2.</span>
                    <div>
                      <strong className="text-gray-800">User Sentiment:</strong>
                      <p className="mt-1">Over 90% of respondents rated their overall experience using Workday as 1 or 2 out of 5, suggesting it lags behind competitors.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-semibold mr-3 text-lg">3.</span>
                    <div>
                      <strong className="text-gray-800">Desire for Improvement:</strong>
                      <p className="mt-1">92% of respondents said they would prefer a 1-click apply system that autofills their information, highlighting a strong demand for simplification and efficiency.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Competitive Research */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-green-600 mr-2">🔍</span>
                  Competitive Research
                </h3>
                <p className="text-gray-600 mb-4">
                  Researched competitors including LinkedIn Easy Apply, Greenhouse, Indeed, and Lever.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                    <img src="/linkedin.png" alt="LinkedIn Logo" className="w-12 h-12 object-contain mb-2 rounded" />
                    <span className="text-xs text-gray-600 text-center">LinkedIn</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                    <img src="/greenhouse.svg" alt="Greenhouse Logo" className="w-12 h-12 object-contain mb-2 rounded" />
                    <span className="text-xs text-gray-600 text-center">Greenhouse</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                    <img src="/indeed.jpg" alt="Indeed Logo" className="w-12 h-12 object-contain mb-2 rounded" />
                    <span className="text-xs text-gray-600 text-center">Indeed</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                    <img src="/lever.webp" alt="lever Logo" className="w-12 h-12 object-contain mb-2 rounded" />
                    <span className="text-xs text-gray-600 text-center">Lever</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>Key findings:</strong> All competitors had similarities such as updated modern UI, minimal data entry, a one page job application, and overall a seamless user experience compared to Workday.
                  </p>
                </div>
              </div>
            </div>

            {/* Research Images */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center">
                <img 
                  src="/1Click.png" 
                  alt="1-Click Apply Feature" 
                  className="w-full h-48 object-scale-down rounded-xl shadow-md hover:shadow-lg transition-shadow"
                />
                <p className="text-sm text-gray-600 mt-2 text-center">1-Click Apply Feature</p>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="/Rating.png" 
                  alt="User Rating System" 
                  className="w-full h-48 object-scale-down rounded-xl shadow-md hover:shadow-lg transition-shadow"
                />
                <p className="text-sm text-gray-600 mt-2 text-center">User Rating System</p>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="/Issues.png" 
                  alt="Common Issues Identified" 
                  className="w-full h-48 object-scale-down rounded-xl shadow-md hover:shadow-lg transition-shadow"
                />
                <p className="text-sm text-gray-600 mt-2 text-center">Common Issues Identified</p>
              </div>
            </div>
          </section>

          {/* Problem Framing */}
          <section>
            <SectionTitle title="Problem Framing" />
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👤</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">User Goal</h3>
                <p className="text-gray-600">Apply to jobs quickly, confidently, and with minimal redundancy.</p>
              </div>
              <div className="text-center p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Goal</h3>
                <p className="text-gray-600">Increase completed applications and maintain data consistency.</p>
              </div>
              <div className="text-center p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Core Problem</h3>
                <p className="text-gray-600">
                  The current flow creates friction right when candidate interest is highest after clicking "Apply."
                </p>
              </div>
            </div>
          </section>

          {/* Opportunities Matrix */}
          <section>
            <SectionTitle title="Opportunities Matrix" />
            <div className="bg-white border border-gray-200 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="p-4 text-gray-900 font-semibold">Opportunity</th>
                    <th className="p-4 text-gray-900 font-semibold">Impact</th>
                    <th className="p-4 text-gray-900 font-semibold">Effort</th>
                    <th className="p-4 text-gray-900 font-semibold">Priority</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <td className="p-4">Updated UI with Seamless redirect + Profile creation with resume info</td>
                    <td className="p-4">Reduces time spent applying to jobs and reduces drop off rate</td>
                    <td className="p-4">
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                        Medium
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        High
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <td className="p-4">Application progress tracker with notifications</td>
                    <td className="p-4">Decreases uncertainty with text/email notifications</td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Low
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        High
                      </span>
                    </td>
                  </tr>
                  <tr className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <td className="p-4">One click batch apply</td>
                    <td className="p-4">Reduces time spent applying to jobs</td>
                    <td className="p-4">
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">High</span>
                    </td>
                    <td className="p-4">
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                        Medium
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Improved User Flow */}
          <section>
            <SectionTitle title="Improved User Flow" />
            <div className="space-y-6">
              {[
                'Click "Apply" on LinkedIn',
                "Smart redirect to Workday → Autofill user profile with resume",
                "Pre-filled form + Progress indicator",
                "Confirm & Submit",
                "Receive confirmation email",
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-6 bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-800 text-lg">{step}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Prototype Section */}
          <section id="prototype">
            <SectionTitle title="Prototype" />
            <div className="bg-white border border-gray-200 rounded-2xl p-6 overflow-hidden shadow-sm hover:shadow-md transition-all">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="w-full rounded-xl overflow-hidden shadow-lg border border-gray-100">
                    <img
                      src="/Workday Prototype 1.png"
                      alt="Workday Prototype 1"
                      className="w-full h-[34rem] object-cover object-top"
                    />
                  </div>
                  <p className="mt-4 text-base text-gray-800 font-semibold">
                    Autofill from Resume
                  </p>
                </div>

                <div className="flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="w-full rounded-xl overflow-hidden shadow-lg border border-gray-100">
                    <img
                      src="/Workday Prototype 2.png"
                      alt="Workday Prototype 2"
                      className="w-full h-[34rem] object-contain"
                    />
                  </div>
                  <p className="mt-4 text-base text-gray-800 font-semibold">
                    One-Click Apply Using Workday Profile
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* Pain Points Section */}
          <section>
            <SectionTitle title="How It Solves User Pain Points" />

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">

              <div className="grid md:grid-cols-2 gap-6">

                <div className="p-4 rounded-xl border border-gray-100 bg-gray-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <h3 className="font-semibold text-lg mb-2">1. Smart Resume Parsing</h3>
                  <p className="text-gray-600">
                    The system fully parses the user’s resume and autofills only the required fields, reducing manual input
                    and preventing duplicated information entry.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-gray-100 bg-gray-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <h3 className="font-semibold text-lg mb-2">2. Seamless Editing</h3>
                  <p className="text-gray-600">
                    Users can review and edit any section instantly without using the back button or navigating
                    through multiple pages, improving the clarity and control of the application flow.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-gray-100 bg-gray-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <h3 className="font-semibold text-lg mb-2">3. One-Click Apply</h3>
                  <p className="text-gray-600">
                    Information autofills immediately, allowing users to confirm their details and submit the
                    application in one click—speeding up the process and reducing friction.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-gray-100 bg-gray-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <h3 className="font-semibold text-lg mb-2">4. Modern Updated UI</h3>
                  <p className="text-gray-600">
                    The redesigned interface provides a cleaner, more intuitive experience with clearer navigation,
                    improved layout, and smoother interactions for applicants.
                  </p>
                </div>

              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}