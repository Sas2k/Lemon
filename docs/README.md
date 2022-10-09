# Lemon 🍋 Website and Docs

Hello, here is the source for the website and docs of Lemon.

[ This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. ]

### Installation

```bash
#npm
$ npm install .

#yarn
$ yarn
```

### Local Development

``` bash
# yarn
$ yarn start

# npm start
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
#npm
$ npm run build

# yarn
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```bash
#yarn
$ USE_SSH=true yarn deploy

#npm: Linux
$ USE_SSH=true npm run deploy

#npm: Windows
> set USE_SSH=true&&npm run deploy
```

Not using SSH:

```bash
#yarn
$ GIT_USER=<Your GitHub username> yarn deploy

#npm: Linux
$ GIT_USER=<Your GitHub username> npm run deploy

#npm: Windows
> cmd /C 'set "GIT_USER=Sas2k" && npm run deploy'
```
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
