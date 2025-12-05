import BeeLogo from "../assets/mason-bee-circle.png";

export default function BeeSupplies() {
  const products = [
    {
      id: 1,
      name: "Bamboo Nesting Tubes (50 pack)",
      price: "$14.99",
      description: "Natural, breathable tubes perfect for mason bee nesting.",
      image: BeeLogo,
    },
    {
      id: 2,
      name: "Redwood Bee House Starter Block",
      price: "$24.99",
      description: "Hand-cut redwood block with drilled nesting holes.",
      image: BeeLogo,
    },
    {
      id: 3,
      name: "Full Mason Bee Starter Kit",
      price: "$99.00",
      description:
        "Everything you need: house, tubes, temperature sensor, and guidebook.",
      image: BeeLogo,
    },
    {
      id: 4,
      name: "Arducam IMX519 Camera Module (16MP)",
      price: "$39.99",
      description: "Recommended camera module for station livestreams.",
      image: BeeLogo,
    },
    {
      id: 5,
      name: "Raspberry Pi Zero 2 W",
      price: "$15.00",
      description:
        "Low-power brain of the Bee Station with WiFi support.",
      image: BeeLogo,
    },
    {
      id: 6,
      name: "Digital Temp/Humidity Sensor",
      price: "$9.99",
      description:
        "Tracks environmental conditions inside your bee house.",
      image: BeeLogo,
    },
    {
      id: 7,
      name: "Mason Bee House Mounting Kit",
      price: "$6.50",
      description:
        "Includes screws, brackets, and instructions for pole or post mounting.",
      image: BeeLogo,
    },
    {
      id: 8,
      name: "Cocoon Storage Humidity Pack",
      price: "$4.25",
      description:
        "Maintains ideal humidity conditions during overwintering.",
      image: BeeLogo,
    },
  ];

  return (
    <div className="min-h-screen bg-green-50 text-gray-900 p-10">

      {/* HEADER */}
      <div className="text-center mb-14">
        <img
          src={BeeLogo}
          alt="Bee Supplies"
          className="w-20 mx-auto mb-4 opacity-90"
        />

        <h1 className="text-5xl font-bold text-green-900 mb-4">
          Bee Supplies Store
        </h1>

        <p className="text-lg max-w-2xl mx-auto text-green-800">
          All the tools and accessories you need to support your mason bees —
          from nesting tubes to camera sensors. Club members get discounts!
        </p>
      </div>


      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow border border-green-200 overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain p-4"
            />

            <div className="p-6">
              <h2 className="text-xl font-semibold text-green-900 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-700 mb-4">{product.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-green-800 font-bold">{product.price}</span>
                <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>


      {/* FOOTER */}
      <div className="text-center mt-16 text-green-900">
        <p>
          Need help choosing supplies?
          <span className="font-semibold"> Talk to a Bee Tender Mentor!</span>
        </p>
      </div>
    </div>
  );
}

