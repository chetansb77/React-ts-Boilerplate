import React, { useState } from 'react';
import Code from '../utility/Code';
import somethingWrongIcon from '../../assets/icons/png/something-wrong.png';

interface ErrorProps {
  errorMessage?: string;
}

function Error({ errorMessage = '' }: ErrorProps): JSX.Element {
  const [showActualError, setShowActualError] = useState(false);

  return (
    <div className="error-component text-center">
      <div>
        <img
          src={somethingWrongIcon}
          className="image-center cursor-pointer"
          alt="something-wrong"
          onClick={() => { setShowActualError(!showActualError); }}
          aria-hidden="true"
          title="Show error"
        />
      </div>
      <div className="flex justify-center mt-2">
        {showActualError ? (
          <div className="code-message w-auto max-w-md">
            <Code codeSnippet={errorMessage} />
          </div>
        ) : (
          <div className="flex-initial w-72">
            <span className="message">Ooops!! Something went wrong</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Error;
