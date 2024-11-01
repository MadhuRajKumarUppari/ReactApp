function Date()
{
    const currentDate = new Date().toLocaleDateString();
    return(
        <>
        <h5> Today Date :{currentDate}</h5>
        </>
    )
}
export default Date;