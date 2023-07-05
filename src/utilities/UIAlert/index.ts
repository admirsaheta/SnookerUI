/**
 * 
 * SnookerUI {@link https://github.com/admirsaheta/snookerUI}
 * 
 * Created by Admir on 5 Jul. 2023.
 * 
 */

import { BindingState } from "../BindingState"

export type UIAlert = {
    isPresented: BindingState;
    title: string;
    message?: string;
    actions? :{
        action?: () => void;
        role?: 'default' | 'cancel' | 'destructive';
    }
}