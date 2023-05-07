import { createReadStream, createWriteStream } from "fs";

/** highWaterMarkの値 */
const HIGH_WATER_MARK = parseInt(process.argv[2], 10) * 1024;

console.log("highWaterMark: ", HIGH_WATER_MARK)

/** drainイベントの回数保持 */
let drainCount = 0;

const reader = createReadStream('./input.txt', {highWaterMark: HIGH_WATER_MARK});
const writer = createWriteStream('./output.txt', {highWaterMark: HIGH_WATER_MARK});

console.time('stream1'); // 計測開始

/** 読み込みストリームのデータ取得イベント */
reader.on("data", (chunk) => {
  console.log("reader on data chunk: ", chunk);
});

/** 読み込みストリームの一時停止イベント */
reader.on("pause", () => {
  console.log("reader pause!");
});

/** 読み込みストリームのデータ取得完了イベント */
reader.on("end", () => {
  console.log("reader end!");
});

/** 書き込みストリームにデータを流す */
reader.pipe(writer);

/** 書き込みストリームの drain イベント */
writer.on('drain', () => {
  drainCount++;
});

/** 書き込みストリームの完了イベント */
writer.on('finish', () => {
  console.log('drainCount: ' + drainCount);
  console.timeEnd('stream1'); // 計測終了
});