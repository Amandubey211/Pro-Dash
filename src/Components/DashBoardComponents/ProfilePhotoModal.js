import React, { useEffect, useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Tooltip,
} from "@chakra-ui/react";
import ProfileCardLogos from "../../Data/DashboardData/ProfileCardLogo";
import { useSelector } from "react-redux";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FcCancel, FcLandscape } from "react-icons/fc";
import useManagePersonalPhoto from "../../Hooks/CustomUserInfoHooks/useManagePersonalPhoto";
import EmptyImage from "../../Assets/ImageNotFound.png";
const ProfilePhotoModal = ({ prevState }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { managePersonalPhoto } = useManagePersonalPhoto();
  const currentMode = useSelector((state) => state.themes.currentPalette);
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  const fileInputRef = useRef(null);
  const [Mode, setMode] = useState(currentMode);
  const [timeoutId, setTimeoutId] = useState(null);
  const handleModalBg = () => {
    setMode(Mode === "light" ? "dark" : "light");
  };
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleClearPhoto = () => {
    setPhoto(null);
    setPreview("");
    fileInputRef.current.value = "";
  };
  useEffect(() => {
    if (prevState) {
      setPreview(prevState);
    }
  }, [prevState]);

  const handleSubmit = async () => {
    if (photo) {
      managePersonalPhoto(photo);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      const newTimeoutId = setTimeout(() => {
        onClose();
        setTimeoutId(null);
      }, 200);
      setTimeoutId(newTimeoutId);
    }
  };
  return (
    <>
      <Tooltip label="Edit Photo">
        <button
          size="xs"
          type="submit"
          onClick={onOpen}
          className="flex justify-end cursor-pointer transition duration-300 transform hover:scale-110"
        >
          {ProfileCardLogos.edit}
        </button>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          borderRadius="1rem"
          backgroundColor={`${Mode === "dark" ? "#121d24" : "white"}`}
          color={`${Mode === "dark" ? "white" : "black"}`}
        >
          <ModalHeader textTransform="capitalize">
            <div className="flex justify-between pe-9 items-center">
              Change Photo
              <Button size="xs" onClick={handleModalBg}>
                {Mode === "dark" ? <MdDarkMode /> : <MdOutlineLightMode />}
              </Button>
            </div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="border-2 border-dashed border-gray-500 rounded-xl h-96 w-full relative">
              {!preview && (
                <Tooltip hasArrow label="Upload Image">
                  <div onClick={handleIconClick}>
                    <FcLandscape
                      className="text-6xl transition-transform duration-300 transform hover:scale-110"
                      style={{
                        cursor: "pointer",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </div>
                </Tooltip>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                style={{ display: "none" }}
              />
              {preview && (
                <div className="relative w-full h-full">
                  <div
                    className="flex justify-center"
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={preview || EmptyImage}
                      alt="Preview"
                      className=" rounded-xl h-full object-fill"
                    />
                  </div>
                  <Tooltip label="Clear Image">
                    <button
                      className="absolute top-2 right-2 bg-gray-200 rounded-full p-1"
                      onClick={handleClearPhoto}
                    >
                      <FcCancel
                        className="text-2xl"
                        style={{ cursor: "pointer" }}
                      />
                    </button>
                  </Tooltip>
                </div>
              )}
            </div>
          </ModalBody>

          <ModalFooter>
            <Button
              size="sm"
              colorScheme={currentPalette.colorScheme}
              onClick={handleSubmit}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePhotoModal;
