# wispScene

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint

### Potential problems
 List down all possible issues that may come up. (Errors, compatibility issues, version mismatches)
```

#### Start Experience Button
Although the button wasn't required for test, autoplaying sound does not work by default on browsers now, without prior user interaction, so start button was the easiest solution.

- Start experience button uses html element overlay, not canvas part of aframe, might not be clickable in VR device (would have to implement aframe cursor), worked fine on Chrome web browser for AR experience.

#### Aframe script not in head
Console warning of aframe script tag not in head. Vue CLI deployment puts all generated js at bottom of page. Still works as expected but good to note.

#### Browser support
Unfortunately, the aframe docs for browser support are currently showing a 404 https://aframe.io/docs/1.3.0/introduction/vr-headsets-and-webvr-browsers.html
I would have typically checked the main site for official browser support for it's features.

Instead I looked into webl canvas on canIuse https://caniuse.com/webgl
Has great support for safari, firefox and chrome. Older iphones running Safari 5 won't be able to run this.

#### Compatibility issues
Currently this project uses  "aframe": "^1.3.0". Animations are done using the new animation inline attribute on a element. Previous versions use the <a-animation> tag, which is now deprecated. Can't be downgraded to a version which doesn't use the inline animation without refactoring.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
