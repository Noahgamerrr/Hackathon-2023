function CompanyCard(props) {
    return (
        <div class="company-card" id='cCard'>
            <h1 class="company-name">Company Name</h1>
            <img src="/logo512.png" class="company-logo" alt=""/>
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