import { configureStore } from "@reduxjs/toolkit";
import visuallyReducer from "./reducers/visually";
import { settingReducer } from "./reducers/settingsSlice";
import projectReducer from "./reducers/projectSlice";

export const store = configureStore({
    reducer: {
        visually: visuallyReducer,
        settings: settingReducer,
        project: projectReducer,
    },
});