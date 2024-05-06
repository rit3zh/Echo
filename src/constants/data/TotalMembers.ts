export interface Member {
  name: string;
  image: string;
  memberSince?: Date;
  isAdmin?: boolean;
}

export const TotalMembers: Member[] = [
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    memberSince: new Date("2022-01-01"),
    isAdmin: false,
  },
  {
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    memberSince: new Date("2021-11-15"),
    isAdmin: true,
  },
  {
    name: "Michael Johnson",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    memberSince: new Date("2022-02-20"),
    isAdmin: false,
  },
  {
    name: "Emily Brown",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    memberSince: new Date("2021-10-05"),
    isAdmin: false,
  },
  {
    name: "David Wilson",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    memberSince: new Date("2022-03-10"),
    isAdmin: true,
  },
  {
    name: "Sophia Lee",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    memberSince: new Date("2021-09-12"),
    isAdmin: false,
  },
  {
    name: "Matthew Clark",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    memberSince: new Date("2022-04-05"),
    isAdmin: false,
  },
  {
    name: "Olivia Martinez",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    memberSince: new Date("2021-12-20"),
    isAdmin: false,
  },
  // Adding 12 more members
  {
    name: "Ethan Taylor",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    memberSince: new Date("2022-05-15"),
    isAdmin: false,
  },
  {
    name: "Ava Rodriguez",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    memberSince: new Date("2021-08-25"),
    isAdmin: false,
  },
  {
    name: "James Anderson",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    memberSince: new Date("2022-06-10"),
    isAdmin: true,
  },
  {
    name: "Emma Hernandez",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    memberSince: new Date("2021-07-30"),
    isAdmin: false,
  },
  {
    name: "William Martinez",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    memberSince: new Date("2022-07-20"),
    isAdmin: false,
  },
  {
    name: "Mia Lopez",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    memberSince: new Date("2021-06-15"),
    isAdmin: false,
  },
  {
    name: "Alexander Perez",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    memberSince: new Date("2022-08-10"),
    isAdmin: false,
  },
  {
    name: "Isabella Flores",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    memberSince: new Date("2021-05-05"),
    isAdmin: true,
  },
  {
    name: "Daniel Garcia",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    memberSince: new Date("2022-09-05"),
    isAdmin: false,
  },
  {
    name: "Charlotte Wright",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    memberSince: new Date("2021-04-20"),
    isAdmin: false,
  },
  {
    name: "Liam Smith",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    memberSince: new Date("2022-10-15"),
    isAdmin: true,
  },
  {
    name: "Amelia Johnson",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    memberSince: new Date("2021-03-10"),
    isAdmin: false,
  },
];
