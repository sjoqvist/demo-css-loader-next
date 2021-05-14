This repository demonstrates how pull request webpack-contrib/css-loader#1295 affects the usage of `file-loader`.
Currently, the head of the `master` branch of `css-loader` works with `file-loader`, while the head of the `next` branch doesn't.

You'll need Docker. Build with
```sh
./build.sh
```
and run with
```
./run.sh
```

This commit represents the head of the `master` branch of `css-loader`.
Also, check the `next` branch.
