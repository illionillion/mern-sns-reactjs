/**
 * 画像のパスを返す
 * @param {string} path 相対パス・フォルダ
 * @returns {string} 絶対パス
 */
export default function imageRequire (path){
    const REACT_APP_PUBLIC_FOLDER = window.location.origin // url取得
    return REACT_APP_PUBLIC_FOLDER + '/' + path
}