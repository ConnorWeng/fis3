# nodejs环境准备
1. 下载和安装    
[[window 32位下载]](http://gitlab.sdc.icbc/jianglu/fis3_install_dependencies/blob/master/node-v4.4.1-x86.msi "")
[[Linux 32位下载]](http://gitlab.sdc.icbc/jianglu/fis3_install_dependencies/blob/master/node-v4.4.3-linux-x86.tar.xz "")
[[linux64位下载]](http://gitlab.sdc.icbc/jianglu/fis3_install_dependencies/blob/master/node-v4.4.3-linux-x64.tar.xz "")
下载后windows运行exe文件。linux下```tar -xvf node-v4.x.x-linux-xx.tar.xz```文件即可。
2. path配置    
vi ~/.bashrc或者~/.profile文件。加上一句:
```
export PATH=~/node-v4.4.3-linux-x86/bin:$PATH
```
再运行source命令使其即刻生效：
```
source ~/.bashrc
```
3. 测试是否安装成功    
运行node -v和npm -v命令测试是否显示版本

# fis3环境准备
1. 在[fis3下载地址](http://gitlab.sdc.icbc/000831501/fis3 "")中，选择download zip。将项目放置任意文件夹，并解压。假设解压后的目录为/abc/fis3
2. 将[依赖的node_modules下载](http://gitlab.sdc.icbc/jianglu/fis3_install_dependencies/blob/master/node_modules.zip "")，放置到/abc/fis3目录下并解压。解压后的目录结构为/abc/fis3/node modules
3. 在/abc/fis3目录下,安装fis3的安装和配置    
运行```npm install```进行安装，运行```npm link```将该fis3目录链接到全局模式。

# 在项目中使用fis3
1. 在项目的Web目录下面新增fis-conf.js文件，例如WebContent目录下面。在测试环境中，以MPVS为例，切换至如下目录    
```
cd /washome/IBM/WebSphere/AppServer/profiles/AppSrv01/installedApps/MPVS100809S1Cell01/mpvsmobileEAR.ear/mpvsmobile.war/
```
在该目录下面放置fis-conf.js，该文件可参考如下,各项目需根据自身情况，配置project.files，设置需要转化的文件。   

    ```
fis.match('*.{js,css,json,woff,ttf,svg}', {
  useHash: true
});
fis.match('::image', {
  useHash: true
});
fis.config.set('project.files', [
  'signin/mobile_homepage.jsp'
]);
fis.config.set('project.type', 'ctp');
```


2. 运行发布命令。-d之后的参数为静态文件发布目录，上研统一规范为hash目录。该过程会将project.files中配置的文件中所依赖的js和css文件，进行内容计算，获得md5戳，并加到文件名上。 对于所依赖的图片文件也会对其文件名增加md5戳。如果下次文件的内容没有发生变化，则直接从缓存读取。反之，如果内容变化，则文件名变化，将从服务器重新下载。
```
fis3 release -d hash
```
举例而言，转换前的css引用如下
```
<link rel="stylesheet" type="text/css" href="<ctp:out name='fullPath'/>css/common.css">
```
转换后    
```
<link rel="stylesheet" type="text/css" href="<ctp:out name='fullPath'/>/hash/css/common_dce64ee.css">
```

# 注意
1. 关于文件替换中的备份    
在运行fis3的过程中，会将转换前的html文件和jsp文件作备份。如果你的原html文件作了修改，再次运行时，请同时删掉备份文件，否则fis3默认会从备份文件获取。
