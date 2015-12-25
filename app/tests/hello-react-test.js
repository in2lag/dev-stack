import HelloReact from '../components/hello-react'
import React from 'react'

describe("Hello React", function() {
    it("should render properly", function() {
        var container = document.createElement('div'),
            componentElement

        React.render(<HelloReact name="React!" />, container)
        componentElement = container.getElementsByClassName('hello-react')[0]

        expect(componentElement.innerText).toBe('Hello React!')
    })
})
