import React from "react";
import {
  CustomListBox,
  CustomListBoxIcon,
  CustomSwipeableDrawer,
  CustomSwipeableDrawerBox,
  CustomUl,
  CustomUlSubMenu,
} from "./styles";
import { EastRounded } from "@mui/icons-material";
import { Box, Collapse } from "@mui/material";
import { useTranslation } from "react-i18next";

const allowedLists = [
  "tables",
  "chairs",
  "armChairs",
  "sofas",
  "decor",
  "bedding",
  "finishMaterials",
];

const CATEGORIES = {
  tables: [
    "Мебель 1",
    "Хорека 1",
    "Свет 1",
    "Декор 1",
    "Отделочные материалы 1",
  ],

  chairs: [
    "Мебель 2",
    "Хорека 2",
    "Свет 2",
    "Декор 2",
    "Отделочные материалы 2",
  ],
  armChairs: [
    "Мебель 3",
    "Хорека 3",
    "Свет 3",
    "Декор 3",
    "Отделочные материалы 3",
  ],

  sofas: [
    "Мебель 4",
    "Хорека 4",
    "Свет 4",
    "Декор 4",
    "Отделочные материалы 4",
  ],

  decor: [
    "Мебель 5",
    "Хорека 5",
    "Свет 5",
    "Декор 5",
    "Отделочные материалы 5",
  ],

  bedding: [
    "Мебель 6",
    "Хорека 6",
    "Свет 6",
    "Декор 6",
    "Отделочные материалы 6",
  ],

  finishMaterials: [
    "Мебель 7",
    "Хорека 7",
    "Свет 7",
    "Декор 7",
    "Отделочные материалы 7",
  ],
};

const MenuCategory = ({
  open,
  onClose,
  visibilityList,
  setVisibilityList,
  visibilityDesignList,
  setVisibilityDesignList,
}) => {
  console.log("visibilityList: ", visibilityList);
  const { t } = useTranslation();

  const handleVisibilityCategory = (category) => {
    switch (category) {
      case "tables": {
        setVisibilityList("tables");
        setVisibilityDesignList({ tables: true });
        break;
      }

      case "chairs": {
        setVisibilityList("chairs");
        setVisibilityDesignList({ chairs: true });

        break;
      }

      case "armChairs": {
        setVisibilityList("armChairs");
        setVisibilityDesignList({ armChairs: true });

        break;
      }

      case "sofas": {
        setVisibilityList("sofas");
        setVisibilityDesignList({ sofas: true });

        break;
      }

      case "decor": {
        setVisibilityList("decor");
        setVisibilityDesignList({ decor: true });

        break;
      }

      case "bedding": {
        setVisibilityList("bedding");
        setVisibilityDesignList({ bedding: true });

        break;
      }

      case "finishMaterials": {
        setVisibilityList("finishMaterials");
        setVisibilityDesignList({ finishMaterials: true });

        break;
      }
      default:
        setVisibilityList(null);
    }
  };

  return (
    <>
      <CustomSwipeableDrawer
        transitionDuration={700}
        anchor={"left"}
        open={open}
        onClose={onClose}
      >
        <CustomSwipeableDrawerBox>
          <Box>
            <CustomUl>
              {/* <CustomListImageBox>
                <img width={"140px"} src={logotype} alt="Drom" />
              </CustomListImageBox> */}

              <CustomListBox
                onMouseOver={() => handleVisibilityCategory("tables")}
                // onMouseLeave={() => handleVisibilityCategory}
                visibilityDesignList={visibilityDesignList.tables}
              >
                {t("categoryTables")}
                <CustomListBoxIcon
                  visibilityDesignList={visibilityDesignList.tables}
                >
                  <EastRounded />
                </CustomListBoxIcon>
              </CustomListBox>

              <CustomListBox
                onMouseOver={() => handleVisibilityCategory("chairs")}
                visibilityDesignList={visibilityDesignList.chairs}
              >
                {t("categoryChairs")}

                <CustomListBoxIcon
                  visibilityDesignList={visibilityDesignList.chairs}
                >
                  <EastRounded />
                </CustomListBoxIcon>
              </CustomListBox>

              <CustomListBox
                onMouseOver={() => handleVisibilityCategory("armChairs")}
                visibilityDesignList={visibilityDesignList.armChairs}
              >
                {t("categoryArmChairs")}

                <CustomListBoxIcon
                  visibilityDesignList={visibilityDesignList.armChairs}
                >
                  <EastRounded />
                </CustomListBoxIcon>
              </CustomListBox>

              <CustomListBox
                onMouseOver={() => handleVisibilityCategory("sofas")}
                visibilityDesignList={visibilityDesignList.sofas}
              >
                {t("categorySofas")}

                <CustomListBoxIcon
                  visibilityDesignList={visibilityDesignList.sofas}
                >
                  <EastRounded />
                </CustomListBoxIcon>
              </CustomListBox>

              <CustomListBox
                onMouseOver={() => handleVisibilityCategory("decor")}
                visibilityDesignList={visibilityDesignList.decor}
              >
                {t("categoryDecor")}

                <CustomListBoxIcon
                  visibilityDesignList={visibilityDesignList.decor}
                >
                  <EastRounded />
                </CustomListBoxIcon>
              </CustomListBox>

              <CustomListBox
                onMouseOver={() => handleVisibilityCategory("bedding")}
                visibilityDesignList={visibilityDesignList.bedding}
              >
                {t("categoryBedding")}

                <CustomListBoxIcon
                  visibilityDesignList={visibilityDesignList.bedding}
                >
                  <EastRounded />
                </CustomListBoxIcon>
              </CustomListBox>

              <CustomListBox
                onMouseOver={() => handleVisibilityCategory("finishMaterials")}
                visibilityDesignList={visibilityDesignList.finishMaterials}
              >
                {t("categoryFinishMaterials")}

                <CustomListBoxIcon
                  visibilityDesignList={visibilityDesignList.finishMaterials}
                >
                  <EastRounded />
                </CustomListBoxIcon>
              </CustomListBox>
            </CustomUl>
          </Box>
          {/* Sub_Menu */}

          <Collapse
            orientation="horizontal"
            in={allowedLists.includes(visibilityList)}
            timeout={2000}
            // timeout={{
            //   appear: 1000,
            //   // enter: 1000,
            //   exit: 1000,
            // }}
          >
            <CustomUlSubMenu type="tables" visibility={visibilityList}>
              {visibilityList &&
                CATEGORIES[visibilityList]?.map((item) => (
                  <CustomListBox>{item}</CustomListBox>
                ))}
            </CustomUlSubMenu>
          </Collapse>
        </CustomSwipeableDrawerBox>
      </CustomSwipeableDrawer>
    </>
  );
};

export default MenuCategory;
