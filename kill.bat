@echo off
setlocal

set PORT=4723

echo Procurando processo usando a porta %PORT%...

:: Encontrar o PID associado à porta
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :%PORT%') do (
    set PID=%%a
)

if "%PID%"=="" (
    echo Nenhum processo encontrado usando a porta %PORT%.
) else (
    echo Finalizando processo com PID %PID%...
    taskkill /PID %PID% /F >nul 2>&1
    echo Processo finalizado com sucesso.
)

endlocal