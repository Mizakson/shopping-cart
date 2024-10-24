import Nav from "../Nav/Nav";
import Info from "../Info/Info";

function Home() {
    return (
        <div data-testid='home'>
            <Nav />
            <Info />
            {/* display Info component here */}
        </div >

    )
}

export default Home