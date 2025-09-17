// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// const Testimonials = () => {
//   const testimonialsRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (testimonialsRef.current) {
//       observer.observe(testimonialsRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const testimonials = [
//     {
//       name: 'Sarah Johnson',
//       role: 'Product Manager at TechCorp',
//       image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
//       quote: 'Samsul\'s attention to detail and user-centered approach transformed our product. The designs not only looked beautiful but significantly improved our conversion rates.',
//       rating: 5
//     },
//     {
//       name: 'Michael Chen',
//       role: 'CEO at StartupXYZ',
//       image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
//       quote: 'Working with Samsul was a game-changer. His ability to translate complex requirements into intuitive designs is unmatched. Highly recommended!',
//       rating: 5
//     },
//     {
//       name: 'Emily Rodriguez',
//       role: 'Marketing Director',
//       image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
//       quote: 'The user experience improvements Samsul implemented resulted in a 40% increase in user engagement. His strategic approach to design is exceptional.',
//       rating: 5
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const nextTestimonial = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <section ref={testimonialsRef} className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
//       <div className="max-w-4xl mx-auto">
//         <h2 className={`text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16 transition-all duration-1000 ${
//           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
//         }`}>
//           What Clients Say
//         </h2>

//         <div className={`relative transition-all duration-1000 delay-300 ${
//           isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
//         }`}>
//           <div className="bg-white dark:bg-gray-700 rounded-3xl p-8 md:p-12 shadow-2xl">
//             <div className="flex items-center justify-between mb-8">
//               <button
//                 onClick={prevTestimonial}
//                 className="p-3 bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 rounded-full transition-colors duration-300"
//               >
//                 <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
//               </button>
              
//               <div className="flex gap-2">
//                 {testimonials.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentIndex(index)}
//                     className={`w-3 h-3 rounded-full transition-colors duration-300 ${
//                       index === currentIndex
//                         ? 'bg-indigo-600'
//                         : 'bg-gray-300 dark:bg-gray-600'
//                     }`}
//                   />
//                 ))}
//               </div>

//               <button
//                 onClick={nextTestimonial}
//                 className="p-3 bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 rounded-full transition-colors duration-300"
//               >
//                 <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
//               </button>
//             </div>

//             <div className="text-center">
//               <div className="mb-6">
//                 <img
//                   src={testimonials[currentIndex].image}
//                   alt={testimonials[currentIndex].name}
//                   className="w-20 h-20 rounded-full mx-auto mb-4 shadow-lg"
//                 />
//                 <div className="flex justify-center gap-1 mb-4">
//                   {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                   ))}
//                 </div>
//               </div>
              
//               <blockquote className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">
//                 "{testimonials[currentIndex].quote}"
//               </blockquote>
              
//               <div>
//                 <p className="text-lg font-semibold text-gray-900 dark:text-white">
//                   {testimonials[currentIndex].name}
//                 </p>
//                 <p className="text-gray-600 dark:text-gray-400">
//                   {testimonials[currentIndex].role}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;