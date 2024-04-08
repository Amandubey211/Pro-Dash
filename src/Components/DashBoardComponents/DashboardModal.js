import React, { useState, lazy, Suspense } from "react";
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
import ProfileCardLogos from "../../Data/DashboardData/ProfileCardLogo.js";
import { useSelector } from "react-redux";

const AwardModalBody = lazy(() => import("../ModalBodys/AwardModalBody.js"));
const LazyTaskModalBody = lazy(() => import("../ModalBodys/TaskModalBody.js"));
const LazyProjectModalBody = lazy(() =>
  import("../ModalBodys/ProjectModalBody.js")
);
const DashboardModal = ({ id, Title, Logo, Body, Type, listState }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [createClicked, setCreateClicked] = useState(false);
  const [updateClicked, setUpdateClicked] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const currentMode = useSelector((state) => state.themes.currentPalette);
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  const [Mode, setMode] = useState(currentMode);

  const handleModalBg = () => {
    setMode(Mode === "light" ? "dark" : "light");
  };

  const handleCreate = () => {
    setCreateClicked(true);
    handleTimeout();
  };

  const handleUpdate = () => {
    setUpdateClicked(true);
    handleTimeout();
  };

  const handleTimeout = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      onClose();
      setTimeoutId(null);
    }, 100);
    setTimeoutId(newTimeoutId);
  };

  const isTaskCreating = useSelector((state) => state.task.isTaskCreating);

  return (
    <div className="sub-topics gap-2 flex justify-center items-center ">
      {Type === "list" ? (
        <Tooltip label="edit">
          <Button
            size={{ base: "xs", md: "sm", lg: "sm", sm: "sm" }}
            type="submit"
            onClick={onOpen}
            className="flex justify-end cursor-pointer transition duration-300 transform hover:scale-105"
          >
            {ProfileCardLogos.edit}
          </Button>
        </Tooltip>
      ) : (
        <Button
          onClick={onOpen}
          color={currentMode === "dark" ? "white" : "black"}
          backgroundColor={currentPalette.primary}
          fontSize="sm"
          _hover={{
            color: currentMode === "dark" ? "black" : "white",
            backgroundColor: currentPalette.accent2,
          }}
          leftIcon={<span className="text-xl w-11">{Logo}</span>}
          variant="solid"
        >
          <span className="text-xs"> {Title}</span>
        </Button>
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
          backgroundColor={Mode === "dark" ? "#121d24" : "white"}
          color={Mode === "dark" ? "white" : "black"}
        >
          <ModalHeader textTransform="capitalize">
            <div className="flex justify-between pe-9 items-center">
              {Title}
              <Button size="xs" onClick={handleModalBg}>
                {Mode === "dark" ? <MdDarkMode /> : <MdOutlineLightMode />}
              </Button>
            </div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              {Body === "TaskModal" ? (
                <Suspense
                  fallback={
                    <div className="flex justify-center h-full ">
                      <Spinner />
                    </div>
                  }
                >
                  <LazyTaskModalBody
                    Type="list"
                    setCreateClicked={setCreateClicked}
                    createClicked={createClicked}
                    updateClicked={updateClicked}
                    setUpdateClicked={setUpdateClicked}
                    listState={listState}
                  />
                </Suspense>
              ) : Body === "AchivementModal" ? (
                <>
                  <AwardModalBody
                    updateClicked={updateClicked}
                    createClicked={createClicked}
                    setUpdateClicked={setUpdateClicked}
                    setCreateClicked={setCreateClicked}
                    AwardState={null}
                  />
                </>
              ) : (
                <>
                  <LazyProjectModalBody
                    updateClicked={updateClicked}
                    createClicked={createClicked}
                    setUpdateClicked={setUpdateClicked}
                    setCreateClicked={setCreateClicked}
                    ProjectState={null}
                  />
                </>
              )}
            </div>
          </ModalBody>
          <ModalFooter>
            {Type === "list" ? (
              <Button
                size="sm"
                isLoading={isTaskCreating}
                loadingText="Updating"
                colorScheme={currentPalette.colorScheme}
                onClick={handleUpdate}
              >
                Update
              </Button>
            ) : (
              <Button
                size="sm"
                isLoading={isTaskCreating}
                loadingText="Creating"
                colorScheme={currentPalette.colorScheme}
                onClick={handleCreate}
              >
                Create
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DashboardModal;
