
import { HomeContainer, HomeImage } from './Home.style';
import Header from '../../components/header/Header';
import { useGlobalContext } from "../../context"
import homeImg from "../../assets/books.jpg"

const Home = () => {
    const { myData } = useGlobalContext()

    return (
        <HomeContainer>
            <Header />
            <HomeImage>
                <img src={homeImg} alt="home" />
            </HomeImage>
        </HomeContainer>
    )
}

export default Home