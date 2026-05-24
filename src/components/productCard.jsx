
export default function ProductCard(props){

    console.log(props)

    return(
        <div className="bg-[#5db099] w-60 h-[330.5px]">
            <img src={props.image} className=""/>
            <h1 className="">{props.name}</h1>
            <p className="">Price: {props.price}</p>
        </div>
    )

}