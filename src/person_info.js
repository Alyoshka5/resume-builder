const name = 'John Doe';

const contact = {
    phone: '555-555-5555',
    email: 'example@gmail.com',
    address: '123 Example St.',
}

const education = {
    school: 'Example University',
    degree: 'B.S. Computer Science',
    location: 'Example, CA',
    graduation: 'May 2021',
};

const summary = `
    I am a full stack developer with a background in hospitality and customer service. I am passionate about creating user-friendly applications and learning new technologies.
`;

const experience = [
    {
      position: 'Full Stack Developer',
      company: 'Example Company',
      location: 'Example, CA',
      start: 'May 2021',
      end: 'Present',
      description: [
        'Developed a full stack application using React, Node.js, Express, and PostgreSQL.',
        'Implemented a RESTful API to allow users to create, read, update, and delete data.',
        'Designed a responsive user interface using React Bootstrap.',
      ]
    }
]

const personInfo = { name, contact, education, summary, experience };

export default personInfo;