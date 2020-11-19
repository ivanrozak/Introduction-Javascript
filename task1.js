const biodata ={
    name:'Ivan Rozak',
    age: 25,
    hobbies: ['gaming', 'photoraphy', 'coding'],
    isMarried: false,
    schoolList:[
        {
            name: 'SDN Kendalkemlagi',
            yearIn: '2001',
            yearOut: '2006',
            major: null,
        },
        {
            name: 'SMPN 1 Karanggeneng',
            yearIn: '2007',
            yearOut: '2009',
            major: null,
        },
        {
            name: 'SMAN 1 Sekaran',
            yearIn: '2010',
            yearOut: '2012',
            major: 'IPA',
        },
        {
            name: 'Universitas 17 Agustus Surabaya',
            yearIn: '2016',
            yearOut: '2020',
            major: 'Teknik Informatika',
        },
    ],
    skills: [
        {
            skillName: 'HTML',
            level: 'beginner',
        },
        {
            skillName: 'CSS',
            level: 'beginner',
        },
        {
            skillName: 'PHP',
            level: 'beginner',
        },
        {
            skillName: 'Javascript',
            level: 'beginner',
        },
    ],
    interestInCoding: true
}

console.log(biodata)