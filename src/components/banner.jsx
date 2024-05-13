import styled from "styled-components"

const Wrapper = styled.div`
    text-align: center;
    padding: 90px;
    display: flex;
    justify-content: center; // 가운데 정렬
    align-items: center; // 세로 방향으로 중앙 정렬
    margin: 0 auto;
    flex-direction: column;
`

const Text = styled.p`
    display: flex;
    justify-content: center; // 가운데 정렬
    align-items: center; // 세로 방향으로 중앙 정렬
    max-width: 600px; // 최대 너비 설정
    margin: auto; // 좌우 마진 자동으로 설정하여 가운데 정렬
    padding: 20px; // 내부 패딩 감소
    font-size: 20px;
`

const MyButton = styled.button`
    padding: 10px;
    margin: 5px;
    border-radius: 4px;
    font-size: 1rem;
    border: 1px solid lightgray;
    cursor: pointer;
    
    color:${(props) => props.color ||"black"};
    background-color: ${(props)=>props.backgroundColor||"white"};
    &:hover {
        background-color: ${(props) => props.hoverBackgroundColor || "lightgray"}; 
        color: ${(props) => props.hoverColor || "white"}; 
    }
`

const ButtonGroup = styled.div`
    display: flex; // Flex 디스플레이 설정
    justify-content: center; // 가운데 정렬
`

const TextTitle = styled.div`
    font-size: 40px;
`

const Banner = () =>{
    return(
        <Wrapper>
            <TextTitle>Album example</TextTitle>
            <Text>Something short and leading about the collection below—its contents, the creator, etc. 
                Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</Text>
                <ButtonGroup>
                <MyButton color={"white"} backgroundColor={"#007bff;"} hoverBackgroundColor={"#005ec3"}>Main call to action</MyButton>
                <MyButton color={"white"} backgroundColor={"#6c757d;"} hoverBackgroundColor={"#5e6d7a"}>Secondary action</MyButton>
            </ButtonGroup>
        </Wrapper>
    );
}

export default Banner;