const React = require('react')
const ReactDOMserver = require('react-dom/server')

function renderComponent(component, props) {
    const comp = React.createElement(component, {
        ...props,
        ...this.locals
    })
    const html = ReactDOMserver.renderToStaticMarkup(comp)

    this.send(`<!DOCTYPE html>\n${html}`)
}

function ssr(req, res, next) {
    res.render = renderComponent
    next()
}

module.exports = ssr