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
import { FcPlus } from "react-icons/fc";

// Lazy load the ProjectModalBody component
const ProjectModalBody = lazy(() =>
  import("../ModalBodys/ProjectModalBody.js")
);

const ProjectModal = ({ ProjectState, type }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Modal hook
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  // Toggle theme mode
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [timeoutId, setTimeoutId] = useState(null);
  const [createClicked, setCreateClicked] = useState(false);
  const [updateClicked, setUpdateClicked] = useState(false);
  const isCreating = useSelector((store) => store.project.isProjectCreating);

  const isUploading = useSelector((store) => store.project.isProjectUpdating);

  const handleModalBg = () => {
    setIsDarkMode((prev) => !prev);
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
    }, 2000); // Adjust the delay time as needed
  };
  const handleUpdate = () => {
    setUpdateClicked(true);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      onClose();
      setTimeoutId(null); // Clear the timeout ID after closing the modal
    }, 100); // Adjust the delay time as needed
  };

  return (
    <div className="sub-topics gap-2 flex justify-center items-center">
      <Tooltip label={type === "create" ? "Edit" : "Update"}>
        <Button
          variant={type === "create" ? "outline" : "solid"}
          color={type === "create" ? "white" : "black"}
          _hover={type === "create" ? "black" : "white"}
          p={type === "create" && "1rem 1.5rem"}
          fontSize={type === "create" && "1rem"}
          // backgroundColor={currentPalette.accent}
          size="xs"
          onClick={onOpen}
        >
          {type === "create" ? (
            <div className="flex gap-2 items-center">
              <span className="text-white text-sm lg:text-lg "> Add </span>
              <FcPlus />
            </div>
          ) : (
            <span>{ProfileCardLogos.edit}</span>
          )}
        </Button>
      </Tooltip>

      <Modal
        scrollBehavior="inside"
        size="xl"
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent
          borderRadius="1rem"
          backgroundColor={isDarkMode ? "#293645" : "white"}
          color={isDarkMode ? "white" : "black"}
        >
          <ModalHeader textTransform="capitalize">
            <div className="flex justify-between pe-9 items-center">
              {type === "create" ? "Add Project" : "Update Project"}
              <Button size="xs" onClick={handleModalBg}>
                {isDarkMode ? <MdDarkMode /> : <MdOutlineLightMode />}
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
              <ProjectModalBody
                createClicked={createClicked}
                updateClicked={updateClicked}
                setCreateClicked={setCreateClicked}
                setUpdateClicked={setUpdateClicked}
                ProjectState={ProjectState}
                type={type}
              />
            </Suspense>
          </ModalBody>
          <ModalFooter>
            {type === "create" ? (
              <Button
                size="sm"
                isLoading={isCreating}
                loadingText="Creating"
                colorScheme={currentPalette.colorScheme}
                onClick={handleCreate}
              >
                Create
              </Button>
            ) : (
              <Button
                size="sm"
                isLoading={isUploading}
                loadingText="Updating"
                colorScheme={currentPalette.colorScheme}
                onClick={handleUpdate}
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

export default ProjectModal;
