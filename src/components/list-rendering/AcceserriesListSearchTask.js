import React, { Component } from "react";
import "./Category.css";

const categoriesData = [
  {
    id: 1,
    brand: "Iphone",
    price: 81000,
    category: "mobile",
    image:
      "https://i.gadgets360cdn.com/products/large/iphone-14-pro-apple-583x800-1662583181.jpg",
  },
  {
    id: 14,
    brand: "Haier",
    price: 85000,
    category: "refrigeretor",
    image:
      "https://whirlpoolindia.vtexassets.com/arquivos/ids/159213/71850_side_right_1200x1200.png?v=637789975241570000",
  },

  {
    id: 3,
    brand: "Oppo",
    price: 31000,
    category: "mobile",
    image:
      "https://image.oppo.com/content/dam/oppo/in/mkt/phonelist/products/find-x2-blue.png",
  },
  {
    id: 23,
    brand: "Samsung",
    price: 31000,
    category: "AC",
    image:
      "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-bpsq54auaoelmalscue3emt333-20180127122458.jpeg",
  },

  {
    id: 5,
    brand: "Hp Pavillion",
    price: 41000,
    category: "laptop",
    image:
      "https://images.hindustantimes.com/tech/img/2021/12/17/1600x900/DSC_1300_1639757802261_1639757843934.jpg",
  },

  {
    id: 2,
    brand: "Oppo",
    price: 21000,
    category: "mobile",
    image:
      "https://www.thechennaimobiles.com/image/cache/catalog/131095-600x600.jpg",
  },
  {
    id: 7,
    brand: "Lenovo",
    price: 21000,
    category: "laptop",
    image: "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SL1000_.jpg",
  },

  {
    id: 9,
    brand: "Macbook",
    price: 150000,
    category: "laptop",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJWrJi1lQ-qhPOQBkF1aZdWddnJAOxNSpRQ&usqp=CAU",
  },
  {
    id: 22,
    brand: "Hitachi",
    price: 71000,
    category: "AC",
    image:
      "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-bpsq54auaoelmalscue3emt333-20180127122458.jpeg",
  },
  {
    id: 10,
    brand: "samsung",
    price: 40000,
    category: "refrigeretor",
    image:
      "https://static.digit.in/product/a98bae1af9eb5559136f8b089225ee6f5fd4053b.jpeg?tr=w-1200",
  },
  {
    id: 11,
    brand: "whirpool",
    price: 48000,
    category: "refrigeretor",
    image:
      "https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-80010563/80010563.jpg",
  },
  {
    id: 6,
    brand: "Dell XPS",
    price: 81000,
    category: "laptop",
    image:
      "https://images.unsplash.com/photo-1618410320928-25228d811631?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHAlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: 20,
    brand: "Haier",
    price: 65000,
    category: "LCD",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf_vtbY1h6CR29LZ8GLnd9EE4_IKzg6QAktA&usqp=CAU",
  },
  {
    id: 8,
    brand: "acer",
    price: 38000,
    category: "laptop",
    image:
      "https://www.digitaltrends.com/wp-content/uploads/2021/08/dell-xps-15-oled-2021-laptop.jpg?fit=720%2C720&p=1",
  },
  {
    id: 12,
    brand: "LG",
    price: 21000,
    category: "refrigeretor",
    image:
      "https://cdn.vox-cdn.com/thumbor/DCM34mkPzJ0RRPWJZPxvpOOPOTA=/0x0:2500x1667/1400x1400/filters:focal(1250x834:1251x835)/cdn.vox-cdn.com/uploads/chorus_asset/file/19568996/Family_Hub_CES2020_Black__1_.jpg",
  },
  {
    id: 18,
    brand: "LG",
    price: 212000,
    category: "LCD",
    image:
      "https://i.rtings.com/assets/products/S9RCeTlN/sony-x95j/design-small.jpg",
  },

  {
    id: 4,
    brand: "Samsung",
    price: 21000,
    category: "mobile",
    image:
      "https://images.samsung.com/is/image/samsung/assets/bd/2302/pcd/smartphones/PCD_B_KV_Merchandising_192x192_mo.png?$192_192_PNG$",
  },

  {
    id: 15,
    brand: "Samsung",
    price: 24000,
    category: "LCD",
    image:
      "https://4.imimg.com/data4/BU/QS/GLADMIN-184312/samsung-lcd-tv-250x250.jpg",
  },

  {
    id: 13,
    brand: "Godrej",
    price: 21000,
    category: "refrigeretor",
    image:
      "https://www.onedios.com/blog/wp-content/uploads/2021/05/2146-scaled.jpg",
  },
  {
    id: 17,
    brand: "One+",
    price: 31000,
    category: "LCD",
    image: "https://m.media-amazon.com/images/I/91WgH7--G1S._SL1500_.jpg",
  },

  {
    id: 24,
    brand: "LG",
    price: 41000,
    category: "AC",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0L030Jvk-IIR4wnQo102yJRJTUBCwkAuwhFl8Wx3GF7Uj1tD7MkLipvqQnVvQZWPT2hM&usqp=CAU",
  },

  {
    id: 16,
    brand: "Redmi",
    price: 18000,
    category: "LCD",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxj1FZosUlmTwLVOvMFtqxjXbQ0q9JPBonJG1flxO5th_m_rPqugvUMOINwPkzKY2mn08&usqp=CAU",
  },
  {
    id: 19,
    brand: "Toshiba",
    price: 51000,
    category: "LCD",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSkyw8xmBXxDASpPQx6P88Pj-BYr0S3jJ_ig&usqp=CAU",
  },

  {
    id: 21,
    brand: "LG",
    price: 41000,
    category: "AC",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0L030Jvk-IIR4wnQo102yJRJTUBCwkAuwhFl8Wx3GF7Uj1tD7MkLipvqQnVvQZWPT2hM&usqp=CAU",
  },
];

class CategoryProfile extends Component {
  render() {
    const { image, brand, price, category } = this.props;
    return (
      <div
        className="main"
        style={{
          width: 280,
          margin: 20,
          padding: 20,
          height: 380,
          border: "2px solid #9999",
          transition: "1s",
          boxShadow: "3px 5px 6px #9999",
        }}
      >
        <img
          src={image}
          style={{ width: "100%", height: "60%", cursor: "pointer" }}
          alt="img"
        />
        <h4>Brand: {brand}</h4>
        <h4>Price: &#x20B9; {price}</h4>
        <h4>Category: {category}</h4>
      </div>
    );
  }
}

class CategoryMain extends Component {
  state = {
    category: "all",
    categoriesData: [...categoriesData],
  };

  handleSearch = (e) => {
    const { value } = e.target;

    const pattern1 = new RegExp(value, "gi");

    const arr = categoriesData?.filter(
      (u) =>
        pattern1.test(u.brand) ||
        pattern1.test(u.category) ||
        pattern1.test(u.price)
    );
    this.setState({ categoriesData: arr });
  };
  render() {
    return (
      <section>
        <button
          onClick={() => this.setState({ category: "mobile" })}
          style={{ marginRight: 10 }}
        >
          Mobile
        </button>
        <button
          onClick={() => this.setState({ category: "laptop" })}
          style={{ marginRight: 10 }}
        >
          Laptop
        </button>
        <button
          onClick={() => this.setState({ category: "refrigeretor" })}
          style={{ marginRight: 10 }}
        >
          Refrigerators
        </button>
        <button
          onClick={() => this.setState({ category: "LCD" })}
          style={{ marginRight: 10 }}
        >
          LCD
        </button>
        <button
          onClick={() => this.setState({ category: "AC" })}
          style={{ marginRight: 10 }}
        >
          AC
        </button>
        <button
          onClick={() => this.setState({ category: "all" })}
          style={{ marginRight: 10 }}
        >
          ALL Electronics
        </button>
        Search-:
        <input type="text" onChange={this.handleSearch} />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {Array.isArray(this.state.categoriesData) &&
            this.state.categoriesData
              .filter(
                (item) =>
                  this.state.category.toLowerCase() === "all" ||
                  this.state.category.toLowerCase() ===
                    item.category.toLowerCase()
              )
              .map((item, i) => <CategoryProfile key={item.id} {...item} />)}
        </div>
      </section>
    );
  }
}

export default CategoryMain;
