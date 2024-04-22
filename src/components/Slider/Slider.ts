// import React from 'react';
// import './slider.css';

// interface Slide {
//   image: string;
//   title: string;
//   description: string;
// }

// interface SliderProps {
//   slides: Slide[];
// }

// const Slider: React.FC<SliderProps> = ({ slides }) => {
//   const [activeSlide, setActiveSlide] = React.useState(0);

//   const handleNextSlide = () => {
//     setActiveSlide((prevActiveSlide) => (prevActiveSlide + 1) % slides.length);
//   };

//   const handlePreviousSlide = () => {
//     setActiveSlide((prevActiveSlide) =>
//       prevActiveSlide === 0 ? slides.length - 1 : prevActiveSlide - 1
//     );
//   };

//   return (
    
//     <div className="slider">
//       <div className="slider-inner">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`slide ${index === activeSlide ? 'active' : ''}`}
//           >
//             <img src={slide.image} alt={slide.title} />
//             <div className="slide-content">
//               <h2>{slide.title}</h2>
//               <p>{slide.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <button className="slider-prev" onClick={handlePreviousSlide}>;
//         Anterior
//       </button>
//       <button className="slider-next" onClick={handleNextSlide}>;
//         Siguiente
//       </button>
//     </div>
//   );
// };

// export default Slider;
