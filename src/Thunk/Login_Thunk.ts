import {AuthAPI} from "../Api/Api";
import {AppThunk} from "../redax/redux-store";
import {setAuthUserDataAC} from "../redax/Authorization-reducer";

export const AuthMeTC = (): AppThunk => async dispatch => {
    const response = await AuthAPI.AuthUser()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(response.data))
    }
}

export const getAccountAuthTC = (values: { email: string, password: string, rememberMe: boolean, captcha: boolean }): AppThunk => async dispatch => {
    const response = await AuthAPI.SignIn(values.email, values.password, values.rememberMe, values.captcha);
    const responseAuth = await AuthAPI.AuthUser();
    if (response.resultCode === 0) {
        dispatch(setAuthUserDataAC(responseAuth.data));
    }
}

export const logOutTC = (): AppThunk => async dispatch => {
    const response = await AuthAPI.LogOut()
    if (response.resultCode === 0) {
        dispatch(setAuthUserDataAC({id: null, email: null, login: null, isAuth: false}))
    }
}