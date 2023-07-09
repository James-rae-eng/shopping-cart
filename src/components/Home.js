import { Link } from "react-router-dom"

const Home = () => {

    return (
        <div className="home">
            <h1>Welcome to Ocean coffee</h1>
            <p>
                Here you'll find only the best cofee that's ocean approved.<br></br>
                The blends should be made with a caffetiere ONLY! No instant mixes will be found here.<br></br>
                We also do tea, have a look at what we have below:
            </p>
            <Link to="/shop">See our products</Link>
        </div>
    );
}

export default Home;