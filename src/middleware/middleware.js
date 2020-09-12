import store from "@/store/index";

const loginMiddleware = (to, from, next) => {
  if (store.getters.logged) {
    next();
    return;
  } else {
    next({ name: "Login" });
    return;
  }
};

export { loginMiddleware };
