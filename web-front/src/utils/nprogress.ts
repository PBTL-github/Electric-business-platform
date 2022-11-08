import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  easing: "ease",
  speed: 2000,
  showSpinner: true,
});

const nProgressStart = () => {
  NProgress.start();
};

const nProgressClose = () => {
  NProgress.done();
};

export { nProgressStart, nProgressClose };
