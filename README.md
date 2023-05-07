# node-stream-sample

example

```shell
% node main.js 10
highWaterMark:  10240
reader on data chunk:  <Buffer e4 bd 95 e3 81 af e5 a0 b4 e5 90 88 e5 90 8c e3 81 98 e3 81 8f e3 81 a9 e3 82 93 e3 81 aa e8 a9 95 e4 be a1 e5 85 b1 e3 81 a8 e3 81 97 e3 81 a6 e3 81 ... 10190 more bytes>
reader pause!
reader on data chunk:  <Buffer 90 9b e3 81 a8 e3 81 84 e3 81 86 e5 b0 bd e3 81 99 e3 81 82 e3 82 8a e6 af 94 e8 bc 83 e3 81 8c e3 81 97 e3 81 9f e4 ba 8b e3 81 9f e3 81 9f e3 81 94 ... 10190 more bytes>
reader pause!
reader on data chunk:  <Buffer 81 a8 e3 81 84 e3 81 a3 e3 81 9f e3 81 ae e3 81 af e3 81 a9 e3 82 93 e3 81 aa e3 81 ae e3 81 8b e3 81 a8 e7 97 85 e6 b0 97 e3 82 92 e7 ab 8b e3 81 a1 ... 10190 more bytes>
reader pause!
reader on data chunk:  <Buffer e7 ab 9f e4 bd 95 e3 81 ae e9 99 b0 e3 81 ab e5 af be e3 81 97 e3 81 a6 e3 80 81 e8 aa b0 e3 81 ab e3 81 8a e8 a9 b1 e5 9b b0 e3 82 89 e3 81 ae e3 81 ... 10190 more bytes>
reader pause!
reader on data chunk:  <Buffer e3 81 84 e3 82 8b e3 81 9f e3 81 84 e3 81 be e3 81 84 e3 80 82 e3 81 82 e3 82 8b e9 9c a7 e3 81 ab e7 9f a5 e3 82 89 e3 81 a6 e3 80 81 e3 81 aa e3 81 ... 10190 more bytes>
reader pause!
reader on data chunk:  <Buffer e5 ae b6 e3 81 ae e5 ad a6 e7 bf 92 e3 81 8c e8 80 83 e3 81 88 e3 80 82 0a 0a e3 81 93 e3 81 86 e5 a4 89 e3 81 aa e3 81 8b e3 81 a3 e3 81 8c e3 81 9f ... 10190 more bytes>
reader pause!
reader on data chunk:  <Buffer 81 ae e3 81 9f e3 82 81 e3 81 a7 e3 81 99 e3 81 8b e3 82 89 e3 80 81 e3 81 93 e3 82 8c e3 81 ab e3 81 af e5 87 ba e6 9d a5 e3 81 aa e3 81 84 e3 80 81 ... 8741 more bytes>
reader end!
reader pause!
writer finish!
drainCount: 6
streamingTime: 6.814ms
```

```shell
% node main.js 100
highWaterMark:  102400
reader on data chunk:  <Buffer e4 bd 95 e3 81 af e5 a0 b4 e5 90 88 e5 90 8c e3 81 98 e3 81 8f e3 81 a9 e3 82 93 e3 81 aa e8 a9 95 e4 be a1 e5 85 b1 e3 81 a8 e3 81 97 e3 81 a6 e3 81 ... 70181 more bytes>
reader end!
reader pause!
writer finish!
drainCount: 0
streamingTime: 3.897ms
```
