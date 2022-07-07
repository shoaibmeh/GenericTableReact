import DataTable from './components/DataTable.tsx';
import { Route, Routes } from "react-router-dom";
import SecondTable from './components/SecondTable';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <>
      <SideBar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/DataTable' element={<><DataTable asers= {Users} /></>} />
        <Route path='/SecondTable' element={<SecondTable/>} />
      </Routes>
    </>
  );
}


const Users = [
  {
      "id": "1",
      "first_name": 'samad' ,
      "last_name": "Jonsan",
      "dob": "1/27/1997",
      "phone": "(231) 965-3258",
      "address": "8051 Lopez Blvd, Parkerville HI 18862"
  },
  {
      "id": "2",
      "first_name": "Peter",
      "last_name": "Parker",
      "dob": "2/17/2015",
      "phone": "(471) 976-9058",
      "address": "6134 Copeland Cir, Guadalupeburg NJ 87612"
  },
  {
      "id": "3",
      "first_name": "Eloise",
      "last_name": "Yvonne",
      "dob": "6/26/2000",
      "phone": "(531) 853-1145",
      "address": "6669 Glover Cir, Guadalupeburg TX 36617"
  },
  {
      "id": "4",
      "first_name": "Steve",
      "last_name": "Jobs",
      "dob": "11/15/2001",
      "phone": "(377) 836-7921",
      "address": "5492 Wilkins Pl, Copelandville NC 8403"
  },
  {
      "id": "5",
      "first_name": "Wilkins",
      "last_name": "Guadalupe",
      "dob": "6/16/2009",
      "phone": "(250) 147-1615",
      "address": "6728 Bishop Cir, Smithtown NJ 15077"
  },
  {
      "id": "6",
      "first_name": "Yvonne ",
      "last_name": "Darin",
      "dob": "11/24/2008",
      "phone": "(754) 759-1495",
      "address": "9739 Lela Cir, Wilkinsburg KS 34705"
  },
  {
      "id": "7",
      "first_name": "Lela",
      "last_name": "Simon",
      "dob": "1/9/2004",
      "phone": "(733) 594-6604",
      "address": "6680 Wilkins Dr, Lelaburg ID 30395"
  },
  {
      "id": "8",
      "first_name": "Tucker ",
      "last_name": "Calvin",
      "dob": "1/6/2009",
      "phone": "(708) 339-4922",
      "address": "2372 Glover Dr, Parkertown ME 90096"
  },
  {
      "id": "9",
      "first_name": "Lopez  ",
      "last_name": "Guadalupe",
      "dob": "4/23/2016",
      "phone": "(361) 257-5456",
      "address": "1281 Miles St, Calvinburg CA 35961"
  },
  {
      "id": "10",
      "first_name": "Copeland  ",
      "last_name": "Lucille",
      "dob": "5/8/2010",
      "phone": "(309) 124-2658",
      "address": "5778 Lucille St, Gloverburg OH 13900"
  },
  {
      "id": "11",
      "first_name": "Deanna  ",
      "last_name": "Luis",
      "dob": "3/7/2006",
      "phone": "(302) 384-6515",
      "address": "7684 Deanna St, Parkertown VA 88313"
  },
  {
      "id": "12",
      "first_name": "Yvonne  ",
      "last_name": "Eloise",
      "dob": "7/7/2013",
      "phone": "(793) 187-1608",
      "address": "1087 Yvonne Pl, Lucilleburg VA 68220"
  },
  {
      "id": "13",
      "first_name": "Guadalupe   ",
      "last_name": "Lucille",
      "dob": "10/9/2012",
      "phone": "(362) 466-2099",
      "address": "1912 Luis Cir, Copelandburg ME 79451"
  },
  {
      "id": "14",
      "first_name": "Glover",
      "last_name": "Copeland",
      "dob": "9/3/2018",
      "phone": "(870) 699-5021",
      "address": "1386 Lela Blvd, Copelandburg MS 46417"
  },
  {
      "id": "15",
      "first_name": "Simon",
      "last_name": "Lela",
      "dob": "5/17/2007",
      "phone": "(403) 262-1769",
      "address": "866 Parker Pl, Calvinville WV 91635"
  },
  {
      "id": "16",
      "first_name": "Copeland",
      "last_name": "Simon",
      "dob": "6/18/2003",
      "phone": "(930) 871-8717",
      "address": "482 Lucille Dr, Parkerburg CO 96978"
  },
  {
      "id": "17",
      "first_name": "Aystra   ",
      "last_name": "julio",
      "dob": "5/17/2000",
      "phone": "(220) 488-8364",
      "address": "1042 Lopez St, Parkerville WA 21363"
  },
  {
      "id": "18",
      "first_name": "Miles   ",
      "last_name": "Lela",
      "dob": "4/23/2002",
      "phone": "(934) 829-7163",
      "address": "2471 Calvin Dr, Bishoptown GA 60655"
  },
  {
      "id": "19",
      "first_name": "weasor",
      "last_name": "julio",
      "dob": "6/26/2000",
      "phone": "20",
      "address": "2453 keil Dr, Bishoptown GA 60655"
  }
  ,
  {
      "id": "20",
      "first_name": "zodii",
      "last_name": "aopsmu",
      "dob": "8/26/2010",
      "phone": "200219088",
      "address": "2223 keil Dr, Bishoptown GA 60655"
  }
]

export default App;
