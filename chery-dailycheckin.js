#!name=New Bing for other browsers
#!desc=Unlock browser restrictions for new bing AI search.

[Header Rewrite]
^https:\/\/hybrid-sapp\.chery\.cn\/\/package-mine\/pages\/sign-in\/sign-in header-replace-regex User-Agent \w+\/[\d\.]+$ ""

[MITM]
hostname = %APPEND% www.bing.com