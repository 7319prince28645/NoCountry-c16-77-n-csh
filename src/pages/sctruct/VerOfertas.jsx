import React from "react";
import './css/CarrouselCards.css'
import CarrouselCards from './CarrouselCards';

function VerOfertas() {
  return (
    <div className="fixed bottom-10 left-10 z-50">
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-bold  button">
      Ver Ofertas
    </button>
  </div>
  );
}

export default VerOfertas;
/*.voltage-button {
  position: relative;
}

.voltage-button button {
  color: white;
  background: #0D1127;
  padding: 1rem 3rem 1rem 3rem;
  border-radius: 5rem;
  border: 5px solid #5978F3;
  font-size: 1.2rem;
  line-height: 1em;
  letter-spacing: 0.075em;
  transition: background 0.3s;
}

.voltage-button button:hover {
  cursor: pointer;
  background: #0F1C53;
}

.voltage-button button:hover + svg, .voltage-button button:hover + svg + .dots {
  opacity: 1;
}

.voltage-button svg {
  display: block;
  position: absolute;
  top: -0.75em;
  left: -0.25em;
  width: calc(100% + 0.5em);
  height: calc(100% + 1.5em);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s;
  transition-delay: 0.1s;
}

.voltage-button svg path {
  stroke-dasharray: 100;
  filter: url("#glow");
}

.voltage-button svg path.line-1 {
  stroke: #f6de8d;
  stroke-dashoffset: 0;
  animation: spark-1 3s linear infinite;
}

.voltage-button svg path.line-2 {
  stroke: #6bfeff;
  stroke-dashoffset: 500;
  animation: spark-2 3s linear infinite;
}

.voltage-button .dots {
  opacity: 0;
  transition: opacity 0.3s;
  transition-delay: 0.4s;
}

.voltage-button .dots .dot {
  width: 1rem;
  height: 1rem;
  background: white;
  border-radius: 100%;
  position: absolute;
  opacity: 0;
}

.voltage-button .dots .dot-1 {
  top: 0;
  left: 20%;
  animation: fly-up 3s linear infinite;
}

.voltage-button .dots .dot-2 {
  top: 0;
  left: 55%;
  animation: fly-up 3s linear infinite;
  animation-delay: 0.5s;
}

.voltage-button .dots .dot-3 {
  top: 0;
  left: 80%;
  animation: fly-up 3s linear infinite;
  animation-delay: 1s;
}

.voltage-button .dots .dot-4 {
  bottom: 0;
  left: 30%;
  animation: fly-down 3s linear infinite;
  animation-delay: 2.5s;
}

.voltage-button .dots .dot-5 {
  bottom: 0;
  left: 65%;
  animation: fly-down 3s linear infinite;
  animation-delay: 1.5s;
}

@keyframes spark-1 {
  to {
    stroke-dashoffset: -1000;
  }
}

@keyframes spark-2 {
  to {
    stroke-dashoffset: -500;
  }
}

@keyframes fly-up {
  0% {
    opacity: 0;
    transform: translateY(0) scale(0.2);
  }

  5% {
    opacity: 1;
    transform: translateY(-1.5rem) scale(0.4);
  }

  10%, 100% {
    opacity: 0;
    transform: translateY(-3rem) scale(0.2);
  }
}

@keyframes fly-down {
  0% {
    opacity: 0;
    transform: translateY(0) scale(0.2);
  }

  5% {
    opacity: 1;
    transform: translateY(1.5rem) scale(0.4);
  }

  10%, 100% {
    opacity: 0;
    transform: translateY(3rem) scale(0.2);
  }
}*/
