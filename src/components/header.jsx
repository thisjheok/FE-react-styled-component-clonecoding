import styled from "styled-components"
const OuterWrapper = styled.div`
    width: 100%;
    background-color: #212529; 
`

const Wrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;  
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px 10px; 
    color:white;
`;

const Logo = styled.h2`
    margin: 0; // 기본 마진 제거
`;

const Button = styled.button`
    padding: 8px 16px;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid;
    background-color: #212529; 
    color: white;
    cursor: pointer; // 마우스 포인터 변경
`;

const Header = () =>{
    return(
        <OuterWrapper>
        <Wrapper>
            <Logo>Album</Logo>
            <Button></Button>
        </Wrapper>
        </OuterWrapper>
    );
}

export default Header;