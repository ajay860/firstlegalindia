const express = require("express");
const cors = require("cors");

const adminRoutes = require("./routes/admin.routes")
const contactRoutes = require('./routes/contact.routes');

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./services/swagger");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRoutes)
app.use('/contact-us', contactRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
  console.log("Swagger Docs available at http://localhost:5000/api-docs");
});
