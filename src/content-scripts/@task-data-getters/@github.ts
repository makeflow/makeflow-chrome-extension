import {CreateTaskData} from '../../types';

export function getGitHubTaskData(): CreateTaskData | undefined {
  let siteNameElement = document.head.querySelector(
    'meta[property="og:site_name"]',
  );

  let siteName = siteNameElement
    ? siteNameElement.getAttribute('content')
    : undefined;

  if (siteName !== 'GitHub') {
    return undefined;
  }

  let issueTitleElement = document.querySelector(
    '.gh-header-title .js-issue-title',
  );

  let issueTitle = issueTitleElement?.textContent ?? document.title;

  return {
    brief: issueTitle.trim(),
    outputs: [
      {
        name: 'metadata_source',
        value: {
          type: 'raw',
          value: {
            type: 'github',
            url: location.href,
          },
        },
      },
    ],
  };
}
