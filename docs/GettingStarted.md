---
id: quick-start-getting-started
title: Getting Started
layout: docs
category: The Basics
permalink: docs/getting-started.html
next: tutorial
---

React Native에 오신 것을 환영합니다!
이번 게시글에서는 React Native를 여러분의 시스템에 설치하고 곧바로 실행 할 수 있도록 안내합니다.
만약 여러분이 이미 React Native를 설치해두셨다면, 이번 게시글을 건너뛰고 [튜토리얼]('/react-native/docs/tutorial.html')로 가셔도 됩니다.

이번 게시글은 여러분이 어떤 시스템을 사용하는지에 따라 약간 내용이 다르고, iOS/Android중 어떤 것을 사용하느냐에 따라서도 내용이 다르답니다.
iOS와 Android 모두 개발하는 것도 당연히 가능합니다! 여기서는 그냥 시작을 어떤 환경으로 할지 정하는 것 뿐입니다.

```
주의: iOS개발은 Xcode가 깔려있는 macOS(OS X)환경에서만 가능합니다.
```


<div class="toggler">
  <style>
    .toggler a {
      display: inline-block;
      padding: 10px 5px;
      margin: 2px;
      border: 1px solid #05A5D1;
      border-radius: 3px;
      text-decoration: none !important;
    }
    .display-os-mac .toggler .button-mac,
    .display-os-linux .toggler .button-linux,
    .display-os-windows .toggler .button-windows,
    .display-platform-ios .toggler .button-ios,
    .display-platform-android .toggler .button-android {
      background-color: #05A5D1;
      color: white;
    }
    block { display: none; }
    .display-platform-ios.display-os-mac .ios.mac,
    .display-platform-ios.display-os-linux .ios.linux,
    .display-platform-ios.display-os-windows .ios.windows,
    .display-platform-android.display-os-mac .android.mac,
    .display-platform-android.display-os-linux .android.linux,
    .display-platform-android.display-os-windows .android.windows {
      display: block;
    }
  </style>
  <span>Mobile OS:</span>
  <a href="javascript:void(0);" class="button-ios" onclick="display('platform', 'ios')">iOS</a>
  <a href="javascript:void(0);" class="button-android" onclick="display('platform', 'android')">Android</a>
  <span>Development OS:</span>
  <a href="javascript:void(0);" class="button-mac" onclick="display('os', 'mac')">macOS</a>
  <a href="javascript:void(0);" class="button-linux" onclick="display('os', 'linux')">Linux</a>
  <a href="javascript:void(0);" class="button-windows" onclick="display('os', 'windows')">Windows</a>
</div>

<block class="linux windows ios" />

## Unsupported

<div>안타깝게도, 애플 앱은 Mac OS(OS X)에서만 개발이 가능합니다. 우선<a href="" onclick="display('platform', 'android')">Android</a>과정을 따라가보는건 어떤가요?</div>

<center><img src="img/react-native-sorry-not-supported.png" width="150"></img></center>

<block class="mac ios" />

## 필요한 의존패키지들 설치하기

React Native를 개발하기 위해서
여러분은 node.js와 Watchman, React Native command line interface와 Xcode가 필요합니다.

<block class="mac android" />

## 필요한 의존패키지들 설치하기

React Native를 개발하기 위해서
여러분은 node.js와 Watchman, React Native command line interface와 Android Studio가 필요합니다.
<block class="windows linux android" />

## 필요한 의존패키지들 설치하기

React Native를 개발하기 위해서
여러분은 node.js와 Watchman, React Native command line interface와 Android Studio가 필요합니다.
<block class="mac ios android" />

### Node, Watchman, react-native-cli 설치하기

node와 Watchman을 [Homebrew](http://brew.sh/)를 통해 설치하는 것을 권장합니다.
터미널에서 아래와 같이 입력해 설치할 수 있답니다.

```
brew install node
brew install watchman
```

> [Watchman](https://facebook.github.io/watchman)은 facebook에서 파일 시스템의 변화를 감시하는 용도로 사용하는 툴입니다.
더 나은 퍼포먼스를 위해 사용을 강력히 추천합니다!

<block class="linux android" />

### Node 설치

다음 가이드:[installation instructions for your Linux distribution](https://nodejs.org/en/download/package-manager/)을 따라서 node를 4 이상의 버전으로 깔아주세요.

<block class='windows android' />

### Node 설치

Node.js 와 Python2을 [Chocolatey](https://chocolatey.org)를 통해서 설치하기를 권장합니다. Chocolatey는 윈도에서의 패키지 관리 서비스입니다.(macOS에서의 Homebrew처럼요!)
관리자 모드로 cmd를 실행하시고 다음 명령어를 입력해주세요:

```
choco install nodejs.install
choco install python2
```

> Node를 설치하기 위한 다른 방법으로는 node를 직접 다운받는 방법입니다. [Node.js 다운로드페이지](https://nodejs.org/en/download/)

<block class="mac ios android" />

### React Native CLI 설치하기

위에서 node와 함께 npm이 자동적으로 설치되었을거랍니다. 아래 명령어로 react-native-cli를 설치해주세요!

<block class="windows linux android" />

### React Native CLI 설치하기

위에서 node와 함께 npm이 자동적으로 설치되었을거랍니다. 아래 명령어로 react-native-cli를 설치해주세요!

<block class="mac ios android" />

```
npm install -g react-native-cli
```

> (번역주)-g 옵션은 시스템 전체에서 사용할 수 있도록 시스템 영역에 설치한다는 뜻입니다.

> 만약, 권한 문제로 설치에 실패하신다면 `sudo npm install -g react-native-cli`로 설치해보세요!

> 만약 `Cannot find module 'npmlog'`같은 에러를 만나셨다면, npm을 다음 명령어로 수동 설치해보세요.: `curl -0 -L http://npmjs.org/install.sh | sudo sh`.

<block class="mac ios" />

### Xcode 설치하기 (iOS개발환경)

Xcode를 설치하는 가장 쉬운 방법은 [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)에서 받는 방법입니다. 앱스토어에서 Xcode를 설치하면 iOS시뮬레이터와 iOS App빌드를 위한 여러 툴들이 자동으로 함께 설치됩니다.

<block class="mac linux windows android" />

### Android Studio 설치하기 (안드로이드 개발환경)

만약 여러분이 안드로이드를 개발하는 것이 처음이라면, 개발환경을 갖추는 것은 약간 까다로울 수 있습니다.
이미 안드로이드 개발을 하고있던 환경이라면, 설정을 거의 건드리지 않아도 React Native로 개발을 시작하실 수 있습니다.
둘 중 어떻든, 아래 과정을 확인해보세요.

#### 1. Android Studio 받고 설치하기.

[Android Studio](https://developer.android.com/studio/install.html)는 여러분의 React Native앱을 실행시킬 Android SDK와 AVD(안드로이드 VM)를 제공해줍니다.

<block class="mac android" />

> Android Studio는 [Java Development Kit (JDK)](https://www.java.com/en/download/mac_download.jsp) version 1.8 이상을 필요로 합니다. 터미널에서 `javac -version` 명령어로 몇 버전의 JDK가 깔려있는지 확인해보세요!

<block class="mac windows android" />

#### 2. AVD, HAXM 설치하기

Android Studio 설치를 시작할 때 `custom`옵션으로 설치를 진행해 주세요.
다음 문항들이 다 체크되어있는지 꼭 확인해보세요:

- `Android SDK`
- `Android SDK Platform`
- `Performance (Intel ® HAXM)`
- `Android Virtual Device`

다 체크되어있다면, "Next"를 눌러 설치를 진행해 주세요.

> (역자주) HAXM이 없어도 여전히 사용은 가능합니다. 그러나 안드로이드 가상머신의 성능이 저하될 수 있고, 이 옵션은 사용하시는 시스템에 따라 사용가능 유무가 달라지므로 크게 신경쓰지 않으셔도 됩니다.

> 만약 Android Studio를 이미 설치하셨더라도, Android Studio 재설치 없이 [HAXM 설치](https://software.intel.com/en-us/android/articles/installation-instructions-for-intel-hardware-accelerated-execution-manager-windows)를 하실 수 있습니다.

<block class="linux android" />

#### 2. AVD설치하고 VM 가속 세팅하기

Android Studio 설치를 시작할 때 `custom`옵션으로 설치를 진행해 주세요.
다음 문항들이 다 체크되어있는지 꼭 확인해보세요:

- `Android SDK`
- `Android SDK Platform`
- `Android Virtual Device`

다 체크되어있다면, "Next"를 눌러 설치를 진행해 주세요.

설치가 끝난 후, [configure VM acceleration](https://developer.android.com/studio/run/emulator-acceleration.html#vm-linux) 가이드를 따라 설정을 진행해주세요.

<block class="mac linux windows android" />

#### 3. Android 6.0 (마시멜로) SDK 설치하기

안드로이드 스튜디오에서는 기본적으로 최신 버전의 Android SDK를 설치해줍니다. 하지만 React Native(0.37)에서는 안드로이드6.0(마시멜로) SDK`(역자주)정확히는 v23.1`를 사용합니다. 이 SDK는 "Welcome to Android Studio" 화면에서 SDK Manager를 실행하고, Configure탭에서 설치하실 수 있습니다.

> 또다른 방법으로는, 안드로이드 스튜디오의 "Preferences" 메뉴 아래 **Appearance & Behavior** → **System Settings** → **Android SDK** 으로 들어갈 수 있습니다.

SDK Manager에서 "SDK Platforms"을 누른 후, "Show Package Details"를 눌러보세요. `Android 6.0 (Marshmallow)`를 찾으신 후, 아래 목록들이 모두 체크되어있는지 확인해 보세요:

- `Google APIs`
- `Intel x86 Atom System Image`
- `Intel x86 Atom_64 System Image`
- `Google APIs Intel x86 Atom_64 System Image`

다 체크되어있다면, "SDK Tools"탭을 눌러보세요. "Android SDK Build Tools"를 펼쳐보시고, `Android SDK Build-Tools 23.0.1`가 깔려 있는지(체크되어있는지) 확인해 보세요.

마지막으로, Apply버튼을 눌러 SDK와 빌드 도구를 설치해주세요.

<block class="mac windows linux android" />

#### 4. ANDROID_HOME 환경변수 설정하기

React Native command-line interface는 `ANDROID_HOME` 환경변수를 필요로 합니다.

<block class="mac android" />

아래 코드들을 `~/.bashrc` (혹은 이와 같은 것들)의 마지막에 넣어주세요.

```
export ANDROID_HOME=~/Library/Android/sdk
export PATH=${PATH}:${ANDROID_HOME}/tools
export PATH=${PATH}:${ANDROID_HOME}/platform-tools
```

> `ANDROID_HOME`이 저 위치가 맞는지 꼭! 확인해주세요. 만약, Homebrew를 통해서 Android SDK를 설치하셨다면 아마도 `/usr/local/opt/android-sdk`가 ANDROID_HOME이 될겁니다.

등록한 환경변수는 터미널을 재실행 한 이후에 적용됩니다.

<block class="linux android" />

아래 코드들을 `~/.bashrc` (혹은 이와 같은 것들)의 마지막에 넣어주세요.

```
export ANDROID_HOME=~/Android/Sdk
export PATH=${PATH}:${ANDROID_HOME}/tools
export PATH=${PATH}:${ANDROID_HOME}/platform-tools
```

> `ANDROID_HOME`이 저 위치가 맞는지 꼭! 확인해주세요.

등록한 환경변수는 터미널을 재실행 한 이후에 적용됩니다.

<block class="windows android" />

아래 방향으로 따라가 보세요. **Control Panel** → **System and Security** → **System** → **Change settings** →
**Advanced System Settings** → **Environment variables** → **New**

여기에서 ANDROID_HOME 환경변수를 등록해 주세요.

![env variable](img/react-native-android-sdk-environment-variable-windows.png)

등록한 환경변수는 CMD를 재실행한 이후에 적용됩니다.

<block class="linux windows android" />

> `ANDROID_HOME`이 저 위치가 맞는지 꼭! 확인해주세요.

<block class="linux android" />

### Watchman 설치하기 (옵션)

[Watchman installation guide](https://facebook.github.io/watchman/docs/install.html#build-install)를 따라서 소스를 받고 컴파일해 설치를 진행해주세요.

> [Watchman](https://facebook.github.io/watchman)은 facebook에서 파일 시스템의 변화를 감시하는 용도로 사용하는 툴입니다.
더 나은 퍼포먼스를 위해 사용을 추천하지만, 설치가 까다롭다면 넘겨도 괜찮습니다.

<block class="mac windows linux android" />

## 안드로이드 가상 머신 시작하기

![Android Studio AVD Manager](img/react-native-tools-avd.png)

안드로이드 스튜디오에서 "AVD Manager"를 열어보면 지금 시스템에 깔려있는 이용가능한 안드로이드 VM의 목록이 나타납니다.
아래 명령어를 터미널에서 입력해도 볼 수 있어요.

```
android avd
```

"AVD Manager"에 들어가신 후 AVD를 선택하고 "Start..."를 클릭하시면 안드로이드 VM이 실행됩니다.

> 보통의 경우 안드로이드 스튜디오 설치 중 AVD도 설치되지만, 안드로이드 스튜디오 설치 중 AVD가 설치되지 않는 경우는 흔한 경우랍니다. 다음 가이드[Android Studio User Guide](https://developer.android.com/studio/run/managing-avds.html)를 따라서 새로운 AVD를 수동으로 만드실 수도 있습니다.

<block class="mac ios android" />

## React Native 설치 테스트하기

<block class="mac ios" />

React Native command line interface를 이용해 새로운 React Native 프로젝트를 시작해볼게요.
"AwesomeProject"라는 멋진 이름을 가진 프로젝트로요 :)
다음 명령어들을 따라치면 프로젝트가 생기고 가상 iOS머신에서 우리의 프로젝트가 곧장 실행될거에요!

```
react-native init AwesomeProject
cd AwesomeProject
react-native run-ios
```

조금만 기다리면 우리의 AwesomeProject가 실행된 모습을 보실 수 있을거에요.

`react-native run-ios`명령어는 우리의 앱을 실행하는 방법 중 하나일 뿐이랍니다. Xcode에서 실행하셔도 되고, [Nuclide](https://nuclide.io/)를 통해 실행하셔도 됩니다.

<block class="mac android" />

React Native command line interface를 이용해 새로운 React Native 프로젝트를 시작해볼게요.
"AwesomeProject"라는 멋진 이름을 가진 프로젝트로요 :)
다음 명령어들을 따라치면 프로젝트가 생기고 안드로이드 VM에서 우리의 프로젝트가 곧장 실행될거에요!

```
react-native init AwesomeProject
cd AwesomeProject
react-native run-android
```

만약 모든 환경이 제대로 설정되었다면, 안드로이드 VM하나가 실행되고 우리 앱이 안드로이드에 뜰거랍니다.

`react-native run-android`명령어는 우리 앱을 실행하는 방법 중 하나일 뿐이랍니다. Android Studio에서 실행하셔도 되고, [Nuclide](https://nuclide.io/)를 이용하셔도 됩니다.

<block class="mac ios android" />

### 앱 수정해보기

만약 위에서 성공적으로 앱이 실행되었다면, 약간 수정을 해봅시다!

<block class="mac ios" />

- `index.ios.js` 파일을 열고 몇몇 줄을 수정해 보세요.
- `Command⌘ + R`을 눌러서 iOS Simulator를 다시 로딩해 어떤 변화가 있는지 확인해보세요.

<block class="mac android" />

- `index.android.js` 파일을 열고 몇몇 줄을 수정해 보세요.
- `R`키를 두번 누르거나 `Reload`를 개발자메뉴에서 눌러 어떤 변화가 있는지 확인해보세요.

<block class="mac ios android" />

### 이게 끝이에요!

축하합니다! 여러분은 성공적으로 React Native앱을 실행하고 수정까지 해 보셨어요.

<center><img src="img/react-native-congratulations.png" width="150"></img></center>

<block class="windows android" />

## React Native 설치 테스트하기

React Native command line interface를 이용해 새로운 React Native 프로젝트를 시작해볼게요.
"AwesomeProject"라는 멋진 이름을 가진 프로젝트로요 :)
다음 명령어들을 따라치면 프로젝트가 생기고 Android VM에서 우리의 프로젝트가 곧장 실행될거에요!

```
react-native init AwesomeProject
cd AwesomeProject
react-native start
```

새 CMD 창을 열고 프로젝트 폴더(AwesomeProject)안에 들어간 후 다음 명령어로 앱을 실행해 보세요! 만약 아무 문제가 없다면, 새로운 AVD가 뜨고 우리의 앱이 실행될거에요.

```
react-native run-android
```

<block class="linux android" />

## React Native 설치 테스트하기

React Native command line interface를 이용해 새로운 React Native 프로젝트를 시작해볼게요.
"AwesomeProject"라는 멋진 이름을 가진 프로젝트로요 :)
다음 명령어들을 따라치면 프로젝트가 생기고 Android VM에서 우리의 프로젝트가 곧장 실행될거에요!

```
react-native init AwesomeProject
cd AwesomeProject
react-native run-android
```

<block class="windows linux android" />

새 CMD 창을 열고 프로젝트 폴더(AwesomeProject)안에 들어간 후 다음 명령어로 앱을 실행해 보세요! 만약 아무 문제가 없다면, 새로운 AVD가 뜨고 우리의 앱이 실행될거에요.

<block class="windows android" />

> 만약 `ERROR  Watcher took too long to load`라는 에러가 뜬다면, Timeout시간을 다음 [가이드](https://github.com/facebook/react-native/blob/5fa33f3d07f8595a188f6fe04d6168a6ede1e721/packager/react-packager/src/DependencyResolver/FileWatcher/index.js#L16)를 따라 수정해주세요. (`node_modules/react-native/`폴더 안).

<block class="windows linux android" />

### 앱 수정해보기

만약 위에서 성공적으로 앱이 실행되었다면, 약간 수정을 해봅시다!

- `index.android.js` 파일을 열고 몇몇 줄을 수정해 보세요.
- `R`키를 두번 누르거나 `Reload`를 개발자메뉴에서 눌러 어떤 변화가 있는지 확인해보세요.

### 이게 끝이에요!

축하합니다! 여러분은 성공적으로 React Native앱을 실행하고 수정까지 해 보셨어요.

<center><img src="img/react-native-congratulations.png" width="150"></img></center>

<block class="mac ios" />

## 이젠 뭘해야할까요?

- 만약 이미 존재하는 앱에 React Native를 적용하고 싶으시다면, [Integration guide](docs/integration-with-existing-apps.html) 문서를 확인해보세요.

- 만약 위 튜토리얼이 제대로 실행되지 않았다면, [Troubleshooting](docs/troubleshooting.html#content) 문서를 확인해 보세요.

- 만약 React Native에 대해 좀 더 알고싶으시다면, [Tutorial](docs/tutorial.html)문서를 확인해보세요.

<block class="windows linux mac android" />

## 이젠 뭘해야할까요?

- 만약 이미 존재하는 앱에 React Native를 적용하고 싶으시다면, [Integration guide](docs/integration-with-existing-apps.html) 문서를 확인해보세요.

- 만약 위 튜토리얼이 제대로 실행되지 않았다면, [Troubleshooting](docs/troubleshooting.html#content) 문서를 확인해 보세요.

- 만약 React Native에 대해 좀 더 알고싶으시다면, [Tutorial](docs/tutorial.html)문서를 확인해보세요.

<script>
// Convert <div>...<span><block /></span>...</div>
// Into <div>...<block />...</div>
var blocks = document.getElementsByTagName('block');
for (var i = 0; i < blocks.length; ++i) {
  var block = blocks[i];
  var span = blocks[i].parentNode;
  var container = span.parentNode;
  container.insertBefore(block, span);
  container.removeChild(span);
}
// Convert <div>...<block />content<block />...</div>
// Into <div>...<block>content</block><block />...</div>
blocks = document.getElementsByTagName('block');
for (var i = 0; i < blocks.length; ++i) {
  var block = blocks[i];
  while (block.nextSibling && block.nextSibling.tagName !== 'BLOCK') {
    block.appendChild(block.nextSibling);
  }
}
function display(type, value) {
  var container = document.getElementsByTagName('block')[0].parentNode;
  container.className = 'display-' + type + '-' + value + ' ' +
    container.className.replace(RegExp('display-' + type + '-[a-z]+ ?'), '');
}

// If we are coming to the page with a hash in it (i.e. from a search, for example), try to get
// us as close as possible to the correct platform and dev os using the hashtag and block walk up.
var foundHash = false;
if (window.location.hash !== '' && window.location.hash !== 'content') { // content is default
  var hashLinks = document.querySelectorAll('a.hash-link');
  for (var i = 0; i < hashLinks.length && !foundHash; ++i) {
    if (hashLinks[i].hash === window.location.hash) {
      var parent = hashLinks[i].parentElement;
      while (parent) {
        if (parent.tagName === 'BLOCK') {
          var devOS = null;
          var targetPlatform = null;
          // Could be more than one target os and dev platform, but just choose some sort of order
          // of priority here.

          // Dev OS
          if (parent.className.indexOf('mac') > -1) {
            devOS = 'mac';
          } else if (parent.className.indexOf('linux') > -1) {
            devOS = 'linux';
          } else if (parent.className.indexOf('windows') > -1) {
            devOS = 'windows';
          } else {
            break; // assume we don't have anything.
          }

          // Target Platform
          if (parent.className.indexOf('ios') > -1) {
            targetPlatform = 'ios';
          } else if (parent.className.indexOf('android') > -1) {
            targetPlatform = 'android';
          } else {
            break; // assume we don't have anything.
          }
          // We would have broken out if both targetPlatform and devOS hadn't been filled.
          display('os', devOS);
          display('platform', targetPlatform);      
          foundHash = true;
          break;
        }
        parent = parent.parentElement;
      }
    }
  }
}
// Do the default if there is no matching hash
if (!foundHash) {
  var isMac = navigator.platform === 'MacIntel';
  var isWindows = navigator.platform === 'Win32';
  display('os', isMac ? 'mac' : (isWindows ? 'windows' : 'linux'));
  display('platform', isMac ? 'ios' : 'android');
}
</script>
