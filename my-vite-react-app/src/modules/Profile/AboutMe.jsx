import { useEffect, useState } from "react"
import styles from "../../styles/AboutMe.module.css"

//images
import palomita_button from "../../img/palomita_button.png";
import x_button from "../../img/x_button.png";
import save_file_button from "../../img/save_file_button.png";
function AboutMe(){

    
    const [usuario,setUsuario] = useState(
        {
            "name": "Leo",
            "bio": "",
            "playing":["assasins","lol","league of legends","the lord of the rings"],
            "pending": [],
            "completed": []
        }
    )
    const [editar ,setEditar] = useState(
        {
            "bio":false,
            "playing":false,
            "pending":false,
            "completed":false
        }
    )
    

    function edit(e){
        const {name} = e.target;
       
        setEditar(prev=>({
            ...prev,
            [name]: !(prev[name])
        }))

        
    }

    
    function changeValue(e){
        const {name,value} = e.target;
        
        setUsuario(prev=>({
            ...prev,
            [name]:value
        }))
        
    }


    const pending_games = usuario.playing.map((game,game_index)=>{
        return(
            <li key={game_index} className={styles.game_item} name={game}>
                {game}
                {editar.playing &&
                <>
                    <img src={palomita_button} className={styles.img_icon} name="palomita" alt="palomita" onClick={icon_action} />
                    <img src={save_file_button} className={styles.img_icon} name="save_file" alt="save" onClick={icon_action}/>
                    <img src={x_button} className={styles.img_icon} name="x_button" alt="delete" onClick={icon_action}/>
                </>
                }
            </li>
        )
    })
   

    function icon_action(e){
        const parent = e.target.parentElement;
        const juego = parent.firstChild.textContent;
        const index_juego = usuario.playing.indexOf(juego);
        const {name} = e.target;
        switch(name){
            case "palomita":
                let juego_completado = usuario.playing.splice(index_juego,1)[0];
                usuario.completed.push(juego_completado);
                console.log("entro",name)
                console.log(usuario.completed)
                break
            case "save_file":
                let juego_pendiente = usuario.playing.splice(index_juego,1)[0];
                usuario.pending.push(juego_pendiente);
                console.log("entro")
                break
            case "x_button":
                let juego_borrado = usuario.playing.splice(index_juego,1)[0];
                console.log("entro")
                break
        }
        
    }
    
    return(
        <div className={styles.about_me}>
            <div >
                <span><h2>About me</h2></span>
                <textarea  id="" cols="30" rows="10"   name = "bio" onChange={changeValue}></textarea>
            </div>

            <div className={styles.playing_games}> 
                <span className={styles.playing_games_header} ><h2>Playing</h2><button  className={styles.edit_button} name = "playing"   onClick={edit} >Edit</button></span>
                <ul>
                    {editar.playing && <span><input placeholder={"add game"}></input><img className={styles.img_icon} src={palomita_button} name="palomita" alt="palomita" /></span> }
                    {pending_games}
                </ul>
            </div>

            <div className={styles.pending_games}>
                <span className={styles.pending_games_header}><h2>Pending games</h2><button className={styles.edit_button}  onClick={edit}>Edit</button></span>
                <ul></ul>
            </div>
            
            <div>
                <span className={styles.completed_games_header}><h2>Completed Games</h2><button className={styles.edit_button}  onClick={edit}>Edit</button></span>
                <ul></ul>
            </div>
        </div>
    )
}
export default AboutMe