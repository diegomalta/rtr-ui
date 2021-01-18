
const FormKeys = {
    company: "Company",
    account: "Account",
    
    // nameRecluter: "NameRecluter",
    // emailRecluter: "EmailRecluter",
    // phoneRecluter: "PhoneRecluter",
  
    fistnameCandidate: "FistnameCandidate",
    miCandidate: "MICandidate",
    lastnameCandidate: "LastNameCandidate",
    //emailCandidate: "EmailCandidate",
    // phoneCandidate: "PhoneCandidate",
  
    requirementNo: "RequirementNo",
    role: "Role",
    clientName: "ClientName",
    location: "Location",
    worktype: "Worktype",
  };

const email = {
subject: "RIGHT TO REPRESENT (RTR) Agreement with Statement of Nepotism & Deloitte Past Experience",
body: 
`‘RIGHT TO REPRESENT (RTR)’ Agreement

I, @FistnameCandidate @MICandidate @LastNameCandidate,  hereby authorize @Company (Supplier) to present/submit my resume/candidature to the supplier’s Client @Account / @ClientName  (Client) for the position,  Requirement No: @RequirementNo,  @Role at @Location with @Worktype work model.

I have not authorized and I will not  authorize any other Company/Agency (or) Recruiter to present/submit my resume/candidature on my behalf to the same position, directly or indirectly.

I also agree that I will not accept any contract or employment offer from any other Company / Agency (or) Recruiter for the same client and the position. In case, if my resume has been presented to the same client/same project by other Company/Agency (or) Recruiter (Submission Source), Technosoft Corporation’s submission/presentation of my resume/candidature will take precedence irrespective of the time and date of submission/presentation by the other Submission Source(s).`

}

export function getSubject() {
    return encodeURIComponent(email.subject);
}

export function getBody(info) {
    var { body } = email;

    for (let key in FormKeys) {
        console.log(`Value ${FormKeys[key]}, ${info[key]}`);
        body = body.replace(`@${FormKeys[key]}`, info[key] ? info[key] : "" );
    }
    //return body;
    return encodeURIComponent(body);    
}

