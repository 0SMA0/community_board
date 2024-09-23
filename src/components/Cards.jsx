const Card = (prop) => {
    return (
        <div className="Cards">
            <img src={prop.img} alt="store img" />
            <h3>
                {prop.Name}
            </h3>
                <h4>
                    {prop.culture}
                </h4>
            <a href={prop.link}>
                <button>View Menu</button>
            </a>
        </div>
    )
}
export default Card;