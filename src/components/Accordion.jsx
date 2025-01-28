import React, { useState } from "react";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      id: 1,
      title: "Loremipsum dolor sit amet",
      content: "Información adicional sobre el servicio.",
    },
    {
      id: 2,
      title: "Sed do eiusmod tempor incididunt",
      content: "Información adicional sobre el servicio.",
    },
    {
      id: 3,
      title: "Sed do eiusmod tempor incididunt",
      content: "Información adicional sobre el servicio.",
    },
    {
      id: 4,
      title: "Sed do eiusmod tempor incididunt",
      content: "Información adicional sobre el servicio.",
    },
    {
      id: 5,
      title: "Sed do eiusmod tempor incididunt",
      content: "Información adicional sobre el servicio.",
    },
    {
      id: 6,
      title: "Sed do eiusmod tempor incididunt",
      content: "Información adicional sobre el servicio.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {services.map((service, index) => (
        <div key={service.id} className="py-2">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">
              {service.title}
            </h3>
            <button onClick={() => handleToggle(index)}>
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={activeIndex === index ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                ></path>
              </svg>
            </button>
          </div>
          {activeIndex === index && (
            <div className="mt-2 text-gray-600">{service.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
