import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import { useSelector } from "react-redux";
function PasswordInput({ onPasswordChange, passwordValue }) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  const HandleChange = (e) => {
    const newPassword = e.target.value;
    onPasswordChange(newPassword);
  };

  return (
    <InputGroup size="md">
      <Input
        name="Password"
        title="password"
        focusBorderColor={currentPalette.primary} //not dyanamic
        value={passwordValue}
        onChange={HandleChange}
        variant="filled"
        autoComplete="off"
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="password"
      />
      <InputRightElement width="4.5rem">
        <Tooltip fontSize="sm" label={!show ? "show" : "hide"}>
          <Button
            title="toogleview"
            h="1.75rem"
            size="sm"
            name="toggleview"
            onClick={handleClick}
          >
            {show ? <RiEyeFill /> : <RiEyeCloseFill />}
          </Button>
        </Tooltip>
      </InputRightElement>
    </InputGroup>
  );
}
export default PasswordInput;
