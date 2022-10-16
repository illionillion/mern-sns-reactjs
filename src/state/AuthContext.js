import {createContext, useReducer} from 'react'
import AuthReducer from './AuthReducer'

// 最初のユーザー状態を定義
const initialState = {
    // user: null,
    user: {
        _id: "634a5824a87e6d2cf067cc34",
        username: "sei-javascript",
        email: "sei-sample@email.com",
        password: "052614",
        profilePicture: "",
        coverPicture: "",
        followers: [],
        followings: [],
        isAdmin: false
    },
    isFetching: false,
    error: false,
}

// 状態をグローバルに管理する
export const AuthContext = createContext(initialState) // 初期値のユーザー状態を誰でも使えるようにする

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState)

    return <AuthContext.Provider value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
    }}>
        {children}
    </AuthContext.Provider>
}