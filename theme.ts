import { buildLegacyTheme } from "sanity";

const props = {
  "--white": "#F7F7F7",
  "--black": "#1A1A1A",
  "--brandGreen": "#60C689",
  "--red": "#E91E63",
  "--yellow": "#F4B400",
  "--green": "#0F9D58",
};

export const myTheme = buildLegacyTheme({
  "--black": props["--black"],
  "--white": props["--white"],
  "--gray": "#666",
  "--gray-base": "#666",
  "--component-bg": props["--black"],
  "--component-text-color": props["--white"],
  "--brand-primary": props["--brandGreen"],
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--brandGreen"],
  "--default-button-success-color": props["--green"],
  "--default-button-warning-color": props["--yellow"],
  "--default-button-danger-color": props["--red"],
  "--state-info-color": props["--brandGreen"],
  "--state-success-color": props["--green"],
  "--state-warning-color": props["--yellow"],
  "--state-danger-color": props["--red"],
  "--main-navigation-color": props["--black"],
  "--main-navigation-color--inverted": props["--white"],
  "--focus-color": props["--brandGreen"],
});
