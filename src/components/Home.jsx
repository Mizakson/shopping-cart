import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-container">
            <h2>Main St. Shop</h2>
            <div id="visit-shop">
                <p>Visit our <Link to="/shop">shop</Link> now!</p>
            </div>
            <div id="home-filler-text">
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Diam gravida vulputate orci tortor porta. 
                    Laoreet convallis at porta senectus purus ullamcorper tempor phasellus. Etiam auctor dolor mauris consectetur nibh aliquet semper. 
                    Fringilla vehicula amet et, hac viverra ante justo purus. Sit eros viverra fames nulla ipsum proin lectus.
                    Auctor elementum netus nisl facilisi neque platea feugiat morbi. Consequat per ornare facilisis aptent facilisis maximus habitasse.</p>
                <p>
                Duis sociosqu netus enim lobortis tempus ut sociosqu mattis. Consequat elit posuere dictum vel vel cras nibh ullamcorper. 
                Egestas pulvinar vestibulum laoreet mollis sed odio facilisis. Tortor curabitur inceptos sem torquent velit adipiscing vestibulum. 
                Consequat pretium velit nisi conubia commodo efficitur luctus nisl. Euismod erat primis parturient consequat nisl vitae; fermentum conubia. 
                Posuere phasellus interdum est diam per fringilla. Vehicula erat sagittis auctor commodo tristique.
                </p>
                <p>
                Dolor curae parturient risus facilisis cubilia augue phasellus mus. Efficitur consequat dis habitant, vehicula ornare iaculis. 
                Nisl mus sem at egestas; elementum ligula nunc. Praesent sapien lectus ut natoque volutpat accumsan. 
                Pellentesque platea eros scelerisque facilisi, amet facilisi netus tellus felis. 
                Ipsum quis neque sapien sed imperdiet nulla aliquet, integer habitasse. Venenatis ad varius himenaeos et taciti dui.
                </p>
            </div>
        </div>
    )
}

export default Home