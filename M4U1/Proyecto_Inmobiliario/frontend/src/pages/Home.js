import React from 'react';

const Home = (props) => {
    return(
        <main className="holder">
        <div>
            <img src="https://via.placeholder.com/960x300" alt=""/>
        </div>
        <div className="columnas">
            <section className="bienvenidos">
                <h2>Bienvenidos</h2>
                {/* <br> </br> */}
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum officia vel laboriosam, nemo itaque
                    repellat sequi enim error ducimus pariatur necessitatibus veritatis et at earum tempore quod
                    nesciunt facere
                    consequuntur!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fuga animi quidem quaerat delectus
                    libero
                    assumenda quo, placeat amet ducimus harum adipisci alias, maxime, accusantium doloribus odit saepe
                    eum nisi.
                </p>
            </section>

            <section className="testimonios">
                <h2>Comentarios</h2>
                {/* <br> </br> */}
                <div className="testimonio">
                    <span className="cita">"Muy serios y profesionales."</span>
                    <span className="autor">Pepe y Juan</span>
                </div>
            </section>
        </div>
    </main>
    )
}

export default Home;