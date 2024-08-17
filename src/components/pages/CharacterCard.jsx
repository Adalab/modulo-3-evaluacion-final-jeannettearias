function CharacterCard() {

    return (
        <section className="cards__section">
            <div>
                <ul className='cards' >
                    <li className="card" >
                        <div className="details">
                            <img src="https://ik.imagekit.io/hpapi/harry.jpg" className="card__img" alt="Picture of " />
                            <div>
                                <h3 className="card__title">Harry Potter</h3>
                                <p className="card__description">human</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default CharacterCard;