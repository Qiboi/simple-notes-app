const getData = () => {
    return [
        {
            id: 1,
            title: 'Belajar React',
            body: 'React adalah library untuk membangun UI yang interaktif. Fokus hari ini adalah memahami komponen dan props.',
            archived: false,
            createdAt: new Date('2024-12-01T08:00:00Z').toISOString(),
        },
        {
            id: 2,
            title: 'Latihan JavaScript',
            body: 'Menyelesaikan 10 soal di platform coding online untuk memperkuat logika pemrograman.',
            archived: false,
            createdAt: new Date('2024-12-02T10:30:00Z').toISOString(),
        },
        {
            id: 3,
            title: 'Meeting Proyek Akhir',
            body: 'Diskusi dengan tim mengenai milestone yang perlu dicapai minggu ini.',
            archived: true,
            createdAt: new Date('2024-12-03T14:00:00Z').toISOString(),
        },
        {
            id: 4,
            title: 'Review PR di GitHub',
            body: 'Melakukan code review pada pull request untuk fitur baru di aplikasi.',
            archived: false,
            createdAt: new Date('2024-12-04T16:00:00Z').toISOString(),
        },
        {
            id: 5,
            title: 'Belajar Tailwind CSS',
            body: 'Mencoba membuat layout grid dan form yang responsif menggunakan Tailwind CSS.',
            archived: true,
            createdAt: new Date('2024-12-05T09:15:00Z').toISOString(),
        }
    ];
}

export { getData };
