export const FirebaseConfig =
  process.env.NODE_ENV === "production" ? require("./prod") : require("./dev");
