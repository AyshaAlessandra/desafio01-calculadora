import { ButtonContainer } from "./styles";

const Buttom = ({label, onclick}) => {
    return (
        <ButtonContainer onClick={onclick}>
            {label} 
        </ButtonContainer>
    );
}

export default Buttom;
