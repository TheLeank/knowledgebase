# What's this?

Well, it's just my own knowledgebase, since I used to store commands and tips in txt files or browser bookmarks... not anymore!

It's built with [Docusaurus 2](https://v2.docusaurus.io/), and it's so easy to use that even I've been able to use it.

## How to build the static site

docker run -it node /bin/bash

git clone https://github.com/TheLeank/knowledgebase.git

cd knowledgebase

yarn install

yarn build

Done! The static websitehas been generatedon the ./build folder.
