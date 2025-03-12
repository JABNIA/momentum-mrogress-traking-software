import styled from "styled-components"

function Header() {
  return (
    <header>
        <Navigation>
            <div>
                <p className="logo">
                    Momentum
                    <img src="./assets/images/Logo.png" alt="Logo" />
                </p>
            </div>
            <div className="buttons">
                <Button bg="#FFFFFF" color="#000000" border={true}>თანამშრომლის შექმნა</Button>
                <Button bg="#8338EC" color="#FFFFFF" border={false}>+ შექმენი ახალი დავალება</Button>
            </div>
        </Navigation>
    </header>
  )
}

export default Header

const Navigation = styled.nav`
    width: 1920px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    
    .logo{
        display: flex;
        align-items: center;
        margin: 32px 0 32px 120px;
        font-family: FredokaOne;
        font-size: 31px;
        font-weight: regular;
        color: #8338EC;
    }

    .buttons{
        margin: 30px 80px
    }
`


const Button = styled.button<{bg:string, color:string, border: boolean}>`
    width: auto;
    height: 42px;
    padding: 10px 20px;
    border: ${(props) => props.border ? "1px solid #8338EC" : "none"};
    border-radius: 5px;
    background-color: ${(props) => props.bg};
    color: ${(props) => props.color};
    font-family: FiraGO;
    font-size: 16px;
    margin-right: 40px;
`