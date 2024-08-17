// import React from 'react';

// function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white py-8">
//       <div className="container mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="flex flex-col">
//             <h3 className="text-lg font-bold mb-4">Support</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:text-gray-300">Support Centre</a></li>
//               <li><a href="#" className="hover:text-gray-300">Safeguarding Space</a></li>
//               <li><a href="#" className="hover:text-gray-300">Cookies</a></li>
//               <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
//               <li><a href="#" className="hover:text-gray-300">Platform Rules</a></li>
//               <li><a href="#" className="hover:text-gray-300">Service Status</a></li>
//             </ul>
//           </div>
//           <div className="flex flex-col md:ml-8">
//             <h3 className="text-lg font-bold mb-4">Learn More</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:text-gray-300">Who we are</a></li>
//               <li><a href="#" className="hover:text-gray-300">What we do</a></li>
//               <li><a href="#" className="hover:text-gray-300">News</a></li>
//               <li><a href="#" className="hover:text-gray-300">Get involved</a></li>
//               <li><a href="#" className="hover:text-gray-300">Educator resources</a></li>
//               <li><a href="#" className="hover:text-gray-300">Educator awards</a></li>
//               <li><a href="#" className="hover:text-gray-300">Partner with us</a></li>
//             </ul>
//           </div>
//           <div className="flex flex-col md:ml-8">
//             <h3 className="text-lg font-bold mb-4">Search on the Site</h3>
//             <div className="flex items-center">
//               <input type="text" className="border border-gray-300 rounded p-2" placeholder="Search" />
//               <button className="bg-gray-200 text-gray-800 p-2 rounded ml-2">Q</button>
//             </div>
//             <p className="text-sm mt-4">Copyright © 2016-2024 by the Tony Blair Institute for Global Change</p>
//             <p className="text-sm">All rights reserved. Copies and reproduction of this publication, in whole or in part, for educational or other non-commercial purposes is authorised provided the source is fully acknowledged.</p>
//             <p className="text-sm">Generation Global is part of the Tony Blair Institute for Global Change. The Tony Blair Institute for Global Change, is a company limited by guarantee registered in England and Wales (registered company number 10505963) whose registered office is One Bartholomew Close, London, EC1A 7BL</p>
//             <div className="flex space-x-4 mt-4">
//               <img src="/app-store-badge.png" alt="Download on the App Store" className="h-8" />
//               <img src="/google-play-badge.png" alt="Get it on Google Play" className="h-8" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center text-center space-y-8 md:space-y-0 md:space-x-16">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Support Centre</a></li>
              <li><a href="#" className="hover:text-gray-300">Safeguarding Space</a></li>
              <li><a href="#" className="hover:text-gray-300">Cookies</a></li>
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300">Platform Rules</a></li>
              <li><a href="#" className="hover:text-gray-300">Service Status</a></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4">Learn More</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Who we are</a></li>
              <li><a href="#" className="hover:text-gray-300">What we do</a></li>
              <li><a href="#" className="hover:text-gray-300">News</a></li>
              <li><a href="#" className="hover:text-gray-300">Get involved</a></li>
              <li><a href="#" className="hover:text-gray-300">Educator resources</a></li>
              <li><a href="#" className="hover:text-gray-300">Educator awards</a></li>
              <li><a href="#" className="hover:text-gray-300">Partner with us</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-4">Search on the Site</h3>
            <div className="flex items-center">
              <input type="text" className="border border-gray-300 rounded p-2" placeholder="Search" />
              <button className="bg-gray-200 text-gray-800 p-2 rounded ml-2">Q</button>
            </div>
            <p className="text-sm mt-4">
              Copyright © 2016-2024 by the Tony Blair Institute for Global Change
            </p>
            <p className="text-sm">
              All rights reserved. Copies and reproduction of this publication, in whole or in part, for educational or other non-commercial purposes is authorised provided the source is fully acknowledged.
            </p>
            <p className="text-sm">
              Generation Global is part of the Tony Blair Institute for Global Change. The Tony Blair Institute for Global Change, is a company limited by guarantee registered in England and Wales (registered company number 10505963) whose registered office is One Bartholomew Close, London, EC1A 7BL
            </p>
            <div className="flex space-x-4 mt-4">
              <img src="/app-store-badge.png" alt="Download on the App Store" className="h-8" />
              <img src="/google-play-badge.png" alt="Get it on Google Play" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
