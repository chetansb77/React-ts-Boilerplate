import React from 'react';

interface CodeProps {
  codeSnippet: string;
}

function Code({ codeSnippet }: CodeProps): JSX.Element {
  return (
    <div className="code-snippet">
      {codeSnippet}
    </div>
  );
}

export default Code;
