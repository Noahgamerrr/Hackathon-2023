function CompanyCard(props) {
    console.log(props.item.img)
    return (
        <div class="company-card" id='cCard'>
            <h1 class="company-pos">{props.item.position}</h1>
            <img src={"/assets/images/company-logos/" +props.item.img} class="company-logo" alt=""/>
            <h3>Desired skills:</h3>
            <div class="trophies">
                <img src="/assets/images/trophy.png" class="trophy" alt=""/>
                <img src="/assets/images/trophy.png" class="trophy" alt=""/>
                <img src="/assets/images/trophy.png" class="trophy" alt=""/>
                <img src="/assets/images/trophy.png" class="trophy" alt=""/>
            </div>
        </div>
    )
}

export default CompanyCard;