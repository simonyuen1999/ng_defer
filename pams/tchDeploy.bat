cd ..\tch
call npm run build:prod

cd ..\pams
del /Q /S dist\pams\browser\tch
xcopy ..\tch\dist\tch\browser\*.*  dist\pams\browser\tch\. /S
