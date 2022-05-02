/* INSERT MARKDOWN POST HERE */
export const post = `
# The simplest markdown blog for developers 

## Background
The emergence of static site generators has helped developers do away with databases hosting (like in a Content Management System such as WordPress) and write blog posts in templates, using an easy-to-use language like [Markdown](https://www.markdownguide.org/). 

## Problem
This project arose out of a frustration with static site generators (SSGs). SSGs such as [Jekyll](https://jekyllrb.com/) and [Hugo](https://gohugo.io/) require developers to be familiar with their unique ecosystem, including backend runtime and handling of dependencies. [Gatsby](https://www.gatsbyjs.com/), another SSG, also takes up a significant amount of disk space due to its dependency on ReactJS. 

I considered creating an entire blog with vanilla HTML/CSS/Javascript, but it would make writing blogposts less intuitive and enjoyable because of the insertions of HTML tags. It would also make migrations more tedious. I had used Jekyll for my earlier blog and the (single) post was written in Markdown. Retaining the use of Markdown also helps with migrating back to a Static Site Generator (should one entice me in future).

All in all, I wanted a Markdown-based blog that was highly customisable and lightweight, and does not require me to memorise a complicated installation-build-deploy process.

## Solution
I created a simple markdown-based blog written in as close to vanilla HTML/CSS/Javascript as possible. It involves three external libraries that I downloaded and packaged in the same repository.

The libraries are: Bootstrap for CSS, JQuery for reducing Javascript code, and Showdown for converting Markdown to HTML.

The total repository size is less than 1MB. 

Since the external libraries were packaged within the repository, there is no installation of dependencies. There is also no build step. 

I also added an in-built pagination feature, written in just over 50 lines of Javascript. 

The source code can be found in this [Github repository](https://github.com/edmondchensj/simplest-markdown-blog). 

## Comparing against traditional SSGs
<table>
  <thead>
    <tr>
      <th></th>
      <th>SSG</th>
      <th>Simple Markdown Blog</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Setup</td>
      <td>
        <li>Install and familiarise with backend runtime (Ruby, Go, Node)</li>
        <li>Install SSG library (Jekyll, Hugo, Gatsby)</li>
        <li>Specify and install dependencies</li>
        <li>Update HTML templates</li>
      </td>
      <td>
        <li>Update HTML templates
      </td>
    </tr>
    <tr>
      <td>Creation of new posts</td>
      <td>
        <li>Create a markdown file</li>
        <li>Add "frontmatter" such as date, title and tags to the file</li>
      </td>
      <td>
        <li>Create a JS file with markdown text as string</li>
        <li>Copy HTML file and replace one-line of code </li>
        <li>Add date, title, url and tags to <code>index.html</code> file</li>
      </td>
    </tr>
    <tr>
      <td>Build</td>
      <td>
        <li>Run command to build static site</li>
      </td>
      <td>
        <li>Nil</li>
      </td>
    </tr>
  </tbody>
</table>

## Deployment
Simply push the source code to Netlify or any static hosting service.

## Limitations
In traditional SSGs, HTML templates for blog posts can be reused. This means that any change to the template file, such as in the header or footer, would be automatically applied to all blog posts. 

Since we do not have a build step and all templates are copy and pasted as \`.html\` files, this means that any changes to header or footer styling has to be done manually. This can be tedious if you have many blog posts and want to update the designs all at once. 

Perhaps some kind of mini-build step could be integrated to facilitate the use of HTML templates. 

## Conclusion
This was a small project that aimed to replace Static Site Generators (SSGs) for building static websites and blogs. 

It retained the use of Markdown for writing blogposts, is lightweight, and does not require me to learn the ins-and-outs of a new ecosystem. 

The lack of a reusable base templates pose the main drawback and make future updates of the site design slightly trickier. 
`