import { Image } from "@mantine/core";
import classes from "./GraditudeLogo.module.css";
import { useNavigate } from "@remix-run/react";

interface GraditudeLogoProps {
  path?: string;
  color?: "white" | "blue";
}

export function GraditudeLogo({ path, color = "blue" }: GraditudeLogoProps) {
  const navigate = useNavigate();
  return (
    <div className={classes.logo}>
      <Image
        src={`/logo-${color}.svg`}
        alt="Logo"
        data-path={path}
        onClick={() => {
          if (path) {
            navigate(path);
          }
        }}
      />
    </div>
  );
}
