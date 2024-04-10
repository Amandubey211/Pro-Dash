import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
} from "@chakra-ui/react";
import { BsCardHeading } from "react-icons/bs";
import { IoIosTimer } from "react-icons/io";
import useCreateTask from "../../Hooks/CustomTaskHooks/useCreateTask";
import useUpdateTask from "../../Hooks/CustomTaskHooks/useUpdateTask";
import { FcLike } from "react-icons/fc";

const TaskModalBody = ({
  createClicked,
  setCreateClicked,

  listState,
  updateClicked,
  setUpdateClicked,
}) => {
  const { createTask } = useCreateTask();
  const { updateTask } = useUpdateTask();
  const user = useSelector((store) => store.user.userDetails);
  const [task, setTask] = useState({
    userId: user?.id,
    title: "",
    description: "",
    taskPriority: "medium",
    progressPercentage: 5,
    dueDate: "",
  });

  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );

  useEffect(() => {
    if (listState) {
      // If listState prop is provided, update task state with listState values
      setTask({
        userId: listState.userId || user?.userId || "",
        taskPriority: listState.taskPriority || "",
        title: listState.title || "",
        description: listState.description || "",
        dueDate: listState.dueDate
          ? new Date(listState.dueDate).toISOString().slice(0, 16)
          : "",
        progressPercentage: listState.progressPercentage || "",
      });
    }
  }, [listState]); // Add listState as dependency
  useEffect(() => {
    if (createClicked) {
      createTask(task);
      setCreateClicked(false);
    }
  }, [createClicked]);
  useEffect(() => {
    if (updateClicked) {
      updateTask(task, listState._id); // use costom hook
      setUpdateClicked(false);
    }
  }, [updateClicked]);

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  return (
    <div className="flex flex-col justify-start lg:px-2 sm:px-1 gap-2">
      <div className="flex justify-between items-center ">
        <span className="text-xs  text-[grey]">( * ) indicates Required</span>
      </div>
      <div className="flex flex-col gap-1 items">
        <span className="text-xs font-bold">Title*</span>
        <InputGroup>
          <InputLeftAddon color="black">
            <BsCardHeading />
          </InputLeftAddon>
          <Input
            title="title"
            value={task.title}
            onChange={(e) =>
              setTask((prevState) => ({ ...prevState, title: e.target.value }))
            }
            variant="outline"
            size="md"
            focusBorderColor={currentPalette.primary}
            placeholder="e.g. Complete 2 DSA problems"
          />
        </InputGroup>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-xs font-bold">Description*</span>
        <Textarea
          title="description"
          value={task.description}
          onChange={(e) =>
            setTask((prevState) => ({
              ...prevState,
              description: e.target.value,
            }))
          }
          focusBorderColor={currentPalette.primary}
          placeholder="Add some details, about the task"
        />
      </div>

      <div className="flex flex-col gap-1 items">
        <span className="text-xs font-bold">Due Date*</span>
        <InputGroup>
          <InputLeftAddon color="black">
            <IoIosTimer />
          </InputLeftAddon>
          <Input
            title="due date"
            textTransform="uppercase"
            name="duedate"
            value={task.dueDate}
            onChange={(e) =>
              setTask((prevState) => ({
                ...prevState,
                dueDate: e.target.value,
              }))
            }
            focusBorderColor={currentPalette.primary}
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
          />
        </InputGroup>
      </div>

      <RadioGroup
        name="priority"
        onChange={(val) =>
          setTask((prevState) => ({ ...prevState, taskPriority: val }))
        }
        value={task.taskPriority}
      >
        <span className="text-xs font-bold">Priority</span>
        <div className="flex bg- rounded-lg p-3 gap-4 items-center">
          <Radio
            title="high prioity"
            colorScheme={currentPalette.colorScheme}
            value="high"
          >
            High
          </Radio>
          <Radio
            title="medium prioity"
            colorScheme={currentPalette.colorScheme}
            value="medium"
          >
            Medium
          </Radio>
          <Radio
            title="low prioity"
            colorScheme={currentPalette.colorScheme}
            value="low"
          >
            Low
          </Radio>
        </div>
      </RadioGroup>

      <div className="flex flex-col gap-3">
        <span className="text-xs font-bold">Progress</span>
        <Box p={4} pt={6}>
          <Slider
            aria-label="slider-ex-6"
            colorScheme={currentPalette.colorScheme}
            value={task.progressPercentage}
            onChange={(value) =>
              setTask((prevState) => ({
                ...prevState,
                progressPercentage: value,
              }))
            }
          >
            <SliderMark colo value={25} {...labelStyles}>
              25%
            </SliderMark>
            <SliderMark value={50} {...labelStyles}>
              50%
            </SliderMark>
            <SliderMark value={75} {...labelStyles}>
              75%
            </SliderMark>
            <SliderMark
              value={task.progressPercentage}
              textAlign="center"
              bg={currentPalette.primary}
              color="white"
              mt="-10"
              ml="-5"
              w="12"
            >
              {task.progressPercentage}%
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
      </div>
      <div className="flex gap-1 items-center justify-center">
        <FcLike /> <span>thanks for your time...</span>
      </div>
    </div>
  );
};

export default TaskModalBody;
