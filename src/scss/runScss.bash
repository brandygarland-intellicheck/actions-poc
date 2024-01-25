#!/bin/bash

echo "running sass..."
echo "all files with a .scss extension will be converted to css with the same name"

cd src
cd scss

yourfilenames=`ls ./*.scss`

cd ..
for eachfile in $yourfilenames
    do
        removefile=${eachfile%.scss}
        removeextension=${removefile##*/}

        sass ./scss/$removeextension.scss ../public/css/$removeextension.css


        echo $removeextension
    done

echo "complete!"