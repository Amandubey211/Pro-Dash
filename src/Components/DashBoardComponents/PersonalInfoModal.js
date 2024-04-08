import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useSelector } from "react-redux";
import ProfileCardLogos from "../../Data/DashboardData/ProfileCardLogo.js";
const LazyUserInfoModal = lazy(() => import("../ModalBodys/UserInfoModal.js"));
const PersonalInfoModal = () => {
  const [personalInfoButtonClicked, setPersonalInfoButtonClicked] =
    useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const currentMode = useSelector((state) => state.themes.currentPalette);
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  const [Mode, setMode] = useState(currentMode);
  const isLoading = useSelector((state) => state.user.isLoading);
  const handleModalBg = () => {
    setMode(Mode === "light" ? "dark" : "light");
  };

  const handleCreate = () => {
    setPersonalInfoButtonClicked(true);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      onClose();
      setTimeoutId(null);
    }, 200);
    setTimeoutId(newTimeoutId);
  };
  return (
    <div className="sub-topics gap-2 flex justify-center items-center ">
      <Tooltip label="Edit Info">
        <Button
          size="xs"
          type="submit"
          onClick={() => {
            onOpen();
          }}
          className="flex justify-end cursor-pointer transition duration-300 transform hover:scale-110"
        >
          {ProfileCardLogos.edit}
        </Button>
      </Tooltip>
      <Modal
        colorScheme={currentPalette.colorScheme}
        scrollBehavior="inside"
        size="xl"
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent
          borderRadius="1rem"
          backgroundColor={`${Mode === "dark" ? "#121d24" : "white"}`}
          color={`${Mode === "dark" ? "white" : "black"}`}
        >
          <ModalHeader textTransform="capitalize">
            <div className="flex justify-between pe-9 items-center">
              Personal Information
              <Button size="xs" onClick={handleModalBg}>
                {Mode === "dark" ? <MdDarkMode /> : <MdOutlineLightMode />}
              </Button>
            </div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Suspense
              fallback={
                <div className="flex justify-center h-full ">
                  <Spinner />
                </div>
              }
            >
              <LazyUserInfoModal
                setPersonalInfoButtonClicked={setPersonalInfoButtonClicked}
                personalInfoButtonClicked={personalInfoButtonClicked}
              />
            </Suspense>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={handleCreate}
              size="sm"
              isLoading={isLoading}
              loadingText="Please wait"
              colorScheme={currentPalette.colorScheme}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
export default PersonalInfoModal;
