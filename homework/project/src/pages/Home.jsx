import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import SettingsIcon from "@mui/icons-material/Settings";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import Navbar from "../components/Navbar";
import HomeCard from "../components/HomeCard";
import Calendar from "../components/Calendar"; 
import Azmp from "../components/Azmp"; 


const NAVIGATION = [
  {
    segment: "page",
    title: "Əsas səhifə",
    icon: <HomeIcon />,
  },
  {
    segment: "Calendar",
    title: "Təqvim",
    icon: <CalendarMonthIcon />,
  },
  {
    segment: "Tapsiriqlar",
    title: "Tapşırıqların Siyahısı",
    icon: <FactCheckIcon />,
  },
  {
    segment: "page-4",
    title: "Azmp-102",
    icon: <Diversity3Icon />,
  },
  {
    segment: "Arxivde hec bir kurs yoxdur.",
    title: "Kursları Arxivi",
    icon: <UnarchiveIcon />,
  },
  {
    segment: "Parametrler",
    title: "Parametrlər",
    icon: <SettingsIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {pathname === "/page" && <HomeCard />}
      {pathname === "/Calendar" && <Calendar />} 
      {pathname === "/page-4" && <Azmp />} 
      {pathname !== "/page" && pathname !== "/Calendar" && pathname !== "/page-4" && (
        <Typography>{`You are at ${pathname}`}</Typography>
      )}
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function Home(props) {
  const { window } = props;

  const router = useDemoRouter("/page");

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <Navbar />
        <DemoPageContent pathname={router.pathname} /> 
      </DashboardLayout>
    </AppProvider>
  );
}

Home.propTypes = {
  window: PropTypes.func,
};

export default Home;
