import { Button, ButtonLink, Navigation } from "./HeaderStyled"

function Header({setModal}: {setModal: React.Dispatch<React.SetStateAction<boolean>>}) {
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
                <Button bg="#FFFFFF" color="#000000" border={"true"} onClick={() => setModal(true)}>თანამშრომლის შექმნა</Button>
                <ButtonLink to="/new-task" bg="#8338EC" color="#FFFFFF" border={"false"} ><img src="./assets/images/add.svg" alt="add"/> <span>შექმენი ახალი დავალება</span></ButtonLink>
            </div>
        </Navigation>
    </header>
  )
}

export default Header
