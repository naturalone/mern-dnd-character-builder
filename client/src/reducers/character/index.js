import { combineReducers } from "redux";
import core from "./core";
import abilities from "./abilities";
import vitals from "./vitals";
import skills from "./skills";

export default combineReducers({
  core,
  abilities,
  vitals,
  skills
});
