import React from 'react';
import classNames from 'classnames';

import ContentBlock from 'pages/components/ContentBlock';
import ExternalLink from 'pages/components/ExternalLink';
import HeadingBlock from 'pages/components/HeadingBlock';
import ChecklistItem from 'pages/components/ChecklistItem';

import styles from './styles.module.scss';

function Documentation() {
  return (
    <ContentBlock>
      <HeadingBlock level="1" heading="Developer Documentation">
        <p>
          {'Documentation is also provided in the '}
          <ExternalLink href="https://github.com/chichiwang/tamsui">Github repository</ExternalLink>
          {' in the directory '}
          <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/docs/README.md">/docs/README.md</ExternalLink>
          .
        </p>
      </HeadingBlock>

      <HeadingBlock level="2" heading="Contents">
        <a href="#Starting-a-Project">Starting a Project</a>
      </HeadingBlock>

      <HeadingBlock level="2" id="Starting-a-Project" heading="Starting a Project">
        <ChecklistItem>
          {'Clone the '}
          <ExternalLink href="https://github.com/chichiwang/tamsui">repository</ExternalLink>
          .
        </ChecklistItem>
        <ChecklistItem>Rename the project directory.</ChecklistItem>

        <ChecklistItem>
          {'Update the '}
          <span className={styles.highlight}>package.json</span>
          {' file.'}
        </ChecklistItem>
        <ChecklistItem className={classNames(styles.indent, styles.checklist)}>
          {'Update the '}
          <span className={styles.highlight}>name</span>
          {' field.'}
        </ChecklistItem>
        <ChecklistItem className={classNames(styles.indent, styles.checklist)}>
          {'Update the '}
          <span className={styles.highlight}>repository/url</span>
          {' field.'}
        </ChecklistItem>
        <ChecklistItem className={classNames(styles.indent, styles.checklist)}>
          {'Update the '}
          <span className={styles.highlight}>bugs/url</span>
          {' field.'}
        </ChecklistItem>
        <ChecklistItem className={classNames(styles.indent, styles.checklist)}>
          {'Update the '}
          <span className={styles.highlight}>homepage</span>
          {' field.'}
        </ChecklistItem>

        <ChecklistItem>
          <ExternalLink href="https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url">Reset the git remote</ExternalLink>
          {' to your new project repository.'}
        </ChecklistItem>

        <ChecklistItem>
          {'If using '}
          <ExternalLink href="https://github.com/nvm-sh/nvm">nvm</ExternalLink>
          {', run '}
          <span className={styles.highlight}>nvm use</span>
          .
        </ChecklistItem>
        <ChecklistItem className={classNames(styles.indent, styles.checklist)}>
          {'Otherwise, note the contents of '}
          <span className={styles.highlight}>.nvmrc</span>
          {' to see the version of '}
          <ExternalLink href="https://nodejs.org/">Node.js</ExternalLink>
          {' this project is built on.'}
        </ChecklistItem>

        <ChecklistItem>
          {'Run '}
          <span className={styles.highlight}>npm install</span>
          .
        </ChecklistItem>
      </HeadingBlock>
    </ContentBlock>
  );
}

export default Documentation;
