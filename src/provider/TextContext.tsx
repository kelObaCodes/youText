// ThemeContext.js
import { createContext } from 'react';

type TextValueProp = {
    text?: string
    setText?: (data:string)=> void
    saveUserText?: (data:string)=> void
}
// Create a context with a default value
const TextContext = createContext<TextValueProp>({
    text: undefined,
    setText: () => {},
    saveUserText: () => {},
  });
export default TextContext;
