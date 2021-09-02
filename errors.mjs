import { readFile } from 'fs'

readFile(new URL('app.js', import.meta.url), 'utf-8', (err, data) => {
    if (err) {
        // do something
    } else {
        // run the code
    }
})

//Async Error just add a promises on the import
try {
    const result  = await readFile(new URL('./src/template.html', import.meta.url), 'utf-8')
} catch (e) {
    console.error(e)
    console.log('hello')
}
