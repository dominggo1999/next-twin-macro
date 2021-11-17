import { Container, Text } from '../components/Container';
import tw, { styled } from 'twin.macro';

const Home = () => {
  return (
    <Container>
      <Text>Welcome</Text>
      <p>Starter File for using 
        <a tw="text-purple-500 text-xl" target="_blank" href="https://github.com/ben-rogerson/twin.macro" rel="noreferrer noopener ">
        {" "}
          twin.macro
        {" "}
        </a> 
        with next js 12</p>  
    </Container>
  )
}

export default Home

