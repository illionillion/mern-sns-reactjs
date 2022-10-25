import {createContext, useEffect, useReducer} from 'react'
import AuthReducer from './AuthReducer'

// 最初のユーザー状態を定義
const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null, // ユーザー情報の取得
    // user: {
    //     _id: "634a5824a87e6d2cf067cc34",
    //     username: "sei-javascript",
    //     email: "sei-sample@email.com",
    //     password: "052614",
    //     profilePicture: "",
    //     coverPicture: "",
    //     followers: [],
    //     followings: [],
    //     isAdmin: false
    // },
    // user: {

    //     _id: "6308812a916309c03bd8a16c",
    //     username: "nakajima",
    //     email: "nakazima@gmail.com",
    //     password: "ocs_h24kw35",
    //     profilePicture: "assets/person/1.jpeg",
    //     coverPicture: "",        
    //     followers: [],        
    //     followings: [],
    //     isAdmin: false
    // },
    isFetching: false,
    error: false,
}

// 状態をグローバルに管理する
export const AuthContext = createContext(initialState) // 初期値のユーザー状態を誰でも使えるようにする

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState)

    useEffect(()=>{ 
        localStorage.setItem("user" ,JSON.stringify(state.user)) // ユーザー情報の取得
     }, [state.user])

    return <AuthContext.Provider value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
    }}>
        {children}
    </AuthContext.Provider>
}