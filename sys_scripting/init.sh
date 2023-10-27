#!/bin/bash

clear

declare reset='\033[0;00m'

function debian_installation () {
    if [ ! -f /usr/bin/apache2 ]; then
        echo -e ''
        apt install apache2 2> /dev/null;
    fi
    if [ ! -f /usr/bin/mysql ]; then
        apt install mysql;
    fi
    return 0
}

# Superuser detection
if [ $(id -u) -eq 0 ]; then
    debian_installation
fi