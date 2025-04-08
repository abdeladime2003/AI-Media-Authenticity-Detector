const Testimonials = () => {
    const testimonials = [
      {
        quote: "This tool caught a deepfake our team missed. Game-changer for media verification.",
        author: "Sarah K., Cybersecurity Lead",
        role: "Fortune 500 Company"
      },
      {
        quote: "The accuracy is unmatched. We've integrated it into our content moderation workflow.",
        author: "David M.",
        role: "Social Media Platform"
      }
    ];
  
    return (
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Trusted by Industry Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl">
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-white font-medium">{testimonial.author}</p>
                <p className="text-purple-400 text-sm">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;