import {
  CategoryOutlined,
  ImageOutlined,
  Menu,
  TrackChanges,
} from "@mui/icons-material";
import { Stack } from "@mui/material";
import React from "react";
import Card from "../../components/ModalCard";
import Todos from "../todo/Todos";
import AddCategory from "./category.js/AddCategory";
import Images from "./images/Images";
import UploadImage from "./images/UploadImage";

const Settings = () => {
  return (
    <>
      <Stack spacing={2} direction="row">
        {cardData.map((el, index) => (
          <Card
            key={index}
            label={el.label}
            icon={el.icon}
            children={el.children}
            title={el.title}
          />
        ))}
      </Stack>
    </>
  );
};

const cardData = [
  {
    label: "CATEGORY",
    icon: <CategoryOutlined />,
    children: <AddCategory />,
    title: "Add new Category",
  },
  {
    label: "IMAGES",
    icon: <ImageOutlined />,
    children: <UploadImage />,
    title: "Upload images",
  },
  {
    label: "All Images",
    icon: <Menu />,
    title: "All Images",
    children: <Images />,
  },
  {
    label: "TODO",
    icon: <TrackChanges />,
    title: "Add New Step",
    children: <Todos />,
  },
];

export default Settings;
