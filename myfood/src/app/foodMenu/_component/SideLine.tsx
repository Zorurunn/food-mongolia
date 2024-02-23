import { categoryType } from "@/common";
import { useData } from "@/components ";
import { Dropdown, MenuButton } from "@mui/base";
import { Delete, Edit, MoreVert } from "@mui/icons-material";
import { Backdrop, MenuItem, Stack, Typography } from "@mui/material";
import { ChangeEventHandler, Dispatch, SetStateAction } from "react";
import * as React from "react";
import { Menu, MenuListboxSlotProps } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import { CssTransition } from "@mui/base/Transitions";
import { PopupContext } from "@mui/base/Unstable_Popup";
import { EditCategory } from "./EditCategory";
import { Really } from "@/app/userProfile/_components/Really";

export type selectCategoryTypes = {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
};
type nameType = {
  name: string;
};
// const categories = ["breakfast", "soup", "main course", "desserts"];
export const SideLine = (props: selectCategoryTypes & categoryType) => {
  const [openEditCategoryName, setOpenEditCategoryName] = React.useState(false);
  const [really, setReally] = React.useState(false);
  const { name, _id, selectedCategory, setSelectedCategory } = props;
  const { deleteCategory, updateCategory } = useData();
  const a = "A";
  return (
    <>
      {/* EDIT CATEGORY NAME MODAL */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openEditCategoryName}
      >
        <EditCategory name={name} _id={_id} setOpen={setOpenEditCategoryName} />
      </Backdrop>
      {/* DELETE CATEGORY REALLY */}
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        open={really}
      >
        <Stack
          width={80}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ backgroundColor: "#fff", borderRadius: 2 }}
        >
          <Really
            title={"Та устгахдаа итгэлтэй байна уу ?"}
            setReally={setReally}
            // otherSet1={setOpen}
            // submitFunction={formik.handleSubmit}
            // deleteCategoryFunction={deleteCategory({ name, _id })}
          />
        </Stack>
      </Backdrop>
      <Stack
        direction={"row"}
        border={"1px solid"}
        borderColor={
          selectedCategory === name ? "primary.main" : "text.secondary"
        }
        borderRadius={2}
        padding={1}
        alignItems={"center"}
        sx={{
          backgroundColor: selectedCategory === name ? "primary.main" : null,
          cursor: "pointer",
        }}
      >
        <Stack
          flexGrow={1}
          onClick={() => {
            setSelectedCategory(name);
          }}
        >
          <Typography
            color={selectedCategory === name ? "#fff" : "text.primary"}
          >
            {name}
          </Typography>
        </Stack>

        <Dropdown>
          <MenuButton>
            <MoreVert
              sx={{
                color: selectedCategory === name ? "#fff" : "text.primary",
              }}
              onClick={() => {}}
            />
          </MenuButton>
          <Menu>
            <Stack
              position={"absolute"}
              top={0}
              left={0}
              sx={{
                backgroundColor: "#fff",
                borderRadius: 2,
                border: "1px solid",
                borderColor: "text.primary",
              }}
              gap={1}
              paddingY={1}
            >
              <MenuItem>
                <Stack
                  direction={"row"}
                  gap={1}
                  width={150}
                  onClick={() => {
                    setOpenEditCategoryName(true);
                  }}
                >
                  <Edit />
                  <Stack flexGrow={1}>Edit Name</Stack>
                </Stack>
              </MenuItem>
              <MenuItem>
                <Stack direction={"row"} gap={1} width={150} color={"red"}>
                  <Delete />
                  <Stack
                    onClick={() => {
                      deleteCategory({ name, _id });
                    }}
                  >
                    Delete category
                  </Stack>
                </Stack>
              </MenuItem>
            </Stack>
          </Menu>
        </Dropdown>
      </Stack>
    </>
  );
};
