import { FaShieldAlt, FaClock, FaUserMd, FaAward, FaPhoneAlt, FaLock } from 'react-icons/fa';

const features = [
  {
    icon: <FaUserMd className="text-2xl text-cyan-500" />,
    title: 'Expert Doctors',
    desc: 'All our doctors are board-certified specialists with years of clinical experience.',
    bg: 'bg-cyan-50',
  },
  {
    icon: <FaClock className="text-2xl text-blue-500" />,
    title: '24/7 Availability',
    desc: 'Book appointments anytime, any day. Our platform is always open for you.',
    bg: 'bg-blue-50',
  },
  {
    icon: <FaShieldAlt className="text-2xl text-teal-500" />,
    title: 'Secure & Private',
    desc: 'Your health data is protected with industry-leading security standards.',
    bg: 'bg-teal-50',
  },
  {
    icon: <FaAward className="text-2xl text-yellow-500" />,
    title: 'Top Rated Service',
    desc: 'Thousands of patients trust us for their healthcare needs every month.',
    bg: 'bg-yellow-50',
  },
  {
    icon: <FaPhoneAlt className="text-2xl text-purple-500" />,
    title: 'Easy to Use',
    desc: 'Simple booking process — find, book, and manage your appointments with ease.',
    bg: 'bg-purple-50',
  },
  {
    icon: <FaLock className="text-2xl text-rose-500" />,
    title: 'Verified Profiles',
    desc: 'Every doctor profile is thoroughly verified before being listed on our platform.',
    bg: 'bg-rose-50',
  },
];

const WhyChooseUs = ()=> {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-600 text-sm font-semibold mb-4 border border-cyan-100">
              Why DocAppointment
            </span>
            <h2 className="text-4xl font-black text-slate-800 mb-6 leading-tight">
              Your Health Is Our{' '}
              <span className="text-cyan-500">Top Priority</span>
            </h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              We make healthcare accessible, convenient, and stress-free. With DocAppointment, you get the best medical care without the hassle of traditional booking systems.
            </p>

            <div className="flex flex-col gap-4">
              {[
                '100% verified and certified doctors',
                'Instant appointment confirmation',
                'Manage and track all your bookings',
                'Completely free to register and use',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-600 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="/auth/signup"
              className="inline-flex items-center gap-2 mt-10 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-600 transition-all duration-200 shadow-lg shadow-cyan-200 active:scale-95"
            >
              Get Started Free
            </a>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300 group cursor-default"
              >
                <div className={`w-12 h-12 ${f.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {f.icon}
                </div>
                <h3 className="font-bold text-slate-800 mb-1.5">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default WhyChooseUs;