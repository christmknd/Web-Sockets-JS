#!/bin/bash

## Build du docker-compose
docker-compose build --no-cache

## Lancer docker-compose
docker-compose up -d

## Démarrer le container 
docker-compose start
