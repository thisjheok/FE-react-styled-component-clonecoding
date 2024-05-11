import styled from "styled-components"

const FooterBox = styled.div`
    width: 100%;
    background-color: #ffffff;
    padding: 50px 0; // 상하 패딩만 적용
    display: flex;
    justify-content: center; // 가운데 정렬
    align-items: center; // 세로 방향으로 중앙 정렬
`

const FooterDetail = styled.div`
    display: flex;
    justify-content: space-between; // 내부 요소들을 양 끝으로 정렬
    align-items: center;
    width: 100%; // 너비 100%
    max-width: 1000px; // 최대 너비 설정
    padding: 0 10px; // 좌우 패딩
`
const TextGroup = styled.div`
    display: flex;
    flex-direction: column; // 세로 방향으로 요소 정렬
    justify-content: center; // 세로 방향 중앙 정렬
`

const Paragraph = styled.p`
    margin: 5px 0; 
`

const Footer = ()=>{
    return(
        <FooterBox>
        <FooterDetail>
            <TextGroup>
            <Paragraph>
            Album example is © Bootstrap, but please download and customize it for yourself!
            </Paragraph>
            <Paragraph>
            New to Bootstrap? <a href="https://getbootstrap.com/">Visit the homepage</a> or read our <a href="https://getbootstrap.com/docs/4.3/getting-started/introduction/">getting started guide</a>.
            </Paragraph>
            </TextGroup>
            <span>Back to top</span>
        </FooterDetail>
    </FooterBox>
    )
}

export default Footer;