const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    describe('header', () => {
        describe('h1 Tag', () => {
            let heading;

            beforeEach(() => {
                heading = document.getElementsByTagName('h1')
            })

            test('Has text', () => {
                expect(heading).toBeTruthy();
            })

            // test('it has an id of "dark-mode', () => {
            //     expect(checkBox.id).toBe('dark-mode')
            // })

            // test('it has a label', () => {
            //     const label = document.querySelector('label[for="dark-mode"]')
            //     expect(label).toBeTruthy();
            //     expect(label.textContent).toContain("Dark Mode")
            // })
        })
    })
})
