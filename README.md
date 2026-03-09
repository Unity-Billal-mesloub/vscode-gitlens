# GitLens &mdash; Supercharge Git in VS Code

> Supercharge Git and unlock **untapped knowledge** within your repo to better **understand**, **write**, and **review** code. Focus, collaborate, accelerate.

[GitLens](https://gitkraken.com/gitlens?utm_source=gitlens-extension&utm_medium=in-app-links&utm_campaign=gitlens-logo-links 'Learn more about GitLens') is a powerful [open-source](https://github.com/Unity-Billal-mesloub/vscode-gitlens 'Open GitLens on GitHub') extension for Visual Studio Code built and maintained by GitKraken.

Enhance your workflows with powerful Git functionality like in-editor blame annotations, hovers, CodeLens, and more—all fully customizable within VS Code. Try GitLens Pro's advanced workflows that accelerate PR reviews, provide rich interactive Git actions, and enhance collaboration for you and your team.

## Getting Started

Install GitLens by clicking `Install` on the banner above, or from the Extensions side bar in VS Code by searching for GitLens.

<p>
  <a title="Watch the GitLens Getting Started video" href="https://www.youtube.com/watch?v=UQPb73Zz9qk"><img src="https://raw.githubusercontent.com/gitkraken/vscode-gitlens/main/images/docs/get-started-video.png" alt="Watch the GitLens Getting Started video" /></a>
</p>

- Use `Switch to Pre-Release Version` on the extension banner to be the first to experience new features.

> Have questions or concerns? Talk to our engineering team directly through our [GitHub Discussions](https://github.com/Unity-Billal-mesloub/vscode-gitlens/discussions/categories/feedback) page. Having a positive experience with GitLens? Feel free to [write a review](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens&ssr=false#review-details).

## GitLens Editions: Community and Pro

**GitLens Community** is free and gives you powerful tools to manage Git and understand how your code has evolved and by whom. With popular features like in-editor blame annotations, hovers, and CodeLens, you can see actionable authorship details at the top of each file. Track the history of any file over time using Revision Navigation to gain deeper insights into code changes.

**GitLens Pro** takes your workflow to the next level by unlocking advanced features and seamless integrations:

- **Accelerate PR reviews** and easily manage your end-to-end workflows with a clean and actionable PR, issue, and branch Home View built directly into VS Code.
- **Manage commits effortlessly** using the Commit Graph, where you can execute advanced actions like rebase, merge, and more. With powerful search and filtering, quickly locate commits, branches, or files.
- **Enhance collaboration** by integrating with platforms like GitHub, GitLab, and Bitbucket, reducing context switching. View and manage PRs directly in VS Code through Launchpad.

You can [try GitLens Pro for free](https://gitkraken.dev/register?product=gitlens&source=marketing_page&redirect_uri=vscode%3A%2F%2Feamodio.gitlens%2Flogin&flow=gitlens_web&utm_source=gitlens-extension&utm_medium=readme) by signing up for a GitKraken account. Some Pro features are available for free on public repos. `Preview` features may require a GitKraken account and could become Pro features in the future.

[Workflows](#discover-powerful-workflows 'Jump to Discover Powerful Workflows')
| [More Features](#more-features 'Jump to More Features')
| [Labs](#gitkraken-labs 'Jump to GitKraken Labs')
| [Pro](#ready-for-gitlens-pro 'Jump to Ready for GitLens Pro?')
| [Support and Community](#support-and-community 'Jump to Support and Community')
| [Contributing](#contributing 'Jump to Contributing')
| [Contributors](#contributors- 'Jump to Contributors')
| [License](#license 'Jump to License')

# Discover Powerful Workflows

GitLens offers a wide range of features—here are the three most popular workflows that users rely on to boost their productivity:

- [**Interactive Code History**](#interactive-code-history) &mdash; Understanding code in repositories with multiple branches and contributors can be difficult. GitLens provides the context you need with tools like blame, hovers, and file annotations. But it doesn’t stop there—the interactive Commit Graph lets you create branches, rebase, revert, and more, all with powerful search capabilities.

- [**Accelerate PR Reviews**](#accelerate-pr-reviews) &mdash; Reduce context switching and manage all your PRs in one place. Prioritize tasks and identify bottlenecks right in VS Code with Launchpad when you integrate Github or other host providers. Work on multiple branches at once without disrupting your main workspace with Worktrees.

- [**Streamline Collaboration**](#streamline-collaboration) &mdash; GitLens isn’t just for solo developers—it’s designed to enhance team collaboration. With Cloud Patches and Code Suggest, you can share and discuss suggested changes with any GitLens or GitKraken user, on multiple files and even PRs.

## Home View - Your VS Code Workflow Hub

Compact but powerful, the Home View lets you take your tasks and issues from code to merge. Start work on an issue and create PRs in one intelligent view. The perfect companion for developers looking to reduce tedious context switching and stay focused on their work in VS Code.

## Accelerate Your Workflow with AI (Preview)

GitLens leverages AI to simplify tedious tasks like writing commit messages, crafting pull request descriptions, generating changelogs and more—allowing you to focus on your code.

- **Generate Commit and Stash Messages**: Quickly create descriptive commit or stash messages tailored to your code changes.

- **Explain Commits**: Instantly understand the context of a commit through concise AI-generated explanations in the Inspect view.

- **Open Pull Requests**: Automatically generate clear PR titles and descriptions directly from your branch changes, speeding up review cycles.

- **Generate Changelogs**: Effortlessly summarize repository changes for release notes or documentation updates.
- More coming soon!

**Community Features**: Community users can generate commit messages for free if they are using GitHub Copilot or have a free [GitKraken](https://gitkraken.dev/register?product=gitlens&source=marketing_page&redirect_uri=vscode%3A%2F%2Feamodio.gitlens%2Flogin&flow=gitlens_web&utm_source=gitlens-extension&utm_medium=readme-ai) account with an API key connected to other providers like OpenAI, Anthropic, DeepSeek, Gemini, etc.

**Pro Features**: Subscribe to GitLens Pro to access all AI features with GitKraken AI—no manual key management required.

# Interactive Code History

Understanding who made changes, when, and why can be challenging. GitLens simplifies this with tools like the Commit Graph, Inspect, Inline Blame, and Hovers, giving you clear context and insights. Quickly explore your repository's history with intuitive visuals and actionable tools.

## Blame, CodeLens, and Hovers

Gain a deeper understanding of how code changed and by whom through in-editor code annotations and rich hovers.

### Inline and Status Bar Blame

Provides historical context about line changes through unobtrusive **blame annotation** at the end of the current line and on the status bar.

<figure align="center">
  <img src="https://raw.githubusercontent.com/gitkraken/vscode-gitlens/main/images/docs/current-line-blame.png" alt="Inline Line Blame" />
  <figcaption>Inline blame annotations</figcaption>
</figure>
<figure align="center">
  <img src="https://raw.githubusercontent.com/gitkraken/vscode-gitlens/main/images/docs/status-bar.png" alt="Status Bar Blame" />
  <figcaption>Status bar blame annotations</figcaption>
</figure>

💡 Use the `Toggle Line Blame` and `Toggle Git CodeLens` commands from the Command Palette to turn the annotations on and off.

### Git CodeLens

Adds contextual and actionable authorship information at the top of each file and at the beginning of each block of code.

- **Recent Change** &mdash; author and date of the most recent commit for the file or code block
- **Authors** &mdash; number of authors of the file or code block and the most prominent author (if there is more than one)

### Rich Hovers

Hover over blame annotations to reveal rich details and actions.

<figure align="center">
  <img src="https://raw.githubusercontent.com/gitkraken/vscode-gitlens/main/images/docs/hovers-current-line.png" alt="Current Line Hovers" />
</figure>

## File Annotations

Use on-demand whole file annotations to see authorship, recent changes, and a heatmap. Annotations are rendered as visual indicators directly in the editor.

<figure align="center">
  <img src="https://raw.githubusercontent.com/gitkraken/vscode-gitlens/main/images/docs/gutter-blame.png" alt="File Blame">
  <figcaption>File Blame annotations</figcaption>
</figure>
<figure align="center">
  <img src="https://raw.githubusercontent.com/gitkraken/vscode-gitlens/main/images/docs/gutter-changes.png" alt="File Changes" />
  <figcaption>File Changes annotations</figcaption>
</figure>
<figure align="center">
  <img src="https://raw.githubusercontent.com/gitkraken/vscode-gitlens/main/images/docs/gutter-heatmap.png" alt="File Heatmap" />
  <figcaption>File Heatmap annotations</figcaption>
</figure>

💡 On an active file, use the `Toggle File Blame`, `Toggle File Changes`, and `Toggle File Heatmap` commands from the Command Palette to turn the annotations on and off.

## Commit Graph `Pro`

Easily visualize your repository and keep track of all work in progress.

Use the rich commit search to find exactly what you're looking for. Its powerful filters allow you to search by a specific commit, message, author, a changed file or files, or even a specific code change. [Learn more](https://gitkraken.com/solutions/commit-graph?utm_source=gitlens-extension&utm_medium=in-app-links)

<figure align="center">
  <img src="https://raw.githubusercontent.com/gitkraken/vscode-gitlens/main/images/docs/commit-graph.png" alt="Commit Graph" />
</figure>

💡Quickly toggle the Graph via the `Toggle Commit Graph` command.

💡Maximize the Graph via the `Toggle Maximized Commit Graph` command.

## Revision Navigation

With just a click of a button, you can navigate backwards and forwards through the history of any file. Compare changes over time and see the revision history of the whole file or an individual line.

<figure align="center">
  <img src="https://raw.githubusercontent.com/gitkraken/vscode-gitlens/main/images/docs/revision-navigation.gif" alt="Revision Navigation" />
</figure>

# Accelerate PR Reviews

PR reviews often require switching between GitHub, email, and your IDE. Launchpad is your centralized PR hub in VS Code where you can spot bottlenecks, prioritize reviews and unblock your team. With Worktrees, you can work on multiple branches—hotfixes, features, or experiments—without disrupting your workspace.

## Launchpad `Pro`

Launchpad consolidates all your GitHub pull requests into a unified, actionable list. Focus on the most important reviews and take action to keep your team moving forward.. [Learn more](https://gitkraken.com/solutions/launchpad?utm_source=gitlens-extension&utm_medium=in-app-links)

<figure align="center">
  <img src="https://raw.githubusercontent.com/gitkraken/vscode-gitlens/main/images/docs/launchpad.png" alt="Launchpad" />
</figure>

## Worktrees `Pro`

Worktrees enable efficient multitasking by allowing you to work on multiple branches without stashing changes or leaving your current branch. They preserve your workflow while letting you shift focus when needed. For example, you can easily review a pull request on a worktree in a separate VS Code window with GitLens.

<figure align="center">
  <img src="https://raw.githubusercontent.com/gitkraken/vscode-gitlens/main/images/docs/worktrees.png" alt="Worktrees view" />
</figure>

# Streamline Collaboration

GitLens isn’t just for solo developers—it’s designed to enhance team collaboration. Sharing code can be tricky without adding noise to your repository with extra commits or branches. GitLens simplifies this with Cloud Patches and Code Suggest, letting you share or propose changes to any file in the repository without committing or pushing to a remote.

## Cloud Patches `Preview`

Privately and securely share code changes by creating a Cloud Patch from your work-in-progress, commit, or stash, and sharing a link with specific teammates and other developers. Cloud Patches enable early collaboration for feedback on direction and approach, reducing rework and streamlining your workflow, without adding noise to your repositories. [Learn more](https://gitkraken.com/solutions/cloud-patches?utm_source=gitlens-extension&utm_medium=in-app-links)

## Code Suggest `Preview`

Break free from GitHub's limited, comment-only review feedback. With GitLens, you can suggest code changes directly from your IDE, just like editing a Google Doc. Provide feedback on any part of your project during a review—not just the lines changed in a PR. [Learn more](https://gitkraken.com/solutions/code-suggest?utm_source=gitlens-extension&utm_medium=in-app-links)

<figure align="center">
  <img src="https://raw.githubusercontent.com/gitkraken/vscode-gitlens/main/images/docs/code-suggest.png" alt="Code Suggest" />
</figure>

# More Features

## Side Bar Views

Our views are arranged for focus and productivity, although you can easily drag them around to suit your needs.

<figure align="center">
  <img src="https://raw.githubusercontent.com/gitkraken/vscode-gitlens/main/images/docs/side-bar-views.png" alt="Side Bar views" />
  <figcaption>GitLens Inspect as shown above has been manually moved into the Secondary Side Bar</figcaption>
</figure>

💡 Use the `Reset Views Layout` command to quickly get back to the default layout.

### GitLens Inspect

An x-ray or developer tools Inspect into your code, focused on providing contextual information and insights to what you're actively working on.

- **Inspect** &mdash; See rich details of a commit or stash.
- **Line History** &mdash; Jump through the revision history of the selected line(s).
- **File History** &mdash; Explore the revision history of a file, folder, or selected lines.
- [**Visual File History `Pro`**](#visual-file-history-pro) &mdash; Quickly see the evolution of a file, including when changes were made, how large they were, and who made them.
- **Search & Compare** &mdash; Search and explore for a specific commit, message, author, changed file or files, or even a specific code change, or visualize comparisons between branches, tags, commits, and more.

### GitLens

Quick access to many GitLens features. Also the home of GitKraken teams and collaboration services (e.g. Cloud Patches, Cloud Workspaces), help, and support.

- **Home** &mdash; Quick access to many features.
- [**Cloud Patches `Preview`**](#cloud-patches-preview) &mdash; Privately and securely share code with specific teammates
- [**Cloud Workspaces `Preview`**](#gitkraken-workspaces-preview) &mdash; Easily group and manage multiple repositories together, accessible from anywhere, streamlining your workflow.

### Source Control

Shows additional views that are focused on exploring and managing your repositories.

- **Commits** &mdash; Comprehensive view of the current branch commit history, including unpushed changes, upstream status, quick comparisons, and more.
- **Branches** &mdash; Manage and navigate branches.
- **Remotes** &mdash; Manage and navigate remotes and remote branches.
- **Stashes** &mdash; Save and restore changes you are not yet ready to commit.
- **Tags** &mdash; Manage and navigate tags.
- [**Worktrees `Pro`**](#worktrees-pro) &mdash; Simultaneously work on different branches of a repository.
- **Contributors** &mdash; Ordered list of contributors, providing insights into individual contributions and involvement.
- **Repositories** &mdash; Unifies the above views for more efficient management of multiple repositories.

### (Bottom) Panel

Convenient and easy access to the Commit Graph with a dedicated details view.

## Cloud Workspaces `Preview`

Cloud Workspaces allow you to easily group and manage multiple repositories together, accessible from anywhere, streamlining your workflow. Create workspaces just for yourself or share (coming soon in GitLens) them with your team for faster onboarding and better collaboration. [Learn more](https://gitkraken.com/solutions/workspaces?utm_source=gitlens-extension&utm_medium=in-app-links)

## Visual File History `Pro`

Quickly see the evolution of a file, including when changes were made, how large they were, and who made them. Use it to quickly find when the most impactful changes were made to a file or who best to talk to about file changes and more.

<figure align="center">
  <img src="https://raw.githubusercontent.com/gitkraken/vscode-gitlens/main/images/docs/visual-file-history-illustrated.png" alt="Visual File History view" />
</figure>

## Interactive Rebase Editor

Easily visualize and configure interactive rebase operations with the intuitive and user-friendly Interactive Rebase Editor. Simply drag & drop to reorder commits and select which ones you want to edit, squash, or drop.

<figure align="center">
  <img src="https://raw.githubusercontent.com/gitkraken/vscode-gitlens/main/images/docs/rebase.gif" alt="Interactive Rebase Editor" />
</figure>

## Comprehensive Commands

Stop worrying about memorizing Git commands; GitLens provides a rich set of commands to help you do everything you need.

### Git Command Palette

A guided, step-by-step experience for quickly and safely executing Git commands.

<figure align="center">
  <img src="https://raw.githubusercontent.com/gitkraken/vscode-gitlens/main/images/docs/git-command-palette.png" alt="Git Command Palette" />
</figure>

### Quick Access Commands

Use a series of new commands to:

- Explore the commit history of branches and files
- Quickly search for and navigate to (and action upon) commits
- Explore a file of a commit
- View and explore your stashes
- Visualize the current repository status

# Integrations

Context switching kills productivity. GitLens not only reveals buried knowledge within your repository, it also brings additional context from issues and pull requests providing you with a wealth of information and insights at your fingertips.

Simplify your workflow and quickly gain insights with automatic linking of issues and pull requests across multiple Git hosting services including GitHub, GitHub Enterprise `Pro`, GitLab, GitLab Self-Managed `Pro`, Jira, Gitea, Gerrit, Google Source, Bitbucket, Bitbucket Server, Azure DevOps, and custom servers.

All integrations provide automatic linking, while rich integrations with GitHub, GitLab and Jira offer detailed hover information for autolinks, and correlations between pull requests, branches, and commits, as well as user avatars for added context.

## Define your own autolinks

Use autolinks to linkify external references, like Jira issues or Zendesk tickets, in commit messages.

# Ready for GitLens Pro?

When you're ready to unlock the full potential of GitLens and enjoy all the benefits, consider [upgrading to GitLens Pro](https://gitkraken.dev/register?product=gitlens&source=marketing_page&redirect_uri=vscode%3A%2F%2Feamodio.gitlens%2Flogin&flow=gitlens_web). With GitLens Pro, you'll gain access to [Pro features](https://gitkraken.com/gitlens/pro-features?utm_source=gitlens-extension&utm_medium=in-app-links) on privately hosted repos.

To learn more about the additional features offered with Pro, visit the [GitLens Community vs GitLens Pro](https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?utm_source=gitlens-extension&utm_medium=in-app-links&utm_campaign=readme&utm_term=ready-for-gitlens-pro) page.

# Support and Community

Support documentation can be found on the [GitLens Help Center](https://help.gitkraken.com/gitlens/gitlens-home/). If you need further assistance or have any questions, there are various support channels and community forums available for GitLens:

## Issue Reporting and Feature Requests

Found a bug? Have a feature request? Reach out on our [GitHub Issues page](https://github.com/Unity-Billal-mesloub/vscode-gitlens/issues).

## Discussions

Join the GitLens community on [GitHub Discussions](https://github.com/Unity-Billal-mesloub/vscode-gitlens/discussions) to connect with other users, share your experiences, and discuss topics related to GitLens.

## GitKraken Support

For any issues or inquiries related to GitLens, you can reach out to the GitKraken support team via the [official support page](https://support.gitkraken.com/). They will be happy to assist you with any problems you may encounter.

With GitLens Pro, you gain access to priority email support from our customer success team, ensuring higher priority and faster response times. Custom onboarding and training are also available to help you and your team quickly get up and running with a GitLens Pro plan.

# Contributing

GitLens is an open-source project that greatly benefits from the contributions and feedback from its community.

Your contributions, feedback, and engagement in the GitLens community are invaluable, and play a significant role in shaping the future of GitLens. Thank you for your support!

## Code Contributions

Want to contribute to GitLens? Follow the [CONTRIBUTING](https://github.com/Unity-Billal-mesloub/vscode-gitlens/blob/main/CONTRIBUTING.md) docs to get started.

## Documentation Contributions

Contributions to the documentation are greatly appreciated. If you find any areas that can be improved or have suggestions for new documentation, you can submit them as pull requests to the [GitLens Docs](https://github.com/Unity-Billal-mesloub/gitlens-docs) repository.

# Contributors

A big thanks to the people that have contributed to this project 🙏❤️:

- Billal mesloub ([@Unity-Billal-mesloub](https://github.com/Unity-Billal-mesloub)) &mdash; [contributions](https://github.com/Unity-Billal-mesloub/vscode-gitlens/)

Also special thanks to the people that have provided support, testing, brainstorming, etc:

- Billal-mesloub ([@Unity-Billal-mesloub](https://github.com/Unity-Billal-mesloub))

And of course the awesome [vscode](https://github.com/Unity-Engineering-software-engineering/vscode/graphs/contributors) team!

# License

This repository contains both OSS-licensed and non-OSS-licensed files.

All files in or under any directory named "plus" fall under LICENSE.plus.

The remaining files fall under the MIT license.
