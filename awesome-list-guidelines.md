<!-- omit from toc -->
# Awesome List Guidelines

> [!NOTE]
> Read the [Awesome Manifesto](awesome.md) before you create a new list.

> [!NOTE]
> You can use the awesome badge on any awesome list, which can be not only a public list but also a private one. But if you want the list to be included in the [Awesome][repo] list, it must meet the requirements in this file.

> [!NOTE]
> Do not create blockchain-related lists.
> 
> Do not create duplicates of any existing lists in the [Awesome][repo] list.
> 
> Search the subject of a new list in the [Awesome][repo] list before creating it. If a list about this subject already exists, contribute to it instead of making your own.
> 
> You can make a comment on [Issue #2242][incubating lists], which is dedicated for incubating lists to expose themselves to the community, in case you keep working on a duplicate list or making redunant efforts.

<!--! What do you mean by "Non-generated Markdown file in a GitHub repo."? Maybe I didn't get your point here. -->
> [!NOTE]
> Do not use generated Markdown files in the list repository.

<!--! Is it the function of Yeoman generator? I didn't understand the readme of Yeoman generator. -->
> [!TIP]
> You can use [Yeoman generator](https://github.com/dar5hak/generator-awesome-list) to create a new awesome list automatically.

---

<!-- omit from toc -->
## Contents

- [Repository settings](#repository-settings)
  - [Repository name](#repository-name)
  - [Default branch](#default-branch)
  - [Topics](#topics)
- [List profile](#list-profile)
  - [List title](#list-title)
  - [Awesome badge](#awesome-badge)
  - [Short description](#short-description)
  - [Logo and header image](#logo-and-header-image)
- [Table of contents](#table-of-contents)
- [List body](#list-body)
  - [Content range](#content-range)
  - [List items](#list-items)
  - [Footnotes](#footnotes)
- [Licence](#licence)
- [Contributing](#contributing)
- [Submit the list to Awesome](#submit-the-list-to-awesome)

---

## Repository settings

### Repository name

Use lowercase slug format for the repository name of the list:

```
awesome-name-of-list
```

Examples:

- ✅ `awesome-swift`
- ✅ `awesome-web-typography`
- ❌ `awesome-Swift`
- ❌ `AwesomeWebTypography`

### Default branch

Set the default branch name of the repository to [`main`, not `master`](https://www.zdnet.com/article/github-to-replace-master-with-alternative-term-to-avoid-slavery-references/).

### Topics

Add `awesome-list` and `awesome` as [GitHub topics](https://help.github.com/articles/about-topics) to the repository. If possible, add more relevant topics.

## List profile

### List title

Use [title case] for the list title (heading1 in readme):

 ```markdown
 # Awesome Name of List
 ```

Examples:

- ✅ `# Awesome Swift`
- ✅ `# Awesome Web Typography`
- ❌ `# awesome-swift`
- ❌ `# AwesomeSwift`

### Awesome badge

Add the [awesome badge] to the right of the list title. If the list has a header image aligned to center, optionally align the [awesome badge] to center.

Link the [awesome badge] back to the [Awesome][repo] list.

> [!NOTE]
> Do not add a CI  badge (e.g. GitHub Actions) in the list title. You can still use a CI for linting, but the badge has no value in the readme.
>
> Do not add links like `Inspired by awesome-foo` or `Inspired by the Awesome project` at the top of the readme. The [awesome badge] is enough.

### Short description

Write a short description for the list, following the list title. 

Make sure that the list focuses on one certain scope only. If the list has related awesome lists, link to them.

[Exmaples][Awesome Quantified Self]:

- ✅ `Mobile operating system for Apple phones and tablets.`
- ✅ `Prototyping interactive UI designs.`
- ❌ `Resources and tools for iOS development.`
- ❌ `Awesome Framer packages and tools.`

### Logo and header image

Whenever possible, add a logo or a header image for the list. The image must meet the following requirements:

- If the image is set to full width, align it to center. Otherwise, place it at the top-right of the readme (see the [example][Awesome Electron]).
- Link the image to the website of the list or other relevant website.
- Use a high-DPI image as the logo or header image. Set it to a maximum of half the width of the original image.
- Do not repeat the text of the list title in the image. If the two have the same texts, use the image as the list title (the image follows the symbol `#` and a space in Markdown, or is wraped by the tags of `<h1>` in HTML).

## Table of contents

Insert a table of contents in the list. The table of contents must meet the following requirements:

- Use `Contents` as the heading (heading2) of the table of contents , not `Table of Contents`.
- The table of contents must be the first section of the list.
- The table of contents must be a maximum of two-level list (see the [example][Syntax of Nested Lists]).
- Exclude `Contributing` and `Footnotes` from the table of contents.

## List body

### Content range

Add actual awesome stuff to the list only. Read the [Awesome manifesto](awesome.md) to know what is awesome.

Do not add the following stuff to the list:

- Unmaintained repositoris
- Archived repositoris
- Deprecated documents
- Missing documents

> [!TIP]
> If you really need to add such stuff to the list, put them in a separate Markdown file.

### List items

> [!NOTE]
> Make sure that the list is grammatically correct, typo-free and has no Markdown formatting errors.

Write a description for each item in the list to tell the readers why it is on the list and how they will benefit from it, unless the item name expresses these points clearly by itself.

Format all the items in the list consistently:

- Separate each item and its desctiption by a dash.
- Start each description with an uppercase character and end it with a period.
- Use correct and consistent names. For example, use `Node.js`, not `NodeJS` or `node.js`.
- Do not use [hard-wrapping](https://stackoverflow.com/questions/319925/difference-between-hard-wrap-and-soft-wrap) in items.

Example:

 ```markdown
 - [AVA](…) - JavaScript test runner.
 ```
<!--! The separator in the example is a hyphen, not a dash. So what should it be?-->

### Footnotes

Put all subordinate information into the `Footnotes` at the bottom of the readme, such as: 

- Copyright notice
- Hyperlinks to sources
- Pointers to expansive content.
<!--! What do "Hyperlinks to sources" and "Pointers to expansive content" mean? -->

## Licence

> [!NOTE]
> We strongly recommend the [CC0 license], but any [Creative Commons license] will work. 
> 
> Code licenses like MIT, BSD, Apache, GPL, etc, are not acceptable. Neither are WTFPL and [Unlicense].

> [!NOTE]
> Do not add the license name, text, or a `Licence` section to the readme. GitHub already shows the license name and link to the license file at the top of the repository.

> [!TIP]
> You can quickly add the [CC0 license] to your repository by going to this URL (replace `<user>` and `<repo>` with your username and repository name accordingly): 
> 
> ```
> https://github.com/<user>/<repo>/community/license/new?branch=main&template=cc0-1.0
> ```

Adopt an appropriate license for the list.

Create a file named `license.md` or `LICENSE.md` in the repository root with the license text.

To verify that you've read all the guidelines, please comment on your pull request with just the word `unicorn`. 😇

## Contributing

Create a file named `contributing.md` or `CONTRIBUTING.md` in the repository root.

You can optionally create a `Contributing` section at the top or bottom of readme, linking to the contributing file.

## Submit the list to [Awesome][repo]

> [!NOTE]
> You can submit the list to the [Awesome][repo] list at least **30 days** after the birthday of the list. Give it a chance to mature.
>
> The birthday of the list is the day when it received the first real commit or when it was open-sourced.
   
1. Make sure that the list is compliant with the [awesome list guidelines](#awesome-list-guidelines).
2. Run the [awesome-lint] on the list. 
    - If the [awesome-lint] reports issues, fix them.
    - If there are false-positives or things that can not be fixed, report it by [submitting an issue].
3. Comply the [pull request guidelines](pull-request-guidelines.md) to submit a pull request for the list to be added in [Awesome][repo] list.

---

Thanks for being awesome! 😎

---

<!-- link definition -->

[repo]: https://github.com/sindresorhus/awesome

[awesome badge]: https://github.com/sindresorhus/awesome/blob/main/awesome.md#awesome-badge

[incubating lists]: https://github.com/sindresorhus/awesome/issues/2242

[title case]: https://capitalizemytitle.com/

[Awesome Quantified Self]: https://github.com/willempienaar/awesome-quantified-self

[Awesome Electron]: https://github.com/sindresorhus/awesome-electron

[Syntax of Nested Lists]: https://commonmark.org/help/tutorial/10-nestedLists.html

[CC0 license]: https://creativecommons.org/publicdomain/zero/1.0/

[Creative Commons license]: https://creativecommons.org/choose/

[Unlicense]: https://unlicense.org

[awesome-lint]: https://github.com/sindresorhus/awesome-lint

[submitting an issue]: https://github.com/sindresorhus/awesome-lint/issues/new