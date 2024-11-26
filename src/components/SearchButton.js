export default function SearchButton({ fetchWeather}){
    return(
        <div>
            <button onClick={fetchWeather}>Hava Durumunu Getir</button>
        </div>
    )
}