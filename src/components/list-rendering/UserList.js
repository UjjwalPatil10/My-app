import { Component } from "react";
const margin = {
  margin: 10,
};
const users = [
  {
    id: 1,
    gender: "male",
    name: { first: "Topper", last: "Skills" },
    mobile: "7875580668",
    email: "topperskills@gmail.com",
    age: 10,
    address: {
      city: "Pune",
      state: "Maharashtra",
      country: "India",
    },
    avatar:
      "https://cdn5.vectorstock.com/i/1000x1000/13/04/male-profile-picture-vector-2041304.jpg",
  },
  {
    id: 2,
    gender: "female",
    name: { first: "aaaa", last: "AAAAAA" },
    mobile: "11111111111",
    email: "aaa@gmail.com",
    age: 20,
    address: {
      city: "mumbai",
      state: "Maharashtra",
      country: "India",
    },
    avatar:
      "https://us.123rf.com/450wm/apoev/apoev1903/apoev190300345/apoev190300345.jpg",
  },
  {
    id: 3,
    gender: "male",
    name: { first: "bbbb", last: "BBBB" },
    mobile: "22222222222",
    email: "bbb@gmail.com",
    age: 10,
    address: {
      city: "Pune",
      state: "Maharashtra",
      country: "India",
    },
    avatar:
      "https://cdn5.vectorstock.com/i/1000x1000/13/04/male-profile-picture-vector-2041304.jpg",
  },
  {
    id: 4,
    gender: "female",
    name: { first: "ccccc", last: "CCCC" },
    mobile: "33333333333",
    email: "ccc@gmail.com",
    age: 40,
    address: {
      city: "nashik",
      state: "Maharashtra",
      country: "India",
    },
    avatar:
      "https://us.123rf.com/450wm/apoev/apoev1903/apoev190300345/apoev190300345.jpg",
  },
  {
    id: 5,
    gender: "male",
    name: { first: "dddd", last: "DDDD" },
    mobile: "555555555555",
    email: "ddd@gmail.com",
    age: 50,
    address: {
      city: "mumbai",
      state: "Maharashtra",
      country: "India",
    },
    avatar:
      "https://cdn5.vectorstock.com/i/1000x1000/13/04/male-profile-picture-vector-2041304.jpg",
  },
  {
    id: 6,
    gender: "female",
    name: { first: "eee", last: "EEEE" },
    mobile: "66666666666",
    email: "eee@gmail.com",
    age: 60,
    address: {
      city: "Pune",
      state: "Maharashtra",
      country: "India",
    },
    avatar:
      "https://us.123rf.com/450wm/apoev/apoev1903/apoev190300345/apoev190300345.jpg",
  },
  {
    id: 7,
    gender: "male",
    name: { first: "ffff", last: "FFFF" },
    mobile: "77777777777",
    email: "fff@gmail.com",
    age: 70,
    address: {
      city: "mumbai",
      state: "Maharashtra",
      country: "India",
    },
    avatar:
      "https://cdn5.vectorstock.com/i/1000x1000/13/04/male-profile-picture-vector-2041304.jpg",
  },
  {
    id: 8,
    gender: "female",
    name: { first: "gggg", last: "GGGG" },
    mobile: "88888888888",
    email: "ggg@gmail.com",
    age: 80,
    address: {
      city: "nashik",
      state: "Maharashtra",
      country: "India",
    },
    avatar:
      "https://us.123rf.com/450wm/apoev/apoev1903/apoev190300345/apoev190300345.jpg",
  },
  {
    id: 9,
    gender: "male",
    name: { first: "hhhh", last: "HHHH" },
    mobile: "9999999999",
    email: "hhh@gmail.com",
    age: 90,
    address: {
      city: "nashik",
      state: "Maharashtra",
      country: "India",
    },
    avatar:
      "https://cdn5.vectorstock.com/i/1000x1000/13/04/male-profile-picture-vector-2041304.jpg",
  },
  {
    id: 10,
    gender: "female",
    name: { first: "iii", last: "III" },
    mobile: "1010101010",
    email: "iii@gmail.com",
    age: 10,
    address: {
      city: "Pune",
      state: "Maharashtra",
      country: "India",
    },
    avatar:
      "https://us.123rf.com/450wm/apoev/apoev1903/apoev190300345/apoev190300345.jpg",
  },
  {
    id: 11,
    gender: "male",
    name: { first: "jjj", last: "JJJJ" },
    mobile: "1212121212",
    email: "jjj@gmail.com",
    age: 15,
    address: {
      city: "Pune",
      state: "Maharashtra",
      country: "India",
    },
    avatar:
      "https://cdn5.vectorstock.com/i/1000x1000/13/04/male-profile-picture-vector-2041304.jpg",
  },
  {
    id: 12,
    gender: "female",
    name: { first: "kkk", last: "KKK" },
    mobile: "2323232323",
    email: "kkk@gmail.com",
    age: 56,
    address: {
      city: "mumbai",
      state: "Maharashtra",
      country: "India",
    },
    avatar:
      "https://us.123rf.com/450wm/apoev/apoev1903/apoev190300345/apoev190300345.jpg",
  },
];
class UserProfile extends Component {
  render() {
    const { name, gender, mobile, email, age, address, avatar, id } =
      this.props; //here we do array destructuring
    return (
      <div
        style={{
          width: 250,
          padding: 5,
          margin: 5,
          border: "1px solid #8889",
          boxShadow: "0 0 3px 1px #999",
        }}
      >
        <img
          style={{ width: "100%", height: 200 }}
          src={avatar}
          alt={name?.first} //alt={name} here name is object in react we cannot use object as a react child element because in object there is a property of different datatypes. we can use array as react child element because it has one datatype with sequence
        />
        <h4>
          {id}-{name?.first} {name?.last}
        </h4>

        <p>Age:{age}</p>
        <p>Gender:{gender}</p>
        <p>Mobile:{mobile}</p>
        <p>Email:{email}</p>
        <p>
          Address:{address?.city},{address?.state},{address?.country}
        </p>
      </div>
    );
  }
}

class UserList extends Component {
  state = {
    //to display a data dynamically for that we have to take that data inside the state={data:[..users]}like this
    data: [...users], // here we use spread operator to access total data(i.e object inside the array) of users. here...users take all object(i.eproperty) inside the array
  };

  handleGender = (gender) => {
    if (gender === "all") {
      this.setState({ data: users });
    } else {
      const arr = users?.filter((u) => u.gender === gender);
      this.setState({
        data: arr,
      });
    }
  };

  handleCity = (city) => {
    if (city === "all") {
      this.setState({ data: users });
    } else {
      const arr = users?.filter((u) => u.address.city.toLowerCase() === city); //here we use .toLowerCase() for case insensitive because in users some city will in upper and lower case
      this.setState({ data: arr });
    }
  };

  handleSearch = (e) => {
    const { value } = e.target;
    const pattern = new RegExp(value, "gi"); //for search operation we use pattern and .test()
    const arr = users?.filter(
      (u) =>
        pattern.test(u.name.first) ||
        pattern.test(u.name.last) ||
        pattern.test(u.mobile) ||
        pattern.test(u.email)
    );
    this.setState({ data: arr });
  };
  render() {
    return (
      <div>
        <h2>List Rendering</h2>
        <hr />
        Gender:
        <button style={margin} onClick={() => this.handleGender("male")}>
          Male
        </button>
        <button style={margin} onClick={() => this.handleGender("female")}>
          Female
        </button>
        <button style={margin} onClick={() => this.handleGender("all")}>
          All
        </button>
        City:
        <button style={margin} onClick={() => this.handleCity("pune")}>
          Pune
        </button>
        <button style={margin} onClick={() => this.handleCity("mumbai")}>
          Mumbai
        </button>
        <button style={margin} onClick={() => this.handleCity("nashik")}>
          Nashik
        </button>
        <button style={margin} onClick={() => this.handleCity("all")}>
          All
        </button>
        <b style={{ fontSize: "20px" }}>Search:</b>
        <input type="text" onChange={this.handleSearch} />
        <hr />
        <section style={{ display: "flex", flexWrap: "wrap" }}>
          {Array.isArray(this.state.data) &&
            this.state.data?.map((user) => (
              <UserProfile key={user.id} {...user} />
            ))}
        </section>
      </div>
    );
  }
}

export default UserList;
