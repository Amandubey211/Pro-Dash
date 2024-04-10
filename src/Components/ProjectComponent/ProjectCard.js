import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import { Button, Tooltip } from "@chakra-ui/react";
import { FaCopy, FaGithub, FaLink, FaRegCopy } from "react-icons/fa";
import ImageNotFound from "../../Assets/ErrorAssets/ImageNotFound.png";
import { useSelector } from "react-redux";
import { formatDate } from "../../Utils/Formatter";
import useDeleteProject from "../../Hooks/CustomProjectHooks/useDeleteProject";
import { MdOutlineDelete } from "react-icons/md";
import toast from "react-hot-toast";
import ProjectDescriptionModal from "./DescriptionModal";
import ProjectCardDetail from "./ProjectCardDetail";
const ProjectCard = ({ data }) => {
  const [copied, setCopied] = useState(false);

  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );

  const { deleteProject } = useDeleteProject();
  const formattedStarDate = formatDate(data?.startDate);
  const formattedendDate = formatDate(data?.endDate);
  const isDeleting = useSelector((store) => store.project.isProjectDeleteing);
  const handleCopy = () => {
    setCopied(true);
    const textToCopy = `Title: ${data?.title} CreatedBy:${data?.createdBy} From${formattedStarDate} to ${formattedendDate} Skills Used ${data?.skillsUsed},Description: ${data?.description}`;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast.success("Task Copied", { position: "bottom-left" });
        const timeoutId = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(timeoutId);
      })
      .catch((error) => {
        console.error("Failed to copy text:", error);
      });
  };
  return (
    <div
      className="relative min-h-[25rem] md:w-[20rem] lg:w-[23rem] w-full rounded-2xl shadow-xl "
      style={{ backgroundColor: currentPalette.primary }}
    >
      <div className="flex flex-col ">
        <div className="overflow-hidden rounded-t-xl">
          <img
            className="h-[100%] rounded-t-xl border transition-transform duration-300 transform hover:scale-105"
            src={data?.projectPhotoURL || ImageNotFound}
            alt="Image"
          />
        </div>
        <div className="absolute top-0 right-0 m-2">
          <div className="flex justify-end gap-1 p-1 rounded-2xl items-center">
            <Tooltip label="Delete ">
              <Button
                title="delete project"
                size="sm"
                colorScheme="red"
                onClick={() => deleteProject(data?._id)}
              >
                <MdOutlineDelete className="cursor-pointer" />
              </Button>
            </Tooltip>
            <Tooltip label={copied ? "Copied!" : "Copy Details"}>
              <Button title="copy project Info" size="sm" onClick={handleCopy}>
                {copied ? <FaCopy /> : <FaRegCopy />}
              </Button>
            </Tooltip>
            <ProjectModal ProjectState={data} />
          </div>
        </div>
        <div className="flex justify-between px-1 py-2 items-center">
          <div className="flex justify-start gap-1 items-center">
            <ProjectDescriptionModal
              skillsUsed={data?.skillsUsed}
              description={data?.description}
            />
          </div>
          <div className="flex justify-center  gap-1 items-center">
            <Button
              title="live demo project"
              size="xs"
              leftIcon={<FaLink />}
              colorScheme="gray"
              variant="solid"
            >
              <a className="text-xs" target="_blank" href={data?.liveDemoLink}>
                Live Demo
              </a>
            </Button>
            <Button
              title="Gith hub repo"
              size="xs"
              colorScheme="gray"
              variant="solid"
              isLoading={isDeleting}
              loadingText="Deletig"
            >
              <a className="text-xs" target="_blank" href={data?.githubLink}>
                <FaGithub />
              </a>
            </Button>
          </div>
        </div>

        <ProjectCardDetail data={data} />
      </div>
    </div>
  );
};

export default ProjectCard;
