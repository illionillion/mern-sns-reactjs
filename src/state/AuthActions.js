// ユーザー入力に応じたアクションの設定
export const LoginStart = (user) => ({
    type: "LOGIN_START", // type: アクションの名前
})

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user, // ログインに成功したらその状態を返す
})

export const LoginError = (error) => ({
    type: "LOGIN_ERROR",
    payload: error,
})
