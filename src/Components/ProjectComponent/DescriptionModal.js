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
  Badge,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { FcInfo } from "react-icons/fc";

function ProjectDescriptionModal({ description, skillsUsed }) {
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
      <Tooltip fontSize="xs" label="Description">
        <Button
          title="Project Information"
          borderRadius="4px"
          leftIcon={
            <FcInfo className="hover:cursor-pointer text-sm lg:text-lg" />
          }
          size={{ base: "xs", md: "sm", lg: "sm", sm: "sm" }}
          fontSize="smaller"
          onClick={() => {
            setOverlay(<OverlayOne />);
            onOpen();
          }}
        >
          Project Details
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
          <ModalHeader>About Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex flex-col gap-1">
              <Badge>Skills Used</Badge>
              <div className="flex gap-1 p-3 ">
                {skillsUsed?.map((item, i) => {
                  return (
                    <Badge key={i} colorScheme="blue">
                      {item}
                    </Badge>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col">
              <Badge>Description</Badge>

              <p className="min-h-28 p-2">{description}</p>
            </div>
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

export default ProjectDescriptionModal;
