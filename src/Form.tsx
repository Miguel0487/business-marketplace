
const NewsletterForm = () => {
  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-lg font-bold mb-6 text-center">
        Would you like to receive our newsletter for free?
      </h2>
      
      <form className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Username"
            className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-[#007bff] hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Subscribe to Newsletter
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;