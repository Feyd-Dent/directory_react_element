

const SiteContacts = ({ phoneInput, websiteInput, socialsInput, expanded }) => {
    
    if (expanded) {
        return (
            <div className="card-number maxi">
            <p><a href={phoneInput}>{phoneInput}</a></p>
            <p><a href={websiteInput}>{websiteInput}</a></p>
            <p><a href={socialsInput}>{socialsInput}</a></p>
            </div>
        );
    } else if (!expanded) {
        return (
            <div className="card-number mini">
            <p><a href={phoneInput}>{phoneInput}</a></p>
            </div>
        ) 
    }
  }

export default SiteContacts;