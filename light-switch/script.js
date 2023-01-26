const mainElement = document.getElementsByTagName("main")[0];

const toggleSwitch = (mode) => {
  const mainClasses = mainElement.classList;

  if (mainClasses.contains(mode)) {
    return;
  }

  const currentMode = mainClasses[0];
  mainClasses.replace(currentMode, mode);
};
