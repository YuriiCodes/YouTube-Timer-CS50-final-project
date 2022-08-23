
# YouTube Timer
#### Video Demo:  <https://youtu.be/URnkuuB3LAA>
#### Description:
YouTubeTimer is a Chrome extension that allows you to see the remaining time of the video. To activate it, simply open any YouTube video and reload the page.
##### Tech stack:
YouTube Timer is a chrome extension, therefore main programming language is JavaScript. I've also used HTML and CSS to create and style some welcome info and pop-up pages. To avoid creating all the design on my own, I've used Tailwind.css css framework, which really saved quite a lot of my time. And last but not least, I wouldn't be able to create this project without using Chrome API.
##### File structure:
Now, let me explain the file structure. _Manifest.json_ is a file that shows chrome what permissions does my extension need. I've also used Tailwind.css in this project, therefore _tailwind.config.js_ is a config file for tailwind, _package.json_ and _package-lock.json_ are files that show NPM dependencies (this extension only needs Tailwind). But no worries, there's no need to compile it, I've already generated all the needed CSS styles. All the source code lies in _src_ directory. _Src/html/onboarding.html_ is a html page that shows when user downloads the extension for the first time. _Popup.html_ is html page that shows when user clicks on installed extension icon. Then, _src/images_ is a folder that contains all the images needed for the html pages and all the logo versions. _Scripts_ folder is a folder with all required JS scripts. _src/scripts/background.js_ is a JS script that Chrome runs in the background. This script opens up onboarding page when first installed, and executes main content script when the page is reloaded. _Src/scripts/Content.js_ is a main script that adds timer to the end of YouTube videos. Last but not least, _src/styles_ is just a folder for CSS styles. Enjoy!
##### How I came up with this idea?
Watching lectures is sometimes boring. And if you are learning something quire boring, the lesser you have to watch the happier you become, therefore I often caught myself calculating time to the end of the lecture. My friends did the same thing, but calculating time is even more boring activity. So that's when I came up with the idea of YouTube Timer chrome extension.
##### How to download:
To install it, just download the extension as a .zip file, unzip it, open chrome extensions page, click load unpacked and select the unzipped folder.
##### Images demonstrating the project:
![Before](https://user-images.githubusercontent.com/96592769/186196170-406b090f-e956-49d5-bc82-687ec7b70ea9.png)
![After](https://user-images.githubusercontent.com/96592769/186196211-606b0e0a-8ebb-4458-9c93-40d0bb5ff702.png)
