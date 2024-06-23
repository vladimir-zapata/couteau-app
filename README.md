# Couteau App

A set of different tools.

## Table of Contents
- [Generating APK](#generating-apk)
  - [Configuring Android](#configuring-android)
  - [Signing the APK](#signing-the-apk)
- [Contributing](#contributing)
- [License](#license)


# Go to android directory
``` 
cd android
``` 

# Generate certificate
``` 
keytool -genkeypair -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
``` 

# Update ./android/app/build.gradle
``` 
android {
    ...
    signingConfigs {
        release {
            storeFile file('../my-release-key.keystore')
            storePassword 'store_password'
            keyAlias 'my-key-alias'
            keyPassword 'key_password'
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
```

# Go to ./android and run
``` 
./gradlew assembleRelease
```