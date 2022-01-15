# React Native with Firebase Study
Integration between firebase and React Native

#  Installation

1. Install ExpoCLI: ``` $ npm i -g expo-cli ```
1. Install yarn: ``` $ brew install yarn ```
1. Install react native project create: ``` $ expo init app ``` > blank (typescript) template
1. Install dependencies: ``` $ cd app && yarn install ```
1. Running: ``` $ npm start ```
1. IF NEEDED: ``` $ expo upgrade ```
1. IF STUCKED IN ANY ERROR:  ``` $ expo doctor ```

# Creating the Emulators

1. Create a Nexus 5X with google play services
1. Create a Pixel 3a with google play services

# Running the app

 1. Run: ``` $ yarn run start ``` or ``` $ yarn start ```
 1. Press "d" to open dev tools or enable auto dev tools by clicking: shift+d
 1. **INSTALLING EXPO_APP**:
        1. For the **fisrt time** Click on: "Run on Android device/emulator" to install ExpoApp on it
            1. wait it to finish the javascript build
            1. on the first time it spend more time because it is installing the ExpoApp
            1. close the emulator that already installed ExpoApp & click again on the command to install on the another
1. **RUNNING APP ON EXPO_APP**:
    1. Open/Start the Device/Emulator
    1. ``` $ npm start ``` 
        1. **CORRECT is to open developer tools**: ``` d ```
        1. type the *choosen emulator*: ``` a=android ; i=ios ; w=web ```

# Devices on ExpoDevTools
![ExpoDevTools](./ExpoDevices.png)

# Dependencies
![Dependencies](./Dependencies.png)

# React Expo Node

expo-cli supports following Node.js versions:
* >=12.13.0 <13.0.0 (Maintenance LTS)
* >=14.0.0 <15.0.0 (Active LTS)
* >=15.0.0 <17.0.0 (Current Release)


# Windows Installation

1. Install Chocolate (need to open power shell as admin): ``` Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1')) ```
2. Install dependencies: ``` choco install -y nodejs.install openjdk8 ```
3. Download android studio & download the SDK Platforms (latest & version Q (10)) & install SDK Tools (ADM or Intel)
4. Setup environment variables: 
   1. Add new variable: ANDROID_HOME = C:\Users\user\AppData\Local\Android\Sdk
   2. Add to the path: C:\Users\user\AppData\Local\Android\Sdk\platform-tools
5. Windows Terminal (download from Microsoft Store) allows to open any Windows bash type (git bash, powershell & prompt)
6. Change windows terminal (on settings) to git bash as default bash
7. On windows terminal (using git bash): ``` npm i -g expo-cli ```
   1. IF NETWORK ERROR: ``` npm config set registry http://registry.npmjs.org/ ``` && ```  npm config set strict-ssl false ``` && restart windows
8. Sample project test init: ``` expo init ```

# Expo Cloud

1. Register (sign up): ``` expo register ```
2. Login (sign in): ``` expo login ```
3. Check login: ``` expo whoami ``` 

# React Native Icons

1. Package: react-native-vector-icons (https://oblador.github.io/react-native-vector-icons/)
2. 