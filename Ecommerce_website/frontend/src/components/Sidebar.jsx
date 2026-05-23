import {
  FaTshirt,
  FaMobileAlt,
  FaLaptop,
  FaHeadphones,
  FaClock,
  FaGamepad,
  FaCamera,
  FaShoppingBag
} from "react-icons/fa";

function Sidebar() {

  const categories = [
    { icon: <FaTshirt />, name: "Fashion" },
    { icon: <FaMobileAlt />, name: "Mobiles" },
    { icon: <FaLaptop />, name: "Electronics" },
    { icon: <FaHeadphones />, name: "Accessories" },
    { icon: <FaClock />, name: "Watches" },
    { icon: <FaGamepad />, name: "Gaming" },
    { icon: <FaCamera />, name: "Cameras" },
    { icon: <FaShoppingBag />, name: "Bags" }
  ];

  return (

    <div
      style={{
        width: "250px",
        background: "white",
        borderRadius: "15px",
        padding: "20px",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.1)"
      }}
    >

      <h3
        style={{
          marginBottom: "20px",
          color: "#673ab7",
          fontWeight: "bold"
        }}
      >
        Categories
      </h3>

      {categories.map((cat, index) => (

        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "0.3s",
            background: "#f8f8f8"
          }}
          onMouseEnter={(e) =>
            e.currentTarget.style.background = "#ede7f6"
          }
          onMouseLeave={(e) =>
            e.currentTarget.style.background = "#f8f8f8"
          }
        >

          <span
            style={{
              fontSize: "20px",
              color: "#673ab7"
            }}
          >
            {cat.icon}
          </span>

          <span
            style={{
              fontWeight: "500"
            }}
          >
            {cat.name}
          </span>

        </div>

      ))}

    </div>

  );
}

export default Sidebar;