
const Header = () => {

    return(
         <header className="text-center py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black text-gray-100 mb-4">
          <span className="text-red-500">README</span> Generator
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
          Transform any GitHub repository into a
          <span className="text-red-400 font-semibold"> professional README </span>
          using AI.
        </p>
      </div>
    </header>
    )


}


export default Header;