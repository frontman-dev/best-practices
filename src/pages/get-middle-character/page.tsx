import React from "react"
import { CssPage } from "../css-template/template"

export function GetMiddleCharacterPage() {
  const code = `
    getMiddle('test') === 'e';
    getMiddle('testing') === 't';;
    getMiddle('middle') === 'd';
    getMiddle('character') === 'a';

    function getMiddle(str) {
        return str[Math.ceil(str.length / 2) - 1];
    }
  `
  return <CssPage title="Get middle character" code={code} block={<></>} />
}
