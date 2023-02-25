#!/bin/sh
echo install dependencies
yarn install
echo run
yarn run dev --port 5173 --host 0.0.0.0