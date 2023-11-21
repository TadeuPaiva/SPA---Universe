export class Router {
    routes = {}

    add(routeName, rota) {
        this.routes[routeName] = rota
    }

    router(event) {
        event = event || window.event

        event.preventDefault()

        this.handle()
    }



    handle() {

        const { pathname } = window.location
        const rota = this.routes[pathname] || this.routes[404]

        fetch(rota)
        .then(data => data.text())
        .then(page => {
            document.querySelector('#app').innerHTML = page
        })
    }
}