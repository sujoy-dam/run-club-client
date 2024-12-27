import React from "react";
// import jhonDoe from '../assets/images/jhon-doe.jpeg'

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      comment: "The marathon was an unforgettable experience! The organization and the scenic route were amazing.",
      image: "https://i.ibb.co.com/Tqzq0MY/jhon-doe.jpg",
    },
    {
      name: "Sarah Smith",
      comment: "Running in this marathon boosted my confidence and helped me meet so many wonderful people.",
      image: "https://i.ibb.co.com/n03XFJf/sarah-smith.jpg",
    },
    {
      name: "Emily White",
      comment: "This was my first marathon, and it was absolutely worth it. Can't wait for the next one!",
      image: "https://i.ibb.co.com/JF2SsVQ/emaily-shite.jpg",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Runners Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              </div>
              <p className="text-gray-600">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
