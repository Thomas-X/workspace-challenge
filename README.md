## Workspace 365
I had a list of new libraries I wanted to use for a while now, which were fun to experiment with in this challenge! I took the liberty to write some of my findings / conclusions down, so it explains some things from the codebase.
## Usage
Tested on node v14.9.0, npm 6.14.7 and yarn 1.22.5

With npm 
```
npm i && npm run run:install && npm start
```
With [yarn](https://classic.yarnpkg.com/en/) (faster)
```
yarn && yarn run:install && yarn start
```
### Time registration
| Date   | Time   |
|--------|--------|
| 22 oct | 3h 57m |
| 24 oct | 2h 18m |
| 25 oct | 3h 59m |
| Total  | 10h 14m|

### Quick note about redux and other 'flux'-like state containers
If you're a beginner to React (and it's ecosystem) I can not unrecommend redux enough, since it adds this complexity, jargon and layers on top of something as simple as `"Update a global object, and re-render the components that depend on that data"`. See the `state` sections for more info on how wonderful state-management in React can really be :).
## Backend
There's also a backend, under `lootshop-backend`, but this is just a quick-and-dirty backend written with NestJS and TS. I just used it for random data and actually using over-the-wire network requests via [react-query](https://react-query.tanstack.com/)
## Conclusions from some of the libraries
- Styling
    - I used [styled-components](https://styled-components.com/) for styling, but 
    when having to override something via a `style(s)` prop is really inconvenient and thus I recommend either using another 
    CSS-in-JS library like [linaria](https://github.com/callstack/linaria) combined with [polished](https://github.com/styled-components/polished). With those libs it's a lot easier to mix styles, while keeping the pros of CSS-in-JS [mergeStyles](https://github.com/microsoft/fluentui/blob/master/packages/merge-styles/README.md#motivation) is a good read for why CSS-in-JS is nice (coming from css/scss).
- Data fetching / state management
    - This one I was very excited with, this challenge uses a hybrid of [react-query](https://react-query.tanstack.com/) and [zustand](https://github.com/pmndrs/zustand), which really doesn't work that well when using derived values (like with a total and when calculating restrictions). 
    I recommend using [zustand](https://github.com/pmndrs/zustand) for both client- and server state management, this way you don't have to communicate in-between fetched entities from [react-query](https://react-query.tanstack.com/) and to [zustand](https://github.com/pmndrs/zustand). Another good alternative for [zustand](https://github.com/pmndrs/zustand) is [MST](https://mobx-state-tree.js.org/intro/philosophy) (mobx-state-tree), but that has a higher learning curve.
## Full list of interesting libraries
Be careful not to get [javascript fatigue](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4) while reading this :).

- Good sources:
	- https://osawards.com/react/
	- https://www.thoughtworks.com/radar

- Animations:
	- https://www.framer.com/motion/

- Util wrappers around web APIs & good hooks:
	- https://github.com/jaredpalmer/the-platform
	- https://github.com/alewin/useWorker
	- https://github.com/GoogleChromeLabs/react-adaptive-hooks
	- https://www.npmjs.com/package/use-clippy
	- https://www.npmjs.com/package/react-window-communication-hook
	- (not too useful tbh, but still can be good) https://www.npmjs.com/package/@rehooks/local-storage
        - https://www.npmjs.com/package/react-use-idb
	- https://www.npmjs.com/package/@rehooks/online-status
	- https://blog.bitsrc.io/11-useful-custom-react-hooks-for-your-next-app-c66307cf0f0c
	- https://bundlephobia.com/

- Form:
	- https://github.com/react-hook-form/react-hook-form
	- https://github.com/jquense/yup

- Documentation:
	- https://storybook.js.org/
	- https://github.com/doczjs/docz
	- https://github.com/microsoft/tsdoc
	- https://github.com/TypeStrong/typedoc

- Code splitting:
	- https://github.com/jamiebuilds/react-loadable
	- https://github.com/gregberge/loadable-components
	
- DX tooling:
	- https://github.com/infinitered/reactotron
	- ? Crash on use https://github.com/open-source-labs/reactime
	- ? https://panic.com/transmit/
	- ? https://www.git-tower.com/mac

- State:
	- https://github.com/ctrlplusb/easy-peasy
	- https://github.com/pmndrs/zustand
	- ? https://github.com/davidkpiano/xstate
	- ?? https://github.com/facebookexperimental/Recoil
	- ?? https://mobx-state-tree.js.org/intro/philosophy
	
- Network fetching / server state:
	- https://github.com/tannerlinsley/react-query
	
	
- Styling:
	- https://github.com/callstack/linaria
	- https://github.com/styled-components/styled-components
	- https://styled-system.com/ (maybe)
	
	- UI components:
		- https://github.com/microsoft/fluentui
	
- Testing:
	- Has good potential ! https://github.com/testing-library/react-testing-library
	- https://www.cypress.io/
	- https://github.com/facebook/jest
		- https://github.com/Raathigesh/majestic
		
	
- Structure:
	- SIMPLE architecture if possible
	
- Linting / formatting:
	- https://github.com/yannickcr/eslint-plugin-react
	- https://prettier.io/
	
- Optimization:
	- https://github.com/welldone-software/why-did-you-render
	
- Routing:
    - https://github.com/ReactTraining/react-router
