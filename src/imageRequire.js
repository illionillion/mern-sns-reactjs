/**
 * 画像のパスを返す
 * @param {string} path 相対パス・フォルダ
 * @returns {string} 絶対パス
 */
export default function imageRequire (path){
    
    // const REACT_APP_PUBLIC_FOLDER = window.location.origin // url取得
    const REACT_APP_PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
    const uri = REACT_APP_PUBLIC_FOLDER + '/' + path.replace('assets/','') // assets/いらない
    // console.log(uri);
    return uri
}