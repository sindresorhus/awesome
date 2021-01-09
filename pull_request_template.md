<!-- Congrats on creating an Awesome list! 🎉 -->

<!-- Please fill in the below placeholders -->

**[Insert URL to the list here]**

**[Explain what this list is about and why it should be included here]**

### By submitting this pull request I confirm I've read and complied with the below requirements 🖖

**Please read it multiple times. I spent a lot of time on these guidelines and most people miss a lot.**

## Requirements for your pull request

- **Don't waste my time.** Do a good job, adhere to all the guidelines, and be responsive.
- **You have to review at least 2 other [open pull requests](https://github.com/sindresorhus/awesome/pulls?q=is%3Apr+is%3Aopen).**
	Try to prioritize unreviewed PRs, but you can also add more comments to reviewed PRs. Go through the below list when reviewing. This requirement is meant to help make the Awesome project self-sustaining. Comment here which PRs you reviewed. You're expected to put a good effort into this and to be thorough. Look at previous PR reviews for inspiration. **Just commenting “looks good” or simply marking the pull request as approved does not count!** You have to actually point out mistakes or improvement suggestions.
- You have read and understood the [instructions for creating a list](create-list.md).
- This pull request has a title in the format `Add Name of List`.
	- ✅ `Add Swift`
	- ✅ `Add Software Architecture`
	- ❌ `Update readme.md`
	- ❌ `Add Awesome Swift`
	- ❌ `Add swift`
	- ❌ `add Swift`
	- ❌ `Adding Swift`
	- ❌ `Added Swift`
- Your entry here should include a short description about the project/theme of the list. **It should not describe the list itself.** The first character should be uppercase and the description should end in a dot. It should be an objective description and not a tagline or marketing blurb.
	- ✅ `- [iOS](…) - Mobile operating system for Apple phones and tablets.`
	- ✅ `- [Framer](…) - Prototyping interactive UI designs.`
	- ❌ `- [iOS](…) - Resources and tools for iOS development.`
	- ❌ `- [Framer](…)`
	- ❌ `- [Framer](…) - prototyping interactive UI designs`
- Your entry should be added at the bottom of the appropriate category.
- The suggested Awesome list complies with the below requirements.

## Requirements for your Awesome list

- **Has been around for at least 30 days.**<br>That means 30 days from either the first real commit or when it was open-sourced. Whatever is most recent.
- Don't open a Draft / WIP pull request while you work on the guidelines. A pull request should be 100% ready and should adhere to all the guidelines when you open it.
- Run [`awesome-lint`](https://github.com/sindresorhus/awesome-lint) on your list and fix the reported issues. If there are false-positives or things that cannot/shouldn't be fixed, please [report it](https://github.com/sindresorhus/awesome-lint/issues/new).
- The default branch should be named [`main`, not `master`](https://www.zdnet.com/article/github-to-replace-master-with-alternative-term-to-avoid-slavery-references/).
- **Includes a succinct description of the project/theme at the top of the readme.** [(Example)](https://github.com/willempienaar/awesome-quantified-self)
	- ✅ `Mobile operating system for Apple phones and tablets.`
	- ✅ `Prototyping interactive UI designs.`
	- ❌ `Resources and tools for iOS development.`
	- ❌ `Awesome Framer packages and tools.`
- It's the result of hard work and the best I could possibly produce.
	**If you have not put in considerable effort into your list, your pull request will be immediately closed.**
- The repo name of your list should be in lowercase slug format: `awesome-name-of-list`.
	- ✅ `awesome-swift`
	- ✅ `awesome-web-typography`
	- ❌ `awesome-Swift`
	- ❌ `AwesomeWebTypography`
- The heading title of your list should be in [title case](https://capitalizemytitle.com/) format: `# Awesome Name of List`.
	- ✅ `# Awesome Swift`
	- ✅ `# Awesome Web Typography`
	- ❌ `# awesome-swift`
	- ❌ `# AwesomeSwift`
- Non-generated Markdown file in a GitHub repo.
- The repo should have `awesome-list` & `awesome` as [GitHub topics](https://help.github.com/articles/about-topics). I encourage you to add more relevant topics.
- Not a duplicate. Please search for existing submissions.
- Only has awesome items. Awesome lists are curations of the best, not everything.
- Does not contain items that are unmaintained, has archived repo, deprecated, or missing docs. If you really need to include such items, they should be in a separate Markdown file.
- Includes a project logo/illustration whenever possible.
	- Either centered, fullwidth, or placed at the top-right of the readme. [(Example)](https://github.com/sindresorhus/awesome-electron)
	- The image should link to the project website or any relevant website.
	- **The image should be high-DPI.** Set it to maximum half the width of the original image.
- Entries have a description, unless the title is descriptive enough by itself. It rarely is though.
- Includes the [Awesome badge](awesome.md#awesome-badge).
	- Should be placed on the right side of the readme heading.
		- Can be placed centered if the list has a centered graphics header.
	- Should link back to this list.
- Has a Table of Contents section.
	- Should be named `Contents`, not `Table of Contents`.
	- Should be the first section in the list.
	- Should only have one level of [nested lists](https://commonmark.org/help/tutorial/10-nestedLists.html), preferably none.
	- Must not feature `Contributing` or `Footnotes` sections.
- Has an appropriate license.
	- **We strongly recommend the [CC0 license](https://creativecommons.org/publicdomain/zero/1.0/), but any [Creative Commons license](https://creativecommons.org/choose/) will work.**
		- Tip: You can quickly add it to your repo by going to this URL: `https://github.com/<user>/<repo>/community/license/new?branch=main&template=cc0-1.0` (replace `<user>` and `<repo>` accordingly).
	- A code license like MIT, BSD, Apache, GPL, etc, is not acceptable. Neither are WTFPL and [Unlicense](https://unlicense.org).
	- Place a file named `license` or `LICENSE` in the repo root with the license text.
	- **Do not** add the license name, text, or a `Licence` section to the readme. GitHub already shows the license name and link to the full text at the top of the repo.
	- To verify that you've read all the guidelines, please comment on your pull request with just the word `unicorn`.
- Has [contribution guidelines](awesome.md#include-contribution-guidelines).
	- The file should be named `contributing.md`. Casing is up to you.
	- It can optionally be linked from the readme in a dedicated section titled `Contributing`, positioned at the top or bottom of the main content.
	- The section should not appear in the Table of Contents.
- All non-important but necessary content (like extra copyright notices, hyperlinks to sources, pointers to expansive content, etc) should be grouped in a `Footnotes` section at the bottom of the readme. The section should not be present in the Table of Contents.
- Has consistent formatting and proper spelling/grammar.
	- The link and description are separated by a dash. <br>Example: `- [AVA](…) - JavaScript test runner.`
	- The description starts with an uppercase character and ends with a period.
	- Consistent and correct naming. For example, `Node.js`, not `NodeJS` or `node.js`.
- Doesn't use [hard-wrapping](https://stackoverflow.com/questions/319925/difference-between-hard-wrap-and-soft-wrap).
- Doesn't include a Travis badge.<br>You can still use Travis for list linting, but the badge has no value in the readme.
- Doesn't include an `Inspired by awesome-foo` or `Inspired by the Awesome project` kinda link at the top of the readme. The Awesome badge is enough.

**Go to the top and read it again.**
