import React, { useState } from 'react';
import classNames from 'classnames';

import CopyIcon from 'pages/components/CopyIcon';

import styles from './styles.module.scss';

type CopyButtonProps = {
  textToCopy: string;
};

enum CopyStates {
  ready,
  copying,
  copied,
  errored
}

const ButtonContent = {
  [CopyStates.ready]: (<CopyIcon className={styles.copyIcon} />),
  [CopyStates.copying]: (<div className={styles.buttonContent}>⋯</div>),
  [CopyStates.copied]: (<div className={styles.buttonContent}>✓</div>),
  [CopyStates.errored]: (<div className={styles.buttonContent}>!</div>),
};

const messageDisplayTime = 2000;

function CopyButton({
  textToCopy,
}: CopyButtonProps) {
  const [copyState, setCopyState] = useState(CopyStates.ready);

  const isButtonDisabled = copyState !== CopyStates.ready;

  function resetButton() {
    setCopyState(CopyStates.ready);
  }

  function writeToClipboard() {
    setCopyState(CopyStates.copying);

    const writePromise = navigator.clipboard.writeText(textToCopy);

    writePromise
      .then(function writeComplete() {
        setCopyState(CopyStates.copied);
        setTimeout(resetButton, messageDisplayTime);
      })
      .catch(function writeFailed(err) {
        console.error(err);
        setCopyState(CopyStates.errored);
        setTimeout(resetButton, messageDisplayTime);
      });
  }

  const containerClassname = classNames({
    [styles.copyContainer]: true,
    [styles.disabled]: copyState === CopyStates.copying,
    [styles.copied]: copyState === CopyStates.copied,
    [styles.error]: copyState === CopyStates.errored,
  });

  const buttonProps = {
    className: styles.copyButton,
    'aria-label': 'Copy text',
    ...(isButtonDisabled ? {} : {
      onClick: writeToClipboard,
    }),
  };

  return (
    <div className={styles.copyPosition}>
      <div className={containerClassname}>
        <div className={styles.message}>
          <div className={styles.successMessage}>
            <span>Copied!</span>
          </div>
          <div className={styles.errorMessage}>
            <span>Failed!</span>
          </div>
        </div>
        <button type="button" {...buttonProps}>
          { ButtonContent[copyState] }
        </button>
      </div>
    </div>
  );
}

export default CopyButton;