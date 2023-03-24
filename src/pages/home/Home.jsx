
import { HomeContainer, HomeImage, MainContainer } from './Home.style';
import Header from '../../components/header/Header';
import { useGlobalContext } from "../../context"
import homeImg from "../../assets/books.jpg"
import Card from '../../components/card/Card';

const Home = () => {
    const { myData } = useGlobalContext()

    return (
        <HomeContainer>
            <Header />

            <HomeImage>
                <img src={homeImg} alt="home" />
            </HomeImage>

            <MainContainer>
                <Card/>
            </MainContainer>
        </HomeContainer>
    )
}

export default Home