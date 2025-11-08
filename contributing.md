# Contribution Guidelines

Please note that this project is released with a [Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.

## Adding an awesome list

Please ensure your pull request adheres to the [list of guidelines](pull_request_template.md).

## Creating your own awesome list

To create your own list, check out the [instructions](create-list.md).

## Adding something to an awesome list

If you have something awesome to contribute to an awesome list, this is how you do it.

You'll need a [GitHub account](https://github.com/join)!

1. Access the awesome list's GitHub page. For example: https://github.com/sindresorhus/awesome
2. Click on the `readme.md` file: ![Step 2 Click on Readme.md](https://cloud.githubusercontent.com/assets/170270/9402920/53a7e3ea-480c-11e5-9d81-aecf64be55eb.png)
3. Now click on the edit icon. ![Step 3 - Click on Edit](https://cloud.githubusercontent.com/assets/170270/9402927/6506af22-480c-11e5-8c18-7ea823530099.png)
4. You can start editing the text of the file in the in-browser editor. Make sure you follow the guidelines above. You can use [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/). ![Step 4 - Edit the file](https://cloud.githubusercontent.com/assets/170270/9402932/7301c3a0-480c-11e5-81f5-7e343b71674f.png)
5. Say why you're proposing the changes, and then click on "Propose file change". ![Step 5 - Propose Changes](https://cloud.githubusercontent.com/assets/170270/9402937/7dd0652a-480c-11e5-9138-bd14244593d5.png)
6. Submit the [pull request](https://help.github.com/articles/using-pull-requests/)!

## Maintenance Status Guidelines

When adding or updating entries, please consider adding maintenance status indicators to help users understand the current state of repositories:

### Maintenance Status Indicators

- **🚫 Unmaintained** - Use when the repository is explicitly marked as unmaintained by the author, or has been abandoned for 2+ years with no response to issues or pull requests.
- **⚠️ Deprecated** - Use when the project has been officially deprecated in favor of a newer alternative, or when the technology/framework itself is deprecated.
- **🔄 Inactive** - Use when the repository hasn't had significant commits, releases, or maintainer responses for 1+ years, but isn't explicitly unmaintained.
- **No indicator** - For actively maintained projects (default state).

### How to Apply Status Indicators

1. **Research the repository** - Check recent commits, issues, pull requests, and any announcements from maintainers.
2. **Add the indicator** after the repository link using the format: `[Repository Name](link) **🚫 Unmaintained** - Description.`
3. **Include context** - Add a brief explanation in italics when helpful: `*(Last updated 2020, author recommends Alternative X)*`

### Examples

```markdown
- [Old Framework](https://github.com/example/old-framework#readme) **⚠️ Deprecated** - Legacy web framework. *(Deprecated in favor of New Framework)*
- [Inactive Tool](https://github.com/example/inactive-tool#readme) **🔄 Inactive** - Useful utility library.
- [Abandoned Project](https://github.com/example/abandoned#readme) **🚫 Unmaintained** - Interesting proof of concept.
```

### Guidelines for Status Assessment

- Check the last commit date and frequency of recent activity
- Look for maintainer announcements in README, issues, or releases
- Consider the responsiveness to recent issues and pull requests
- Verify if the project is still compatible with current versions of its dependencies
- Be conservative - when in doubt, don't add a status indicator

## Updating your Pull Request

Sometimes, a maintainer of an awesome list will ask you to edit your Pull Request before it is included. This is normally due to spelling errors or because your PR didn't match the awesome-* list guidelines.

[Here](https://github.com/RichardLitt/knowledge/blob/master/github/amending-a-commit-guide.md) is a write up on how to change a Pull Request and the different ways you can do that.
