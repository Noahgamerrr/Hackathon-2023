import skillsDict from "../data/skills.json"

function CompanyCard(props) {
    let skillsImgs = props.item.skills.map(skill => {
        return <img src={"/assets/images/skills/" +skillsDict[skill]} class="trophy" alt={skill}/>
    });

    return (
        <div class="company-card" id='cCard'>
            <h1 class="company-pos">{props.item.position}</h1>
            <img src={"/assets/images/company-logos/" +props.item.img} class="company-logo" alt=""/>
            <h3>Description:</h3>
            <div class="desc">
                {props.item.description}
            </div>
            <div class="desired-div">
                <h3>Desired skills:</h3>
                <div class="trophies">
                    {skillsImgs}
                </div>
            </div>
            <div id='description space'>
            </div>
        </div>
    )
}

export default CompanyCard;