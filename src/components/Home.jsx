import img from "../components/img/pro.jpg";

function Home() {
  return (
    <section
      id="home"
      className="h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center"
    >
      {/* Image Section */}
      <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg animate-fadeIn">
        <img
          src={img} 
          alt="Ali Elsharqawy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="text-center md:ml-8 mt-8 md:mt-0 px-4 animate-slideIn">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Hello, I'm</h1>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-blue-400">
          Ali Elsharqawy
        </h1>
        <p className="text-lg md:text-2xl">
          Front-End Developer | Building Responsive Websites
        </p>
      </div>
    </section>
  );
}

export default Home;
