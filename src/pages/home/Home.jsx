
import { HomeContainer, HomeImage, MainContainer } from './Home.style';
import Header from '../../components/header/Header';
import { useGlobalContext } from "../../context"
import homeImg from "../../assets/books.jpg"
import Card from '../../components/card/Card';

const Home = () => {
    const { myData } = useGlobalContext()

    return (
        <HomeContainer>
            <Header/>

            {!myData.length ? (
                <HomeImage>
                    <img src={homeImg} alt="home" />
                </HomeImage>
            ) : (
                <MainContainer wrap="wrap">
                    {
                        myData.map((item) => <Card key={item.id} item={item} />)
                    }
                </MainContainer>
            )}
        </HomeContainer>
    )
}

export default Home