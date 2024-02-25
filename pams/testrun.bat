call npm run build

mkdir dist\pams\browser\tch
mkdir dist\pams\browser\eft

xcopy ..\tch\dist\tch\browser\*.*  dist\pams\browser\tch\. /S
xcopy ..\eft\dist\eft\browser\*.*  dist\pams\browser\eft\. /S

cd dist\pams\browser
angular-http-server
