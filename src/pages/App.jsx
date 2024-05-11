// 해당 위치에 필요한 컴포넌트를 바탕으로 직접 Bootstrap Album 페이지를 개발하시면 됩니다.
import Header from "../components/header";
import Banner from "../components/banner";
import Content from "../components/content";
import styled from "styled-components";
import Footer from "../components/footer";
const AppWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
function App() {
  return <>
  <AppWrapper>
    <Header></Header>
    <Banner></Banner>
    <Content></Content>
    <Footer></Footer>
  </AppWrapper>
  </>;
}

export default App;
