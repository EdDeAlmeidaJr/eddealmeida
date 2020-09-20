#!/bin/bash

sass resources/styles/general.scss resources/styles/general.css

minify resources/styles/general.css > resources/styles/general-min.css

minify resources/js/bundle.js > resources/js/bundle-min.js

surge

