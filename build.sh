#!/bin/bash
git show -s --format='{"build": "%h", "date": "%cD", "author": "%an" }' > build.json