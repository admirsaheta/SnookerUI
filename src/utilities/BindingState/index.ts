/**
 * 
 * SnookerUI {@link https://github.com/admirsaheta/snookerUI}
 * 
 * Created by Admir on 5 Jul. 2023.
 * 
 */


import { SetStateAction } from "react";

export type Binding<T> = {
    value: T;
    setValue: React.Dispatch<SetStateAction<T>>;
};

export type BindingState = Binding<Boolean> & { toggle: () => void };

