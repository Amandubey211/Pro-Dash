import React, { useState } from "react";
import { formatDate } from "../../Utils/Formatter";
import { Badge, Button, Tooltip } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { FaCopy, FaRegCopy } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import toast from "react-hot-toast";
import AwardModal from "./AwardModal";
import useDeleteAward from "../../Hooks/CustomAwardHooks/useDeleteAward";
import { FcApproval } from "react-icons/fc";
const AwardCard = ({ data }) => {
  const [copied, setCopied] = useState(false);
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  const isDeleting = useSelector((store) => store.award.isAwardDeleting);
  const dateReceived = formatDate(data.dateReceived);
  const { deleteAward } = useDeleteAward();
  const handleCopy = () => {
    setCopied(true);
    const textToCopy = `Company: ${data.companyOrInstitute},Role:${data.role} Receveing date  : ${dateReceived}, Description: ${data.description} `;
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
  const handleDelete = () => {
    deleteAward(data._id);
  };
  return (
    <div
      className="h-64  p-2 lg:w-96  w-full  shadow-2xl rounded-xl"
      style={{ backgroundColor: currentPalette.primary }}
    >
      <div className="flex px-2 py-1 justify-between items-center">
        <div className="flex gap-1 items-center">
          <span className="font-semibold text-md lg:text-lg uppercase">
            {data.role}
          </span>

          <FcApproval />
        </div>

        <div className="flex gap-1    justify-start items-center">
          <Tooltip label="Delete">
            <Button
              title="delete"
              size="sm"
              isLoading={isDeleting}
              onClick={handleDelete}
              color="red"
            >
              <MdDeleteOutline className="" />
            </Button>
          </Tooltip>
          <Tooltip label={copied ? "Copied!" : "Copy"}>
            <Button title="copy" size="sm" onClick={handleCopy}>
              {copied ? <FaCopy /> : <FaRegCopy />}
            </Button>
          </Tooltip>
          <AwardModal type="update" awardState={data} />
        </div>
      </div>
      <hr />
      <div className="flex p-2 gap-2 flex-col">
        <div className="flex justify-between items-center  ">
          <span className="capitalize text-md">
            {data.companyOrInstitute.substring(0, 20)}
          </span>
          <Badge fontSize="x-small">{dateReceived}</Badge>
        </div>
        <div
          className="p-2 rounded-md shadow-inner overflow-hidden h-32"
          style={{ backgroundColor: currentPalette.accent, overflowY: "auto" }}
        >
          <p
            className="text-sm"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              overflow: "hidden",
            }}
          >
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AwardCard;
