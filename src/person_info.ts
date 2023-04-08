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
Organized and dependable candidate successful at managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to meet team goals. Hardworking and passionate job seeker with strong organizational skills eager to secure entry-level [Job Title] position. Ready to help team achieve company goa
`;

const experience = [
  {
    position: 'Front End Developer',
    company: 'Example Company',
    location: 'Seattle, WA',
    start: 'May 2020',
    end: 'May 2021',
    description: [
      'Developed a full stack application using React, Node.js, Express, and PostgreSQL.',
      'Implemented a RESTful API to allow users to create, read, update, and delete data.',
      'Designed a responsive user interface using React Bootstrap.',
    ]
  },
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