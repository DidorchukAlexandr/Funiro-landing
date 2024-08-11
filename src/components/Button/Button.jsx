import { Btn } from "./Button.styled";

const Button = ({ children }) => {

    return (
        <Btn type="button">{children}</Btn>
)
}
export default Button;
