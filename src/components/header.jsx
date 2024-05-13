import styled from "styled-components"
import cameraLogo from '../assets/camera.svg'
import bar3 from '../assets/bar3.svg'
const OuterWrapper = styled.div`
    width: 100%;
    background-color: #212529; 
    position: fixed; // 헤더를 고정
    top: 0; // 상단에 위치
    left: 0; // 왼쪽에 위치
    z-index: 1000; // 다른 요소들 위에 보이도록 z-index 설정
`

const Wrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;  
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 3px 10px; 
    color:white;
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center; // 이미지와 텍스트의 높이를 중앙으로 정렬
    margin: 0;
`;

const LogoImage = styled.img`
    height: 30px;
    width: auto;
    margin-right: 10px;
`;

const LogoText = styled.h2`
    margin: 0; // 기본 마진 제거
    font-size: 1.5rem; // 텍스트 크기 조정
    color: white; // 텍스트 색상 설정
`;

const BarImage = styled.img`
    height: 40px;
    width: auto;
    margin-right: 10px;
    cursor: pointer; 
`;

const Header = () =>{
    return(
        <OuterWrapper>
        <Wrapper>
        <LogoWrapper>
            <LogoImage src={cameraLogo} alt="Camera Logo" />
            <LogoText>Album</LogoText>
        </LogoWrapper>
        <BarImage src={bar3}></BarImage>
        </Wrapper>
        </OuterWrapper>
    );
}

export default Header;