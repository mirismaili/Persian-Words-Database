#!/usr/bin/env -S node
import { readFile, writeFile } from 'node:fs/promises'

/**
 * Created on 1400/11/15 (2022/2/4).
 * @author {@link https://mirismaili.github.io S. Mahdi Mir-Ismaili}
 */

const words = (await readFile('./distinct_words.txt', 'utf-8')).split('\n')

words.sort((a, b) => a.localeCompare(b, 'fa-IR'))

await writeFile('./distinct_words.txt', words.join('\n'))
