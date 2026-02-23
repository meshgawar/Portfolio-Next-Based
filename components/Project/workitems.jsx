export default function WorkItems({ item }) {
    return (
        
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className="work__img" onClick={() => {window.open(`${item.image}`)}} />
            <h3 className="work__title">{item.title}</h3>
            <p>{item.description}</p>
            <div className="work__button-container">
                <a href="#" className="work__button">
                    <i className="bx bxl-youtube work__button-icon"></i>YouTube 
                </a>
                
                <a href={item.link} className="work__button">
                    <i className="uil uil-globe work__button-icon"></i>Live 
                </a>
            </div>
        </div>
    )
}