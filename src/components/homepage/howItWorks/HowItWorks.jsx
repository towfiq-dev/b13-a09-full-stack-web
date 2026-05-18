import { FaSearch, FaCalendarCheck, FaUserMd, FaHeartbeat } from 'react-icons/fa';

const steps = [
  {
    icon: <FaSearch className="text-3xl text-white" />,
    step: '01',
    title: 'Find a Doctor',
    desc: 'Browse our extensive list of top-rated specialists and general practitioners across all medical fields.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: <FaCalendarCheck className="text-3xl text-white" />,
    step: '02',
    title: 'Book an Appointment',
    desc: 'Choose your preferred date and time slot. Our system makes booking fast, easy, and hassle-free.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: <FaUserMd className="text-3xl text-white" />,
    step: '03',
    title: 'Consult Your Doctor',
    desc: 'Visit the clinic at your scheduled time and get expert medical consultation and care.',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: <FaHeartbeat className="text-3xl text-white" />,
    step: '04',
    title: 'Stay Healthy',
    desc: 'Track your appointments, manage your health records, and stay on top of your wellness journey.',
    color: 'from-emerald-500 to-emerald-600',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-cyan-400 text-sm font-semibold mb-4 border border-white/10">
            Simple Process
          </span>
          <h2 className="text-4xl font-black text-white mb-4">
            How It <span className="text-cyan-400">Works</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Getting quality healthcare has never been easier. Follow these simple steps to book your appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => (
            <div key={idx} className="relative">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-slate-600 to-transparent z-0" />
              )}

              <div className="relative z-10 flex flex-col items-center text-center group">
                {/* Icon Circle */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>

                {/* Step Number */}
                <span className="text-slate-600 text-xs font-bold tracking-widest mb-2">{item.step}</span>

                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
