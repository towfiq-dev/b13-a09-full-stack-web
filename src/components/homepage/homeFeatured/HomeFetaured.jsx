import { getFeatured } from '@/lib/data-fetch';
import React from 'react';
import Link from 'next/link';

const HomeFeatured = async () => {
  const featureds = await getFeatured();
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Top-Rated Doctors
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Discover our top 3 highly recommended specialist doctors available for appointments
        </p>
      </div>

      {/* Grid Layout - 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureds?.map((featured) => {
          const {
            _id,
            doctorName,
            specialty,
            experience,
            hospital,
            fee
          } = featured;

          return (
            <div 
              key={_id} 
              className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Doctor Avatar & Basic Info */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-blue-50 dark:bg-blue-950/30 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold">
                    👨‍⚕️
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white line-clamp-1">
                      {doctorName || "Dr. Ayesha Rahman"}
                    </h3>
                    <span className="inline-block bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs px-2.5 py-1 rounded-full font-medium mt-1">
                      {specialty || "Cardiologist"}
                    </span>
                  </div>
                </div>

                <hr className="border-gray-100 dark:border-neutral-800 my-4" />

                {/* Additional Details */}
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <span>💼</span>
                    <p>Experience: <span className="font-medium text-gray-800 dark:text-gray-200">{experience || "10 years"}</span></p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <p className="line-clamp-1">Hospital: <span className="font-medium text-gray-800 dark:text-gray-200">{hospital || "Labaid Hospital"}</span></p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span>💵</span>
                    <p>Visit Fee: <span className="font-medium text-gray-800 dark:text-gray-200">{fee || "800"} Tk</span></p>
                  </div>


                  <div className="flex items-center gap-2">
                    <span className="text-amber-500">⭐</span>
                    <p>Rating: <span className="font-bold text-amber-500">4.9</span> (50+ reviews)</p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6">
                <Link 
                  href={`/allNav/allAppointments/${_id}`}
                  className="w-full inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-xl transition-colors duration-200 shadow-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeFeatured;