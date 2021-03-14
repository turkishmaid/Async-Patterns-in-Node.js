#!/bin/bash

##
#   call miniserv "in parallel" to study execution order
#
##

curl localhost:3001 &
curl localhost:3001 &
curl localhost:3001 &
curl localhost:3001 &
