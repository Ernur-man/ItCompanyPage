import './modal.less'
export default function ModalWindow(active){
    return(
        <div className={active.active ? "message active" : "message"}>
            <p>Success!</p>
        </div>
    )
}
