cd ..\eft
call npm run build:prod

cd ..\pams
del /Q /S dist\pams\browser\eft
xcopy ..\eft\dist\eft\browser\*.*  dist\pams\browser\eft\. /S
