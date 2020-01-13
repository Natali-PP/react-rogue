class ImputManager{
    observer=[]

    subscribe(fn){
        this.observer.push(fn)
    }

    unsuscribe(fn){
        this.observer = this.observer.filter(suscriber => suscriber !== fn)

    }

    broadcast(action, data){
        this.observer.forEach(suscriber => suscriber(action, data))
    }

    handleKeys = e => {
        e.preventDefault()
        switch(e.keyCode){
            case 37: // <-- flecha izquierda
                this.broadcast('move', {x:-1,y:0})
                break
            case 38: // flecha arriba
                this.broadcast('move', {x:0, y:-1})
                break
            case 39: // --> flecha derecha
                this.broadcast('move', {x:1, y:0})
                break
            case 40: // flecha abajo
                this.broadcast('move', {x:0, y:1})
                break
            default:
                break
        }
    }

    bindKeys(){
        document.addEventListener('keydown', this.handleKeys);

    }

    unBindKeys(){
        document.removeEventListener('keydown', this.handleKeys)
    }
}


export default ImputManager;
