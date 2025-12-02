const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-primary opacity-10 rounded-full top-10 left-5 animate-float"></div>
        <div className="absolute w-48 h-48 bg-secondary opacity-10 rounded-full top-60 right-10 animate-float" style={{ animationDelay: '5s' }}></div>
        <div className="absolute w-36 h-36 bg-primary opacity-10 rounded-full bottom-10 left-20 animate-float" style={{ animationDelay: '10s' }}></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-primary">Emmanuel Mbewe</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            A passionate Fullstack Developer creating beautiful and functional web experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="btn"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="btn btn-secondary"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;