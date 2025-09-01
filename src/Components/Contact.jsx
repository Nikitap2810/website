import React from 'react';
import { Mail, Phone, Linkedin,  ArrowLeft } from 'lucide-react';
// import Photo from '../assets/photo.jpeg'; // Replace with your actual image
import CV from '../assets/Nikita_Patel_CV.pdf'; // Replace with your actual CV file

const UserInfo = ({ goBack }) => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-10">
      {/* Back Button */}
      <button
        onClick={goBack}
        className="text-black font-semibold text-xl flex items-center space-x-2 absolute left-4 top-16"
      >
        <ArrowLeft size={20} />
      </button>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-6">
        {/* Profile Photo */}
        <div className="flex flex-col items-center mb-6">
         <div className="order-2 border-dashed rounded-xl w-24 h-24 mb-2 flex items-center justify-center bg-gray-200 text-3xl font-bold text-gray-600">
  N
</div>
          <h2 className="text-2xl font-semibold text-gray-800">Nikita Patel</h2>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <a
            href="mailto:nikitapatel2072@gmail.com"
            className="flex items-center p-3 bg-gray-50 rounded-lg"
          >
            <Mail className="w-5 h-5 text-gray-500 mr-3" />
            <span className="text-gray-700">nikitapatel2072@gmail.com</span>
          </a>

          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <Phone className="w-5 h-5 text-gray-500 mr-3" />
            <span className="text-gray-700">+91 9967018263</span>
          </div>

          <a
            href="https://www.linkedin.com/in/nikita-patel-1556ba317"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Linkedin className="w-5 h-5 text-gray-500 mr-3" />
            <span className="text-blue-600">LinkedIn</span>
          </a>

          {/* <a
            href="https://github.com/" // Add your actual GitHub profile link if available
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Github className="w-5 h-5 text-gray-500 mr-3" />
            <span className="text-gray-700">GitHub</span>
          </a> */}

          {/* CV Download */}
          <a
            href={CV}
            download
            className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
