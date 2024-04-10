import React, { lazy, useState } from "react";
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
  color,
  useDisclosure,
} from "@chakra-ui/react";
import { MdDarkMode } from "react-icons/md";
import { useSelector } from "react-redux";
import { MdOutlineLightMode } from "react-icons/md";
// Lazy load the EducationModalBody component
const EducationModalBody = lazy(() =>
  import("../ModalBodys/EducationModalBody.js")
);
import ProfileCardLogos from "../../Data/DashboardData/ProfileCardLogo.js";
import { Suspense } from "react";
import { FcPlus } from "react-icons/fc";

const EducationModal = ({ title, type, eduState }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); //modal use
  const [updateClicked, setUpdateClicked] = useState(false);
  const [createClicked, setCreateClicked] = useState(false);

  //theme use
  const currentMode = useSelector((state) => state.themes.currentPalette);
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  const [Mode, setMode] = useState(currentMode);
  const [timeoutId, setTimeoutId] = useState(null);
  const updateLoading = useSelector((store) => store.education.iseUpdating);
  const createLoading = useSelector((store) => store.education.isCreating);

  //isLoading

  const handleModalBg = () => {
    if (currentMode === "light" || Mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  const handleCreate = () => {
    setCreateClicked(true);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set new timeout
    const newTimeoutId = setTimeout(() => {
      onClose();
      setTimeoutId(null); // Clear the timeout ID after closing the modal
    }, 100); // Adjust the delay time as needed
  };
  const handleUpdate = () => {
    setUpdateClicked(true);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set new timeout
    const newTimeoutId = setTimeout(() => {
      onClose();
      setTimeoutId(null); // Clear the timeout ID after closing the modal
    }, 100); // Adjust the delay time as needed
  };
  return (
    <div className="sub-topics gap-2 flex justify-center items-center ">
      {type === "create" ? (
        <Tooltip label="Edit">
          <button
            title="Add Education Info"
            type="button"
            onClick={() => {
              onOpen();
            }}
            style={{ backgroundColor: currentPalette.accent }}
            className="  p-1 rounded-md lg:px-4 px-2 font-semibold uppercase gap-3 flex items-center justify-center cursor-pointer transition duration-300 transform hover:scale-105"
          >
            <span className="text-white text-sm lg:text-lg "> Add </span>
            <FcPlus />
          </button>
        </Tooltip>
      ) : (
        <Tooltip label="Update">
          <Button
            size="sm"
            title="Update Education Info"
            type="button"
            onClick={() => {
              onOpen();
            }}
            className="  rounded-lg font-bold uppercase gap-3 flex items-center justify-center cursor-pointer transition duration-300 transform hover:scale-105"
          >
            {ProfileCardLogos.edit}
          </Button>
        </Tooltip>
      )}

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
          backgroundColor={`${Mode === "dark" ? "#293645" : "white"}`}
          color={`${Mode === "dark" ? "white" : "black"}`}
        >
          <ModalHeader textTransform="capitalize">
            <div className="flex justify-between pe-9 items-center">
              {type === "create" ? "Add Education" : "Update Education"}
              <Button title="theme mode" size="xs" onClick={handleModalBg}>
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
              <EducationModalBody
                eduState={eduState}
                updateClicked={updateClicked}
                setUpdateClicked={setUpdateClicked}
                createClicked={createClicked}
                setCreateClicked={setCreateClicked}
              />
            </Suspense>
          </ModalBody>
          <ModalFooter>
            {type === "create" ? (
              <Button
                title="create"
                size="sm"
                isLoading={createLoading}
                loadingText="Saving"
                onClick={handleCreate}
                colorScheme={currentPalette.colorScheme}
              >
                Create
              </Button>
            ) : (
              <Button
                size="sm"
                title="Update"
                isLoading={updateLoading}
                loadingText="Updating"
                onClick={handleUpdate}
                colorScheme={currentPalette.colorScheme}
              >
                Update
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default EducationModal;
