# TaxApp Core Development Guidelines

Guidelines for the core development contributors on the TaxApp monorepo written to have a better understanding of TaxApp progress and coordination. Recommended read for new developers as part of onboarding.

### Issues management

All planned features, bugs, and enhancements are represented as a Github issue with appropriate description, examples, and issue labels.

Once created, issues can be brought into the [repository's "project"](https://github.com/mrrobot16/tax-app-ui-v0/projects), an automated kanban board consisting of columns that mark the issue status and can be _Unassigned_, _Assigned_, _In progress_ and _Done_. _Backlog_ column is used for keeping the available issues that are up for grabs and also when creating new tasks such as features, bug fixes or ideas.

![Github project board](https://i.imgur.com/aLWa5HQ.png)

Milestones in the Github projects are oriented to specific goals such as releases (bigger or smaller) as the progress can be measured for an estimate of time left until release.

### Branch Naming

For Feature:

- `git checkout -b feature-issue_number/some_description_of_feature`

For Bug:

- `git checkout -b bug-issue_number/some_description_of_bug`

For Refactor:

- `git checkout -b refactor-issue_number/some_description_of_refactor`

For Documentation:

- `git checkout -b documentation-issue_number/some_description_of_documentation`

For Improvements:

- `git checkout -b improvement-issue_number/some_description_of_documentation`

### Commit Message

For Feature:

- `git commit -m "api:v0 feature: user can login"`

For Bug:

- `git commit -m "api:v0bug: user login bug"`

For Refactor:

- `git commit -m "api:v0 refactor: created Header component in UserScreen"`

For Documentation:

- `git commit -m "api:v0 documentation: Minor changed developer guidelines doc"`

For Improvements:

- `git commit -m "api:v0 improvement: added ESlint for React"`

### Pull Request Naming and Description

- Description Title

- Description Text about Pull Request

- Issue number for PR

- Link to another PR

In example

```
Title: Login User component

Description: Implemented Login User component to home page

Closes: Issue URL: https://github.com/mrrobot16/tax-app-ui-v0/issues/1

Link: PR URL: https://github.com/mrrobot16/tax-app-ui-v0/pull/2
```

### Example Issue and Pull Request

Issue: https://github.com/mrrobot16/tax-app-ui-v0/issues

Pull request: https://github.com/mrrobot16/tax-app-ui-v0/pulls


## Linters WIP

Linting our code is important for readability and maintainable purposes.

TODO: Update script with ours.

Currently we are using:

- [ESLint](https://eslint.org/)

Before pushing to Github be sure that ESLint launches with no errors.

**Linting Scripts**

For both contracts and UI run: `yarn lint`

For api: `yarn lint:api`

For UI: `yarn lint:ui`

[Learn more about ESLint](https://eslint.org/)