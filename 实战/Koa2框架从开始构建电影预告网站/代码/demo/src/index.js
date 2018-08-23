/**
 * Created by hugo on 2018/8/23.
 */
/*
 * 入口文件
 * */

import {readFile, writeFileSync as wfs} from 'fs'
import {promisify} from 'util'
import {resolve as r} from 'path'

promisify(readFile)(r(__dirname, '../package.json'))
  .then(data => {
    data = JSON.parse(data)
    console.log("===:", data.name)

    wfs(r(__dirname, './name'), String(data.name), 'utf8')
  })

const readAsync = promisify(readFile)

async function init() {
  let data = await readAsync(r(__dirname, '../package.json'))
  data = JSON.parse(data)
  console.log("init console:" + data.name)
}

init()