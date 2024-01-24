function App() {

  
  const API_KEY = process.env.API_KEY;
  const url  = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${API_KEY}`


  return (
    <div className="w-full h-full relative">
      <div className="text-center p-4">
        <input
          type="text"
          className="py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md"
          placeholder="Enter location"
        />
      </div>
    </div>
  );
}

export default App;
