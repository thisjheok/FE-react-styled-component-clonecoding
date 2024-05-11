import styled from "styled-components"

const OuterWrapper = styled.div`
    width: 100%;
    background-color: #f8f9fa; // 배경색을 여기에 적용
`
const Wrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;  
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 50px 10px; 
`
const Thumbnail = styled.div`
    width: 100%;
    height: 220px;
    background-image: url('/src/assets/chi.jpeg'); // 이미지 파일 경로
    background-size: cover; // 이미지가 썸네일 영역을 완전히 덮도록 설정
    background-position: center; // 이미지가 중앙에 위치하도록 설정
    border-radius: 3px;
`

const Detail = styled.div`
    color: black;
    padding: 10px;

`

const CardWrapper = styled.div`
    width: 310px;
    margin: 10px;
    border: 1px solid lightgray;
    border-radius: 6px;
`

const FootWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    padding-top: 0px;
    padding-bottom: 15px;
`

const ButtonGroup = styled.div`
    display: flex;
`

const Button = styled.button`
    background-color: white;
    padding:7px;
    border-radius: 2px;
`

const Content = ()=>{
    return(
        <OuterWrapper>
        <Wrapper>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </Wrapper>
        </OuterWrapper>
    )
}


const Card = ()=>{
    return(
        <CardWrapper>
            <Thumbnail></Thumbnail>
            <Detail>
                <p>This is a wider card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                </p>
            </Detail>
            <FootWrapper>
                <ButtonGroup>
                    <Button>View</Button>
                    <Button>Edit</Button>
                </ButtonGroup>

                <span>9 min</span>
            </FootWrapper>
        </CardWrapper>
    )
}

export default Content;