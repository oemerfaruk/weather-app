export default function Search({ city, setCity, fetchWeather }){
    return(
        <div>
            <input
                type="text"
                placeholder="Şehir"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="bg-blue-100 text-center h-10 rounded-l-xl border-l border-y border-black"
            />
            <button
                onClick={fetchWeather}
                className="text-white font-bold bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-center px-2 h-10 rounded-r-xl border-r border-y border-black">
                Sorgula
            </button>
        </div>
    )
}