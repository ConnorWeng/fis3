# nodejs����׼��
1. ���غͰ�װ    
[[window 32λ����]](http://gitlab.sdc.icbc/jianglu/fis3_install_dependencies/blob/master/node-v4.4.1-x86.msi "")
[[Linux 32λ����]](http://gitlab.sdc.icbc/jianglu/fis3_install_dependencies/blob/master/node-v4.4.3-linux-x86.tar.xz "")
[[linux64λ����]](http://gitlab.sdc.icbc/jianglu/fis3_install_dependencies/blob/master/node-v4.4.3-linux-x64.tar.xz "")
���غ�windows����exe�ļ���linux��```tar -xvf node-v4.x.x-linux-xx.tar.xz```�ļ����ɡ�
2. path����    
vi ~/.bashrc����~/.profile�ļ�������һ��:
```
export PATH=~/node-v4.4.3-linux-x86/bin:$PATH
```
������source����ʹ�伴����Ч��
```
source ~/.bashrc
```
3. �����Ƿ�װ�ɹ�    
����node -v��npm -v��������Ƿ���ʾ�汾

# fis3����׼��
1. ��[fis3���ص�ַ](http://gitlab.sdc.icbc/000831501/fis3 "")�У�ѡ��download zip������Ŀ���������ļ��У�����ѹ�������ѹ���Ŀ¼Ϊ/abc/fis3
2. ��[������node_modules����](http://gitlab.sdc.icbc/jianglu/fis3_install_dependencies/blob/master/node_modules.zip "")�����õ�/abc/fis3Ŀ¼�²���ѹ����ѹ���Ŀ¼�ṹΪ/abc/fis3/node modules
3. ��/abc/fis3Ŀ¼��,��װfis3�İ�װ������    
����```npm install```���а�װ������```npm link```����fis3Ŀ¼���ӵ�ȫ��ģʽ��

# ����Ŀ��ʹ��fis3
1. ����Ŀ��WebĿ¼��������fis-conf.js�ļ�������WebContentĿ¼���档�ڲ��Ի����У���MPVSΪ�����л�������Ŀ¼    
```
cd /washome/IBM/WebSphere/AppServer/profiles/AppSrv01/installedApps/MPVS100809S1Cell01/mpvsmobileEAR.ear/mpvsmobile.war/
```
�ڸ�Ŀ¼�������fis-conf.js�����ļ��ɲο�����,����Ŀ������������������project.files��������Ҫת�����ļ���   

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


2. ���з������-d֮��Ĳ���Ϊ��̬�ļ�����Ŀ¼������ͳһ�淶ΪhashĿ¼���ù��̻Ὣproject.files�����õ��ļ�����������js��css�ļ����������ݼ��㣬���md5�������ӵ��ļ����ϡ� ������������ͼƬ�ļ�Ҳ������ļ�������md5��������´��ļ�������û�з����仯����ֱ�Ӵӻ����ȡ����֮��������ݱ仯�����ļ����仯�����ӷ������������ء�
```
fis3 release -d hash
```
�������ԣ�ת��ǰ��css��������
```
<link rel="stylesheet" type="text/css" href="<ctp:out name='fullPath'/>css/common.css">
```
ת����    
```
<link rel="stylesheet" type="text/css" href="<ctp:out name='fullPath'/>/hash/css/common_dce64ee.css">
```

# ע��
1. �����ļ��滻�еı���    
������fis3�Ĺ����У��Ὣת��ǰ��html�ļ���jsp�ļ������ݡ�������ԭhtml�ļ������޸ģ��ٴ�����ʱ����ͬʱɾ�������ļ�������fis3Ĭ�ϻ�ӱ����ļ���ȡ��
