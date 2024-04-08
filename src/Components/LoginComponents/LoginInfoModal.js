import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import { FcInfo } from "react-icons/fc";
import { passwordValidationInfo } from "../../Data/LoginData/InputInfo";
import { useSelector } from "react-redux";

function LoginInfoModal({ loginPage }) {
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Tooltip fontSize="sm" label="Guidlines">
        <Button
          size="xs"
          onClick={() => {
            setOverlay(<OverlayOne />);
            onOpen();
          }}
        >
          <FcInfo className="hover:cursor-pointer text-lg" />
        </Button>
      </Tooltip>

      <Modal
        isCentered
        isOpen={isOpen}
        scrollBehavior="inside"
        onClose={onClose}
        size="xl"
      >
        {overlay}
        <ModalContent>
          <ModalHeader>Follow GuideLines</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <>
              {!loginPage && (
                <>
                  <div className="flex items-center gap-1">
                    {" "}
                    <FcInfo />
                    <b className="text-[15px]">User Name </b>
                  </div>
                  <div className="flex flex-col gap-1 ">
                    <span className="text-[10px] ps-2">
                      Username should be between <b> 3 </b> - <b>20</b>{" "}
                      character, contain only <b>alphanumeric characters </b>{" "}
                      and
                      <b> underscores</b>
                    </span>
                  </div>
                </>
              )}
              <div className="flex  gap-1 items-center ">
                {" "}
                <FcInfo />
                <b className="text-[15px]">Email </b>
              </div>
              <div className="flex flex-col gap-1 ">
                <span className="text-[10px] ps-2">
                  The email address must follow the basic format of
                  <b> username@domain.com </b>
                </span>
              </div>
              <div className="flex items-center gap-1">
                {" "}
                <FcInfo />
                <b className="text-[13px]">Password </b>
              </div>

              <div className="flex flex-col gap-1 ">
                {passwordValidationInfo.map((data, i) => {
                  return (
                    <span key={i} className="text-[10px] ps-2">
                      {data}
                    </span>
                  );
                })}
              </div>
            </>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme={currentPalette.colorScheme} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LoginInfoModal;
