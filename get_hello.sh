#!/bin/bash
declare -a arr
index=0

while read line
do
  arr[$index]=$line
  index=$(($index+1)) 
done < "names.txt"

text=$1

for name in "${arr[@]}"
do
   pushd sounds/
     echo "$name"
     echo saving $text in $name
     say -o $name.aif -v $name $text
     ffmpeg -i $name.aif -f mp3 -acodec libmp3lame -ab 192000 -ar 44100 $name.mp3
     rm $name.aif
   popd
done
