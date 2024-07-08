import "./script/components/index.js";
import home from "./script/view/home.js";

tailwind.config = {
  theme: {
    extend: {
      colors: {
        coklatMain: "#A0937D",
        coklatMuda: "#E7D4B5",
        krem: "#F6E6CB",
        hijau: "#B6C7AA",
      },
    },
  },
};

document.addEventListener("DOMContentLoaded", () => {
  home();
});
