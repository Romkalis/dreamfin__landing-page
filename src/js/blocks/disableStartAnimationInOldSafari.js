const isSafariVersionLessThan = (version) => {
  const userAgent = window.navigator.userAgent;
  const safariVersionPattern = /Version\/(\d+(\.\d+)?)/;
  const match = userAgent.match(safariVersionPattern);

  if (match) {
    const versionNumber = parseFloat(match[1]);
    if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
      return versionNumber < version;
    }
  }
  return false;
};

const disableStartAnimation = () => {
  const animationBlock = document.querySelector(".start-animation");
  console.log(animationBlock);

  if (isSafariVersionLessThan(17.4)) {
    console.log(
      "Safari version is less than 17.4, startAnimation unavalaible. Good time to update browser!"
    );
    animationBlock.style = "display: none";
  }
};

disableStartAnimation();
