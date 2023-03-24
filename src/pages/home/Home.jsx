
import { HomeContainer } from './Home.style';
import Header from '../../components/header/Header';
import { useGlobalContext } from "../../context"

const Home = () => {
    const { myData } = useGlobalContext()

    return (
        <HomeContainer>
            <Header />
        </HomeContainer>
    )
}

export default Home