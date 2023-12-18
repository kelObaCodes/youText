"use client"

import React, { useState } from 'react';
import TextContext from './TextContext';


type Prop = {
    children?: React.ReactNode
}

const TextProvider = ({ children }: Prop) => {
  const [text, setText] = useState<string>("");

  const saveUserText = (text: string) => {
    setText(text);
};
  return (
    <TextContext.Provider value={{text, setText, saveUserText }}>
      {children}
    </TextContext.Provider>
  );
};

export default TextProvider;
