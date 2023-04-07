import '../styles/Resume.css';

export default function Resume({ info }) {
    return (
        <div className="Resume">
            <Name name={info.name} />
            <Contact contact={info.contact} />
            <Education education={info.education} />
            <Summary summary={info.summary} />
            <Experience experience={info.experience} />
        </div>
    );
}

function Name({ name }) {
    return (
        <div className="name">
            <h1>{name}</h1>
        </div>
    );
}

function Contact({ contact }) {
    return (
        <div className="contact">
            <div className="contact-header">
                <h2>Contact</h2>
            </div>
            <div className="contact-body">
                <div>
                    <h3>Phone</h3>
                    <p>{contact.phone}</p>
                </div>
                <div>
                    <h3>Email</h3>
                    <p>{contact.email}</p>
                </div>
                <div>
                    <h3>Address</h3>
                    <p>{contact.address}</p>
                </div>
            </div>
        </div>
    );
}

function Education({ education }) {
    return (
        <div className="education">
            <h2>Education</h2>
            <div className="education-info">
                <h3>{education.school}</h3>
                <p>{education.degree}</p>
                <p>{education.location}</p>
                <p>{education.graduation}</p>
            </div>
        </div>
    )
}

function Summary({ summary }) {
    return (
        <div className="summary">
        <h3>Summary</h3>
        <p>{summary}</p>
        </div>
    );
}

function Experience({ experience }) {
    return (
        <div className='experience'>
            <h2>Experience</h2>
            {experience.map((job, jobIdx) => {
                return (
                    <div key={jobIdx}>
                        <p>{job.position}</p>
                        <p>{job.start}</p>
                        <p>{job.end}</p>
                        <p>{job.company}</p>
                        <p>{job.location}</p>
                        <ul>
                            {job.description.map(descriptionPoint => {
                                return <li>{descriptionPoint}</li>;
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    );
}