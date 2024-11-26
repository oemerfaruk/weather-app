export default function SearchInput({city,setCity}){
    return (
        <div>
            <input
                type="text"
                placeholder="Şehir adı girin"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
        </div>
    )
}