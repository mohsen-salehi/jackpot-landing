function Brand({title, srcImage}) {
    return (
        <figure className="w-[160px] h-[160px] border rounded">
            <img src={srcImage} loading="lazy" className="object-cover w-full h-full" alt={title}/>
        </figure>
    );
}

export default Brand;