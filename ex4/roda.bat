set ANDROID_SDK_ROOT=C:\Users\ALUNO\AppData\Local\Android\Sdk
curl https://download.oracle.com/java/19/archive/jdk-19.0.2_windows-x64_bin.zip --output java19.zip
set PATH=C:\Program Files\WinRAR;%PATH%
winrar.exe x java19.zip
set JAVA_HOME=%cd%\jdk-19.0.2
curl --location --show-error -O --url "https://services.gradle.org/distributions/gradle-7.6-all.zip"
winrar.exe x gradle-7.6-all.zip
set PATH=%cd%\gradle-7.6\bin;%PATH%
cmd.exe