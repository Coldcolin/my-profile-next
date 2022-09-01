import Link from "next/link"

const productList = ({img, link}) => {
    return (
        <div className="p">
        <div className="p-browser">
            <div className='p-circle'></div>
            <div className='p-circle'></div>
            <div className='p-circle'></div>
        </div>
        <Link href={link} >
        <a target="_blank" rel="noreferrer">
            <img src={img} alt="" className="p-image"/>
        </a>
        </Link>
    </div>
    )
}

export default productList