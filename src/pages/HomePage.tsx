import React from "react";
import { Box, Link } from "@mui/material";
import { Scene } from "../components/Scene";
import {
  Instagram,
  Email,
  Apple,
  MusicNote,
  YouTube,
  People,
  LocalParking,
} from "@mui/icons-material";

const LINKS = [
  {
    name: "instagram",
    href: "https://www.instagram.com/aprilclucks/",
    icon: <Instagram />,
  },
  {
    name: "youtube",
    href: "https://www.youtube.com/@aprilclucks",
    icon: <YouTube />,
  },
  {
    name: "patreon",
    href: "https://www.patreon.com/videocameras",
    icon: <LocalParking />,
  },
  {
    name: "discord",
    href: "https://discord.com/invite/5te896KGFa",
    icon: <People />,
  },
  {
    name: "email",
    href: "mailto:ezyvidya@gmail.com",
    icon: <Email />,
  },
];
export const HomePage = () => {
  const width = window.innerWidth;
  return (
    <>
      <Box
        height="100vh"
        width="100vw"
        position="relative"
        display="flex"
        alignItems="end"
        justifyContent="center"
        padding={{ b: 3 }}
      >
        <Box zIndex={1} position="absolute" height="100vh" width="100%">
          <Scene width={width} />
        </Box>
        <Box zIndex={3} display="inline-flex" sx={{ mb: width < 800 ? 10 : 3 }}>
          {LINKS.map((link, index) => (
            <Box display="inline-flex" key={link.name}>
              <Box
                display="inline-flex"
                gap={1}
                onClick={() => (window.location.href = link.href)}
                alignItems="center"
              >
                {link.icon}

                {width > 800 && (
                  <Box sx={{ pt: 0.5 }}>
                    <Link
                      color="#fff"
                      key={link.name}
                      href={link.href}
                      underline="hover"
                    >
                      {link.name}
                    </Link>
                  </Box>
                )}
              </Box>

              {index < LINKS.length - 1 && (
                <Box
                  height="100%"
                  sx={{ width: "1px", mx: 3, bgcolor: "#fff" }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
