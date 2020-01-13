import React, {useRef, useEffect, useState} from 'react'
import ImputManager from './ImputManager'
import Player from './Player'
import World from './World'

const ReactRogue = ({width, height, tilesize}) => {
    const canvasRef = useRef()
    //const [player, setPlayer] = useState(new Player(1,2,tilesize))
    const [world, setWorld] = useState( new World(width, height, tilesize))
    let inputManager = new ImputManager() 
    const handleInput = (action,data) => {
        console.log( `handle input: ${JSON.stringify(data)} ${action}`)
        let newWorld = new World()
        Object.assign(newWorld, world)
        newWorld.movePlayer(data.x , data.y)
        setWorld(newWorld)
    }

    useEffect( () => {console.log('create map')

        let newWorld = new World()
        Object.assign(newWorld, world)
        newWorld.createCellularMap()
        newWorld.moveToSpace(world.player)
        setWorld(newWorld)
        // eslint-disable-next-line 
    }, [])
    useEffect( () => {
        console.log('binding input manager')
        inputManager.bindKeys()
        inputManager.subscribe(handleInput)
        return() => {
            inputManager.unBindKeys()
            inputManager.unsuscribe(handleInput)
        }
    })

    useEffect(() => {
        console.log('Dibujar el canvas')
        const ctx = canvasRef.current.getContext('2d')
        ctx.clearRect(0,0,width * tilesize,height * tilesize)
        world.draw(ctx);
        
    })
    return(
        <canvas 
            ref= {canvasRef}
            width={width * tilesize}
            height={height * tilesize}
            style={{border: '1px solid black'}}>
        </canvas>
)}

export default ReactRogue