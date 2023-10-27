@echo off

if %username% NOT EQU Administrador (
    runas /user=%hostname%\Administrador 'cmd ./init.bat'
) else (
    winget install ApacheFriends.Xampp.8.2
)