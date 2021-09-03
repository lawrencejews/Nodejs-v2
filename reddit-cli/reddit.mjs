#! /usr/bin/env node
import fetch from 'node-fetch'
import open from 'open'
import yargs from 'yargs'

const { argv } = yargs(process.argv)

const res = await fetch('http://reddit.com/.json')
const data = await res.json()
const children = data.data.children

const randonPost = children[Math.floor(Math.random() * data.data.children.length)]
const link = `https://reddit.com${randonPost.data.permalink}`

if (argv.print) {
    console.log(`
    title: ${randonPost.data.title}
    link: ${link}
    `)
} else {
    open(link)
}

console.log(data)