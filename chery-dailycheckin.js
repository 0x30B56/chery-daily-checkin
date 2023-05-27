#!name=New Bing for other browsers
#!desc=Unlock browser restrictions for new bing AI search.

[Header Rewrite]
^https:\/\/hybrid-sapp\.chery\.cn\/\/package-mine\/pages\/sign-in\/sign-in header-replace-regex User-Agent \w+\/[\d\.]+$ "AppleWebKit/537.36 Chrome/110.0 Safari/537.36 Edg/110.0"

[MITM]
hostname = %APPEND% www.bing.com