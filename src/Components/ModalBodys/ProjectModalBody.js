import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Textarea,
  Tooltip,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import {
  FcApproval,
  FcCalendar,
  FcCancel,
  FcEngineering,
  FcLandscape,
  FcLike,
  FcLink,
  FcManager,
} from "react-icons/fc";
import { FaCode, FaGithub } from "react-icons/fa";
import useCreateProject from "../../Hooks/CustomProjectHooks/useCreateProject";
import useUpdateProject from "../../Hooks/CustomProjectHooks/useUpdateProject";

const ProjectModalBody = ({
  ProjectState,
  updateClicked,
  setUpdateClicked,
  createClicked,
  setCreateClicked,
}) => {
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  const user = JSON.parse(localStorage.getItem("user"));
  const fileInputRef = useRef(null);
  const { createProject } = useCreateProject();
  const { updateProject } = useUpdateProject();
  const [preview, setPreview] = useState("");
  const [project, setProject] = useState({
    userId: user?.userId || "",
    title: "",
    skillsUsed: [""],
    photo: null,
    projectPhotoURL: "",
    startDate: null,
    endDate: null,
    description: "",
    size: "medium",
    progressPercentage: 5,
    createdBy: "",
    githubLink: "",
    liveDemoLink: "",
    role: "",
  });

  useEffect(() => {
    // Update project state when ProjectState prop changes
    if (ProjectState) {
      setProject({
        userId: ProjectState.userId || user?.userId || "",
        title: ProjectState.title || "",
        description: ProjectState.description || "",
        size: ProjectState.size || "medium",
        progressPercentage: ProjectState.progressPercentage || 5,
        skillsUsed: ProjectState.skillsUsed || "",
        createdBy: ProjectState.createdBy || "",
        skillsUsed: ProjectState.skillsUsed || "",
        projectPhotoURL: ProjectState.projectPhotoURL || "",
        role: ProjectState.role || "",
        githubLink: ProjectState.githubLink || "",
        liveDemoLink: ProjectState.liveDemoLink || "",
        startDate: ProjectState.startDate
          ? new Date(ProjectState.startDate).toISOString().slice(0, 16)
          : "",
        endDate: ProjectState.endDate
          ? new Date(ProjectState.endDate).toISOString().slice(0, 16)
          : "",
      });
      setPreview(ProjectState.projectPhotoURL);
    }
  }, [ProjectState]);

  useEffect(() => {
    // Handle updateClicked state change
    if (updateClicked) {
      updateProject(project, ProjectState._id);
      setUpdateClicked(false);
    }
  }, [updateClicked, setUpdateClicked]);

  useEffect(() => {
    // Handle createClicked state change
    if (createClicked) {
      createProject(project);
      setCreateClicked(false);
    }
  }, [createClicked, setCreateClicked]);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProject((prevState) => ({
          ...prevState,
          photo: file,
        }));
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClearPhoto = () => {
    setProject((prevState) => ({
      ...prevState,
      photo: null,
      projectPhotoURL: null,
    }));
    setPreview("");
    fileInputRef.current.value = "";
  };

  const handleInputChange = (key, value) => {
    // For skillsUsed, split the input string into an array of skills
    if (key === "skillsUsed") {
      setProject((prevState) => ({
        ...prevState,
        [key]: value.split(",").map((skill) => skill.trim()),
      }));
    } else {
      setProject((prevState) => ({ ...prevState, [key]: value }));
    }
  };
  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  return (
    <div className="flex flex-col justify-start lg:px-2 sm:px-1 gap-2">
      <div className="flex justify-between items-center ">
        <span className="text-[10px] text-[grey]">
          ( * ) indicates Required
        </span>
      </div>

      <div className="flex flex-col items">
        <span className="text-[10px] font-bold">Title*</span>
        <InputGroup size={{ base: "md", md: "md", lg: "md", sm: "md" }}>
          <InputLeftAddon fontWeight="500" color="black">
            <FcApproval />
          </InputLeftAddon>
          <Input
            title="title"
            size={{ base: "md", md: "md", lg: "md", sm: "md" }}
            value={project.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            variant="outline"
            focusBorderColor={currentPalette.secondary}
            placeholder="e.g.Advanced Dash board"
          />
        </InputGroup>
      </div>

      <div className="flex justify-between gap-2 ">
        <div className="flex flex-col gap-2 justify-around  ">
          <div className="flex flex-col  items">
            <span className="text-[10px] font-bold">Created By*</span>
            <InputGroup size={{ base: "md", md: "md", lg: "md", sm: "md" }}>
              <InputLeftAddon fontWeight="500" color="black">
                <FcEngineering />
              </InputLeftAddon>
              <Input
                title="created by"
                size={{ base: "md", md: "md", lg: "md", sm: "md" }}
                fontSize="smaller"
                value={project.createdBy}
                onChange={(e) => handleInputChange("createdBy", e.target.value)}
                variant="outline"
                focusBorderColor={currentPalette.secondary}
                placeholder="e.g Aman Dubey"
              />
            </InputGroup>
          </div>

          <div className="flex flex-col  items">
            <span className="text-[10px] font-bold">Role*</span>
            <InputGroup size={{ base: "md", md: "md", lg: "md", sm: "md" }}>
              <InputLeftAddon color="black">
                <FcManager />
              </InputLeftAddon>
              <Input
                title="Role"
                size={{ base: "md", md: "md", lg: "md", sm: "md" }}
                fontSize="smaller"
                value={project.role}
                onChange={(e) => handleInputChange("role", e.target.value)}
                variant="outline"
                focusBorderColor={currentPalette.secondary}
                placeholder="e.g. Front-End Developer"
              />
            </InputGroup>
          </div>
        </div>

        <div className="border-2  border-dashed border-gray-500 rounded-xl w-1/2 h-36 relative">
          {!preview && (
            <Tooltip hasArrow label="Upload Image">
              <div onClick={handleIconClick}>
                <FcLandscape
                  className="text-6xl  transition-transform duration-300 transform hover:scale-110  "
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

          <Input
            size={{ base: "md", md: "md", lg: "md", sm: "md" }}
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            style={{ display: "none" }}
          />
          {preview && (
            <div className="relative">
              <img
                src={preview}
                alt="Preview"
                title="project image"
                className="rounded-xl"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
              <Tooltip label="Clear Image">
                <button
                  title="clear photo"
                  className="absolute top-2 right-2 bg-gray-200 rounded-full p-1"
                  onClick={handleClearPhoto}
                >
                  <FcCancel style={{ cursor: "pointer" }} />
                </button>
              </Tooltip>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-2 justify-between items-center ">
        <div className="flex flex-col  items">
          <span className="text-[10px] font-bold">Starting Date*</span>
          <InputGroup size={{ base: "xs", md: "md", lg: "md", sm: "xs" }}>
            <InputLeftAddon color="black">
              <FcCalendar />
            </InputLeftAddon>
            <Input
              title="starting date"
              size={{ base: "xs", md: "md", lg: "md", sm: "xs" }}
              value={project.startDate}
              onChange={(e) => handleInputChange("startDate", e.target.value)}
              fontSize={{
                base: "x-small",
                md: "small",
                lg: "small",
                sm: "x-small",
              }}
              textTransform="uppercase"
              name="duedate"
              focusBorderColor={currentPalette.primary}
              placeholder="Select Date and Time"
              type="datetime-local"
            />
          </InputGroup>
        </div>
        <div className="flex flex-col  items">
          <span className="text-[10px] font-bold">Ending Date*</span>
          <InputGroup size={{ base: "xs", md: "md", lg: "md", sm: "xs" }}>
            <InputLeftAddon color="black">
              <FcCalendar />
            </InputLeftAddon>
            <Input
              title="ending date"
              size={{ base: "xs", md: "md", lg: "md", sm: "xs" }}
              value={project.endDate}
              onChange={(e) => handleInputChange("endDate", e.target.value)}
              fontSize={{
                base: "x-small",
                md: "small",
                lg: "small",
                sm: "x-small",
              }}
              textTransform="uppercase"
              name="duedate"
              focusBorderColor={currentPalette.primary}
              placeholder="Select Date and Time"
              type="datetime-local"
            />
          </InputGroup>
        </div>
      </div>

      <div className="flex flex-col items">
        <span className="text-[10px] font-semibold text-red-300 ">
          Skills Used*(Enter skills separated by commas){" "}
        </span>
        <InputGroup size={{ base: "md", md: "md", lg: "md", sm: "md" }}>
          <InputLeftAddon color="black">
            <FaCode />
          </InputLeftAddon>
          <Input
            title="skills used"
            size={{ base: "md", md: "md", lg: "md", sm: "md" }}
            value={project.skillsUsed.join(", ")}
            onChange={(e) => handleInputChange("skillsUsed", e.target.value)}
            variant="outline"
            focusBorderColor={currentPalette.secondary}
            placeholder="eg React, Redux, Node, ChakraUi, MongoDB"
          />
        </InputGroup>
      </div>

      <RadioGroup
        name="Project Size"
        onChange={(val) =>
          setProject((prevState) => ({ ...prevState, size: val }))
        }
        value={project.size}
      >
        <span className="text-xs font-bold">Project Size*</span>
        <div className="flex rounded-lg p-3 gap-4 items-center">
          <Radio
            title="large"
            colorScheme={currentPalette.colorScheme}
            value="large"
          >
            <div className="text-xs lg:text-md">ENTERPRISE-SCALE</div>
          </Radio>
          <Radio
            title="medium"
            colorScheme={currentPalette.colorScheme}
            value="medium"
          >
            <div className="text-xs lg:text-md">MEDIUM-SCALE</div>
          </Radio>
          <Radio
            title="small"
            colorScheme={currentPalette.colorScheme}
            value="small"
          >
            <div className="text-xs lg:text-md"> SMALL-SCALE</div>
          </Radio>
        </div>
      </RadioGroup>

      <div className="flex flex-col gap-3">
        <span className="text-xs  font-bold">Project Completion*</span>
        <Box p={4} pt={6}>
          <Slider
            aria-label="slider-ex-6"
            colorScheme={currentPalette.colorScheme}
            value={project.progressPercentage}
            onChange={(val) => handleInputChange("progressPercentage", val)}
          >
            <SliderMark value={25} {...labelStyles}>
              25%
            </SliderMark>
            <SliderMark value={50} {...labelStyles}>
              50%
            </SliderMark>
            <SliderMark value={75} {...labelStyles}>
              75%
            </SliderMark>
            <SliderMark
              value={project.progressPercentage}
              textAlign="center"
              bg={currentPalette.primary}
              color="white"
              mt="-10"
              ml="-5"
              w="12"
            >
              {project.progressPercentage}%
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
      </div>

      <div className="flex flex-col items">
        <span className="text-[10px] font-bold">GitHub Link</span>
        <InputGroup size={{ base: "md", md: "md", lg: "md", sm: "md" }}>
          <InputLeftAddon color="black">
            <FaGithub />
          </InputLeftAddon>
          <Input
            size={{ base: "md", md: "md", lg: "md", sm: "md" }}
            value={project.githubLink}
            onChange={(e) => handleInputChange("githubLink", e.target.value)}
            variant="outline"
            focusBorderColor={currentPalette.secondary}
            placeholder="GitHub repository link"
          />
        </InputGroup>
      </div>

      <div className="flex flex-col items">
        <span className="text-[10px] font-bold">Live Demo or Video Link</span>
        <InputGroup size={{ base: "md", md: "md", lg: "md", sm: "md" }}>
          <InputLeftAddon color="black">
            <FcLink />
          </InputLeftAddon>
          <Input
            size={{ base: "md", md: "md", lg: "md", sm: "md" }}
            value={project.liveDemoLink}
            onChange={(e) => handleInputChange("liveDemoLink", e.target.value)}
            variant="outline"
            focusBorderColor={currentPalette.secondary}
            placeholder="Live demo or video link"
          />
        </InputGroup>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-xs font-bold">
          Description{" "}
          <span
            className={`font-semibold ${
              project.description.length > 1000 && "text-red-500"
            }`}
          >
            {project.description.length}/1000
          </span>
        </span>
        <Textarea
          value={project.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          focusBorderColor={currentPalette.secondary}
          placeholder="Add some details, about the project, what it offers, speciality of the project, main highlight, etc."
        />
      </div>
      <div className="flex gap-1 items-center justify-center">
        <FcLike /> <span>thanks for your time...</span>
      </div>
    </div>
  );
};

export default ProjectModalBody;
