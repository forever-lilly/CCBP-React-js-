import * as React from 'react'
import styled from 'styled-components'
import './App.css'

const App = () => {
  const data = [
    {name: 'NAME', age: 'AGE'},
    {name: 'NAME', age: 'AGE'},
  ]

  return (
    <PageWrapper>
      <Header>
        <Logo>
          <LogoImage
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ed1c4077a02468f0e06ef02a6ca5d66b8f4df5b54e9cb5686c90a9c95651878?apiKey=a14e9fe57d1e4040a7487a58301e70c2&"
            alt="D Lab logo"
          />
          <LogoText>D Lab</LogoText>
        </Logo>
        <Navigation>
          <NavItem>HOME</NavItem>
          <NavItem>PREDICT</NavItem>
          <NavItem>ABOUT</NavItem>
        </Navigation>
      </Header>
      <Main>
        <ContentWrapper>
          <ImageColumn>
            <MainImage
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8797fea5c4d538d3a8fd2778679ba3126d3c2b1b525adc6c5497ee365b571b57?apiKey=a14e9fe57d1e4040a7487a58301e70c2&"
              alt="Main content image"
            />
          </ImageColumn>
          <FormColumn>
            <FormWrapper>
              {data.map((item, index) => (
                <React.Fragment key={index}>
                  <FormLabel>{item.name}</FormLabel>
                  <FormInput type="text" placeholder={item.name} />
                  <FormLabel>{item.age}</FormLabel>
                  <FormInput type="number" placeholder={item.age} />
                </React.Fragment>
              ))}
            </FormWrapper>
          </FormColumn>
        </ContentWrapper>
      </Main>
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  background-color: #3a4181;
  z-index: 10;
  display: flex;
  width: 100%;
  gap: 20px;
  font-size: 28px;
  color: #fff;
  font-weight: 600;
  text-align: center;
  justify-content: space-between;
  padding: 7px 48px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0 20px;
  }
`

const Logo = styled.div`
  display: flex;
  gap: 0px;
`

const LogoImage = styled.img`
  aspect-ratio: 1.23;
  object-fit: auto;
  object-position: center;
  width: 68px;
`

const LogoText = styled.div`
  font-family: Inter, sans-serif;
  margin: auto 0;
`

const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  white-space: nowrap;
  margin: auto 0;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    white-space: initial;
  }
`

const NavItem = styled.div`
  font-family: Roboto Serif, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`

const Main = styled.main`
  width: 100%;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`

const ContentWrapper = styled.div`
  gap: 20px;
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 59%;
  margin-left: 0px;

  @media (max-width: 991px) {
    width: 100%;
  }
`

const MainImage = styled.img`
  aspect-ratio: 0.95;
  object-fit: auto;
  object-position: center;
  width: 100%;
  flex-grow: 1;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`

const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 41%;
  margin-left: 20px;

  @media (max-width: 991px) {
    width: 100%;
  }
`

const FormWrapper = styled.form`
  border-radius: 30px;
  background-color: #faf4f4;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-size: 25px;
  color: #000;
  font-weight: 600;
  white-space: nowrap;
  text-align: center;
  width: 100%;
  padding: 50px 62px 80px;

  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
    padding: 0 20px;
  }
`

const FormLabel = styled.label`
  font-family: Roboto, sans-serif;
  align-self: start;
  margin: 50px 0 0 14px;

  @media (max-width: 991px) {
    margin: 40px 0 0 10px;
    max-width: 100%;
  }
`

const FormInput = styled.input`
  align-items: start;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 1);
  margin-top: 16px;
  color: #b9a4a4;
  justify-content: center;
  padding: 10px;
  font: 20px Roboto, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
    white-space: initial;
  }
`

export default App
