import React, { lazy, useState, Suspense } from "react";
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
import { MdDarkMode } from "react-icons/md";
import { useSelector } from "react-redux";
import { MdOutlineLightMode } from "react-icons/md";
import ProfileCardLogos from "../../Data/DashboardData/ProfileCardLogo";
import { FcPlus } from "react-icons/fc";
const AwardModalBody = React.lazy(() => import("../ModalBodys/AwardModalBody"));
const AwardModal = ({ type, awardState }) => {
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

  //isLoading
  const isCreating = useSelector((store) => store.award.isAwardCreating);
  const isUpdating = useSelector((store) => store.award.isAwardUpdating);

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
    const newTimeoutId = setTimeout(() => {
      onClose();
      setTimeoutId(null);
    }, 100);
  };
  const handleUpdate = () => {
    setUpdateClicked(true);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      onClose();
      setTimeoutId(null);
    }, 100);
  };
  return (
    <div className="sub-topics gap-2 flex justify-between items-center ">
      {type === "create" ? (
        <Tooltip label="Edit">
          <button
            type="button"
            title="Add Achivement"
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
            type="button"
            title="update Achivement"
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
              {type === "create" ? "Add Achivement" : "Update Achivement"}
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
              <AwardModalBody
                setCreateClicked={setCreateClicked}
                createClicked={createClicked}
                updateClicked={updateClicked}
                AwardState={awardState}
                setUpdateClicked={setUpdateClicked}
              />
            </Suspense>
          </ModalBody>
          <ModalFooter>
            {type === "create" ? (
              <Button
                title="Create"
                size="sm"
                isLoading={isCreating}
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
                isLoading={isUpdating}
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

export default AwardModal;
